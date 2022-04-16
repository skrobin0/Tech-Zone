
import { Button } from "react-bootstrap";

const ReviewContainer = (props) => {
  const { name, img, price, quantity, key } = props.product;
  const { handleProductRemove } = props;

  

  return (
    <div>
      <div className="product-con">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="ps-5 pt-2">
          <h5 className="product-name"> {name} </h5>
          <p>
            <strong>Quantity : {quantity}</strong>
          </p>
          <p className="product-price">price: {price}</p>

         

          <Button
            onClick={() => handleProductRemove(key)}
            variant="btn btn-outline-success"
          >
            <span>
              <i className="fa-solid fa-cart-minus"></i>
            </span>{" "}
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
