import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

const Error500 = () => {
	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<canvas className="error-basic-background"></canvas>
				<div className="error-page  ">
					<div className="container">
						<div className="row align-items-center justify-content-center mx-2">
							<div className="col-xxl-7 col-xl-8 col-lg-9 rectangle error-authentication ">
								<div className="text-center authentication-style rectangle1">
									<div className="lh-1 mb-3 d-inline-table">
										<span className="text-info text-large fw-bold">5</span>
										<span className="text-success text-large fw-bold">0</span>
										<span className="text-warning text-large fw-bold">0</span>
									</div>
									<span className="d-block fs-15 mb-3">Oops &#128557;,The page you are looking for is not available.</span>
									<p className="text-muted fw-normal">
										We are sorry for the inconvenience,The page you are trying to access has been removed or never been existed.
									</p>

									<Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="btn btn-primary mt-3"><i className="ri-arrow-left-line align-middle me-1 d-inline-block"></i>BACK TO HOME</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</Fragment>
	);
};
export default Error500;
