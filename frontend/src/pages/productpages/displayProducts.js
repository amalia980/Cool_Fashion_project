import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Carousel } from 'react-bootstrap'
import ToastMessage from './ToastMessage'
import ProductsModal from './ProductsModal'
import Share from '../../components/Share'
import axios from 'axios'


//Styling
import { BsFillHeartFill } from 'react-icons/bs'
import './displayProducts.scss'
import OutOfStock from './outOfStock'

const DisplayProds = (props) => {
  const { product, image } = props;

  const [show, setShow] = React.useState(false)
  const [showToast, setShowToast] = React.useState(false)
  const [outOfStock, setOutOfStock] = React.useState(false)
  const [heartClicked, setHeartClicked] = useState()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  //check products that are no longer in stock
  const stock = product.quantity === 0

  //From Context
  const { cart, setCart } = useContext(CartContext)
  const { heartList, setHeartList } = useContext(CartContext)

  const handleShow = () => setShow(true)

  //to not dublicate item, but at the same time add item
  const addProducts = (product) => {
    const exist = cart.find((x) => x._id === product._id)

    if (exist) {
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...exist, quantity: exist.quantity + 1 } : x,
        ),
      )
    } else if (product.quantity === 0) {
      setOutOfStock(true)
    } else {
      setShowToast(true)
      setCart([...cart, { ...product, quantity: 1 }])
    }
    console.log(product)
  }

  const handlerHeartButton = () => {
    setHeartClicked(!heartClicked)
    const exist = heartList.find((x) => x.id === product.id)

    if (exist) {
      setHeartList(
        heartList.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x,
        ),
      )
    } else {
      setHeartList([...heartList, { ...product, quantity: 1 }])
    }

    alert('din produkt är tillagd i önskelistan')
  }

 useEffect(() => {
   fetch(product)
     .then((res) => res.json())
     .then((json) => {
       setData(json.products)
       console.log(json)
     })
   setLoading(true)
 }, [])
  
  // useEffect(() => {
  //     setData(product)
  // }, [])

  // const showProducts = async () => {
  //   const res = await fetch(product)
  //   const data = await res.json()
  //   setData(data.products)
  // }
  // <img src={i.img[0].img} alt={i.title} />
  return (
    <>
      {outOfStock && <OutOfStock setOutOfStock={setOutOfStock} />}
      {showToast && <ToastMessage setShowToast={setShowToast} />}

      {/* {loading && <h3>Loading...</h3>} */}

      {data.map((i) => {
        const base64string = btoa(
          String.fromCharCode(...new Uint8Array(i.image.data))
        )
        return (
          <div className='product-div' key={i._id}>
            <img src={`data:image/jpeg;base64,${base64string}`} alt={i.title} />      
            <b>{i.title}</b>
            <p>{i.price}</p>

            <button onClick={() => addProducts(i)}>BUY</button>
          </div>
        )
})} 
    

      {/* {show && (
        <ProductsModal
          product={product}
          setShow={setShow}
          setCart={setCart}
          cart={cart}
          setShowToast={setShowToast}
        />
      )}

        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >

        </div>

            <img
              className="d-block"
              src={product.img[0].img}
              alt={product.title}
            />

            <img
              className="d-block"
              src={product.img[1].img}
              alt={product.title}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={product.img[2].img}
              alt={product.title}
            />
          </Carousel.Item>
        </Carousel >
          
        <Card.Body>
          <div className="title-price-outOfStock-row">
            <div className="title-price-container">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}:-</Card.Text>
            </div>
            {stock && <p className="outOfStock-txt">OTILLGÄNGLIG</p>}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button className="buy-btn" onClick={() => addProducts(product)}>
              Köp
            </Button>
            <Button variant="outline-primary" onClick={handleShow}>
              Mer info
            </Button>
            <div>
              <button
                className={`heartButton ${
                  heartClicked ? 'heartButtonClick' : ''
                }`}
                onClick={handlerHeartButton}
              >
                {' '}
                <BsFillHeartFill />{' '}
              </button>
              <Share></Share>
            </div>
          </div>
        </Card.Body> */}
    </>
  )
}

export default DisplayProds
