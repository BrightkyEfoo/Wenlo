import React, { useState } from 'react';
import Emitter from '../../../utils/EventEmitter/EventEmitter';
import styles from './MainBalanceWithdrawal.module.scss';
import { FiCopy } from 'react-icons/fi';
import { CiImageOn } from 'react-icons/ci';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import imageService from '../../../utils/ImageService';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { PaymentMethod } from '../../../utils/PaymentMethods';
import { useAppSelector } from '../../../redux/hooks';
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
        <input type="text" name="address" />
        <FiCopy />
      </div>
    </>
  );
};

const BankWire = () => {
  return (
    <>
      <label>Beneficiery Name</label>
      <input
        type="text"
        placeholder="Enter your Beneficiery Name"
        name="beneficiary_name"
      />
      <label>Account Number</label>
      <input
        type="text"
        placeholder="Enter your Account Number"
        name="account_number"
      />
      <label>SWIFT Code</label>
      <input
        type="text"
        placeholder="Enter your SWIFT Code"
        name="swift_code"
      />
      <label>Account Address</label>
      <input
        type="text"
        placeholder="Enter your Account Address"
        name="account_address"
      />
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
      <input type="text" placeholder="Enter your Bank Name" name="bank_name" />
      <label>Bank Address</label>
      <input
        type="text"
        placeholder="Enter your Bank Address"
        name="bank_address"
      />
      <label>Routing (ABA)</label>
      <input type="text" placeholder="Enter your Routing (ABA)" name="routin" />
      <label>Account Number</label>
      <input
        type="text"
        placeholder="Enter your Account Number"
        name="account_number"
      />
      <label>Account Type</label>
      <input
        type="text"
        placeholder="Enter your Account Type"
        name="account_type"
      />
      <label>Beneficiary Name</label>
      <input
        type="text"
        placeholder="Enter your Beneficiary Name"
        name="beneficiary_name"
      />
    </>
  );
};

const CreditCard = () => {
  return (
    <>
      <span>Address</span>
      <div className={styles.bankAddressInputContainer}>
        <input type="text" name="address" />
        <FiCopy />
      </div>
    </>
  );
};

const MainBalanceWithdrawal = () => {
  const user = useAppSelector(state => state.user);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [formData, setFormData] = useState<
    FormData & {
      [key: string]: any;
    }
  >({
    bank: 'USDTTRC20',
    address: '',
    amount: '',
    reference: '',
    image: undefined,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formElement = e.target as HTMLFormElement;
      if (!formElement) return;
      // Récupérer tous les champs du formulaire
      const form = new FormData(formElement);

      // Créer un objet pour stocker les valeurs des champs
      const formValues: {
        [key: string]: any;
      } = {};

      // Parcourir tous les champs
      form.forEach(function (value, key) {
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
        ...formValues,
        amount: parseInt(formValues.amount),
        transaction_id: formValues.transaction_id,
        // transaction_link: formValues.transaction_link || 'http://link.fr',
        type: 'withdrawal',
      };

      console.log('dataToSend', dataToSend);

      // const formToSend = new FormData();

      // Object.keys(dataToSend).map(el => {
      //   // @ts-ignore
      //   formToSend.append(el, dataToSend[el]);
      // });

      // if (file) formToSend.append('fichier', file);
      // formToSend.append('type', 'deposit');
      const res = await transactionService.addTransaction(dataToSend);

      console.log(res);
      if (res[0] !== 0) {
        throw new Error(res[1]);
      }
      emitter.emit(eventsNames.SET_ALERT_DATA, {
        state: 'success',
        title: 'Succesfully!',
        desc:
          res[1].message ||
          'Your withdrawal request will be processed immediately, it will take 1-2 weeks',
      });
      setIsAlertVisible(true);
    } catch (error) {
      console.error(error);

      emitter.emit(eventsNames.SET_ALERT_DATA, {
        state: 'error',
        title: 'Error!',
        desc: 'Your withdrawal request has failed',
      });
      setIsAlertVisible(true);
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
                src={images['credit-card-download']}
                alt="credit-card-plus"
                height={40}
                width={40}
              />
            </div>
            <h2>Withdrawal Balance</h2>
          </div>

          <span>
            Amount of the withdrawal in $<span style={{ color: 'red' }}>*</span>
          </span>
          <input type="number" placeholder="Enter your Amount" name="amount" />

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

          <button type="submit">Submit</button>
        </form>
      </div>
      <Alert isVisible={isAlertVisible} />
    </>
  );
};

type AlertState = {
  state: 'success' | 'error';
  title: string;
  desc: string;
};

const Alert = ({ isVisible }: { isVisible: boolean }) => {
  const [data, setData] = useState<AlertState>({
    state: 'success',
    title: '',
    desc: '',
  });

  emitter.on(eventsNames.SET_ALERT_DATA, (eventData: AlertState) => {
    setData(() => eventData);
  });

  const handleGoBack = () => {
    emitter.emit(eventsNames.CLOSE_ALERT, undefined);
  };
  return isVisible ? (
    <div
      className={styles.alertContainer}
      onClick={e => {
        if (e.target === e.currentTarget) handleGoBack();
      }}
    >
      <div className={styles.alertSubContainer}>
        {data.state === 'success' ? <FaCircleCheck size={80} color="#1CB465" /> : <FaCircleXmark size={80} color="#e4641a"  /> }
        <span>{data.title}</span>
        <span>{data.desc}</span>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  ) : null;
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

export default MainBalanceWithdrawal;
