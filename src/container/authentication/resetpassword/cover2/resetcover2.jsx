import { FC, Fragment, useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

//IMAGES
import authentication2 from "../../../../assets/images/authentication/2.png";
import authentication3 from "../../../../assets/images/authentication/3.png";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Resetcover2 = () => {

	const [passwordshow1, setpasswordshow1] = useState(false);
	const [passwordshow2, setpasswordshow2] = useState(false);
	const [passwordshow3, setpasswordshow3] = useState(false);
	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="bg-white"></body>
				</Helmet>
			</HelmetProvider>
			<div className="row mx-0 authentication">
				<Col xxl={6} xl={7} lg={12} className="">
					<div className="row mx-0  justify-content-center align-items-center h-100">
						<Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
							<div className="p-sm-5 p-0">
								<p className="h5 fw-semibold mb-2">Reset Password</p>
								<p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
								<div className="row gy-3 mt-3">
									<Col xl={12} className="mt-0">
										<label htmlFor="reset-password" className="form-label text-default">Current Password</label>
										<InputGroup>
											<Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control-lg" id="reset-password" placeholder="current password" />
											<Button variant='' aria-label="button" className="btn btn-light bg-transparent"
												onClick={() => setpasswordshow1(!passwordshow1)} type="button" id="button-addon2">
												<i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
										</InputGroup>
									</Col>
									<Col xl={12} className="">
										<label htmlFor="reset-newpassword" className="form-label text-default">New Password</label>
										<InputGroup>
											<Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control-lg" id="reset-newpassword" placeholder="new password" />
											<Button variant='' aria-label="button" className="btn btn-light bg-transparent"
												onClick={() => setpasswordshow2(!passwordshow2)} type="button" id="button-addon21">
												<i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
										</InputGroup>
									</Col>
									<Col xl={12} className="mb-3">
										<label htmlFor="reset-confirmpassword" className="form-label text-default">Confirm Password</label>
										<InputGroup>
											<Form.Control type={(passwordshow3) ? "text" : "password"} className="form-control-lg" id="reset-confirmpassword" placeholder="confirm password" />
											<Button variant='' aria-label="button" className="btn btn-light bg-transparent"
												onClick={() => setpasswordshow3(!passwordshow3)} type="button" id="button-addon22">
												<i className={`${passwordshow3 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Button>
										</InputGroup>
									</Col>
									<Col xl={12} className="d-grid mt-2">
										<Button variant='' type="button" className="btn btn-lg btn-primary">Create</Button>
										<label className="mt-1">
											Remembered your password ?<Link to={`${import.meta.env.BASE_URL}authentication/signin/signinbasic`} className="text-primary ms-2 d-inline-block">Login</Link>
										</label>
									</Col>
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
								<Col xl={9}>
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}> <img src={desktopdark} alt="" className="authentication-brand cover-dark-logo op-9" /></Link>
									<div className="text-fixed-white text-start d-flex align-items-center">
										<div>
											<h3 className="fw-semibold op-8 mb-3  text-fixed-white">Reset Password</h3>
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

			</div>
		</Fragment>
	);

};

export default Resetcover2;
