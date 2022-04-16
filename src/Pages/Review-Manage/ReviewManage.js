import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import {
  clearFromTheCart,
  removeFromLocalStorage,
} from "../Local-Storage/LocalStorage";
import Header from "../Shared/Header/Header";
import CartContainer from "../Shop/Cart-Container/CartContainer";
import ReviewContainer from "../Shop/Review-Container/ReviewContainer";

const ReviewManage = () => {
  // const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  const handleProductRemove = (key) => {
    //   console.log(key);
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromLocalStorage(key);
  };

  const placeOrder = () => {
    navigate(`/place-order`);
    // setCart([]);
    // clearFromTheCart();
  };

  return (
    <div>
      <Header></Header>
      <Container fluid>
        <Row>
          <Col className="shop-container mt-2">
            {cart.map((product) => (
              <ReviewContainer
                key={product.key}
                handleProductRemove={handleProductRemove}
                product={product}
              ></ReviewContainer>
            ))}
          </Col>
          <Col md={4} className="cart-container text-center">
            
            <div className="card shadow">
              <CartContainer shoppingCart={cart}></CartContainer>
            </div>
            <Button
              onClick={placeOrder}
              className="my-2"
              variant="btn btn-outline-success"
            >
              Place-Order
            </Button>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewManage;
