import Sidebar from './Sidebar';
import Navbar from './Navbar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Table from '../Table';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('main')}>
        <Navbar />
        <div className={cx('content')}>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
