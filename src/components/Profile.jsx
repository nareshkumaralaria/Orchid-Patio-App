import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import s3 from '../assets/images/pictures/3s.jpg';
import Navigation from './Navigation';

//Orchid Patio Logo
import OrchidPatioLogo from '../assets/images/Orchid-Patio-Logo.png'

const Profile = () => {

  const navigate = useNavigate();

  const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("OrchidUser")));
  const [customerDetails, setCustomerDetails] = useState();
  // console.log(user);

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

  let config = {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "11a6d4e6b256ff272df7f9d8407f370c"
    }
  }

  const customerInfo = {
    query: `query { customer(customerAccessToken: \"${user}\") { id firstName lastName acceptsMarketing email phone } }`
  }

  useEffect(() => {
    fatchCustomerInfo();

  }, [])

  const fatchCustomerInfo = async () => {
    await axios.post("https://theodinapitest.myshopify.com/api/2022-01/graphql.json", JSON.stringify(customerInfo), config)
      .then(res => {
        // console.log("customer info", res);
        if (res.data.data.customer) {
          setCustomerDetails(res.data.data.customer);
        } else {
          // console.log("else err", res.data.data.customer);
        }
      })
    // .catch(err => console.log(err))
    // alert("🤒 Opps! \n Network Error \n Try After Sometime");
  }

  const handleLogout = () => {
    setUser();
    localStorage.removeItem('OrchidUser');
    navigate('/profile/signin');
  }

  return (
    // <div style={{ paddingTop: "80px"}}>Empty Profile</div>
    <>
      {
        customerDetails ?
          (<div className="page-content header-clear-medium bg-white" style={{ height: "100vh" }}>

            <div className="card card-style overflow-visible" style={{ boxShadow: "none", paddingTop: "20px" }}>
              <div className="content">
                <div className="row mb-0">
                  <div className="col-12 my-5">
                    {
                      customerDetails
                        ?
                        <>
                          <p className="text-uppercase mb-1 fs-1 color-theme text-center font-900">
                            {customerDetails.firstName + " " + customerDetails.lastName}
                          </p>
                          <p className="col-12 text-center" >
                            {customerDetails.email}
                          </p>
                        </>
                        :
                        ""
                    }
                  </div>
                </div>
              </div>
              <div className="divider mb-0 mx-3"></div>
              <div className="row my-4 px-3">
                <div className="col-12">
                  <span className="font-700 color-theme font-14 text-center d-block">Address</span>
                </div>
              </div>
              <div className="divider mb-0 mx-3"></div>
              <div className="row my-4 px-3">
                <div className="col-12">
                  <span className="font-700 color-theme font-14 text-center d-block">Saved Addresses</span>
                </div>
              </div>
              <div className="divider mb-0 mx-3"></div>
              <div className="row my-4 px-3">
                <div className="col-12">
                  <span className="font-700 color-theme font-14 text-center d-block">Order History</span>
                </div>
              </div>
              <div className="divider mb-0 mx-3"></div>

              <div className="content">
                <div className="row mb-0">
                  <div className="col-12 my-4 " >
                    <p onClick={handleLogout}
                      className="btn btn-full btn-l rounded-s text-uppercase font-900 gradient-highlight shadow-bg shadow-bg-s">Log Out</p>
                  </div>
                </div>
              </div>

            </div>
          </div>)
          :
          (<div id="preloader">
            <div className="spinner-border color-highlight" role="status"></div>
          </div>)
      }
      {/* <div className="page-content header-clear-medium bg-white" style={{ height: "100vh" }}>

        <div className="card card-style overflow-visible" style={{ boxShadow: "none" }}>
          <div className="content">
            <div className="row mb-0">
              <div className="col-12 my-5">
                {
                  customerDetails
                    ?
                    <>
                      <p className="text-uppercase mb-1 fs-1 color-theme text-center font-900">
                        {customerDetails.firstName + " " + customerDetails.lastName}
                      </p>
                      <p className="col-12 text-center" >
                        {customerDetails.email}
                      </p>
                    </>
                    :
                    ""
                }
              </div>
            </div>
          </div>
          <div className="divider mb-0 mx-3"></div>
          <div className="row my-4 px-3">
            <div className="col-12">
              <span className="font-700 color-theme font-14 text-center d-block">Address</span>
            </div>
          </div>
          <div className="divider mb-0 mx-3"></div>
          <div className="row my-4 px-3">
            <div className="col-12">
              <span className="font-700 color-theme font-14 text-center d-block">Saved Addresses</span>
            </div>
          </div>
          <div className="divider mb-0 mx-3"></div>
          <div className="row my-4 px-3">
            <div className="col-12">
              <span className="font-700 color-theme font-14 text-center d-block">Order History</span>
            </div>
          </div>
          <div className="divider mb-0 mx-3"></div>

          <div className="content">
            <div className="row mb-0">
              <div className="col-12 my-4 " >
                <p onClick={handleLogout}
                  className="btn btn-full btn-l rounded-s text-uppercase font-900 gradient-highlight shadow-bg shadow-bg-s">Log Out</p>
              </div>
            </div>
          </div>

        </div>
      </div> */}


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
        <Link to="/">
          <i className="bi bi-house-fill font-24"></i>
          <span>Home</span>
        </Link>
        <Link to="/collections/wishlist">
          <i className="bi bi-heart font-24"></i>
          <span>My Wishlist</span>
        </Link>
        <Link to={`${user ? "/profile" : "/profile/signin"}`} className="active-nav">
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

export default Profile;