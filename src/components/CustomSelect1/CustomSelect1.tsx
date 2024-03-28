import React, { useState } from 'react';
import styles from './style.module.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Item = {
  text: string;
  value: string;
};

type Props = {
  options: Item[];
  defaultOption: Item;
  handleSelect?: (item: Item) => void;
};

const sortAndSeparate = (options: Item[]) => {
  let res: { [key: string]: Item[] } = {};
  for (let i = 0; i < options.length; i++) {
    let firstChar = options[i].text.charAt(0).toUpperCase();
    if (!res[firstChar]) {
      res[firstChar] = [options[i]];
    } else {
      res[firstChar].push(options[i]);
    }
  }
  return res;
};

const CustomSelect1 = ({ options, defaultOption, handleSelect }: Props) => {
  const [value, setValue] = useState<{
    text: string;
    value: string;
  }>(defaultOption);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const sortedOptions = sortAndSeparate(options);

  const handleClick = () => {
    setIsPopUpVisible(prev => !prev);
  };

  const handleClick2 = (str: string) => {
    return () => {
      let temp = options.filter(el => el.value === str)[0];
      setValue(temp);
      if (handleSelect) handleSelect(temp);
      setIsPopUpVisible(false);
    };
  };
  return (
    <div className={styles.container}>
      <div className={styles.head} onClick={handleClick}>
        <span>{value.text}</span>{' '}
        <button>{isPopUpVisible ? <FaChevronUp /> : <FaChevronDown />}</button>
      </div>
      {isPopUpVisible && (
        <div className={styles.bottom}>
          {Object.keys(sortedOptions).map((key, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className={styles.headerOption}>{key}</div>
                {sortedOptions[key].map((el, idx) => {
                  return (
                    <div
                      key={idx}
                      className={styles.options}
                      onClick={handleClick2(el.value)}
                    >
                      {el.text}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSelect1;
