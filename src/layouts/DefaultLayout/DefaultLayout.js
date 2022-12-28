import classNames from "classnames/bind";
import Header from "~/component/Header/Header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
