import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import "./ProductContainer.css";

const ProductContainer = (props) => {
  const { name, img, price, stock, seller, star } = props.product;
  //   console.log(props);

  return (
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
        <Rating
          readonly
          className="pb-2"
          initialRating={star}
          emptySymbol="fa fa-star-o text-success"
          fullSymbol="fa fa-star text-success"
        ></Rating>
        <br />
        <Button
          onClick={() => props.addToCard(props.product)}
          variant="btn btn-outline-success"
        >
          <span>
            <i className="fa-solid fa-cart-plus"></i>
          </span>{" "}
          add to card
        </Button>
      </div>
    </div>
  );
};

export default ProductContainer;
