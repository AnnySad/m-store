import React, {useContext} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../components/context/ModalContext";
import {IProduct} from "../modelsType";
import Loader from "../components/Loader";
import {ErrorMessage} from "../components/Error";
import {Product} from "../components/Product";
import Modal from "../components/Modal";
import CreatProductModal from "../components/CreatProductModal";

const ProductPage = () => {
    const {loading, error, products, addProduct} = useProducts()
    //const [modal, setModal] = useState(false)
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product:IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(prod => <Product product={prod} key={prod.id}/>)}

            {modal && <Modal title="Creat new product" onClose={close}>
                <CreatProductModal onCreate={createHandler}/>
            </Modal>}

            <button className='fixed bottom-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
                    onClick={() => open}
            >+</button>
        </div>

    )
};

export default ProductPage;