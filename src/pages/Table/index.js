import { useEffect, useReducer, useState } from 'react';
import * as aquaticInfomation from '~/components/apiService/aquaticInfomation';
import Button from '~/components/Button';
import * as table from './Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMagnifyingGlass, faForward, faBackward, faSort } from '@fortawesome/free-solid-svg-icons';

import styles from './Table.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Table() {
  const [searchValue, setSearchValue] = useState('');
  const [aquaticList, setAquaticList] = useState([]);
  const [totalElements, setTotalElements] = useState([]);

  const [state, dispatch] = useReducer(table.reducer, table.initState);

  useEffect(() => {
    const getAll = async () => {
      const results = await aquaticInfomation.getAllOfDeviceLastUpdate(
        state.page,
        state.sort,
        state.sortType,
        state.search,
      );

      setAquaticList(results.content);

      setTotalElements(results.totalElements);
    };
    getAll();
  }, [state]);

  const checkColor = (evaluation = '') => {
    let color = 'success';
    if (evaluation === 'cảnh báo') {
      color = 'danger';
    }
    if (evaluation === 'Bình thường' || evaluation === 'bình thường') {
      color = 'warning';
    }

    return color;
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(table.setSearch(searchValue));
  };
  return (
    <div className={cx('container-fluid')}>
      <div className={cx('table-responsive')}>
        <div className={cx('table-wrapper')}>
          <div className={cx('table-title')}>
            <div className={cx('row')}>
              <div className={cx('col-sm-8')}>
                <h2>Thông tin chỉ số đo mới nhất của các thiết bị</h2>
              </div>
              <div className={cx('col-sm-4')}>
                <form className={cx('search-box')} onSubmit={handleSearch}>
                  <input
                    type="text"
                    className={cx('form-control')}
                    placeholder="Nhập từ khóa"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icons')} />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <table className={cx('table', 'table-striped', ' table-hover', ' table-bordered')}>
            <thead>
              <tr>
                <th onClick={() => dispatch(table.SET_SORTDEVICEID)}>
                  Mã thiết bị
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th onClick={() => dispatch(table.SET_SORTFISHPONDNAME)}>
                  Ao cá
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th onClick={() => dispatch(table.SET_SORTCREATEDATE)}>
                  Ngày cập nhập
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th onClick={() => dispatch(table.SORTDISSOLVEDOXYGEN)}>
                  Oxy hòa tan (mg/L)
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th onClick={() => dispatch(table.SET_SORTHUMIDITY)}>
                  Độ ẩm (g/m³)
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th onClick={() => dispatch(table.SET_SORTTEMPERATURE)}>
                  Nhiệt độ (℃)
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th onClick={() => dispatch(table.SET_SORTPH)}>
                  Độ PH (PH)
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th>Đánh giá </th>
                <th>Biểu đồ chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {aquaticList.map((aquaticInfo) => (
                <tr key={aquaticInfo.id}>
                  <td>
                    <button className={cx('btn-evaluation', 'p-button-info', ' p-button-text')} type="button">
                      {aquaticInfo.device.deviceId}
                    </button>
                  </td>
                  <td>{aquaticInfo.device.fishPond.name}</td>
                  <td>{aquaticInfo.createDate}</td>
                  <td>{aquaticInfo.dissolvedOxygen}</td>
                  <td>{aquaticInfo.humidity}</td>
                  <td>{aquaticInfo.temperature}</td>
                  <td>{aquaticInfo.ph}</td>
                  <td>
                    <Button className={cx(checkColor(aquaticInfo.evaluation))}>{aquaticInfo.evaluation}</Button>
                  </td>
                  <td className={cx('icon-td')}>
                    <Link to={`/quanly/bieudo/${aquaticInfo.device.id}`}>
                      <FontAwesomeIcon className={cx('material-icons')} icon={faChartLine} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={cx('pagination')}>
            <div className="hint-text">
              Hiển thị từ <b></b>1- 10 trong tổng số <b>{totalElements}</b>
            </div>
            <ul className={cx('pagination-page')}>
              <button onClick={() => dispatch(table.SET_PREVPAGE)}>
                <FontAwesomeIcon icon={faBackward} />
              </button>
              <span className={cx('page')}>{state.page + 1}</span>
              <button onClick={() => dispatch(table.SET_NEXTPAGE)}>
                <FontAwesomeIcon icon={faForward} />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
