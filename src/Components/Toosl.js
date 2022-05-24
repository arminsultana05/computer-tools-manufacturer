import React from 'react';
import useProducts from '../CustomHooks/useProducts';
import Product from './Product';
import './Tools.css'

const Toosl = () => {
    const [products, setProducts] = useProducts([])
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-5 text-orange-500 font-bold'>TOOLS ITEMS!!!</h1>
            <div className="product-container">
                {
                    products.map(product => <Product key={product._id}
                        product={product}>

                    </Product>)

                }
            </div>

        </div>
    );
};

export default Toosl;