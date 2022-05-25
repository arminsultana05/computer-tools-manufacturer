import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orderCollection/${id}`, {
            method: 'GET'

        })
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [])

    return (
        <div >
            <div class="card w-1/3 bg-base-200 shadow-xl mx-auto mt-16">
                <div class="card-body">
                    <h2 class="card-title text-2xl">Pay for {payment.product}</h2>
                    <p className='text-xl'>Your Address: {payment.address}</p>
                    <p className='text-lg' >product Price: $ 350</p>
                    
                </div>
            </div>
            <div class="card w-1/3 bg-base-200 shadow-xl mx-auto mt-16">
                <div class="card-body">
                    <h2 class="card-title">kmjkjg</h2>
                    <p>$ 350</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;