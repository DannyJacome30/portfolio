import React, { useState } from "react";
import "./../../index.css";
import { motion } from "framer-motion";
import { animateScroll as Link } from "react-scroll";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);
  let offset = -70;

 

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div className={navbar ? "nav-wrapper active" : "nav-wrapper"}>
      <motion.div
        id="navbar"
        className={navbar ? "nav-container active" : "nav-container"}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
      <ul className={navClicked ? "nav-links active" : "nav-links"}>
          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="aboutMe"
              hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              About me
            </Link>
          </li>

          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="portfolio"
              delay={100}
              spy={true}
              smooth={true}
              offset={offset}
              hashSpy={true}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="contact"
              delay={100}
              hashSpy={true}
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Nav;
