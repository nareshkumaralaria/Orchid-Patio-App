import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home, Profile, Cart, Signin, Register, Forgotpass } from './components';
import { Privacy, Terms, Shipping, Refund, Contact } from './static';
import { Collection, Products, AddProduct, OneProduct, AddWistlist, ToastMessage } from './context';

import NavPage from "./pages/NavPage";
import Product from "./pages/Product";

// let myCheckout = [];
let myCheckout = [JSON.parse(localStorage.getItem("myCheckout"))];

function App({ client }) {

  // var [initialCartItems, setInitialCartItems] = useState(JSON.parse(localStorage.getItem("cartProductsList")));
  var [initialCartItems, setInitialCartItems] = useState(JSON.parse(localStorage.getItem("myCheckout")));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("OrchidUser")));

  setInterval(() => {
    setUser(JSON.parse(localStorage.getItem("OrchidUser")));
  }, 150);

  useEffect(async () => {

    setUser(JSON.parse(localStorage.getItem("OrchidUser")));

    // Timeout for preloader
    setTimeout(function () {
      var preloader = document.getElementById('preloader');
      var toastMessage = document.getElementById('toastMessage');
      if (preloader) {
        preloader.classList.add('preloader-hide');
      }
      if (toastMessage) {
        toastMessage.classList.remove('offline-message-active');
      }
    }, 1000);

    await client.checkout.create()
      .then((res) => {
        myCheckout = res;
        localStorage.setItem("myCheckout", JSON.stringify(myCheckout));
      })
      .then(async () => {
        if (initialCartItems !== null) {
          const lineItemsToAdd = [];
          initialCartItems.lineItems.map((item) => {
            lineItemsToAdd.push({ variantId: item.variant.id, quantity: item.quantity })
          })
          await addVariantToCart(lineItemsToAdd);
        }
      })
    // .then(async () => {
    //   if (initialCartItems !== null) {
    //     const lineItemsToAdd = [];
    //     initialCartItems.map((item, index) => {
    //       lineItemsToAdd.push({ variantId: item.variants, quantity: 1 })
    //     })
    //     await addVariantToCart(lineItemsToAdd);
    //   }
    // })

    if (user) {
      const customerRenewToken = {
        query: "mutation customerAccessTokenRenew($customerAccessToken: String!) { customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {customerAccessToken { accessToken, expiresAt } userErrors { field, message } } }",
        variables: {
          customerAccessToken: user
        }
      }
      renewToken(customerRenewToken);
    }


  }, []);

  // console.log("user",user);

  const addVariantToCart = async (lineItemsToAdd) => {
    // const lineItemsToAdd = [{ variantId, quantity }];
    const checkoutId = myCheckout.id;
    // console.log(checkoutId)

    await client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      myCheckout = res;
      localStorage.setItem("myCheckout", JSON.stringify(myCheckout));
    });
  }

  const addVariantToCartOnClick = async (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity }];
    const checkoutId = myCheckout.id;
    // const checkoutId = checkoutId;

    await client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      myCheckout = res;
      localStorage.setItem("myCheckout", JSON.stringify(myCheckout));
      // console.log("after add product: ", myCheckout);
    });
  }

  const removeLineItemInCart = async (lineItemId) => {
    const checkoutId = myCheckout.id;

    await client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      myCheckout = res;
      localStorage.setItem("myCheckout", JSON.stringify(myCheckout));
    });
  }

  let config = {
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "11a6d4e6b256ff272df7f9d8407f370c"
    }
  }

  const renewToken = async (token) => {
    await axios.post("https://theodinapitest.myshopify.com/api/2022-01/graphql.json", JSON.stringify(token), config)
      .then(res => {
        // console.log("res : ", res);

      })
      .catch(err => {
        console.log("err :", err);
      })
  }

  return (
    <>
      <div id="preloader">
        <div className="spinner-border color-highlight" role="status"></div>
      </div>
      <div id="page">
        <ToastMessage>
          {/* <HeaderUtilities> */}
          {/* <FooterUtilities> */}
          <Collection>
            <Products>
              <AddProduct addVariantToCartOnClick={addVariantToCartOnClick} >
                <AddWistlist>
                  <OneProduct>
                    <Router>
                      {/* <Headerbar /> */}
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route>
                          {
                            user
                              ?
                              <Route>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/profile/signin" element={<Navigate to="/profile" />} />
                                <Route path="/profile/register" element={<Navigate to="/profile" />} />
                                <Route path="/profile/forgotpassword" element={<Navigate to="/profile" />} />
                              </Route>
                              :
                              <Route>
                                <Route path="/profile" element={<Navigate to="/profile/signin" />} />
                                <Route path="/profile/signin" element={<Signin />} />
                                <Route path="/profile/register" element={<Register />} />
                                <Route path="/profile/forgotpassword" element={<Forgotpass />} />
                              </Route>
                          }
                        </Route>

                        <Route path="/cart" element={<Cart removeLineItemInCart={removeLineItemInCart} />} />
                        <Route path="/Product/:id" element={<Product />} />
                        <Route path="/collections/:id" element={<NavPage />} />

                        {/* static page route start */}
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/shipping" element={<Shipping />} />
                        <Route path="/refund" element={<Refund />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* static page route end */}
                      </Routes>
                      {/* <Footer /> */}
                    </Router>
                  </OneProduct>
                </AddWistlist>
              </AddProduct>
            </Products>
          </Collection>
          {/* </FooterUtilities> */}
          {/* </HeaderUtilities> */}
        </ToastMessage>
      </div>
    </>
  );
}

export default App;

