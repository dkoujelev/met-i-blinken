import React from "react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaFlickr
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/oslomet/"
        className="footer-icon facebook"
      >
        <FaFacebook />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/oslomet"
        className="footer-icon twitter"
      >
        <FaTwitterSquare />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://no.linkedin.com/school/oslomet/"
        className="footer-icon linkedin"
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.flickr.com/photos/hioa/"
        className="footer-icon flickr"
      >
        <FaFlickr />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/oslomet/?hl=nb"
        className="footer-icon instagram"
      >
        <FaInstagram />
      </a>
    </footer>
  );
};
