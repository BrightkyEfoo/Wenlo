import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Content1-Main';
import Balance from './Content2-Balance';
import AdAccounts from './Content3-AdAccounts';
import Billings from './Content4-Billings';
import Transfert from './Content5-Transfert';
import AccountAccess from './Content6-AccountAccess';
import BusinessRecords from './Content7-BusinessRecords';
import Profile from './Content8-Profile';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import styles from './Index.module.scss';
import SubscriptionPlan from './SubscriptionPlan';
import MainBalanceDeposit from './MainBalanceDeposit';
import MainBalanceWithdrawal from './MainBalanceWithdrawal';
import AdAccountsFacebook from './addAccount/adAccountsFacebook/adAccountsFacebook';
import AdAccountsGoogle from './addAccount/adAccountsGoogle/adAccountsGoogle';
import AdAccountsTiktok from './addAccount/adAccountsTiktok/adAccountsTiktok';
import AdAccountsBing from './addAccount/adAccountsBing/adAccountsBing';
import AdAccountsSnap from './addAccount/adAccountsSnapchat/adAccountsSnapchat';
import AdAccountRequest from './addAccount/adAccountsFacebook/Request';
import { useAppSelector } from '../../../redux/hooks';
import MainBalance from './back-office/MainBalance';

const DashboardContent = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main-balance" element={user.is_superuser ? <MainBalance/> : <Balance />} />
        <Route path="/main-balance/deposit" element={<MainBalanceDeposit />} />
        <Route
          path="/main-balance/withdrawal"
          element={<MainBalanceWithdrawal />}
        />
        <Route path="/ad-account" element={<AdAccounts />} />
        <Route path="/ad-account/facebook" element={<AdAccountsFacebook />} />
        <Route
          path="/ad-account/facebook/request"
          element={<AdAccountRequest />}
        />
        <Route path="/ad-account/google" element={<AdAccountsGoogle />} />
        <Route
          path="/ad-account/google/request"
          element={<AdAccountRequest />}
        />
        <Route path="/ad-account/tiktok" element={<AdAccountsTiktok />} />
        <Route
          path="/ad-account/tiktok/request"
          element={<AdAccountRequest />}
        />
        <Route path="/ad-account/bing" element={<AdAccountsBing />} />
        <Route path="/ad-account/bing/request" element={<AdAccountRequest />} />
        <Route path="/ad-account/snapchat" element={<AdAccountsSnap />} />
        <Route
          path="/ad-account/snapchat/request"
          element={<AdAccountRequest />}
        />
        <Route path="/top-up-billings" element={<Billings />} />
        <Route path="/balance-transfer" element={<Transfert />} />
        <Route path="/manage-ad-account-access" element={<AccountAccess />} />
        <Route path="/people-business-records" element={<BusinessRecords />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/profile/subscription-plan"
          element={<SubscriptionPlan />}
        />
      </Routes>
    </div>
  );
};

export default DashboardContent;
