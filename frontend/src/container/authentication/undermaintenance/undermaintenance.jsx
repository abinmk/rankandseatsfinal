import React, { FC, Fragment } from "react";
import { Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { DayCounter } from "../comingsoon/comingsoondata";

const Undermaintenance = () => {
	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="bg-white"></body>
				</Helmet>
			</HelmetProvider>
			<div className="error-bg error-basic-background" id="particles-js">
				<div className="error-page constract constract2 ">
					<div className="container">
						<div className="row justify-content-center align-items-center my-4">
							<Col xxl={7} xl={8} lg={9} className="rectangle error-authentication ">
								<div className="text-center authentication-style rectangle1">
									<h1 className="construction-heading">Under <span className="text-primary">Construction</span></h1>
									<p className="mt-4 mb-5 text-muted">The Page you're looking for is currently under maintenance and will be back soon. Subscribe to get notified</p>
									<DayCounter />
								</div>
							</Col>
						</div>
					</div>
				</div>

			</div>
		</Fragment>
	);
};

export default Undermaintenance;
