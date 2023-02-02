import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Blogs.module.scss";

const cx = classNames.bind(styles);
function Blogs() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("img")}
        src="https://file.hstatic.net/1000003969/file/hinh-to_562e44c0e33d4ea49381fa67fd692832.jpg"
        alt=""
      />
      <div className={cx("search-showroom")}>
        <h3>TÌM SHOWROOM</h3>
        <p>
          JUNO hiện đang có mặt tại 71 showroom trên toàn quốc. Chọn ngay để biết showroom gần bạn
          nhất!
        </p>
        <div className={cx("select-box")}>
          <select>
            <option value="">Tỉnh / Thành phố</option>
          </select>
          <select>
            <option value="">Quận / Huyện</option>
          </select>
          <div className={cx("searh-input")}>
            <input type="text" placeholder="Tìm kiếm" />
            <FontAwesomeIcon icon={faSearch} className={cx("search-icon")} />
          </div>
        </div>
      </div>
      <div className={cx("intro")}>
        <h3>TRẢI NGHIỆM MUA SẮM TẠI SHOWROOM</h3>
        <p>Mua sắm trực tiếp tại hệ thống showroom để có những trải nghiệm dịch vụ tốt nhất.</p>
        <div className={cx("sub-intro")}>
          <div className={cx("intro-item")}>
            <img
              src="https://file.hstatic.net/1000003969/file/1_824dd49836c74f249d425481266a920f.jpg"
              alt=""
            />
            <p>KHÔNG GIAN THỜI TRANG VÀ HIỆN ĐẠI</p>
          </div>
          <div className={cx("intro-item")}>
            <img
              src="https://file.hstatic.net/1000003969/file/2_6b6ce8a0c8d24afeb7be42cca41c3794.jpg"
              alt=""
            />
            <p>MUA SẮM THOẢI MÁI VÀ TIỆN LỢI</p>
          </div>
          <div className={cx("intro-item")}>
            <img
              src="https://file.hstatic.net/1000003969/file/3_bec2a819c766492b91b3f74aad6fa21a.jpg"
              alt=""
            />
            <p>ĐÓN TIẾP ÂN CẦN, TƯ VẤN CHUYÊN NGHIỆP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
