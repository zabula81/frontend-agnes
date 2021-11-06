import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { style } from '../Global/style'
function Navbar() {
  const matches = useMediaQuery("(max-width: 850px)");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (matches) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [matches]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const closeMenu = () => {
    if (matches){
      setIsVisible(false)
    }
  }
  return (
    <nav className="navbar" style={isVisible ? style.height100 : style.height0}>
      <div className="navbar__icon" onClick={matches ? handleClick : undefined}>
        <MenuIcon sx={{ fontSize: 52 }} />
      </div>
      <ul
        className="navbar__list"
        style={!isVisible ? style.hidden : style.visible}
      >
        <li onClick={closeMenu}>
          <a href="#aboutme">Kim Jestem?</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#information">W czym mogę pomóc?</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#my-projects">Moje Projekty</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact-me">Kontakt</a>
        </li>
        <li>
          <Link to="/resume-agnieszka.kaminska">Moje CV</Link>
        </li>
        <li>
          <Link to="/resume-generator">Generator CV</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
