import { useState } from "react";
import { adminLogin } from "../api/authApi";
import "../style/Global.css";

function AdminLogin() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminLogin(data)) window.location.href = "/admin/food";
    else alert("Invalid Admin Credentials");
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <input placeholder="Username"
            onChange={(e) => setData({ ...data, username: e.target.value })} />
          <input type="password" placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })} />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
