import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://shrouded-waters-34651.herokuapp.com/services", data, {
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
      <h2 className="mt-5 mb-3 text-primary fs-2">Add Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <input
          {...register("country", { required: true, maxLength: 20 })}
          placeholder="Country"
        />
        <input
          {...register("category", { required: true, maxLength: 20 })}
          placeholder="City"
        />
        <input
          {...register("installment", { required: true, maxLength: 20 })}
          placeholder="duration"
        />
        <input
            defaultValue="pending"
          {...register("status", { required: true, maxLength: 20 })}
          placeholder="status"
        />
        <input
          {...register("home_delivery", { required: true, maxLength: 20 })}
          placeholder="home_delivery"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input className="bg-primary text-white" type="submit" />
      </form>
      <ToastContainer autoClose={2000}/>
    </div>
  );
};

export default AddServices;
