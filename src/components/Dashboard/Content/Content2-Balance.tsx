import { useEffect, useState } from 'react';
import { Section7, Section9, section9RowsMock } from './Content1-Main';
import styles from './Content2-Main.module.scss';
import MainBalanceDeposit from './TopUp/MainBalanceDeposit';
import { useNavigate } from 'react-router-dom';

const Balance = () => {
  const [isVisibleWithdrawal, setIsVisibleWithdrawal] = useState(false);
  const [isVisibleDeposit, setIsVisibleDeposit] = useState(false);

  const navigate = useNavigate()
  const setVisibilityWithdrawal = () => {
    setIsVisibleWithdrawal(true);
  };
  const setVisibilityDeposit = () => {
    setIsVisibleDeposit(true);
  };
  const [section9Rows, setSection9Rows] = useState(section9RowsMock);
  useEffect(() => {
    
  }, []);

  return (
    <div className={styles.container}>
      <h2>Main Balance Management</h2>
      <button onClick={()=> navigate('withdrawal')}>Withdrawal</button>
      <button onClick={()=> navigate('deposit')}>Deposit</button>
      {isVisibleWithdrawal ? (
        <MainBalanceDeposit
          handleClose={() => setIsVisibleWithdrawal(false)}
          isWithdrawal={true}
        />
      ) : null}
      {isVisibleDeposit ? (
        <MainBalanceDeposit handleClose={() => setIsVisibleDeposit(false)} />
      ) : null}
      <Section7 />
      <Section9 section9Rows={section9Rows} />
    </div>
  );
};

export default Balance;
