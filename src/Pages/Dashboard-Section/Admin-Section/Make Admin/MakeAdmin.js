import React from 'react';
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const MakeAdmin = () => {

  const { register, handleSubmit, reset } = useForm();


  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://desolate-plains-94007.herokuapp.com/admins", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Product added successfully");
          reset();
        }
      });
  };

  // const onSubmit = (data) => {
  //   fetch("https://desolate-plains-94007.herokuapp.com/admins", {
  //     method: "PUT",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  //   alert("admin added successfully");
  //   console.log(data);
  // };

  return (
    <Container>
      <div className="text-center mt-5">
        <h1 className="mb-3">Make a Admin</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
            style={{ width: "340px" }}
          />
          <br />

          <input
            className="submit-btn btn btn-success my-3"
            type="submit"
            value="Done"
          />
        </form>
      </div>
    </Container>
  );
};

export default MakeAdmin;