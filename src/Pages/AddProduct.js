import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='mt-16'>
        <form className='flex flex-col items-center  ' onSubmit={handleSubmit(onSubmit)}>
            <input className=' mt-5 border border-gray-600 w-2/5 p-3 ' placeholder='name' {...register("name")} />
           <input className=' mt-5 border border-gray-600 w-2/5  p-3' placeholder='Photo URL' type="text" {...register("img")} />
            <input className=' mt-5 border border-gray-600 w-2/5  p-3' placeholder='Available Quantity' type="number" {...register("availableQty")} />
            <input className=' mt-5 border border-gray-600 w-2/5  p-3' placeholder='Min Order Quantity' type="number" {...register("minOrrderQty")} />
            <input className=' mt-5 border border-gray-600 w-2/5  p-3' placeholder='Per Unit Price' type="number" {...register("perUnitPrice")} />
            <input className=' mt-5 border border-gray-600 w-2/5  p-3' placeholder='Quantity' type="number" {...register("qty")} />
           
            <textarea className=' mt-5 border border-gray-600 w-2/5  p-3' placeholder='description' {...register("description")} />
            <input className='py-2 mt-5 mb-5 border border-gray-300 bg-green-300 w-2/5  p-3' type="submit" value="Add Item" />
        </form>
    </div>
    );
};

export default AddProduct;