import { createContext, useState } from "react";

export const ImageContext = createContext();

export default function CartProvider({ children }) {

  // const [ images, setImages] = useState([]);

  const [ file, setFile] = useState({
     file1:"",
     file2:"",
     file3:"",
     file4:"",
     file5:"",
  });

  const [headline, setHeadline] = useState({
    headline1:"",
    headline2:"",
    headline3:"",
    headline4:"",
    headline5:"",
  });


  return (
    <>
      <ImageContext.Provider
        value={{ headline, setHeadline, file, setFile }}
      >
        {children}
      </ImageContext.Provider>
    </>
  );
}
