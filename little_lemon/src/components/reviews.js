import ReviewCard from "./reviewCard";
import Edgard from "../assets/Edgard.png"
import Riku from "../assets/Riku.png"
import Panu from "../assets/Panu.png"
import Nebrod from "../assets/Nebrod.png"

function Reviews() {
    return (
      <div className="Reviews">
        <h1>What our customers think</h1>
        <div className="ReviewBlock">
          <ReviewCard
            rating="5"
            name="Edgard"
            content="“Wonderful food”"
            image={Edgard}/>
          <ReviewCard
            rating="4"
            name="Riku"
            content="“Oustanding service”"
            image={Riku}/>
          <ReviewCard
            rating="5"
            name="Panu"
            content="“I enjoyed every minute”"
            image={Panu}/>
          <ReviewCard
            rating="4.5"
            name="Nebrod"
            content="“One of my favorite restaurants!”"
            image={Nebrod}/>
        </div>
      </div>
    );
  }

  export default Reviews;