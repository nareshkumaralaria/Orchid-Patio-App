import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

//Orchid Patio Logo
import OrchidPatioLogo from '../assets/images/Orchid-Patio-Logo.png'

const Forgotpass = () => {

    const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));
    const [user, setUser] = useState();

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
            <div className="card admin-login-card mb-0 bg-white shadow-0 mx-0 rounded-0 full-height vh-100">
                <div className="card-center">
                    <div className="card card-style overflow-auto" style={{ boxShadow: "none" }}>
                        <div className="content" style={{ paddingTop: "74px", paddingBottom: "60px" }}>
                            <h1 className="text-center font-800 font-30 mb-2">Reset your password</h1>
                            <p className="text-center font-13 mt-n2 mb-3">
                                Enter your Credentials
                            </p>
                            <div className="form-custom form-label form-icon mb-3">
                                <i className="bi bi-person-circle font-14"></i>
                                <input
                                    type="text"
                                    className="form-control rounded-xs"
                                    id="c1"
                                    // onChange={(e) => emailUpdate(e)}
                                    placeholder="Email"
                                />
                                <label htmlFor="c1" className="color-theme">
                                    Email
                                </label>
                                <span>(required)</span>
                            </div>
                            <button
                                // onClick={userLogin}
                                className="btn rounded-sm btn-m gradient-blue text-uppercase mt-4 mb-4 btn-full shadow-bg shadow-bg-s w-100"
                            >
                                Submit
                            </button>
                            <Link to="/profile/signin" className="d-block text-center" >Back to Login?</Link>
                        </div>
                    </div>
                </div>
            </div>


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

export default Forgotpass;