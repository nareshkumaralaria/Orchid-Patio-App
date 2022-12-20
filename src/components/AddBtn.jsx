import React, { useContext } from 'react'
import { productList } from '../context/AddProduct';
import { toastMessageContext } from '../context/ToastMessage';

const AddBtn = (props) => {

    const { availableForSale, variants } = props;

    let { handleAddProduct } = useContext(productList);
    let { handleToastMessage } = useContext(toastMessageContext);

    const handleAddBtn = async (variants) => {
        handleAddProduct(variants);
        handleToastMessage("Product added to cart", "green");
    }
    // const handleAddBtn = async (ProductId, title, image, price, variants, message) => {
    //     handleAddProduct(ProductId, title, image, price, variants);
    //     handleToastMessage(message);
    // }

    return (
        <>
            <button disabled={!availableForSale} className="btn btn-success btn-cart1" style={{ marginRight: "0", borderRadius: "0" }} onClick={() => { handleAddBtn(variants) }}>+ ADD</button>
            {/* <button disabled={!availableForSale} className="btn btn-success btn-cart1" onClick={() => { handleAddBtn(ProductId, title, image, price, variants, "Product added to cart" )}}>+ ADD</button> */}
            {/* <button className="btn btn-success btn-cart1" onClick={() => handleAddBtn(ProductId, title, image, price, collectionName, variants)}>+ ADD</button> */}
        </>
    )
}

export default AddBtn;
