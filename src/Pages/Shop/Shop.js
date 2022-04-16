import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Button, Col, Container, Pagination, Row } from "react-bootstrap";
import ProductContainer from "./Product-Container/ProductContainer";
import CartContainer from "./Cart-Container/CartContainer";
import {
  addToLocalStorage,
  getStoredCart,
} from "../Local-Storage/LocalStorage";
import Header from "../Shared/Header/Header";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useCart();
  const [searchProduct, setSearchProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [pageNumberCount, setPageNumberCount] = useState(0);
  const size = 10;
  useEffect(() => {
    fetch(
      `https://desolate-plains-94007.herokuapp.com/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSearchProduct(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageNumberCount(pageNumber);
      });
  }, [page]);

  //cart function--- local storage
  // useEffect(() => {
  //   if (products.length) {
  //     const savedCart = getStoredCart();
  //     const storageCart = [];
  //     for (const key in savedCart) {
  //       console.log(key, savedCart[key]);
  //       const savedProduct = products.find((product) => product.key === key);

  //       // console.log(savedProduct);
  //       if (savedProduct) {
  //         const quantity = savedCart[key];
  //         savedProduct.quantity = quantity;
  //         storageCart.push(savedProduct);
  //       }
  //     }
  //     setShoppingCart(storageCart);
  //   }
  // }, [products]);

  const addToCard = (products) => {
    //  console.log(products);
    const existsProduct = shoppingCart.find((pd) => pd.key === products.key);
    let newShoppingCart = [];

    if (existsProduct) {
      const rest = shoppingCart.filter((pd) => pd.key !== products.key);
      existsProduct.quantity = existsProduct.quantity + 1;
      newShoppingCart = [...rest, products];
    } else {
      products.quantity = 1;
      newShoppingCart = [...shoppingCart, products];
    }

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
            {searchProduct.map((product) => (
              <ProductContainer
                key={product.key}
                product={product}
                addToCard={addToCard}
              ></ProductContainer>
            ))}

            {/* Pagination Setting */}

            <Pagination className="mt-3" style={{ justifyContent: "center" }}>
              <Pagination.First />
              <Pagination.Prev />
              {[...Array(pageNumberCount).keys()].map((number) => (
                <Button
                  className="mx-1 btn btn-success"
                  key={number}
                  onClick={() => setPage(number)}
                >
                  {number}
                </Button>
              ))}

              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
          <Col md={3} className="text-center">
            <div className="card shadow">
              <CartContainer shoppingCart={shoppingCart}></CartContainer>
              <Link to="/review-manage">
                <Button className="my-2" variant="btn btn-outline-success">
                  Review-Order
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
