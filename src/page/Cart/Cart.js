import classNames from "classnames/bind";
import styles from "./Cart.module.scss";

import {useContext, useState} from "react";
import {LoginContext} from "~/App";

const cx = classNames.bind(styles);

function Cart() {
  const {currentUser, setCurrentUser} = useContext(LoginContext);
  const cart = currentUser ? currentUser.cart : [];

  const [checkList, setCheckList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const orderList = checkList.reduce((result, item) => {
    return [...result, cart[item]];
  }, []);
  const handleCheck = (e) => {
    if (!checkList.includes(Number(e.target.value))) {
      setCheckList([...checkList, Number(e.target.value)]);
    } else {
      setCheckList(
        checkList.filter((a) => {
          return a !== Number(e.target.value);
        })
      );
    }
  };
  const handlePay = () => {
    if (checkList.length === 0) {
      return;
    } else {
      const newCart = cart.reduce((result, item) => {
        if (orderList.includes(item)) {
          return result;
        } else {
          return [...result, item];
        }
      }, []);
      const a = {...currentUser};
      a.cart = newCart;
      setCurrentUser(a);
      setCheckList([]);
      setShowModal(true);
    }
  };

  const handleAdd = (e) => {
    const productIndex = e.target.dataset.index;
    const data = {...currentUser};

    ++cart[productIndex].quantity;
    data.cart = cart;
    setCurrentUser(data);
  };
  const handleDecrease = (e) => {
    const productIndex = e.target.dataset.index;
    const data = {...currentUser};
    if (cart[productIndex].quantity > 1) {
      --cart[productIndex].quantity;
      data.cart = cart;
      setCurrentUser(data);
    } else {
      cart.splice(productIndex, 1);
      setCurrentUser(data);
    }
  };

  return (
    <div className={cx("wrapper")}>
      {cart.length > 0 ? (
        <>
          <h1 className={cx("header")}>GIỎ HÀNG</h1>
          <div className={cx("column")}>
            <div className={cx("column-1")}>Sản Phẩm</div>
            <div className={cx("column-2")}>Màu sắc</div>
            <div className={cx("column-2")}>Size</div>
            <div className={cx("column-2")}>Đơn Giá</div>
            <div className={cx("column-2")}>Số Lượng</div>
          </div>
          <div>
            {cart.map((product, index) => {
              return (
                <div className={cx("product", checkList.includes(index) && "active")} key={index}>
                  <div className={cx("product-info")}>
                    <input
                      checked={checkList.includes(index)}
                      type="checkbox"
                      name="choose"
                      value={index}
                      onChange={handleCheck}
                    />
                    <img className={cx("product-img")} src={product.img} alt="" />
                    <p className={cx("product-name")}>{product.name}</p>
                  </div>
                  <p className={cx("product-color")}>{product.color}</p>
                  <p className={cx("product-size")}>{product.size}</p>
                  <p className={cx("product-cost")}>{product.cost}</p>
                  <p className={cx("product-quantity")}>
                    <span
                      data-index={index}
                      className={cx("product-quantity-change")}
                      onClick={handleAdd}>
                      +
                    </span>
                    {product.quantity}
                    <span
                      data-index={index}
                      className={cx("product-quantity-change")}
                      onClick={handleDecrease}>
                      -
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className={cx("pay", checkList.length > 0 && "active")}>
            <div className={cx("pay-name")}>
              <p>Người nhận</p>
              <span>{currentUser.userName}</span>
            </div>
            <div className={cx("pay-address")}>
              <p>Địa chỉ</p>
              <span>{currentUser.address}</span>
            </div>
            <div className={cx("shipping-cost")}>
              <p>Phí ship</p>
              <span>Miễn phí</span>
            </div>
            <div className={cx("total")}>
              <p>Tổng</p>
              <span>
                {orderList.reduce((result, item) => {
                  return result + item.cost * item.quantity;
                }, 0)}{" "}
                vnd
              </span>
            </div>
          </div>
          <button
            onClick={handlePay}
            className={cx("pay-btn", checkList.length === 0 && "disable")}>
            Thanh toán
          </button>
        </>
      ) : (
        <h1 className={cx("header")}>GIỎ HÀNG TRỐNG</h1>
      )}
      {showModal && (
        <div className={cx("overlay")}>
          <div className={cx("modal")}>
            <p>Bạn đã đặt hàng thành công</p>

            <button
              onClick={() => {
                setShowModal(false);
              }}>
              Tiếp tục thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
