
import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import faces15 from "../../../../assets/images/faces/15.jpg";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Lockcover1 = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);

	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-8 col-md-12 col-sm-10 ">
								<Card className="card custom-card  rectangle2">
									<Card.Body className="p-0 ">
										<div className="row ">
											<div className="col-xl-6 col-md-6 pe-0">
												<div className="">
													<div className="card-body p-5">
														<p className="h5 fw-semibold mb-2">Lock Screen</p>
														<p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
														<div className="d-flex align-items-center mb-3">
															<div className="lh-1">
																<span className="avatar avatar-md avatar-rounded">
																	<img src={faces15} alt="" />
																</span>
															</div>
															<div className="ms-3">
																<p className="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
															</div>
														</div>
														<div className="row gy-3">
															<Col xl={12} className="mb-2">
																<label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
																<div className="input-group">
																	<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="lockscreen-password" placeholder="password" />
																	<Button variant='' className="btn btn-light bg-transparent"
																		onClick={() => setpasswordshow1(!passwordshow1)} type="button" id="button-addon2">
																		<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i>
																	</Button>
																</div>
																<div className="mt-3">
																	<Form.Check label="Remember password ?" />
																</div>
															</Col>
															<Col xl={12} className="d-grid mt-2">
																<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="btn btn-primary btn-lg">Unlock</Link>
															</Col>
														</div>
														<div className="text-center">
															<p className="fs-12 text-muted mt-3 mb-0">Try unlock with different methods <Link className="text-success" to="#"><u>Finger print</u></Link> / <Link className="text-success" to="#"><u>Face Id</u></Link></p>
														</div>
													</div>
												</div>
											</div>
											<Col xl={6} md={6} className=" ps-0 text-fixed-white d-none d-md-block  ">
												<div className="card custom-card mb-0 cover-background overflow-hidden rounded-end rounded-0">
													<div className="card-img-overlay d-flex  align-items-center p-0 rounded-0">
														<div className="card-body p-5 rectangle3">
															<div>
																<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}> <img src={desktopdark} alt="logo" className="desktop-dark" /></Link>
															</div>
															<h6 className="mt-4 fs-15 op-9  text-fixed-white">Lock Screen</h6>
															<div className="d-flex mt-3">
																<p className="mb-0 fw-normal fs-14 op-7  text-fixed-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis.
																	Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
															</div>
														</div>
													</div>
												</div>
											</Col>
										</div>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);

};
export default Lockcover1;
