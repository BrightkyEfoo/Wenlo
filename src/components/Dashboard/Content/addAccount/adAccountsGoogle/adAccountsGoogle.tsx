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

export const adAccountGoogleEmitter = new Emitter();

export const adAccountGoogleEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsGoogle() {
  const [actual, setActual] = useState(0);
  const user = useAppSelector(state => state.user);
  adAccountGoogleEmitter.on(
    adAccountGoogleEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountGoogleEmitter}
        eventName={adAccountGoogleEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? (
          user.is_superuser ? (
            <MyAdAccountRequest comp="google" />
          ) : (
            <MyRequest comp="google" />
          )
        ) : (
          <Advertising comp="Google" />
        )}
      </div>
    </div>
  );
}

export default AdAccountsGoogle;
