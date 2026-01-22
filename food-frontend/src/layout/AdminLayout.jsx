import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="ADMIN" />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
