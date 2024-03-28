import { ChangeEvent, useState } from 'react';
import imageService from '../../utils/ImageService';
import styles from './index.module.scss';

const images = imageService.getImages();

const ChatBot = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [message, setMessage] = useState('');

  type Message = {
    message: string;
    status: boolean;
  }[];
  const mockMessage: Message = [
    {
      message: 'Hi veillez-nous laisser votre message!',
      status: false,
    },
    {
      message: 'bonjour',
      status: true,
    },
    {
      message:
        `bonjour comment pouvons-nous vous aider?,
        bonjour comment pouvons-nous vous aider?bonjour comment pouvons-nous vous aider?
        bonjour comment pouvons-nous vous aider?
        bonjour comment pouvons-nous vous aider?
        bonjour comment pouvons-nous vous aider?
        bonjour comment pouvons-nous vous aider?`,
      status: true,
    },
    {
      message: 'bonjour',
      status: true,
    },
    {
      message: 'bonjour',
      status: true,
    },
    {
      message: 'bonjour',
      status: true,
    },
    {
      message: 'bonjour',
      status: true,
    },
  ];
  const [mockMessages, setMockMessages] = useState(mockMessage);

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleAllMessage = () => {
    setMockMessages(prev => {
      let temp = prev;
      temp.push({
        message: message,
        status: true,
      });
      setMessage('');
      return temp;
    });
  };
  return (
    <div className={styles.container}>
      {isChatVisible ? (
        <div className={styles.containerChatbot}>
          <div className={styles.header}>
            <div>
              <img
                src={images.profile2}
                alt="profil-2"
                height={24}
                width={24}
              />
              <img src={images.profile} alt="profil" height={24} width={24} />
            </div>
            <p>Hi There 👋</p>
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.0026 8.66699C8.37079 8.66699 8.66927 8.36852 8.66927 8.00033C8.66927 7.63214 8.37079 7.33366 8.0026 7.33366C7.63441 7.33366 7.33594 7.63214 7.33594 8.00033C7.33594 8.36852 7.63441 8.66699 8.0026 8.66699Z"
                    stroke="#828282"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.0026 4.00033C8.37079 4.00033 8.66927 3.70185 8.66927 3.33366C8.66927 2.96547 8.37079 2.66699 8.0026 2.66699C7.63441 2.66699 7.33594 2.96547 7.33594 3.33366C7.33594 3.70185 7.63441 4.00033 8.0026 4.00033Z"
                    stroke="#828282"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.0026 13.3337C8.37079 13.3337 8.66927 13.0352 8.66927 12.667C8.66927 12.2988 8.37079 12.0003 8.0026 12.0003C7.63441 12.0003 7.33594 12.2988 7.33594 12.667C7.33594 13.0352 7.63441 13.3337 8.0026 13.3337Z"
                    stroke="#828282"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div></div>
              <button
                onClick={() => {
                  setIsChatVisible(prev => !prev);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#828282"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.body}>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_31661)">
                    <path
                      d="M13.7416 7.875L12.5753 6.70833L11.4083 7.875M12.75 7C12.75 9.8995 10.3995 12.25 7.5 12.25C4.60051 12.25 2.25 9.8995 2.25 7C2.25 4.10051 4.60051 1.75 7.5 1.75C9.42612 1.75 11.11 2.78725 12.0235 4.33364M7.5 4.08333V7L9.25 8.16667"
                      stroke="#828282"
                      stroke-width="1.16667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_31661">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>Previous Message</p>
            </div>
            <div>
              {mockMessages.map((el, key) => (
                <PrintMessage message={el.message} status={el.status} />
              ))}
            </div>
          </div>
          <div className={styles.footer}>
            <div>
              <input
                type="text"
                placeholder="Write a message..."
                value={message}
                onChange={handleOnchange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M12.3387 6.35871L7.07958 11.6178C5.8836 12.8138 3.94453 12.8138 2.74855 11.6178C1.55257 10.4218 1.55257 8.48276 2.74855 7.28678L8.00765 2.02768C8.80497 1.23036 10.0977 1.23036 10.895 2.02768C11.6923 2.825 11.6923 4.11771 10.895 4.91503L5.84214 9.9679C5.44348 10.3666 4.79712 10.3666 4.39846 9.9679C3.9998 9.56924 3.9998 8.92288 4.39846 8.52422L8.83261 4.09007"
                  stroke="#939393"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.66406 8.16699C4.66406 8.16699 5.53906 9.33366 6.9974 9.33366C8.45573 9.33366 9.33073 8.16699 9.33073 8.16699M8.7474 5.25033H8.75323M5.2474 5.25033H5.25323M12.8307 7.00033C12.8307 10.222 10.2191 12.8337 6.9974 12.8337C3.77573 12.8337 1.16406 10.222 1.16406 7.00033C1.16406 3.77866 3.77573 1.16699 6.9974 1.16699C10.2191 1.16699 12.8307 3.77866 12.8307 7.00033ZM9.03906 5.25033C9.03906 5.41141 8.90848 5.54199 8.7474 5.54199C8.58631 5.54199 8.45573 5.41141 8.45573 5.25033C8.45573 5.08924 8.58631 4.95866 8.7474 4.95866C8.90848 4.95866 9.03906 5.08924 9.03906 5.25033ZM5.53906 5.25033C5.53906 5.41141 5.40848 5.54199 5.2474 5.54199C5.08631 5.54199 4.95573 5.41141 4.95573 5.25033C4.95573 5.08924 5.08631 4.95866 5.2474 4.95866C5.40848 4.95866 5.53906 5.08924 5.53906 5.25033Z"
                  stroke="#939393"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <button onClick={handleAllMessage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.87312 9.00009H3.74812M3.68463 9.21871L1.93344 14.4497C1.79587 14.8607 1.72708 15.0662 1.77644 15.1927C1.81931 15.3026 1.91139 15.3859 2.025 15.4176C2.15582 15.4541 2.35342 15.3652 2.74862 15.1874L15.2822 9.54724C15.668 9.37366 15.8608 9.28686 15.9205 9.16629C15.9722 9.06154 15.9722 8.93863 15.9205 8.83388C15.8608 8.71331 15.668 8.62652 15.2822 8.45294L2.74425 2.81088C2.35025 2.63358 2.15324 2.54493 2.02254 2.58129C1.90904 2.61287 1.81698 2.69596 1.77396 2.80565C1.72443 2.93194 1.79248 3.13697 1.92858 3.54704L3.68512 8.83923C3.7085 8.90966 3.72018 8.94488 3.7248 8.98089C3.72889 9.01285 3.72885 9.04521 3.72467 9.07715C3.71997 9.11316 3.70819 9.14834 3.68463 9.21871Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setIsChatVisible(prev => !prev);
            }}
            className={styles.button}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H9.68375C9.0597 18 8.74767 18 8.44921 18.0613C8.18443 18.1156 7.9282 18.2055 7.68749 18.3285C7.41617 18.4671 7.17252 18.662 6.68521 19.0518L4.29976 20.9602C3.88367 21.2931 3.67563 21.4595 3.50054 21.4597C3.34827 21.4599 3.20422 21.3906 3.10923 21.2716C3 21.1348 3 20.8684 3 20.3355V7.8Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

const PrintMessage = ({
  message,
  status,
}: {
  message: string;
  status: boolean;
}) => {
  return (
    <div className={styles.message + ' ' + (status ? styles.messageSend : '')}>
      {message}
    </div>
  );
};
export default ChatBot;
