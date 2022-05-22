import React from 'react';

const Product = ({product}) => {
    const {id,name,availableQty,minOrrderQty,perUnitPrice,description,img}= product
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
                    <div class="card-actions">
                        <button class="btn btn-primary rounded-full mt-3">Order Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;