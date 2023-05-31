import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import book from '../../images/book.png';

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={book} alt=" " id="book" />
      <nav ref={navRef} id="nav">
        <a href="/#Home">Home</a>
        <a href="/#libraries">Libraries</a>
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

export default Navbar;
