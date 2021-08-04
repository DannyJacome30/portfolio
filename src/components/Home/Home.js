import React, { useState, useEffect } from "react";
import "./../../index.css";
import danny from "./../../images/Danny.png";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showHeadingThree, setShowHeadingThree] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingThree(false);
        setShowHeadingTwo(true);
      } else if (showHeadingTwo) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
        setShowHeadingThree(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h1 className="main-content">
          Daniela Jacome
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.7 }}
          >
           
          </motion.span>{" "}
        </h1>
        {}

        <h1>
          {" "}
          Student of Computer Science{" "}
        </h1>

        <div className="button-wrapper">
          <button
            className="button contact-btn"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact Me
          </button>
          <a
            href="https://github.com/DannyJacome30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">GitHub</button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="image-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="image profile-image " src={danny} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;
