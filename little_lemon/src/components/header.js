import logo from "../assets/Logo.png"

function Header() {
    return (
      <>
        <nav className="HeaderNav">
          <ul id="NavLinks">
            <li><img src={logo} alt="logo" height="100%"/></li>
            <li><a href>Home</a></li>
            <li><a href>About</a></li>
            <li><a href>Menu</a></li>
            <li><a href>Reservations</a></li>
            <li><a href>Order online</a></li>
            <li><a href>Login</a></li>
          </ul>
        </nav>
      </>
    );
  }

  export default Header;