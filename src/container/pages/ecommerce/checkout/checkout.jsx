import React, { FC, Fragment } from "react";
import { Basicwizard } from "./checkoutdata";

const Checkout = () => {

	return (

		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-xl-9">
						<div className="card custom-card">
							<div className="card-body p-0 product-checkout">
								<Basicwizard />
							</div>
						</div>
					</div>
					<div className="col-xl-3">
						<div className="card custom-card">
							<div className="card-header">
								<div className="card-title me-1">Order Details</div><span className="badge bg-success-transparent rounded-pill">03</span>
							</div>
							<div className="card-body p-0">
								<div className="p-3 border-bottom border-block-end-dashed">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="fw-semibold fs-14">Products</div>
										<div className="fw-semibold fs-14">Quantity</div>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="text-muted fs-15"> Hoodie</div>
										<div className="fw-semibold fs-15n ">1</div>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="text-muted  fs-14 ">T-shirt</div>
										<div className="fw-semibold fs-14">2</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div className="text-muted  fs-14 ">Jacket</div>
										<div className="fw-semibold fs-14">4</div>
									</div>
								</div>
								<div className="p-3 border-bottom border-block-end-dashed">
									<div className="d-flex align-items-center justify-content-between flex-wrap">
										<div className="fs-12 fw-semibold bg-primary-transparent p-2 rounded">SPRUKO25</div>
										<div className="text-success">COUPON APPLIED</div>
									</div>
								</div>
								<div className="p-3 border-bottom border-block-end-dashed">
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="text-muted op-7">Sub Total</div>
										<div className="fw-semibold fs-14">$318</div>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="text-muted op-7">Discount</div>
										<div className="fw-semibold fs-14 text-success">10% - $31.8</div>
									</div>
									<div className="d-flex align-items-center justify-content-between mb-3">
										<div className="text-muted op-7">Delivery Charges</div>
										<div className="fw-semibold fs-14 text-danger">- $29</div>
									</div>
									<div className="d-flex align-items-center justify-content-between">
										<div className="text-muted op-7">Service Tax (18%)</div>
										<div className="fw-semibold fs-14">- $45.29</div>
									</div>
								</div>
								<div className="p-3">
									<div className="d-flex align-items-center justify-content-between">
										<div className="fs-15">Total :</div>
										<div className="fw-semibold fs-16 text-dark"> $1,387</div>
									</div>
								</div>
								<div className="p-2 m-2 bg-success-transparent">
									<div className="d-flex  justify-content-between  align-items-center">
										<p className="fs-12 mb-0 text-success">Your total savings amount</p>
										<div className="fw-semibold fs-16 text-Success"> $687</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	);
};

export default Checkout;
