import { useEffect, useState } from "react";
import { login } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const [welcome, setWelcome] = useState("");
  const navigate = useNavigate();

  // 🔥 Check if user came from Register
  useEffect(() => {
    const name = localStorage.getItem("welcomeUser");
    if (name) {
      setWelcome(`Welcome ${name} 👋`);
      localStorage.removeItem("welcomeUser");
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(data);

      const { username, role } = res.data;
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);

      if (role === "ADMIN") navigate("/admin");
      else navigate("/user");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card animate-up">
        <div className="login-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food"
          />
        </div>

        <form onSubmit={submit} className="login-form">
          <h2>🔐 Login</h2>

          {welcome && <p className="welcome">{welcome}</p>}

          <input
            placeholder="Username"
            onChange={(e) =>
              setData({ ...data, username: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
            required
          />

          <button>Login</button>

          <p className="link">
            New user? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
