import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { headerContext } from '../context/HeaderUtilities';
import { footerContext } from '../context/FooterUtilities';

const Headerbar = () => {

  // const [cartData, setCartData] = useState([]);
  const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));
  const [headerData, setHeaderData] = useState("");
  const [footerData, setFooterData] = useState("");

  const navigate = useNavigate();

  let { changeHeader } = useContext(headerContext);
  let { changeFooter } = useContext(footerContext);

  useEffect(() => {
    setInterval(() => {
      // setCartData(JSON.parse(localStorage.getItem("cartProductsList")));
      setMyCheckout(JSON.parse(localStorage.getItem("myCheckout")));
      setHeaderData(JSON.parse(localStorage.getItem("Header")));
      setFooterData(JSON.parse(localStorage.getItem("Footer")));
    }, 150);
  }, [])

  const handleHeader = (condition) => {
    if (condition === "ShoppingCart") {
      changeHeader(condition);
      changeFooter("");
    }else if(condition === "wishlist"){
      changeHeader("SearchHeader");
      changeFooter("mainFooter");
    }else if(condition === "SearchHeader"){
      navigate(-1);
      changeHeader("SearchHeader");
      changeFooter("mainFooter");
    }else{
      navigate(-1);
      changeHeader("SearchHeader");
      changeFooter("mainFooter");
    }
  }

  return (
    <>
      {/* Home apge header */}
      {(headerData === null || headerData === "SearchHeader") && <div className="header-bar header-fixed header-app header-bar-detached">
        <Link data-back-button to="#"><i className="bi bi-search font-16 color-theme ps-2"></i></Link>

        <input type="text" className="form-control rounded-xs" id="c0" placeholder="Search for products"
          pattern="[A-Za-z ]{1,32}" required="" style={{ width: "75%", background: "none", border: "none" }} />

        <Link to="/cart">
          <i className="bi bi-cart font-18 color-theme ps-2 position-relative" onClick={() => handleHeader("ShoppingCart")}>
            <span className="position-absolute top-0 start-100 translate-middle badge color-white rounded-pill bg-primary px-1">
              {myCheckout != null ? myCheckout.lineItems.length : 0}
            </span>
          </i>
        </Link>
      </div>}

      {/* shopping cart page header */}
      {headerData === "ShoppingCart" && <div className="header-bar header-fixed header-app ">
        <Link data-back-button to="/" onClick={()=>handleHeader("SearchHeader")} ><i className="bi bi-caret-left-fill font-11 color-theme ps-2"></i></Link>
        <Link to="#" className="header-title color-theme font-13">SHOPPING CART</Link>
        <Link data-back-button to="/collections/wishlist" onClick={()=>handleHeader("wishlist")}> <i className="bi bi-heart font-18 color-theme ps-2"></i></Link>
      </div>}

      {/* Product description page header */}
      {headerData === "Product" && <div className="header-bar header-fixed header-app bg-transparent shadow-none" style={{ backdropFilter: "none" }}>
        <div data-back-button className="ms-3">
          <i className="bi bi-caret-left-fill font-11 color-theme ps-2 bg-light" onClick={()=>handleHeader()} style={{ padding: "8px", borderRadius: "9px" }}></i>
        </div>
        <Link to="#" className="header-title color-theme font-13"></Link>
        <Link data-back-button to="/collections/wishlist" onClick={()=>handleHeader("wishlist")} style={{ marginTop: "5px", marginRight: "1rem" }} >
          <i className="bi bi-heart font-18 color-theme ps-2 bg-light" style={{ padding: "8px", paddingBottom: "5px", borderRadius: "9px" }}></i>
        </Link>
      </div>}
    </>
  )
}

export default Headerbar;