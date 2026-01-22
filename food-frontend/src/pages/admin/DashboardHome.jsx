import { useEffect, useState } from "react";
import { getAllFood } from "../../api/foodApi";
import { allOrders } from "../../api/orderApi";
import "./AdminDashboard.css";

export default function DashboardHome() {
  const [foodCount, setFoodCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    getAllFood().then(res => setFoodCount(res.data.length));
    allOrders().then(res => setOrderCount(res.data.length));
  }, []);

  return (
    <div className="admin-dashboard">
      
      {/* VIDEO HEADER */}
      <section className="admin-video">
        <video autoPlay muted loop>
          <source
            src="https://cdn.pixabay.com/video/2021/08/28/86169-591774770_large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="admin-video-overlay animate-fade">
          <h1>📊 Admin Dashboard</h1>
          <p>Manage foods, orders & users efficiently</p>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card animate-up">
          <span className="icon">🍔</span>
          <h3>Total Foods</h3>
          <p>{foodCount}</p>
        </div>

        <div className="stat-card animate-up">
          <span className="icon">📦</span>
          <h3>Total Orders</h3>
          <p>{orderCount}</p>
        </div>

        <div className="stat-card animate-up">
          <span className="icon">👥</span>
          <h3>Users Active</h3>
          <p>Live</p>
        </div>
      </div>

      {/* ADMIN INFO */}
      <section className="admin-info animate-fade">
        <h2>👨‍💼 Admin Control Center</h2>
        <p>
          Track orders in real-time, manage menus, and ensure smooth operations.
        </p>
      </section>
    </div>
  );
}
