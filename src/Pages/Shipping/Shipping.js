import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";
import { clearFromTheCart, getStoredCart } from "../Local-Storage/LocalStorage";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Shipping = () => {
  
  const { users } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;

    fetch('https://desolate-plains-94007.herokuapp.com/orders', {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        alert('Order processed successfully')
        clearFromTheCart();
        reset();
      }
    })
   

    reset();
  };
  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <Header></Header>
      <div>
        <h1 className="mt-5 text-center text-success">Please Add Foods</h1>

        <div className="login-form d-flex justify-content-center align-items-center text-center my-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {users.displayName && (
              <input
                defaultValue={users?.displayName}
                {...register("Client-name")}
                required='true'
                placeholder="Name"
                className="p-2 m-2"
                style={{ width: "400px" }}
              />
            )}
            <br />

            <input
              value={users.email}
              {...register("email", { required: true })}
              required='true'
              placeholder="Email"
              className="p-2 m-2"
              style={{ width: "400px" }}
            />
            <br />
            <input
              {...register("address")}
              required='true'
              placeholder="Address"
              className="p-2 m-2"
              style={{ width: "400px" }}
            />
            <br />
            <input
              {...register("date")}
              required='true'
              placeholder="Date"
              defaultValue={new Date()}
              className="p-2 m-2"
              style={{ width: "400px" }}
            />
            <br />

            <input
              {...register("city")}
              required='true'
              placeholder="City"
              className="p-2 m-2"
              style={{ width: "400px" }}
            />
            <br />
            <input
              {...register("phone-number")}
              required='true'
              placeholder="Phone-Number"
              className="p-2 m-2"
              style={{ width: "400px" }}
            />
            <br />

            <input
              type="submit"
              value="Confirm"
              className="w-50 mt-2 btn btn-outline-success"
            />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shipping;
