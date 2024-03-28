import React from 'react';
import styles from './PopPaymentMethod.module.scss';
import { FaXmark } from 'react-icons/fa6';

const PopPaymentMethod = ({ handleClose }: { handleClose: () => void }) => {
  const handleClick = () => {
    handleClose();
  };
  return (
    <div
      className={styles.popUp}
      onClick={e => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span>Invoice</span>
            <span>#8FB28438-0001</span>
          </div>
          <span>Thank you for subsription plan!</span>
          <button onClick={handleClick}>
            <FaXmark />
          </button>
        </div>
        <div className={styles.firstBody}>
          <span>Customer</span>
          <p>Gabriela Hudges</p>
          <span>Email</span>
          <p>Gabrielahudges@gmail.com</p>
          <span>Receipt #</span>
          <p>901839810</p>
          <span>Date Paid</span>
          <p>April 24, 2023</p>
          <span>Payment Method</span>
          <p>Visacard</p>
          <span>Card Number</span>
          <p>**** **** **** 5645</p>
          <span>Type Plan</span>
          <p>Monthly</p>
          <span>Plan</span>
          <p>Premium Plan</p>
        </div>
        <div className={styles.secondBody}>
          <div>
            <p>Premium Plan</p>
            <p>$14.99</p>
            <span>Subsription Plan</span>
            <span>User (1)</span>
          </div>
          <div>
            <span>Subtotal</span>
            <p>$14.99</p>
            <span>Sales Tax (3%)</span>
            <p>$4.49</p>
            <p>Total</p>
            <p>$20.48</p>
          </div>
        </div>
        <div>
          <div className={styles.warningMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0001 7.50019V10.8335M10.0001 14.1669H10.0085M8.84622 3.24329L1.99215 15.0821C1.61198 15.7388 1.42189 16.0671 1.44999 16.3366C1.47449 16.5716 1.59763 16.7852 1.78876 16.9242C2.0079 17.0835 2.38728 17.0835 3.14605 17.0835H16.8542C17.613 17.0835 17.9923 17.0835 18.2115 16.9242C18.4026 16.7852 18.5258 16.5716 18.5503 16.3366C18.5783 16.0671 18.3883 15.7388 18.0081 15.0821L11.154 3.24329C10.7752 2.58899 10.5858 2.26184 10.3387 2.15196C10.1232 2.05612 9.87709 2.05612 9.66154 2.15196C9.41443 2.26184 9.22503 2.58899 8.84622 3.24329Z"
                stroke="#E97000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>
              Past due: You will pay $749.97 today. This includes both the
              current and past due dates. It's because you haven't paid your
              previous bills.
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <button>Cancel</button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.25 8.75V9.45C12.25 10.4301 12.25 10.9201 12.0593 11.2945C11.8915 11.6238 11.6238 11.8915 11.2945 12.0593C10.9201 12.25 10.4301 12.25 9.45 12.25H4.55C3.56991 12.25 3.07986 12.25 2.70552 12.0593C2.37623 11.8915 2.10852 11.6238 1.94074 11.2945C1.75 10.9201 1.75 10.4301 1.75 9.45V8.75M9.91667 5.83333L7 8.75M7 8.75L4.08333 5.83333M7 8.75V1.75"
                stroke="white"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{' '}
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopPaymentMethod;
