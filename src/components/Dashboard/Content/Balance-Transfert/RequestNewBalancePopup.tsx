import React, { useState } from 'react';
import styles from './RequestNewBalancePopup.module.scss';
import { FaXmark } from 'react-icons/fa6';
import { AccountsSelect, accounts } from '../TopUp/RequestSummaryPopup2';
import {
  AmountRadio,
  tabAmount,
} from '../addAccount/adAccountsFacebook/adAccountsFacebook';

const RequestNewBalancePopup = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  const [AmountRadioSelected, setAmountRadioSelected] = useState(0);

  const [selectedAccount1, setSelectedAccount1] = useState<
    | { text: string; value: string; type: string; name: string; text1: string }
    | undefined
  >();
  const [selectedAccount2, setSelectedAccount2] = useState<
    | { text: string; value: string; type: string; name: string; text1: string }
    | undefined
  >();

  const handleSelectAccount1 = (value: string) => {
    setSelectedAccount1(prev => {
      let temp = accounts.find(el => el.value === value);
      return temp;
    });
  };

  const handleSelectAccount2 = (value: string) => {
    setSelectedAccount2(prev => {
      let temp = accounts.find(el => el.value === value);
      return temp;
    });
  };

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
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M30 25.5H6M6 25.5L12 19.5M6 25.5L12 31.5M6 10.5H30M30 10.5L24 4.5M30 10.5L24 16.5"
                stroke="#3A4CA1"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p>Request new balance transfer</p>
          <button onClick={handleClose}>
            <FaXmark />
          </button>
        </div>
        <div className={styles.body}>
          <div>
            <div className={styles.accountSelectContainer}>
              <AccountsSelect
                label="Ad account sender"
                handleSelect={handleSelectAccount1}
                canShowSelected={false}
                defaultOption={{
                  text: 'Enter your countries',
                  value: '0',
                  element: (
                    <div>
                      <p>Select account</p>
                    </div>
                  ),
                }}
                selected={selectedAccount1}
              />
            </div>
            <span>To</span>
            <div className={styles.accountSelectContainer}>
              <AccountsSelect
                label="Ad account recipient"
                handleSelect={handleSelectAccount2}
                defaultOption={{
                  text: 'Enter your countries',
                  value: '0',
                  element: (
                    <div>
                      <p>Select account</p>
                    </div>
                  ),
                }}
                canShowSelected={false}
                selected={selectedAccount2}
              />
            </div>
          </div>
          <span>
            Top-up amount ($)<span style={{ color: '#DB242F' }}>*</span>
          </span>
          <input placeholder="$100" />
          <div className={styles.AmountRadiosContainer}>
            {tabAmount.map((el, key) => (
              <AmountRadio
                key={key}
                amount={el.amount}
                idx={key}
                selected={AmountRadioSelected}
                setSelected={setAmountRadioSelected}
              />
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleClose}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default RequestNewBalancePopup;
