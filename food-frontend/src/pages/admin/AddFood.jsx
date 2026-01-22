import { useState } from "react";
import { addFood } from "../../api/foodApi";
import "../../style/Global.css";

function AddFood() {
  const [food, setFood] = useState({
    foodName: "",
    foodCatagory: "",
    price: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!food.foodName || !food.foodCatagory || !food.price) {
      alert("All fields are required");
      return;
    }

    try {
      await addFood({
        foodName: food.foodName,
        foodCatagory: food.foodCatagory,
        price: Number(food.price),
        imageUrl: food.imageUrl   // ✅ SEND TO BACKEND
      });

      alert("Food Added Successfully");
      setFood({
        foodName: "",
        foodCatagory: "",
        price: "",
        imageUrl: ""
      });
    } catch (err) {
      console.error(err);
      alert("Add food failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Add Food</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="foodName"
            placeholder="Food Name"
            value={food.foodName}
            onChange={handleChange}
          />

          <input
            name="foodCatagory"
            placeholder="Category"
            value={food.foodCatagory}
            onChange={handleChange}
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={food.price}
            onChange={handleChange}
          />

          <input
            name="imageUrl"
            placeholder="Image URL"
            value={food.imageUrl}
            onChange={handleChange}
          />

          {/* ✅ IMAGE PREVIEW */}
          <img
            src={food.imageUrl || "/images/default-food.jpg"}
            alt="preview"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: "10px"
            }}
          />

          <button>Add Food</button>
        </form>
      </div>
    </div>
  );
}

export default AddFood;
