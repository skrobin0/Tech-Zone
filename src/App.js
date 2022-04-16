import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home-pages/Home/Home";
import ReviewManage from "./Pages/Review-Manage/ReviewManage";
import ErrorPage from "./Pages/Error-page/ErrorPage";
import Shop from "./Pages/Shop/Shop";
import AuthProvider from "./Pages/Context/AuthProvider";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Private/PrivateRoute";
import Shipping from "./Pages/Shipping/Shipping";
import Dashboard from "./Pages/Dashboard-Section/Dashboard/DashBoard";
import UserOrder from "./Pages/Dashboard-Section/User-Section/UserOrder/UserOrder";
import MakeAdmin from "./Pages/Dashboard-Section/Admin-Section/Make Admin/MakeAdmin";
import ManageOrder from "./Pages/Dashboard-Section/Admin-Section/Manage Order/ManageOrder";
import ManageServices from "./Pages/Dashboard-Section/Admin-Section/Manage Services/ManageServices";
import AddProduct from "./Pages/Dashboard-Section/Admin-Section/Add Product/AddProduct";
import Review from "./Pages/Dashboard-Section/User-Section/Review/Review";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route
          path="/review-manage"
          element={
            <PrivateRoute>
              <ReviewManage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/place-order"
          element={
            <PrivateRoute>
              <Shipping />{" "}
            </PrivateRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />{" "}
            </PrivateRoute>
          }
        >
          <Route path="user-order" element={<UserOrder />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
          <Route path="manageOrder" element={<ManageOrder />} />
          <Route path="manageServices" element={<ManageServices />} />
          <Route path="addProducts" element={<AddProduct />} />
          <Route path="review" element={<Review />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
