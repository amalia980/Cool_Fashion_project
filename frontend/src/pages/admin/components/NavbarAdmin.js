import React from "react";
import { useNavigate } from "react-router-dom";

//Style
import "../scss/adminNavbar.scss";

const NavbarAdmin = () => {
  const Navigate = useNavigate();

  return (
    <div className="navbarAdmin">
      <div className="Admin">
        <h1>ADMIN</h1>
      </div>
      <div className="wrapperLinks">
        <button onClick={() => Navigate("/addProduct/")} className="adminLink">
          Lägg till produkt
        </button>

        <button onClick={() => Navigate("/updateFront/")} className="adminLink">
          Uppdatera framsidans layout{" "}
        </button>

        <button onClick={() => Navigate("/emailAdmin/")} className="adminLink">
          Email
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
