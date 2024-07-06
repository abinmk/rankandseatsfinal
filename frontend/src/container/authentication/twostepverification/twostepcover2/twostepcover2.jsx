
import React, { FC, Fragment, useCallback, useRef } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

//IMAGES
import authentication2 from "../../../../assets/images/authentication/2.png";
import authentication3 from "../../../../assets/images/authentication/3.png";
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Twostepcover2 = () => {
	const inputRefs = {
		one: useRef(null),
		two: useRef(null),
		three: useRef(null),
		four: useRef(null),
	};

	const handleInputChange = useCallback((currentId, nextId) => {
		const currentInput = inputRefs[currentId].current;

		if (currentInput && currentInput.value.length === 1) {
			const nextInput = inputRefs[nextId] ? inputRefs[nextId].current : null;

			if (nextInput) {
				nextInput.focus();
			}
		}
	}, [inputRefs]);
	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="bg-white"></body>
				</Helmet>
			</HelmetProvider>
			<Helmet>
				<body className="bg-white"></body>
			</Helmet>
			<div className="row mx-0 authentication">

				<Col xxl={6} xl={7} lg={12} className="">
					<div className="row  mx-0 justify-content-center align-items-center h-100">
						<Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
							<div className="p-sm-5 p-3">
								<p className="h5 fw-semibold mb-1">Verify Your Account</p>
								<p className="mb-4 text-muted op-7 fw-normal">Enter the 4 digit code sent to the registered email Id.</p>
								<div className="row mx-0">
									<Col xl={12} className=" mb-4 ps-0">
										<div className="row">
											<div className="col-3">
												<Form.Control type="text" className="form-control-lg text-center" id="one"
													maxLength={1}
													onChange={() => handleInputChange("one", "two")}
													ref={inputRefs.one} />
											</div>
											<div className="col-3">
												<Form.Control type="text" className="form-control-lg text-center" id="two"
													maxLength={1}
													onChange={() => handleInputChange("two", "three")}
													ref={inputRefs.two} />
											</div>
											<div className="col-3">
												<Form.Control type="text" className="form-control-lg text-center" id="three"
													maxLength={1}
													onChange={() => handleInputChange("three", "four")}
													ref={inputRefs.three} />
											</div>
											<div className="col-3">
												<Form.Control type="text" className="form-control-lg text-center" id="four"
													maxLength={1}
													onChange={() => handleInputChange("four", "nextInputId")}
													ref={inputRefs.four} />
											</div>
										</div>
										<div className="mt-2 mb-0 d-flex">
											<Form.Check className="" type="checkbox" defaultValue="" id="defaultCheck1" />
											<Form.Label className="form-check-label ms-1" htmlFor="defaultCheck1">
												Did not recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mailapp/`} className="text-primary ms-2  d-inline-block">Resend</Link>
											</Form.Label>
										</div>
									</Col>
									<Col xl={12} className=" d-grid ps-0">
										<Button variant='primary' className="btn btn-lg">Verify</Button>
									</Col>
								</div>
								<div className="text-center">
									<p className="fs-12 text-danger mt-3"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
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
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}> <img src={desktopdark} alt="" className="authentication-brand cover-dark-logo op-9" /></Link>
									<div className="text-fixed-white text-start d-flex align-items-center">
										<div>
											<h3 className="fw-semibold op-8 mb-3  text-fixed-white">Verify Your Account</h3>
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

								</div>
							</div>
						</div>
					</div>
				</Col>

			</div>
		</Fragment>
	);
};

export default Twostepcover2;
