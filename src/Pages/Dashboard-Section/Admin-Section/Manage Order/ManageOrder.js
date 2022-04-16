import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const ManageOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);

  useEffect(() => {
    fetch("https://desolate-plains-94007.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, []);

  const deleteOrder = (id) => {
    fetch(`https://desolate-plains-94007.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Delete Done");
          const total = manageOrder.filter((data) => data._id !== id);
          setManageOrder(total);
        }
      });
  };

  return (
    <Container className="p-3">
      <h2 className="text-center my-4">
        Booked ordered By <span className="text-success">Our Clients</span>_
      </h2>
      {manageOrder.map((data) => (
        <div key={data._id} className="bg-success my-3 rounded">
          <div className="py-3 px-5 text-light">
            <h5>{data.Uname}</h5>
            <h5>Trip: {data.PlaceName}</h5>
            <p>
              Email: {data.email}
              <br />
              Address: {data.location}
              <br />
              Package Cost: {data.price}
            </p>
            <Button
              onClick={() => deleteOrder(data._id)}
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

export default ManageOrder;