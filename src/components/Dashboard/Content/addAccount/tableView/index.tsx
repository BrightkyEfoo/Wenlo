import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';
import { Search } from '../../Content1-Main';
import style from './style.module.scss';
import { useState } from 'react';
import {
  adAccountFacebookEmitter,
  adAccountFacebookEmitterEvents,
} from '../adAccountsFacebook/adAccountsFacebook';

const rows: {
  requestId: string;
  adAccountName: string;
  domain: string;
  timeZone: string;
  requestDate: [string, string];
  status: string;
  actions: string[];
}[] = [
  {
    requestId: '3424121248AR',
    adAccountName: 'Amazon',
    domain: 'Amazon.com',
    timeZone: `(GMT-5:00) Guadalajara, 
        Mexico City, Monterrey (CDT)`,
    requestDate: ['April 26, 2023', '10.30 AM'],
    status: 'review',
    actions: ['see'],
  },
  {
    requestId: '3424121248AR',
    adAccountName: 'Amazon',
    domain: 'Amazon.com',
    timeZone: `(GMT-5:00) Guadalajara, 
        Mexico City, Monterrey (CDT)`,
    requestDate: ['April 26, 2023', '10.30 AM'],
    status: 'approved',
    actions: ['see'],
  },
  {
    requestId: '3424121248AR',
    adAccountName: 'Amazon',
    domain: 'Amazon.com',
    timeZone: `(GMT-5:00) Guadalajara, 
        Mexico City, Monterrey (CDT)`,
    requestDate: ['April 26, 2023', '10.30 AM'],
    status: 'review',
    actions: ['see'],
  },
  {
    requestId: '3424121248AR',
    adAccountName: 'Amazon',
    domain: 'Amazon.com',
    timeZone: `(GMT-5:00) Guadalajara, 
        Mexico City, Monterrey (CDT)`,
    requestDate: ['April 26, 2023', '10.30 AM'],
    status: 'hold',
    actions: ['edit'],
  },
  {
    requestId: '3424121248AR',
    adAccountName: 'Amazon',
    domain: 'Amazon.com',
    timeZone: `(GMT-5:00) Guadalajara, 
        Mexico City, Monterrey (CDT)`,
    requestDate: ['April 26, 2023', '10.30 AM'],
    status: 'rejected',
    actions: ['see'],
  },
];
const TableView = () => {
  return (
    <div className={style.container}>
      <div>
        <Search />
      </div>
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
        <option>Status</option>
      </select>
      <button>Apply</button>
      <table>
        <thead>
          <tr>
            <th>ID Request</th>
            <th>Ad account name</th>
            <th>Domain</th>
            <th>Time Zone</th>
            <th>Requested Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        {rows.map((row, idx) => {
          return <Cell key={idx} row={row} />;
        })}
      </table>
    </div>
  );
};

type CellProps = {
  row: {
    requestId: string;
    adAccountName: string;
    domain: string;
    timeZone: string;
    requestDate: [string, string];
    status: string;
    actions: string[];
  };
};

const Cell = ({ row }: CellProps) => {
  const handleShowStatus = () => {
    adAccountFacebookEmitter.emit(
      adAccountFacebookEmitterEvents.SET_STATUS_VISIBLITY,
      true
    );
  };
  return (
    <tr className={style.cellContainer}>
      <td>{row.requestId}</td>
      <td>{row.adAccountName}</td>
      <td>{row.domain}</td>
      <td>{row.timeZone}</td>
      <td>
        {row.requestDate[0]} <small>{row.requestDate[1]}</small>
      </td>
      <td onClick={handleShowStatus}>{getStatusComp(row.status)}</td>
      <td>{getActionsComp(row.actions)}</td>
    </tr>
  );
};

const getStatusComp = (status: string) => {
  switch (status) {
    case 'review':
      return <div className={style.statusReview}>{status}</div>;
    case 'rejected':
      return <div className={style.statusRejected}>{status}</div>;
    case 'hold':
      return <div className={style.statusHold}>{status}</div>;
    default:
      return <div className={style.statusApproved}>{status}</div>;
  }
};
const getActionsComp = (actions: string[]) => {
  return actions.map((action, idx) => {
    switch (action) {
      case 'edit':
        const [isVisible, setIsVisible] = useState(false);
        const handleLeave = () => {
          setIsVisible(prev => false);
        };
        const handleEnter = () => {
          setIsVisible(prev => true);
        };
        return (
          <>
            {isVisible && (
              <div className={style.editTitleParent}>
                <IoWarningOutline />
                <span>Adjustments are required to process this request</span>
              </div>
            )}

            <button className={style.actionsEdit}>
              {action}{' '}
              <IoMdInformationCircleOutline
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              />
            </button>
          </>
        );

      case 'see':
        return <button className={style.actionsSee}>{action}</button>;
      default:
        return <button className={style.actionsSee}>{action}</button>;
    }
  });
};

export default TableView;
