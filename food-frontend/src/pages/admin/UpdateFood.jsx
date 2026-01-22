import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateFood } from "../../api/foodApi";

export default function UpdateFood() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({
    foodName: "",
    foodCatagory: "",
    price: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/food/${id}`)
      .then(res => setFood(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) =>
    setFood({ ...food, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateFood(id, food);
    alert("Food updated successfully");
    navigate("/admin/food");
  };

  return (
    <div className="card center">
      <h3>✏️ Update Food</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="foodName"
          value={food.foodName}
          onChange={handleChange}
          placeholder="Food Name"
        />

        <input
          name="foodCatagory"
          value={food.foodCatagory}
          onChange={handleChange}
          placeholder="Category"
        />

        <input
          name="price"
          type="number"
          value={food.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <button>Update</button>
      </form>
    </div>
  );
}
