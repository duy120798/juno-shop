import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Collections from "./page/Collections";
import Blogs from "./page/Blogs";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Product from "./page/Product";
import Products from "./page/Products";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
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
            path="/product"
            element={
              <DefaultLayout>
                <Product />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
