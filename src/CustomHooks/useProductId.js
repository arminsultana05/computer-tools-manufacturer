import { useEffect, useState } from "react";


const useProductIdDetail = productId => {
    const [products, setProducts] = useState({});
   
    useEffect(() => {
        const url = `https://calm-refuge-43715.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
           
    }, [productId])
   
    return [products, setProducts]
}
export default useProductIdDetail;