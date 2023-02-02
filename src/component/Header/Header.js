import {faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import {BagIcon} from "../Icons";
import styles from "./Header.module.scss";
import Search from "./Search";
import Category from "./Category";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {LoginContext} from "~/App";

const cx = classNames.bind(styles);

function Header() {
  const {currentUser, setCurrentUser} = useContext(LoginContext);
  return (
    <div className={cx("header")}>
      <img
        src="https://file.hstatic.net/1000003969/file/logo-svg.svg"
        alt=""
        className={cx("img")}
      />
      <Category />
      <Search />
      <div className={cx("account")}>
        <div className={cx("user-icon")}>
          {currentUser ? (
            <div className={cx("user-avatar")}>{currentUser.userName.slice(0, 1)}</div>
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}
          <div className={cx("account-menu")}>
            {currentUser ? (
              <ul>
                <li>
                  <Link>Thông tin tài khoản</Link>
                </li>
                <li
                  onClick={() => {
                    setCurrentUser("");
                  }}>
                  Đăng xuất
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">Đăng nhập</Link>
                </li>
                <li>
                  <Link to="/register">Đăng ký</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={cx("bag-icon")}>
          {currentUser ? (
            <>
              <Link to="/cart">
                <BagIcon />
              </Link>
              <span className={cx("quantity")}>
                {currentUser.cart.reduce((sum, product) => {
                  return sum + product.quantity;
                }, 0)}
              </span>
            </>
          ) : (
            <Link to="/login">
              <BagIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
