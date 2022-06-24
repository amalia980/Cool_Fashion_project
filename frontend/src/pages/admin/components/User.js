import React, {useEffect, useState } from 'react'
import Modal from '../../../modal/Modal'


//style
import "../scss/user.scss"

//Funkade inte att skicka props från en annan komponent? så fick göra ovanför
const User = () => {
  
  const [getUsers, setGetUsers] = useState()
 
  useEffect(() => {
    async function fetchBlogs() {
      let response = await fetch("http://localhost:5000/api/user/getUsers");
      let data = await response.json();
      console.log(data);
      setGetUsers(data.user);
    }
    fetchBlogs();
  }, []);
  
  const deleteUser = (_id) => {
    try {
      fetch(`http://localhost:5000/api/user/deleteUser/${_id}`, {
        method: "DELETE",
      });
      console.log("success");
    } catch (error) {
      console.error("Error: ", error);
    }

    const newUser = getUsers.filter((user) => user._id !== _id);
    setGetUsers(newUser);
  };


  
  return (
    <div className="App">
      {getUsers &&
      getUsers.map((user) => (

        <RenderUser key={user._id} user={user} deleteUser={deleteUser}/>
      ))}
    </div>
  );
}

/////////TOP FETCH, DOWN RENDERING /////////////////////

const RenderUser = (props) => {
  console.log(props);



  const [isOpen, setIsOpen] = useState(false)
  const [changedUser, setChangeUser] = useState()

  
  const changeUser = (_id) =>{

    try {
      fetch(`http://localhost:5000/api/user/updateUser/${_id}`, {
        method: "PUT",
        body: JSON.stringify(changedUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("success");
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  const handleInput = (e) => {
    setChangeUser({...changedUser, [e.target.name]: e.target.value})
    console.log(changeUser)
  };


  return (
    <>
    <div className="userCard">
        <div className='wrapper'> <p><b>Användarnamn</b></p><p>: {props.user.username}</p></div>
        <div className='wrapper'> <p><b>Id-nummer</b></p><p>: {props.user._id}</p></div>
        <div className='wrapper'> <p><b>Roll</b></p><p>: {props.user.role}</p></div>
  
      <button  onClick={() => props.deleteUser(props.user._id)} >Radera användare</button>


          <button onClick={() => setIsOpen(!isOpen)}>Ändra uppgifter</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>

          <form  onSubmit={changeUser(props.user._id)}>
          <label>Användrnamn</label>
            <input 
            placeholder="Användarnamn"
            name="username"
            onChange={handleInput}/>

            <label>Lösenord</label>
            <input 
             placeholder="Lösenord"
             name="password"
             type="password"
             onChange={handleInput}/>

             <label>Roll</label>
            <label>Användare</label>
            <input 
             type="checkbox"
             name="role"
             value="user"
             onChange={handleInput}/>

             <label>Admin</label>
             <input 
             type="checkbox"
             name="role"
             value="admin"
             onChange={handleInput}/>
    
             <button type='submit'>Gör ändringar</button>
             </form>
          </Modal>
    </div>
    </>
  );
};

export default User