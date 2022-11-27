import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSliders,
  faBellSlash,
  faUser,
  faGear,
  faQuestion,
  faRightFromBracket,
  faBusinessTime,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Flag from '~/assets/flags/vi.png';
import Avatar from '~/assets/images/admin.png';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Button from '~/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '~/redux/authSlice';

const cx = classNames.bind(styles);

function Navbar() {
  const [hideFlaf, setHideFlag] = useState(false);

  const handleTippy = () => setHideFlag(false);
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
    <div className={cx('navbar')}>
      <button className={cx('navbar-toggler')}>
        <FontAwesomeIcon className={cx('icon-toggler')} icon={faSliders} />
      </button>
      <div className={cx('navbar-collapse')}>
        <div className={cx('navbar-nav')}>
          <button className={cx('alert-btn', 'btn-small')}>
            <FontAwesomeIcon className={cx('alert')} icon={faBellSlash} />
          </button>

          <button className={cx('btn-small')}>
            <img className={cx('flag')} src={Flag} alt="vi"></img>
          </button>

          <Tippy
            placement="bottom-start"
            interactive
            onClickOutside={handleTippy}
            visible={hideFlaf}
            render={(attrs) => (
              <div className={cx('box')} tabIndex={'-1'} {...attrs}>
                <PopperWrapper>
                  <Button className={cx('btn-1')} href="#">
                    <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                    Tài Khoản
                  </Button>
                  <Button className={cx('btn-1')} href="#">
                    <FontAwesomeIcon icon={faBusinessTime} className={cx('icon')} />
                    Quản lí chung
                  </Button>
                  <Button className={cx('btn-1')} href="#">
                    <FontAwesomeIcon icon={faGear} className={cx('icon')} />
                    Cài Đặt
                  </Button>
                  <Button className={cx('btn-1')} href="#">
                    <FontAwesomeIcon icon={faQuestion} className={cx('icon')} />
                    Trợ giúp
                  </Button>
                  <Button className={cx('btn-1')} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} className={cx('icon')} />
                    Đăng xuất
                  </Button>
                </PopperWrapper>
              </div>
            )}
          >
            <button className={cx('drop-togger')} onClick={() => setHideFlag(!hideFlaf)}>
              <img src={Avatar} className={cx('avatar')} alt="username" />
              <span className={cx('text-dark')}>{user ? user.user.username : 'userName'}</span>
            </button>
          </Tippy>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
