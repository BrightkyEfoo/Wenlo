import { ReactElement, useState } from 'react';
import imageService from '../../../utils/ImageService';
import styles from './ChoosePaymentMethod.module.scss';
import PopPaymentMethod from './popUp/PopPaymentMethod';

const images = imageService.getImages();

function ChoosePaymentMethod() {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    setIsSubmit(true);
  };
  return (
    <>
      <div className={styles.container}>
      {isSubmit ? <PopPaymentMethod handleClose={()=>setIsSubmit(false)}/> : ''}
        <div className={styles.headerTitles}>
          <img src={images['wenlo-logo']} alt="logo" />
          <h1>Choose Payment Method</h1>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip.
          </p>
        </div>
        <div className={styles.blockBody}>
          <div>
            <h2>Premium Plan</h2>
            <span>Save up to 15%</span>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <span>$14.99</span> (Next renew 24 April 2024)
            </div>
          </div>
          <span>
            Choose payment method<span style={{ color: 'red' }}>*</span>
          </span>
          <div>
            <p>
              After choosed the payment method of your choice make the payment
              according to the detils display below.
            </p>
            <div>
              <span>Debit Card</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M6.99935 9.33366L9.33268 7.00033M9.33268 7.00033L6.99935 4.66699M9.33268 7.00033H4.66602M12.8327 7.00033C12.8327 10.222 10.221 12.8337 6.99935 12.8337C3.77769 12.8337 1.16602 10.222 1.16602 7.00033C1.16602 3.77866 3.77769 1.16699 6.99935 1.16699C10.221 1.16699 12.8327 3.77866 12.8327 7.00033Z"
                  stroke="#26283F"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <LabelInput label="Card holdername" placeholder="Gabriela Hudges" />
            <LabelInput
              label="Card number"
              placeholder="4591 6456 5656 5645"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M6.99935 9.33366L9.33268 7.00033M9.33268 7.00033L6.99935 4.66699M9.33268 7.00033H4.66602M12.8327 7.00033C12.8327 10.222 10.221 12.8337 6.99935 12.8337C3.77769 12.8337 1.16602 10.222 1.16602 7.00033C1.16602 3.77866 3.77769 1.16699 6.99935 1.16699C10.221 1.16699 12.8327 3.77866 12.8327 7.00033Z"
                    stroke="#26283F"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
            <LabelInput label="Expiration date" placeholder="10/27" />
            <LabelInput label="CVC" placeholder="123" />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

const LabelInput = ({
  label,
  placeholder,
  icon,
}: {
  label: string;
  placeholder: string;
  icon?: ReactElement;
}) => {
  return (
    <>
      {icon ? (
        <div className={styles.labelInputIcon}>
          <label>{label}</label>
          <div>
            <input type="text" placeholder={placeholder} disabled />
            {icon}
          </div>
        </div>
      ) : (
        <div className={styles.labelInput}>
          <label>{label}</label>
          <input type="text" placeholder={placeholder} disabled />
        </div>
      )}
    </>
  );
};
export default ChoosePaymentMethod;
