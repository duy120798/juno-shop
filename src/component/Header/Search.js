import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {products} from "~/data";
import {useEffect, useState} from "react";

const cx = classNames.bind(styles);
function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchKey = searchText.trim().toLowerCase();
    const result = products.filter((product) => {
      return product.name.toLowerCase().includes(searchKey);
    });
    setSearchResults(result);
    console.log(searchResults);
  }, [searchText]);

  const handleChangeText = (e) => {
    setSearchText(e.target.value.trimStart());
  };
  return (
    <div className={cx("search")}>
      <input value={searchText} onChange={handleChangeText} type="text" placeholder="Tìm kiếm" />
      <FontAwesomeIcon icon={faSearch} className={cx("search-icon")} />
      <div className={cx("search-result")}>
        <div className={cx("product-item")}>
          <img className={cx("product-img")} src={products[0].image[0]} alt="" />
          <div className={cx("product-info")}>
            <h4 className={cx("product-name")}>{products[0].name}</h4>
            <div className={cx("product-price")}>
              <span>{products[0].currentPrice}đ</span>
              <span>{products[0].cost}đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
