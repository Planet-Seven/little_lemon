import food from "../assets/restauranfood.jpg"
import {Link} from 'react-router-dom'

function Hero() {
    return (
      <div className="Hero">
        <div className="HeroText">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
          <Link to="/booking"><button>Reserve a table</button></Link>
        </div>
        <img className="HeroImg" src={food} alt="food" width="100%" height="80%" objectFit="contain" position="5px"/>
      </div>
    );
  }

  export default Hero;