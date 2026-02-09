import { Link } from "react-router-dom";
import "./Home.css";

const foods = [
  {
    name: "Pizza",
    img: "/images/pizza.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Burger",
    img: "/images/burger.jpg",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    name: "Biryani",
    img: "/images/biryani.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Pasta",
    img: "/images/pasta.jpg",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content animate-fade">
          <h1>🍽 Order Food Smarter</h1>
          <p>Fast booking · Easy management · Real-time orders</p>

          <div className="hero-buttons">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO BANNER */}
      <section className="video-banner">
        <video autoPlay muted loop playsInline>
          <source
            src="https://cdn.pixabay.com/video/2023/08/05/174746-852456205_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-text animate-fade">
          Fresh • Hot • Delicious 🍕
        </div>
      </section>

      {/* POPULAR FOODS */}
      <section className="trending">
        <h2>🔥 Popular Foods</h2>

        <div className="grid">
          {foods.map((food) => (
            <div className="card animate-up" key={food.name}>
              <img src={food.img} alt={food.name} />

              <h4>{food.name}</h4>
              <p>Order now & enjoy</p>

              <video
                src={food.video}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            </div>
          ))}
        </div>
      </section>

      {/* RESTAURANT VIDEO SECTION */}
      <section className="restaurant-video">
        <video autoPlay muted loop playsInline>
          <source
            src="https://cdn.pixabay.com/video/2022/11/07/137708-768623679_large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-overlay animate-fade">
          <h2>👨‍🍳 Crafted by Expert Chefs</h2>
          <p>World-class taste · Hygienic kitchens · Premium ingredients</p>
        </div>
      </section>

      {/* CHEFS SECTION */}
      <section className="chefs">
        <h2>⭐ Meet Our Chefs</h2>

        <div className="chef-grid">
          <div className="chef-card animate-up">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Chef Antonio"
            />
            <h4>Chef Antonio</h4>
            <p>Italian Cuisine Expert</p>
          </div>

          <div className="chef-card animate-up">
            <img
              src="https://images.unsplash.com/photo-1548940740-204726a19be3"
              alt="Chef Arjun"
            />
            <h4>Chef Arjun</h4>
            <p>Indian Biryani Master</p>
          </div>

          <div className="chef-card animate-up">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
              alt="Chef Maria"
            />
            <h4>Chef Maria</h4>
            <p>Continental Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
}
