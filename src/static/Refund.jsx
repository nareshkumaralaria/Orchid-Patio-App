import React from 'react'
import { Link } from 'react-router-dom'

const Refund = () => {
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

				<div className="card card-style contact-form">
					<div className="content">
						<div className="rte">
							<h2>Refund Policy</h2>
							<div className="elementor-element elementor-element-d04f84e color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="d04f84e" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<p className="FirstParagraph"><span lang="EN-US" style={{ color: "#000000" }}>This Refund
											Policy (“Policy”) applies to the following purchases made on
											www.theorchidpatio.com.au</span></p>
										<p><span style={{ color: "#000000" }}><b>General</b></span></p>
										<ul>
											<li><span style={{ color: "#000000" }}>We do not offer refunds, repairs and
												replacements on the terms set out in this Refund Policy
												(“Policy”).</span></li>
											<li><span style={{ color: "#000000" }}>Before making a purchase, please read this
												Policy so that you can understand your rights and what you can expect
												from us if you are not satisfied with your order.</span></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-35fc8e11 color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="35fc8e11" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<span style={{ color: "#000000" }}><b>Cancellation and Change of Mind</b></span>
										<ul>
											<li><span style={{ color: "#000000" }}>We do not offer any refund if you change your
												mind, or find the same product or service cheaper elsewhere.</span></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-4ef21195 color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="4ef21195" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<p><span style={{ color: "#000000" }}><b>Products Damaged During Delivery</b></span></p>
										<ul>
											<li>
												<span style={{ color: "#000000" }}>In the event that the product you ordered has
													been damaged during delivery:</span>
												<ol>
													<li><span style={{ color: "#000000" }}>Please contact us as soon as possible
														to determine if were claim a refund for you.</span></li>
													<li><span style={{ color: "#000000" }}>No refunds are offered for damaged
														products although we take care when packaging our
														products.</span></li>
												</ol>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-4971c0a1 color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="4971c0a1" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<p><span style={{ color: "#000000" }}><b>Exceptions</b></span></p>
										<ul>
											<li><span style={{ color: "#000000" }}>We may provide a replacement or refund for a
												product or service purchased by you solely based on the manager’s
												discretion.</span></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-1a066697 color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="1a066697" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<p><span style={{ color: "#000000" }}><b>Response Time</b></span></p>
										<ul>
											<li><span style={{ color: "#000000" }}>We aim to process any requests for
												replacements or refunds within 7 days of receipt.</span></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-4da3cccf color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="4da3cccf" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<p><span style={{ color: "#000000" }}><b>Contact Us</b></span></p>
										<ul>
											<li><span style={{ color: "#000000" }}>If you wish to speak to us about this Policy
												or about any refund, repairs or replacements, please contact us at:
												info@theorchidpatio.com.au or 02 9189 1500.</span></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-3be1a93b color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="3be1a93b" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<p><span style={{ color: "#000000" }}><strong>Last Updated&nbsp;July 2,
											2021</strong></span></p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>




			</div>
		</>
	)
}

export default Refund