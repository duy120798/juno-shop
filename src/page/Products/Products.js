/* eslint-disable no-use-before-define */
import ProductItem from "~/component/ProductItem/ProductItem";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";

import {products} from "~/data";

import {FilterContext} from "~/layouts/DefaultLayout/DefaultLayout";
import {useContext, useEffect, useState} from "react";

const cx = classNames.bind(styles);

function Products() {
  const {filterProduct} = useContext(FilterContext);
  const [showProduct, setShowproduct] = useState(products);

  useEffect(() => {
    // lọc sp theo loại
    if (filterProduct === "Sản Phẩm") {
      setShowproduct(products);
    } else if (filterProduct === "Hàng Mới") {
      setShowproduct(
        products.filter((product) => {
          return product.isNew === true;
        })
      );
    } else if (filterProduct === "sản phẩm giảm giá") {
      setShowproduct(
        products.filter((product) => {
          return product.currentPrice !== undefined;
        })
      );
    } else {
      setShowproduct(
        products.filter((product) => {
          return product.group === filterProduct || product.subgroups === filterProduct;
        })
      );
    }
  }, [filterProduct]);

  // sắp xếp sp
  const handleArrangement = (e) => {
    if (e.target.value === "ascending") {
      function compareNumbers(a, b) {
        return (a.currentPrice || a.cost) - (b.currentPrice || b.cost);
      }
      setShowproduct((pre) => [...pre.sort(compareNumbers)]);
    } else if (e.target.value === "decrease") {
      function compareNumbers(a, b) {
        return (b.currentPrice || b.cost) - (a.currentPrice || a.cost);
      }
      setShowproduct((pre) => [...pre.sort(compareNumbers)]);
    } else if (e.target.value === "new") {
      function compareNumbers(a, b) {
        return a.id - b.id;
      }
      setShowproduct((pre) => [...pre.sort(compareNumbers)]);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3>Tất cả {filterProduct}</h3>
        <p>({showProduct.length} sản phẩm)</p>

        <div className={cx("option")}>
          <label htmlFor="arrangement">Sắp xếp theo</label>
          <select name="arrangement" id="arrangement" onChange={handleArrangement}>
            <option value="new">Mới nhất</option>
            <option value="ascending">Giá: Từ thấp đến cao</option>
            <option value="decrease">Giá: Từ cao đến thấp</option>
          </select>
        </div>
      </div>
      <div className={cx("container")}>
        {showProduct.map((product, index) => {
          return (
            <div key={product.id} className={cx("product-item", `item-${index + 1}`)}>
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
