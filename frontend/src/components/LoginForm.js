import React from "react";
import {  useState, useContext, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'


//STYLING - inline styling + ContactUs.scss
import "./MenuNavbar.js";

import { BsPerson } from "react-icons/bs";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(UserContext)
  const [checkUser, setCheckUser] = useState("")
  

  const inputLogin = (e) => {
    setCheckUser({ ...checkUser, [e.target.name]: e.target.value });
    console.log(checkUser)
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/user/login`, {
        method: "post",
        body: JSON.stringify(checkUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 401) {
        const data = await res.json();
        console.log(data);
        alert("välkommen")
        navigate("/myaccount")
        setLoggedIn(true)
      } else {
        alert("fel lösenord eller användarnamn")
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    async function authenticated() {
      let response = await fetch("http://localhost:5000/api/user/authenticated");
      let data = await response.json();
      console.log(data);
      if (response.status !== 401) {
        console.log("inloggad");
      }
    }
    authenticated();
  }, []);

  return (
    <div>
      <div>
        <form
          onSubmit={handleLogin}
          className="contact_form"
          id="login_form"
          style={{ width: "375px", minHeight: "507px" }}
        >
          <div className="round_thing">
            <BsPerson></BsPerson>
          </div>
          <div className="content_wrapper">
            <input
              id="inputUser"
              name="username"
              placeholder="Användarnamn"
              onChange={inputLogin}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Lösenord"
              onChange={inputLogin}
              required
            />
            <div>
            <label style={{color:"white"}}>Kund</label>
            <input  onChange={inputLogin}
             name="role" value="user" 
             type="checkbox"/>

            <label style={{color:"white"}}>Admin</label>
            <input  onChange={inputLogin}
             name="role" value="admin" 
             type="checkbox"/>
            </div>

            <button
              type="submit"
              style={{ width: "95%", color: "white" }}
              className="button_form"
            >
              LOGGA IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
