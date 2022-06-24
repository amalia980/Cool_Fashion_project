import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

//style
import "./scss/ContactUs.scss";
import { IoMailOutline } from "react-icons/io5";

const ContactUs = () => {
  const {isOpen, setIsOpen } = useContext(UserContext);
  const [email, setEmail] = useState()


  const handleInput = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const sendingEmail = (e) => {
    e.preventDefault();

    try {
      fetch("http://localhost:5000/api/newEmail", {
        method: "post",
        body: JSON.stringify(email),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("success");
    } catch (error) {
      console.error("Error: ", error);
    }
    
    alert(
      `Tack för ditt mail ${email.name}, vi svarar vanligtvis inom en arbetsdag.`
    );
    setIsOpen(!isOpen);

  };


  return (
    <div>
      <form onSubmit={sendingEmail} className="contact_form">
        <div className="round_thing">
          <IoMailOutline></IoMailOutline>
        </div>
        <div className="content_wrapper">
          <input
            name="name"
            placeholder="Förnamn"
            onChange={handleInput}
            required
          ></input>
          <input
            name="email"
            placeholder="Mail"
            onChange={handleInput}
            required
          ></input>
          {/* <input type="file"
           name="file"
           placeholder="upload file"
           onChange={handleInput}
          ></input> */}
          <textarea
            name="body"
            placeholder="skriv ditt ärende här"
            onChange={handleInput}
            required
          ></textarea>
          <button className="button_form" type="submit">
            Skicka
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
