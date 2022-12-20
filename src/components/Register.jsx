import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toastMessageContext } from '../context/ToastMessage';
import Navigation from './Navigation';

//Orchid Patio Logo
import OrchidPatioLogo from '../assets/images/Orchid-Patio-Logo.png'


const Register = () => {

    const navigate = useNavigate();
    let { handleToastMessage } = useContext(toastMessageContext);

    const [myCheckout, setMyCheckout] = useState(JSON.parse(localStorage.getItem("myCheckout")));
    const [user, setUser] = useState();

    const initialFormValues = {
        query: "mutation customerCreate($input: CustomerCreateInput!) { customerCreate(input: $input) { customer { firstName lastName, email, phone, acceptsMarketing } customerUserErrors { field, message, code } } }",
        variables: {
            input: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                acceptsMarketing: true
            }
        }
    }

    let config = {
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": "11a6d4e6b256ff272df7f9d8407f370c"
        }
    }

    const [formValues, setformValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({});

    function handleFormValues(e) {
        let x = { ...formValues };
        const { name, value } = e.target;
        x.variables.input[name] = value;
        setformValues(x);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate(formValues.variables.input);
        if (isValid) {
            register();
        }
    }

    const register = async () => {
        await axios.post("https://theodinapitest.myshopify.com/api/2022-01/graphql.json", JSON.stringify(formValues), config)
            .then(res => {
                // console.log("res : ", res);
                if (res.data.data.customerCreate.customerUserErrors.length === 0) {
                    handleToastMessage("Registration successfully", "green");
                    navigate("/profile");
                    localStorage.setItem("OrchidUser", JSON.stringify(res.data.data.customerCreate.customer.email));
                } else {
                    // console.log(res.data.data.customerCreate.customerUserErrors[0].message);
                    handleToastMessage(res.data.data.customerCreate.customerUserErrors[0].message, "red");
                }
                if (res.data.data.errors) {
                    // console.log(res.data.data.errors[0].message)
                    handleToastMessage(res.data.data.errors[0].message, "red");
                }
            })
            .catch(err => {
                // console.log("err :", err);
                // alert("🤒 Opps! \n Network Error \n Try After Sometime");
            })
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let isValid = true;
        if (!values.firstName) {
            errors.firstName = "first Name is required";
            isValid = false;
        }
        else if (!isNaN(values.firstName)) {
            errors.firstName = "Only characters are allowed";
            isValid = false;
        }
        if (!values.lastName) {
            errors.lastName = "last Name is required";
            isValid = false;
        }
        else if (!isNaN(values.lastName)) {
            errors.lastName = "Only characters are allowed";
            isValid = false;
        }

        if (!values.email) {
            errors.email = "email is required";
            isValid = false;
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }
        if (!values.password) {
            errors.password = "password is required";
            isValid = false;
        }
        if (!values.phone) {
            errors.phone = "Phone no. is required";
            isValid = false;
        }

        setFormErrors(errors)
        return isValid;
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
            <div className="card admin-login-card mb-0 bg-white shadow-0 mx-0 rounded-0 full-height vh-100">
                <div className="">
                    <div className="card card-style overflow-auto" style={{ boxShadow: "none", paddingTop: "130px" }}>
                        <div className="content" style={{ paddingBottom: "60px" }}>
                            <h1 className="text-center font-800 font-30 mb-2">Register</h1>
                            <p className="text-center font-13 mt-n2 mb-3">
                                Enter your Credentials
                            </p>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-custom form-label form-icon mb-3">
                                    <i className="bi bi-person-circle font-14"></i>
                                    <input
                                        onChange={handleFormValues}
                                        value={formValues.variables.input.firstName}
                                        name="firstName"
                                        type="text"
                                        className="form-control rounded-xs"
                                        id="c1"
                                        placeholder="First Name"
                                    />
                                    <label htmlFor="c1" className="color-theme">
                                        First Name
                                    </label>
                                    {
                                        formErrors.firstName === undefined ? <span>(required)</span> : <span className="text-danger font-weight-bold">{formErrors.firstName}</span>
                                    }
                                </div>
                                <div className="form-custom form-label form-icon mb-3">
                                    <i className="bi bi-person-circle font-14"></i>
                                    <input
                                        onChange={handleFormValues}
                                        value={formValues.variables.input.lastName}
                                        name="lastName"
                                        type="text"
                                        className="form-control rounded-xs"
                                        id="c3"
                                        placeholder="Last Name"
                                    />
                                    <label htmlFor="c3" className="color-theme">
                                        Last Name
                                    </label>
                                    {
                                        formErrors.lastName === undefined ? <span>(required)</span> : <span className="text-danger font-weight-bold">{formErrors.lastName}</span>
                                    }
                                </div>
                                <div className="form-custom form-label form-icon mb-3">
                                    <i className="bi bi-envelope-fill font-14"></i>
                                    <input
                                        onChange={handleFormValues}
                                        value={formValues.variables.input.email}
                                        name="email"
                                        type="text"
                                        className="form-control rounded-xs"
                                        id="c4"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="c4" className="color-theme">
                                        Email
                                    </label>
                                    {
                                        formErrors.email === undefined ? <span>(required)</span> : <span className="text-danger font-weight-bold">{formErrors.email}</span>
                                    }
                                </div>
                                <div className="form-custom form-label form-icon mb-3">
                                    <i className="bi bi-telephone-fill font-14"></i>
                                    <input
                                        onChange={handleFormValues}
                                        value={formValues.variables.input.phone}
                                        name="phone"
                                        type="text"
                                        className="form-control rounded-xs"
                                        id="c5"
                                        placeholder="Phone"
                                    />
                                    <label htmlFor="c5" className="color-theme">
                                        Phone
                                    </label>
                                    {
                                        formErrors.phone === undefined ? <span>(required)</span> : <span className="text-danger font-weight-bold">{formErrors.phone}</span>
                                    }
                                </div>
                                <div className="form-custom form-label form-icon mb-3">
                                    <i className="bi bi-asterisk font-12"></i>
                                    <input
                                        onChange={handleFormValues}
                                        value={formValues.variables.input.password}
                                        name="password"
                                        type="password"
                                        className="form-control rounded-xs"
                                        id="c2"
                                        placeholder="Password"
                                        autoComplete="off"
                                    />
                                    <label htmlFor="c2" className="color-theme">
                                        Password
                                    </label>
                                    {
                                        formErrors.password === undefined ? <span>(required)</span> : <span className="text-danger font-weight-bold">{formErrors.password}</span>
                                    }
                                </div>
                                <button
                                    type="submit"
                                    className="btn rounded-sm btn-m gradient-blue text-uppercase mt-4 mb-4 btn-full shadow-bg shadow-bg-s w-100"
                                >
                                    Register
                                </button>
                            </form>
                            <Link to="/profile/signin"
                                className="btn rounded-sm btn-m gradient-dark text-uppercase mt-4 mb-3 btn-full shadow-bg shadow-bg-s w-100"
                            >
                                Sign In
                            </Link>
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

export default Register;