import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import UpdateFood from "./pages/admin/UpdateFood";

import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";

import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

import UserHome from "./pages/user/DashboardHome";
import UserFood from "./pages/user/FoodList";
import MyOrders from "./pages/user/MyOrders";

import AdminHome from "./pages/admin/DashboardHome";
import ViewFood from "./pages/admin/ViewFood";
import AddFood from "./pages/admin/AddFood";
import Orders from "./pages/admin/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="USER">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<UserHome />} />
          <Route path="food" element={<UserFood />} />
          <Route path="orders" element={<MyOrders />} />
        </Route>

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="food" element={<ViewFood />} />
          <Route path="add" element={<AddFood />} />
          <Route path="orders" element={<Orders />} />
          <Route path="update/:id" element={<UpdateFood />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
