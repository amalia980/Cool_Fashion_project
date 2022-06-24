import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    telephone: "",
    adress: "",
    city: "",
    zipCode: "",
    username: "",
    password: "",
    textarea: "",
    file: "",
  });

  return (
    <>
      <UserContext.Provider
        value={{ loggedIn, setLoggedIn, user, setUser, isOpen, setIsOpen }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;

//Kopierade över UserContexten från förra projektet då den är rätt lik det vi vill komma
//i fund med här :)
