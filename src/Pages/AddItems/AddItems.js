import React from "react";
import "./AddItems.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="add-items-form container">
      <h1>Please add a service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Supplier Name" {...register("name")} /> <br />
        <textarea placeholder="Description" {...register("description")} />
        <br />
        <input type="number" placeholder="Price" {...register("price")} />{" "}
        <br />
        <input type="text" placeholder="Photo-Url" {...register("img")} />{" "}
        <br />
        <input type="email" placeholder="Email" {...register("email")} /> <br />
        <input
          type="submit"
          value="Add this item"
          onClick={() => {
            navigate("/inventories");
          }}
        />
      </form>
    </div>
  );
};

export default AddItems;
