import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Cover1 = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);

	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container">
						<div className="row justify-content-center mt-3">
							<Col xl={8} md={12} sm={10} className="">
								<Card className="custom-card  rectangle2">
									<Card.Body className=" p-0 ">
										<div className="row">
											<Col xl={6} md={6} className="pe-sm-0">
												<div className="p-sm-5 p-3">
													<p className="h4 fw-semibold mb-2">Sign In</p>
													<p className="mb-3 text-muted op-7 fw-normal">Welcome back Jhon !</p>
													<div className="row gy-3 mt-3">
														<Col xl={12} className="mt-0">
															<Form.Label htmlFor="signin-username" className="form-label text-default">User Name</Form.Label>
															<Form.Control type="text" className="form-control form-control-lg" id="signin-username" placeholder="user name" />
														</Col>
														<Col xl={12} className="mb-3">
															<Form.Label htmlFor="signin-password" className="form-label text-default d-block">Password<Link to={`${import.meta.env.BASE_URL}authentication/resetpassword/resetcover1`} className="float-end text-primary">Forget password ?</Link></Form.Label>
															<InputGroup>
																<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="signin-password" placeholder="password" />
																<Button variant='' className="btn btn-light bg-transparent" type="button"
																	onClick={() => setpasswordshow1(!passwordshow1)} id="button-addon2">
																	<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
															</InputGroup>
															<div className="mt-2">
																<div className="form-check">
																	<Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
																	<label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
																		Remember password ?
																	</label>
																</div>
															</div>
														</Col>
														<Col xl={12} className="d-grid mt-3">
															<Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="btn btn-lg btn-primary">Sign In</Link>
														</Col>
													</div>
													<div className="text-center my-4 authentication-barrier">
														<span>OR</span>
													</div>
													<div className="btn-list text-center">
														<Button variant='' className="btn btn-light "><svg className="google-svg" xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>Sign In with google</Button>
														<Button variant='' className="btn btn-icon btn-light btn-wave waves-effect waves-light">
															<i className="ri-facebook-line fw-bold "></i>
														</Button>
														<Button variant='' className="btn btn-icon btn-light btn-wave waves-effect waves-light">
															<i className="ri-twitter-line fw-bold "></i>
														</Button>
													</div>
													<div className="text-center ">
														<p className="fs-12 text-muted mt-4 mb-0">Dont have an account? <Link to={`${import.meta.env.BASE_URL}authentication/signup/signupcover1/`} className="text-primary">Sign Up</Link></p>
													</div>
												</div>
											</Col>
											<Col xl={6} md={6} className="ps-0 text-fixed-white rounded-0 d-none d-md-block  ">
												<Card className="custom-card mb-0 cover-background overflow-hidden rounded-end rounded-0">
													<div className="card-img-overlay d-flex  align-items-center p-0 rounded-0">
														<Card.Body className=" p-5 rectangle3">
															<div>
																<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}> <img src={desktopdark} alt="logo" className="desktop-dark" /></Link>
															</div>
															<h6 className="mt-4 fs-15 op-9  text-fixed-white">Sign In</h6>
															<div className="d-flex mt-3">
																<p className="mb-0 fw-normal fs-14 op-7  text-fixed-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis.
																	Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
															</div>
														</Card.Body>
													</div>
												</Card>
											</Col>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Cover1;
