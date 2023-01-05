import ProductItem from "~/component/ProductItem/ProductItem";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";

import {products} from "~/data";

const cx = classNames.bind(styles);

function Products() {
  return (
    <div>
      <div className={cx("header")}></div>
      <div className={cx("wrapper")}>
        {products.map((product, index) => {
          return (
            <div key={product.id} className={cx("product-item", `item-${index}`)}>
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
