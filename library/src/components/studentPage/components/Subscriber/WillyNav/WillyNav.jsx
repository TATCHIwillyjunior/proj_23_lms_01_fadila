import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./WillyNav.css";

function WillyNav() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef} id="nav">
        <a href="/Account">My Account</a>

        <a href="/Books">Books</a>
        <a href="/#about">About</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default WillyNav;
