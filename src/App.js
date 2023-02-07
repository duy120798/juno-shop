import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Collections from "./page/Collections";
import Blogs from "./page/Blogs";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Product from "./page/Product";
import Products from "./page/Products";
import Login from "./page/Login";
import Register from "./page/Register";
import React, {createContext} from "react";

import {useState} from "react";
import {useEffect} from "react";
import Cart from "./page/Cart";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
export const LoginContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(currentAccount);
  const data = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    localStorage.setItem("currentAccount", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <LoginContext.Provider value={data}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route
              path="/juno-shop"
              element={
                <DefaultLayout>
                  <Collections />
                </DefaultLayout>
              }
            />
            <Route
              path="/products"
              element={
                <DefaultLayout>
                  <Products />
                </DefaultLayout>
              }
            />
            <Route
              path="/blogs"
              element={
                <DefaultLayout>
                  <Blogs />
                </DefaultLayout>
              }
            />
            <Route
              path="/product/:name"
              element={
                <DefaultLayout>
                  <Product />
                </DefaultLayout>
              }
            />
            <Route
              path="/login"
              element={
                <DefaultLayout>
                  <Login />
                </DefaultLayout>
              }
            />
            <Route
              path="/register"
              element={
                <DefaultLayout>
                  <Register />
                </DefaultLayout>
              }
            />
            <Route
              path="/cart"
              element={
                <DefaultLayout>
                  <Cart />
                </DefaultLayout>
              }
            />
          </Routes>
        </div>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
