import React from 'react'
import { Link } from 'react-router-dom';

const Shipping = () => {
	return (
		<>
			{/* <!-- Header --> */}
			<div className="header-bar header-fixed header-app header-bar-detached">
				<Link data-back-button to="/"><i className="bi bi-caret-left-fill font-11 color-theme ps-2"></i></Link>
				<Link to="/" className="header-title color-theme font-13">Back to Home</Link>
			</div>

			{/* <!-- Footer Bar--> */}
			{/* <div id="footer-bar" className="footer-bar">
			<a href="index.html"><i className="bi bi-house-fill font-24"></i><span>Home</span></a>
			<a href="page-error-2.html"><i className="bi bi-card-checklist font-24"></i><span>My Orders</span></a>
			<a href="page-profile-2.html"><i className="bi bi-person-circle font-24"></i><span>Profile</span></a>

			<a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-main">
				<i className="bi bi-list font-24"></i><span>Categories</span></a>
		</div> */}

			{/* <!-- Main Sidebar--> */}
			{/* <div id="menu-main" data-menu-active="nav-homes" id="menu-start-full" style={{width: "70%"}}
			data-menu-load="menu-main.html" className="offcanvas offcanvas-start"></div> */}
			{/* <!-- Menu Highlights--> */}
			{/* <div id="menu-color" data-menu-load="menu-highlights.html" style={{height:"340px"}}
			className="offcanvas offcanvas-bottom offcanvas-detached rounded-m">
		</div> */}

			{/* <!-- Your Page Content Goes Here--> */}
			<div className="page-content header-clear-medium">

				<div className="card card-style contact-form">
					<div className="content">
						<div className="rte">
							<h2>Shipping Policy</h2>

							<div className="elementor-element elementor-element-9930726 color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="9930726" data-element_type="widget" data-widget_type="text-editor.default">
								<div className="elementor-widget-container">
									<div className="elementor-text-editor elementor-clearfix">
										<p><span style={{ color: "#000000" }}>Thank you for visiting and shopping at&nbsp;<a
											href="https://theorchidpatio.com.au/"
											style={{ color: "#000000" }}>www.theorchidpatio.com.au</a>. Following are the
											terms and conditions that constitute our Shipping Policy.</span></p>
										<p><span style={{ color: "#000000" }}><strong>Shipment processing time</strong></span>
										</p>
										<p><span style={{ color: "#000000" }}>All orders are processed within 2-3 business days.
											Orders are not shipped or delivered on weekends or holidays.</span></p>
										<p><span style={{ color: "#000000" }}>If we are experiencing a high volume of orders,
											shipments may be delayed by a few days. Please allow additional days in
											transit for delivery. If there will be a significant delay in shipment of
											your order, we will contact you via email or telephone.</span></p>
										<p><span style={{ color: "#000000" }}><strong>Shipping rates &amp; delivery
											estimates</strong></span></p>
										<p><span style={{ color: "#000000" }}>Shipping charges for your order will be calculated
											and displayed at checkout.</span></p>
										<p><span style={{ color: "#000000" }}>Delivery delays can occasionally occur.</span></p>
										<p><span style={{ color: "#000000" }}><strong>Shipment to P.O. Boxes</strong></span></p>
										<p><span style={{ color: "#000000" }}>Orchid Patio does not ship to P.O Boxes.</span></p>
										<p><span style={{ color: "#000000" }}><strong>Shipment confirmation &amp; Order
											tracking</strong></span></p>
										<p><span style={{ color: "#000000" }}>You will receive a Shipment Confirmation email once
											your order has shipped containing your tracking number(s). The tracking
											number will be active within 24 hours.</span></p>
										<p><span style={{ color: "#000000" }}><strong>Damages</strong></span></p>
										<p><span style={{ color: "#000000" }}>If any products are damaged or lost during
											shipping, please contact us within 7 days. Please contact us on&nbsp;<a
												href="mailto:info@orchidpatio.com.au"
												style={{ color: "#000000" }}>info@orchidpatio.com.au</a>&nbsp;or&nbsp;<a
													href="tel:0405741959" style={{ color: "#000000" }}>0405 741 959</a></span>
										</p>
										<p><span style={{ color: "#000000" }}>Please save all packaging materials and damaged
											goods before contacting us.</span></p>
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-101ad6fe color-scheme-inherit text-left elementor-widget elementor-widget-text-editor"
								data-id="101ad6fe" data-element_type="widget" data-widget_type="text-editor.default">
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

export default Shipping;