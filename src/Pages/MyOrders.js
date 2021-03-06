
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import swal from 'sweetalert';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    console.log(orders);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://calm-refuge-43715.herokuapp.com/orderCollection?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 403 || res.status === 403) {
                        navigate('/')

                    }
                    return res.json()
                })
                .then(data => { setOrders(data) })

        }
    }, [user])

    if (!user) {
        navigate('/')
    }
    const handleRemove = id => {
        // window.confirm("Are You Sure Delete Item?");
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = `https://calm-refuge-43715.herokuapp.com/orderCollection/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    })
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
         

        // if (procce) {
           
        // }
    }
    return (
        <div>
            <h1 className='text-3xl text-green-900 font-semibold text-center mt-6 mb-6'>Your Total Order :{orders.length}</h1>
            <div className="overflow-x-auto w-4/5 mx-auto">
                <table className="table table-zebra w-full text-center">
                    {/* <!-- head --> */}
                    <thead className='text-primary'>
                        <tr >
                            <th ></th>
                            <th>Name</th>
                            <th>Quantity</th>
                        
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.product}</td>
                                <td>{o.qty}</td>
                                <td>{o.email}</td>
                                <td>{o.address}</td>
                                <td>{o.phone}</td>
                                <td>{(o.price && !o.paid )&& <Link to={`/dashbord/payment/${o._id}`}><button className="btn btn-primary " >PAYMENT YOUR ORDER</button></Link>}
                                {(o. price&& o.paid )&& <button className="btn btn-success " >PAYMENT YOUR ORDER</button> }
                                </td>

                                <td>

                                    <button onClick={() => handleRemove(o._id)} className="btn btn-primary ">CANCEL YOUR ORDER</button>

                                </td>
                                {/* <td>

                                    <button  className="btn btn-primary ">PAYMENT YOUR ORDER</button>

                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;