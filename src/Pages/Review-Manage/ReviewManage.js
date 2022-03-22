import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromLocalStorage } from "../Local-Storage/LocalStorage";
import Header from "../Shared/Header/Header";
import CartContainer from "../Shop/Cart-Container/CartContainer";
import ReviewContainer from "../Shop/Review-Container/ReviewContainer";

const ReviewManage = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleProductRemove = key => {
    //   console.log(key);
    const newCart = cart.filter(product => product.key !==key);
    setCart(newCart);
    removeFromLocalStorage(key);
  } 
  return (
      <div>
          <Header></Header>
    <Container fluid>
        
      <Row className="shop-container">
        <Col className="product-container">
          {cart.map((product) => (
            <ReviewContainer 
            key={product.key}
            handleProductRemove = {handleProductRemove}
            product={product}></ReviewContainer>
          ))}
        </Col>
        <Col md={4} className="cart-container">
          <CartContainer shoppingCart={cart}></CartContainer>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ReviewManage;
