import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/useAuth";


const Review = () => {
  const { reset } = useForm();
  const { register, handleSubmit } = useForm();

  const { users } = useAuth();

  const onSubmit = (data) => {
    fetch("https://desolate-plains-94007.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("review added successfully");
    reset();
    console.log(data);
  };

  return (
    <Container>
      <div className="text-center review-form">
        <h2 className="text-center mt-3">
          Got any <span className="text-success">Feedback</span> ... <br />{" "}
          Please, Let us know!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field my-3"
            name="email"
            value={users?.email}
            type="email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="input-field my-3"
            name="name"
            value={users?.displayName}
            type="name"
            {...register("name", { required: true })}
          />
          <br />
          <input
            className="input-field"
            name="comments"
            placeholder="Comments"
            {...register("comments", { required: true })}
          />
          <br />

          <input
            className="submit-btn btn btn-success my-3 "
            type="submit"
            value="Submit"
            style={{ width: "90px" }}
          />
        </form>
      </div>
    </Container>
  );
};

export default Review;