/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LeftComponent from '../../components/Register/LeftComponent';
import RightComponent from '../../components/Register/RightComponent';
import styles from './LoginRegister.module.css';
const LoginRegister = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image1} src="images/Group11.svg" />
      <LeftComponent />
      <RightComponent />
      <img className={styles.image2} src="images/Group12.svg" />
    </div>
  );
};

export default LoginRegister;
