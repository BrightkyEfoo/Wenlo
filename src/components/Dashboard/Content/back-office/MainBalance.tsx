import { useState } from 'react';
import styles from './MainBalance.module.scss';
import Line from '../../../Line';
import { FiUserPlus } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import {
  DatePickerCustom,
  PaymentMethodSelect,
  Search,
  StatusSelect,
  TypeSelect,
} from '../Content1-Main';

type tableRow = {
  customerName: string;
  customerId: string;
  assigned: string;
  checkingStatus: string;
  reviewerName: string;
  reviewerId: string;
  status: string;
  processedDate: string;
  processedTime: string;
  priority: string;
};

const data: tableRow[] = [
  {
    customerName: 'Gabriela Hudges',
    customerId: '3424',
    assigned: '26 April 2023',
    checkingStatus: '10:00 AM',
    reviewerName: 'Amazon',
    reviewerId: '1212',
    status: 'Pending',
    processedDate: '26 April 2023',
    processedTime: '10:00 AM',
    priority: 'Mid',
  },
];

const MainBalance = () => {
  const [period, setPeriod] = useState(0);

  return (
    <div className={styles.container}>
      <h2>Main Balance Manegement</h2>
      <section className={styles.section7}>
        <div>
          <div>
            <span>Current balance</span>
            <span>
              $819232<small>.98</small>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 10V2M6 2L3 5M6 2L9 5"
                  stroke="#2E8D0C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              4.28%
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#C7C7C7" />
            </svg>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <mask
                  id="mask0_1_17255"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="12"
                  height="12"
                >
                  <rect width="12" height="12" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17255)">
                  <path
                    d="M5.48745 10.975C4.85412 10.9083 4.26453 10.7313 3.7187 10.4438C3.17287 10.1562 2.69995 9.78958 2.29995 9.34375C1.89995 8.89792 1.58537 8.3875 1.3562 7.8125C1.12703 7.2375 1.01245 6.62917 1.01245 5.9875C1.01245 4.69583 1.43953 3.57708 2.2937 2.63125C3.14787 1.68542 4.21662 1.14167 5.49995 1V2C4.49162 2.14167 3.65828 2.58958 2.99995 3.34375C2.34162 4.09792 2.01245 4.97917 2.01245 5.9875C2.01245 6.99583 2.34162 7.87708 2.99995 8.63125C3.65828 9.38542 4.48745 9.83333 5.48745 9.975V10.975ZM5.98745 8.5L3.47495 5.975L4.18745 5.2625L5.48745 6.5625V3.5H6.48745V6.5625L7.77495 5.275L8.48745 6L5.98745 8.5ZM6.48745 10.975V9.975C6.84578 9.925 7.18953 9.82917 7.5187 9.6875C7.84787 9.54583 8.15412 9.36667 8.43745 9.15L9.16245 9.875C8.77078 10.1833 8.34995 10.4313 7.89995 10.6188C7.44995 10.8063 6.97912 10.925 6.48745 10.975ZM8.46245 2.825C8.17078 2.60833 7.86037 2.42917 7.5312 2.2875C7.20203 2.14583 6.85828 2.05 6.49995 2V1C6.99162 1.05 7.46245 1.16875 7.91245 1.35625C8.36245 1.54375 8.77912 1.79167 9.16245 2.1L8.46245 2.825ZM9.86245 9.15L9.16245 8.4375C9.37912 8.15417 9.55412 7.84792 9.68745 7.51875C9.82078 7.18958 9.91245 6.84583 9.96245 6.4875H10.9875C10.9208 6.97917 10.7958 7.45208 10.6125 7.90625C10.4291 8.36042 10.1791 8.775 9.86245 9.15ZM9.96245 5.4875C9.91245 5.12917 9.82078 4.78542 9.68745 4.45625C9.55412 4.12708 9.37912 3.82083 9.16245 3.5375L9.86245 2.825C10.1791 3.2 10.4333 3.61458 10.625 4.06875C10.8166 4.52292 10.9375 4.99583 10.9875 5.4875H9.96245Z"
                    fill="#A78736"
                  />
                </g>
              </svg>
              On pending $2398.12
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <mask
                  id="mask0_1_17259"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="12"
                  height="12"
                >
                  <rect width="12" height="12" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17259)">
                  <path
                    d="M2.5 10.5C2.225 10.5 1.98958 10.4021 1.79375 10.2063C1.59792 10.0104 1.5 9.775 1.5 9.5V2.5C1.5 2.225 1.59792 1.98958 1.79375 1.79375C1.98958 1.59792 2.225 1.5 2.5 1.5H6V2.5H2.5V9.5H9.5V6H10.5V9.5C10.5 9.775 10.4021 10.0104 10.2063 10.2063C10.0104 10.4021 9.775 10.5 9.5 10.5H2.5ZM4.85 7.85L4.15 7.15L8.8 2.5H7V1.5H10.5V5H9.5V3.2L4.85 7.85Z"
                    fill="#A78736"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div>
            <div>
              {['1D', '1W', '1M', '3M', '6M', '1Y'].map((item, index) => (
                <span
                  key={index}
                  onClick={() => setPeriod(prev => index)}
                  className={period === index ? styles.section7SpanActive : ''}
                >
                  {item}
                </span>
              ))}
            </div>
            <select>
              <option>Main Balance</option>
            </select>
          </div>
        </div>
        <div className={styles.Section7lineChart1Container}>
          <Line />
        </div>
        <div>
          <div>
            <div className={styles.peopleIcon}>
              <FiUserPlus />
            </div>
            <BsThreeDots />
            <p>In Progress</p>
            <p>
              <big>128</big> Request
            </p>
          </div>
          <div>
            <div className={styles.peopleIcon}>
              <FiUserPlus />
            </div>
            <BsThreeDots />
            <p>Awaiting for payment completed</p>
            <p>
              <big>128</big> Request
            </p>
          </div>
        </div>
      </section>

      <Section9 />
    </div>
  );
};

export default MainBalance;

export const Section9 = () => {
  return (
    <div className={styles.section9}>
      <span>Ad Account Recharge Requests </span>
      <div>
        <Search />
        <DatePickerCustom />
        <StatusSelect />
        <TypeSelect />
        <PaymentMethodSelect />
        <button>Apply</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Requested Date</th>
            <th>Type</th>
            <th>Amount {'($)'}</th>
            <th>Payment method</th>
            <th>Status</th>
          </tr>
        </thead>
        {data.map((row, idx) => {
          return <TableCell key={idx} row={row} />;
        })}
      </table>
    </div>
  );
};

const TableCell = ({ row }: { row: tableRow }) => {
  return (
    <tr>
      <td>
        {row.processedDate}, <br /> <span>{row.processedTime}</span>
      </td>
      <td>
        {row.customerName}
        <br /> <span>ID: {row.customerId}</span>
      </td>
      <td>{row.assigned}</td>
      <td>
        <div>{row.checkingStatus}</div>
      </td>
      <td>
        {row.reviewerName}
        <br /> <span>ID: {row.reviewerId}</span>
      </td>
      <td>
        <div>{row.status}</div>
      </td>
      <td>
        <div className={styles.actions}>
          <button>{row.priority}</button>
          <button>Check</button>
        </div>
      </td>
    </tr>
  );
};
