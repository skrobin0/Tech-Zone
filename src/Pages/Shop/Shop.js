import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductContainer from "./Product-Container/ProductContainer";
import CartContainer from "./Cart-Container/CartContainer";
import {
  addToLocalStorage,
  getStoredCart,
} from "../Local-Storage/LocalStorage";
import Header from "../Shared/Header/Header";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchProduct(data);
      });
  }, []);

  //cart function--- local storage
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storageCart = [];
      for (const key in savedCart) {
        console.log(key, savedCart[key]);
        const savedProduct = products.find((product) => product.key === key);

        // console.log(savedProduct);
        if (savedProduct) {
          const quantity = savedCart[key];
          savedProduct.quantity = quantity;
          storageCart.push(savedProduct);
        }
      }
      setShoppingCart(storageCart);
    }
  }, [products]);

  const addToCard = (products) => {
    //  console.log(products);
    const newShoppingCart = [...shoppingCart, products];
    setShoppingCart(newShoppingCart);

    //save-local-storage........
    addToLocalStorage(products.key);
  };

  //Search--box--function

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProduct(matchProducts);
  };

  return (
    <div>
      <Header></Header>
      <Container fluid>
        <Row>
          <Col className="search-container">
            <input
              type="text"
              placeholder="search product"
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8} className="shop-container">
            <h4> Products : {products.length} </h4>
            {searchProduct.map((product) => (
              <ProductContainer
                key={product.key}
                product={product}
                addToCard={addToCard}
              ></ProductContainer>
            ))}
          </Col>
          <Col md={3}>
            {/* <h4> Order Summary </h4>
          <h5>Item order : {shoppingCart.length}</h5> */}
            <CartContainer shoppingCart={shoppingCart}></CartContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
