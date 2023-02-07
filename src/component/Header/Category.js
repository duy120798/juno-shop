import classNames from "classnames/bind";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import {productClass, collection} from "~/data";
import {FilterContext} from "~/layouts/DefaultLayout/DefaultLayout";

const cx = classNames.bind(styles);
function Category() {
  const {setFilterProduct} = useContext(FilterContext);
  const [active, setActive] = useState("Bộ Sưu Tập");

  return (
    <ul className={cx("category-list")}>
      <Link to="/products">
        <li
          onClick={(e) => {
            setActive(e.target.innerText);
            setFilterProduct("Hàng Mới");
          }}
          className={cx("category-item", {active: active === "Hàng Mới"})}>
          <span>Hàng Mới</span>
        </li>
      </Link>
      <Link to="/products">
        <li
          onClick={(e) => {
            setActive(e.target.innerText);

            setFilterProduct("Sản Phẩm");
          }}
          className={cx("category-item", {active: active === "Sản Phẩm"})}>
          <span>Sản Phẩm</span>
          <ul className={cx("subcategory")}>
            {productClass.map((list, index) => {
              return (
                <li
                  className={cx("subcategory-item")}
                  onClick={(e) => {
                    setFilterProduct(list.group);
                    e.stopPropagation();
                    e.preventDefault();
                    setActive("Sản Phẩm");
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
                              setFilterProduct(type);
                              e.stopPropagation();
                              e.preventDefault();
                              setActive("Sản Phẩm");
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
        <Link to="/juno-shop">
          <li
            onClick={(e) => setActive(e.target.innerText)}
            className={cx("category-item", {active: active === "Bộ Sưu Tập"})}>
            <span>Bộ Sưu Tập</span>
            <ul className={cx("subcategory")}>
              {collection.map((collection, index) => {
                return (
                  <li className={cx("subcategory-item")} key={index}>
                    <span>{collection}</span>
                  </li>
                );
              })}
            </ul>
          </li>
        </Link>
      </div>
      <Link to="/products">
        <li
          onClick={(e) => {
            setActive(e.target.innerText);
            setFilterProduct("sản phẩm giảm giá");
          }}
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
