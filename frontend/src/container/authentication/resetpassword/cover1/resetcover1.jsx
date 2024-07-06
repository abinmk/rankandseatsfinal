
import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES

import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Resetcover1 = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);
	const [passwordshow2, setpasswordshow2] = useState(false);
	const [passwordshow3, setpasswordshow3] = useState(false);
	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container">
						<div className="row  justify-content-center ">
							<Col xl={8} md={12} sm={10} className="">
								<Card className="custom-card  rectangle2">
									<Card.Body className="p-0 ">
										<Row className="">
											<Col xl={6} md={6} className="pe-0">
												<div className="p-5">
													<p className="h5 fw-semibold mb-2">Reset Password</p>
													<p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
													<div className="row gy-3 mt-3">
														<Col xl={12} className="mt-0">
															<label htmlFor="reset-password" className="form-label text-default">Current Password</label>
															<InputGroup>
																<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="reset-password" placeholder="current password" />
																<Button variant='' className="btn btn-light bg-transparent"
																	onClick={() => setpasswordshow1(!passwordshow1)} type="button" id="button-addon2">
																	<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
															</InputGroup>
														</Col>
														<Col xl={12}>
															<label htmlFor="reset-newpassword" className="form-label text-default">New Password</label>
															<InputGroup>
																<Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control form-control-lg" id="reset-newpassword" placeholder="new password" />
																<Button variant='' className="btn btn-light bg-transparent"
																	onClick={() => setpasswordshow2(!passwordshow2)} type="button" id="button-addon21">
																	<i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
															</InputGroup>
														</Col>
														<Col xl={12} className="mb-3">
															<label htmlFor="reset-confirmpassword" className="form-label text-default">Confirm Password</label>
															<InputGroup>
																<Form.Control type={(passwordshow3) ? "text" : "password"} className="form-control form-control-lg" id="reset-confirmpassword" placeholder="confirm password" />
																<Button variant='' className="btn btn-light bg-transparent"
																	onClick={() => setpasswordshow3(!passwordshow3)} type="button" id="button-addon22">
																	<i className={`${passwordshow3 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
															</InputGroup>
														</Col>
														<Col xl={12} className="d-grid mt-2">
															<Button variant='' className="btn btn-lg btn-primary">Create</Button>
															<label className="mt-1">
																Remembered your password ?<Link to={`${import.meta.env.BASE_URL}authentication/signin/signinbasic`} className="text-primary ms-2 me-2">Login</Link>
															</label>
														</Col>
													</div>
												</div>
											</Col>
											<Col xl={6} md={6} className="ps-0 text-fixed-white d-none d-md-block  ">
												<Card className="custom-card mb-0 cover-background overflow-hidden rounded-end rounded-0">
													<div className="card-img-overlay d-flex  align-items-center p-0 rounded-0">
														<Card.Body className="p-5 rectangle3">
															<div>
																<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}> <img src={desktopdark} alt="logo" className="desktop-dark" /></Link>
															</div>
															<h6 className="mt-4 fs-15 op-9  text-fixed-white">Reset Password</h6>
															<div className="d-flex mt-3">
																<p className="mb-0 fw-normal fs-14 op-7  text-fixed-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis.
																	Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
															</div>
														</Card.Body>
													</div>
												</Card>
											</Col>
										</Row>
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
export default Resetcover1;
