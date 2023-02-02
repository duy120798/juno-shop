import classNames from "classnames/bind";
import Form from "~/component/Form";
import styles from "./Register.module.scss";
const cx = classNames.bind(styles);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <h2>ĐĂNG KÝ</h2>
      <p>Đăng ký để tích điểm và hưởng ưu đãi thành viên khi mua hàng.</p>

      <Form type="register" />
    </div>
  );
}

export default Register;
