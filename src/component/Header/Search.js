import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {products} from "~/data";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDebounce} from "~/hook";

const cx = classNames.bind(styles);
function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState("");
  // xử lí tìm sản phẩm
  const debouncedValue = useDebounce(searchText, 400);
  useEffect(() => {
    if (!debouncedValue) {
      setSearchResults("");
      return;
    }
    const searchKey = removeAccents(debouncedValue.trim().toLowerCase());
    if (searchKey.length > 0) {
      const result = products.filter((product) => {
        return removeAccents(product.name.toLowerCase()).includes(searchKey);
      });
      setSearchResults(result);
    } else {
      setSearchResults([]);
    }
  }, [debouncedValue]);
  // xử lý nhập input
  const handleChangeText = (e) => {
    setSearchText(e.target.value.trimStart());
  };
  // xử lí tiếng việt
  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }
  //   xử lí click vào sản phẩm
  const handleClickProduct = () => {
    setSearchText("");
  };

  return (
    <div className={cx("search")}>
      <input value={searchText} onChange={handleChangeText} type="text" placeholder="Tìm kiếm" />
      <FontAwesomeIcon icon={faSearch} className={cx("search-icon")} />
      {searchText.length > 0 && (
        <div className={cx("search-result")}>
          {searchResults.length > 0 &&
            searchResults.slice(0, 5).map((product) => {
              return (
                <Link to="/product" state={product} key={product.id} onClick={handleClickProduct}>
                  <div className={cx("product-item")}>
                    <img className={cx("product-img")} src={product.image[0]} alt="" />
                    <div className={cx("product-info")}>
                      <h4 className={cx("product-name")}>{product.name}</h4>
                      <div className={cx("product-price")}>
                        {product.currentPrice && (
                          <span className={cx("current-price")}>{product.currentPrice}đ</span>
                        )}
                        <span className={cx("cost")}>{product.cost}đ</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          {Array.isArray(searchResults) && searchResults.length === 0 && (
            <span className={cx("product-empty")}>Sản phẩm bạn muốn tìm không có...</span>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
