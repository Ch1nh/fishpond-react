import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import avatar from '~/assets/images/admin.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Sidebar() {
  const [newData, setNewData] = useState(false);

  return (
    <div id="sidebar" className={cx('sidebar')}>
      <div className={cx('sidebar-content')}>
        <a className={cx('sidebar-brand')} href="index.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cx('feather', ' feather-box', 'align-middle')}
            _ngcontent-spp-c20=""
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <i className={cx('align-middle')} data-feather="box"></i>
          <span className={cx('align-middle')}></span>
        </a>
        <ul className={cx('sidebar-nav')}>
          <li className={cx('sidebar-item')}>
            <a href="#dashboards" className={cx('sidebar-link')} onClick={() => setNewData(!newData)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cx('feather ', 'align-middle')}
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span className={cx('align-middle')}>Quản lý hệ thống</span>
            </a>
            {newData && (
              <ul className={cx('sidebar-dropdown')}>
                <li className={cx('sidebar-item')}>
                  <Link className={cx('sidebar-link')} to="/table">
                    Dữ liệu mới
                    <span className={cx('sidebar-badge')}>New</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className={cx('sidebar-bottom')}>
        <div className={cx('media')}>
          <img className={cx('avatar')} src={avatar} alt="Chris Wood" width="40" height="40" />
          <div className={cx('media-body')}>
            <h4 className={cx('mb-1')}>congle98</h4>
            <div>Online</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
