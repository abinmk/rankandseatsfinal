
import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Createbasic = () => {
	const [passwordshow1, setpasswordshow1] = useState(false);
	const [passwordshow2, setpasswordshow2] = useState(false);
	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page">
					<div className="container">
						<div className="row align-items-center justify-content-center authentication authentication-basic">
							<Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
								<div className="my-5 d-flex justify-content-center ">
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
										<img src={desktoplogo} alt="logo" className="desktop-logo" />
										<img src={desktopdark} alt="logo" className="desktop-dark" />
									</Link>
								</div>
								<Card className="custom-card rectangle2 ">
									<Card.Body className="p-sm-5 p-3 rectangle3">
										<p className="h5 fw-semibold mb-2 text-center">Create Password</p>
										<p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
										<div className="row gy-3">
											<Col xl={12}>
												<Form.Label htmlFor="create-password" className="text-default">Password</Form.Label>
												<InputGroup>
													<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="create-password" placeholder="Password" />
													<Button variant="" aria-label="button" type="button" className="btn btn-light bg-transparent"
														onClick={() => setpasswordshow1(!passwordshow1)}>
														<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
												</InputGroup>
											</Col>
											<Col xl={12} className="mb-2">
												<Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password</Form.Label>
												<InputGroup>
													<Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control form-control-lg" id="create-confirmpassword" placeholder="Password" />
													<Button variant='' aria-label="button" type="button" className="btn btn-light bg-transparent"
														onClick={() => setpasswordshow2(!passwordshow2)}>
														<i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i>
													</Button>
												</InputGroup>
											</Col>
											<Col xl={12} className=" d-grid mt-4">
												<Button aria-label="button" type="button" className="btn btn-primary btn-lg">Save Password</Button>
											</Col>
										</div>
										<div className="text-center">
											<p className="fs-12 text-muted mt-3 mb-0">Back to home ? <Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="text-primary">Click Here</Link></p>
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

export default Createbasic;
