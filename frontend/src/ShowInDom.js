import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuNavbar from './components/MenuNavbar'
import Footer from './components/Footer'


const showInDom = () => {
    
    return (
        <div>
         <MenuNavbar/>
         <Outlet />
         <Footer></Footer>
        </div>
    )
}

export default showInDom
