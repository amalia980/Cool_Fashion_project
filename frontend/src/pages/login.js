import LoginForm from "../components/LoginForm.js";
import RegisterForm from "../components/RegisterForm.js";

//style
import Background from "../assets/images/stor_bakgrundCollage/loggaIn_regSida.png"


const Login = () => {
    
    const wrapperLogin = {
        height:"100vh",
        backgroundImage:`url(${Background})`,
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
       }
   

    return(
        <div style={wrapperLogin}>
        <LoginForm></LoginForm>
        <RegisterForm></RegisterForm>
         </div>
    )
};

export default Login;


