import React, { ReactNode } from 'react';
import styles from './Frame.module.css';
type Props = {
  children: ReactNode;
};

const Frame = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Frame;
