import classNames from "classnames/bind";
import styles from "./Collections.module.scss";
const cx = classNames.bind(styles);

function Product({data}) {
  return (
    <div className={cx("product-item")}>
      <img src={data.image} alt="" />
      <p>{data.name}</p>
      <span>{data.cost}</span>
    </div>
  );
}

export default Product;
