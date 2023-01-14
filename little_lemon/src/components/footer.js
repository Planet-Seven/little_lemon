function Footer() {
    return (
      <>
        <img src="" alt="logo"/>
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
            <li><p><img src='' alt="map"/> 711-2880 Nulla St., Mankato Mississippi 96522</p></li>
            <li><p><img src='' alt="phone"/> (257) 563-7401</p></li>
            <li><p><img src='' alt="mail"/> service@littlelemon.com</p></li>
          </ul>
        <div className="Socials">
          <ul>
            <li><a href><img src='' alt="facebook"/></a></li>
            <li><a href><img src='' alt="instagram"/></a></li>
            <li><a href><img src='' alt="twitter"/></a></li>
          </ul>
          <p>Follow us on social media!</p>
        </div>
      </>
    );
  }
  
  export default Footer;