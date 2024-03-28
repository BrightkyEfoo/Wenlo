import React from 'react';
import style from './HeaderComponent.module.css';

type ToggleSwitchProps = {
  isMonthly: boolean;
  onToggle: () => void;
};

const HeaderCompoent: React.FC<ToggleSwitchProps> = ({
  isMonthly,
  onToggle,
}) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.circle}>
          <img src="images/money-fly.png" height={48} width={48} alt="money" />
        </div>
        <h2 className="bold-title font-32 color-black">Pricing plan</h2>
        <p className="simple-grayed-p font-14 color-gray">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad
          <br /> minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <div className={style.toggleContainer} onClick={onToggle}>
          <span className={`${style.label} ${isMonthly ? style.active : ''}`}>
            Monthly
          </span>
          <div
            className={`${style.toggle} ${
              isMonthly ? style.monthly : style.annually
            }`}
          >
            <div className={style.toggleSwitch}></div>
          </div>
          <span className={`${style.label} ${!isMonthly ? style.active : ''}`}>
            Annually
          </span>
        </div>
      </div>
    </div>
  );
};
export default HeaderCompoent;
