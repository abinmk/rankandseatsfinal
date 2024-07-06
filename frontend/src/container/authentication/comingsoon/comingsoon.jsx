import React, { FC, Fragment } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { DayCounter } from "./comingsoondata";

const Comingsoon = () => {
	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="bg-white"></body>
				</Helmet>
			</HelmetProvider>
			<div className="error-bg error-basic-background" id="particles-js">
				<div className="error-page constract constract3 ">
					<div className="container">
						<div className="row  mx-0 align-items-center justify-content-center my-3">
							<Col xxl={7} xl={8} lg={9} className="rectangle error-authentication ">
								<div className="text-center authentication-style rectangle1">
									<h1 className="construction-heading">Coming Soon</h1>
									<p className="mt-4 mb-4 text-muted">Our website is almost Done, mean while enter your email id to get latest updates and notifications about the website.</p>
									<div className="input-group mb-4">
										<Form.Control type="email" className="form-control-lg" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
										<Button variant='' className="btn btn-primary" type="button" id="button-addon2">Subscribe</Button>
									</div>
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

export default Comingsoon;
