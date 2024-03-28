import React, { ReactNode, useState } from 'react';
import styles from './request.module.scss';
import { FaFacebookF, FaGoogle, FaSnapchat, FaTiktok } from 'react-icons/fa6';
import { capitalize } from '../../../../../functions/Strings';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import {
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  stepConnectorClasses,
} from '@mui/material';
import { CiImageOn } from 'react-icons/ci';
import { BiLogoBing } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';
import { timezones } from '../../../../../utils/timezones';

const steps = [
  'Ad account details',
  'Page details',
  'Business Manager',
  'Finalise request',
];

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export const QontoStepIconRoot = styled('div')<{
  ownerState: { active?: boolean };
}>(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    width: 24,
    height: 24,
    borderRadius: '50%',
    borderWidth: 5,
    borderColor: '#3949a1',
    borderStyle: 'solid',
    backgroundColor: '#3949a1',
  },
  '& .QontoStepIcon-active': {
    width: 24,
    height: 24,
    borderRadius: '50%',
    borderWidth: 5,
    borderColor: '#3949a1',
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
  '& .QontoStepIcon-circle': {
    width: 24,
    height: 24,
    borderRadius: '50%',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
}));

export function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        // <FaCheck className="QontoStepIcon-completedIcon" />
        <div className="QontoStepIcon-completedIcon" />
      ) : active ? (
        <div className="QontoStepIcon-active" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const AdAccountRequest = () => {
  const [Pages, setPages] = useState([{ id: '', link: '' }]);
  const [stepperIndex, setStepperIndex] = useState(0);
  const location = useLocation();
  const comp = location.pathname.split('/')[3];
  const handleForwardClick = () => {
    setStepperIndex(prev => {
      return prev === steps.length - 1 ? steps.length - 1 : prev + 1;
    });
  };

  const handleAddPage = () => {
    setPages(prev => {
      let temp = [...prev];
      temp.push({ id: '', link: '' });
      return temp;
    });
  };

  const handleBackwardClick = () => {
    setStepperIndex(prev => {
      return prev === 0 ? 0 : prev - 1;
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div>
          {comp === 'facebook' ? (
            <FaFacebookF color="#3C5A9A" size={40} />
          ) : comp === 'google' ? (
            <FaGoogle color="#3C5A9A" size={40} />
          ) : comp === 'tiktok' ? (
            <FaTiktok color="#3C5A9A" size={40} />
          ) : comp === 'bing' ? (
            <BiLogoBing color="#3C5A9A" size={40} />
          ) : (
            <FaSnapchat color="#3C5A9A" size={40} />
          )}
        </div>
        <h2>{capitalize(comp)} Ad account application</h2>
        <div className={styles.stepperContainer}>
          <Stepper
            alternativeLabel
            activeStep={stepperIndex}
            connector={<QontoConnector />}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {stepperIndex === 0 ? (
          <>
            <h3>Ad account details</h3>
            <span>Enter your advertising account details</span>
            <CustomInput
              label="Ad account name"
              placeholder="Enter your ad account name"
              name='account_name'
            />
            <CustomSelect
              label="Time zone"
              name="time_zone"
              options={[
                { title: 'Select your current time zone', value: '0' },
                ...timezones.map(el => ({ title: el.label, value: el.label })),
              ]}
            />
            <CustomInput
              label="Domain / Url"
              placeholder="Enter your domain or url"
            />
          </>
        ) : stepperIndex === 1 ? (
          <div className={styles.stepperIndex1}>
            <h3>{comp} page details</h3>
            <p>
              Pages submitted for review must conform to all our requirements or
              they will be rejected.
            </p>
            <p>
              <span style={{ color: '#616DB4' }}>
                {comp} Page's Requirements
              </span>{' '}
              : Cover photo - Profile photo - Phone number - Email address -
              Location <br /> - Website - Detailed description of your products
              and services - Page category relevant to your business
              <br /> - At least 03 to 05 Posts (Image + Link + Text) on the page
            </p>
            <p>
              <span style={{ color: '#616DB4' }}>Important</span> : Once the ad
              account has been approved and created, it will no longer be
              possibleto use additional pages on the ad account.
            </p>

            {Pages.map((el, idx) => {
              return (
                <div key={idx}>
                  <div>
                    <CustomInput
                      label={`Page ID ${idx + 1}`}
                      placeholder={`Enter your page ID ${idx + 1}`}
                    />
                  </div>
                  <div>
                    <CustomInput
                      label={`${comp} page link ${idx + 1}`}
                      placeholder={`Enter your ${comp} page link ${idx + 1}`}
                    />
                  </div>
                  {idx === Pages.length - 1 && (
                    <button onClick={handleAddPage}>Add a new page</button>
                  )}
                </div>
              );
            })}

            <p style={{ color: '#26283F', fontWeight: 'bold' }}>
              Assign this {comp} profile below as administrator of each page you
              submit. After review this profile can be removed
            </p>
            <p>
              I confirm that I have assigned this {comp} profile Page reviewer
              as administrator of the above pages{' '}
            </p>
          </div>
        ) : stepperIndex === 2 ? (
          <div className={styles.stepperIndex2}>
            <h3>Business manager details</h3>
            <p>
              Choose an business manager the one to who your ad account will be
              sent.
            </p>
            <div>
              <div>
                <CustomInput
                  label="Choose a business manager"
                  placeholder="Enter your choose a business manager"
                />
              </div>
              <button>Add a new business manager</button>
            </div>
          </div>
        ) : (
          <div className={styles.stepperIndex3}>
            <h3>{comp} page details</h3>
            <p>
              Import a screenshot that proves that you own the domains or
              promotion links. Acceptable images are :
              <ul>
                <li>
                  Screenshot of your Shopify dashboard at the domain panel
                </li>
                <li>
                  Screenshot from your web host's control panel (The domain must
                  be visible)
                </li>
                <li>
                  WordPress and any other website builder can be valid if you
                  make your domain name visible on your screenshot.
                </li>
              </ul>
            </p>
            <label>
              Backend Screenshot <span style={{ color: '#DB242F' }}>*</span>
            </label>
            <div className={styles.proofContainer}>
              <CiImageOn size={24} />
              <p>
                <span style={{ color: '#3949A1', cursor: 'pointer' }}>
                  Click to Upload
                </span>{' '}
                or drag and drop <br />
                DOC, PDF, PNG or JPG (max 10mb)
              </p>
            </div>
          </div>
        )}
        <div className={styles.bottomButtonsContainer}>
          <button onClick={handleBackwardClick}>Previous</button>
          <button onClick={handleForwardClick}>
            {stepperIndex === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
        <div className="buttom"></div>
      </div>
    </div>
  );
};

type CustomSelectProps = {
  label: string;
  options: { value: string; title: string }[];
  infos?: string;
  name?: string;
};

export const CustomSelect = ({
  label,
  options,
  infos,
  name,
}: CustomSelectProps) => {
  return (
    <CustomLabelWrapper label={label} infos={infos}>
      <select name={name}>
        {options.map((el, idx) => {
          return (
            <option key={idx} value={el.value}>
              {el.title}
            </option>
          );
        })}
      </select>
    </CustomLabelWrapper>
  );
};

export const CustomInput = ({
  label,
  placeholder,
  infos,
  value,
  handleKeyUp,
  handleChange,
  name,
}: {
  label: string;
  placeholder: string;
  infos?: string;
  value?: string;
  handleKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}) => {
  return (
    <CustomLabelWrapper label={label} infos={infos}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={value}
        name={name}
      />
    </CustomLabelWrapper>
  );
};

export const CustomLabelWrapper = ({
  label,
  infos,
  children,
}: {
  label: string;
  infos?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <>
      <label className={styles.CustomLabelWrapperLabel}>
        {label}
        <span style={{ color: '#DB242F' }}>*</span>
        {infos && (
          <>
            <span className={styles.infoCircle}>
              <FaInfoCircle />
            </span>
            <div className={styles.infosContainer}>
              <p>{infos}</p>
            </div>
          </>
        )}
      </label>
      {children}
    </>
  );
};

export default AdAccountRequest;
