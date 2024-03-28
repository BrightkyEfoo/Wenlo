import { useEffect } from 'react';
import DashboardContent from '../../components/Dashboard/Content';
import DashboardMenu from '../../components/Dashboard/Menu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Dashboard.module.scss';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/features/UserSlice';
import api from '../../utils/Axios';

const Dashboard = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.id) {
      const userFromLocal = JSON.parse(localStorage.getItem('user') || '');
      if (!userFromLocal.id) {
        navigate('/login');
      } else {
        dispatch(setUser(userFromLocal));
        const localToken = localStorage.getItem('authToken');
        if (localToken) api.token = localToken;
      }
    }
  }, [navigate, user]);
  return (
    <div className={styles.container}>
      <DashboardMenu />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
