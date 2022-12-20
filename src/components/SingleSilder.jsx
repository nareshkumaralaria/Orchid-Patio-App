import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collectionContext } from '../context/Collection';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";



const SingleSilder = () => {

    const navigate = useNavigate();

    const { collections, fetchAllCollections } = useContext(collectionContext);
    // console.log(collections[0]);

    useEffect(() => {
        fetchAllCollections();
    }, [])

    const handleBanner = (id) => {
        navigate(`/collections/${id}`)
    }

    return (
        <>
            {
                collections.length > 0 ?
                    <Swiper
                        style={{ width: "90%", height: "200px", backgroundSize: "cover", backgroundPosition: "center", }}
                        spaceBetween={10}
                        loopFillGroupWithBlank={true}
                        slidesPerView={1}
                        // centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper">
                        {
                            collections[0].map((collection, index) => {
                                return (collection.descriptionHtml === "<span></span>" && (index === 1 || index === 4 || index === 6 || index === 8)) && <SwiperSlide onClick={() => handleBanner(collection.id)} key={index}
                                // style={{ backgroundImage: `url(${b8})`, backgroundPosition: "center", backgroundSize: "cover" }} 
                                >
                                    <div data-card-height="200" className={`card shadow-l bgc-${index} `} style={{ height: "200px" }}>
                                        <div className="card-bottom m-3">
                                            <h3 className="color-white text-uppercase font-700 mb-0">
                                                {collection.title}
                                            </h3>
                                            <p className="under-heading color-white opacity-60 mb-0">
                                                Shop Exclusive {collection.title} Orchids
                                            </p>
                                        </div>
                                        <div className="card-overlay bg-gradient-fade opacity-60"></div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                    :
                    <div id="preloader">
                        <div className="spinner-border color-highlight" role="status"></div>
                    </div>
            }
            {/* {
                collections.length > 0 ?
                    <Swiper
                        style={{ width: "315px", height: "200px", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px" }}
                        spaceBetween={10}
                        loopFillGroupWithBlank={true}
                        slidesPerView={1}
                        // centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper">
                        {
                            collections[0].map((collection, index) => {
                                return (collection.descriptionHtml == "<span></span>" && (index === 1 || index === 4 || index === 6 || index === 8)) && <SwiperSlide onClick={() => handleBanner(collection.id)} key={index}
                                // style={{ backgroundImage: `url(${b8})`, backgroundPosition: "center", backgroundSize: "cover" }} 
                                >
                                    <div data-card-height="200" className={`card rounded-m shadow-l bgc-${index} `} style={{ height: "200px" }}>
                                        <div className="card-bottom m-3">
                                            <h3 className="color-white text-uppercase font-700 mb-0">
                                                {collection.title}
                                            </h3>
                                            <p className="under-heading color-white opacity-60 mb-0">
                                                Shop Exclusive {collection.title} Orchids
                                            </p>
                                        </div>
                                        <div className="card-overlay rounded-m bg-gradient-fade opacity-60"></div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                    :
                    <div id="preloader">
                        <div className="spinner-border color-highlight" role="status"></div>
                    </div>
            } */}

        </>
    )
}

export default SingleSilder;
