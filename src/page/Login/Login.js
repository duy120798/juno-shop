import classNames from "classnames/bind";
import Form from "~/component/Form";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <h2>ĐĂNG NHẬP</h2>
      <p>Đăng nhập để tích điểm và hưởng ưu đãi thành viên khi mua hàng.</p>

      <Form type="login" />
    </div>
  );
}

export default Login;
