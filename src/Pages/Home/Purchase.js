import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import useProductIdDetail from '../../CustomHooks/useProductId';
import auth from '../../firebase.init';
import './Purchase.css'

const Purchase = () => {
    const [user]=useAuthState(auth)
    const {purchaseId} = useParams()
    const [products, setProducts] = useProductIdDetail(purchaseId)
    console.log(products);
    return (
        <div>
            <h1>product name:{products.name}</h1>
            <div className="table_responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>perUnitPrice</th>
                            <th>availableQty</th>
                            <th>minOrderQty</th>
                            <th>Your Qty</th>
                           
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td>{products.name}</td>
                            <td><img src={products.img} alt="" /></td>
                            <td>{products.perUnitPrice}</td>
                            <td>{products.availableQty}</td>
                            <td>{products.minOrrderQty}</td>
                            <td>{products.qty}</td>
                           
                            <td>
                                <span class="action_btn">
                                    <button  className="btn btn-primary ">Delivered</button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Purchase;
// onClick={() => handleDelivered(products._id)}