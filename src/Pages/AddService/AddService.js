import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddUser.css'



const AddService = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{ 
        // console.log(data)
        // axios use kore data pathano /backend a giye fire asbe database thake
        axios.post('http://localhost:5000/services',data)
        .then(res=>{
            console.log(res)
            if(res.data.insertedId){
                alert('added  successfully')
                reset();
            }
        })
    };

    
    return (
        <div className='adduser'>
            <h3>Please add a service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}  placeholder="name"/>
      

      {/* refer to the type of error to display message accordingly */}
      <textarea {...register("description")} placeholder="description" />
    

      {/* register with validation */}
      <input type="number" {...register("price")}  placeholder="price"/>
      

      {/* register with validation and error message */}
      <input {...register("img")}  placeholder="image url"/>
      

      <input type="submit" />
    </form>
        </div>
    );
};


export default AddService;