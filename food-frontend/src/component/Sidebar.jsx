import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/authApi";

export default function Sidebar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // clear localStorage
    navigate("/");     // redirect to Home (or "/login")
  };

  return (
    <div style={{ width: "220px", background: "#222", color: "#fff", height: "100vh", padding: "20px" }}>
      <h3>🍔 Food App</h3>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to={`/${role.toLowerCase()}`} style={{ color: "white" }}>
          🏠 Dashboard
        </Link>

        {role === "USER" && (
          <>
            <Link to="/user/food" style={{ color: "white" }}>🍕 Food</Link>
            <Link to="/user/orders" style={{ color: "white" }}>📦 My Orders</Link>
          </>
        )}

        {role === "ADMIN" && (
          <>
            <Link to="/admin/food" style={{ color: "white" }}>📋 View Food</Link>
            <Link to="/admin/add" style={{ color: "white" }}>➕ Add Food</Link>
            <Link to="/admin/orders" style={{ color: "white" }}>📦 Orders</Link>
          </>
        )}

        {/* ✅ FIXED LOGOUT */}
        <button onClick={handleLogout} className="danger">
          🚪 Logout
        </button>
      </nav>
    </div>
  );
}
