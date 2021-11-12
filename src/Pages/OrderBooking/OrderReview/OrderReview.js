import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "../../Dashboard/AddServices/Form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../../hooks/useAuth";

const OrderReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth()

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://shrouded-waters-34651.herokuapp.com/reviews", data, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Honey added Successfully")
          reset();
        }
      });
  };
  return (
    <div className="container add-service text-center">
      <h2 className="mt-5 mb-3 text-primary fs-2">Add a review Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register(`name`, { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        
        <textarea {...register("text")} placeholder="Description" />

        <input type="number" {...register("ratings")} placeholder="1-5" />
        
        <input className="bg-primary text-white" type="submit" />
      </form>
      <ToastContainer autoClose={2000}/>
    </div>
  );
};

export default OrderReview;
