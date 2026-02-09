import { useEffect, useState } from "react";
import { userOrders, cancelOrder } from "../../api/orderApi";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const username = localStorage.getItem("username");

  // Load orders
  const loadOrders = async () => {
    try {
      const res = await userOrders(username);
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to load orders", err);
    }
  };

  useEffect(() => {
    if (username) {
      loadOrders();
    }
  }, [username]);

  // Cancel order
  const handleCancel = async (id) => {
    await cancelOrder(id);
    loadOrders();
  };

  // Apply filter
  const filteredOrders = orders.filter(o => {
    if (filter === "ALL") return true;
    return o.status === filter;
  });

  return (
    <div className="container">
      <h2>📦 My Orders</h2>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <button
          className={filter === "ALL" ? "btn" : ""}
          onClick={() => setFilter("ALL")}
        >
          All
        </button>{" "}
        <button
          className={filter === "BOOKED" ? "btn" : ""}
          onClick={() => setFilter("BOOKED")}
        >
          Booked
        </button>{" "}
        <button
          className={filter === "CANCELLED" ? "btn" : ""}
          onClick={() => setFilter("CANCELLED")}
        >
          Cancelled
        </button>
      </div>

      {filteredOrders.length === 0 && (
        <p>No orders found</p>
      )}

      {filteredOrders.map(o => (
        <div key={o.id} className="card">
          <h4>{o.foodName}</h4>

          <p>
            Status:{" "}
            <span className={`status ${o.status}`}>
              {o.status}
            </span>
          </p>

          {o.bookedAt && (
            <p className="order-date">
              📅 Booked: {new Date(o.bookedAt).toLocaleString()}
            </p>
          )}

          {o.cancelledAt && (
            <p className="order-date">
              ❌ Cancelled: {new Date(o.cancelledAt).toLocaleString()}
            </p>
          )}

          {o.status === "BOOKED" && (
            <button
              className="danger"
              onClick={() => handleCancel(o.id)}
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
