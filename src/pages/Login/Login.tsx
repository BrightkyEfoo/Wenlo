/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LeftComponent from '../../components/Register/LeftComponent';
import RightComponent from '../../components/Register/RightComponent';
import styles from './Login.module.css';
const Login = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image1} src="/Group11.svg" />
      <LeftComponent />
      <RightComponent />
      <img className={styles.image2} src="/Group12.svg" />
    </div>
  );
};

export default Login;
