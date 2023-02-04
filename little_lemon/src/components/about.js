import pic1 from "../assets/Mario and Adrian A.jpg"
import pic2 from "../assets/Mario and Adrian b.jpg"

function About() {
    return (
      <div className="About">
        <div className="AboutContent">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
          <p>Founded in 1987 by two brothers, we have a long tradition of a family-owned business. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <img src={pic1} alt="Mario and Adrian"/>
        <img src={pic2} alt="Mario and Adrian"/>
        <div className="AboutContent2">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    );
  }

  export default About;