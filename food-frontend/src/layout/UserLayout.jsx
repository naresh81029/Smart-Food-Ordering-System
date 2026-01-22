import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="USER" />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
