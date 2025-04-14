import { useState } from "react";
import Mobilenav from "./MobileNavbar/Mobilenav";
import shivi from '../assets/shivi1.jpg'

function Navbar() {

  const [openMenu, setOpenMenu]=useState(false)


  const toggelMenu=()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <>

    <Mobilenav isOpen={openMenu} toggelMenu={toggelMenu}/>
    <div className="App">
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={shivi} alt="shivi" />
          <ul>
  <li>
    <a className="menu-item" href="#home">Home</a>
  </li>
  <li>
    <a className="menu-item" href="#skills">Skills</a>
  </li>
  <li>
    <a className="menu-item" href="#projects">Projects</a>
  </li>
  <li>
    <a className="menu-item" href="#contact">Contact</a>
  </li>
  <li>
    <a href="#contact">
      <button className="contact-btn">
        Hire Me
      </button>
    </a>
  </li>
</ul>

          <button className="menu-btn" onClick={toggelMenu}>
            <span 
            class={"material-symbols-outlined"}
            style={{fontSize:"1.8rem"}}>
{openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
