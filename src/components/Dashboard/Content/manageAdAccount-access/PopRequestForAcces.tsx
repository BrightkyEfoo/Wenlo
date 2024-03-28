import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { AccountsSelect, accounts } from '../TopUp/RequestSummaryPopup2';
import styles from './PopRequestForAcces.module.scss';

type HandleCloseFn = () => void;

const PopRequestForAcces = ({
  handleClose,
  title,
}: {
  title?: string;
  handleClose: HandleCloseFn;
}) => {
  const [selectedAccount1, setSelectedAccount1] = useState<
    | { text: string; value: string; type: string; name: string; text1: string }
    | undefined
  >();
  const handleSelectAccount1 = (value: string) => {
    setSelectedAccount1(prev => {
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
        <div>
          <p>{title || 'Manage ad account access'}</p>

          <button onClick={handleClose}>
            <FaXmark />
          </button>
        </div>
        <div className={styles.accountSelectContainer}>
          <AccountsSelect
            label="Business Account or Profile"
            handleSelect={handleSelectAccount1}
            canShowSelected={false}
            defaultOption={{
              text: 'Select business account or profile',
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
        <div>
          <span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.4987 3.33301V12.6663M3.83203 7.99967H13.1654"
                  stroke="#3A4CA1"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>Add Account</span>
          </span>
        </div>
        <div className={styles.accountSelectContainer}>
          <AccountsSelect
            label="Ad account to access"
            handleSelect={handleSelectAccount1}
            canShowSelected={false}
            defaultOption={{
              text: 'Select ad account to get access',
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
        <div className={styles.footer}>
          <div></div> {/*  dont delete this */}
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PopRequestForAcces;
