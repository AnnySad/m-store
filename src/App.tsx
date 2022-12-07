import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import axios from "axios";
import {IProduct} from "./modelsType";



function App() {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)

    async function fetchProducts() {
        setLoading(true)
       const response=await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=8')
        setProducts(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchProducts()
    },[])
   return (
       <div className="container mx-auto max-w-2xl pt-5">
           {loading && <p className='text-center'>Loading...</p>}
           {products.map(prod => <Product product={prod} key={prod.id}/>)}
       </div>

   )
}

export default App;
