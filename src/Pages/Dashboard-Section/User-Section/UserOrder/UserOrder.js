import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../../Hook/useAuth";

const UserOrder = () => {

    const [myOrder, setMyOrder] = useState([]);
    const { users } = useAuth();
  
    useEffect(() => {
      fetch(
        `https://desolate-plains-94007.herokuapp.com/orders/${users?.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyOrder(data));
    }, [users.email]);
    console.log(myOrder);
  
    const deleteMyOrder = (id) => {
      fetch(`https://desolate-plains-94007.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Are you sure to cancel it?");
            const total = myOrder.filter((data) => data._id !== id);
            setMyOrder(total);
          }
        });
    };
  

    return (
        <Container className="p-2">
      <h2 className="text-center my-4">
        All Your <span className="text-success">Order </span>here_
      </h2>
      {myOrder.map((data) => (
        <div key={data._id} className="bg-dark my-3 rounded">
          <div className="py-3 px-5 text-light">
            <h5>{users.displayName}</h5>
            <h5>Trip: {data.name}</h5>
            <p>
              Email: {data.email}
              <br />
              Address: {data.city}
              <br />
              Package Cost: {data.address}
            </p>
            <Button
              onClick={() => deleteMyOrder(data._id)}
              className="btn btn-danger px-5"
            >
              Cancel
            </Button>
          </div>
        </div>
      ))}
    </Container>
    );
};

export default UserOrder;