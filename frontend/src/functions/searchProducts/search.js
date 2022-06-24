import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsArrowClockwise } from "react-icons/bs";
import "./search.scss";

const SearchProducts = (props) => {
  const { products } = props;
  const [showToast, setShowToast] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);

  const { cart, setCart } = useContext(CartContext);

  const addProducts = (product) => {
    const exist = cart.find((x) => x.id === product.id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setShowToast(true);
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const rotateImage = {
    width: rotate ? "350px" : "175px",
    height: rotate ? "300px" : "200px",
  };

  const filterProducts = products.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(props.input);
    }
  });

  return (
    <>        
    <div className="SearchContainer">
      {filterProducts.map((item) => (
        <Card key={item.id}>
          <BsArrowClockwise
          className="circleArrow"
            onClick={() => setRotate(!rotate)}
          />
          <Card.Img src={item.img[0].img} style={rotateImage} />
          <Card.Body>
            <Card.Title style={{ maxWidth: "100px" }}>{item.title}</Card.Title>
            <Card.Text>{item.price}:-</Card.Text>
          </Card.Body>
          <Button
            style={{ width: "75px", margin: "5px" }}
            className="buy-btn"
            onClick={() => addProducts(item)}
          >
            Köp
          </Button>
        </Card>
      ))}        
      </div>
    </>
  );
};

export default SearchProducts;
