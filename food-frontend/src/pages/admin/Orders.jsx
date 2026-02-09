import { useEffect, useState } from "react";
import { allOrders } from "../../api/orderApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await allOrders();
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ FILTER LOGIC
  const filteredOrders =
    filter === "ALL"
      ? orders
      : orders.filter((o) => o.status === filter);

  return (
    <div>
      <h2>📦 All Orders</h2>

      {/* ✅ FILTER BUTTONS */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("BOOKED")}>Booked</button>
        <button onClick={() => setFilter("CANCELLED")}>Cancelled</button>
      </div>

      {filteredOrders.length === 0 && <p>No orders found</p>}

      {filteredOrders.map((o) => (
        <div key={o.id} className="card" style={{ marginBottom: "15px" }}>
          <h4>
            {o.username} ordered <b>{o.foodName}</b>
          </h4>

          <p>
            Status:{" "}
            <span
              style={{
                color: o.status === "BOOKED" ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {o.status}
            </span>
          </p>

          <p>📅 Booked: {new Date(o.bookedAt).toLocaleString()}</p>

          {o.cancelledAt && (
            <p>❌ Cancelled: {new Date(o.cancelledAt).toLocaleString()}</p>
          )}
        </div>
      ))}
    </div>
  );
}
