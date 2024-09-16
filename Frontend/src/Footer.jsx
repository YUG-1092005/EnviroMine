import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a>
          <FontAwesomeIcon icon={faSquareInstagram} />
        </a>
        <a>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="copyright">
        &copy; EnviroMine.
        </div>
      <div className="footer-links">
        <Link to={"/enviromine/privacypolicy"} style={{color:"black" , textDecoration:"none"}}>Privacy Policy</Link>
        <Link to={"/enviromine/terms&conditions"} style={{color:"black" , textDecoration:"none"}}>Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Footer;
