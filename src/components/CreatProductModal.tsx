import React, {useState} from 'react';
import {IProduct} from "../modelsType";
import axios from "axios";
import {ErrorMessage} from "./Error";


const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProProps {
    onCreate: (product:IProduct) => void
}

const CreatProductModal = ({onCreate}:CreateProProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='Enter product title...'
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMessage error={error}/>}
            <button type='submit' className='py-2 px-4 border bg-blue-500 hover:text-amber-100'>Create</button>
        </form>
    );
};

export default CreatProductModal;