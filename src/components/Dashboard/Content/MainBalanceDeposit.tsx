import React, { useRef, useState } from 'react';
import Emitter from '../../../utils/EventEmitter/EventEmitter';
import styles from './MainBalanceDeposit.module.scss';
import { FiCopy } from 'react-icons/fi';
import { CiImageOn } from 'react-icons/ci';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import imageService from '../../../utils/ImageService';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { useAppSelector } from '../../../redux/hooks';
import { PaymentMethod } from '../../../utils/PaymentMethods';
import transactionService from '../../../Services/Balance-Management/Transaction';

const images = imageService.getImages();
const emitter = new Emitter();
const eventsNames = {
  SET_BANK: 'SET_BANK',
  CLOSE_ALERT: 'CLOSE_ALERT',
  SET_ALERT_DATA: 'SET_ALERT_DATA',
};

type FormData = {
  bank: string;
  address: string;
  amount: string;
  reference: string;
  image: any;
};
const RenderBankNeededDetails = (bankvalue: string) => {
  switch (bankvalue) {
    case 'USDTTRC20':
      return <USDTTRC20Inputs />;
    case 'BankWire':
      return <BankWire />;
    case 'Payoneer':
      return <Payoneer />;
    case 'Wise':
      return <Wise />;
    case 'CreditCard':
      return <CreditCard />;
    default:
      return 'Yo';
  }
};

const banks = [
  {
    text: 'USDT TRC20',
    value: 'USDTTRC20',
  },
  {
    text: 'Bank Wire (USD)',
    value: 'BankWire',
  },
  {
    text: 'Payoneer',
    value: 'Payoneer',
  },
  {
    text: 'Wise',
    value: 'Wise',
  },
  {
    text: 'Credit Card',
    value: 'CreditCard',
  },
];

const USDTTRC20Inputs = () => {
  return (
    <>
      <span>USDT TRC20 Address</span>
      <div className={styles.bankAddressInputContainer}>
        <input type="text" name="TRC20" />
        <FiCopy />
      </div>
    </>
  );
};

const BankWire = () => {
  return (
    <>
      <label>Beneficiery Name</label>
      <input type="text" placeholder="Enter your Beneficiery Name" />
      <label>Account Number</label>
      <input type="text" placeholder="Enter your Account Number" />
      <label>SWIFT Code</label>
      <input type="text" placeholder="Enter your SWIFT Code" />
      <label>Account Address</label>
      <input type="text" placeholder="Enter your Account Address" />
    </>
  );
};

const Payoneer = () => {
  return (
    <>
      <label>Payoneer Email address</label>
      <input type="email" placeholder="Enter your Email" />
    </>
  );
};

const Wise = () => {
  return (
    <>
      <label>Email</label>
      <input type="text" placeholder="Enter your Email" name="email" />
      <label>Bank Name</label>
      <input type="text" placeholder="Enter your Bank Name" />
      <label>Bank Address</label>
      <input type="text" placeholder="Enter your Bank Address" />
      <label>Routing (ABA)</label>
      <input type="text" placeholder="Enter your Routing (ABA)" />
      <label>Account Number</label>
      <input type="text" placeholder="Enter your Account Number" />
      <label>Account Type</label>
      <input type="text" placeholder="Enter your Account Type" />
      <label>Beneficiary Name</label>
      <input type="text" placeholder="Enter your Beneficiary Name" />
    </>
  );
};

const CreditCard = () => {
  return (
    <>
      <span>Credit card Address</span>
      <div className={styles.bankAddressInputContainer}>
        <input type="text" />
        <FiCopy />
      </div>
    </>
  );
};

const MainBalanceDeposit = () => {
  const user = useAppSelector(state => state.user);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    bank: 'USDTTRC20',
    address: '',
    amount: '',
    reference: '',
    image: undefined,
  });
  const [alertState, setAlertState] = useState<AlertState>({
    state: 'success',
    title: 'Succesfully!',
    desc: 'Your deposit request was sent successfully',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form) return;
    // Récupérer tous les champs du formulaire
    const formdata = new FormData(form);

    // Créer un objet pour stocker les valeurs des champs
    const formValues: {
      [key: string]: any;
    } = {};

    // Parcourir tous les champs
    formdata.forEach(function (value, key) {
      formValues[key] = value;
    });

    // Afficher les valeurs des champs dans la console (à titre d'exemple)
    let bank = 0;
    switch (formData.bank) {
      case 'USDTTRC20':
        bank = PaymentMethod.USDT;
        break;
      case 'BankWire':
        bank = PaymentMethod.BANK_WIRE;
        break;
      case 'Payoneer':
        bank = PaymentMethod.PAYONEER;
        break;
      case 'Wise':
        bank = PaymentMethod.WISE;
        break;
      case 'CreditCard':
        bank = PaymentMethod.CREDIT_CARD;
        break;
      default:
        bank = PaymentMethod.USDT;
        break;
    }
    const dataToSend = {
      user: user.id,
      pay_method: bank,
      amount: formValues.amount,
      transaction_id: formValues.transaction_id,
      transaction_link: formValues.transaction_link || 'http://link.fr',
    };

    const formToSend = new FormData();

    Object.keys(dataToSend).map(el => {
      // @ts-ignore
      formToSend.append(el, dataToSend[el]);
    });

    if (file) formToSend.append('fichier', file);
    formToSend.append('type', 'deposit');
    const res = await transactionService.addTransaction(formToSend);
    setIsAlertVisible(true);
    if (res[0] === 0) {
      setAlertState({
        state: 'success',
        title: 'Succesfully!',
        desc: 'Your deposit request was sent successfully',
      });
    } else {
      setAlertState({
        state: 'error',
        title: 'Error!',
        desc: "Your deposit request wasn't sent!",
      });
    }
  };

  emitter.on(eventsNames.SET_BANK, (value: string) => {
    setFormData(prev => {
      let temp = { ...prev };
      temp.bank = value;
      return temp;
    });
  });

  emitter.on(eventsNames.CLOSE_ALERT, () => {
    setIsAlertVisible(false);
  });

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.subContainer}>
          <div>
            <div className={styles.logoContainer}>
              <img
                src={images['credit-card-plus']}
                alt="credit-card-plus"
                height={40}
                width={40}
              />
            </div>
            <h2>Deposit Balance</h2>
          </div>
          <span>
            Choosed payment method<span style={{ color: 'red' }}>*</span>
          </span>
          <div className={styles.section1}>
            <span>
              After choosed the payment method of your choice, make the payment
              according to the details displayed below.
            </span>
            <div className={styles.banksContainer}>
              {banks.map((el, idx) => {
                return (
                  <BlockRadio
                    key={'blockRadio-Bank' + idx}
                    {...el}
                    selected={formData.bank === el.value}
                  />
                );
              })}
            </div>
            {RenderBankNeededDetails(formData.bank)}
          </div>
          <span>
            Amount of the deposit in $<span style={{ color: 'red' }}>*</span>
          </span>
          <input type="number" placeholder="Enter your Amount" name="amount" />
          <div>
            <span>
              Transaction reference<span style={{ color: 'red' }}>*</span>
            </span>
            <span>(Provide the transaction ID your payment)</span>
          </div>
          <input
            type="text"
            placeholder="Enter your transaction reference"
            name="transaction_id"
          />
          <span>Payment proof (Image or Pdf file)</span>
          <div
            className={styles.proofContainer}
            onClick={() => {
              if (!file) {
                fileInputRef.current?.click();
              } else {
                setFile(null);
              }
            }}
          >
            <CiImageOn size={24} />
            <p>
              <span style={{ color: '#3949A1', cursor: 'pointer' }}>
                {file ? file.name : 'Click to Upload'}
              </span>{' '}
              {!file && (
                <>
                  <span>or drag and drop </span>
                  <br />
                  <span>DOC, PDF, PNG or JPG (max 10mb)</span>
                </>
              )}
            </p>
            <input
              hidden
              type="file"
              ref={fileInputRef}
              onChange={e => {
                if (e.target.files) setFile(e.target.files[0]);
              }}
            />
          </div>
          <span className={styles.warranty}>
            <AiOutlineExclamationCircle />
            Take a few secondes to verify filled informations, in order to avoid
            erros and request rejection !!
          </span>
          <button>Submit</button>
        </form>
      </div>
      {isAlertVisible && <Alert data={alertState} />}
    </>
  );
};

type AlertState = {
  state: 'success' | 'error';
  title: string;
  desc: string;
};

const Alert = ({ data }: { data: AlertState }) => {
  const handleGoBack = () => {
    emitter.emit(eventsNames.CLOSE_ALERT, undefined);
  };
  return (
    <div
      className={styles.alertContainer}
      onClick={e => {
        if (e.target === e.currentTarget) handleGoBack();
      }}
    >
      <div
        className={
          styles.alertSubContainer +
          ` ${data.state === 'error' ? styles.alertSubContainerError : ''}`
        }
        style={{ color: data.state === 'success' ? 'green' : 'red' }}
      >
        {data.state === 'success' ? (
          <FaCircleCheck size={80} color="#1CB465" />
        ) : (
          <FaCircleXmark size={80} color="red" />
        )}
        <span>{data.title}</span>
        <span>{data.desc}</span>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

const BlockRadio = ({
  text,
  value,
  selected,
}: {
  text: string;
  value: string;
  selected?: boolean;
}) => {
  const handleClick = () => {
    emitter.emit(eventsNames.SET_BANK, value);
  };
  return (
    <div
      className={
        selected
          ? styles.blockRadioContainerSelected
          : styles.blockRadioContainerNotSelected
      }
      onClick={handleClick}
    >
      <div
        className={
          selected ? styles.blockRadioSelected : styles.blockRadioNotSelected
        }
      ></div>
      <span>{text}</span>
    </div>
  );
};

export default MainBalanceDeposit;
