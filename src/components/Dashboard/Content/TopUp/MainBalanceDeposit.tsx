import React, { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import style from './MainBalanceDeposit.module.scss';
import CustomSelect3 from '../../../CustomSelect3/CustomSelect3';

function MainBalanceDeposit({
  handleClose,
  isWithdrawal,
}: {
  isWithdrawal?: boolean;
  handleClose: () => void;
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(prev => !prev);
  };
  const handleClick = () => {
    handleClose();
  };
  return (
    <div
      className={style.popup}
      onClick={e => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className={style.container}>
        <div className={style.head}>
          <p>{isWithdrawal ? 'Withdrawal' : 'Deposit'}</p>
          <button className={style.closeButton} onClick={handleClick}>
            <FaXmark />
          </button>
        </div>
        <div>
          <span className={style.dateContainer}>
            27 Mar, 2023
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#939393" />
            </svg>{' '}
            04:30AM
          </span>
          <div>
            <span>#8FB28438-0001</span>
            <div>
              Assigned
              <button
                onClick={handleCheck}
                className={
                  style.checkedButton +
                  ' ' +
                  (isChecked ? style.isNotChecked : '')
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <circle cx="5" cy="5" r="5" fill="#3949A1" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <circle cx="5" cy="5" r="5" fill="white" />
                </svg>
              </button>
            </div>
          </div>
          <button>
            Rejected{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="#D23D28"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <textarea placeholder="Please enter the rejecting reason" />
          <button>Save</button>
        </div>
        <div>
          <p>{isWithdrawal ? 'Deposit details' : 'Payment method'}</p>
          <div className={style.detailsView}>
            {!isWithdrawal ? (
              <>
                <span>Amout sent</span>
                <p>
                  $8000{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <mask
                      id="mask0_1_35352"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <rect width="14" height="14" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_35352)">
                      <path
                        d="M1.16666 14.0002V11.6668H12.8333V14.0002H1.16666ZM2.33332 10.5002V8.31266L7.61249 3.03349L9.79999 5.22099L4.52082 10.5002H2.33332ZM3.49999 9.3335H4.02499L8.16666 5.22099L7.61249 4.66683L3.49999 8.80849V9.3335ZM10.4562 4.57933L8.26874 2.39183L9.31874 1.34183C9.42568 1.22516 9.5618 1.16926 9.72707 1.17412C9.89235 1.17898 10.0285 1.23488 10.1354 1.34183L11.5062 2.71266C11.6132 2.81961 11.6667 2.95329 11.6667 3.1137C11.6667 3.27412 11.6132 3.41266 11.5062 3.52933L10.4562 4.57933Z"
                        fill="#3A4CA1"
                      />
                    </g>
                  </svg>
                </p>
                <span>Payment method</span>
                <p>Stripe</p>
                <span>Transaction reference</span>
                <p>Lorem ipsum</p>
                <span>Payment proof</span>
                <button className={style.proofButton}>
                  <span>Proof.pdf</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <mask
                      id="mask0_1_35365"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="12"
                      height="12"
                    >
                      <rect width="12" height="12" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_35365)">
                      <path
                        d="M6 8L3.5 5.5L4.2 4.775L5.5 6.075V2H6.5V6.075L7.8 4.775L8.5 5.5L6 8ZM3 10C2.725 10 2.48958 9.90208 2.29375 9.70625C2.09792 9.51042 2 9.275 2 9V7.5H3V9H9V7.5H10V9C10 9.275 9.90208 9.51042 9.70625 9.70625C9.51042 9.90208 9.275 10 9 10H3Z"
                        fill="#1C1B1F"
                      />
                    </g>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <span>USDT TRC20 address</span>
                <p>Tv18Bm9poiYk71</p>
              </>
            )}
          </div>

          <span>Checking status</span>
          <CustomSelect3
            defaultOption={{
              display: { value: '0', text: 'Select checking status' },
              render: { value: '0', text: 'Select checking status' },
            }}
            DisplayElement={CheckingStatusDisplayElement}
            RenderElement={CheckingStatusRenderElement}
            childrens={[
              {
                display: { value: '1', text: 'Done payement' },
                render: { value: '1', text: 'Done payement' },
              },
              {
                display: {
                  value: '1',
                  text: 'Waiting for payment completed',
                },
                render: { value: '1', text: 'Waiting for payment completed' },
              },
            ]}
          />
        </div>

        <div>
          <p>User details</p>
          <span>User who sent the request</span>
          <div className={style.detailsView}>
            <span>Full name</span>
            <p>Paijo ijo royo</p>
            <span>Customer ID</span>
            <p>#AB8239</p>
            <span>Current balance</span>
            <p>$4000</p>
            <span>Status</span>
            <p>High</p>
          </div>
        </div>
        <div className={style.footer}>
          <button className={style.submitButton}>Save changes</button>
        </div>
      </div>
    </div>
  );
}

const CheckingStatusDisplayElement = ({
  value,
  text,
}: {
  value: string;
  text: string;
}) => {
  return <div className={style.checkingStatusDisplayElement}>{text}</div>;
};

const CheckingStatusRenderElement = ({
  value,
  text,
}: {
  value: string;
  text: string;
}) => {
  return <div className={style.checkingStatusRenderElement}>{text}</div>;
};

export default MainBalanceDeposit;
