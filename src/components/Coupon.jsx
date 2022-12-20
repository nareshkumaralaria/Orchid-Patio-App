import React from 'react'

const Coupon = () => {
    return (
        <>
            <div className="row">
                <div style={{ background: "#fff" }} className="col-12">
                    <div className="content">

                        <div className="accordion border-0 accordion-s" id="accordion-group-6">
                            <div className="accordion-item">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#accordion6-1">
                                    <i className="bi bi-tag mx-2"></i>
                                    <span className="font-600 font-13">Apply Coupon </span>
                                    <i className="bi bi-plus font-20"></i>
                                </button>
                                <div id="accordion6-1" className="accordion-collapse collapse mx-2" data-bs-parent="#accordion-group-6">
                                    <input placeholder="Coupon Code" style={{ border: "thin solid #ccc", borderRadius: "0px" }} type="text"
                                        className="form-control" />
                                    <font className="coupon-text">check</font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coupon;