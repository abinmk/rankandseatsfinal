import { FC } from "react";
import React, { Fragment, useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

//IMAGES
import authentication2 from "../../../../assets/images/authentication/2.png";
import authentication3 from "../../../../assets/images/authentication/3.png";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Createcover2 = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);

	const [passwordshow2, setpasswordshow2] = useState(false);
	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="bg-white"></body>
				</Helmet>
			</HelmetProvider>
			<div className="row mx-0 authentication">
				<Col xxl={6} xl={7} lg={12} className="">
					<div className="row  mx-0 justify-content-center align-items-center h-100">
						<Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
							<div className="p-sm-5 p-0">
								<p className="h5 fw-semibold mb-2">Create Password</p>
								<p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
								<div className="row gy-3 mt-3">
									<Col xl={12} className="mt-0">
										<label htmlFor="create-password" className="form-label text-default">Password</label>
										<InputGroup>
											<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control form-control-lg" id="create-password" placeholder="Password" />
											<Button variant='' aria-label="button" type="button"
												onClick={() => setpasswordshow1(!passwordshow1)} className="btn btn-light bg-transparent">
												<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
										</InputGroup>
									</Col>
									<Col xl={12} className=" mb-3">
										<label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
										<InputGroup>
											<Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control form-control-lg" id="create-confirmpassword" placeholder="Password" />
											<Button variant='' aria-label="button" type="button"
												onClick={() => setpasswordshow2(!passwordshow2)} className="btn btn-light bg-transparent">
												<i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
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
									<Col xl={12} className="d-grid mt-2">
										<Button variant='' type="button" className="btn btn-lg btn-primary">Save Password</Button>
									</Col>
								</div>
								<div className="text-center">
									<p className="fs-12 text-muted mt-4">Back to home ? <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="text-primary">Click Here</Link></p>
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
											<h3 className="fw-semibold op-8 mb-3 text-fixed-white">Create Password</h3>
											<p className="mb-5 fw-normal fs-14 op-6"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
										</div>
									</div>
									<div className="authentication-footer text-end">
										<span className="text-fixed-white op-8"> Copyright © <span id="year">2024</span> <Link to="#" className=" text-fixed-white fw-semibold">Velvet</Link>.
											Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link to="#">
											<span className="fw-semibold text-secondary text-decoration-underline">Spruko</span>
										</Link> All
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
export default Createcover2;
