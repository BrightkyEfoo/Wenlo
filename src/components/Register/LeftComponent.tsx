import { BsThreeDotsVertical } from 'react-icons/bs';
import Frame from './Frame';
import styles from './LeftComponent.module.css';
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from './Pagination';
const LeftComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.top}>
          <img src="images/astronaut.svg" alt="astro" />
          <h2 className="bold-title font-32 color-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p className="simple-grayed-p font-14 color-gray">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
        <Frame>
          <div className={styles.frameSubContainer}>
            <div>
              <div>
                <p className="font-14 color-black font-500">Amount Due</p>
                <p className="font-14 color-gray">
                  Invoices are issued between the 1st and 5th of each month and
                  are due 30 days later.
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <div className={styles.frameRow2}>
              <p className="font-16 font-800">$26,667.73</p>
              <button className="btn-variant-1">Pay now</button>
            </div>
            <div>
              <p className="font-14">
                Account Spending Limit:{' '}
                <span className="font-800">$27,810.00</span>
              </p>
              <LinearProgress
                variant="determinate"
                sx={{ borderRadius: 25 }}
                color="success"
                value={62}
              />
              <p className={'font-12 ' + styles.last}>
                <span>
                  <span>$26,667.73 spent / </span>
                  <span className="color-blue">$27,810.00 available</span>
                </span>
              </p>
            </div>
          </div>
        </Frame>
      </div>
      <Pagination actual={0} pages={4} />
    </div>
  );
};

export default LeftComponent;
