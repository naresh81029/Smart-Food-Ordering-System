export default function DashboardHome() {
  return (
    <>
      <div style={{
        background: "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836)",
        padding: "60px",
        borderRadius: "10px",
        color: "white",
        marginBottom: "30px"
      }}>
        <h1>Welcome to Food App 🍔</h1>
        <p>Order delicious food anytime</p>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">🍕 Browse Food</div>
        <div className="card">📦 My Orders</div>
        <div className="card">⏱ Fast Delivery</div>
      </div>
    </>
  );
}
