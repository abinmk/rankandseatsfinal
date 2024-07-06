import React, { FC, Fragment, useRef, useState } from "react";
import { Button, Card, Col, Dropdown, Form, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import { Accountoptions, Countryoptions, Languageoptions, MaxLimitoptions, maxmails } from "./mailsettingdata";
import Select from "react-select";
import { Link } from "react-router-dom";
import faces10 from "../../../../assets/images/faces/10.jpg";

const Mailsettings = () => {
	const [selectedImage, setSelectedImage] = useState(faces10);
	const fileInputRef = useRef(null);

	const handleImageChange = (e) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			const reader = new FileReader();
			reader.onload = (event) => {
				setSelectedImage(event.target?.result);
			};
			reader.readAsDataURL(selectedFile);
		}
	};

	const openFileInput = () => {
		if (fileInputRef.current) { fileInputRef.current.click(); }
	};

	return (
		<Fragment>
			<div className="container">

				<Card className="custom-card">
					<Card.Body>
						<Row>
							<Tab.Container defaultActiveKey="first">
								<Col xl={2} lg={3}>
									<Nav className="nav nav-tabs flex-column nav-style-5" role="tablist">
										<Nav.Link eventKey="first" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#personal-info" aria-selected="true"><i className="bx bx-cog me-2 fs-18 align-middle"></i>Personal Information</Nav.Link>
										<Nav.Link eventKey="second" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#account-settings" aria-selected="false" tabIndex={-1}><i className="bx bx-coin-stack me-2 fs-18 align-middle"></i>Account Settings</Nav.Link>
										<Nav.Link eventKey="third" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#email-settings" aria-selected="false" tabIndex={-1}><i className="bx bx-envelope me-2 fs-18 align-middle"></i>Email</Nav.Link>
										<Nav.Link eventKey="fourth" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#labels" aria-selected="false" tabIndex={-1}><i className="bx bx-label me-2 fs-18 align-middle"></i>Labels</Nav.Link>
										<Nav.Link eventKey="fifth" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#notification-settings" aria-selected="false" tabIndex={-1}><i className="bx bx-notification me-2 fs-18 align-middle"></i>Notifications</Nav.Link>
										<Nav.Link eventKey="sixth" className="mt-3" data-bs-toggle="tab" role="tab" aria-current="page" href="#security" aria-selected="false" tabIndex={-1}><i className="bx bx-shield-plus me-2 fs-18 align-middle"></i>Security</Nav.Link>
									</Nav>
								</Col>
								<Col xl={10} lg={9}>
									<Tab.Content className="mail-setting-tab mt-4 mt-lg-0">
										<Tab.Pane eventKey="first" className="text-muted" id="personal-info" role="tabpanel">
											<div className="p-3">
												<h6 className="fw-semibold mb-3">
													Profile :
												</h6>
												<div className="mb-4 d-sm-flex align-items-center">
													<div className="mb-0 me-sm-5 d-sm-flex align-items-center">
														<span className="avatar avatar-xxl ">
															<img src={selectedImage || ""} alt="" id="profile-img" />
															<a href="#" className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
																<input
																	type="file"
																	name="photo"
																	className="position-absolute w-100 h-100 op-0"
																	id="profile-change"
																	ref={fileInputRef}
																	onChange={handleImageChange}
																	style={{ display: "none" }}
																/>
																<i className="fe fe-camera"></i>
															</a>
														</span>
														<div className="ms-sm-3">
															<h5 className="text-dark mb-1">John Arvinto</h5>
															<p className="text-muted mb-0">
																<span className=" me-2">Phone:</span><span>+94 12345 6789</span>
															</p>
															<p className="text-muted mb-0">
																<span className="">Email:</span><span>spruko123@gmail.com</span>
															</p>
														</div>
													</div>
												</div>
												<div className="row gy-4 mb-4">
													<Col xl={6}>
														<Form.Label htmlFor="first-name" className="form-label">First Name</Form.Label>
														<Form.Control type="text" className="" id="first-name" placeholder="Firt Name" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="last-name" className="form-label">Last Name</Form.Label>
														<Form.Control type="text" className="" id="last-name" placeholder="Last Name" />
													</Col>
													<div className="col-xl-12">
														<Form.Label className="form-label">User Name</Form.Label>
														<div className="input-group mb-3">
															<span className="input-group-text" id="basic-addon3">user2413@gmail.com</span>
															<Form.Control type="text" className="" id="basic-url" aria-describedby="basic-addon3" />
														</div>
													</div>
												</div>
												<h6 className="fw-semibold mb-3">
													Personal information :
												</h6>
												<div className="row gy-4 mb-4">
													<Col xl={6}>
														<Form.Label htmlFor="email-address" className="form-label">Email Address :</Form.Label>
														<Form.Control type="text" className="" id="email-address" placeholder="xyz@gmail.com" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="Contact-Details" className="form-label">Contact Details :</Form.Label>
														<Form.Control type="text" className="" id="Contact-Details" placeholder="contact details" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="language" className="form-label">Language :</Form.Label>
														<Select isMulti name="colors" options={Languageoptions} className="basic-multi-select"
															menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0]]}
														/>
													</Col>
													<Col xl={6}>
														<Form.Label className="form-label">Country :</Form.Label>
														<Select name="colors" options={Countryoptions} className="basic-multi-select"
															menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Countryoptions[0]]}
														/>
													</Col>
													<Col xl={12}>
														<Form.Label htmlFor="bio" className="form-label">Bio :</Form.Label>
														<Form.Control as="textarea" className="" id="bio" rows={5} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!" />

													</Col>
												</div>
											</div>
										</Tab.Pane>
										<Tab.Pane eventKey="second" className="p-4 text-muted" id="account-settings" role="tabpanel">
											<Row>
												<Col xl={7}>
													<Card className="custom-card shadow-none mb-xl-0 border">
														<Card.Body>
															<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Two Step Verification</p>
																	<p className="fs-12 text-muted mb-0">Two step verificatoin is very secured and restricts in happening faulty practices.</p>
																</div>
																<div className="custom-toggle-switch ms-sm-2 ms-0">
																	<input id="two-step" type="checkbox" defaultChecked />
																	<Form.Label htmlFor="two-step" className="label-primary mb-1"></Form.Label>
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																<div className="mb-2 mb-lg-0">
																	<p className="fs-14 mb-2 fw-semibold">Authentication</p>
																	<div className="mb-0">
																		<div className="btn-group mail-verification" role="group" aria-label="Basic radio toggle button group">
																			<Form.Check type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
																			<Form.Label className="btn btn-outline-primary d-inline-flex" htmlFor="btnradio1" ><i className="ri-lock-unlock-line me-1 align-middle"></i>Pin</Form.Label>
																			<Form.Check type="radio" className="btn-check" name="btnradio" id="btnradio2" />
																			<Form.Label className="btn btn-outline-primary d-inline-flex" htmlFor="btnradio2"><i className="ri-lock-password-line me-1 align-middle"></i>Password</Form.Label>
																			<Form.Check type="radio" className="btn-check" name="btnradio" id="btnradio3" />
																			<Form.Label className="btn btn-outline-primary d-inline-flex" htmlFor="btnradio3"><i className="ri-fingerprint-line me-1 align-middle"></i>Finger Print</Form.Label>
																		</div>
																	</div>
																</div>
																<div className="custom-toggle-switch ms-sm-2 ms-0">
																	<input id="authentication" type="checkbox" defaultChecked />
																	<Form.Label htmlFor="authentication" className="label-primary mb-1"></Form.Label>
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Recovery Mail</p>
																	<p className="fs-12 text-muted mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
																</div>
																<div className="custom-toggle-switch ms-sm-2 ms-0">
																	<input id="recovery-mail" type="checkbox" defaultChecked />
																	<Form.Label htmlFor="recovery-mail" className="label-primary mb-1"></Form.Label>
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">SMS Recovery</p>
																	<p className="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of recovery</p>
																</div>
																<div className="custom-toggle-switch ms-sm-2 ms-0">
																	<input id="sms-recovery" type="checkbox" defaultChecked />
																	<Form.Label htmlFor="sms-recovery" className="label-primary mb-1"></Form.Label>
																</div>
															</div>
															<div className="d-flex align-items-top justify-content-between">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Reset Password</p>
																	<p className="fs-12 text-muted">Password should be min of <b className="text-success">8 digits<sup>*</sup></b>,atleast <b className="text-success">One Capital letter<sup>*</sup></b> and <b className="text-success">One Special Character<sup>*</sup></b> included.</p>
																	<div className="mb-2">
																		<Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
																		<Form.Control type="text" className="" id="current-password" placeholder="Current Password" />
																	</div>
																	<div className="mb-2">
																		<Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
																		<Form.Control type="text" className="" id="new-password" placeholder="New Password" />
																	</div>
																	<div className="mb-0">
																		<Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
																		<Form.Control type="text" className="" id="confirm-password" placeholder="Confirm PAssword" />
																	</div>
																</div>
															</div>
														</Card.Body>
													</Card>
												</Col>
												<Col xl={5}>
													<Card className="custom-card shadow-none mb-0 border">
														<Card.Header className="justify-content-between d-sm-flex d-block">
															<Card.Title>Registered Devices</Card.Title>
															<div className="mt-sm-0 mt-2">
																<Button variant='' type="button" className="btn btn-sm btn-primary m-1">Signout from all devices</Button>
															</div>
														</Card.Header>
														<Card.Body>
															<ListGroup>
																<ListGroup.Item>
																	<div className="d-sm-flex d-block align-items-top">
																		<div className="lh-1"><i className="bi bi-phone me-2 fs-16 align-middle text-muted"></i></div>
																		<div className="lh-1 flex-fill">
																			<p className="mb-1">
																				<span className="fw-semibold">Mobile-LG-1023</span>
																			</p>
																			<p className="mb-0">
																				<span className="text-muted fs-11">Manchester, UK-Nov 30, 04:45PM</span>
																			</p>
																		</div>
																		<Dropdown className="mt-sm-0 mt-2">
																			<Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																				<i className="fe fe-more-vertical"></i>
																			</Dropdown.Toggle>
																			<Dropdown.Menu>
																				<Dropdown.Item href="#">Action</Dropdown.Item>
																				<Dropdown.Item href="#">Another action</Dropdown.Item>
																				<Dropdown.Item href="#">Something else here</Dropdown.Item>
																			</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</ListGroup.Item>
																<ListGroup.Item>
																	<div className="d-sm-flex d-block align-items-top">
																		<div className="lh-1"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
																		<div className="lh-1 flex-fill">
																			<p className="mb-1">
																				<span className="fw-semibold">Lenovo-1291203</span>
																			</p>
																			<p className="mb-0">
																				<span className="text-muted fs-11">England, UK-Aug 12, 12:25PM</span>
																			</p>
																		</div>
																		<Dropdown className="mt-sm-0 mt-2">
																			<Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																				<i className="fe fe-more-vertical"></i>
																			</Dropdown.Toggle>
																			<Dropdown.Menu>
																				<Dropdown.Item href="#">Action</Dropdown.Item>
																				<Dropdown.Item href="#">Another action</Dropdown.Item>
																				<Dropdown.Item href="#">Something else here</Dropdown.Item>
																			</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</ListGroup.Item>
																<ListGroup.Item>
																	<div className="d-sm-flex d-block align-items-top">
																		<div className="lh-1"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
																		<div className="lh-1 flex-fill">
																			<p className="mb-1">
																				<span className="fw-semibold">Macbook-Suzika</span>
																			</p>
																			<p className="mb-0">
																				<span className="text-muted fs-11">Brightoon, UK-Jul 18, 8:34AM</span>
																			</p>
																		</div>
																		<Dropdown className="mt-sm-0 mt-2">
																			<Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																				<i className="fe fe-more-vertical"></i>
																			</Dropdown.Toggle>
																			<Dropdown.Menu>
																				<Dropdown.Item href="#">Action</Dropdown.Item>
																				<Dropdown.Item href="#">Another action</Dropdown.Item>
																				<Dropdown.Item href="#">Something else here</Dropdown.Item>
																			</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</ListGroup.Item>
																<ListGroup.Item>
																	<div className="d-sm-flex d-block align-items-top">
																		<div className="lh-1"><i className="bi bi-pc-display-horizontal me-2 fs-16 align-middle text-muted"></i></div>
																		<div className="lh-1 flex-fill">
																			<p className="mb-1">
																				<span className="fw-semibold">Apple-Desktop</span>
																			</p>
																			<p className="mb-0">
																				<span className="text-muted fs-11">Darlington, UK-Jan 14, 11:14AM</span>
																			</p>
																		</div>
																		<Dropdown className="mt-sm-0 mt-2">
																			<Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
																				<i className="fe fe-more-vertical"></i>
																			</Dropdown.Toggle>
																			<Dropdown.Menu>
																				<Dropdown.Item href="#">Action</Dropdown.Item>
																				<Dropdown.Item href="#">Another action</Dropdown.Item>
																				<Dropdown.Item href="#">Something else here</Dropdown.Item>
																			</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</ListGroup.Item>
															</ListGroup>
														</Card.Body>
													</Card>
												</Col>
											</Row>
										</Tab.Pane>
										<Tab.Pane eventKey="third" className="text-muted" id="email-settings" role="tabpanel">
											<ul className="list-group list-group-flush">
												<ListGroup.Item>
													<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
															<span className="fs-14 fw-semibold mb-0">Menu View :</span>
														</div>
														<Col xl={4}>
															<div className="form-check">
																<Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
																<Form.Label className="form-check-label" htmlFor="flexRadioDefault1">
																	Default View
																</Form.Label>
															</div>
															<div className="form-check">
																<Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
																<Form.Label className="form-check-label" htmlFor="flexRadioDefault2">
																	Advanced View
																</Form.Label>
															</div>
														</Col>
														<Col xl={5}>
															<div className="custom-toggle-switch float-sm-end">
																<input id="menu-view" type="checkbox" defaultChecked />
																<Form.Label htmlFor="menu-view" className="label-danger mb-1"></Form.Label>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-3 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Language :</span>
														</div>
														<Col xl={4}>
															<Form.Label htmlFor="mail-language" className="form-label">Languages :</Form.Label>
															<Select isMulti name="colors" options={Languageoptions} className="basic-multi-select"
																menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0], Languageoptions[1]]}
															/>
														</Col>
														<Col xl={5}>
															<div className="custom-toggle-switch float-sm-end">
																<input id="mail-languages" type="checkbox" />
																<Form.Label htmlFor="mail-languages" className="label-danger mb-1"></Form.Label>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Images :</span>
														</div>
														<Col xl={4}>
															<div className="form-check">
																<Form.Check className="" type="radio" name="images-open" id="images-open1" />
																<Form.Label className="form-check-label" htmlFor="images-open1">
																	Always Open Images
																</Form.Label>
															</div>
															<div className="form-check">
																<Form.Check className="" type="radio" name="images-open" id="images-hide2" defaultChecked />
																<Form.Label className="form-check-label" htmlFor="images-hide2">
																	Ask For Permission
																</Form.Label>
															</div>
														</Col>
														<Col xl={5}>
															<div className="custom-toggle-switch float-sm-end">
																<input id="mails-images" type="checkbox" />
																<Form.Label htmlFor="mails-images" className="label-danger mb-1"></Form.Label>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Keyboard Shortcuts :</span>
														</div>
														<Col xl={4}>
															<div className="form-check">
																<Form.Check className="" type="radio" name="keyboard-enable" id="keyboard-enable1" />
																<Form.Label className="form-check-label" htmlFor="keyboard-enable1">
																	Keyboard Shortcuts Enable
																</Form.Label>
															</div>
															<div className="form-check">
																<Form.Check className="" type="radio" name="keyboard-enable" id="keyboard-disable2" defaultChecked />
																<Form.Label className="form-check-label" htmlFor="keyboard-disable2">
																	Keyboard Shortcuts Disable
																</Form.Label>
															</div>
														</Col>
														<Col xl={5}>
															<div className="custom-toggle-switch float-sm-end">
																<input id="keyboard-shortcuts" type="checkbox" />
																<Form.Label htmlFor="keyboard-shortcuts" className="label-danger mb-1"></Form.Label>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Notifications :</span>
														</div>
														<Col xl={4}>
															<div className="form-check">
																<Form.Check className="" type="checkbox" value="" id="desktop-notifications" defaultChecked />
																<Form.Label className="form-check-label" htmlFor="desktop-notifications">
																	Desktop Notifications
																</Form.Label>
															</div>
															<div className="form-check">
																<Form.Check className="" type="checkbox" value="" id="mobile-notifications" />
																<Form.Label className="form-check-label" htmlFor="mobile-notifications">
																	Mobile Notifications
																</Form.Label>
															</div>
														</Col>
														<Col xl={5}>
															<div className="float-sm-end">
																<Link to="#" className="btn btn-success-ghost btn-sm">Learn-more</Link>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-3 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Maximum Mails Per Page :</span>
														</div>
														<div className="col-xl-2">
															<Select name="colors" options={maxmails} className="basic-multi-select"
																menuPlacement='auto' classNamePrefix="Select2" defaultValue={[maxmails[0]]}
															/>
														</div>
														<Col xl={7}>
															<div className="custom-toggle-switch float-sm-end">
																<input id="mails-per-page" type="checkbox" />
																<Form.Label htmlFor="mails-per-page" className="label-danger mb-1"></Form.Label>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Mail Composer :</span>
														</div>
														<Col xl={4}>
															<div className="form-check">
																<Form.Check className="" type="radio" name="mail-composeron" id="mail-composeron1" />
																<Form.Label className="form-check-label" htmlFor="mail-composeron1">
																	Mail Composer On
																</Form.Label>
															</div>
															<div className="form-check">
																<Form.Check className="" type="radio" name="mail-composeron" id="mail-composeroff2" defaultChecked />
																<Form.Label className="form-check-label" htmlFor="mail-composeroff2">
																	Mail Composer Off
																</Form.Label>
															</div>
														</Col>
														<Col xl={5}>
															<div className="custom-toggle-switch float-sm-end">
																<input id="mail-composer" type="checkbox" />
																<Form.Label htmlFor="mail-composer" className="label-danger mb-1"></Form.Label>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Auto Correct :</span>
														</div>
														<Col xl={4}>
															<div className="form-check">
																<Form.Check className="" type="radio" name="auto-correcton" id="auto-correcton1" />
																<Form.Label className="form-check-label" htmlFor="auto-correcton1">
																	Auto Correct On
																</Form.Label>
															</div>
															<div className="form-check">
																<Form.Check className="" type="radio" name="auto-correcton" id="auto-correctoff2" defaultChecked />
																<Form.Label className="form-check-label" htmlFor="auto-correctoff2">
																	Auto Correct Off
																</Form.Label>
															</div>
														</Col>
														<Col xl={5}>
															<div className="custom-toggle-switch float-sm-end">
																<input id="auto-correct" type="checkbox" />
																<Form.Label htmlFor="auto-correct" className="label-danger mb-1"></Form.Label>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gy-2 d-sm-flex align-items-center justify-content-between">
														<div className="col-xl-3">
															<span className="fs-14 fw-semibold mb-0">Mail Send Action :</span>
														</div>
														<Col xl={4}>
															<div className="form-check">
																<Form.Check className="" type="checkbox" value="" id="on-keyboard" defaultChecked />
																<Form.Label className="form-check-label" htmlFor="on-keyboard">
																	On Keyboard Action
																</Form.Label>
															</div>
															<div className="form-check">
																<Form.Check className="" type="checkbox" value="" id="on-buttonclick" />
																<Form.Label className="form-check-label" htmlFor="on-buttonclick">
																	On Button Click
																</Form.Label>
															</div>
														</Col>
														<Col xl={5}>
															<div className="float-sm-end">
																<Link to="#" className="btn btn-success-ghost btn-sm">Learn-more</Link>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
											</ul>
										</Tab.Pane>
										<Tab.Pane eventKey="fourth" className="p-4 text-muted" id="labels" role="tabpanel">
											<p className="fs-14 fw-semibold mb-3">Mail Labels :</p>
											<Row>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">All Mails</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-allmails" id="all-mails-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="all-mails-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-allmails" id="all-mails-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="all-mails-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Inbox</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-inbox" id="inbox-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="inbox-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-inbox" id="inbox-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="inbox-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Sent</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-sent" id="sent-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="sent-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-sent" id="sent-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="sent-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Drafts</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-drafts" id="drafts-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="drafts-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-drafts" id="drafts-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="drafts-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Spam</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-spam" id="spam-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="spam-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-spam" id="spam-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="spam-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Important</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-important" id="important-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="important-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-important" id="important-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="important-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Trash</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-trash" id="trash-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="trash-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-trash" id="trash-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="trash-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Archive</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-archive" id="archive-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="archive-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-archive" id="archive-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="archive-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Starred</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-starred" id="starred-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="starred-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-starred" id="starred-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="starred-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Row>
											<p className="fs-14 fw-semibold mb-3">Settings :</p>
											<Row>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Settings</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-settings" id="settings-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="settings-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-settings" id="settings-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="settings-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Row>
											<p className="fs-14 fw-semibold mb-3">Custom Labels :</p>
											<Row>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Mail</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="custom-mail-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="custom-mail-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Home</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-home" id="home-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="home-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-home" id="home-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="home-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Work</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-work" id="work-enable" defaultChecked />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="work-enable">Enable</Form.Label>
																	<input type="radio" className="btn-check" name="label-work" id="work-disable" />
																	<Form.Label className="btn btn-sm btn-outline-primary" htmlFor="work-disable">Disable</Form.Label>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-xxl-3 col-xl-4 col-md-6">
													<div className="card custom-card shadow-none border">
														<div className="card-body align-items-center justify-content-between flex-wrap">
															<div className="mb-1">
																<span className="fw-semibold">Friends</span>
															</div>
															<div>
																<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="label-friends" id="friends-enable" defaultChecked />
																	<label className="btn btn-sm btn-outline-primary" htmlFor="friends-enable">Enable</label>
																	<input type="radio" className="btn-check" name="label-friends" id="friends-disable" />
																	<label className="btn btn-sm btn-outline-primary" htmlFor="friends-disable">Disable</label>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Row>
										</Tab.Pane>
										<Tab.Pane eventKey="fifth" className="text-muted" id="notification-settings" role="tabpanel">
											<ul className="list-group list-group-flush list-unstyled rounded">
												<ListGroup.Item>
													<div className="row gx-5">
														<Col xl={5}>
															<p className="fs-16 mb-1 fw-semibold">Email Notifications</p>
															<p className="fs-12 mb-0 text-muted">Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them.</p>
														</Col>
														<Col xl={7}>
															<div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">Updates &amp; Features</p>
																	<p className="fs-12 mb-0 text-muted">Notifications about new updates and their features.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="update-features" type="checkbox" defaultChecked />
																		<label htmlFor="update-features" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-flex align-items-top justify-content-between mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">Early Access</p>
																	<p className="fs-12 mb-0 text-muted">Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="early-access" type="checkbox" />
																		<label htmlFor="early-access" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-flex align-items-top justify-content-between mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">Email Shortcuts</p>
																	<p className="fs-12 mb-0 text-muted">Shortcut notifications for email.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="email-shortcut" type="checkbox" defaultChecked />
																		<label htmlFor="email-shortcut" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-flex align-items-top justify-content-between mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">New Mails</p>
																	<p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="new-mails" type="checkbox" defaultChecked />
																		<label htmlFor="new-mails" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-flex align-items-top justify-content-between mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
																	<p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-chat-messages" type="checkbox" defaultChecked />
																		<label htmlFor="mail-chat-messages" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gx-5">
														<Col xl={5}>
															<p className="fs-16 mb-1 fw-semibold">Push Notifications</p>
															<p className="fs-12 mb-0 text-muted">Push notifications are recieved when you are online, you can customize them by enabling or disabling them.</p>
														</Col>
														<Col xl={7}>
															<div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">New Mails</p>
																	<p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="push-new-mails" type="checkbox" defaultChecked />
																		<label htmlFor="push-new-mails" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-flex align-items-top justify-content-between mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
																	<p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="push-mail-chat-messages" type="checkbox" defaultChecked />
																		<label htmlFor="push-mail-chat-messages" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-flex align-items-top justify-content-between mt-3">
																<div className="mail-notification-settings">
																	<p className="fs-14 mb-1 fw-semibold">Mail Extensions</p>
																	<p className="fs-12 mb-0 text-muted">Notifications related to the extensions received by new emails and thier propertied also been displayed.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="mail-extensions" type="checkbox" />
																		<label htmlFor="mail-extensions" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
														</Col>
													</div>
												</ListGroup.Item>
											</ul>
										</Tab.Pane>
										<Tab.Pane eventKey="sixth" className="text-muted" id="security" role="tabpanel">
											<ul className="list-group list-group-flush list-unstyled">
												<ListGroup.Item>
													<div className="row gx-5">
														<Col xl={4}>
															<p className="fs-16 mb-1 fw-semibold">Logging In</p>
															<p className="fs-12 mb-0 text-muted">Security settings related to logging into our email account and taking down account if any mischevious action happended.</p>
														</Col>
														<div className="col-xl-8">
															<div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
																<div className="mail-security-settings">
																	<p className="fs-14 mb-1 fw-semibold">Max Limit for login attempts</p>
																	<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times</p>
																</div>
																<div>
																	<Select name="colors" options={MaxLimitoptions} className="basic-multi-select"
																		menuPlacement='auto' classNamePrefix="Select2" defaultValue={[MaxLimitoptions[0]]}
																	/>
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Account Freeze time management</p>
																	<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">You can change the time for the account freeze when attempts for </p>
																</div>
																<div>
																	<Select name="colors" options={Accountoptions} className="basic-multi-select"
																		menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Accountoptions[0]]}
																	/>
																</div>
															</div>
														</div>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gx-5">
														<Col xl={4}>
															<p className="fs-16 mb-1 fw-semibold">Password Requirements</p>
															<p className="fs-12 mb-0 text-muted">Security settings related to password strength.</p>
														</Col>
														<div className="col-xl-8">
															<div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
																<div className="mail-security-settings">
																	<p className="fs-14 mb-1 fw-semibold">Minimum number of characters in the password</p>
																	<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">There should be a minimum number of characters for a password to be validated that shouls be set here.</p>
																</div>
																<div>
																	<Form.Control type="text" className="form-control w-50 ms-auto" defaultValue="8" />
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Contain A Number</p>
																	<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Password should contain a number.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="password-number" type="checkbox" />
																		<label htmlFor="password-number" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Contain A Special Character</p>
																	<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Password should contain a special Character.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="password-special-character" type="checkbox" defaultChecked />
																		<label htmlFor="password-special-character" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Atleast One Capital Letter</p>
																	<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Password should contain atleast one capital letter.</p>
																</div>
																<div>
																	<div className="custom-toggle-switch float-sm-end">
																		<input id="password-capital" type="checkbox" defaultChecked />
																		<label htmlFor="password-capital" className="label-success mb-1"></label>
																	</div>
																</div>
															</div>
															<div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
																<div>
																	<p className="fs-14 mb-1 fw-semibold">Maximum Password Length</p>
																	<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Maximum password lenth should be selected here.</p>
																</div>
																<div>
																	<Form.Control type="text" className="form-control w-50 ms-auto" defaultValue="16" />
																</div>
															</div>
														</div>
													</div>
												</ListGroup.Item>
												<ListGroup.Item>
													<div className="row gx-5">
														<Col xl={4}>
															<p className="fs-16 mb-1 fw-semibold">Unknown Chats</p>
															<p className="fs-12 mb-0 text-muted mb-3 mb-lg-0">Security settings related to unknown chats.</p>
														</Col>
														<div className="col-xl-8">
															<div>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="unknown-messages-show" id="unknown-messages-show1" />
																	<label className="form-check-label" htmlFor="unknown-messages-show1">
																		Show
																	</label>
																</div>
																<div className="form-check">
																	<Form.Check className="" type="radio" name="unknown-messages-show" id="unknown-messages-hide2" defaultChecked />
																	<label className="form-check-label" htmlFor="unknown-messages-hide2">
																		Hide
																	</label>
																</div>
															</div>
														</div>
													</div>
												</ListGroup.Item>
											</ul>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Tab.Container>
						</Row>

					</Card.Body>
				</Card>
			</div>

		</Fragment>
	);
};

export default Mailsettings;
