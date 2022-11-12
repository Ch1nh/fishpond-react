import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Table() {
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
                <div className={cx('search-box')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('material-icons')} />

                  <input type="text" className={cx('form-control')} placeholder="Nhập từ khóa&hellip;" />
                </div>
              </div>
            </div>
          </div>
          <table className={cx('table', 'table-striped', ' table-hover', ' table-bordered')}>
            <thead>
              <tr>
                <th>Mã thiết bị</th>
                <th>Ao cá</th>
                <th>Ngày cập nhập</th>
                <th>Oxy hòa tan (mg/L)</th>
                <th>Độ ẩm (g/m³)</th>
                <th>Nhiệt độ (℃)</th>
                <th>Độ PH (PH)</th>
                <th>Đánh giá</th>
                <th>Biểu đồ chi tiết</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
          <div class="pagination">
            <div class="hint-text">Hiển thị từ 1- 10 </div>
            <ul class="pagination">
              <button>
                <FontAwesomeIcon icon={faBackward} />
              </button>
              <span>1</span>
              <button>
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
