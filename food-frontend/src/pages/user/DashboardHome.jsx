import "./UserDashboard.css";

export default function DashboardHome() {
  return (
    <div className="user-dashboard">

      {/* HERO VIDEO */}
      <section className="user-hero">
        <video autoPlay muted loop playsInline>
          <source
            src="https://cdn.pixabay.com/video/2022/10/09/134320-748938803_large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="user-hero-overlay animate-fade">
          <h1>Welcome to Food App 🍔</h1>
          <p>Order delicious food anytime</p>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="user-actions">
        <div className="action-card animate-up">
          <span>🍕</span>
          <h3>Browse Food</h3>
          <p>Explore tasty dishes</p>
        </div>

        <div className="action-card animate-up">
          <span>📦</span>
          <h3>My Orders</h3>
          <p>Track your orders</p>
        </div>

        <div className="action-card animate-up">
          <span>⏱</span>
          <h3>Fast Delivery</h3>
          <p>Hot & fresh food</p>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="user-info animate-fade">
        <h2>🔥 Fresh • Hot • Delicious</h2>
        <p>Prepared by expert chefs with premium ingredients</p>
      </section>

    </div>
  );
}
