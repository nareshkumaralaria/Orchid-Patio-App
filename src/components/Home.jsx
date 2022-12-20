import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//Orchid Patio Logo
import OrchidPatioLogo from '../assets/images/Orchid-Patio-Logo.png'

//banners
import b1 from '../assets/images/banners/1.png'
import b2 from '../assets/images/banners/2.png'
import b3 from '../assets/images/banners/3.png'
import b4 from '../assets/images/banners/4.png'
import b5 from '../assets/images/banners/5.png'
import { SingleSilder, DoubleSilder } from './index'
import Navigation from './Navigation'


const Home = () => {

    const navigate = useNavigate();

    const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));
    const [user, setUser] = useState();

    const handleBanner = (id) => {
        navigate(`/collections/${id}`)
    }

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
            <div style={{ paddingTop: "130px" }} className="page-content mb-0 pb-0">
                <SingleSilder />

                <div className="divider mx-3 mt-4 mb-4"></div>

                {/* <!-- Double Slider Group--> */}
                <div className="disabled1">
                    <DoubleSilder title="RARE ORCHIDS" content="Find all the rare and unusual orchids in our variety." id="Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MjM5NDkyOA==" />
                </div>

                {/* bannners */}
                <div className="card card-style mt-5" onClick={() => handleBanner("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MTkzNjE3Ng==")}>
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={b1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="card card-style" onClick={() => handleBanner("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MjU5MTUzNg==")}>
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={b2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="divider mx-3 mt-4 mb-4"></div>

                {/* <!-- Double Slider Group--> */}
                <div className="disabled1">
                    <DoubleSilder title="SPECIALS AND SALE" content="Shop from our range of products on special and sale." id="Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MjUyNjAwMA==" />
                </div>

                {/* bannners */}
                <div className="card card-style mt-5" onClick={() => handleBanner("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MjMyOTM5Mg==")}>
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={b3} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="card card-style" onClick={() => handleBanner("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTI3MTkwMzQwOA==")}>
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={b4} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="card card-style">
                    <div className="row">
                        <div className="col-sm-12">
                            <img src={b5} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <br /><br /><br />
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

            {/* old header --- start  */}
            {/* <div className="header-bar header-fixed header-app header-bar-detached">
                <Link data-back-button to="#"><i className="bi bi-search font-16 color-theme ps-2"></i></Link>

                <input type="text" className="form-control rounded-xs" id="c0" placeholder="Search for products"
                    pattern="[A-Za-z ]{1,32}" required="" style={{ width: "75%", background: "none", border: "none" }} />

                <Link to="/cart">
                    <i className="bi bi-cart font-18 color-theme ps-2 position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle badge color-white rounded-pill bg-primary px-1">
                            {myCheckout != null ? myCheckout.lineItems.length : 0}
                        </span>
                    </i>
                </Link>
            </div> */}
            {/* old header --- end */}

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
    )
}

export default Home;