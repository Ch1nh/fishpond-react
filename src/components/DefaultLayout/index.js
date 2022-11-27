import Sidebar from './Sidebar';
import Navbar from './Navbar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/dang-nhap');
    }
  }, [user, navigate]);
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('main')}>
        <Navbar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
