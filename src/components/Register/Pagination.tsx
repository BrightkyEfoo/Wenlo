import React, { useMemo } from 'react';
import styles from './Pagination.module.css';

type Props = {
  pages: number;
  actual: number;
};

/**
 * 
 * @property actual : it's the current page, It designates the point which will be grayed out
 * @property pages : it's the number of pages
 */
const Pagination = ({ actual, pages }: Props) => {
  const arr = useMemo(() => {
    let a = new Array(pages).fill(0);
    a = a.map((el, i) => i);
    return a;
  }, [pages]);
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {arr.map((el, i) => {
          return (
            <div
              key={el}
              className={i === actual ? styles.selected : styles.pagination}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
