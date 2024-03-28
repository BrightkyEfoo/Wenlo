import React, { useState } from 'react';
import styles from './switch.module.scss';

const Switch = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  return (
    <div
      className={isSwitched ? styles.container : styles['container-switched']}
      onClick={e => setIsSwitched(prev => !prev)}
    >
      <div></div>
    </div>
  );
};

export default Switch;
