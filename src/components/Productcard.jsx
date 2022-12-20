import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AddBtn, AddWishlistBtn } from '.';
// import { headerContext } from '../context/HeaderUtilities';
// import { footerContext } from '../context/FooterUtilities';

const Productcard = (props) => {

    const { collection, isActive, id } = props;
    // const { image, title, price, ProductId, availableForSale, variants, isActive } = props;

    // let { changeHeader } = useContext(headerContext);
    // let { changeFooter } = useContext(footerContext);

    const [wishlistData, setWishlistData] = useState(JSON.parse(localStorage.getItem("wistListProducts")));

    const navigate = useNavigate();

    const handleProductRoute = (id) => {
        // changeHeader("Product");
        // changeFooter("");
        navigate(`/Product/${id}`)
    }

    useEffect(() => {
        setInterval(() => {
            setWishlistData(JSON.parse(localStorage.getItem("wistListProducts")));
        }, 150)
        return () => setWishlistData();
    }, [])



    var isActiveWishlist = false;

    if (wishlistData !== null) {
        for (let i = 0; i < wishlistData.length; i++) {
            if (wishlistData[i].variants === collection.variants[0].id) {
                isActiveWishlist = true;
                // console.log("isActive", isActive);
                break;
            }
        }
    }



    return (
        <>
            <div className="col-6">
                <div className="product-card">
                    {
                        id === "wishlist"
                            ?
                            <>
                                <AddWishlistBtn ProductId={collection.ProductId} title={collection.title} image={collection.image} price={collection.price} variants={collection.variants} isActive={isActive} availableForSale={collection.availableForSale} />
                                <div data-card-height="200" onClick={() => handleProductRoute(collection.ProductId)} style={{ backgroundImage: `url(${collection.image})`, height: "200px", borderRadius: "0" }} className="card bg-11 position-relative">
                                    {
                                        !collection.availableForSale ?
                                            <span style={{ top: "8px", left: "26px", borderRadius: "0" }} className="position-absolute translate-middle badge bg-danger">
                                                Sold Out
                                            </span> : ""
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-12" onClick={() => handleProductRoute(collection.ProductId)}>
                                        <p style={{ marginBottom: "0px", color: "#000" }} className="mb-0">
                                            {`${collection.title.length > 20 ? `${collection.title.slice(0, 20)}...` : collection.title}`}
                                        </p>
                                    </div>
                                    <div className="col-5 mt-2 align-self-center" onClick={() => handleProductRoute(collection.ProductId)}>
                                        <p style={{ marginBottom: "10px" }} className="text-success font-15 fw-bold mb-0">
                                            ${collection.price}
                                        </p>
                                    </div>

                                    <div className="col-7 mt-2">
                                        <AddBtn variants={collection.variants} availableForSale={collection.availableForSale} />
                                        {/* <AddBtn ProductId={ProductId} title={title} image={image} price={price} variants={variants} availableForSale={availableForSale} /> */}
                                        {/* <button className="btn btn-success btn-cart1" onClick={()=>handleAddProduct(ProductId, title, image, price, collectionName)}>+ ADD</button> */}
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <AddWishlistBtn ProductId={collection.id} title={collection.title} image={collection.images[0].src} price={collection.variants[0].price} variants={collection.variants[0].id} isActive={isActiveWishlist} availableForSale={collection.availableForSale} />

                                <div data-card-height="200" onClick={() => handleProductRoute(collection.id)} style={{ backgroundImage: `url(${collection.images[0].src})`, height: "200px", borderRadius: "0" }} className="card bg-11 position-relative">
                                    {
                                        !collection.availableForSale ?
                                            <span style={{ top: "8px", left: "26px", borderRadius: "0" }} className="position-absolute translate-middle badge bg-danger">
                                                Sold Out
                                            </span> : ""
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-12" onClick={() => handleProductRoute(collection.id)}>
                                        <p style={{ marginBottom: "0px", color: "#000" }} className="mb-0">
                                            {`${collection.title.length > 19 ? `${collection.title.slice(0, 19)}...` : collection.title}`}
                                        </p>
                                    </div>
                                    <div className="col-5 mt-2 align-self-center" onClick={() => handleProductRoute(collection.id)}>
                                        <p style={{ marginBottom: "10px" }} className="text-success font-15 fw-bold mb-0">
                                            ${collection.variants[0].price}
                                        </p>
                                    </div>

                                    <div className="col-7 mt-2">
                                        <AddBtn variants={collection.variants[0].id} availableForSale={collection.availableForSale} />
                                        {/* <AddBtn ProductId={ProductId} title={title} image={image} price={price} variants={variants} availableForSale={availableForSale} /> */}
                                        {/* <button className="btn btn-success btn-cart1" onClick={()=>handleAddProduct(ProductId, title, image, price, collectionName)}>+ ADD</button> */}
                                    </div>
                                </div>
                            </>
                    }
                    {/* <AddWishlistBtn ProductId={collection.id} title={collection.title} image={collection.images[0].src} price={collection.variants[0].price} variants={collection.variants[0].id} isActive={isActive} availableForSale={collection.availableForSale} /> */}
                    {/* <span> <i className="bi bi-heart bi-heart1 font-14"></i></span> */}
                    {/* <div data-card-height="200" onClick={() => handleProductRoute(collection.id)} style={{ backgroundImage: `url(${collection.images[0].src})`, height: "200px" }} className="card bg-11 shadow-l position-relative">
                        {
                            !collection.availableForSale ?
                                <span style={{ top: "8px", left: "25px" }} className="position-absolute translate-middle badge bg-danger">
                                    Sold Out
                                </span> : ""
                        }
                    </div> */}
                    {/* <div className="row"> */}
                    {/* <div className="col-12" onClick={() => handleProductRoute(collection.id)}>
                            <p style={{ marginBottom: "0px" }} className="mb-0">
                                {`${collection.title.length > 20 ? `${collection.title.slice(0, 20)}...` : collection.title}`}
                            </p>
                        </div>
                        <div className="col-5 mt-2" onClick={() => handleProductRoute(collection.id)}>
                            <p style={{ marginBottom: "10px" }} className="text-success font-18">
                                ${collection.variants[0].price}
                            </p>
                        </div> */}

                    {/* <div className="col-7 mt-2"> */}
                    {/* <AddBtn variants={collection.variants[0].id} availableForSale={collection.availableForSale} /> */}
                    {/* <AddBtn ProductId={ProductId} title={title} image={image} price={price} variants={variants} availableForSale={availableForSale} /> */}
                    {/* <button className="btn btn-success btn-cart1" onClick={()=>handleAddProduct(ProductId, title, image, price, collectionName)}>+ ADD</button> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Productcard;