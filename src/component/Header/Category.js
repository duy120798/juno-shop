import classNames from "classnames/bind";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import {productClass, collection} from "~/data";
import {FilterContext} from "~/layouts/DefaultLayout/DefaultLayout";

const cx = classNames.bind(styles);
function Category() {
  const [active, setActive] = useState("Hàng Mới");

  const {setFilterProduct, filterProduct} = useContext(FilterContext);
  useEffect(() => {
    console.log(filterProduct);
  });

  return (
    <ul className={cx("category-list")}>
      <Link to="/products">
        <li
          onClick={(e) => {
            setActive(e.target.innerText);
          }}
          className={cx("category-item", {active: active === "Hàng Mới"})}>
          <span>Hàng Mới</span>
        </li>
      </Link>
      <Link to="/products">
        <li
          onClick={() => {
            setFilterProduct("all");
          }}
          className={cx("category-item", {active: active === "Sản Phẩm"})}>
          <span>Sản Phẩm</span>
          <ul className={cx("subcategory")}>
            {productClass.map((list, index) => {
              return (
                <li
                  className={cx("subcategory-item")}
                  onClick={(e) => {
                    e.stopPropagations();
                    setFilterProduct(list.group);
                  }}
                  key={index}>
                  <span>{list.group}</span>
                  {
                    <ul className={cx("type-list")}>
                      {list.subgroups.map((type, index) => {
                        return (
                          <li
                            className={cx("type-item")}
                            onClick={(e) => {
                              e.stopPropagations();
                              setFilterProduct(type);
                            }}
                            key={index}>
                            {type}
                          </li>
                        );
                      })}
                    </ul>
                  }
                </li>
              );
            })}
          </ul>
        </li>
      </Link>
      <div>
        <li
          onClick={(e) => setActive(e.target.innerText)}
          className={cx("category-item", {active: active === "Bộ Sưu Tập"})}>
          <span>Bộ Sưu Tập</span>
          <ul className={cx("subcategory")}>
            {collection.map((collection, index) => {
              return (
                <Link key={index} to="/">
                  <li className={cx("subcategory-item")} key={index}>
                    <span>{collection}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </li>
      </div>
      <Link to="/">
        <li
          onClick={(e) => setActive(e.target.innerText)}
          className={cx("category-item", {active: active === "Sale Happy"})}>
          <span>Sale Happy</span>
        </li>
      </Link>
      <Link to="/blogs">
        <li
          onClick={(e) => setActive(e.target.innerText)}
          className={cx("category-item", {active: active === "Showroom"})}>
          <span>Showroom</span>
        </li>
      </Link>
    </ul>
  );
}

export default Category;
