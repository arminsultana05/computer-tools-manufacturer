import React from 'react';
import useProducts from '../CustomHooks/useProducts';
import './ManageProducts.css'
import swal from 'sweetalert';

const ManageProducts = () => {
    const [products, setProducts] = useProducts()
    const handleProdutc = id => {
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
                const url = `https://calm-refuge-43715.herokuapp.com/products/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
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
           <div className=''>
               <h1 className='text-center text-2xl font-bold text-orange-500 mb-8 mt-8'>MANAGE YOUR PRODUCTS</h1>
            <div className="table_responsive">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p,index)=> <tr>
                            <td>{p._id}</td>
                            <td><img src={p.img} alt="" /></td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.qty}</td>
                            <td>
                                <span className="action_btn">
                                    <button onClick={() =>handleProdutc(p._id)} className="btn btn-primary   ">Remove</button>

                                </span>
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

export default ManageProducts;