import imageService from '../../../utils/ImageService';
import styles from './SubscriptionPlan.module.scss';
const images = imageService.getImages();

const subTableRows = [
  {
    date: '29 April, 2023',
    type: 'Monthly / Starter Plan',
    reciept: {
      pdf: () => {},
      docx: () => {},
    },
  },
  {
    date: '29 April, 2023',
    type: 'Monthly / Starter Plan',
    reciept: {
      pdf: () => {},
      docx: () => {},
    },
  },
  {
    date: '29 April, 2023',
    type: 'Monthly / Starter Plan',
    reciept: {
      pdf: () => {},
      docx: () => {},
    },
  },
];
const SubscriptionPlan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div>
          <img
            src={images['money-fly']}
            alt="money-fly"
            height={40}
            width={40}
          />
        </div>
        <div>
          <h2>Standart Plan</h2>
          <p>
            Next payment on November 5th, 2023 for <span>$60</span> monthly
          </p>
          <button>Cancel subscription</button>
          <button>Switch to annually</button>
        </div>
        <div>
          <p>Order history</p>
          <table>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Receipt</th>
            </tr>
            {subTableRows.map((el, idx) => {
              return (
                <tr key={'subTableRows' + idx}>
                  <td>{el.date}</td>
                  <td>{el.type}</td>
                  <td>
                    {Object.keys(el.reciept).map((recieptEl, idx2) => {
                      return (
                        <span key={'subTableRows' + idx + '-' + idx2}>
                          {recieptEl}
                        </span>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
