import { useEffect, useState } from 'react';
import {
  adAccountFacebookEmitter,
  adAccountFacebookEmitterEvents,
} from '../adAccountsFacebook/adAccountsFacebook';
import styles from './index.module.scss';
import Emitter from '../../../../../utils/EventEmitter/EventEmitter';

const tabs = [
  {
    title: 'My Requests',
  },
  {
    title: 'Advertising Accounts',
  },
];

const AdAccountsNav = ({
  actual,
  emitter,
  eventName,
}: {
  actual: number;
  emitter: Emitter;
  eventName: string;
}) => {
  return (
    <div className={styles.container}>
      {tabs.map((el, idx) => {
        return (
          <Tab
            key={idx}
            emitter={emitter}
            eventName={eventName}
            actual={actual}
            idx={idx}
            {...el}
          />
        );
      })}
    </div>
  );
};

type TabProps = {
  title: string;
  idx: number;
  actual: number;
  emitter: Emitter;
  eventName: string;
};
const Tab = ({ idx, title, actual, emitter, eventName }: TabProps) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(prev => actual === idx);
  }, [actual, idx]);

  const handleClick = () => {
    setIsSelected(true);

    emitter.emit(
      eventName,
      idx
    );
  };
  return (
    <div
      className={
        styles.tabContainer +
        ' ' +
        (isSelected ? styles.tabContainerSelected : '')
      }
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
export default AdAccountsNav;
