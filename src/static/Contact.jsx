import React from 'react'
import { Link } from 'react-router-dom';

import '../assets/plugins/contact/form.css'

const Contact = () => {
	return (
		<>
			{/* <!-- Header --> */}
			<div className="header-bar header-fixed header-app header-bar-detached">
				<Link data-back-button to="/"><i className="bi bi-caret-left-fill font-11 color-theme ps-2"></i></Link>
				<Link to="/" className="header-title color-theme font-13">Back to Home</Link>
			</div>

			{/* <!-- Footer Bar--> */}
			{/* <div id="footer-bar" className="footer-bar">
			<a href="index.html" className="active-nav"><i className="bi bi-house-fill font-24"></i><span>Home</span></a>
			<a href="page-error-2.html"><i className="bi bi-card-checklist font-24"></i><span>My Orders</span></a>
			<a href="page-profile-2.html"><i className="bi bi-person-circle font-24"></i><span>Profile</span></a>

			<a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-main">
				<i className="bi bi-list font-24"></i><span>Categories</span></a>
		</div> */}

			{/* <!-- Main Sidebar--> */}
			{/* <div id="menu-main" data-menu-active="nav-homes" id="menu-start-full" style={{width: "70%"}}
			data-menu-load="menu-main.html" className="offcanvas offcanvas-start"></div> */}
			{/* <!-- Menu Highlights--> */}
			{/* <div id="menu-color" data-menu-load="menu-highlights.html" style={{height: "340px"}}
			className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
		</div> */}

			{/* <!-- Your Page Content Goes Here--> */}
			<div className="page-content header-clear-medium">

				<div id="validator-name"
					className="disabled bg-red-dark content rounded-sm shadow-xl text-center line-height-xs py-3 text-uppercase font-700">
					Name is required!</div>
				<div id="validator-mail1"
					className="disabled bg-red-dark content rounded-sm shadow-xl text-center line-height-xs py-3 text-uppercase font-700">
					Email Address is required!</div>
				<div id="validator-mail2"
					className="disabled bg-red-dark content rounded-sm shadow-xl text-center line-height-xs py-3 text-uppercase font-700">
					Invalid email Address!</div>
				<div id="validator-text"
					className="disabled bg-red-dark content rounded-sm shadow-xl text-center line-height-xs py-3 text-uppercase font-700">
					Please enter your message!</div>
				<div className="card card-style contact-form">
					<div className="content">
						<form action="php/contact.php" method="post" className="contactForm" id="contactForm">
							<fieldset>
								<div className="form-field form-name">
									<label className="contactNameField color-theme"
										htmlFor="contactNameField">Name:<span>(required)</span></label>
									<input type="text" name="contactNameField" className="round-small"
										id="contactNameField" />
								</div>
								<div className="form-field form-email">
									<label className="contactEmailField color-theme"
										htmlFor="contactEmailField">Email:<span>(required)</span></label>
									<input type="text" name="contactEmailField" className="round-small"
										id="contactEmailField" />
								</div>
								<div className="form-field form-text">
									<label className="contactMessageTextarea color-theme"
										htmlFor="contactMessageTextarea">Message:<span>(required)</span></label>
									<textarea name="contactMessageTextarea" className="round-small"
										id="contactMessageTextarea"></textarea>
								</div>
								<div className="form-button">
									<input type="submit" className="btn gradient-highlight shadow-bg shadow-bg-l text-uppercase font-700 btn-m btn-full rounded-s contactSubmitButton"
										placeholder="Send Message"
									//  data-formId="contactForm" 
									/>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
				<div className="form-sent disabled">
					<div className="card card-style gradient-green shadow-bg shadow-bg-m">
						<div className="rounded-m  me-n1 ms-n1 mb-n1 ">
							<h1 className="color-white text-center pt-4"><i
								className="bi bi-check-circle font-50 rounded-circle"></i></h1>
							<h2 className="color-white font-800 text-center pt-3">Message Sent</h2>
							<p className="color-white pb-4 text-center mt-n2 mb-0 opacity-70">We'll get back to you shortly.</p>
						</div>
					</div>
				</div>

				<div className="card card-style">
					<div className="content">
						<h5 className="color-highlight font-13 mb-n1">Come over for Coffee</h5>
						<p className="pb-0 mb-0">49 Macleay St, </p>
						<p className="pb-0">BRADBURY 2560</p>

						<h5 className="color-highlight font-13 mb-n1">Get in Touch</h5>
						<h2 className="font-700 pb-0">Contact Information</h2>
						<div className="list-group list-custom list-group-m rounded-xs list-group-flush">
							<a href="tel:0477837265" className="default-link list-group-item">
								<i className="bi color-green-dark bi-telephone-fill"></i>
								<div>Call Us</div>
								<span className="badge rounded-xl font-500 px-2 font-8 text-uppercase">Tap to Call</span>
							</a>
							<a href="mailto:info@theorchidpatio.com.au" className="default-link list-group-item">
								<i className="bi color-blue-dark bi-envelope-fill"></i>
								<div>Email Us</div>
								<span className="badge rounded-xl font-500 px-2 font-8 text-uppercase">Tap to Mail</span>
							</a>
							<a href="https://twitter.com/orchidpatio" className="default-link list-group-item">
								<i className="bi color-twitter bi-twitter"></i>
								<div>Follow Us</div>
								<span className="badge rounded-xl font-500 px-2 font-8 text-uppercase">Tap to Open</span>
							</a>
							<a href="https://www.facebook.com/orchidpatio/" className="default-link list-group-item">
								<i className="bi color-facebook bi-facebook"></i>
								<div>Like our Page</div>
								<span className="badge rounded-xl font-500 px-2 font-8 text-uppercase">Tap to Open</span>
							</a>
							<a href="https://www.instagram.com/orchidpatio" className="default-link list-group-item">
								<i className="bi color-instagram bi-instagram"></i>
								<div>Follow our Feed</div>
								<span className="badge rounded-xl font-500 px-2 font-8 text-uppercase">Tap to Open</span>
							</a>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;