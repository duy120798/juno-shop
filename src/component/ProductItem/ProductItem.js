import classNames from "classnames/bind";
import {useState} from "react";
import styles from "./ProductItem.module.scss";

const cx = classNames.bind(styles);
function ProductItem({product}) {
  const [showOrder, setShowOrder] = useState(false);
  const [color, setColor] = useState("pink");
  const [size, setSize] = useState("s");

  return (
    <div
      className={cx("product-wrapper", {active: showOrder})}
      onMouseOut={() => setShowOrder(false)}
      onMouseOver={() => setShowOrder(true)}>
      {(showOrder && <img className={cx("product-img")} src={product.image[0]} alt="" />) || (
        <img className={cx("product-img")} src={product.image[1]} alt="" />
      )}
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
              <div className={cx("product-color")}>
                <div
                  onClick={() => setColor("pink")}
                  className={cx("color-pink", {active: color === "pink"})}></div>
                <div
                  onClick={() => setColor("green")}
                  className={cx("color-green", {active: color === "green"})}></div>
                <div
                  onClick={() => setColor("white")}
                  className={cx("color-white", {active: color === "white"})}></div>
              </div>
              <div className={cx("product-size")}>
                <div onClick={() => setSize("s")} className={cx("size-s", {active: size === "s"})}>
                  S
                </div>
                <div onClick={() => setSize("m")} className={cx("size-m", {active: size === "m"})}>
                  M
                </div>
                <div onClick={() => setSize("l")} className={cx("size-l", {active: size === "l"})}>
                  L
                </div>
                <div
                  onClick={() => setSize("xl")}
                  className={cx("size-xl", {active: size === "xl"})}>
                  XL
                </div>
              </div>
              <button className={cx("product-add")}>Thêm</button>
              <button className={cx("product-buy")}>Đặt Ngay</button>
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
