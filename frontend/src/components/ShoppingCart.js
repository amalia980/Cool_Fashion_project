// import { useContext } from "react";
import './scss/ShoppingCart.scss'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
//import closeIcon from '../assets/icons/close_white.png';
import closeIcon from '../assets/icons/close_white.png'

const ShoppingCart = () => {

  const { cart, setCart } = useContext(CartContext);

  //calculate the price of all items
  const itemsPrice = cart.reduce((a, b) => a + parseInt(b.price) * parseInt(b.quantity), 0);

//remove each item with 1
const removeProduct = (product) => {
  const exist = cart.find((x) => x._id === product._id);
  if (exist.quantity === 1) {
      setCart(cart.filter((x) => x._id !== product._id));
  } else {
      setCart(cart.map((x => x._id === product._id ? {...exist, 
          quantity: exist.quantity - 1} 
          : x)))
  }
}

  const navigate = useNavigate()
  const { setCartVisible } = useContext(CartContext) //basket state

  const handleNavigate = () => {
    if(cart.length > 0) {
    setCartVisible(false)
      navigate('/checkout')
    }
  }

  const handleClose = () => {
    setCartVisible(false)
  }

  return (
    <>
      <div onClick={handleClose} className="underlay"></div>
      <div className="shopping-container">
        <div className="shopping-cart-header">
          <h4>VARUKORG</h4>
          <img onClick={handleClose} src={closeIcon} alt="close icon" />
        </div>
        <div className="all-products-container">
        <div className='cart-is-empty'>{cart.length === 0 && <p>Varukorgen är tom...</p>}</div>
          {cart.map((item => (
            <div key={item._id} className="products-wrapper">
              {/* mappning för produkter */}
              {/* <img className="img-productera" src={item.img[0].img} alt={item.title} /> */}
              <div className="procuct-right-info">
                <div className="title-n-price">
                  <p>{item.title}</p>
                  <p className="price-txt">{item.price}kr</p>
                </div>

                <div className="qty-size-remove-div">
                  <div className="size-n-qty">
                    <p className="size-txt">Storlek: {item.size}</p>
                    <p className="qty-txt">Antal: {item.quantity}</p>
                  </div>

                  <p onClick={() => removeProduct(item)} className="remove-product">Ta bort</p>
                </div>
              </div>
            </div>
          )))}
        </div>

        <div className="totalPrice-toCheckout-div">
          <div className="total-price-div">
            <h4>Totalt pris:</h4>
            <h4>{parseInt(itemsPrice)}kr</h4>
          </div>
          <button onClick={handleNavigate}>TILL KASSAN</button>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
