import {Link, useLocation} from "react-router-dom";
import styles from "./Product.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faMapMarker} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import SizeColor from "~/component/ProductItem/SizeColor";
import {products} from "~/data";
import ProductItem from "~/component/ProductItem/ProductItem";
import {useContext, useEffect, useState} from "react";
import {LoginContext} from "~/App";

const cx = classNames.bind(styles);

function Product() {
  const {currentUser, setCurrentUser} = useContext(LoginContext);

  const location = useLocation();
  const product = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const suggestionProducts = products
    .filter((item) => {
      return item.group === product.group;
    })
    .slice(0, 5);

  const [chooseColor, setChooseColor] = useState("pink");
  const [chooseSize, setChooseSize] = useState("s");
  const [show, setShow] = useState(false);

  const orderProduct = {
    name: product.name,
    cost: product.currentPrice || product.cost,
    img: product.image[0],
    color: chooseColor,
    size: chooseSize,
    quantity: 1,
  };
  const handleOrder = () => {
    const data = {...currentUser};
    const isDuplicate = data.cart.some((product) => {
      return (
        product.name === orderProduct.name &&
        product.size === orderProduct.size &&
        product.color === orderProduct.color
      );
    });

    if (isDuplicate) {
      const findProduct = data.cart.find(
        (product) =>
          product.name === orderProduct.name &&
          product.size === orderProduct.size &&
          product.color === orderProduct.color
      );
      const index = data.cart.indexOf(findProduct);
      ++data.cart[index].quantity;
    } else {
      data.cart = [...data.cart, orderProduct];
    }

    setCurrentUser(data);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("img-list")}>
          <img className={cx("item-1")} src={product.image[0]} alt="ảnh sản phẩm" />
          <img className={cx("item-2")} src={product.image[1]} alt="ảnh sản phẩm" />
          <img className={cx("item-3")} src={product.image[0]} alt="ảnh sản phẩm" />
          <img className={cx("item-4")} src={product.image[1]} alt="ảnh sản phẩm" />
          <img className={cx("item-5")} src={product.image[0]} alt="ảnh sản phẩm" />
          <img className={cx("item-6")} src={product.image[1]} alt="ảnh sản phẩm" />
        </div>
        <div className={cx("product-info")}>
          <span className={cx("product-new")}>Hàng mới</span>
          <h3 className={cx("product-name")}>{product.name}</h3>
          <div className={cx("product-choose")}>
            <SizeColor
              product={product}
              noButton
              setChooseColor={setChooseColor}
              setChooseSize={setChooseSize}
            />
          </div>
          <p className={cx("product-modalSize")}>Hướng dẫn tính size</p>
          <div className={cx("product-button")}>
            {currentUser ? (
              <button onClick={handleOrder}>THÊM VÀO GIỎ HÀNG</button>
            ) : (
              <button onClick={handleOrder}>
                <Link to="/login">THÊM VÀO GIỎ HÀNG </Link>
              </button>
            )}
            <button>
              <Link to="/blogs">
                <FontAwesomeIcon icon={faMapMarker} /> TÌM SẢN PHẨM TẠI SHOWROOM
              </Link>
            </button>

            <div className={cx("animation", show && "show")}>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </div>
          </div>
          {!currentUser && (
            <div className={cx("product-login")}>
              <Link>Đăng nhập</Link>
              <p>để tích điểm và hưởng quyền lợi thành viên từ JUNO</p>
            </div>
          )}
          <div className={cx("product-policy")}>
            <h4>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h4>
            <p>(Cho hoá đơn từ 300.000đ)</p>
          </div>
          <div className={cx("product-policy")}>
            <h4>ĐỔI TRẢ DỄ DÀNG</h4>
            <p>(Đổi trả 30 ngày cho Giày và Túi; 7 ngày cho Phụ kiện nếu lỗi nhà sản xuất)</p>
          </div>
          <div className={cx("product-policy")}>
            <h4>TỔNG ĐÀI BÁN HÀNG 1800 1162</h4>
            <p>(Miễn phí từ 8h00 - 21:00 mỗi ngày)</p>
          </div>
        </div>
      </div>
      <div className={cx("suggestion")}>
        <h2>Có thể nàng sẽ thích</h2>
        <div className={cx("suggestion-products")}>
          {suggestionProducts.map((item) => {
            return <ProductItem product={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
