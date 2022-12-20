import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CalculateShipping, Coupon, DoubleSilder } from '.';

import emptyCart from '../assets/images/empty-cart.png'

const Cart = (props) => {

    const { removeLineItemInCart } = props;

    const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));

    useEffect(() => {
        const intervalid = setInterval(() => {
            setMyCheckout(JSON.parse(localStorage.getItem("myCheckout")));
        }, 800)

        return () => {
            // console.log("clearinterval");
            clearInterval(intervalid);
        }
    }, [myCheckout])


    const handleDeleteItem = (lineItemId) => {
        removeLineItemInCart(lineItemId);
    }

    const handlePlaceOrder = () => {
        window.open(myCheckout.webUrl);
    }

    return (
        <>
            <div style={{ paddingTop: "50px" }} className="page-content mb-0 pb-0">
                <div className="disabled1">
                    {
                        (myCheckout.lineItems === null || myCheckout.lineItems.length === 0)
                            ?
                            <div className="col-12 text-center">
                                <img src={emptyCart} className="w-100 opacity-80" alt="" />
                                <div>
                                    <p className='m-auto mt-5' style={{ width: "90%" }}>
                                        Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.
                                    </p>
                                    <Link to="/" className='return-to-shop text-white text-uppercase px-4 py-3 fw-bold fs-7 mt-4 d-inline-block' >Return to shop</Link>
                                </div>
                            </div>
                            :
                            <>

                                {/* <!-- Footer Bar--> */}
                                <div id="footer-bar" className="footer-bar cart-bar">
                                    <div style={{ width: "100%" }} className="row">

                                        <div className="col-12 order-btn-holder">
                                            <button onClick={handlePlaceOrder} className="btn btn-success">Place Order</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-n3 p-3">
                                    <div className="col-12">
                                        <h6 style={{ float: "right" }}>
                                            {/* {(myCheckout.lineItems === null) ? "Total : $0 (0 - Items)" : `Total : $${totalPrice} (${myCheckout.lineItems.length} - Items)`} */}
                                            Total : ${myCheckout.totalPrice} ({myCheckout.lineItems.length} - Items)
                                        </h6>
                                    </div>
                                </div>

                                {/* <!-- Double Sliders--> */}
                                <div className="row ">
                                    {(myCheckout.lineItems === null || myCheckout.lineItems.length === 0) ? <div className="col-12 mt-1 text-center">Your Card is Empty</div> :
                                        myCheckout.lineItems.map((lineItem, index) => {
                                            return <div key={index} style={{ background: "#fff" }} className="col-12 mt-1">
                                                <div className="product-card">
                                                    <i className="bi bi-x product-cross" onClick={() => handleDeleteItem(lineItem.id)} ></i>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div data-card-height="90" style={{ backgroundImage: `url(${lineItem.variant.image.src})`, height: "90px", borderRadius: "0", border: "0" }}
                                                                className="card bg-11"></div>
                                                        </div>
                                                        <div className="col-8">
                                                            {/* <span style={{ fontSize: "11px" }}>
                                                            {productId.collectionName}
                                                        </span> */}
                                                            <h5 style={{ color: "#198754", marginTop: "14px" }}>{lineItem.title}</h5>
                                                            <span>Price: ${lineItem.variant.price}</span><br />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                                <div className="divider mb-0 mx-3 mt-2"></div>
                                <Coupon />
                                <div className="divider mb-0 mx-3"></div>
                                <CalculateShipping />
                                <div className="divider mb-0 mx-3"></div>
                                <div className="row">
                                    <div style={{ background: "#fff" }} className="col-12 mt-2">
                                        <div className="content">
                                            <h6>Price Details</h6>
                                            <div className="divider mb-0"></div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <p>Sub Total</p>
                                                </div>
                                                <div className="col-5">
                                                    <p style={{ float: "right" }}>${myCheckout.subtotalPrice}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <p><b>Total</b></p>
                                                </div>
                                                <div className="col-5">
                                                    <p style={{ float: "right" }}><b>${myCheckout.totalPrice}</b></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <DoubleSilder title="Related Products" content="" id="Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MjM5NDkyOA==" />
                            </>
                    }

                </div>
                <br /><br /><br />
            </div>


            {/* header --- start  */}
            <div className="header-bar header-fixed header-app " style={{ boxShadow: "0 8px 24px 0 rgb(0 0 0 / 8%)" }}>
                <Link data-back-button to="/" ><i className="bi bi-caret-left-fill font-11 color-theme ps-2"></i></Link>
                <Link to="#" className="header-title color-theme font-13">SHOPPING CART</Link>
                <Link data-back-button to="/collections/wishlist"> <i className="bi bi-heart font-18 color-theme ps-2"></i></Link>
            </div>
            {/* header --- end */}
        </>
    )
}

export default Cart;