import React, { useContext } from 'react'

import { wistList } from '../context/AddWistlist';
import { toastMessageContext } from '../context/ToastMessage';

const AddWishlistBtn = (props) => {

    const { image, title, price, ProductId, availableForSale, variants, isActive } = props;

    let { handleAddWistlistProduct, handleDeleteWishlistItem } = useContext(wistList);
    let { handleToastMessage } = useContext(toastMessageContext);

    const handleAddBtn = async (ProductId, title, image, price, availableForSale, variants, isActive) => {
        if (isActive) {
            handleAddWistlistProduct(ProductId, title, image, price, availableForSale, variants, isActive);
            handleToastMessage("Product Added to Wishlist", "green");
        } else {
            handleDeleteWishlistItem(ProductId);
            handleToastMessage("Product Removed from Wishlist", "green");
        }
    }

    return (
        <>
            {/* <span> <i className="bi wistListProducts.map((item)=>{ item.ProductId === ProductId ? bi-heart-fill : bi-heart }) bi-heart-fill bi-heart1 font-14" onClick={() => handleAddWistlistProduct(ProductId, title, image, price, collectionName)}></i></span> */}
            <span>
                <i className={`bi bi-heart1 font-14 ${isActive ? "bi-heart-fill heartColor" : "bi-heart"} `} onClick={() => handleAddBtn(ProductId, title, image, price, availableForSale, variants, !isActive)}></i>
            </span>
            {/* <span> 
                <i className="bi bi-heart bi-heart1 font-14" onClick={() => handleAddBtn(ProductId, title, image, price, collectionName, availableForSale, variants, "Product Added to Wishlist")}></i>
            </span> */}
        </>
    )
}

export default AddWishlistBtn;