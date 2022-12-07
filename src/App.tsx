import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import axios from "axios";
import {IProduct} from "./modelsType";



function App() {

    const [products, setProducts] = useState<IProduct[]>([])

    async function fetchProducts() {
       const response=await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=8')
        setProducts(response.data)
    }

    useEffect(()=>{
        fetchProducts()
    },[])
   return (
       <div className="container mx-auto max-w-2xl pt-5">
           {products.map(prod => <Product product={prod} key={prod.id}/>)}
       </div>

   )
}

export default App;
