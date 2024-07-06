import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Modal, Nav, ProgressBar, Row, Tab } from "react-bootstrap";
import { ProfileGallery } from "./profiledata";
import { Link } from "react-router-dom";

//IMAGES
import faces1 from "../../../assets/images/faces/1.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import media27 from "../../../assets/images/media/media-27.jpg";
import media28 from "../../../assets/images/media/media-28.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media26 from "../../../assets/images/media/media-26.jpg";
import media30 from "../../../assets/images/media/media-30.jpg";
import media39 from "../../../assets/images/media/media-39.jpg";
import media48 from "../../../assets/images/media/media-48.jpg";
import media53 from "../../../assets/images/media/media-53.jpg";
import media63 from "../../../assets/images/media/media-63.jpg";
import filemanager3 from "../../../assets/images/media/file-manager/3.png";

const Profile = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const [show3, setShow3] = useState(false);

	const handleClose3 = () => setShow3(false);
	const handleShow3 = () => setShow3(true);

	const [show4, setShow4] = useState(false);

	const handleClose4 = () => setShow4(false);
	const handleShow4 = () => setShow4(true);

	const [show5, setShow5] = useState(false);

	const handleClose5 = () => setShow5(false);
	const handleShow5 = () => setShow5(true);

	const [show6, setShow6] = useState(false);

	const handleClose6 = () => setShow6(false);
	const handleShow6 = () => setShow6(true);

	const [show7, setShow7] = useState(false);

	const handleClose7 = () => setShow7(false);
	const handleShow7 = () => setShow7(true);

	const [show8, setShow8] = useState(false);

	const handleClose8 = () => setShow8(false);
	const handleShow8 = () => setShow8(true);

	const [show9, setShow9] = useState(false);

	const handleClose9 = () => setShow9(false);
	const handleShow9 = () => setShow9(true);

	const [show10, setShow10] = useState(false);

	const handleClose10 = () => setShow10(false);
	const handleShow10 = () => setShow10(true);

	const [show11, setShow11] = useState(false);

	const handleClose11 = () => setShow11(false);
	const handleShow11 = () => setShow11(true);
	return (
		<Fragment>
			<Row>
				<Col xxl={12} xl={12} className="">
					<div className="card custom-card overflow-hidden">
						<div className="card-body d-sm-flex align-items-top p-4   main-profile-cover">
							<p className="avatar avatar-xxl avatar-rounded online me-3 my-auto">
								<img src={faces5} alt="" />
							</p>
							<div className="flex-fill main-profile-info my-auto">
								<h5 className="fw-semibold mb-1 ">Json Taylor</h5>
								<div>
									<p className="mb-1 text-muted">Chief Executive Officer (C.E.O)</p>
									<div className="fs-12 op-7 mb-0 d-flex">
										<p className="me-3 mb-0"><i className="ri-building-line me-1 align-middle d-inline-flex"></i>Georgia</p>
										<p className="mb-0"><i className="ri-map-pin-line me-1 align-middle d-inline-flex"></i>Washington D.C</p>
									</div>
								</div>
							</div>
							<div className="main-profile-info ms-auto">
								<div className="">
									<div className="d-flex align-items-center justify-content-between">
										<div className="d-flex mb-0 ms-auto">
											<div className="me-4">
												<p className="fw-bold fs-20  text-shadow mb-0">113</p>
												<p className="mb-0 fs-12 text-muted ">Projects</p>
											</div>
											<div className="me-4">
												<p className="fw-bold fs-20  text-shadow mb-0">12.2k</p>
												<p className="mb-0 fs-12 text-muted ">Followers</p>
											</div>
											<div className="">
												<p className="fw-bold fs-20  text-shadow mb-0">128</p>
												<p className="mb-0 fs-12 text-muted ">Following</p>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-0  mt-2 text-end">
									<Button variant="" type="button" className="btn btn-secondary btn-sm btn-wave"><i className="ri-add-line me-1 align-middle"></i>Follow</Button>
								</div>

							</div>
						</div>
					</div>
				</Col>
				<Col xxl={3}>
					<Card className="custom-card">
						<div className="">
							<div className="p-4 border-bottom border-block-end-dashed">
								<div>
									<p className="fs-15 mb-2 fw-semibold">Profile Status :</p>
									<p className="fw-semibold mb-2">Profile 60% completed - <Link to="#" className="text-primary fs-12">Finish now</Link></p>
									{/* <div className="progress progress-sm progress-animate ">
                                        <div className="progress-bar bg-primary  ronded-1" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: "60%"}}></div>
                                    </div> */}
									<ProgressBar className='progress-sm  ronded-1' variant='primary' now={60} />
								</div>
							</div>
							<div className="p-4 border-bottom border-block-end-dashed">
								<div className="">
									<p className="fs-15 mb-2 fw-semibold">Professional Bio :</p>
									<p className="fs-12 text-muted op-7 mb-0">
										I am <b className="text-default">Sonya Taylor,</b> here by conclude that,i am the founder and managing director of the prestigeous company name laugh at all and acts as the cheif executieve officer of the company.
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam.
									</p>
								</div>
							</div>
							<div className="p-4  border-bottom border-block-end-dashed">
								<p className="fs-15 mb-2 me-4 fw-semibold">Personal Info :</p>
								<ul className="list-group">
									<li className="list-group-item border-0">
										<div className="d-flex flex-wrap align-items-center">
											<div className="me-2 fw-semibold">
												Name :
											</div>
											<span className="fs-12 text-muted">Sonya Taylor</span>
										</div>
									</li>
									<li className="list-group-item border-0">
										<div className="d-flex flex-wrap align-items-center">
											<div className="me-2 fw-semibold">
												Email :
											</div>
											<span className="fs-12 text-muted">sonyataylor231@gmail.com</span>
										</div>
									</li>
									<li className="list-group-item border-0">
										<div className="d-flex flex-wrap align-items-center">
											<div className="me-2 fw-semibold">
												Phone :
											</div>
											<span className="fs-12 text-muted">+(555) 555-1234</span>
										</div>
									</li>
									<li className="list-group-item border-0">
										<div className="d-flex flex-wrap align-items-center">
											<div className="me-2 fw-semibold">
												Designation :
											</div>
											<span className="fs-12 text-muted">C.E.O</span>
										</div>
									</li>
									<li className="list-group-item border-0">
										<div className="d-flex flex-wrap align-items-center">
											<div className="me-2 fw-semibold">
												Age :
											</div>
											<span className="fs-12 text-muted">28</span>
										</div>
									</li>
									<li className="list-group-item border-0">
										<div className="d-flex flex-wrap align-items-center">
											<div className="me-2 fw-semibold">
												Experience :
											</div>
											<span className="fs-12 text-muted">10 Years</span>
										</div>
									</li>
								</ul>
							</div>
							<div className="p-4 border-bottom border-block-end-dashed">
								<p className="fs-15 mb-2 me-4 fw-semibold">Contact Information :</p>
								<div className="text-muted">
									<p className="mb-3">
										<span className="avatar avatar-sm avatar-rounded me-2 bg-info-transparent">
											<i className="ri-mail-line align-middle fs-14"></i>
										</span>
										sonyataylor2531@gmail.com
									</p>
									<p className="mb-3">
										<span className="avatar avatar-sm avatar-rounded me-2 bg-warning-transparent">
											<i className="ri-phone-line align-middle fs-14"></i>
										</span>
										+(555) 555-1234
									</p>
									<div className="d-flex">
										<p className="mb-0">
											<span className="avatar avatar-sm avatar-rounded me-2 bg-success-transparent">
												<i className="ri-map-pin-line align-middle fs-14"></i>
											</span>
										</p>
										<p className="mb-0">
											MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071 </p>

									</div>
								</div>
							</div>
							<div className="p-4 border-bottom border-block-end-dashed">
								<p className="fs-15 mb-2 me-4 fw-semibold">Skills :</p>
								<div>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Cloud computing</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Data analysis</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">DevOps</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Machine learning</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Programming</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Security</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Python</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">JavaScript</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Ruby</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">PowerShell</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">Statistics</span>
									</Link>
									<Link to="#">
										<span className="badge bg-light text-muted m-1">SQL</span>
									</Link>
								</div>
							</div>
							<div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
								<p className="fs-15 mb-2 me-4 fw-semibold">Social Networks :</p>
								<div className="btn-list mb-0">
									<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light">
										<i className="ri-facebook-line"></i>
									</Button>
									<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
										<i className="ri-twitter-line"></i>
									</Button>
									<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
										<i className="ri-instagram-line"></i>
									</Button>
									<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
										<i className="ri-github-line"></i>
									</Button>
									<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
										<i className="ri-youtube-line"></i>
									</Button>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={9} xl={12}>
					<Row>
						<Col xl={12}>
							<div className="custom-card">
								<div className="p-0">
									<Tab.Container defaultActiveKey="first">
										<div className="border-block-end-dashed  bg-white rounded-2 p-2">
											<div>
												<Nav className="nav nav-pills nav-justified gx-3 tab-style-6 d-sm-flex d-block " id="myTab" role="tablist">
													<Nav.Item className="rounded" role="presentation">
														<Nav.Link eventKey="first" id="activity-tab" data-bs-toggle="tab"
															data-bs-target="#activity-tab-pane" type="button" role="tab"
															aria-controls="activity-tab-pane" aria-selected="true"><i
																className="ri-gift-line me-1 align-middle d-inline-block fs-16"></i>Activity</Nav.Link>
													</Nav.Item>
													<Nav.Item className="rounded" role="presentation">
														<Nav.Link eventKey="second" id="gallery-tab" data-bs-toggle="tab"
															data-bs-target="#gallery-tab-pane" type="button" role="tab"
															aria-controls="gallery-tab-pane" aria-selected="false"><i
																className="ri-exchange-box-line me-1 align-middle d-inline-block fs-16"></i>Gallery</Nav.Link>
													</Nav.Item>
													<Nav.Item className="rounded" role="presentation">
														<Nav.Link eventKey="third" id="posts-tab" data-bs-toggle="tab"
															data-bs-target="#posts-tab-pane" type="button" role="tab"
															aria-controls="posts-tab-pane" aria-selected="false"><i
																className="ri-bill-line me-1 align-middle d-inline-block fs-16"></i>Projects</Nav.Link>
													</Nav.Item>
													<Nav.Item className="rounded" role="presentation">
														<Nav.Link eventKey="fourth" id="followers-tab" data-bs-toggle="tab"
															data-bs-target="#followers-tab-pane" type="button" role="tab"
															aria-controls="followers-tab-pane" aria-selected="false"><i
																className="ri-money-dollar-box-line me-1 align-middle d-inline-block fs-16"></i>Friends</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
										</div>
										<div className="py-4">
											<Tab.Content className="" id="myTabContent">
												<Tab.Pane eventKey="first" className="fade p-0 border-0 bg-white p-4 rounded-3" id="activity-tab-pane"
													role="tabpanel" aria-labelledby="activity-tab" tabIndex={0}>
													<ul className="list-unstyled profile-timeline">
														<li>
															<span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">16,Dec 2023</span>
															<div>
																<span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
																	<img src={faces1} alt="" />
																</span>
																<p className="text-muted mb-2">
																	<span className="text-default"><b>Barnes vare</b> Shared project</span>
																</p>
																<p className="text-muted fs-12 mb-0">Added 1 attachment <strong>docfile.doc</strong></p>
																<div className="btn-group file-attach mt-3" role="group" aria-label="Basic example">
																	<Button variant="" type="button" className="btn btn-sm btn-primary-light">
																		<span className="ri-file-line me-2"></span> Image_file.jpg
																	</Button>
																	<Button variant="" type="button" className="btn btn-sm btn-primary-light" aria-label="Close">
																		<span className="ri-download-2-line"></span>
																	</Button>
																</div>
															</div>
														</li>
														<li>
															<div>
																<span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">18,Dec 2023</span>
																<span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
																	<img src={faces3} alt="" />
																</span>
																<p className="text-muted mb-2">
																	<span className="text-default"><b>Alzbeth Aren</b> Shared project</span>.
																</p>
																<p className="text-muted mb-0">
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
																	rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
																</p>
															</div>
														</li>
														<li>
															<div>
																<span className="fs-12 text-muted fw-semibold text-end  ">11,Dec 2023</span>
																<span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
																	<img src={faces5} alt="" />
																</span>
																<p className="text-muted mb-1">
																	<span className="text-default"><b>Melissa Blue</b> liked your post <b>travel excites</b></span>.
																</p>
																<p className="text-muted">you are already feeling the tense atmosphere of the video playing in the background</p>
																<p className="profile-activity-media mb-0">
																	<a aria-label="anchor" href="#;">
																		<img src={media48} className="m-1" alt="" />
																	</a>
																	<a aria-label="anchor" href="#;">
																		<img src={media53} className="m-1" alt="" />
																	</a>
																	<a aria-label="anchor" href="#;">
																		<img src={media27} className="m-1" alt="" />
																	</a>
																</p>
															</div>
														</li>
														<li>
															<div>
																<span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">18,Dec 2023</span>
																<span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
																	<img src={faces11} alt="" />
																</span>
																<p className="text-muted mb-2">
																	<span className="text-default"><b>Json Smith</b> reacted to the post &#128077;</span>.
																</p>
																<p className="text-muted mb-0">
																	Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
																</p>
															</div>
														</li>
														<li>
															<div>
																<span className="fs-12 text-muted fw-semibold text-end  profile-timeline-time">21,Dec 2023</span>
																<span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
																	<img src={faces4} alt="" />
																</span>
																<p className="text-muted mb-2">
																	<span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.
																</p>
																<p className="profile-activity-media mb-0">
																	<a aria-label="anchor" href="#;">
																		<img src={filemanager3} alt="" />
																	</a>
																	<span className="fs-11 text-muted">432.87KB</span>
																</p>
															</div>
														</li>
														<li>
															<div>
																<span className="fs-12 text-muted fw-semibold text-end  profile-timeline-time">24,Dec 2023</span>
																<span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
																	E
																</span>
																<p className="mb-2">
																	<b>You</b> Commented on <b>alexander taylor</b> post <a className="text-secondary" href="#;"><u>#beautiful day</u></a>.
																</p>
																<p className="profile-activity-media mb-0">
																	<a aria-label="anchor" href="#;">
																		<img src={media30} alt="" />
																	</a>
																	<a aria-label="anchor" href="#;">
																		<img src={media28} alt="" />
																	</a>
																</p>
															</div>
														</li>
														<li>
															<div>
																<span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">28,Dec 2023</span>
																<span className="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
																	P
																</span>
																<p className="text-muted mb-2">
																	<span className="text-default"><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.
																</p>
																<p className="profile-activity-media mb-2">
																	<a aria-label="anchor" href="#;">
																		<img src={media63} alt="" />
																	</a>
																</p>
																<div>
																	<div className="avatar-list-stacked">
																		<span className="avatar avatar-sm avatar-rounded">
																			<img src={faces2} alt="img" />
																		</span>
																		<span className="avatar avatar-sm avatar-rounded">
																			<img src={faces8} alt="img" />
																		</span>
																		<span className="avatar avatar-sm avatar-rounded">
																			<img src={faces2} alt="img" />
																		</span>
																		<span className="avatar avatar-sm avatar-rounded">
																			<img src={faces10} alt="img" />
																		</span>
																	</div>
																</div>
															</div>
														</li>
														<li>
															<div>
																<span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">24,Dec 2023 </span>
																<span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
																	<img src={media39} alt="" />
																</span>
																<p className="mb-1">
																	<b>You</b> Commented on <b>Peter Engola</b> post <a className="text-secondary" href="#;"><u>#Mother Nature</u></a>.
																</p>
																<p className="text-muted">Technology id developing rapidly kepp uo your work &#128076;</p>
																<p className="profile-activity-media mb-0">
																	<a aria-label="anchor" href="#;">
																		<img src={media26} alt="" />
																	</a>
																	<a aria-label="anchor" href="#;">
																		<img src={media29} alt="" />
																	</a>
																</p>
															</div>
														</li>
													</ul>
												</Tab.Pane>
												<Tab.Pane eventKey="second" className="fade p-0 border-0" id="gallery-tab-pane"
													role="tabpanel" aria-labelledby="gallery-tab" tabIndex={0}>
													<ProfileGallery />
												</Tab.Pane>
												<Tab.Pane eventKey="third" className="fade p-0 border-0" id="posts-tab-pane"
													role="tabpanel" aria-labelledby="posts-tab" tabIndex={0}>
													<Row>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-pending-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Testing</Link>
																			<p className="mb-3">Status : <span className="badge bg-info">pending</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show} onHide={handleClose}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-warning-transparent d-block">Low</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-completed-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Creating Home Page Website </Link>
																			<p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow1}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show1} onHide={handleClose1}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-success-transparent d-block">Medium</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-pending-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Data table Design</Link>
																			<p className="mb-3">Status : <span className="badge bg-info">Pending</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow2}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show2} onHide={handleClose2}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-success-transparent d-block">Medium</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-completed-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Design Horizontal Layout</Link>
																			<p className="mb-3">Status : <span className="badge bg-success">completed</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow3}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show3} onHide={handleClose3}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-success-transparent d-block">Medium</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-inprogress-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix  Header issue</Link>
																			<p className="mb-3">Status : <span className="badge bg-pink">Inprogress</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow4}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show4} onHide={handleClose4}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-inprogress-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Create a blog post</Link>
																			<p className="mb-3">Status : <span className="badge bg-pink">Inprogress</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow5}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show5} onHide={handleClose5}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-pending-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Testing</Link>
																			<p className="mb-3">Status : <span className="badge bg-info">pending</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow6}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show6} onHide={handleClose6}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-warning-transparent d-block">Low</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-completed-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix the Data Table Issue</Link>
																			<p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow7}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show7} onHide={handleClose7}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-success-transparent d-block">Medium</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-pending-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix the Data Table Issue</Link>
																			<p className="mb-3">Status : <span className="badge bg-info">pending</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow8}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show8} onHide={handleClose8}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-success-transparent d-block">Medium</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-inprogress-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Data table Design</Link>
																			<p className="mb-3">Status : <span className="badge bg-pink">Inprogress</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow9}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show9} onHide={handleClose9}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-pending-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix the Data Table Issue</Link>
																			<p className="mb-3">Status : <span className="badge bg-info">pending</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow10}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show10} onHide={handleClose10}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-success-transparent d-block">Medium</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xl-4 col-md-6 task-card">
															<div className="card custom-card task-inprogress-card">
																<div className="card-body">
																	<div className="d-flex justify-content-between">
																		<div>
																			<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Home page design</Link>
																			<p className="mb-3">Status : <span className="badge bg-pink">Inprogress</span></p>
																			<p className="mb-0">Assigned To :</p>
																			<span className="avatar-list-stacked ms-1">
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces2} alt="" />
																				</span>
																				<span className="avatar avatar-sm avatar-rounded">
																					<img src={faces8} alt="" />
																				</span>
																			</span>
																			<span className="me-2">
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow11}
																					data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
																			<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show11} onHide={handleClose11}>

																				<Modal.Header closeButton className="">
																					<h6 className="modal-title" id="AddModalLabel">Edit Assigne</h6>
																				</Modal.Header>
																				<Modal.Body className="">
																					<Row>
																						<div className="col-12">
																							<div className="mb-3">
																								<label
																									className="col-form-label">Assigne To:</label>
																								<input type="text" className="form-control" />
																							</div>
																						</div>
																					</Row>
																				</Modal.Body>
																				<Modal.Footer className="">
																					<Button variant="" type="button" className="btn btn-secondary"
																						data-bs-dismiss="modal">Save</Button>
																					<Button variant="" type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
																				</Modal.Footer>
																			</Modal>
																		</div>
																		<div>
																			<div className="btn-list">
																				<a aria-label="anchor" href="#;" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></a>
																				<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																			</div>
																			<span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</Row>
												</Tab.Pane>
												<Tab.Pane eventKey="fourth" className="fade p-0 border-0" id="followers-tab-pane"
													role="tabpanel" aria-labelledby="followers-tab" tabIndex={0}>
													<Row>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces2} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Samantha May</p>
																			<p className="fs-12 op-7 mb-1 text-muted">samanthamay2912@gmail.com</p>
																			<span className="badge bg-info-transparent rounded-pill">Team Member</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces15} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Andrew Garfield</p>
																			<p className="fs-12 op-7 mb-1 text-muted">andrewgarfield98@gmail.com</p>
																			<span className="badge bg-success-transparent rounded-pill">Team Lead</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces5} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Jessica Cashew</p>
																			<p className="fs-12 op-7 mb-1 text-muted">jessicacashew143@gmail.com</p>
																			<span className="badge bg-info-transparent rounded-pill">Team Member</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces11} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Simon Cowan</p>
																			<p className="fs-12 op-7 mb-1 text-muted">jessicacashew143@gmail.com</p>
																			<span className="badge bg-warning-transparent rounded-pill">Team Manager</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces7} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Amanda nunes</p>
																			<p className="fs-12 op-7 mb-1 text-muted">amandanunes45@gmail.com</p>
																			<span className="badge bg-info-transparent rounded-pill">Team Member</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces12} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Mahira Hose</p>
																			<p className="fs-12 op-7 mb-1 text-muted">mahirahose9456@gmail.com</p>
																			<span className="badge bg-info-transparent rounded-pill">Team Member</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces2} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Samantha May</p>
																			<p className="fs-12 op-7 mb-1 text-muted">samanthamay2912@gmail.com</p>
																			<span className="badge bg-info-transparent rounded-pill">Team Member</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces15} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Andrew Garfield</p>
																			<p className="fs-12 op-7 mb-1 text-muted">andrewgarfield98@gmail.com</p>
																			<span className="badge bg-success-transparent rounded-pill">Team Lead</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
															<div className="card custom-card shadow-none border">
																<div className="card-body p-4">
																	<div className="text-center">
																		<span className="avatar avatar-xl avatar-rounded">
																			<img src={faces5} alt="" />
																		</span>
																		<div className="mt-2">
																			<p className="mb-0 fw-semibold">Jessica Cashew</p>
																			<p className="fs-12 op-7 mb-1 text-muted">jessicacashew143@gmail.com</p>
																			<span className="badge bg-info-transparent rounded-pill">Team Member</span>
																		</div>
																	</div>
																</div>
																<div className="card-footer text-center">
																	<div className="btn-list">
																		<Button variant="" type="button" className="btn btn-sm btn-light btn-wave">Block</Button>
																		<Button variant="" type="button" className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
																	</div>
																</div>
															</div>
														</div>
													</Row>
												</Tab.Pane>
											</Tab.Content>
										</div>
									</Tab.Container>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Profile;
