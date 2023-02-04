import footerlogo from "../assets/footer logo.png"
import facebook from "../assets/Facebook.png"
import instagram from "../assets/Instagram.png"
import twitter from "../assets/Twitter.png"
import map from "../assets/Map.png"
import phone from "../assets/Phone.png"
import email from "../assets/Email.png"
import {Link} from 'react-router-dom'

function Footer() {
    return (
      <div className="Footer">
        <img src={footerlogo} alt="logo" className="FooterLogo"/>
        <nav className="FooterNav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/">Order online</Link></li>
            <li><Link to="/"f>Login</Link></li>
          </ul>
        </nav>
        <ul className="Contacts">
            <li><p><img src={map} alt="map"/> 711-2880 Nulla St., Mankato Mississippi 96522</p></li>
            <li><p><img src={phone} alt="phone"/> (257) 563-7401</p></li>
            <li><p><img src={email} alt="mail"/> service@littlelemon.com</p></li>
          </ul>
        <div className="Socials">
          <a href><img src={facebook} alt="facebook"/></a>
          <a href><img src={instagram} alt="instagram"/></a>
          <a href><img src={twitter} alt="twitter"/></a>
          <p>Follow us on social media!</p>
        </div>
      </div>
    );
  }

  export default Footer;