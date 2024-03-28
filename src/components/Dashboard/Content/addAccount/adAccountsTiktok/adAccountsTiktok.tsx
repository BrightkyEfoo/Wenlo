import React, { useState } from 'react';
import style from './style.scss';
import AdAccountsNav from '../nav';
import Emitter from '../../../../../utils/EventEmitter/EventEmitter';
import {
  Advertising,
  MyRequest,
} from '../adAccountsFacebook/adAccountsFacebook';
import MyAdAccountRequest from '../../back-office/MyAdAccountRequest';
import { useAppSelector } from '../../../../../redux/hooks';

export const adAccountTiktokEmitter = new Emitter();

export const adAccountTiktokEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsTiktok() {
  const user = useAppSelector(state => state.user);
  const [actual, setActual] = useState(0);
  adAccountTiktokEmitter.on(
    adAccountTiktokEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountTiktokEmitter}
        eventName={adAccountTiktokEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? (
          user.is_superuser ? (
            <MyAdAccountRequest comp="Tiktok" />
          ) : (
            <MyRequest comp="Tiktok" />
          )
        ) : (
          <Advertising comp="Tiktok" />
        )}
      </div>
    </div>
  );
}

export default AdAccountsTiktok;
