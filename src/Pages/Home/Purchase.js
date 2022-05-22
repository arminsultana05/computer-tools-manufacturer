import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import useProductIdDetail from '../../CustomHooks/useProductId';
import auth from '../../firebase.init';
import axios from 'axios';
import './Purchase.css'

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { purchaseId } = useParams()
    const [products, setProducts] = useProductIdDetail(purchaseId)
    console.log(products);
    const handlePlaceOrder = event => {
        event.preventDefault()
        const orders = {
           
            product: products.name,
            email: user.email,
            price: products.price,
            inventory: purchaseId,
            photo: products.qty,
           
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/orderCollection', orders)
            .then(response => {
                console.log(response);
            })
    }
    return (
        <div className="">
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
                                        <button className="btn btn-primary ">DECREASE QUANTITY</button>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=" text-center  ">
                <h1 className='mt-5 ml-4 font-semibold'>RESTOCK THE ITEM</h1>
                <form  >
                    <input className='border border-green-600 w-full lg:w-3/5 mt-5 ' placeholder='Update 
                    Quantity' type="number" name="update" id="" />
                    <br />
                    <input className='btn btn-sm bg-green-900 w-full lg:w-3/5 p-1 mt-5' type="submit" value="INCREASE QUANTITY" />
                </form>
            </div>
            <div className="text-center mt-5">
                <h1 className='mb-2 text-2xl font-semibold'>Order Your Items</h1>
                <form onSubmit={handlePlaceOrder} >
                    <input className='w-full lg:w-3/5 border  border-green-900 mt-3 p-1' type="text" value={products?.name} name="name" placeholder='Product-Name' id="" readOnly />
                    <br />
                    <input className='w-full lg:w-3/5 border border-green-900 mt-3 p-1' type="number" value={products?.perUnitPrice} name="price" placeholder='Product-price' id="" readOnly />
                    <br />
                    <input className='w-full lg:w-3/5 border  border-green-900 mt-3 p-1' type="number" value={products?.qty} name="price" placeholder='Product-qty' id="" readOnly />
                    <br />
                    <input className='w-full lg:w-3/5 border border-green-900 p-1 mt-3' type="text" name="name" value={user?.displayName} placeholder='name' id="" readOnly />
                    <br />
                    <input className='w-full lg:w-3/5 border border-green-900 p-1 mt-3' type="email" name="email" value={user?.email} placeholder='email' id="" readOnly disabled />
                    <br />
                    <input className='w-full lg:w-3/5 border border-green-900 p-1 mt-3' type="text" name="address" placeholder='address' id="" required />
                    <br />
                    <input className='w-full lg:w-3/5 border border-green-900 p-1 mt-3' type="text" name="phone" placeholder='phone' id="" />
                    <br />
                    <input className='bg-green-600 w-full lg:w-3/5 mt-2 p-2' type="submit" value="Place Order Your Item page" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;
// onClick={() => handleDelivered(products._id)}