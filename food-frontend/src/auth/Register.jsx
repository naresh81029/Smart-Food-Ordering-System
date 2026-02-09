import { useState } from "react";
import { registerUser, registerAdmin } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "USER",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.role === "ADMIN") {
        await registerAdmin({
          username: form.username,
          password: form.password,
        });
      } else {
        await registerUser({
          username: form.username,
          password: form.password,
        });
      }

      alert("Registration successful");
      localStorage.setItem("welcomeUser", form.username);

      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card animate-up">
        <div className="register-image">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Food"
          />
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <h2>🍽 Create Account</h2>
          <p>Join us & enjoy delicious food</p>

          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <select name="role" onChange={handleChange}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
