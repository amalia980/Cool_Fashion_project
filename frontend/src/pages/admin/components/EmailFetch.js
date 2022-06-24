import React, {useState, useEffect} from 'react'
import { BsPersonCircle } from "react-icons/bs";
import Modal from '../../../modal/Modal';



import "../scss/emailadmin.scss";


const EmailFetch = () => {
  
  const [getEmails, setGetEmails] = useState()

 
  useEffect(() => {
    async function fetchEmails() {
      let response = await fetch("http://localhost:5000/api/getEmails");
      let data = await response.json();
      console.log(data);
      setGetEmails(data.email);
    }
    fetchEmails();
  }, []);

  const deleteEmail = (_id) => {
    try {
      fetch(`http://localhost:5000/api/deleteEmail/${_id}`, {
        method: "DELETE",
      });
      console.log("success");
    } catch (error) {
      console.error("Error: ", error);
    }

    const newUser = getEmails.filter((email) => email._id !== _id);
    setGetEmails(newUser);
  };

  

  
  return (
    <div className="App">
      {getEmails &&
      getEmails.map((email) => (
        <RenderEmail key={email._id} email={email} deleteEmail={deleteEmail}/>
      ))}
    </div>
  );
}

/////////TOP FETCH, DOWN RENDERING /////////////////////

const RenderEmail = (props) => {
  console.log(props);

  const [isOpen, setIsOpen] = useState(false)


  const showEmail = () => {
    setIsOpen(!isOpen)
  }

  const answerMail = (e) =>{
    e.preventDefault()
    alert("Ditt mail är skickat till motagaren")
    document.getElementById("textfield").value = "";
    document.getElementById("textfield2").value = "";
  }

  return (
    <>

        <div className="left">
      <div className="emailInformation" onClick={showEmail}>
      <div className="logo">
        <BsPersonCircle></BsPersonCircle>
      </div>
      <div className="userinformation">
        <p style={{ fontSize: "16px" }}>
          {props.email.name}
        </p>
        <p style={{ fontSize: "14px" }}>{props.email.text}...</p>
      </div>
      <button className='deleteEmail' onClick={() => props.deleteEmail(props.email._id)}>Radera mail</button>
      </div>
      </div>

        <div className='right'>
        <Modal  open={isOpen} onClose={() => setIsOpen(false)}>         
          <div className="emailName">
            <p style={{ fontSize: "24px" }}>
              {props.email.name}
            </p>
            <i style={{ fontSize: "20px", marginTop: "30px" }}>{props.email.email}</i>
          </div>
          <div className="emailBody">
            <p style={{ fontSize: "18px" }}>{props.email.text}</p>
          </div>
        <div className="answerWrapper">
        <form onSubmit={() => alert("Ditt svar är skickat")}>
          <input 
          placeholder="svars rubrik" 
          id="textfield2"/>
          <textarea id="textfield"></textarea>
          <button type="submit" onClick={answerMail}>Skicka svar</button>
        </form>
        </div> 
       </Modal> 
        </div>


    </>

  );
};

export default EmailFetch