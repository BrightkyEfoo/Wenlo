import React, { useState } from 'react';
import style from './style.scss';
import AdAccountsNav from '../nav';
import Emitter from '../../../../../utils/EventEmitter/EventEmitter';
import {
  Advertising,
  MyRequest,
} from '../adAccountsFacebook/adAccountsFacebook';
import { useAppSelector } from '../../../../../redux/hooks';
import MyAdAccountRequest from '../../back-office/MyAdAccountRequest';

export const adAccountBingEmitter = new Emitter();

export const adAccountBingEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsBing() {
  const user = useAppSelector(state => state.user);

  const [actual, setActual] = useState(0);
  adAccountBingEmitter.on(
    adAccountBingEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountBingEmitter}
        eventName={adAccountBingEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? (
          user.is_superuser ? (
            <MyAdAccountRequest comp="Bing" />
          ) : (
            <MyRequest comp="Bing" />
          )
        ) : (
          <Advertising comp="Bing" />
        )}
      </div>
    </div>
  );
}

export default AdAccountsBing;
