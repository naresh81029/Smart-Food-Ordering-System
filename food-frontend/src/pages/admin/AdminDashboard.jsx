export default function AdminDashboard() {
  return (
    <div className="container">
      <h2>📊 Admin Dashboard</h2>

      <div className="grid">
        <div className="card">
          <h3>🍔 Total Foods</h3>
          <p>Manage menu</p>
        </div>

        <div className="card">
          <h3>📦 Orders</h3>
          <p>View all orders</p>
        </div>

        <div className="card">
          <h3>👥 Users</h3>
          <p>Registered users</p>
        </div>
      </div>
    </div>
  );
}
