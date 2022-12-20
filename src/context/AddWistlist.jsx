import { createContext, useEffect, useState } from "react";

const wistList = createContext();

const AddWistlist = (props) => {
    const [initialWishlistItems, setInitialWishlistItems] = useState(null);
    // const [initialHeartIcon, setInitialHeartIcon] = useState(null);

    let wistListProducts = initialWishlistItems === undefined || initialWishlistItems === null ? [] : initialWishlistItems;
    // let isActive = initialWishlistItems === undefined || initialWishlistItems === null ? [] : initialWishlistItems;

    const handleAddWistlistProduct = (ProductId, title, image, price, availableForSale, variants, isActive2) => {
        // isActive2 ? 
        wistListProducts = [...wistListProducts, {
            ProductId: ProductId,
            title: title,
            image: image,
            price: parseInt(price),
            // collectionName: collectionName,
            availableForSale: availableForSale,
            variants: variants,
            isActive : isActive2
        }] 
        // : ""
        localStorage.setItem('wistListProducts', JSON.stringify(wistListProducts));
    }

    const handleDeleteWishlistItem = (ProductId) => {
        let localWishlist = JSON.parse(localStorage.getItem("wistListProducts"));
        for (var i = 0; i < localWishlist.length; i++) {
            if (localWishlist[i].ProductId === ProductId) {
                localWishlist.splice(i, 1);
            }
        }
        // localWishlist = JSON.stringify(localWishlist);
        localStorage.setItem("wistListProducts", JSON.stringify(localWishlist));
    }

    useEffect(()=>{
        setInterval(()=>{
            setInitialWishlistItems(JSON.parse(localStorage.getItem("wistListProducts")));
        },150)
        // console.log(initialWishlistItems)
        return () => setInitialWishlistItems();
    },[])
    
    return (
        <>
            <wistList.Provider value={{ wistListProducts, handleAddWistlistProduct, handleDeleteWishlistItem }}>
                {props.children}
            </wistList.Provider>
        </>
    )
}

export default AddWistlist;
export { wistList };