import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Facebook, Google, Instagram, Twitter} from "../Icons";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <div>
          <div className={cx("contact")}>
            <h3>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</h3>
            <p>1800 1162</p>
            <span>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
          </div>
          <div className={cx("contact")}>
            <h3>GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</h3>
            <p>1800 1160</p>
            <span>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
          </div>
        </div>
        <div className={cx("showroom")}>
          <h3>HỆ THỐNG SHOWROOM</h3>
          <img
            src="https://file.hstatic.net/1000003969/file/chikh_ce44b1a9f11b4cbda1d4d319967d7932.jpg"
            alt="SHOWROOM"
          />
          <Link to="/blogs">
            <span>Xem địa chỉ hệ thống 71 showroom</span>
          </Link>
        </div>
        <div className={cx("fanpage")}>
          <h3>FANPAGE CỦA CHÚNG TÔI</h3>
          <img
            src="https://file.hstatic.net/1000003969/file/cover_ca7c0f4b11a642c0b3c5dabdc0c682b2.png"
            alt="FANPAGE"
          />
          <div className={cx("icon")}>
            <Facebook />
            <Instagram />
            <Google />
            <Twitter />
          </div>
        </div>
      </div>
      <div className={cx("support-background")}>
        <div className={cx("support")}>
          <div className={cx("customer-support")}>
            <h3 onClick={() => setShowMenu(!showMenu)}>
              HỖ TRỢ KHÁCH HÀNG
              <FontAwesomeIcon icon={faAngleDown} />
            </h3>
            {showMenu && (
              <div>
                <p>Hướng dẫn chọn cỡ giày</p>
                <p>Chính sách đổi trả</p>
                <p>Thanh toán giao nhận</p>
                <p>Chính sách bảo mật</p>
                <p>Câu hỏi thường gặp</p>
                <p>Chính sách khách hàng thân thiết</p>
                <p>Hướng dẫn mua hàng Online</p>
              </div>
            )}
          </div>
          <div className={cx("support-juno")}>
            <h3 onClick={() => setShowMenu(!showMenu)}>
              VỀ JUNO
              <FontAwesomeIcon icon={faAngleDown} />
            </h3>
            {showMenu && (
              <div>
                <p>Giới thiệu</p>
                <p>Liêm hệ</p>
                <p>Tin tức Juno</p>
                <p>Thông tin thời trang</p>
                <p>Cơ hội làm việc tại Juno</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={cx("bottom-bar")}>
        <p>© Công ty Cổ phần Seedcom Fashion Group</p>
        <img
          src="https://file.hstatic.net/1000003969/file/icon-dangky_ed795de8b131419393b256f6384de715.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
