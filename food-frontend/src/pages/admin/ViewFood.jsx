import { useEffect, useState } from "react";
import { getAllFood, deleteFood } from "../../api/foodApi";
import { Link } from "react-router-dom";
import "../../style/Global.css";

export default function ViewFood() {
  const [foods, setFoods] = useState([]);

  const loadFood = async () => {
    const res = await getAllFood();
    setFoods(res.data);
  };

  useEffect(() => {
    loadFood();
  }, []);

  const handleDelete = async (id) => {
    await deleteFood(id);
    loadFood();
  };

  return (
    <div className="container">
      <h3>Admin Food Management</h3>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {foods.map((f) => (
            <tr key={f.foodId}>
              <td>
                <img
                  src={f.imageUrl || "/images/default-food.jpg"}
                  alt={f.foodName}
                  style={{
                    width: "60px",
                    height: "45px",
                    objectFit: "cover",
                    borderRadius: "6px"
                  }}
                  onError={(e) =>
                    (e.target.src = "/images/default-food.jpg")
                  }
                />
              </td>
              <td>{f.foodName}</td>
              <td>{f.foodCatagory}</td>
              <td>₹{f.price}</td>
              <td>
                <Link className="btn" to={`/admin/update/${f.foodId}`}>
                  Edit
                </Link>
                <button
                  className="btn danger"
                  onClick={() => handleDelete(f.foodId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
