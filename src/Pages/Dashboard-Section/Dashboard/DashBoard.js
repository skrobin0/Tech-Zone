import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hook/useAuth";


const Dashboard = () => {
  
  const { users, logOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(
      `https://desolate-plains-94007.herokuapp.com/admins/${users?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [users?.email]);
  console.log(isAdmin);

  return (
    <div>
      <Row className="g-0">
        <Col md={12} className="bg-dark text-white text-center p-3">
          <h1>
             {users.displayName} 's{" "}
            <span className="text-white">Dashboard</span>
          </h1>
        </Col>
        <Col md={2} style={{ height: "150vh" }} className="p-4 bg-dark mt-2  ms-1 rounded">
          <Link to="/home">
            <Button className="fs-6 text-white mb-1 btn btn-success">
              <i className="fas fa-home"></i> Home
            </Button>
          </Link>

          {/* Admins Options */}
          {isAdmin ? (
            <>
              <Link to='makeadmin'>
                <Button className="fs-6  text-white my-1 btn btn-success">
                  <i className="fas fa-user-cog"></i> Make Admin
                </Button>
              </Link>
              <Link to='manageOrder'>
                <Button className="fs-6  text-white my-1 btn btn-success">
                  <i className="far fa-list-alt"></i> Manage Orders
                </Button>
              </Link>
              {/* <Link to='manageServices'>
                <Button className="fs-6  text-white my-1 ">
                  <i className="fas fa-list-ol"></i> Manage Products
                </Button>
              </Link> */}
              <Link to='addProducts'>
                <Button className="fs-6  text-white my-2 btn btn-success">
                  <i className="far fa-calendar-plus"></i> Add Product
                </Button>
              </Link>
            </>
          ) : (
            <>
            <br />
              {/* <Link to='pay'>
                <Button className="fs-6 none text-white my-1">
                  <i className="fas fa-shopping-cart"></i> Payment
                </Button>
              </Link> */}
              <Link to='user-order'>
                  
                <Button className="fs-6 none text-white my-1 btn btn-success">
                  <i className="fas fa-list-ol"></i> My Orders
                </Button>
              </Link>
              <br />
              <Link to='review'>
                <Button className="fs-6 none text-white my-1 me-1 btn btn-success">
                  <i className="far fa-comment-alt"></i> Review
                </Button>
              </Link>
            </>
          )}
          <br />
          <Button
            onClick={logOut}
            className="fs-6 none text-white mt-1 btn btn-success"
          >
            <i className="fas fa-sign-out-alt"></i> Log Out
          </Button>
        </Col>
        <Col md={9} className="container-fluid">
          
            
              <h2 className="mt-4 text-center">
                <i className="far fa-calendar-check"></i> Welcome to your{" "}
                <span className="text-success">Dashboard</span>
              </h2>
              <h5 className="pt-3 text-center">
                Here you will find all the activities of you in Tech Zone
                website. <br /> We certainly managed a detailed interface to
                maximize your comforts.
              </h5>
            
            
            
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;