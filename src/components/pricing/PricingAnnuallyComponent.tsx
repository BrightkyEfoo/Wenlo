import React from 'react';
import style from './pricingComponent.module.css';
import { BigRadioComp } from './PricingMonthlyComponent';

type PricingAnnuallyCompoenetProps = {
  isMonthly: boolean;
};

const planRadios = [
  {
    name: 'monthpal',
    radios: [
      'Starter Plan',
      'Standart Plan',
      'Premium Plan',
      'Enterprise-level Plan',
    ],
  },
];

const PricingAnnuallyCompoenet: React.FC<PricingAnnuallyCompoenetProps> = ({
  isMonthly,
}) => {
  if (isMonthly) return null;

  return (
    <div>
      <div className={style.subContainer}>
        {planRadios[0].radios.map((el, i) => {
            return <BigRadioComp key={i} el={el} />
        })}
      </div>
      <p className="font-20 font-600 text-center margin-15">
        Can’t find your best plan? 😵‍💫 <b>Custom your plan instead</b>
      </p>
      <div className={style.footer}>
        <button className={style.endboutton}>Back</button>
        <button className={style.endboutton}>Next</button>
      </div>
    </div>
  );
};

export default PricingAnnuallyCompoenet;
