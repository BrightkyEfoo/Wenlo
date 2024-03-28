import React, { useState, ReactNode } from 'react';
import styles from './style.module.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Item = { value: string; element: ReactNode; text: string };

type Props = {
  defaultOption: Item;
  handleSelect?: (value: string) => void;
  childrens: Item[];
};

// const sortAndSeparate = (options: Item[]) => {
//   let res: { [key: string]: Item[] } = {};
//   for (let i = 0; i < options.length; i++) {
//     let firstChar = options[i].text.charAt(0).toUpperCase();
//     if (!res[firstChar]) {
//       res[firstChar] = [options[i]];
//     } else {
//       res[firstChar].push(options[i]);
//     }
//   }
//   return res;
// };

const CustomSelect2 = ({ defaultOption, handleSelect, childrens }: Props) => {
  const [value, setValue] = useState<Item>(defaultOption);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);


  const handleClick = () => {
    setIsPopUpVisible(prev => !prev);
  };

  const handleClick2 = (str: string) => {
    return () => {
      let temp = childrens.filter(el => el.value === str)[0];
      setValue(temp);
      if (handleSelect) handleSelect(temp.value);
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
          {childrens.map((el, idx) => {
            return (
              <div
                key={idx}
                className={styles.options}
                onClick={handleClick2(el.value)}
              >
                {el.element}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSelect2;
