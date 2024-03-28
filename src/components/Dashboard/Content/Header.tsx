import { useState } from 'react';
import {
  FaBell,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from 'react-icons/fa';
import imageService from '../../../utils/ImageService';
import styles from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearUser } from '../../../redux/features/UserSlice';
import { useNavigate } from 'react-router-dom';
const images = imageService.getImages();

const notifications: Notification[] = [
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'approved',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'rejected',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'rejected',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'onHold',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'approved',
    icon: images['credit-card-plus'],
  },
];
const Header = () => {
  const user = useAppSelector(state => state.user);
  const [isNotifVisible, setIsNotifVisible] = useState(false);
  const [isProfileDetailsVisible, setIsProfileDetailsVisible] = useState(false);
  const handleNotificationDisplay = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsNotifVisible(prev => !prev);
  };

  const handleProfileDetails = () => {
    setIsProfileDetailsVisible(prev => !prev);
  };
  return (
    <div className={styles.container}>
      <p>👋 Welcome back, {user.last_name}</p>
      <div>
        <button>
          <FaSearch />
        </button>
        <button onClick={handleNotificationDisplay}>
          <FaBell />
        </button>
        <img src={images.profile} height={32} width={32} alt="profile" />
        <span>{user.last_name + ' ' + user.first_name.toUpperCase()}</span>
        <span>Premium Plan</span>
        <button
          onClick={handleProfileDetails}
          className={styles.profleShowArrow}
        >
          {isProfileDetailsVisible ? (
            <FaChevronUp size={14} />
          ) : (
            <FaChevronDown size={14} />
          )}
        </button>
      </div>

      {isNotifVisible && (
        <Notifs
          notifications={notifications}
          handleClose={() => setIsNotifVisible(false)}
        />
      )}
      {isProfileDetailsVisible && <ProfileDetails />}
    </div>
  );
};

const ProfileDetails = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className={styles.profileDetailsContainer}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.3307 14C13.3307 13.0696 13.3307 12.6044 13.2159 12.2259C12.9574 11.3736 12.2904 10.7067 11.4382 10.4482C11.0596 10.3333 10.5944 10.3333 9.66406 10.3333H6.33073C5.40035 10.3333 4.93517 10.3333 4.55663 10.4482C3.70437 10.7067 3.03742 11.3736 2.77889 12.2259C2.66406 12.6044 2.66406 13.0696 2.66406 14M10.9974 5C10.9974 6.65685 9.65425 8 7.9974 8C6.34054 8 4.9974 6.65685 4.9974 5C4.9974 3.34315 6.34054 2 7.9974 2C9.65425 2 10.9974 3.34315 10.9974 5Z"
            stroke="#828282"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>{' '}
        My Profile
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M11.3307 6.66667V5.33333C11.3307 3.49238 9.83835 2 7.9974 2C6.15645 2 4.66406 3.49238 4.66406 5.33333V6.66667M7.9974 9.66667V11M5.86406 14H10.1307C11.2508 14 11.8109 14 12.2387 13.782C12.615 13.5903 12.921 13.2843 13.1127 12.908C13.3307 12.4802 13.3307 11.9201 13.3307 10.8V9.86667C13.3307 8.74656 13.3307 8.18651 13.1127 7.75869C12.921 7.38236 12.615 7.0764 12.2387 6.88465C11.8109 6.66667 11.2508 6.66667 10.1307 6.66667H5.86406C4.74396 6.66667 4.18391 6.66667 3.75608 6.88465C3.37976 7.0764 3.0738 7.38236 2.88205 7.75869C2.66406 8.18651 2.66406 8.74656 2.66406 9.86667V10.8C2.66406 11.9201 2.66406 12.4802 2.88205 12.908C3.0738 13.2843 3.37976 13.5903 3.75608 13.782C4.18391 14 4.74396 14 5.86406 14Z"
            stroke="#828282"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Change Password
      </div>
      <div
        onClick={e => {
          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');
          dispatch(clearUser());
          navigate('/login');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6M6 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.7157 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H6"
            stroke="#828282"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Logout
      </div>
    </div>
  );
};

const NotifRaw = ({ icon, title, date, state, id }: Notification) => {
  const getStateText = () => {
    switch (state) {
      case 'rejected':
        return (
          <p>
            Your deposit withdrawal is{' '}
            <span className={styles['red-text']}>Rejected</span>
          </p>
        );
      case 'approved':
        return (
          <p>
            Your deposit request has been{' '}
            <span className={styles['green-text']}>Approved</span>
          </p>
        );
      case 'onHold':
        return (
          <p>
            Your deposit request is{' '}
            <span className={styles['yellow-text']}>On hold</span>
          </p>
        );
    }
  };
  return (
    <div className={styles.notifRawContainer}>
      <div>
        <img src={icon} alt="" />
      </div>
      <span>{title}</span>
      {getStateText()}
      <span>
        <img src={images.schedule} alt="clock" />
        {date}
      </span>
      <span>{id}</span>
    </div>
  );
};

type Notification = {
  icon: string;
  title: string;
  date: string;
  state: 'approved' | 'rejected' | 'onHold';
  id: string;
};

const Notifs = ({
  notifications,
  handleClose,
}: {
  notifications?: Notification[];
  handleClose: () => void;
}) => {
  return (
    <div className={styles.notifsContainer}>
      <p>Notification</p>
      <div className={styles.notifsSubContainer}>
        {notifications ? (
          notifications.map((el, idx) => {
            return <NotifRaw {...el} />;
          })
        ) : (
          <p>Nothing now</p>
        )}
      </div>
      <button>See all notifications</button>
    </div>
  );
};
export default Header;
