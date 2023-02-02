import classNames from "classnames/bind";
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./ProductItem.module.scss";
import SizeColor from "./SizeColor";

const cx = classNames.bind(styles);
function ProductItem({product}) {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div
      className={cx("product-wrapper", {active: showOrder})}
      onMouseOut={() => setShowOrder(false)}
      onMouseOver={() => setShowOrder(true)}>
      <Link to={`/product/${product.name}`} state={product}>
        {(showOrder && <img className={cx("product-img")} src={product.image[0]} alt="" />) || (
          <img className={cx("product-img")} src={product.image[1]} alt="" />
        )}
      </Link>
      {product.isNew && <span className={cx("product-new")}>Hàng mới</span>}
      <div className={cx("product-info")}>
        <h4 className={cx("product-name")}>{product.name}</h4>
        <div className={cx("product-price")}>
          {product.currentPrice && (
            <span className={cx("current-price")}>{product.currentPrice}đ</span>
          )}
          <span className={cx("cost")}>{product.cost}đ</span>
        </div>
        <div className={cx("product-order")}>
          {(showOrder && (
            <>
              <SizeColor product={product} />
            </>
          )) || (
            <div className={cx("product-sold")}>
              <span>{product.sold} đã bán</span>
              <div>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
