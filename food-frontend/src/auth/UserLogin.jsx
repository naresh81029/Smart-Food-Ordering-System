import { useState } from "react";
import { userLogin } from "../api/authApi";
import "../style/Global.css";

function UserLogin() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userLogin(data)) window.location.href = "/user/food";
    else alert("Invalid User Credentials");
  };

  return (
    <div className="container">
      <div className="card">
        <h3>User Login</h3>
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

export default UserLogin;
