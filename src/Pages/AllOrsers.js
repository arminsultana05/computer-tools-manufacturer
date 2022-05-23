import React from 'react';

const AllOrsers = ({order,handleRemove}) => {
    console.log(order);
    return (
        <div className="">
            <div className="table_responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Addrees</th>
                                <th>Phone</th>
                              <th>Your Qty</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td>{order.product}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.photo}</td>
                                <td>{order.price}</td>

                                <td>
                                    <span class="action_btn">
                                        <button onClick={() => handleRemove(order._id)}   className="btn btn-primary ">DECREASE QUANTITY</button>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default AllOrsers;