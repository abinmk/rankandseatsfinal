
import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Createcover1 = () => {
	const [passwordshow1, setpasswordshow1] = useState(false);
	const [passwordshow2, setpasswordshow2] = useState(false);
	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page">
					<div className="container">
						<div className="row justify-content-center">
							<Col xl={8} md={12} sm={10} className="">
								<Card className="custom-card rectangle2">
									<Card.Body className="p-0 ">
										<div className="row">
											<Col xl={6} md={6} className="pe-0">
												<div className="p-5">
													<p className="h5 fw-semibold mb-2 text-center">Create Password</p>
													<p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
													<div className="row gy-3">
														<Col xl={12}>
															<Form.Label htmlFor="create-password" className="form-label text-default">Password</Form.Label>
															<InputGroup>
																<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="create-password" placeholder="Password" />
																<Button variant='' aria-label="button" type="button" className="btn btn-light bg-transparent"
																	onClick={() => setpasswordshow1(!passwordshow1)}>
																	<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
															</InputGroup>
														</Col>
														<Col xl={12} className=" mb-2">
															<Form.Label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</Form.Label>
															<InputGroup>
																<Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control form-control-lg" id="create-confirmpassword" placeholder="Password" />
																<Button variant='' aria-label="button" className="btn btn-light bg-transparent"
																	onClick={() => setpasswordshow2(!passwordshow2)} type="button">
																	<i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
															</InputGroup>
														</Col>
														<Col xl={12} className="d-grid mt-4">
															<Button variant='' aria-label="button" type="button" className="btn btn-primary btn-lg">Save Password</Button>
														</Col>
													</div>
													<div className="text-center">
														<p className="fs-12 text-muted mt-3 mb-0">Back to home ? <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="text-primary">Click Here</Link></p>
													</div>
												</div>
											</Col>
											<Col xl={6} md={6} className="ps-0 text-fixed-white d-none d-md-block  ">
												<Card className="custom-card mb-0 cover-background  overflow-hidden rounded-end rounded-0">
													<div className="card-img-overlay d-flex  align-items-center p-0 rounded-0">
														<Card.Body className="card-body p-5 rectangle3">
															<div>
																<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}> <img src={desktopdark} alt="logo" className="desktop-dark"
																/></Link>
															</div>
															<h6 className="mt-4 fs-15 op-9  text-fixed-white">Create Password</h6>
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

export default Createcover1;

