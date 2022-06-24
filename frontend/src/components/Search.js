import React from 'react'
import { useState } from 'react';

import { BsSearch } from "react-icons/bs";
import './scss/Search.scss';


const Search = () => {

    
    const [searchTerm, setSearchTerm] = useState("");
  
  
    const searchField = (event) =>{
        var lowerCase = event.target.value.toLowerCase();
        setSearchTerm(lowerCase);
        console.log(lowerCase)
   }


  return (
    <div>
     <form className='form-wrapper'> 
        <i className='search-icon'><BsSearch></BsSearch></i>
        <input 
        className='search-input'
        type="text"
        placeholder="Sök..."
        value={searchTerm}
        onChange={searchField}
        ></input>
        </form>
    </div>
  )
}

export default Search