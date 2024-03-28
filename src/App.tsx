import { useEffect, useLayoutEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useNavigationType,
} from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import Pricing from './pages/Pricing/Index';
import Dashboard from './pages/Dashboard';
import ChatBot from './components/ChatBot';
import styles from './App.module.scss';
import ChoosePaymentMethod from './components/pricing/PaymentMethod/ChoosePaymentMethod';
import Loader from './components/Loader';

const LoginRegisterContainer = [
  '/login',
  '/register',
  '/forget-password',
  '/activate-account',
  '/questions',
].map((el, i) => <Route path={el} key={i} element={<LoginRegister />} />);

const PricingContainer = ['/pricing', 'pricing-annuel'].map((el, i) => (
  <Route path={el} key={i} element={<Pricing />} />
));

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (pathname === '/') {
      window.location.replace('/dashboard');
    }
  }, [navigate, pathname]);

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <Loader />
      <div className={styles.ChatBot}>
        <ChatBot />
      </div>
      <Routes>
        {LoginRegisterContainer}
        {PricingContainer}
        <Route
          path="/pricing/paymentMethod"
          element={<ChoosePaymentMethod />}
        />

        {/* Add your routes below, as easy as you had done before! */}
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
