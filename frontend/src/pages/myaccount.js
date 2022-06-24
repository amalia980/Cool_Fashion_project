import HeartButton from "../components/HeartButton";

//style
import Background from "../assets/images/stor_bakgrundCollage/loggaIn_regSida.png"
import "../components/scss/myAccount.scss";



const MyAccount = () => {



    const wrapperMyAccount = {
        backgroundImage:`url(${Background})`,
       }
    
    return(
        <div className="wrapperMyAccount" style={wrapperMyAccount}>

          
               <h1>Mitt konto</h1>
               <HeartButton></HeartButton>

        </div>
    )
};

export default MyAccount;




