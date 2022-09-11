//react
import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

//Components
import Search from './Search'
import DropDownModal from '../modal/DropDownModal'
import ShoppingCart from './ShoppingCart'

//Bootstrap
// import {LinkContainer} from 'react-router-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'

//Styling
import './scss/MenuNavbar.scss'

//ICON
import { BsBag } from 'react-icons/bs'
import { MenuDown } from 'react-bootstrap-icons'
import { MenuUp } from 'react-bootstrap-icons'
import misfitIcon from '../assets/icons/misfits_icon.png'

const MenuNavbar = (props) => {
  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [shopIsOpen, shopSetIsOpen] = useState(false) //dropdown till shop
  const [yourAccountOpen, accountSetIsOpen] = useState(false) //dropdown "mitt konto"
  const [navbarOpen, setNavbarOpen] = useState(false) //hamburgermeny
  const { cart, cartVisible, setCartVisible } = useContext(CartContext) //basket state

  const handleLogOut = () => {

    try {
      fetch(`http://localhost:5000/api/user/logout`);
      console.log("success");
    } catch (error) {
      console.error("Error: ", error);
    }
    setLoggedIn(false)
    setUser({})
    navigate('/')
    alert("välkommen tillbaka!")
  }

  const openCart = () => {
    setCartVisible(true)
  }

  //Här är du inloggad
  const LoggedIn = () => {
    return (
      <>
        {cartVisible && <ShoppingCart />}
        <nav className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <div className={`innerNav ${navbarOpen ? 'showInner' : ''}`}>
            <button className="nav_button" onClick={() => navigate('/')}>
            <img src={misfitIcon} alt={misfitIcon} />
            </button>

            <div style={{ height: '1.5rem' }}>
              <button
                id="shop"
                className={`nav_button ${navbarOpen ? 'open_navButton' : ''}`}
                onClick={() => shopSetIsOpen(!shopIsOpen)}
              >
                SHOP
              </button>

              <DropDownModal className="dropDown" open={shopIsOpen}>
                <div className={`drop_shop ${navbarOpen ? 'showdrop' : ''}`}>
                  <Link to="/pants">Byxor</Link>
                  <Link to="/tops">Toppar</Link>
                  <Link to="/skirtsdresses">Klänningar & Kjolar</Link>
                  <Link to="/shirts">Skjortor</Link>
                  <Link to="/outerwear">Ytterkläder</Link>
                </div>
              </DropDownModal>
            </div>

            <div className={`closed_end${navbarOpen ? 'end_div' : ''}`}>
              <Search></Search>

              <button
                id="loggaIn"
                style={{ marginRight: '1rem' }}
                className={`nav_button ${navbarOpen ? 'open_navButton' : ''}`}
                onClick={() => accountSetIsOpen(!yourAccountOpen)}
              >
                MITT KONTO
              </button>
              <DropDownModal open={yourAccountOpen}>
                <div className="drop_Login">
                  <Link to="/myAccount">Mitt Konto</Link>
                  <Link to="/myAccount">Retunera</Link>
                  <button
                    style={{ marginBottom: '1rem' }}
                    className="nav_button"
                    onClick={handleLogOut}
                  >
                    Logga ut
                  </button>
                </div>
              </DropDownModal>
              {/* SHOPPING CART */}
              <button type="button" onClick={openCart} id="checkout" className="nav_button">
              <BsBag
                  style={{ width: '1.7rem', height: '1.7rem', marginBottom: "2px" }}
                >
                </BsBag>
              <p>{cart.length}</p>
              </button>

              <button
                id="hamburger"
                className={`nav_button ${navbarOpen ? 'open_navButton' : ''}`}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <MenuDown /> : <MenuUp />}
              </button>
            </div>
          </div>
        </nav>
      </>
    )
  }

  //här är du utloggad
  const LoggedOut = () => {
    return (
      <>
        {cartVisible && <ShoppingCart />}
        <nav className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          <div className={`innerNav ${navbarOpen ? 'showInner' : ''}`}>
            <button className="nav_button" onClick={() => navigate('/')}>
              <img src={misfitIcon} alt={misfitIcon} />
            </button>

            <div style={{ height: '1.5rem' }}>
              <button
                id="shop"
                className={`nav_button ${navbarOpen ? 'open_navButton' : ''}`}
                onClick={() => shopSetIsOpen(!shopIsOpen)}
              >
                SHOP
              </button>

              <DropDownModal className="dropDown" open={shopIsOpen}>
                <div className={`drop_shop ${navbarOpen ? 'showdrop' : ''}`}>
                  <Link to="/pants">Byxor</Link>
                  <Link to="/tops">Toppar</Link>
                  <Link to="/skirtsdresses">Klänningar & Kjolar</Link>
                  <Link to="/shirts">Skjortor</Link>
                  <Link to="/outerwear">Ytterkläder</Link>
                </div>
              </DropDownModal>
            </div>
            <div className={`closed_end${navbarOpen ? 'end_div' : ''}`}>
              <Search></Search>

              <button
                id="loggaUt"
                style={{ marginRight: '1rem' }}
                className="nav_button"
                onClick={() => navigate('login')}
              >
                LOGGA IN
              </button>

              {/* SHOPPING CART */}
              <button type="button" onClick={openCart} id="checkout" className="nav_button">
                <BsBag
                  style={{ width: '1.7rem', height: '1.7rem' }}
                >
                </BsBag>
                <p>{cart.length}</p>
              </button>

              <button
                id="hamburger"
                className={`nav_button ${navbarOpen ? 'open_navButton' : ''}`}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <MenuDown /> : <MenuUp />}
              </button>
            </div>
          </div>
        </nav>
      </>
    )
  }

  //kollar om du är in eller utloggad
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>
}

export default MenuNavbar
