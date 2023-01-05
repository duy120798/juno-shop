import {useLocation} from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product() {
  const location = useLocation();
  const product = location.state;

  return <h1 className={cx("wrapper")}>{product.name}</h1>;
}

export default Product;
