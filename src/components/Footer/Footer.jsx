import React from "react";
import { FaGithub, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/book1.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-700 text-neutral-content">
        <div className="container mx-auto flex flex-col items-center">
          <nav className="flex flex-col items-center gap-4">
            <a className="text-xl md:text-2xl text-cyan-300 text-center">
              Get in Touch
            </a>
            <div className="flex  items-center gap-4">
              <a
                href="mailto:nafisahamed14@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-600"
              >
                <FaEnvelope /> 
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100077678432442"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-600"
              >
                <FaFacebook /> 
              </a>
              <a
                href="https://github.com/nafis200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-800"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/n-ahamed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-800"
              >
                <FaLinkedin />
              </a>
            </div>
          </nav>
          <nav className="text-cyan-300 mt-6 text-center">
            <p>
              Copyright © 2024{" "}
              <span className="text-cyan-300">Nafis ahamed</span> - All rights
              reserved
            </p>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
