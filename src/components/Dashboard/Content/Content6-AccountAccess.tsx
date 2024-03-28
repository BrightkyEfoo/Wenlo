import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { EventHandler, MouseEvent, ReactEventHandler, useState } from 'react';
import { FaLink, FaSnapchat } from 'react-icons/fa6';
import { Search } from './Content1-Main';
import styles from './Content6-AccountAccess.module.scss';
import DownloadInvoicePopup from './TopUp/DownloadInvoicePopup';
import PopupRequestSummary from './TopUp/PopupRequestSummary';
import RequestSummaryPopup2 from './TopUp/RequestSummaryPopup2';
import ManaAccPopView from './TopUp/ManaAccPopView';
import PopRequestForAcces from './manageAdAccount-access/PopRequestForAcces';

type Row = {
  requestId: string;
  dateHour: { date: string; hour: string }[];
  addAccount: { icon: ReactJSXElement; id: string; nom: string }[];
  linking: ReactJSXElement;
  businessPeople: {
    icon: ReactJSXElement;
    nom: string;
    detailAccount: string;
  }[];
  status: string;
  actions: string;
}[];

const Rows: Row = [
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'Failled',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'Done',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'On Pending',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'Done',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'Failled',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'Done',
    actions: 'viiew',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'On Pending',
    actions: 'View',
  },
  {
    requestId: '3424121248AR',
    dateHour: [{ date: 'April 26, 2023', hour: '10:30 Am' }],
    addAccount: [
      { icon: <FaSnapchat />, id: 'ID: 64272', nom: 'Gabriela Hudges' },
    ],
    linking: <FaLink />,
    businessPeople: [
      {
        icon: <FaSnapchat />,
        nom: 'Business center ID : 39739389',
        detailAccount: 'James Arthur',
      },
    ],
    status: 'Done',
    actions: 'View',
  },
];

const AccountAccess = () => {
  const [isTopupPopupVisible, setIsTopupPopupVisible] = useState(false);
  const [isRequestPopupVisible, setIsRequestPopupVisible] = useState(false);

  const handleRequestTopUp = () => {
    setIsTopupPopupVisible(true);
  };
  const handleRequestSummary = () => {
    setIsRequestPopupVisible(true);
  };
  return (
    <>
      {isTopupPopupVisible ? (
        <ManaAccPopView handleClose={() => setIsTopupPopupVisible(false)} />
      ) : null}
      {/* {isDownloadPopupVisible ? <DownloadInvoicePopup /> : null} */}
      {isRequestPopupVisible ? (
        <PopRequestForAcces
          handleClose={() => setIsRequestPopupVisible(false)}
        />
      ) : null}
      <div className={styles.container}>
        <h2>Manage Ad Account Access</h2>
        <button onClick={handleRequestSummary}>Request for access</button>
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
                <th>Date & Hour</th>
                <th>Ad Account</th>
                <th>Linking</th>
                <th>Business & People</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {Rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{row.requestId}</td>
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
                    {row.linking}
                  </td>
                  <td>
                    {row.businessPeople.map((el, idx) => (
                      <PrintDetailAccount
                        key={idx}
                        icon={el.icon}
                        id={el.detailAccount}
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
                      key={idx}
                      onClick={handleRequestTopUp}
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
export default AccountAccess;
