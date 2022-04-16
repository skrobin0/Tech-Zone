import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./HomeShopDetail.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomeShopDetail = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { name, img, price, stock, seller } = props.product;
  return (
    <div data-aos="flip-left" data-aos-delay="100">
      <div className="product-con">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="ps-5 pt-2">
          <h5 className="product-name"> {name} </h5>
          <p>
            <strong>by: {seller}</strong>
          </p>
          <p className="product-price">price: {price}</p>

          <p>
            <small>only {stock} left in stock - order soon</small>
          </p>

          <br />
          <Link to="/shop">
            <Button variant="btn btn-outline-success">
              <span>
                <i className="fa-solid fa-cart-plus"></i>
              </span>{" "}
              More Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeShopDetail;
