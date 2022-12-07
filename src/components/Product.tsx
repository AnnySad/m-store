import React, {useState} from 'react';
import {IProduct} from "../modelsType";

interface ProductProps {
    product: IProduct
}

export const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-300' : 'bg-green-300'
    const btnClasses = ["py-2 px-4 border", btnBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            < p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button className= {btnClasses.join(' ')}
            onClick={()=> setDetails(prev => !prev)}>
                {details ? 'Hide Details' : "Show Details"}
            </button>
            { details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    );
};