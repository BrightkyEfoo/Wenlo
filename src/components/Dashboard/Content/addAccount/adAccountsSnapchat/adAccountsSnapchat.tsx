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

export const adAccountSnapchatEmitter = new Emitter();

export const adAccountSnapchatEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsSnap() {
  const user = useAppSelector(state => state.user);
  const [actual, setActual] = useState(0);
  adAccountSnapchatEmitter.on(
    adAccountSnapchatEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountSnapchatEmitter}
        eventName={adAccountSnapchatEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? (
          user.is_superuser ? (
            <MyAdAccountRequest comp="Snapchat" />
          ) : (
            <MyRequest comp="Snapchat" />
          )
        ) : (
          <Advertising comp="Snapchat" />
        )}
      </div>
    </div>
  );
}

export default AdAccountsSnap;
