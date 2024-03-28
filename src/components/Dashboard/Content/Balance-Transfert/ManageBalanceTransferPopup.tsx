import React from 'react';
import styles from './ManageBalanceTransfer.module.scss';
import { FaXmark } from 'react-icons/fa6';
import { getAccountIcon } from '../TopUp/RequestSummaryPopup2';

const ManageBalanceTransferPopup = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  const rejected = true
  return (
    <div
      className={styles.popup}
      onClick={e => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Manage Balance Transfer</p>
          <span>
            #3424121248AR <span>Done</span>
          </span>
          <button onClick={handleClose}>
            <FaXmark />
          </button>
          <div className={styles.warningBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99817 7.50019V10.8335M9.99817 14.1669H10.0065M8.84427 3.24329L1.99019 15.0821C1.61002 15.7388 1.41994 16.0671 1.44803 16.3366C1.47254 16.5716 1.59568 16.7852 1.78681 16.9242C2.00594 17.0835 2.38533 17.0835 3.1441 17.0835H16.8522C17.611 17.0835 17.9904 17.0835 18.2095 16.9242C18.4007 16.7852 18.5238 16.5716 18.5483 16.3366C18.5764 16.0671 18.3863 15.7388 18.0061 15.0821L11.1521 3.24329C10.7733 2.58899 10.5839 2.26184 10.3368 2.15196C10.1212 2.05612 9.87513 2.05612 9.65959 2.15196C9.41248 2.26184 9.22307 2.58899 8.84427 3.24329Z"
                stroke="#E97000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>
              Rejected due to lorem ipsum dolor sit amet consectetur. Lectus
              tellus egestas et duis aliquet malesuada tincidunt orci.
            </p>
          </div>
        </div>
        <div className={styles.body}>
          <div>
            <div>
              <p>Balance request</p>
              <span>Your balance transfer request summary</span>
            </div>
            <div>
              <span>Date</span>
              <p>April 26, 2023</p>
              <span>Hours</span>
              <p>10:30 am</p>
              <span>Amount</span>
              <p>$131,5</p>
            </div>
          </div>
          <div>
            <span>Ad account sender</span>
            <div>
              <div className={styles.account}>
                {getAccountIcon('snapchat')}
                <span>ID:64272</span>
                <p>Gabriela Hudges</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="36"
                viewBox="0 0 16 36"
                fill="none"
              >
                <path
                  d="M8.4691 32.2403L7.52629 33.1831C6.22455 34.4849 4.114 34.4849 2.81225 33.1831C1.5105 31.8814 1.5105 29.7709 2.81225 28.4691L3.75506 27.5263M12.2403 28.4691L13.1831 27.5263C14.4849 26.2245 14.4849 24.114 13.1831 22.8122C11.8814 21.5105 9.77085 21.5105 8.4691 22.8122L7.52629 23.7551M5.66436 30.331L10.331 25.6644"
                  stroke="#26283F"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className={styles.account}>
                {getAccountIcon('snapchat')}
                <span>ID:64272</span>
                <p>Gabriela Hudges</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default ManageBalanceTransferPopup;
