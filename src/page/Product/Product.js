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
          <img className={cx("item-1")} src={product.image[0]} alt="???nh s???n ph???m" />
          <img className={cx("item-2")} src={product.image[1]} alt="???nh s???n ph???m" />
          <img className={cx("item-3")} src={product.image[0]} alt="???nh s???n ph???m" />
          <img className={cx("item-4")} src={product.image[1]} alt="???nh s???n ph???m" />
          <img className={cx("item-5")} src={product.image[0]} alt="???nh s???n ph???m" />
          <img className={cx("item-6")} src={product.image[1]} alt="???nh s???n ph???m" />
        </div>
        <div className={cx("product-info")}>
          <span className={cx("product-new")}>H??ng m???i</span>
          <h3 className={cx("product-name")}>{product.name}</h3>
          <div className={cx("product-choose")}>
            <SizeColor
              product={product}
              noButton
              setChooseColor={setChooseColor}
              setChooseSize={setChooseSize}
            />
          </div>
          <p className={cx("product-modalSize")}>H?????ng d???n t??nh size</p>
          <div className={cx("product-button")}>
            {currentUser ? (
              <button onClick={handleOrder}>TH??M V??O GI??? H??NG</button>
            ) : (
              <button onClick={handleOrder}>
                <Link to="/login">TH??M V??O GI??? H??NG </Link>
              </button>
            )}
            <button>
              <Link to="/blogs">
                <FontAwesomeIcon icon={faMapMarker} /> T??M S???N PH???M T???I SHOWROOM
              </Link>
            </button>

            <div className={cx("animation", show && "show")}>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </div>
          </div>
          {!currentUser && (
            <div className={cx("product-login")}>
              <Link>????ng nh???p</Link>
              <p>????? t??ch ??i???m v?? h?????ng quy???n l???i th??nh vi??n t??? JUNO</p>
            </div>
          )}
          <div className={cx("product-policy")}>
            <h4>MI???N PH?? GIAO H??NG TO??N QU???C</h4>
            <p>(Cho ho?? ????n t??? 300.000??)</p>
          </div>
          <div className={cx("product-policy")}>
            <h4>?????I TR??? D??? D??NG</h4>
            <p>(?????i tr??? 30 ng??y cho Gi??y v?? T??i; 7 ng??y cho Ph??? ki???n n???u l???i nh?? s???n xu???t)</p>
          </div>
          <div className={cx("product-policy")}>
            <h4>T???NG ????I B??N H??NG 1800 1162</h4>
            <p>(Mi???n ph?? t??? 8h00 - 21:00 m???i ng??y)</p>
          </div>
        </div>
      </div>
      <div className={cx("suggestion")}>
        <h2>C?? th??? n??ng s??? th??ch</h2>
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
