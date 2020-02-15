import React from 'react';

import logo from '../../assets/facebook.png'
import './styles.css';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="facebook"/>
        <p className="button-profile">
          Meu perfil 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.579,2,2,6.579,2,12s4.579,10,10,10s10-4.579,10-10S17.421,2,12,2z M12,7c1.727,0,3,1.272,3,3s-1.273,3-3,3	c-1.726,0-3-1.272-3-3S10.274,7,12,7z M6.894,16.772c0.897-1.32,2.393-2.2,4.106-2.2h2c1.714,0,3.209,0.88,4.106,2.2	C15.828,18.14,14.015,19,12,19S8.172,18.14,6.894,16.772z"/></svg>
        </p>
      </div>
    </header>
  )
}

export default Header;