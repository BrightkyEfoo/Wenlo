import React, { useState } from 'react';
import styles from './content5-Transfert.module.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { FaSnapchat } from 'react-icons/fa6';
import { Search } from './Content1-Main';
import RequestNewBalancePopup from './Balance-Transfert/RequestNewBalancePopup';
import ManageBalanceTransferPopup from './Balance-Transfert/ManageBalanceTransferPopup';

type Row = {
  requestId: string;
  dateHour: { date: string; hour: string }[];
  addAccountSender: { icon: ReactJSXElement; id: string; nom: string }[];
  amount: string;
  addAccountRecipient: { icon: ReactJSXElement; id: string; nom: string }[];
  status: string;
  actions: string;
}[];

const Rows: Row = [
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'Failled',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'Done',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'On Pending',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'Done',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'Failled',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'Done',
    actions: 'viiew',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'On Pending',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccountSender: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    amount: '$73.60',
    addAccountRecipient: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    status: 'Done',
    actions: 'View',
  },
];

const Billings = () => {
  const [isRequestNewBalanceVisible, setisRequestNewBalanceVisible] =
    useState(false);
  const [
    isManageBalanceTransferPopupVisible,
    setisManageBalanceTransferPopupVisible,
  ] = useState(false);

  // const handleShow
  return (
    <>
      {isRequestNewBalanceVisible ? (
        <RequestNewBalancePopup
          handleClose={() => setisRequestNewBalanceVisible(false)}
        />
      ) : null}
      {isManageBalanceTransferPopupVisible ? (
        <ManageBalanceTransferPopup
          handleClose={() => setisManageBalanceTransferPopupVisible(false)}
        />
      ) : null}
      <div className={styles.container}>
        <h2>Manage Balance Transfer</h2>
        <button onClick={() => setisRequestNewBalanceVisible(true)}>
          Request new balance transfer
        </button>
        <div>
          <Search />
          <div>
            <span>01 Mar 2023 - 31 Mar 2023</span>
            <input type="date" hidden />

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M12.25 5.83366H1.75M9.33333 1.16699V3.50033M4.66667 1.16699V3.50033M4.55 12.8337H9.45C10.4301 12.8337 10.9201 12.8337 11.2945 12.6429C11.6238 12.4751 11.8915 12.2074 12.0593 11.8781C12.25 11.5038 12.25 11.0138 12.25 10.0337V5.13366C12.25 4.15357 12.25 3.66352 12.0593 3.28918C11.8915 2.95989 11.6238 2.69218 11.2945 2.5244C10.9201 2.33366 10.4301 2.33366 9.45 2.33366H4.55C3.56991 2.33366 3.07986 2.33366 2.70552 2.5244C2.37623 2.69218 2.10852 2.95989 1.94074 3.28918C1.75 3.66352 1.75 4.15357 1.75 5.13366V10.0337C1.75 11.0138 1.75 11.5038 1.94074 11.8781C2.10852 12.2074 2.37623 12.4751 2.70552 12.6429C3.07986 12.8337 3.56991 12.8337 4.55 12.8337Z"
                  stroke="#26283F"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <select>
            <option>All Status</option>
          </select>
          <select>
            <option>Select Payment Method</option>
          </select>
          <button>Apply</button>
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Date & Hour</th>
                <th>Ad Account Sender</th>
                <th>Amount</th>
                <th>Ad Account Recipient</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {Rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td
                    onClick={() => setisManageBalanceTransferPopupVisible(true)}
                  >
                    {row.requestId}
                  </td>
                  <td>
                    {row.dateHour.map((el, idx) => (
                      <PrintHoure key={idx} date={el.date} hour={el.hour} />
                    ))}
                  </td>
                  <td>
                    {row.addAccountSender.map((el, idx) => (
                      <PrintDetailAccount
                        key={idx}
                        icon={el.icon}
                        id={el.id}
                        nom={el.nom}
                      />
                    ))}
                  </td>
                  <td>
                    {/* {getSection8PayementIcon(row.paymentMethod)} */}
                    {row.amount}
                  </td>
                  <td>
                    {row.addAccountRecipient.map((el, idx) => (
                      <PrintDetailAccount
                        key={idx}
                        icon={el.icon}
                        id={el.id}
                        nom={el.nom}
                      />
                    ))}
                  </td>
                  <td>
                    <button
                      className={
                        styles.button + ' ' + styleButtonStatus(row.status)
                      }
                    >
                      {row.status}
                    </button>
                  </td>
                  <td>
                    <button
                      className={
                        styles.button + ' ' + styleButtonStatus(row.actions)
                      }
                    >
                      {row.actions}
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

const styleButtonStatus = (status: string) => {
  switch (status) {
    case 'Done':
      return styles.done;

    case 'Failled':
      return styles.failled;

    case 'On Pending':
      return styles.pending;
    case 'Download':
      return styles.download;
    case 'View':
      return styles.view;
    default:
      return styles.button;
  }
};
const PrintHoure = ({ date, hour }: { date: string; hour: string }) => {
  return (
    <div className={styles.containerHour}>
      <span>{date}</span>
      <span>{hour}</span>
    </div>
  );
};
const PrintDetailAccount = ({
  icon,
  id,
  nom,
}: {
  icon: ReactJSXElement;
  id: string;
  nom: string;
}) => {
  return (
    <div className={styles.containerDetailAccount}>
      <span>{icon}</span>
      <div>
        <span>{id}</span>
        <span>{nom}</span>
      </div>
    </div>
  );
};
export default Billings;
