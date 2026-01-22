import { useEffect, useState } from "react";
import { getAllFood } from "../../api/foodApi";
import { bookFood } from "../../api/orderApi";

export default function FoodList() {
  const [foods, setFoods] = useState([]);
  const [message, setMessage] = useState("");
  const username = localStorage.getItem("username");

  useEffect(() => {
    const loadFood = async () => {
      const res = await getAllFood();
      setFoods(res.data);
    };
    loadFood();
  }, []);

  const handleBook = async (foodId) => {
    try {
      await bookFood(foodId, username);
      setMessage("✅ Booking successful!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Booking failed");
    }
  };

  return (
    <>
      <h2>🍽 Menu</h2>
      {message && <p>{message}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {foods.map((f) => (
          <div key={f.foodId} className="card">
            {/* ✅ IMAGE FROM DATABASE */}
            <img
  src={f.imageUrl || "/images/default-food.jpg"}
  alt={f.foodName}
  onError={(e) => e.target.src = "/images/default-food.jpg"}
  style={{
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px"
  }}
/>


            <h4>{f.foodName}</h4>
            <p>₹{f.price}</p>

            <button onClick={() => handleBook(f.foodId)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
