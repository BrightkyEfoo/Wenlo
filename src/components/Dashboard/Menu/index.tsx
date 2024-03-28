import { Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { BiLogoBing, BiTransfer } from 'react-icons/bi';
import { BsClock, BsCurrencyDollar, BsMoon } from 'react-icons/bs';
import { FaChevronUp, FaFacebookF, FaPlus, FaTiktok } from 'react-icons/fa';
import { FaChevronDown, FaRegCreditCard, FaSnapchat } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { TbUser, TbUserPlus, TbUserUp, TbUsers } from 'react-icons/tb';
import { useLocation, useNavigate } from 'react-router-dom';
import Emitter from '../../../utils/EventEmitter/EventEmitter';
import imageService from '../../../utils/ImageService';
import styles from './Menu.module.scss';
import { useAppSelector } from '../../../redux/hooks';
const images = imageService.getImages();

const DashboardMenuEmitter = new Emitter();

const DashboardMenuEventsList = {
  SET_ITEM_SELECTED: 'SET_ITEM_SELECTED',
};

const MenuItemList: (
  | {
      title: string;
      icon: JSX.Element;
      route: string;
      type: 'simplemenu';
    }
  | {
      title: string;
      icon: JSX.Element;
      route: string;
      type: 'submenu';
      canNavigate: boolean;
      items: {
        icon: JSX.Element;
        title: string;
        route: string;
      }[];
    }
)[] = [
  {
    title: 'Dashboard',
    icon: <MdOutlineSpaceDashboard />,
    route: '/dashboard',
    type: 'simplemenu',
  },
  {
    title: 'Main balance',
    icon: <MdOutlineAccountBalanceWallet />,
    type: 'simplemenu',
    route: 'main-balance',
  },
  {
    title: 'My Ad Accounts',
    icon: <TbUserPlus />,
    route: 'ad-account',
    canNavigate: false,
    type: 'submenu',
    items: [
      {
        title: 'Facebook',
        icon: <FaFacebookF />,
        route: 'ad-account/facebook',
      },
      {
        title: 'Google',
        route: 'ad-account/google',
        icon: <FcGoogle />,
      },
      {
        title: 'Tik Tok',
        route: 'ad-account/tiktok',
        icon: <FaTiktok />,
      },
      {
        title: 'Bing',
        route: 'ad-account/bing',
        icon: <BiLogoBing />,
      },
      {
        title: 'Snapchat',
        route: 'ad-account/snapchat',
        icon: <FaSnapchat />,
      },
    ],
  },

  {
    title: 'Top-Up & Billings',
    type: 'simplemenu',
    icon: <FaRegCreditCard />,
    route: 'top-up-billings',
  },
  {
    title: 'Balance Transfer',
    icon: <BiTransfer />,
    type: 'simplemenu',
    route: 'balance-transfer',
  },
  {
    title: 'Manage ad account access',
    icon: <TbUserUp />,
    type: 'simplemenu',
    route: 'manage-ad-account-access',
  },
  {
    title: 'People & Business records',
    icon: <TbUsers />,
    type: 'simplemenu',
    route: 'people-business-records',
  },
  {
    title: 'Profile',
    icon: <TbUser />,
    type: 'simplemenu',
    route: 'profile',
  },
];

const DashboardMenu = () => {
  const user = useAppSelector(state => state.user);

  const [itemSelected, setItemSelected] = useState(0);
  DashboardMenuEmitter.on(
    DashboardMenuEventsList.SET_ITEM_SELECTED,
    (idx: number) => {
      setItemSelected(prev => idx);
    }
  );
  return (
    <div className={styles.container}>
      <img
        src={images['wenlo-logo']}
        height={24 * 0.75}
        width={82 * 0.75}
        alt="wenlo-logo"
      />
      <div className={styles.section1}>
        <span>Main Balance</span>
        <span>
          <FaPlus />
        </span>
        <span className="font-800 font-14">${user.balance.toFixed(2)}</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menuTitle}>menu</span>
        <div className={styles.menuItemsList}>
          {MenuItemList.map((item, index) => {
            if (item.type === 'simplemenu')
              return (
                <MenuItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  type={item?.type}
                  route={item.route}
                  idx={index}
                  canNavigate={true}
                />
              );
            else
              return (
                <MenuItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  type={item?.type}
                  route={item.route}
                  idx={index}
                  subItems={item.items}
                  canNavigate={item.canNavigate}
                />
              );
          })}
        </div>
        <div></div>
        <div className={styles.section2}>
          <p>Premium Plan</p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut{' '}
          </p>
          <span>
            <BsCurrencyDollar /> Price :
          </span>
          <span>
            $14.99 <small>/ Mo</small>
          </span>
          <span>
            <BsClock /> Expired :
          </span>
          <span>Nov 5, 2023</span>
          <div>
            <button>Change Plan</button>
          </div>
        </div>
        <div className={styles.section3}>
          <span>
            <BsMoon /> Light Mode
          </span>{' '}
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;

type MenuItemProps = {
  title: string;
  icon: JSX.Element;
  type: string;
  route?: string;
  idx?: number;
  canNavigate?: boolean;
  subItems?: {
    icon: JSX.Element;
    title: string;
    route: string;
  }[];
};
export const MenuItem = ({
  title,
  icon,
  route,
  type,
  idx,
  subItems,
  canNavigate = true,
}: MenuItemProps) => {
  const user = useAppSelector(state => state.user);

  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // DashboardMenuEmitter.emit(DashboardMenuEventsList.SET_ITEM_SELECTED, idx);
    if (route && canNavigate) navigate(route);

    if (type === 'submenu') {
      if (e.target === e.currentTarget) setIsSubMenuVisible(prev => !prev);
    }
  };

  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (route === '/dashboard') {
      location.pathname === '/dashboard' ? setActive(true) : setActive(false);
    } else {
      location.pathname.includes(`/dashboard/${route}`)
        ? setActive(true)
        : (() => {
            setActive(false);
            setIsSubMenuVisible(false);
          })();
    }
  }, [location.pathname, route]);

  const handleShowSubItems = () => {
    setIsSubMenuVisible(prev => !prev);
  };

  return (
    <>
      <div
        className={
          styles.menuItem + ' ' + (active ? styles.menuItemActive : '')
        }
        onClick={handleClick}
      >
        {icon}
        <span className={'font-400'}>{title}</span>
        {type === 'submenu' && (
          <button className={styles.chevronDown} onClick={handleShowSubItems}>
            {isSubMenuVisible ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        )}
      </div>
      {isSubMenuVisible && (
        <div className={styles.subItemsContainer}>
          {subItems &&
            Array.isArray(subItems) &&
            subItems.map((el, idx) => {
              return <SubItemComp {...el} key={title + idx} />;
            })}
        </div>
      )}
    </>
  );
};

type SubItemProps = {
  icon: JSX.Element;
  title: string;
  route: string;
};

const SubItemComp = ({ icon, route, title }: SubItemProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const actualRoute = useLocation();
  const handleClick = () => {
    navigate(route);
  };
  useEffect(() => {
    const actual = actualRoute.pathname.split('/')[3];
    const mine = route.split('/')[1];
    setIsSelected(prev => actual === mine);
  }, [actualRoute, route]);
  return (
    <div
      onClick={handleClick}
      className={
        styles.subItemContainer +
        ' ' +
        (isSelected ? styles.subItemContainerSelected : '')
      }
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};
