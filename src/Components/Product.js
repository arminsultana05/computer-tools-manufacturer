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
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body ml-6 text-lg font-semibold ">
                    <h2 className="">Name: {name}</h2>
                    <p>AvailableQty: {availableQty}</p>
                    <p>Min-OrderQty: {minOrrderQty}</p>
                    <p>Per-UnitPrice:$ {perUnitPrice}</p>
                    <p>Description:{description}</p>
                    <div className="card-actions">
                        <button onClick={() => handleOrderProduct(_id)} className="btn btn-primary rounded-full mt-3 w-full">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;