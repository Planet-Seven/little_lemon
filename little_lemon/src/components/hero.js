import food from "../assets/restauranfood.jpg"


function Hero() {
    return (
      <div className="Hero">
        <div className="HeroText">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
          <button>Reserve a table</button>
        </div>
        <img className="HeroImg" src={food} alt="food" width="100%" height="80%" objectFit="contain" position="5px"/>
      </div>
    );
  }

  export default Hero;