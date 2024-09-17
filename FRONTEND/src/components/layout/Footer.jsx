import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          Cosmic Canvas is a user-friendly blogging platform designed to empower creators to share their ideas.
          It offers customizable themes, advanced editing tools to enhance your content’s reach and appearance.
          Whether you’re a seasoned blogger or just starting, Cosmic Canvas is the perfect space for your creativity to flourish and reach a global audience.
          </p>
          <p>
            <span>Email:</span>aksri@gmail.com
          </p>
          <p>
            <span>Phone:</span>0123987123
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">COSMIC <span>CANVAS</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <a href="https://github.com/aksri305" target="_blank" rel="noopener noreferrer">
            <FaGitSquare />
          </a>

          <a href="https://www.youtube.com/@AyushKumar-wl7pz" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube />
          </a>

          <a href="https://www.linkedin.com/in/ayush-kumar-31751b291" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
           </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;