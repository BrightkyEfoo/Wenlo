import { FaSnapchat, FaXmark } from 'react-icons/fa6';
import styles from './PopupRequestSummary.module.scss';

const PopupRequestSummary = ({ handleClose }: { handleClose: () => void }) => {
  const handleClosed = () => {
    handleClose();
  };
  const rejected = true;
  return (
    <div
      className={styles.popup}
      onClick={e => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className={styles.container}>
        <div>
          <p>Top-up Request summary</p>

          <span>
            #8FB28438-0001 <span>On review</span>
          </span>
          <button onClick={handleClosed}>
            <FaXmark />
          </button>
          {rejected && (
            <div className={styles.rejected}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99817 7.50019V10.8335M9.99817 14.1669H10.0065M8.84427 3.24329L1.99019 15.0821C1.61002 15.7388 1.41994 16.0671 1.44803 16.3366C1.47254 16.5716 1.59568 16.7852 1.78681 16.9242C2.00594 17.0835 2.38533 17.0835 3.1441 17.0835H16.8522C17.611 17.0835 17.9904 17.0835 18.2095 16.9242C18.4007 16.7852 18.5238 16.5716 18.5483 16.3366C18.5764 16.0671 18.3863 15.7388 18.0061 15.0821L11.1521 3.24329C10.7733 2.58899 10.5839 2.26184 10.3368 2.15196C10.1212 2.05612 9.87513 2.05612 9.65959 2.15196C9.41248 2.26184 9.22307 2.58899 8.84427 3.24329Z"
                  stroke="#E97000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                Rejected due to lorem ipsum dolor sit amet consectetur. Lectus
                tellus egestas et duis aliquet malesuada tincidunt orci.
              </span>
            </div>
          )}
        </div>

        <div>
          <FaSnapchat /> <span>ID: 64272</span>
          <p>Gabriela Hudges</p>
        </div>

        <div>
          <span>
            Top-up amount ($)<span style={{ color: 'red' }}>*</span>
          </span>
          <p>$100</p>
        </div>
        <div>
          <span>Top-up Fee</span>
          <p>$4.49</p>
          <span>VAT</span>
          <p>$4.49</p>
          <p>Amount Due</p>
          <p>$20.48</p>
        </div>
      </div>
    </div>
  );
};

export default PopupRequestSummary;
