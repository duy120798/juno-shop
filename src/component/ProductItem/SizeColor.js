import classNames from "classnames/bind";
import {useState} from "react";
import styles from "./ProductItem.module.scss";
import {useContext} from "react";
import {LoginContext} from "~/App";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SizeColor({product, noButton, setChooseColor, setChooseSize}) {
  const [color, setColor] = useState("pink");
  const [size, setSize] = useState("s");
  const [show, setShow] = useState(false);

  const orderProduct = {
    name: product.name,
    cost: product.currentPrice || product.cost,
    img: product.image[0],
    color,
    size,
    quantity: 1,
  };

  const {currentUser, setCurrentUser} = useContext(LoginContext);

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
    <div>
      <div className={cx("product-color")}>
        <div
          onClick={() => {
            setColor("pink");
            setChooseColor && setChooseColor("pink");
          }}
          className={cx("color-pink", {active: color === "pink"})}></div>
        <div
          onClick={() => {
            setColor("green");
            setChooseColor && setChooseColor("green");
          }}
          className={cx("color-green", {active: color === "green"})}></div>
        <div
          onClick={() => {
            setColor("white");
            setChooseColor && setChooseColor("white");
          }}
          className={cx("color-white", {active: color === "white"})}></div>
      </div>
      <div className={cx("product-size")}>
        <div
          onClick={() => {
            setSize("s");
            setChooseSize && setChooseSize("s");
          }}
          className={cx("size-s", {active: size === "s"})}>
          S
        </div>
        <div
          onClick={() => {
            setSize("m");
            setChooseSize && setChooseSize("m");
          }}
          className={cx("size-m", {active: size === "m"})}>
          M
        </div>
        <div
          onClick={() => {
            setSize("l");
            setChooseSize && setChooseSize("l");
          }}
          className={cx("size-l", {active: size === "l"})}>
          L
        </div>
        <div
          onClick={() => {
            setSize("xl");
            setChooseSize && setChooseSize("xl");
          }}
          className={cx("size-xl", {active: size === "xl"})}>
          XL
        </div>
      </div>
      {!noButton && (
        <>
          {currentUser ? (
            <>
              <button onClick={handleOrder} className={cx("product-add")}>
                Thêm vào giỏ hàng
              </button>
              <div className={cx("animation", show && "show")}>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </div>
            </>
          ) : (
            <button className={cx("product-add")}>
              <Link to={"/login"}>Thêm vào giỏ hàng</Link>
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SizeColor;
