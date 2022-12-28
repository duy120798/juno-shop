import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Collections from "./page/Collections";
import Blogs from "./page/Blogs";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
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
            path="/blogs"
            element={
              <DefaultLayout>
                <Blogs />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
