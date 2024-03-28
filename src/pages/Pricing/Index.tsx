/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import HeaderCompoent from '../../components/pricing/HeaderComponent';
import styles from './Pricing.module.css';
import PricingMonthlyComponent from '../../components/pricing/PricingMonthlyComponent';
import PricingAnnuallyCompoenet from '../../components/pricing/PricingAnnuallyComponent';


const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image1} src="images/group-1.svg" />
      <img  className={styles.image3} src="images/image-12@2x.png" />
      <HeaderCompoent isMonthly={isMonthly} onToggle={handleToggle} />
      <PricingMonthlyComponent isMonthly={isMonthly}/>
      <PricingAnnuallyCompoenet isMonthly={isMonthly}/>
      <img className={styles.image2} src="images/group-1.svg" />
    </div>
  );
};

export default Pricing;
