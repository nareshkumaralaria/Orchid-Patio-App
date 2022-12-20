import React from 'react'

const CalculateShipping = () => {
    return (
        <>
            <div className="row">
                <div style={{ background: "#fff" }} className="col-12">
                    <div className="content">

                        <div className="accordion border-0 accordion-s" id="accordion-group-6">
                            <div className="accordion-item">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#accordion6-2">
                                    <i className="bi bi-truck mx-2"></i>
                                    <span className="font-600 font-13">Calculate Shipping </span>
                                    <i className="bi bi-plus font-20"></i>
                                </button>
                                <div id="accordion6-2" className="accordion-collapse collapse mx-2" data-bs-parent="#accordion-group-6">
                                    <input placeholder="Pin Code" style={{ border: "thin solid #ccc", borderRadius: "0px" }} type="text"
                                        className="form-control" />
                                    <font className="coupon-text">Get Quote</font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculateShipping;