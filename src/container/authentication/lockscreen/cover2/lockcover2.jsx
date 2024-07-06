
import React, { FC, Fragment, useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

//IMAGES
import authentication2 from "../../../../assets/images/authentication/2.png";
import authentication3 from "../../../../assets/images/authentication/3.png";
import faces15 from "../../../../assets/images/faces/15.jpg";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Lockcover2 = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);
	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="bg-white"></body>
				</Helmet>
			</HelmetProvider>
			<div className="row authentication mx-0">

				<Col xxl={6} xl={7} lg={12} className="">
					<div className="row mx-0 justify-content-center align-items-center h-100">
						<Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
							<div className="p-sm-5 p-0">
								<p className="h5 fw-semibold mb-2">Lock Screen</p>
								<p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
								<div className="d-flex align-items-center mb-4">
									<div className="lh-1">
										<span className="avatar avatar-md avatar-rounded">
											<img src={faces15} alt="" />
										</span>
									</div>
									<div className="ms-3">
										<p className="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
									</div>
								</div>
								<div className="row mx-0 gy-3">
									<Col xl={12} className="mb-3 px-0">
										<Form.Label htmlFor="lockscreen-password" className="form-label text-default">Password</Form.Label>
										<InputGroup>
											<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="lockscreen-password" placeholder="password" />
											<Button variant='' aria-label="button" className="btn btn-light bg-transparent" type="button"
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
									<Col xl={12} className="d-grid mt-2 px-0">
										<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="btn btn-lg btn-primary">Unlock</Link>
									</Col>
								</div>
								<div className="text-center">
									<p className="mb-0 fs-12 text-muted mt-4">Try unlock with different methods <a className="text-success" href="#"><u>Finger print</u></a> / <a className="text-success" href="#"><u>Face Id</u></a></p>
								</div>
							</div>
						</Col>
					</div>
				</Col>
				<Col xxl={6} xl={5} lg={5} className="d-xl-block d-none px-0">
					<div className="authentication-cover">
						<img src={authentication2} className="authentication1" alt="" />
						<img src={authentication3} className="authentication2" alt="" />
						<div className="">
							<div className="row justify-content-center g-0">
								<div className="col-xl-9">
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}> <img src={desktopdark} alt="" className="authentication-brand cover-dark-logo op-9" /></Link>
									<div className="text-fixed-white text-start  d-flex align-items-center">
										<div>
											<h3 className="fw-semibold op-8 mb-3 text-fixed-white">Lockscreen</h3>
											<p className="mb-5 fw-normal fs-14 op-6"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
										</div>
									</div>
									<div className="authentication-footer text-end">
										<span className="text-fixed-white op-8"> Copyright © <span id="year">2024</span> <a href="#" className=" text-fixed-white fw-semibold">Velvet</a>.
											Designed with <span className="bi bi-heart-fill text-danger"></span> by <a href="#">
											<span className="fw-semibold text-primary text-decoration-underline">Spruko</span>
										</a> All
											rights
											reserved
										</span>
									</div>

								</div>
							</div>
						</div>
					</div>
				</Col>

			</div>
		</Fragment>
	);

};
export default Lockcover2;
