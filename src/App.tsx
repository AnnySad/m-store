import React, {useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader";
import {ErrorMessage} from "./components/Error";
import Modal from "./components/Modal";
import CreatProductModal from "./components/CreatProductModal";
import {IProduct} from "./modelsType";


function App() {

    const {loading, error, products, addProduct} = useProducts()
    const [modal, setModal] = useState(false)

const createHandler = (product:IProduct) => {
  setModal(false)
    addProduct(product)
}

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(prod => <Product product={prod} key={prod.id}/>)}

            {modal && <Modal title="Creat new product" onClose={()=> setModal(false)}>
                <CreatProductModal onCreate={createHandler}/>
            </Modal>}

            <button className='fixed bottom-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
            onClick={() => setModal(true)}
            >+</button>
        </div>

    )
}

export default App;
