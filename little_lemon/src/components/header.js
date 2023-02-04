import logo from "../assets/Logo.png"
import {Link} from 'react-router-dom'

function Header() {
    return (
      <>
        <nav className="HeaderNav">
          <ul id="NavLinks">
            <li><img src={logo} alt="logo" height="100%"/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/">Order online</Link></li>
            <li><Link to="/">Login</Link></li>
          </ul>
        </nav>
      </>
    );
  }

  export default Header;