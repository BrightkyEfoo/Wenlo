import React, { useEffect, useState } from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const location = useLocation();
  const [actual, setActual] = useState('');
  const [nesteds, setNesteds] = useState<string[]>([]);
  useEffect(() => {
    if (location.pathname === '/dashboard') setActual('Dashboard');
    else {
      const path = location.pathname.split('/');
      const actual = path[2];
      setNesteds(path.slice(3));
      setActual(actual);
    }
  }, [location.pathname]);
  const breadcrumbs =
    nesteds.length > 0
      ? [
          <Link to={`${actual}`}>{actual}</Link>,
          ...nesteds.map((el, idx) => {
            if (idx === nesteds.length - 1) return <p key={idx}>{el}</p>;
            console.log(
              location.pathname
                .split('/')
                .slice(1, idx + 1)
                .join('/')
            );
            return (
              <Link
                key={idx}
                to={location.pathname
                  .split('/')
                  .slice(1, idx + 1)
                  .join('/')}
              >
                {actual}
              </Link>
            );
          }),
        ]
      : [<Link to="/">Wenlo</Link>, <p>{actual}</p>];
  return (
    <div className={styles.container}>
      <MuiBreadcrumbs
        separator={<FaChevronRight size={14} color={'#828282'} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </MuiBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
