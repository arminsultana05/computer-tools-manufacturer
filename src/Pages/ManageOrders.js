import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
       fetch('http://localhost:5000/orderCollection')
       .then(res =>res.json())
       .then(data=> setOrder(data))
    }, [])

    return (
        <div>
           <div>
            <h1 className='text-3xl text-green-900 font-semibold'>Your Orders{order.length}</h1>
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
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.product}</td>
                                <td>{o.qty}</td>
                                <td>{o.email}</td>
                                <td>{o.address}</td>
                                <td>{o.phone}</td>

                                <td>

                                    <button  className="btn btn-primary ">PENDING ORDER</button>

                                </td>
                                <td>

                                    <button  className="btn btn-primary ">SHIPPED ORDER</button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
            
        </div>
    );
};

export default ManageOrders;