import { createContext, useState} from "react";

export const GetUserContext = createContext();

const GetUserProvider = ({ children }) => {


    const [getUsers, setGetUsers] = useState({ });
  

  return (
    <>
      <GetUserContext.Provider
        value={{ getUsers, setGetUsers }}
      >
        {children}
      </GetUserContext.Provider>
    </>
  );
};
export default GetUserProvider;