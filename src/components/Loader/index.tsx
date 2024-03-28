import { useState } from 'react';
import Emitter from '../../utils/EventEmitter/EventEmitter';
import styles from './loder.module.scss';
import { ClockLoader } from 'react-spinners';

export const LoaderEmitter = new Emitter();
export const LoaderEmitterEventsNames = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);
  LoaderEmitter.on(LoaderEmitterEventsNames.START_LOADING, () => {
    setIsLoading(true);
  });
  LoaderEmitter.on(LoaderEmitterEventsNames.STOP_LOADING, () => {
    setIsLoading(false);
  });
  return isLoading ? (
    <div className={styles.container}>
      <div className={styles.subContainer}>
      <ClockLoader color="#36d7b7" size={100} />
       <span> Chargement... </span></div>
    </div>
  ) : null;
};

export default Loader;
