import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Navigation, Productcard } from '../components';
import { productsContext } from '../context/Products'

import emptyWishlist from '../assets/images/wishlist-empty.png';
import LoadingGif from '../assets/images/Loading-gif.gif';

//Orchid Patio Logo
import OrchidPatioLogo from '../assets/images/Orchid-Patio-Logo.png'

const NavPage = (props) => {

  const { id } = useParams();

  const [wishlistData, setWishlistData] = useState(JSON.parse(localStorage.getItem("wistListProducts")));
  const [user, setUser] = useState();
  const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));

  let { collections, fetchAllCollections, setCollections } = useContext(productsContext);
  // console.log(collections)

  useEffect(() => {
    if (id !== "wishlist") {
      fetchAllCollections(id);
    } else {
      setWishlistData(JSON.parse(localStorage.getItem("wistListProducts")));
    }
    return () => setWishlistData();
  }, [])

  useEffect(() => {
    if (id !== "wishlist") {
      setCollections([]);
      fetchAllCollections(id);
    } else {
      setWishlistData(JSON.parse(localStorage.getItem("wistListProducts")));
    }
    return () => setWishlistData();
  }, [id])

  useEffect(() => {
    const intervalid = setInterval(() => {
      setWishlistData(JSON.parse(localStorage.getItem("wistListProducts")));
    }, 250)
    return () => {
      // console.log("clearinterval");
      clearInterval(intervalid);
    }
  }, [wishlistData])

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


  // pagination logic
  const [listItems, setListItems] = useState(6);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (collections.length > 0 && collections[0].products.length >= listItems) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    // console.log("isFetching", isFetching);
    if (id !== "wishlist" && collections.length > 0 && collections[0].products.length >= listItems) {
      // console.log("scroll")
      fetchMoreListItems();
    } else if (id === "wishlist" && wishlistData !== null && wishlistData.length >= listItems) {
      fetchMoreListItems();
    } else {
      setIsFetching(false);
    }

  }, [isFetching]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return
    };
    if (collections.length > 0 && collections[0].products.length <= listItems) {
      return;
    }
    if (wishlistData !== null && id === "wishlist" && wishlistData.length <= listItems) {
      return;
    }
    setIsFetching(true);
    clearTimeout(fetchMoreListItems);
  }

  const fetchMoreListItems = () => {
    setTimeout(() => {
      setListItems(prevState => prevState + 6);
      setIsFetching(false);
      // console.log("listItems", listItems);
    }, 800);
  }

  return (
    <>
      {id !== "wishlist" ?
        collections.length <= 0 ?
          <div id="preloader">
            <div className="spinner-border color-highlight" role="status"></div>
          </div>
          :
          <>
            <div style={{ paddingTop: "120px", paddingBottom: "60px" }} className="scrollpage page-content mb-0">
              <div className="disabled1">
                <div className="row mb-n3 p-3 category-row">
                  {
                    collections.length > 0 && collections[0].products.slice(0, listItems).map((collection, index) => {
                      return <Productcard
                        collection={collection}
                        // availableForSale={collection.availableForSale}
                        key={index}
                        id={id}
                        // ProductId={collection.id}
                        // image={collection.images[0].src}
                        // title={collection.title}
                        // price={collection.variants[0].price}
                        // variants={collection.variants[0].id}
                        isActive={false} />
                    })
                  }

                </div>
                {
                  isFetching &&
                  <div className="d-flex justify-content-center mb-3">
                    <img src={LoadingGif} alt="" className="text-center" style={{ width: "30px" }} />
                  </div>
                }
              </div>
            </div>
          </>
        :
        (wishlistData !== null && wishlistData.length !== 0) ?
          <div style={{ paddingTop: "130px", paddingBottom: "60px" }} className="page-content mb-0">
            <div className="disabled1">
              <div className="row mb-n3 p-3 category-row">
                {
                  wishlistData !== null && wishlistData.slice(0, listItems).map((collection, index) => {
                    return <Productcard
                      collection={collection}
                      // availableForSale={collection.availableForSale}
                      key={index}
                      id={id}
                      // ProductId={collection.ProductId}
                      // image={collection.image}
                      // title={collection.title}
                      // price={collection.price}
                      // variants={collection.variants}
                      isActive={collection.isActive}
                    />
                  })
                }
                {
                  isFetching &&
                  <div className="d-flex justify-content-center mb-3">
                    <img src={LoadingGif} alt="" className="text-center" style={{ width: "30px" }} />
                  </div>
                }
              </div>
            </div>
          </div>
          :
          <div className="col-12 text-center" style={{ paddingTop: "130px" }}>
            <img src={emptyWishlist} className="w-100 opacity-80" alt="" />
            <div>
              <p className='m-auto mt-5' style={{ width: "90%" }}>
                There is no items in wishlist box
              </p>
            </div>
          </div>

      }
      {/* {id !== "wishlist" ?
        collections.length <= 0 ?
          <div id="preloader">
            <div className="spinner-border color-highlight" role="status"></div>
          </div>
          :
          <div style={{ paddingTop: "50px", paddingBottom: "60px" }} className="page-content mb-0">
            <div className="disabled1">
              <div className="row mb-n3 p-3 category-row">
                {
                  collections.length > 0 && collections[0].products.map((collection, index) => {
                    return <Productcard
                      collection={collection}
                      // availableForSale={collection.availableForSale}
                      key={index}
                      id={id}
                      // ProductId={collection.id}
                      // image={collection.images[0].src}
                      // title={collection.title}
                      // price={collection.variants[0].price}
                      // variants={collection.variants[0].id}
                      isActive={false} />
                  })
                }
              </div>
            </div>
          </div>
        :
        (wishlistData !== null && wishlistData.length !== 0) ?
          <div style={{ paddingTop: "50px", paddingBottom: "60px" }} className="page-content mb-0">
            <div className="disabled1">
              <div className="row mb-n3 p-3 category-row">
                {
                  wishlistData !== null && wishlistData.map((collection, index) => {
                    return <Productcard
                      collection={collection}
                      // availableForSale={collection.availableForSale}
                      key={index}
                      id={id}
                      // ProductId={collection.ProductId}
                      // image={collection.image}
                      // title={collection.title}
                      // price={collection.price}
                      // variants={collection.variants}
                      isActive={collection.isActive} 
                      />
                  })
                }
              </div>
            </div>
          </div>
          :
          <div className="col-12 mt-5 text-center">
            <img src={emptyWishlist} className="w-100 mt-5" alt="" />
          </div>

      } */}


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

      {/* Footer --- start  */}
      <div id="footer-bar" className="footer-bar">
        <Link to="/" >
          <i className="bi bi-house-fill font-24"></i>
          <span>Home</span>
        </Link>
        <Link to="/collections/wishlist" className={id === "wishlist" ? "active-nav" : ""}>
          <i className="bi bi-heart font-24"></i>
          <span>My Wishlist</span>
        </Link>
        <Link to={`${user ? "/profile" : "/profile/signin"}`}>
          <i className="bi bi-person-circle font-24"></i>
          <span>Profile</span>
        </Link>

        <Link to="#menumain" data-bs-toggle="offcanvas" data-bs-target="#menumain">
          <i className="bi bi-list font-24"></i>
          <span>Categories</span>
        </Link>
      </div>
      {/* Footer --- end */}

      {/* main-sidebar */}
      <Navigation />
    </>
  )
}

export default NavPage;