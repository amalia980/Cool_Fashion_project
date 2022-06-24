import React from 'react'
import { useContext } from "react";
import {RegisterContext} from "../context/RegisterContext"


//STYLING - inline styling + ContactUs.scss
import "./MenuNavbar.js";

import { BsPerson } from "react-icons/bs";

const RegisterForm = () => {    
  const { regUser, setRegUser  } = useContext(RegisterContext);


  const handleInput = (e) => {
    setRegUser({...regUser, [e.target.name]: e.target.value})
    console.log(regUser)
  };


  const handleRegister = (e) => {
    e.preventDefault();

    try {
      fetch("http://localhost:5000/api/user/register", {
        method: "post",
        body: JSON.stringify(regUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("success");
    } catch (error) {
      console.error("Error: ", error);
    }
  };


  return (
    <div>
      <div>
        <form
          onSubmit={handleRegister}
          className="contact_form"
          id="login_form"
          style={{ width: "375px", minHeight: "507px" }}
        >
          <div className="round_thing">
            <BsPerson></BsPerson>
          </div>
          <div className="content_wrapper">
            <input
              id="username"
              name="username"
              placeholder="Användarnamn"
              onChange={handleInput}
              required
            />

            <input
              name="password"
              type="password"
              onChange={handleInput}
              placeholder="Lösenord"
              required
            />
            
            <div>
            <label style={{color:"white"}}>Kund</label>
            <input  onChange={handleInput}
             name="role" value="user" 
             type="checkbox"/>

            {/* <label style={{color:"white"}}>Admin</label>
            <input  onChange={handleInput}
             name="role" value="admin" 
             type="checkbox"/> */}
            </div>

            <button
              style={{ width: "70%", backgroundColor: "black" }}
              className="button_form"
            >
              SKAPA KONTO
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm