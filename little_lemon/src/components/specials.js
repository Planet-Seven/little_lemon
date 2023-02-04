import SpecialsCard from "./specialsCard";
import LemonDessert from "../assets/lemon dessert.jpg";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg"

function Specials() {
    return (
      <div className="Specials">
        <div className="SpecialsContainer">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="SpecialsSet">
          <SpecialsCard
            title="Greek Salad"
            price="$12.99"
            image={GreekSalad}
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
          <SpecialsCard
            title="Lemon Dessert"
            price="$5.89"
            image={LemonDessert}
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
          <SpecialsCard
            title="Bruchetta"
            price="$5.89"
            image={Bruchetta}
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can ve imagined."/>
        </div>
      </div>
    );
  }

  export default Specials;