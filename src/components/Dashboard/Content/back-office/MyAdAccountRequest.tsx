import React, { useRef, useState } from 'react';
import styles from './MyAdAccountRequest.module.scss';
import { capitalize } from '../../../../functions/Strings';
import {
  DatePickerCustom,
  Search,
  getSection8PayementIcon,
} from '../Content1-Main';
import {
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
  FaFacebookF,
  FaSnapchat,
  FaTiktok,
} from 'react-icons/fa';
import { MdOutlineInfo } from 'react-icons/md';
import { Step, StepLabel, Stepper } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoBing } from 'react-icons/bi';
import {
  CustomInput,
  QontoConnector,
  QontoStepIcon,
} from '../addAccount/adAccountsFacebook/Request';
import Switch from '../../../switch/Switch';
import { FaPaperclip } from 'react-icons/fa6';
const stats = [
  {
    state: 'Pending',
    count: 10,
    color: 'red',
  },
  {
    state: 'Approved',
    count: 10,
    color: 'green',
  },
  {
    state: 'Rejected',
    count: 10,
    color: 'orange',
  },
  {
    state: 'On Hold',
    count: 10,
    color: 'gray',
  },
];

const section9Rows: {
  requestDate: string;
  requestHour: string;
  processedDate: string;
  processedHour: string;
  customersName: string;
  customersId: string;
  type: string;
  assigned: string;
  amount: string;
  paymentMethod: string;
  status: string;
  checkingStatus: string;
  reviewer: string;
  priority: string;
  sender?: string;
  receiver?: string;
  reason?: string;
}[] = [];
const MyAdAccountRequest = ({ comp }: { comp: string }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleRequest = () => {
    setIsPopupVisible(true);
  };
  const [filterState, setFilterState] = useState({
    text: 'Filter by',
    value: '0',
  });
  return (
    <div className={styles.container}>
      <div className={styles.myRequestContainer}>
        <h2>Manage {capitalize(comp)} Ad Accounts Request</h2>
        <button onClick={handleRequest}>Request {comp} ad account</button>
      </div>
      <div className={styles.statsCardsContainer}>
        {stats.map((item, index) => {
          return <StatCard key={index} {...item} />;
        })}
      </div>
      <section className={styles.section}>
        <div>
          <Search />
          <DatePickerCustom />
          <CustomSelect
            defaultOption={{
              text: 'Filter By',
              value: '0',
            }}
            options={[
              {
                text: 'Processed date',
                options: [
                  {
                    text: 'Oldest',
                    value: 'Processed date - Oldest',
                  },
                  {
                    text: 'Newest',
                    value: 'Processed date - Newest',
                  },
                ],
              },
              {
                text: 'Requested date',
                options: [
                  {
                    text: 'Oldest',
                    value: 'Requested date - Oldest',
                  },
                  {
                    text: 'Newest',
                    value: 'Requested date - Newest',
                  },
                ],
              },
              {
                text: 'Status',
                options: [
                  {
                    text: 'On review',
                    value: 'Status - On review',
                  },
                  {
                    text: 'On hold',
                    value: 'Status - On hold',
                  },
                  {
                    text: 'Rejected',
                    value: 'Status - Rejected',
                  },
                  {
                    text: 'Approved',
                    value: 'Status - Approved',
                  },
                ],
              },
              {
                text: 'Checking status',
                options: [
                  {
                    text: 'Done',
                    value: 'Checking status - Done',
                  },
                  {
                    text: 'Waiting payment',
                    value: 'Checking status - Waiting payment',
                  },
                ],
              },
              {
                text: 'Assigned status',
                options: [
                  {
                    text: 'Yes',
                    value: 'Assigned status - Yes',
                  },
                  {
                    text: 'No',
                    value: 'Assigned status - No',
                  },
                ],
              },
              {
                text: 'Priority',
                options: [
                  {
                    text: 'High',
                    value: 'Priority - High',
                  },
                  {
                    text: 'Mid',
                    value: 'Priority - Mid',
                  },
                  {
                    text: 'Low',
                    value: 'Priority - Low',
                  },
                ],
              },
              {
                text: 'Type',
                options: [
                  {
                    text: 'Ad Account Top-Up',
                    value: 'Type - Ad Account Top-Up',
                  },
                  {
                    text: 'Deposit',
                    value: 'Type - Deposit',
                  },
                  {
                    text: 'Ad Account Request Refund',
                    value: 'Type - Ad Account Request Refund',
                  },
                  {
                    text: 'Ad Account Withdrawal',
                    value: 'Type - Ad Account Withdrawal',
                  },
                  {
                    text: 'Withdrawal',
                    value: 'Type - Withdrawal',
                  },
                  {
                    text: 'Ad Account Request',
                    value: 'Type - Ad Account Request',
                  },
                ],
              },
              {
                text: 'Payment Method',
                options: [
                  {
                    text: 'USDT',
                    value: 'Payment Method - USDT',
                  },
                  {
                    text: 'Payoneer',
                    value: 'Payment Method - Payoneer',
                  },
                  {
                    text: 'Bank Wine',
                    value: 'Payment Method - Bank Wine',
                  },
                ],
              },
            ]}
          />
          <button>Apply</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Request Date</th>
                <th>Processed Date</th>
                <th>Customers</th>
                <th>Type</th>
                <th>Assigned</th>
                <th>Amount {'($)'}</th>
                <th>Payment method</th>
                <th>Status</th>
                <th>Checking Status</th>
                <th>Reviewer</th>
                <th>Priority</th>
              </tr>
              {section9Rows.map((row, idx) => {
                return <Section9StatusCell key={idx} row={row} />;
              })}
            </thead>
          </table>
        </div>
      </section>
      {isPopupVisible && (
        <RequestPopup
          comp={comp}
          handleClose={() => setIsPopupVisible(false)}
        />
      )}
    </div>
  );
};

type Section9StatusCellProps = {
  row: {
    requestDate: string;
    requestHour: string;
    processedDate: string;
    processedHour: string;
    customersName: string;
    customersId: string;
    type: string;
    assigned: string;
    amount: string;
    paymentMethod: string;
    status: string;
    checkingStatus: string;
    reviewer: string;
    priority: string;
    sender?: string;
    receiver?: string;
    reason?: string;
  };
};

const Section9StatusCell = ({ row }: Section9StatusCellProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  return (
    <tr className={styles.Section9StatusRow}>
      <td>
        <b>{row.requestDate}</b>
        <br />
        <span>{row.requestHour}</span>
      </td>
      <td>
        <b>{row.processedDate}</b>
        <br />
        <span>{row.processedHour}</span>
      </td>
      <td>
        <b>{row.customersName}</b>
        <br />
        <small>ID: {row.customersId}</small>
      </td>
      <td>{row.type}</td>
      <td>{row.assigned}</td>
      <td>{row.amount}</td>
      <td>
        {getSection8PayementIcon(row.paymentMethod)}
        {row.paymentMethod}
      </td>
      <td>
        <button className={styles.Section9StatusCell}>
          {row.status === 'Rejected' && (
            <div
              ref={popupRef}
              className={styles.Section9StatusCellPopUp + ' ' + styles.hide}
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.0832 12.2503V8.75033M9.33317 10.5003H12.8332M12.8332 5.83366H1.1665M12.8332 7.00033V4.78366C12.8332 4.13027 12.8332 3.80357 12.706 3.554C12.5942 3.33448 12.4157 3.156 12.1962 3.04415C11.9466 2.91699 11.6199 2.91699 10.9665 2.91699H3.03317C2.37978 2.91699 2.05308 2.91699 1.80352 3.04415C1.58399 3.156 1.40552 3.33448 1.29366 3.554C1.1665 3.80357 1.1665 4.13026 1.1665 4.78366V9.21699C1.1665 9.87039 1.1665 10.1971 1.29366 10.4466C1.40552 10.6662 1.58399 10.8446 1.80351 10.9565C2.05308 11.0837 2.37978 11.0837 3.03317 11.0837H6.99984"
                    stroke="#3A4CA1"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{' '}
                Deposit
              </p>
              <span>Sender:</span>
              <span>
                {getSection8PayementIcon(row.sender)} {row.sender}
              </span>
              <span>Receiver:</span>
              <span>{row.receiver}</span>
              <p dangerouslySetInnerHTML={{ __html: row.reason as string }} />
            </div>
          )}
          {row.status}{' '}
          {row.status === 'Rejected' && (
            <MdOutlineInfo
              onMouseEnter={e => {
                popupRef.current?.classList.remove(styles.hide);
                popupRef.current?.classList.add(styles.show);
              }}
              onMouseLeave={e => {
                popupRef.current?.classList.add(styles.hide);
                popupRef.current?.classList.remove(styles.show);
              }}
              size={12}
            />
          )}
        </button>
      </td>
      <td>
        <button className={styles.Section9StatusCell}>
          {row.status === 'Rejected' && (
            <div
              ref={popupRef}
              className={styles.Section9StatusCellPopUp + ' ' + styles.hide}
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.0832 12.2503V8.75033M9.33317 10.5003H12.8332M12.8332 5.83366H1.1665M12.8332 7.00033V4.78366C12.8332 4.13027 12.8332 3.80357 12.706 3.554C12.5942 3.33448 12.4157 3.156 12.1962 3.04415C11.9466 2.91699 11.6199 2.91699 10.9665 2.91699H3.03317C2.37978 2.91699 2.05308 2.91699 1.80352 3.04415C1.58399 3.156 1.40552 3.33448 1.29366 3.554C1.1665 3.80357 1.1665 4.13026 1.1665 4.78366V9.21699C1.1665 9.87039 1.1665 10.1971 1.29366 10.4466C1.40552 10.6662 1.58399 10.8446 1.80351 10.9565C2.05308 11.0837 2.37978 11.0837 3.03317 11.0837H6.99984"
                    stroke="#3A4CA1"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{' '}
                Deposit
              </p>
              <span>Sender:</span>
              <span>
                {getSection8PayementIcon(row.sender)} {row.sender}
              </span>
              <span>Receiver:</span>
              <span>{row.receiver}</span>
              <p dangerouslySetInnerHTML={{ __html: row.reason as string }} />
            </div>
          )}
          {row.status}{' '}
          {row.status === 'Rejected' && (
            <MdOutlineInfo
              onMouseEnter={e => {
                popupRef.current?.classList.remove(styles.hide);
                popupRef.current?.classList.add(styles.show);
              }}
              onMouseLeave={e => {
                popupRef.current?.classList.add(styles.hide);
                popupRef.current?.classList.remove(styles.show);
              }}
              size={12}
            />
          )}
        </button>
      </td>
    </tr>
  );
};

export default MyAdAccountRequest;

const CustomSelect = ({
  defaultOption,
  options,
}: {
  defaultOption: { text: string; value: string };
  options: {
    text: string;
    options: { text: string; value: string }[];
  }[];
}) => {
  const [actual, setActual] = useState(defaultOption);
  const [selected, setSelected] = useState(-1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClick = () => {
    setIsPopupVisible(prev => !prev);
  };

  return (
    <div className={styles.select}>
      <div className={styles.head} onClick={handleClick}>
        <p>{actual.text}</p>
        <button>{isPopupVisible ? <FaChevronUp /> : <FaChevronDown />}</button>
      </div>
      {isPopupVisible && (
        <div className={styles.bottom}>
          {options.map((el, idx) => {
            return (
              <RenderElement
                key={el.text + idx}
                index={idx}
                options={el.options}
                selected={selected}
                setSelected={setSelected}
                setActual={setActual}
                text={el.text}
                setIsPopupVisible={setIsPopupVisible}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const RenderElement = ({
  text,
  options,
  index,
  selected,
  setSelected,
  setActual,
  setIsPopupVisible,
}: {
  text: string;
  index: number;
  selected: number;
  setSelected: Function;
  setActual: Function;
  setIsPopupVisible: Function;
  options: { text: string; value: string }[];
}) => {
  return (
    <div className={styles.RenderElement}>
      <p
        onClick={e => {
          if (index === selected) {
            setSelected(-1);
          } else {
            setSelected(index);
          }
        }}
      >
        {text} <FaChevronRight size={16} />
      </p>
      {index === selected ? (
        <div className={styles.options}>
          {options.map((el, idx) => {
            return (
              <p
                key={idx}
                onClick={e => {
                  console.log('e', el);
                  setActual(el);
                  setSelected(-1);
                  setIsPopupVisible(false);
                }}
              >
                {el.text}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const StatCard = ({
  state,
  count,
  color,
}: {
  state: string;
  count: number;
  color: string;
}) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statCardState + ' ' + styles['statcard-' + color]}>
        {state}
      </div>
      <div className={styles.statCardCount}>{count}</div>
    </div>
  );
};

const steps = ['Ad account details', 'Ad account top-up'];
const snapSteps = ['Ad account details', 'Profile Access', 'Ad account top-up'];

const RequestPopup = ({
  comp,
  handleClose,
}: {
  comp: string;
  handleClose: Function;
}) => {
  const [stepperIndex, setStepperIndex] = useState(0);
  const handleForwardClick = () => {
    setStepperIndex(prev => {
      if (comp === 'Snapchat') {
        return prev === snapSteps.length - 1 ? snapSteps.length - 1 : prev + 1;
      }
      return prev === steps.length - 1 ? steps.length - 1 : prev + 1;
    });
  };

  return (
    <div
      className={styles.requestPopup}
      onClick={e => {
        if (e.currentTarget === e.target) handleClose();
      }}
    >
      <div className={styles.requestContainer}>
        <section className={styles.requestPopupLeft}>
          <div>
            <span>
              27 Mar, 2023 <span /> 04:30 AM
            </span>{' '}
            <div>
              <span>Assigned</span> <Switch />
            </div>
          </div>
          <div>
            <span>#8FB28438-0001</span>
          </div>
          <p>
            Rejected <FaChevronDown color="#828282" />
          </p>
          <p>
            Please enter the changes to be made and any comments on the details
            submitted
            <span>
              <FaPaperclip size={10} />
            </span>
          </p>
          <div className={styles.userDetails}>
            <p>User details</p>
            <span>User who sent the request</span>
            <div>
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
          <div className={styles.adAccount}>
            <p>Ad account details created</p>
            <span>Enter your advertising account details</span>
            <CustomInput
              label="Ad account name"
              placeholder="Enter the ad account name"
            />
            <CustomInput
              label="Ad account ID"
              placeholder="Enter the ad account ID"
            />
          </div>
          <div className={styles.leftFooter}>
            <button>Remove</button>
            <button>Add</button>
          </div>
        </section>
        <section className={styles.requestPopupRight}>
          <div className={styles.requestPopupRightLogo}>
            {comp === 'facebook' ? (
              <FaFacebookF color="#3C5A9A" size={40} />
            ) : comp === 'google' ? (
              <FcGoogle size={40} />
            ) : comp === 'tiktok' ? (
              <FaTiktok color="#000" size={40} />
            ) : comp === 'bing' ? (
              <BiLogoBing color="#3C5A9A" size={40} />
            ) : (
              <FaSnapchat color="#3C5A9A" size={40} />
            )}
          </div>
          <p className={styles.requestPopupRightHead}>
            {capitalize(comp)} Ad account application
          </p>
          <div className={styles.stepperContainer}>
            <Stepper
              alternativeLabel
              activeStep={stepperIndex}
              connector={<QontoConnector />}
            >
              {comp === 'Snapchat'
                ? snapSteps.map(label => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))
                : steps.map(label => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
            </Stepper>
          </div>
          {stepperIndex === 0 ? <PopupContent0 comp={comp} /> : null}
          {stepperIndex === 1 ? (
            comp === 'Snapchat' ? (
              <PopupContent2 comp={comp} />
            ) : (
              <PopupContent1 comp={comp} />
            )
          ) : null}
          {comp === 'Snapchat' && stepperIndex === 2 ? (
            <PopupContent1 comp={comp} />
          ) : null}
        </section>
        <div className={styles.requestPopupFooter}>
          <button onClick={() => handleClose()}>Cancel</button>
          <button onClick={handleForwardClick}>
            {(comp === 'Snapchat' && stepperIndex === 2) ||
            (comp !== 'Snapchat' && stepperIndex === 1)
              ? 'Save'
              : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

const PopupContent0 = ({ comp }: { comp: string }) => {
  return (
    <div className={styles.popupContent0}>
      <p>Ad account details</p>
      <span>Enter your advertsing account details</span>
      <div className={styles.containedBox}>
        <span>Ad account name</span>
        <p>Paijo ijo royo</p>
        <span>Time zone</span>
        <p>(GMT-5:00)Guadalajara, Mexixo City, Monterrey (CDT)</p>
        <span>Domain / Url</span>
        <p>Gabriela Huges.com</p>
        <span>Target countries</span>
        <p>Albania, Austria, Indonesia</p>
      </div>
      {comp === 'Snapchat' && (
        <>
          <p>Company Details</p>
          <span>Enter your advertsing account details</span>
          <div className={styles.containedBox}>
            <span>Ad account name</span>
            <p>Paijo ijo royo</p>
            <span>Time zone</span>
            <p>(GMT-5:00)Guadalajara, Mexixo City, Monterrey (CDT)</p>
            <span>Domain / Url</span>
            <p>Gabriela Huges.com</p>
          </div>
          <p>Advertising campaign details</p>
          <span>Enter your advertsing company details</span>
          <div className={styles.containedBox}>
            <span>Company name</span>
            <p>Amazon</p>
            <span>Registred address of the company</span>
            <p>(GMT-5:00)Guadalajara, Mexixo City, Monterrey (CDT)</p>
            <span>Domain / Url</span>
            <p>Gabriela Huges.com</p>
          </div>
        </>
      )}
      <p>People's section</p>
      <div className={styles.rightfooter}>
        <span>
          Add emails of {comp} accounts that will be assigned to the advertising
          account.
        </span>
        <div>
          <span>{comp} Account Email</span> <p>Gabrielahudges@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

const PopupContent1 = ({ comp }: { comp: string }) => {
  return (
    <div className={styles.popupContent0}>
      <p>Ad account details</p>
      <span>Enter your advertsing account details</span>
      <div>
        <span>Ad account name</span>
        <p>Paijo ijo royo</p>
        <span>Time zone</span>
        <p>(GMT-5:00)Guadalajara, Mexixo City, Monterrey (CDT)</p>
        <span>Domain / Url</span>
        <p>Gabriela Huges.com</p>
        <span>Target countries</span>
        <p>Albania, Austria, Indonesia</p>
      </div>
      <div className={styles.popupContent1rightfooter1}>
        <span>Balance</span>
        <p>$300</p>
        <span>Amount to debit</span>
        <p>-$100</p>
      </div>
      <div className={styles.popupContent1rightfooter2}>
        <span>Top-up Amount</span>
        <p>$14.99</p>
        <span>Top-up Fee</span>
        <p>$4.49</p>
        <span>VAT</span>
        <p>$4.49</p>
        <p>Amount Due</p>
        <p>$20.48</p>
      </div>
    </div>
  );
};

const PopupContent2 = ({ comp }: { comp: string }) => {
  return (
    <div className={styles.popupContent2}>
      <p>{capitalize(comp)} public profile access</p>
      <span>
        Please share your Public Profile with our partner organisation on{' '}
        {capitalize(comp)}.
      </span>
      <div>
        <ol className={styles.popupContent2List}>
          <li>
            Log into the Ad Manager. Then click on the menu in the top left
            corner and select Business Details.
          </li>
          <li>In the menu on the left, select Shared.</li>
          <li>Click on Start Sharing in the top right-hand corner.</li>
          <li>
            A pop-up window appears. Select the type of asset you wish to share:
            "Profile". Then select the name of the profile you want to share.
          </li>
          <li>
            Finally, enter the following organisation ID ( Madhouse's org
            Organisation ID: <span>8f33295c-e904-401c-8772-d57c419be382</span>
          </li>
        </ol>
      </div>
      <div>
        <span>Public profile name</span>
        <p>Gabriela Hudges</p>
      </div>
    </div>
  );
};
