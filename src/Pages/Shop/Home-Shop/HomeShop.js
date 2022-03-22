import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import HomeShopDetail from './HomeShopDetail';

const HomeShop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
          )
            .then((res) => res.json())
            .then((data) => 
              setProducts(data));
    }, []);
    return (
        <Container>
             <Row>
          <Col>
            <h1 className="text-center text-info my-5">
              <i className="fab  text-info fa-phoenix-squadron"></i> What we are{" "}
              <span className="text-secondary">Offering this moment__</span>{" "}
            </h1>
          </Col>
        </Row>
        <Row>
          {products.slice(0,3).map((product) => (
            <Col className="g-4 mb-3" md={12}>
               <HomeShopDetail
              key={product.key}
              product={product}
              
            ></HomeShopDetail>
            </Col>
          ))}
        </Row>
        </Container>
    );
};

export default HomeShop;