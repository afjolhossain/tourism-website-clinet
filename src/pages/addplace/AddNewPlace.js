import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddplaceNew.css';



const AddNewPlace = () => {
        const { register, handleSubmit,reset } = useForm();
        const onSubmit = data =>{
            console.log(data);
            axios.post('http://localhost:4000/places',data)
            .then(res=>{
                if(res.data.insertedId)
                {
                    alert('Added Place Successfully')
                      reset();
                };
            });
        };

    return (
<div id="AddPlace" className="add-plases">
            <h2>PLEASE ADD A PLACES</h2>
            <div className="Add-form">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Places")} placeholder="Name" />
      <textarea {...register("Description")} placeholder="Description" />
      <input type="number" {...register("Price")} placeholder="price" />
      <input {...register("url")} placeholder="image-url" />
      <input type="submit" />
    </form>
            </div>
    </div>
    );
};

export default AddNewPlace;