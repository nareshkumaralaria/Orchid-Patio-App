import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collectionContext } from '../context/Collection';

const Navigation = () => {


    const { collections, fetchAllCollections } = useContext(collectionContext);
    // console.log(collections[0]);

    useEffect(() => {
        fetchAllCollections();
    }, [])


    return (
        <>
            <div id="menumain" tabIndex="-1" data-menu-active="nav-homes" className="offcanvas offcanvas-start" aria-hidden="true" style={{ width: "80%" }}>
                <div className="menu-search-box d-flex align-items-center justify-content-center w-100 bg-white" style={{ boxShadow: "0 -1px 9px #0000002b" }}>
                    <input name="inputValue" type="text" autoComplete='off' placeholder='Search for products' className='menu-seach-input w-100 px-3 py-3 outline-0 fs-6 border-0' />
                    <i className="bi bi-search me-3"></i>
                </div>

                <ul className="nav nav-tabs d-flex justify-content-between" style={{ backgroundColor: "#f9f9f9" }}>
                    <li className="nav-item d-flex align-items-center w-50 text-center h-100">
                        <button className="nav-link menu-navlink active text-uppercase w-100" aria-current="page" data-bs-toggle="tab" data-bs-target="#home-tab-pane" role="tab" aria-controls="home-tab-pane" aria-selected="true">Menu</button>
                    </li>
                    <li className="nav-item w-50 text-center">
                        <button className="nav-link menu-navlink w-100 text-uppercase" data-bs-toggle="tab" data-bs-target="#categories-tab-pane" role="tab" aria-controls="categories-tab-pane" aria-selected="false">categories</button>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="home-tab-pane" className='tab-pane fade show active'>
                        <div className="menu-list" data-bs-toggle="offcanvas">
                            <div className="card card-style rounded-m py-2 mb-0 text-uppercase">

                                <Link to="/" id="nav-homes" >
                                    <span>Home</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>
                                <Link to="/terms" id="nav-homes" >
                                    <span>Terms & Conditions</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>
                                <Link to="/privacy" id="nav-homes" >
                                    <span>Privacy Policy</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>
                                <Link to="/shipping" id="nav-homes" >
                                    <span>Shipping Policy</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>
                                <Link to="/refund" id="nav-homes" >
                                    <span>Refund Policy </span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>
                                <Link to="/contact" id="nav-homes" >
                                    <span>Contact Us</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>
                                <Link to="/collections/wishlist" id="nav-homes" >
                                    <span><i className="bi bi-heart font-24"></i></span>

                                    <span>Wishlist</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>
                                <Link to="/profile/signin" id="nav-homes" >
                                    <span><i className="bi bi-box-arrow-in-right font-24"></i></span>

                                    <span>login/register</span>
                                    {/* <i className="bi bi-chevron-right"></i> */}
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div id="categories-tab-pane" className='tab-pane fade'>
                        <div className="menu-list" data-bs-toggle="offcanvas">
                            <div className="card card-style py-2 rounded-m mb-0" style={{ overflowY: "visible" }}>
                                {collections.length > 0 ?
                                    collections[0].map((collection, index) => {
                                        return collection.descriptionHtml === "<span></span>" && <Link to={`/collections/${collection.id}`} key={index} id="nav-homes">
                                            <span>
                                                {collection.title.length > 19 ? `${collection.title.slice(0, 19)}...` : collection.title}
                                            </span>
                                            {/* <i className="bi bi-chevron-right"></i> */}
                                        </Link>
                                    })
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* <span className="menu-divider mt-2">categories</span> */}

                {/* <div className="menu-list" data-bs-toggle="offcanvas">
                    <div className="card card-style p-3 py-2 rounded-m mb-0" style={{ maxHeight: "450px", overflowY: "visible" }}>
                        {collections.length > 0 ?
                            collections[0].map((collection, index) => {
                                return collection.descriptionHtml == "<span></span>" && <Link to={`/collections/${collection.id}`} key={index} id="nav-homes"><span>{collection.title.length > 19 ? `${collection.title.slice(0, 19)}...` : collection.title}</span><i className="bi bi-chevron-right"></i></Link>
                            })
                            :
                            ""
                        }
                    </div>
                </div> */}

                {/* <span className="menu-divider mt-2">Information</span> */}
                {/* <div className="menu-list" data-bs-toggle="offcanvas">
                    <div className="card card-style rounded-m p-3 py-2 mb-0">

                        <Link to="/terms" id="nav-homes" ><span>Terms & Conditions</span><i className="bi bi-chevron-right"></i></Link>
                        <Link to="/privacy" id="nav-homes" ><span>Privacy Policy</span><i className="bi bi-chevron-right"></i></Link>
                        <Link to="/shipping" id="nav-homes" ><span>Shipping Policy</span><i className="bi bi-chevron-right"></i></Link>
                        <Link to="/refund" id="nav-homes" ><span>Refund Policy </span><i className="bi bi-chevron-right"></i></Link>
                        <Link to="/contact" id="nav-homes" ><span>Contact Us</span><i className="bi bi-chevron-right"></i></Link>

                    </div>
                </div> */}
            </div>


            {/* <div id="menumain" data-bs-toggle="offcanvas" tabIndex="-1" data-menu-active="nav-homes" className="offcanvas offcanvas-start" aria-hidden="true" style={{ width: "70%" }}>
            <span className="menu-divider mt-2">categories</span>

            <div className="menu-list">
                <div className="card card-style p-3 py-2 rounded-m mb-0" style={{maxHeight : "450px", overflowY: "visible" }}>
                    { collections.length > 0 ? 
                        collections[0].map((collection, index) => {
                            return collection.descriptionHtml == "<span></span>" && <Link to={`/collections/${collection.id}`} key={index} id="nav-homes"><span>{collection.title.length > 19 ? `${collection.title.slice(0,19)}...` : collection.title}</span><i className="bi bi-chevron-right"></i></Link>
                        })
                        : 
                        ""
                    }
                </div>
            </div>

            <span className="menu-divider mt-2">Information</span>
            <div className="menu-list">
                <div className="card card-style rounded-m p-3 py-2 mb-0">

                    <Link to="/terms" id="nav-homes" ><span>Terms & Conditions</span><i className="bi bi-chevron-right"></i></Link>
                    <Link to="/privacy" id="nav-homes" ><span>Privacy Policy</span><i className="bi bi-chevron-right"></i></Link>
                    <Link to="/shipping" id="nav-homes" ><span>Shipping Policy</span><i className="bi bi-chevron-right"></i></Link>
                    <Link to="/refund" id="nav-homes" ><span>Refund Policy </span><i className="bi bi-chevron-right"></i></Link>
                    <Link to="/contact" id="nav-homes" ><span>Contact Us</span><i className="bi bi-chevron-right"></i></Link>

                </div>
            </div>
        </div> */}
        </>
    )
}

export default Navigation;