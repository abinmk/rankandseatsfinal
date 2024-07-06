import React, { FC, Fragment } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

//IMAGES
import authentication2 from "../../../../assets/images/authentication/2.png";
import authentication3 from "../../../../assets/images/authentication/3.png";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Signupcover2 = () => {

	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="bg-white"></body>
				</Helmet>
			</HelmetProvider>
			<Row className="mx-0 authentication">
				<Col xxl={6} xl={7} lg={12} className="">
					<div className="row mx-0 justify-content-center align-items-center h-100">
						<Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
							<div className="p-sm-5 p-0">
								<p className="h5 fw-semibold mb-2">Sign Up</p>
								<p className="mb-3 text-muted op-7 fw-normal">Welcome & Join us by creating a free account !</p>
								<Row className="gy-3">
									<div className="row gy-3 mt-3">
										<Col xl={12}>
											<label htmlFor="signup-firstname" className="form-label text-default">Full Name</label>
											<Form.Control type="text" className="form-control form-control-lg" id="signup-firstname" placeholder="first name" />
										</Col>
										<Col xl={12}>
											<label htmlFor="signup-lastname" className="form-label text-default">Email</label>
											<Form.Control type="email" className="form-control form-control-lg" id="signup-lastname" placeholder="email" />
										</Col>
										<Col xl={12} className="d-grid mt-4">
											<Button variant="" className="btn btn-lg btn-primary">Create Account</Button>
										</Col>
									</div>
									<div className="text-center my-4 authentication-barrier">
										<span>OR</span>
									</div>
									<div className="btn-list text-center">
										<Button variant="" className="btn btn-light"><svg className="google-svg" xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>Sign up with google</Button>
										<Button variant="" className="btn btn-icon btn-light btn-wave waves-effect waves-light">
											<i className="ri-facebook-line fw-bold "></i>
										</Button>
										<Button variant="" className="btn btn-icon btn-light btn-wave waves-effect waves-light">
											<i className="ri-twitter-line fw-bold "></i>
										</Button>
									</div>
									<div className="text-center">
										<p className="fs-12 text-muted mt-4">Already have an account? <Link to={`${import.meta.env.BASE_URL}authentication/signin/signincover1/`} className="text-primary  d-inline-block">Sign In</Link></p>
									</div>
								</Row>
							</div>
						</Col>
					</div>
				</Col>
				<Col xxl={6} xl={5} lg={5} className=" d-xl-block d-none px-0">
					<div className="authentication-cover">
						<img src={authentication2} className="authentication1" alt="" />
						<img src={authentication3} className="authentication2" alt="" />
						<div className="">
							<div className="row justify-content-center g-0">
								<Col xl={9} className="">
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}> <img src={desktopdark} alt="" className="authentication-brand cover-dark-logo op-9" /></Link>
									<div className="text-fixed-white text-start d-flex align-items-center">
										<div>
											<h3 className="fw-semibold op-8 mb-3  text-fixed-white">Sign Up</h3>
											<p className="mb-5 fw-normal fs-14 op-6"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
										</div>
									</div>
									<div className="authentication-footer text-end">
										<span className="text-fixed-white op-8"> Copyright © <span id="year">2024</span> <Link to="#" className=" text-fixed-white fw-semibold">Velvet</Link>.
											Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link to="#">
											<span className="fw-semibold text-primary text-decoration-underline">Spruko</span>
										</Link> All
											rights
											reserved
										</span>
									</div>

								</Col>
							</div>
						</div>
					</div>
				</Col>

			</Row>
		</Fragment>
	);
};

export default Signupcover2;
