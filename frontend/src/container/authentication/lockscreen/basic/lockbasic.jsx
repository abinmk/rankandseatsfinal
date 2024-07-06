
import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";
import faces15 from "../../../../assets/images/faces/15.jpg";

const Lockbasic = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);
	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container">
						<div className="row align-items-center justify-content-center authentication authentication-basic">
							<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
								<div className="my-5 d-flex justify-content-center">
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}>
										<img src={desktoplogo} alt="logo" className="desktop-logo" />
										<img src={desktopdark} alt="logo" className="desktop-dark" />
									</Link>
								</div>
								<Card className="custom-card rectangle2">
									<Card.Body className="p-5 rectangle3">
										<p className="h5 fw-semibold mb-2 text-center">Lock Screen</p>
										<p className="mb-3 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
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
												<InputGroup>
													<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="lockscreen-password" placeholder="password" />
													<Button className="btn btn-light bg-transparent" variant=""
														onClick={() => setpasswordshow1(!passwordshow1)}
														type="button" id="button-addon2"><i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
												</InputGroup>
												<div className="mt-3">
													<div className="form-check">
														<Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
														<label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
															Remember password ?
														</label>
													</div>
												</div>
											</Col>
											<Col xl={12} className="d-grid mt-2">
												<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="btn btn-primary">Unlock</Link>
											</Col>
										</div>
										<div className="text-center">
											<p className="fs-12 text-muted mt-3 mb-0">Try unlock with different methods <Link className="text-success" to="#"><u>Finger print</u></Link> / <Link className="text-success" to="#"><u>Face Id</u></Link></p>
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
export default Lockbasic;
