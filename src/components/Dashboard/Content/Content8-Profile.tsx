import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import imageService from '../../../utils/ImageService';
import ChatBot from '../../ChatBot';
import styles from './Content8.module.scss';
import { useAppSelector } from '../../../redux/hooks';
const images = imageService.getImages();

const Profile = () => {
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [Message, setMessage] = useState('');

  // const handleOnchange = (e:)=>{
  //   setMessage(e.target.value)
  // }
  return (
    <div className={styles.container}>
      <h2>{isProfileEditing ? 'Edit My Profile' : 'My Profile'}</h2>
      {isProfileEditing ? (
        <>
          <button
            onClick={() => {
              setIsProfileEditing(false);
            }}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setIsProfileEditing(false);
            }}
          >
            Save profile
          </button>
        </>
      ) : (
        <>
          <div></div>{' '}
          <button
            onClick={() => {
              setIsProfileEditing(true);
            }}
          >
            Edit my profile
          </button>
        </>
      )}
      {isProfileEditing ? <EditProfile /> : <ViewProfile />}
    </div>
  );
};

const ChangePasswordPopup = ({ handleClose }: { handleClose: () => void }) => {
  const [isVisible, setIsVisible] = useState({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleClick = (idx: number) => {
    return () =>
      setIsVisible(prev => {
        let temp = { ...prev };
        const actualproperty =
          idx === 1
            ? 'password'
            : idx === 2
            ? 'newPassword'
            : 'confirmPassword';
        temp[actualproperty] = !prev[actualproperty];
        return temp;
      });
  };
  return (
    <div className={styles.popup}>
      <div className={styles.popupContainer}>
        <div className={styles.popupHeader}>
          <p>Change password</p>
          <span>
            Enter a new email address for your account. You will receive a
            verification email to your current email address with a link to
            finalize the change.
          </span>
        </div>
        <div className={styles.popupBody}>
          <label>Password</label>
          <div>
            <input
              type={isVisible.password ? 'text' : 'password'}
              placeholder="Enter your current password"
            />
            <button onClick={handleClick(1)}>
              {isVisible.password ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <label>New Password</label>
          <div>
            <input
              type={isVisible.password ? 'text' : 'password'}
              placeholder="Enter new password"
            />
            <button onClick={handleClick(1)}>
              {isVisible.password ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <label>Password</label>
          <div>
            <input
              type={isVisible.password ? 'text' : 'password'}
              placeholder="Enter confirmation password"
            />
            <button onClick={handleClick(1)}>
              {isVisible.password ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>
        <div className={styles.popupFooter}>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleClose}>Submit</button>
        </div>
      </div>
    </div>
  );
};

const EditProfile = () => {
  const user = useAppSelector(state => state.user);
  const [profile, setProfile] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phone: '08993973313',
    country: 'Indonesia',
    city: 'Yogyakarta',
    postalCode: '66225',
    address: 'Kaliurang street km 12, Ngaglik District, Sleman Regency',
    photo: images.profile,
    displayName: user.last_name + ' ' + user.first_name.toUpperCase(),
  });
  const handleChangeByTagName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => {
      let temp = { ...prev };
      temp[e.target.name as keyof typeof temp] = e.target.value;
      return temp;
    });
  };
  return (
    <div className={styles.editContainer}>
      <div>
        <p>Personal Information</p>
        <div className={styles.medium}>
          <span>First name</span>
          <input
            type="text"
            onChange={handleChangeByTagName}
            name="firstName"
            value={profile.firstName}
          />
        </div>
        <div className={styles.medium}>
          <span>Last name</span>
          <input
            type="text"
            onChange={handleChangeByTagName}
            name="lastName"
            value={profile.lastName}
          />
        </div>
        <div className={styles.medium}>
          <span>email</span>
          <input
            type="email"
            onChange={handleChangeByTagName}
            name="email"
            value={profile.email}
          />
        </div>
        <div className={styles.medium}>
          <span>Phone number</span>
          <input
            type="tel"
            onChange={handleChangeByTagName}
            name="phone"
            value={profile.phone}
          />
        </div>
        <div className={styles.small}>
          <span>Country</span>
          <select>
            <option value="0">Indonesia</option>
          </select>
        </div>
        <div className={styles.small}>
          <span>City</span>
          <input
            type="text"
            onChange={handleChangeByTagName}
            name="city"
            value={profile.city}
          />
        </div>
        <div className={styles.small}>
          <span>Postal Code</span>
          <input
            type="text"
            onChange={handleChangeByTagName}
            name="postalCode"
            value={profile.postalCode}
          />
        </div>
        <div className={styles.big}>
          <span>Address</span>
          <input
            type="text"
            onChange={handleChangeByTagName}
            name="address"
            value={profile.address}
          />
        </div>
      </div>
      <div>
        <p>Profile Photo</p>
        <div>
          <img src={profile.photo} alt="profile" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.33594 5.58449C1.33594 5.35094 1.33594 5.23417 1.34568 5.13582C1.43967 4.18719 2.19012 3.43674 3.13874 3.34275C3.2371 3.33301 3.36018 3.33301 3.60633 3.33301C3.70117 3.33301 3.7486 3.33301 3.78886 3.33057C4.30301 3.29943 4.75324 2.97493 4.94537 2.49701C4.96041 2.45958 4.97448 2.41739 5.0026 2.33301C5.03073 2.24863 5.04479 2.20644 5.05984 2.16901C5.25197 1.69109 5.7022 1.36658 6.21635 1.33545C6.25661 1.33301 6.30108 1.33301 6.39003 1.33301H9.61518C9.70412 1.33301 9.7486 1.33301 9.78886 1.33545C10.303 1.36658 10.7532 1.69109 10.9454 2.16901C10.9604 2.20644 10.9745 2.24863 11.0026 2.33301C11.0307 2.41739 11.0448 2.45958 11.0598 2.49701C11.252 2.97493 11.7022 3.29943 12.2163 3.33057C12.2566 3.33301 12.304 3.33301 12.3989 3.33301C12.645 3.33301 12.7681 3.33301 12.8665 3.34275C13.8151 3.43674 14.5655 4.18719 14.6595 5.13582C14.6693 5.23417 14.6693 5.35094 14.6693 5.58449V10.7997C14.6693 11.9198 14.6693 12.4798 14.4513 12.9077C14.2595 13.284 13.9536 13.5899 13.5773 13.7817C13.1494 13.9997 12.5894 13.9997 11.4693 13.9997H4.53594C3.41583 13.9997 2.85578 13.9997 2.42796 13.7817C2.05163 13.5899 1.74567 13.284 1.55392 12.9077C1.33594 12.4798 1.33594 11.9198 1.33594 10.7997V5.58449Z"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.0026 10.9997C9.47536 10.9997 10.6693 9.80577 10.6693 8.33301C10.6693 6.86025 9.47536 5.66634 8.0026 5.66634C6.52984 5.66634 5.33594 6.86025 5.33594 8.33301C5.33594 9.80577 6.52984 10.9997 8.0026 10.9997Z"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <label>Display Name</label>
          <input
            type="text"
            name="displayName"
            value={profile.displayName}
            onChange={handleChangeByTagName}
          />
        </div>
      </div>
    </div>
  );
};

const ViewProfile = () => {
  const user = useAppSelector(state => state.user);
  const [isChangePasswordPopupVisible, setIsChangePasswordPopupVisible] =
    useState(false);
  const handleClose = () => {
    setIsChangePasswordPopupVisible(false);
  };
  return (
    <>
      {isChangePasswordPopupVisible ? (
        <ChangePasswordPopup handleClose={handleClose} />
      ) : null}
      <div className={styles.infosContainer}>
        <p>Personal Information</p>
        <span>Name</span>
        <p>{user.last_name + ' ' + user.first_name.toUpperCase()}</p>
        <span>Country</span>
        <p>Indonesia</p>
        <span>City</span>
        <p>Yogyakarta</p>
        <span>Postal Code</span>
        <p>66225</p>
        <span>Phone number</span>
        <p>08993973313</p>
        <span>Address</span>
        <p>Kaliurang street km 12, Ngaglik District, Sleman Regency</p>
      </div>
      <div className={styles.infosContainer}>
        <p>Account settings</p>
        <span>Account settings</span>
        <p>{user.email}</p>
        <span>Password</span>
        <p onClick={() => setIsChangePasswordPopupVisible(true)}>
          ***************
        </p>
        <span>Member since</span>
        <p>2023-04-26</p>
      </div>
    </>
  );
};

export default Profile;
