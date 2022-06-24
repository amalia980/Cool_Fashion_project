//Style
import "./scss/adminNavbar.scss";
import NavbarAdmin from "./components/NavbarAdmin";

const Admin = () => {
  const basicStyle = {
    display: "flex",
    height: "100vh",
  };

  return (
    <div style={basicStyle}>
      <NavbarAdmin></NavbarAdmin>
    </div>
  );
};

export default Admin;
