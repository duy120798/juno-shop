import classNames from "classnames/bind";
import styles from "./Collections.module.scss";

const cx = classNames.bind(styles);
function Collections() {
  return <div className={cx("wrapper")}> Collections</div>;
}

export default Collections;
