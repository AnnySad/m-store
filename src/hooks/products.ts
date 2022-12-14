//самопальный хук
import {useEffect, useState} from "react";
import {IProduct} from "../modelsType";
import axios, {AxiosError} from "axios";

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product:IProduct) {
        setProducts(prev => [product, ...prev])
    }

    async function fetchProducts() {

        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=8')
            setProducts(response.data)
            setLoading(false)
        } catch (e:unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }


    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, loading, error, addProduct}
}