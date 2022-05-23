import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import AllOrsers from './AllOrsers';

const MyOrders = () => {
  
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    console.log(orders);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orderCollection?email=${user.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res =>{ 
                    console.log('res',res);
                    if(res.status ===403 || res.status ===403){
                        navigate('/')

                    }
                   return res.json()})
                .then(data => {setOrders(data)})

        }
    }, [user])

    if (!user) {
        navigate('/')
    }
    const handleRemove = id => {
        const procce = window.confirm("Are You Sure?");
        if (procce) {
            const url = `http://localhost:5000/orderCollection/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                })
        }
    }
    return (
        <div>
            <h1 className='text-3xl text-green-900 font-semibold'>Your Orders{orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full  text-green-900">
                    {/* <!-- head --> */}
                    <thead>
                        <tr >
                            <th ></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index)=><tr>
                                <th>{index + 1}</th>
                                <td>{o.product}</td>
                                <td>{o.qty}</td>
                                <td>{o.email}</td>
                                <td>{o.address}</td>
                                <td>{o.phone}</td>
                               
                                <td>
                                   
                                        <button onClick={() => handleRemove(o._id)}   className="btn btn-primary ">CANCEL YOUR ORDER</button>
                                 
                                </td>
                            </tr>)
                        }
                        
                        {/* <!-- row 2 --> */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;