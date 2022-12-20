import React, { useContext, useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Autoplay, Pagination } from "swiper";

import { productsContext } from '../context/Products'
import { productList } from '../context/AddProduct';
import { toastMessageContext } from '../context/ToastMessage';

// import { headerContext } from '../context/HeaderUtilities';
// import { footerContext } from '../context/FooterUtilities';
import { useNavigate } from 'react-router-dom';

const DoubleSilder = (props) => {

    const { title, content, id } = props;

    const navigate = useNavigate();

    const { collections, fetchAllCollections } = useContext(productsContext);
    // console.log(collections[0]);
    let { handleAddProduct } = useContext(productList);
    let { handleToastMessage } = useContext(toastMessageContext);

    // let { changeHeader } = useContext(headerContext);
    // let { changeFooter } = useContext(footerContext);

    useEffect(() => {
        fetchAllCollections(id);
    }, [])

    const handleAddBtn = async (variants, availableForSale) => {
        if (availableForSale) {
            handleAddProduct(variants);
            handleToastMessage("Product Added to Cart", "green");
        } else {
            handleToastMessage("Product is out of stock", "red");
        }

    }

    const handleProductRoute = (id) => {
        // changeHeader("Product");
        // changeFooter("");
        navigate(`/Product/${id}`)
    }

    return (
        <>
            {/* <!-- Double Sliders--> */}
            <h4 className="font-700 opacity-100 text-center content">{title}</h4>
            <p className="content text-center mb-3">{content}</p>
            <Swiper
                style={{ width: "100%" }}
                slidesPerView={2}
                // loop={ collections[0] !== undefined ? true : false}
                loop={false}
                loopFillGroupWithBlank={true}
                // loopFillGroupWithBlank={ collections[0] !== undefined ? true : false }
                // centeredSlides={true}
                spaceBetween={7}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grid={{
                    rows: 2,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                // navigation={true}
                modules={[Grid, Autoplay, Pagination]}
                className="mySwiper">
                {
                    collections[0] !== undefined
                        ?
                        <>
                            {
                                collections[0].products.map((product, index) => {
                                    return index < 16 && <SwiperSlide key={index}>
                                        <div className="splide__slide splide__slide--clone " aria-hidden="true" tabIndex="-1" style={{ width: "185.5px", padding: "0px 6px" }}>
                                            <div className="product-card">
                                                <div data-card-height="200" onClick={() => handleProductRoute(product.id)} style={{ backgroundImage: `url(${product.images[0].src})`, height: "180px", borderRadius: "0px" }}
                                                    className="card bg-11 position-relative">
                                                    {
                                                        !product.availableForSale ?
                                                            <span style={{ top: "8px", left: "25px" }} className="position-absolute translate-middle badge bg-danger">
                                                                Sold Out
                                                            </span> : ""
                                                    }
                                                </div>
                                                <div className="row" style={{ padding: "0 5px" }}>
                                                    <div className="col-12" style={{ textAlign: "center", padding: "0px 6px" }} onClick={() => handleProductRoute(product.id)}>
                                                        <p style={{ marginBottom: "0px", margin: "5px 0", fontSize: "16px", color: "#000" }} >
                                                            {`${product.title.length > 16 ? `${product.title.slice(0, 16)}...` : product.title}`}
                                                        </p>
                                                    </div>

                                                    <div className="col-12 text-center" style={{ padding: "0 6px" }}>
                                                        <p onClick={() => handleProductRoute(product.id)} style={{ margin: "5px 0" }} className="text-success font-14 fw-bold">
                                                            ${product.variants[0].price}
                                                        </p>

                                                        <div className="divider m-0"></div>

                                                        <p className='opacity-60' style={{ fontSize: "11px", color: "#000", textAlign: "center", margin: "5px 0", lineHeight: "14px" }} >
                                                            {`${product.description.length > 80 ? `${product.description.slice(0, 80)}...` : product.description}`}
                                                        </p>
                                                        <p style={{ fontSize: "12px", color: "#950398", textAlign: "center", margin: "5px 0" }}
                                                            onClick={() => handleAddBtn(product.variants[0].id, product.availableForSale)} >
                                                            ADD TO CART
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                            }

                        </>
                        :
                        <>
                            <SwiperSlide>
                                <div id="preloader" style={{ height: "200px" }}>
                                    <div className="spinner-border color-highlight" role="status"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id="preloader">
                                    <div className="spinner-border color-highlight" role="status"></div>
                                </div>
                            </SwiperSlide>
                        </>
                }
            </Swiper>
        </>
    )
}

export default DoubleSilder;
