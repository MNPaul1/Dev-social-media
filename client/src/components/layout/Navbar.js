import React, { useState } from "react";
import "./Navbar.css";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "react-router-dom";
export default function Navbar() {
  const icons = { menu: <MenuIcon />, close: <CloseIcon /> };
  const [icon, setIcon] = useState("menu");
  const handleClick = () => {
    const pages = document.getElementsByClassName("pages")[0];
    pages.style.display = pages.style.display === "flex" ? "none" : "flex";
    setIcon((preVal) => (preVal === "menu" ? "close" : "menu"));
  };
  return (
    <div className="navBar">
      <div className="appName">
        <CodeOffIcon sx={{ fontSize: "xx-large", marginRight: "5px" }} />
        <nav>DevConnect</nav>
      </div>
      <div className="pages">
        <nav>Developer</nav>
        <nav>Sign Up</nav>
        <nav>Log In</nav>
      </div>
      <div className="menu" onClick={handleClick}>
        {icons[icon]}
      </div>
    </div>
  );
}
