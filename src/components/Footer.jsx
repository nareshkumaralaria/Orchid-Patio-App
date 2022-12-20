import React, { useContext, useEffect, useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { headerContext } from '../context/HeaderUtilities';

const Footer = () => {

    let { changeHeader } = useContext(headerContext);
    const [user, setUser] = useState();

    const [activeHome, setActiveHome] = useState(true);
    const [activeWishlist, setActiveWishlist] = useState(false);
    const [activeProfile, setActiveProfile] = useState(false);

    const [footerData, setFooterData] = useState("");

    const handleAll = (condition) => {
        changeHeader("SearchHeader");
        if(condition === "Home"){
            setActiveHome(true);
            setActiveWishlist(false);
            setActiveProfile(false);
        }
        else if(condition === "Myorder"){
            setActiveHome(false);
            setActiveWishlist(true);
            setActiveProfile(false);
        }
        else if(condition === "Profile"){
            setActiveHome(false);
            setActiveWishlist(false);
            setActiveProfile(true);
        }else{
            setActiveHome(false);
            setActiveWishlist(false);
            setActiveProfile(false);
        }
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("OrchidUser")));
        setInterval(() => {
            setFooterData(JSON.parse(localStorage.getItem("Footer")))
        }, 150);
      }, [])

    return (
        <>
            {(footerData === null || footerData === "mainFooter") && <div id="footer-bar" className="footer-bar">
                <Link to="/" className={`${activeHome ? "active-nav" : ""}`} onClick={()=>handleAll("Home")}>
                    <i className="bi bi-house-fill font-24"></i>
                    <span>Home</span>
                </Link>
                <Link to="/collections/wishlist" className={`${activeWishlist ? "active-nav" : ""}`} onClick={()=>handleAll("Myorder")}>
                    <i className="bi bi-heart font-24"></i>
                    <span>My Wishlist</span>
                </Link>
                <Link to={`${user ? "/profile" : "/profile/signin"}`} className={`${activeProfile ? "active-nav" : ""}`} onClick={()=>handleAll("Profile")}>
                    <i className="bi bi-person-circle font-24"></i>
                    <span>Profile</span>
                </Link>

                <Link to="#menumain" data-bs-toggle="offcanvas" data-bs-target="#menumain">
                    <i className="bi bi-list font-24"></i>
                    <span>Categories</span>
                </Link>
            </div>}
            {/* main-sidebar */}
            <Navigation  handleAll={handleAll} />

        </>
    )
}

export default Footer;