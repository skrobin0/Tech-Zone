import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";


const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://desolate-plains-94007.herokuapp.com/products", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Product added successfully");
          reset();
        }
      });
  };

  

  return (
    <div>
      <h1 className="mt-5 text-center text-success">Please Add Products</h1>

      <div className="login-form d-flex justify-content-center align-items-center text-center mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Name"
            className="p-2 m-2"
            style={{ width: "400px" }}
          />
          <br />
          <input
            {...register("price")}
            placeholder="Price"
            type="number"
            className="p-2 m-2 "
            style={{ width: "400px" }}
          />
          <br />
          <input
            {...register("stock")}
            placeholder="Stock"
            className="p-2 m-2"
            style={{ width: "400px" }}
          />
          <br />
          <input
            {...register("seller")}
            placeholder="Seller"
            className="p-2 m-2"
            style={{ width: "400px" }}
          />
          <br />
          <input
            {...register("star")}
            placeholder="Star"
            className="p-2 m-2"
            style={{ width: "400px" }}
          />
          <br />

          <input
            {...register("img", { required: true })}
            placeholder="Image url"
            className="p-2 m-2"
            style={{ width: "400px" }}
          />
          <br />

          <input
            type="submit"
            value="Confirm"
            className="btn btn-success w-50 mb-2"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;