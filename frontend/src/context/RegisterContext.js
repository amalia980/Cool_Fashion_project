import { createContext, useState } from "react";

export const RegisterContext = createContext();

const RegUserProvider = ({ children }) => {

   
  const [regUser, setRegUser] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <RegisterContext.Provider value={{ regUser, setRegUser }}>
        {children}
      </RegisterContext.Provider>
    </>
  );
};
export default  RegUserProvider;