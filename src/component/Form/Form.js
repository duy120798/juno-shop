import classNames from "classnames/bind";
import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Form.module.scss";
import {useContext} from "react";
import {LoginContext} from "~/App";

const cx = classNames.bind(styles);

function Form({type}) {
  const {setCurrentUser} = useContext(LoginContext);
  // value của các input
  const [LoginName, setLoginName] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("Hải Châu, Đà Nẵng");
  // Show lỗi validate
  const [nameIsValid, setNameIsValid] = useState(true);
  const [passIsValid, setPassIsValid] = useState(true);
  const [rePassIsValid, setRePassIsValid] = useState(true);
  // show lỗi khi đăng ký và đăng nhập
  const [showErrNameSake, setShowErrNameSake] = useState(false);
  const [showErrName, setShowErrName] = useState(false);
  const [showErrPass, setShowErrPass] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const nameInput = useRef();
  const passInput = useRef();
  const rePassInput = useRef();
  // xử lý đăng ký
  const handleRegister = (e) => {
    e.preventDefault();
    if (nameIsValid && passIsValid && rePassIsValid && LoginName && pass) {
      const newAccount = {
        LoginName,
        pass,
        userName: userName || "USER1",
        address: address || "Hải Châu, Đà Nẵng",
        cart: [],
      };
      let accountList = JSON.parse(localStorage.getItem("accountList"));
      if (accountList) {
        if (!accountList.find((account) => account.LoginName === newAccount.LoginName)) {
          setShowErrNameSake(false);

          accountList = [...accountList, newAccount];
        } else {
          setShowErrNameSake(true);
          return;
        }
      } else {
        accountList = [newAccount];
      }

      localStorage.setItem("accountList", JSON.stringify(accountList));
      localStorage.setItem("currentAccount", JSON.stringify(newAccount));
      setShowModal(true);
      setLoginName("");
      setPass("");
      setRePass("");
    }
  };
  // xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    if (nameIsValid && passIsValid && rePassIsValid && LoginName && pass) {
      const loginAccount = {
        LoginName,
        pass,
      };
      let accountList = JSON.parse(localStorage.getItem("accountList"));

      if (accountList) {
        const findAccount = accountList.find(
          (account) => account.LoginName === loginAccount.LoginName
        );
        if (findAccount) {
          setShowErrName(false);
          if (findAccount.pass === loginAccount.pass) {
            setShowErrPass(false);
            setShowModal(true);
            localStorage.setItem("currentAccount", JSON.stringify(findAccount));
            setLoginName("");
            setPass("");
          } else {
            setShowErrPass(true);
          }
        } else {
          setShowErrName(true);
        }
      } else {
        setShowErrName(true);
      }
    }
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <form>
          <label htmlFor="email">Tên đăng nhập</label>
          <input
            onBlur={(e) => {
              if (e.target.value.length >= 10) {
                setNameIsValid(true);
              } else {
                setNameIsValid(false);
              }
            }}
            value={LoginName}
            onChange={(e) => setLoginName(e.target.value.trimStart())}
            ref={nameInput}
            type="text"
            placeholder="Nhập tên đăng nhập"
            id="email"
          />
          {!nameIsValid && <p>Tên đăng nhập có ít nhất 10 ký tự</p>}
          {showErrNameSake && <p>Tên đăng nhập đã có ngươi sử dụng</p>}
          {showErrName && <p>Tên đăng nhập không tồn tại</p>}
          <label htmlFor="psw">Mật Khẩu</label>
          <input
            onBlur={(e) => {
              if (e.target.value.length >= 6) {
                setPassIsValid(true);
              } else {
                setPassIsValid(false);
              }
            }}
            value={pass}
            onChange={(e) => setPass(e.target.value.trim())}
            ref={passInput}
            type="password"
            placeholder="Nhập Mật Khẩu"
            id="psw"
          />
          {!passIsValid && <p>Mật khẩu có ít nhất 6 ký tự</p>}
          {showErrPass && <p>Mật khẩu không chính xác</p>}
          {type === "register" && (
            <>
              <label htmlFor="psw-repeat">Nhập Lại Mật Khẩu</label>
              <input
                onBlur={(e) => {
                  if (e.target.value.length >= 6 && e.target.value === passInput.current.value) {
                    setRePassIsValid(true);
                  } else {
                    setRePassIsValid(false);
                  }
                }}
                value={rePass}
                onChange={(e) => setRePass(e.target.value.trim())}
                ref={rePassInput}
                type="password"
                placeholder="Nhập Lại Mật Khẩu"
                id="psw-repeat"
              />
              {!rePassIsValid && <p>Mật khẩu phải giống nhau ở cả 2 ô</p>}

              <label htmlFor="username">Tên người dùng</label>
              <input
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                id="username"
                type="text"
                placeholder="Nhập tên của bạn"
              />
              <label htmlFor="address">Địa chỉ</label>
              <input
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                id="address"
                type="text"
                placeholder="Nhập địa chỉ"
              />
            </>
          )}

          <div className={cx("btn")}>
            {type === "register" && <button onClick={handleRegister}>Đăng ký</button>}
            {type === "login" && <button onClick={handleLogin}>Đăng nhập</button>}
          </div>
          {type === "login" && (
            <div className={cx("register-link")}>
              <Link to="/register">Đăng ký</Link>
            </div>
          )}
        </form>
      </div>
      {showModal && (
        <div className={cx("overlay")}>
          <div className={cx("modal")}>
            {type === "register" ? (
              <p>Bạn đã đăng ký và đăng nhập thành công</p>
            ) : (
              <p>Bạn đã đăng nhập thành công</p>
            )}
            <Link
              onClick={() => {
                setCurrentUser(JSON.parse(localStorage.getItem("currentAccount")));
              }}
              to={"/juno-shop"}>
              Trở về trang chủ
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
