import React from "react";
import { Resume1 } from "../Resume/Resume";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <Nav id="nav-menu">
      <Logo to="./">
        <h1 className="nav-link home">Madhukar</h1>
      </Logo>
      <NavMenu>
      <NavLink className="menu-item nav-link about" to="home" smooth={true}>
          Home
        </NavLink>
        <NavLink className="menu-item nav-link about" to="about" smooth={true}>
          About
        </NavLink>
        <NavLink
          className="menu-item nav-link skills"
          to="skills"
          smooth={true}
        >
          Skills
        </NavLink>
        <NavLink
          className="menu-item nav-link projects"
          to="projects"
          smooth={true}
        >
          Projects
        </NavLink>
        <NavLink
          className="menu-item nav-link contact"
          to="contact"
          smooth={true}
        >
          Contact
        </NavLink>
        {/* <NavBtn
          className="menu-item nav-link resume"
          id="resume-button-1"
        >
           <Resume2 id="resume-button-2"  />
        </NavBtn> */}
      </NavMenu>
      <div id="resume-button-1">
        <NavBtn className="nav-link resume resume-link-1">
          <Resume1
            className="nav-link resume"
            id="resume-link-1"
          />
        </NavBtn>
      </div>
      {/* <NavBtn>
        <Resume2 id="resume-button-1" className="nav-link resume" />
      </NavBtn> */}

      <Bars onClick={toggle} />
    </Nav>
  );
};

export default Header;
