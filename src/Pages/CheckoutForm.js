import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({payment}) => {
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements()
    const[clientSecret, setClientSecret] =useState('')
    const {price} =payment;
    useEffect(()=>{
        fetch('https://calm-refuge-43715.herokuapp.com/create-payment-intent',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify({price})
        })
        .then(res=> res.json())
        .then(data =>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }

        });

    },[price])
    const handleSubmit= async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
           return

        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return

        }
        const {error, paymentMethod} =await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        
            setError(error?.message || '')

       
    }
    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success mt-5 px-9' type="submit" disabled={!stripe }>
          Pay
        </button>
      </form>
      {
          error && <p className='text-red-500 text-xl'>{error}</p>
      }
      </>
    );
};

export default CheckoutForm;