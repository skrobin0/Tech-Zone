import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate} from "react-router";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children}) => {
  const { users, isLoad } = useAuth();

  if (isLoad) {
    return (
      <div class="text-center pt-2">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
   
        users.displayName ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              
            }}
          ></Navigate>
        )
    
  );
};

export default PrivateRoute;