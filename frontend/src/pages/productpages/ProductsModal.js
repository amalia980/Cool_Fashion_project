import React from "react";
import { Carousel } from "react-bootstrap";
import "./ProductsModal.scss";
import closeBtn from "../../assets/icons/close_black.png";
import { BsArrowClockwise } from "react-icons/bs";
import OutOfStock from "./outOfStock";

const ProductsModal = (props) => {
  const { setShow, product, setCart, cart, setShowToast } = props;

  const [outOfStock, setOutOfStock] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const rotateImage = {
    width: rotate ? "100%" : "50%",
    height: rotate ? "500px" : "500px",
    transition: "transform 150ms ease",
    objectFit: "fill",
  };

  const handleClose = () => {
    setShow(false);
  };

  //to not dublicate item, but at the same time add item
  const addProducts = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      )
    } else if (product.quantity === 0) { 
      setOutOfStock(true)
    } else {
      setShowToast(true)
      setCart([...cart, { ...product, quantity: 1 }])
    }
  };

  //check products that are no longer in stock
  const stock = product.quantity === 0;

  return (
  <>
    {outOfStock && <OutOfStock setOutOfStock={setOutOfStock} />}
    <div className="bg-underlay">
      <div className="modal-container">
        <div className="product-modal-left">
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width:"100%",
              maxHeight: "500px",
            }}
          >
            <BsArrowClockwise
              style={{
                position: "absolute",
                right: "40px",
                zIndex: "1000",
                backgroundColor: "#878484a1",
                color: "#FFF700",
                fontSize: "1.5rem",
                margin: "0.5rem",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => setRotate(!rotate)}
            />

            <Carousel
              interval={null}
              className="carousel-div"
              class="carousel carousel-dark slide"
            >
              <Carousel.Item className="modal-img-div">
                <img
                  src={product.img[0].img}
                  alt={product.title}
                  style={rotateImage}
                />
              </Carousel.Item>
              <Carousel.Item className="modal-img-div">
                <img
                  src={product.img[1].img}
                  alt={product.title}
                  style={rotateImage}
                />
              </Carousel.Item>
              <Carousel.Item className="modal-img-div">   
                <img
                  src={product.img[2].img}
                  alt={product.title}
                  style={rotateImage}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="product-modal-right">
          <div className="title-closeBtn-row">
            <h1>{product.title}</h1>{" "}
            <img
              onClick={() => handleClose()}
              src={closeBtn}
              alt="close button"
            />
          </div>
          <h3>{product.price}kr</h3>
          <p>{product.description}</p>

            <div className="product-modal-left-bottom-info">
          <div className="color-outOfStock-row">
              <p>Färg: {product.color}</p>
              {stock && (<p className="outOfStock-text">OTILLGÄNGLIG PRODUKT</p>)}
              </div>
            <select name="Välj storlek">
              <option value="">Välj storlek</option>
              <option value="3XS">3XS</option>
              <option value="2XS">2XS</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
            </select>
            <button onClick={() => addProducts(product)}>KÖP</button>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default ProductsModal;
