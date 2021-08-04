import React from "react";
import "./../../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects</h1>
      <div className="projects-container">
        {}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >


          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DannyJacome30/Calculator-practica6-git"
          >
            <div className="project-images" id="projects"></div>
          </a>


          <div className="project-links">
            <div className="text">
              <h3>Calculadora</h3>
              
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >


          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DannyJacome30/proyecto-restaurante"
          >
            <div className="project-images" id="projects"></div>
          </a>


          <div className="project-links">
            <div className="text">
              <h3>Restaurante</h3>
              
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >


          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
          >
            <div className="project-images" id="projects"></div>
          </a>


          <div className="project-links">
            <div className="text">
              <h3>Reconocimiento de emociones y rostros</h3>
              
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >


          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
          >
            <div className="project-images" id="projects"></div>
          </a>


          <div className="project-links">
            <div className="text">
              <h3>Predicción de precios de vehículos</h3>
              
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >


          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
          >
            <div className="project-images" id="projects"></div>
          </a>


          <div className="project-links">
            <div className="text">
              <h3>Gestión pedidos empresa MC-Ingenieria Mecanica</h3>
              
            </div>
          </div>
        </motion.div>
        
      </div>
      
    </section>
  );
};

export default Portfolio;
