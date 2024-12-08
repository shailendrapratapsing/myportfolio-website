import React from "react";

const Navbar = () => {
  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-delay="1000">
      <div className="left nav_item">Portfolio</div>
      <div className="right">
        <a href="#home" className="nav_item nav_item">Home</a>
        <a href="#skill" className="nav_item nav_item">Skils</a>
        <a href="#project" className="nav_item nav_item">Project</a>
        <a href="#contact" className="nav_item nav_item">Contact</a>
         
      </div>
    </div>
  );
};

export default Navbar;
