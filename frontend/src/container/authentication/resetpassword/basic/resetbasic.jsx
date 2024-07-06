
import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Resetbasic = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);
	const [passwordshow2, setpasswordshow2] = useState(false);
	const [passwordshow3, setpasswordshow3] = useState(false);
	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container">
						<div className="row justify-content-center align-items-center authentication authentication-basic h-100">
							<Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
								<div className="my-5 d-flex justify-content-center">
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}>
										<img src={desktoplogo} alt="logo" className="desktop-logo" />
										<img src={desktopdark} alt="logo" className="desktop-dark" />
									</Link>
								</div>
								<Card className="custom-card  rectangle2">
									<Card.Body className="p-sm-5 p-3  rectangle3">
										<p className="h5 fw-semibold mb-2 text-center">Reset Password</p>
										<p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
										<div className="row gy-3">
											<Col xl={12}>
												<label htmlFor="reset-password" className="form-label text-default">Current Password</label>
												<InputGroup>
													<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="reset-password" placeholder="current password" />
													<Button variant='' className="btn btn-light bg-transparent" type="button"
														onClick={() => setpasswordshow1(!passwordshow1)} id="button-addon2">
														<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
												</InputGroup>
											</Col>
											<Col xl={12}>
												<label htmlFor="reset-newpassword" className="form-label text-default">New Password</label>
												<InputGroup>
													<Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control form-control-lg" id="reset-newpassword" placeholder="new password" />
													<Button variant='' className="btn btn-light bg-transparent" type="button"
														onClick={() => setpasswordshow2(!passwordshow2)} id="button-addon21">
														<i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
												</InputGroup>
											</Col>
											<Col xl={12} className="mb-2">
												<label htmlFor="reset-confirmpassword" className="form-label text-default">Confirm Password</label>
												<InputGroup>
													<Form.Control type={(passwordshow3) ? "text" : "password"} className="form-control form-control-lg" id="reset-confirmpassword" placeholder="confirm password" />
													<Button variant='' className="btn btn-light bg-transparent" type="button"
														onClick={() => setpasswordshow3(!passwordshow3)} id="button-addon22">
														<i className={`${passwordshow3 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
												</InputGroup>
												<Col xl={12} className="d-grid mt-4">
													<Button variant='' className="btn btn-lg btn-primary">Create</Button>
													<label className="mt-1">
														Remembered your password ?<Link to={`${import.meta.env.BASE_URL}authentication/signin/signinbasic`} className="text-primary ms-2">Login</Link>
													</label>
												</Col>
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

export default Resetbasic;
