import React from "react";
import ContactUs from "./ContactUs";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import misfitIcon from "../assets/icons/misfits_icon.png"
//style
import "./scss/Footer.scss";

const Footer = (props) => {
  const [message] = useState("");
  const { user, setUser, isOpen, setIsOpen } = useContext(UserContext);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Du följer nu oss, som tack har vi skickat ett mail med 10% rabatt");
  };

  return (
    <div>
      <footer style={{ position: "absolute" }}>
        <div className="brand_logo">
          <img src={misfitIcon} alt={misfitIcon} />
        </div>
        <div className="footer_links">
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <ContactUs></ContactUs>
          </Modal>

          <ul>
            <p>Shop</p>
            <Link to="#">Mitt konto</Link>
            <Link to="#">Handla & Beställa</Link>
            <Link to="#">Presentkort & Rabatter</Link>
          </ul>
          <ul>
            <p>Konto</p>
            <Link
              to="#"
              className="footer_button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Stäng kontakt" : "Kontakta oss"}
            </Link>
            <Link to="#">Om oss</Link>
            <Link to="#">Villkor</Link>
          </ul>
        </div>
        <div className="footer_subscribe">
          <form onSubmit={handleSubmit}>
            <p>Få de senaste nyheterna och erbjudanden</p>
            <input
              onChange={handleInput}
              name="email"
              value={user.mail}
              placeholder="Skriv din mail.."
            />
            <button type="submit">FÖLJ OSS</button>
            <p>{message}</p>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
