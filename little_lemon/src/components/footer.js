function Footer() {
    return (
      <>
        <img src="./amogus" alt="logo"/>
        <nav className="FooterNav">
          <ul >
            <li><a href>Home</a></li>
            <li><a href>About</a></li>
            <li><a href>Menu</a></li>
            <li><a href>Reservations</a></li>
            <li><a href>Order online</a></li>
            <li><a href>Login</a></li>
          </ul>
        </nav>
        <ul className="Contacts">
            <li><p><img href='' alt="map"/> 711-2880 Nulla St., Mankato Mississippi 96522</p></li>
            <li><p><img href='' alt="phone"/> (257) 563-7401</p></li>
            <li><p><img href='' alt="mail"/> service@littlelemon.com</p></li>
          </ul>
        <div className="Socials">
          <ul>
            <li><a href><img href='' alt="facebook"/></a></li>
            <li><a href><img href='' alt="instagram"/></a></li>
            <li><a href><img href='' alt="twitter"/></a></li>
          </ul>
          <p>Follow us on social media!</p>
        </div>
      </>
    );
  }
  
  export default Footer;