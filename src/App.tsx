import React from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader";
import {ErrorMessage} from "./components/Error";
import Modal from "./components/Modal";
import CreatProductModal from "./components/CreatProductModal";


function App() {

const {loading, error, products} = useProducts()
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error = {error}/>}
            {products.map(prod => <Product product={prod} key={prod.id}/>)}

            <Modal title="Creat new product">
                <CreatProductModal/>
                </Modal>
        </div>

    )
}

export default App;
