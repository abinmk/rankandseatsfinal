
import React, { FC, Fragment, useCallback, useEffect, useRef } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Twostepcover1 = () => {
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
	useEffect(() => {
		const rootDiv = document.getElementById("root");
		if (rootDiv) {
			// rootDiv.className = 'grid grid-cols-12 gap-6 w-full';
		}
		return () => {
			if (rootDiv) {

				rootDiv.className = ""; // Remove the className when component unmounts
			}
		};
	}, []);
	return (

		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container">
						<div className="row justify-content-center">
							<Col xl={8} md={10} sm={10}>
								<Card className="card custom-card  rectangle2">
									<Card.Body className=" p-0 ">
										<div className="row justify-content-center">
											<Col md={6} className=" pe-0">
												<div className="">
													<div className="card-body p-5">
														<p className="h5 fw-semibold mb-1">Verify Your Account</p>
														<p className="mb-4 text-muted op-7 fw-normal">Enter the 4 digit code sent to the registered email Id.</p>
														<div className="row">
															<Col xl={12} className=" mb-4">
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
																<div className="form-check d-flex mt-2 mb-0">
																	<Form.Check className="" type="checkbox" defaultValue="" id="defaultCheck1" />
																	<Form.Label className="form-check-label" htmlFor="defaultCheck1">
																		Did not recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mailapp/`} className="text-primary ms-2 d-inline-block">Resend</Link>
																	</Form.Label>
																</div>
															</Col>
															<Col lx={12} className=" d-grid">
																<Button variant='primary' type="button" className="btn btn-lg">Verify</Button>
															</Col>
														</div>
														<div className="text-center">
															<p className="fs-12 text-danger mt-3"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
														</div>
													</div>
												</div>
											</Col>
											<div className="col-xl-6 col-md-6 ps-0 text-fixed-white rounded-0 d-none d-md-block  ">
												<div className="card custom-card mb-0 cover-background overflow-hidden rounded-end rounded-0">
													<div className="card-img-overlay d-flex  align-items-center p-0 rounded-">
														<div className="card-body p-5 rectangle3">
															<div>
																<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}> <img src={desktopdark} alt="logo" className="desktop-dark" /></Link>
															</div>
															<h6 className="mt-4 fs-15 op-9  text-fixed-white">Verify Your Account</h6>
															<div className="d-flex mt-3">
																<p className="mb-0 fw-normal fs-14 op-7  text-fixed-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis.
																	Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
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

export default Twostepcover1;
