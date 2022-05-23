import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, availableQty, minOrrderQty, perUnitPrice, description, img } = product;
    const navigate = useNavigate()
    const handleOrderProduct = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body ml-6 text-lg font-semibold ">
                    <h2 class="">Name: {name}</h2>
                    <p>AvailableQty: {availableQty}</p>
                    <p>Min-OrderQty: {minOrrderQty}</p>
                    <p>Per-UnitPrice:$ {perUnitPrice}</p>
                    <p>Description:{description}</p>
                    <div class="card-actions">
                        <button onClick={() => handleOrderProduct(_id)} class="btn btn-primary rounded-full mt-3 w-full">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;