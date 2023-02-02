import classNames from "classnames/bind";
import {createContext, useState} from "react";
import Footer from "~/component/Footer";
import Header from "~/component/Header/Header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

export const FilterContext = createContext();

function DefaultLayout({children}) {
  const [filterProduct, setFilterProduct] = useState("Sản Phẩm");
  const data = {
    filterProduct,
    setFilterProduct,
  };

  return (
    <FilterContext.Provider value={data}>
      <div className={cx("wrapper")}>
        <Header />
        {children}
        <Footer />
      </div>
    </FilterContext.Provider>
  );
}

export default DefaultLayout;
