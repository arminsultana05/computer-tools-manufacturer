import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Elements} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L3KRNGkvssYe2qazheRRFQZlaeQUKRlbVAfVUA70Ausqe14kpZlj9NvYtKNW1bqi3yYrTMF13dyBtA1fwC0pfRn004z7RQibv');

const Payment = () => {

    const { id } = useParams();
    const [payment, setPayment] = useState([])

    useEffect(() => {
        fetch(`https://calm-refuge-43715.herokuapp.com/orderCollection/${id}`, {
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
                    <p className='text-lg' >product Price: $ {payment.price}</p>

                </div>
            </div>
            <div class="card w-1/3 bg-base-200 shadow-xl mx-auto mt-16">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm 
                        payment={payment}/>
                    </Elements>
                  
                </div>
            </div>

        </div>
    );
};

export default Payment;