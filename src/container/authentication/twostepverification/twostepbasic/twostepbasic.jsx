
import React, { FC, Fragment, useCallback, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";

const Twostepbasic = () => {

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
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container-lg">
						<div className="row justify-content-center align-items-center  authentication authentication-basic h-100">
							<Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
								<div className="my-5 d-flex justify-content-center">
									<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}>
										<img src={desktoplogo} alt="logo" className="desktop-logo" />
										<img src={desktopdark} alt="logo" className="desktop-dark" />
									</Link>
								</div>
								<Card className="custom-card rectangle2">
									<Card.Body className="p-5 rectangle3">
										<p className="h5 fw-semibold mb-2 text-center">Verify Your Account</p>
										<p className="mb-4 text-muted op-7 fw-normal text-center">Enter the 4 digit code sent to the registered email Id.</p>
										<div className="row gy-3">
											<Col xl={12} className="mb-2">
												<Row>
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
												</Row>
												<div className="form-check  mt-2">
													<Form.Check className="" type="checkbox" defaultValue="" id="defaultCheck1" />
													<Form.Label className="form-check-label" htmlFor="defaultCheck1">
														Did not recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mailapp/`} className="text-primary ms-2">Resend</Link>
													</Form.Label>
												</div>
											</Col>
											<Col xl={12} className="d-grid mt-2">
												<Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="btn btn-lg btn-primary">Verify</Link>
											</Col>
										</div>
										<div className="text-center">
											<p className="fs-12 text-danger mt-3 mb-0"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
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

export default Twostepbasic;
