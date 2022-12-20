import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productContext } from '../context/OneProduct'
import { productList } from '../context/AddProduct';
import { toastMessageContext } from '../context/ToastMessage';
// import { headerContext } from '../context/HeaderUtilities';
// import { footerContext } from '../context/FooterUtilities';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";
import { DoubleSilder, Navigation } from '../components';

//Orchid Patio Logo
import OrchidPatioLogo from '../assets/images/Orchid-Patio-Logo.png'

const Product = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));
  const [user, setUser] = useState();

  let { handleAddProduct } = useContext(productList);
  let { handleToastMessage } = useContext(toastMessageContext);
  // const [headerData, setHeaderData] = useState("");

  let { collections, fetchProductWithId, setCollections } = useContext(productContext);
  // console.log(collections[0]);
  // let { changeHeader } = useContext(headerContext);
  // let { changeFooter } = useContext(footerContext);

  useEffect(() => {
    fetchProductWithId(id);
  }, [])
  useEffect(() => {
    setCollections([]);
    fetchProductWithId(id);
  }, [id])

  const handleCartBtn = (variants, availableForSale) => {
    if (availableForSale) {
      handleAddProduct(variants);
      handleToastMessage("Product added to cart", "green");
    } else {
      handleToastMessage("Product is out of stock", "red");
    }

  }

  // const handleHeader = (condition) => {
  //   if (condition === "ShoppingCart") {
  //     navigate("/cart");
  //     changeHeader(condition);
  //     changeFooter("");
  //   }
  // }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("OrchidUser")));
    const intervalid = setInterval(() => {
      setMyCheckout(JSON.parse(localStorage.getItem("myCheckout")));
    }, 800);

    return () => {
      // console.log("clearinterval");
      clearInterval(intervalid);
    }
  }, [myCheckout])

  return (
    <>
      {
        collections.length <= 0 ?
          <div id="preloader">
            <div className="spinner-border color-highlight" role="status"></div>
          </div>
          :
          <>

            <div className="w-100 position-relative" style={{ paddingTop: "110px" }} >
              <div className="w-100">
                <Swiper
                  style={{ width: "100%", height: "400px" }}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  // loop={true}
                  modules={[Autoplay]}
                  className="mySwiper">
                  {
                    collections[0].images.map((imgs, index) => {
                      return <SwiperSlide key={index}>
                        <img src={imgs.src} style={{ width: "100%", height: "auto" }} alt="" />
                      </SwiperSlide>
                    })
                  }

                </Swiper>
                <div className="card-bottom m-3">
                  {/* {
                    !collections[0].availableForSale ?
                      <span className="position-absolute translate-middle badge bg-danger" style={{ top: "-11px", left: "27px" }}>Sold Out</span>
                      : ""
                  } */}

                  {/* <h4 className="color-white text-uppercase font-700 mb-0">
                    {collections[0].title}
                  </h4>
                  <h5 className="color-white text-uppercase font-500 mb-0">
                    ${collections[0].variants[0].price}
                  </h5> */}
                </div>
                {/* <div className="card-overlay bg-gradient-fade opacity-40" style={{ borderRadius: "0px" }}></div> */}
              </div>


            </div>
            <div className="w-100 px-3" style={{ paddingBottom: "12px" }}>
              <div className='mt-2'>
                {
                  !collections[0].availableForSale ?
                    <span className="badge bg-danger rounded-0">Availability: Out Of Stock</span>
                    : <span className="badge bg-success rounded-0">Availability: In Stock</span>
                }

                <h4 className="color-black font-700 mb-2">
                  {collections[0].title}
                </h4>
                <h5 className="text-success text-uppercase font-700 mb-0">
                  ${collections[0].variants[0].price}
                </h5>
              </div>

              <p className="color-black opacity-75 mb-2 lh-base my-3" style={{ fontSize: "13px" }}>
                {collections[0].description}
              </p>

              <button disabled={!collections[0].availableForSale} onClick={() => handleCartBtn(collections[0].variants[0].id, collections[0].availableForSale)} className="border-0 rounded-0 font-600 text-white text-uppercase px-3 py-2 my-3" style={{ background: "#198754", fontSize: "12px" }}>Add to cart</button>

              <p className="color-black opacity-75 mb-2 lh-base my-3" style={{ fontSize: "13px" }}>
                <span className='font-600'>SKU:</span> {collections[0].variants[0].sku === "" ? "N/A" : collections[0].variants[0].sku}
              </p>


              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h4 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button product-accordion-button collapsed" style={{ fontSize: "15px", padding: "0.6rem 0" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Description
                    </button>
                  </h4>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">{collections[0].description}</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h4 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button product-accordion-button collapsed" style={{ fontSize: "15px", padding: "0.6rem 0" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Reviews
                    </button>
                  </h4>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      No Review
                    </div>
                  </div>
                </div>

              </div>


              {/* <div className="mt-3 d-flex justify-content-between">
                <i className="bi bi-cart-dash-fill fs-5 rounded-3" onClick={() => handleCartBtn(collections[0].variants[0].id, collections[0].availableForSale)} style={{ padding: "12px 14px", background: "#D6E9E0" }}></i>
                <button disabled={!collections[0].availableForSale} onClick={() => navigate("/cart")} className="border-0 rounded-3 font-600 fs-6 text-white" style={{ background: "#52826B", width: "256px" }}>Checkout</button>
              </div> */}

            </div>

            {/* realated products */}
            <DoubleSilder title="Realated Product" content="" id="Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MjM5NDkyOA==" />

            <div style={{ paddingBottom: "80px" }}></div>


            {/* header --- start  */}
            <div className="header-bar header-fixed header-app header-bar-detached">
              {/* <Link data-back-button to="#"><i className="bi bi-search font-16 color-theme ps-2"></i></Link> */}

              <img style={{ width: "180px" }} src={OrchidPatioLogo} alt="" />

              <Link to="/cart">
                <i className="bi bi-cart font-18 color-theme ps-2 position-relative">
                  <span style={{ backgroundColor: "#267d0b" }} className="position-absolute top-0 start-100 translate-middle badge color-white rounded-pill px-1">
                    {myCheckout != null ? myCheckout.lineItems.length : 0}
                  </span>
                </i>
              </Link>
            </div>
            {/* header --- end */}


            {/* header --- start  */}
            {/* <div className="header-bar header-fixed header-app bg-transparent shadow-none" style={{ backdropFilter: "none" }}>
              <div data-back-button onClick={()=>navigate(-1)} className="ms-3">
                <i className="bi bi-caret-left-fill font-11 color-theme ps-2 bg-light" style={{ padding: "9px", borderRadius: "9px" }}></i>
              </div>
              <Link to="#" className="header-title color-theme font-13"></Link>
              <Link data-back-button to="/collections/wishlist" style={{ marginTop: "5px", marginRight: "1rem" }} >
                <i className="bi bi-heart font-18 color-theme ps-2 bg-light" style={{ padding: "8px", paddingBottom: "3px", borderRadius: "9px" }}></i>
              </Link>
            </div> */}
            {/* header --- end */}

            {/* Footer --- start  */}
            <div id="footer-bar" className="footer-bar">
              <Link to="/" className="active-nav">
                <i className="bi bi-house-fill font-24"></i>
                <span>Home</span>
              </Link>
              <Link to="/collections/wishlist">
                <i className="bi bi-heart font-24"></i>
                <span>My Wishlist</span>
              </Link>
              <Link to={`${user ? "/profile" : "/profile/signin"}`}>
                <i className="bi bi-person-circle font-24"></i>
                <span>Profile</span>
              </Link>

              <a href="#menumain" data-bs-toggle="offcanvas" aria-controls="menumain" data-bs-target="#menumain">
                <i className="bi bi-list font-24"></i>
                <span>Categories</span>
              </a>
            </div>
            {/* Footer --- end */}

            {/* main-sidebar */}
            <Navigation />

          </>
      }
    </>
  )
}

export default Product;