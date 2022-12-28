import {faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import {BagIcon} from "../Icons";
import styles from "./Header.module.scss";
import Search from "./Search";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <img
        src="https://file.hstatic.net/1000003969/file/logo-svg.svg"
        alt=""
        className={cx("img")}
      />
      <ul className={cx("category-list")}>
        <li className={cx("category-item")}>Hàng Mới</li>
        <li className={cx("category-item")}>Bộ Sưu Tập</li>
        <li className={cx("category-item")}>Sale Happy</li>
        <li className={cx("category-item")}>Showroom</li>
      </ul>
      <Search />
      <div className={cx("account")}>
        <div className={cx("user-icon")}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={cx("bag-icon")}>
          <BagIcon />
          <span className={cx("quantity")}>1</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
