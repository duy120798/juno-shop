import classNames from "classnames/bind";
import {createContext, useState} from "react";
import Header from "~/component/Header/Header";
import Products from "~/page/Products";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

export const FilterContext = createContext();

function DefaultLayout({children}) {
  const [filterProduct, setFilterProduct] = useState("all");
  const handleChangeFilter = (e) => {
    setFilterProduct(e.target.innerHTML);
  };

  const data = {
    filterProduct,
    setFilterProduct,
  };

  return (
    <FilterContext.Provider value={data}>
      <div className={cx("wrapper")}>
        <Header />
        <Products />
      </div>
    </FilterContext.Provider>
  );
}

export default DefaultLayout;
