import React, { useState } from 'react';
import styles from './Content4-bilings.module.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { FaPaypal, FaSnapchat } from 'react-icons/fa6';
import { Search } from './Content1-Main';
import { PiCurrencyDollarFill } from 'react-icons/pi';
import PopupRequestSummary from './TopUp/PopupRequestSummary';
import DownloadInvoicePopup from './TopUp/DownloadInvoicePopup';
import RequestSummaryPopup2 from './TopUp/RequestSummaryPopup2';
import { useAppSelector } from '../../../redux/hooks';

type Row = {
  requestId: string;
  processedDate?: { date: string; hour: string };
  dateHour: { date: string; hour: string }[];

  addAccount: { icon: ReactJSXElement; id: string; nom: string }[];
  amount: string;
  paymenMethod: { icon: ReactJSXElement; device: string }[];
  assigned?: string;
  status: string;
  actions?: string;
  receipt?: string;
  checkingStatus?: string;
}[];

const Billings = () => {
  const user = useAppSelector(state => state.user);

  const Rows: Row = [
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <FaPaypal />, device: 'USDT' }],
      status: 'Failled',
      actions: 'View',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Waiting Payement',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'Yes',
          }
        : {}),
    },
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <PiCurrencyDollarFill />, device: 'Payoneer' }],
      status: 'Done',
      actions: 'View',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Done',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'No',
          }
        : {}),
    },
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <FaSnapchat />, device: 'Bank Wine' }],
      status: 'On Pending',
      actions: 'View',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Waiting Payement',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'Yes',
          }
        : {}),
    },
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <FaSnapchat />, device: 'Bank Wine' }],
      status: 'Done',
      actions: 'View',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Done',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'Yes',
          }
        : {}),
    },
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <FaSnapchat />, device: 'Bank Wine' }],
      status: 'Failled',
      actions: 'View',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Waiting Payement',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'Yes',
          }
        : {}),
    },
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <FaSnapchat />, device: 'Bank Wine' }],
      status: 'Done',
      actions: 'viiew',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Waiting Payement',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'No',
          }
        : {}),
    },
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <FaSnapchat />, device: 'Bank Wine' }],
      status: 'On Pending',
      actions: 'View',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Waiting Payement',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'Yes',
          }
        : {}),
    },
    {
      requestId: '3424121248AR',
      dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
      addAccount: [
        { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
      ],
      amount: '$73.60',
      paymenMethod: [{ icon: <FaSnapchat />, device: 'Bank Wine' }],
      status: 'Done',
      actions: 'View',
      receipt: 'Download',
      ...(user.is_superuser
        ? {
            checkingStatus: 'Done',
            processedDate: { date: '26 April 2023', hour: '10.30 AM' },
            assigned: 'No',
          }
        : {}),
    },
  ];

  const [isTopupPopupVisible, setIsTopupPopupVisible] = useState(false);
  const [isDownloadPopupVisible, setIsDownloadPopupVisible] = useState(false);
  const [isRequestPopupVisible, setIsRequestPopupVisible] = useState(false);

  const handleDownloadInvoice = () => {
    setIsDownloadPopupVisible(true);
  };
  const handleRequestTopUp = () => {
    setIsTopupPopupVisible(true);
  };
  const handleRequestSummary = () => {
    setIsRequestPopupVisible(true);
  };
  return (
    <>
      {isTopupPopupVisible ? (
        <PopupRequestSummary
          handleClose={() => setIsTopupPopupVisible(false)}
        />
      ) : null}
      {isDownloadPopupVisible ? (
        <DownloadInvoicePopup
          handleClose={() => setIsDownloadPopupVisible(false)}
        />
      ) : null}
      {isRequestPopupVisible ? (
        <RequestSummaryPopup2
          handleClose={() => setIsRequestPopupVisible(false)}
        />
      ) : null}
      <div className={styles.container}>
        <h2>Manage Ad Account Top-Up</h2>
        <button onClick={handleRequestTopUp}>Request new top-up</button>
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
          <button onClick={handleRequestSummary}>Apply</button>
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                {user.is_superuser && <th>Processed Date</th>}
                <th>Date & Hour</th>
                <th>Ad Account {user.is_superuser && 'name'}</th>
                <th>Amount</th>
                <th>Payment Method</th>
                {user.is_superuser && <th>Assigned</th>}
                <th>Status</th>
                {user.is_superuser ? (
                  <th>Checking Status</th>
                ) : (
                  <>
                    <th>Actions</th>
                    <th>Receipt</th>
                  </>
                )}
              </tr>
            </thead>
            {Rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{row.requestId}</td>
                  {row.processedDate && (
                    <td>
                      <span className="bold">{row.processedDate.date}</span>
                      <br />
                      <span>{row.processedDate.hour}</span>
                    </td>
                  )}
                  <td>
                    {row.dateHour.map((el, idx) => (
                      <PrintHoure key={idx} date={el.date} hour={el.hour} />
                    ))}
                  </td>
                  <td>
                    {row.addAccount.map((el, idx) => (
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
                    {row.paymenMethod.map((el, idx) => (
                      <PrintDetailPayment
                        key={idx}
                        icon={el.icon}
                        device={el.device}
                      />
                    ))}
                  </td>
                  {row.assigned && (
                    <td>
                      <button
                        className={
                          styles.button + ' ' + styleButtonStatus(row.assigned)
                        }
                      >
                        {row.assigned}
                      </button>
                    </td>
                  )}
                  <td>
                    <button
                      className={
                        styles.button + ' ' + styleButtonStatus(row.status)
                      }
                    >
                      {row.status}
                    </button>
                  </td>
                  {row.actions && !row.checkingStatus && (
                    <td>
                      <button
                        className={
                          styles.button + ' ' + styleButtonStatus(row.actions)
                        }
                      >
                        {row.actions}
                      </button>
                    </td>
                  )}
                  {row.receipt && !row.checkingStatus && (
                    <td>
                      <button
                        className={
                          styles.button + ' ' + styleButtonStatus(row.receipt)
                        }
                        onClick={handleDownloadInvoice}
                      >
                        {row.receipt}
                      </button>
                    </td>
                  )}
                  {row.checkingStatus && (
                    <td>
                      <button
                        className={
                          styles.button +
                          ' ' +
                          styleButtonStatus(row.checkingStatus)
                        }
                      >
                        {row.checkingStatus}
                      </button>
                    </td>
                  )}
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
const PrintDetailPayment = ({
  icon,
  device,
}: {
  icon: ReactJSXElement;
  device: string;
}) => {
  return (
    <div className={styles.containerDetailAccount}>
      <span>{icon}</span>
      <div>
        <span>{device}</span>
      </div>
    </div>
  );
};
export default Billings;
