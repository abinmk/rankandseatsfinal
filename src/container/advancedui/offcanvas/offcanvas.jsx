import React, { FC, Fragment, useState } from "react";
import { Button, Col, Dropdown, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import faces10 from "../../../assets/images/faces/10.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces13 from "../../../assets/images/faces/13.jpg";
import faces14 from "../../../assets/images/faces/14.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import Showcode from "../../../components/ui/showcode/showcode";
import { offcanvas1, offcanvas2, offcanvas3, offcanvas4, offcanvas5 } from "../../../components/ui/data/advanceuiprismdata/advanceuiprism";

const Offcanvass = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show3, setShow3] = useState(false);

	const handleClose3 = () => setShow3(false);
	const handleShow3 = () => setShow3(true);

	// OffCanvas Enable
	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

	//static
	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	//Placement
	const [showt, setShowt] = useState(false);

	const handleCloset = () => setShowt(false);
	const handleShowt = () => setShowt(true);

	//right

	const [showr, setShowr] = useState(false);

	const handleCloser = () => setShowr(false);
	const handleShowr = () => setShowr(true);

	//bottom

	const [showb, setShowb] = useState(false);

	const handleCloseb = () => setShowb(false);
	const handleShowb = () => setShowb(true);

	return (
		<Fragment>
			<Row>
				<Col xl={4}>
					<Showcode title="Live Demo" code={offcanvas2} className="custom-card">
						<Button variant='primary' className="m-1" data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow}
							role="button" aria-controls="offcanvasExample">
							Link with href
						</Button>
						<Button variant='primary' className="m-1" type="button" data-bs-toggle="offcanvas" onClick={handleShow}
							data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
							Button with data-bs-target
						</Button>
						<Offcanvas show={show} onHide={handleClose} backdrop={true} className="offcanvas offcanvas-start" tabindex={-1} id="offcanvasExample"
							aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Contacts</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className="p-0">
								<div>
									<ul className="list-group list-group-flush mb-0">
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces15} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Simon Cowall
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8923
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces14} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Adwar Kohali
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8913
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
													AJ
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces13} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces12} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Ulda Shara
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02113
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
													AM
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Abrem Moses
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces10} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Elira Voreme
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces9} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aposel Somes
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 65432
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle className="btn btn-sm btn-icon btn-light btn-wave no-caret" variant='' type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
													RO
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Rubek Onoke
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 5613
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces2} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Shara Alisab
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces4} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Yakebeth Jone
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Body Scrolling" code={offcanvas1}>
						<Button variant='primary' className="" type="button" data-bs-toggle="offcanvas" onClick={handleShow1}
							data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable
							body scrolling
						</Button>
						<Offcanvas show={show1} onHide={handleClose1} backdrop={true} className="offcanvas offcanvas-start" tabindex={-1} id="offcanvasExample"
							aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Contacts</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className="p-0">
								<div>
									<ul className="list-group list-group-flush mb-0">
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces15} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Simon Cowall
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8923
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces14} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Adwar Kohali
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8913
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
													AJ
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces13} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces12} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Ulda Shara
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02113
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
													AM
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Abrem Moses
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces10} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Elira Voreme
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces9} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aposel Somes
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 65432
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle className="btn btn-sm btn-icon btn-light btn-wave no-caret" variant='' type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
													RO
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Rubek Onoke
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 5613
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces2} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Shara Alisab
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces4} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Yakebeth Jone
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Static Backdrop" code={offcanvas5} className="custom-card">
						<Button variant='primary' className="" type="button" data-bs-toggle="offcanvas" onClick={handleShow2}
							data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
							Toggle static offcanvas
						</Button>
						<Offcanvas show={show2} onHide={handleClose2} backdrop="static" className="offcanvas-start" tabindex={-1}
							id="staticBackdrop" aria-labelledby="staticBackdropLabel">
							<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="staticBackdropLabel">Contacts</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className="p-0">
								<div>
									<ul className="list-group list-group-flush mb-0">
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces15} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Simon Cowall
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8923
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces14} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Adwar Kohali
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8913
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
													AJ
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces13} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces12} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Ulda Shara
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02113
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
													AM
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Abrem Moses
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces10} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Elira Voreme
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces9} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aposel Somes
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 65432
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
													RO
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Rubek Onoke
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 5613
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces2} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Shara Alisab
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces4} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Yakebeth Jone
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={3}>
					<Showcode title="Body Scrolling Backdrop" code={offcanvas4} className="custom-card">
						<Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow3}
							data-bs-target="#offcanvasWithBothOptions"
							aria-controls="offcanvasWithBothOptions">Enable both scrolling &amp;
							backdrop</Button>
						<Offcanvas show={show3} onHide={handleClose3} backdrop={true} className="offcanvas-start" data-bs-scroll="true" tabindex="-1"
							id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
							<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Contacts</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className="p-0">
								<div>
									<ul className="list-group list-group-flush mb-0">
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces15} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Simon Cowall
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8923
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces14} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Adwar Kohali
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8913
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
													AJ
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces13} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces12} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Ulda Shara
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02113
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
													AM
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Abrem Moses
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces10} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Elira Voreme
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces9} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aposel Somes
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 65432
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
													RO
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Rubek Onoke
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 5613
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces2} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Shara Alisab
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces4} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Yakebeth Jone
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
					</Showcode>
				</Col>
				<Col xl={5}>
					<Showcode title="Placement" code={offcanvas3}>
						<Button variant='primary' className="m-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowt}
							data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
							offcanvas</Button>
						<Offcanvas placement='top' show={showt} onHide={handleCloset} className="offcanvas-top" tabindex="-1" id="offcanvasTop"
							aria-labelledby="offcanvasTopLabel">
							<Offcanvas.Header closeButton className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas top
								</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className=" small">
								...
							</Offcanvas.Body>
						</Offcanvas>
						<Button variant='primary' className="m-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowr}
							data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
							offcanvas</Button>
						<Offcanvas placement='end' show={showr} onHide={handleCloser} backdrop={true} className="offcanvas offcanvas-end" tabindex={-1} id="offcanvasRight"
							aria-labelledby="offcanvasExampleLabel">
							<Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
								<h5 className="offcanvas-title" id="offcanvasExampleLabel">Contacts</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className="p-0">
								<div>
									<ul className="list-group list-group-flush mb-0">
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces15} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Simon Cowall
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8923
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces14} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Adwar Kohali
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 8913
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-info-transparent avatar-rounded me-3">
													AJ
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces13} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aliza John
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 9013
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces12} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Ulda Shara
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02113
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-warning-transparent avatar-rounded me-3">
													AM
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Abrem Moses
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces10} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Elira Voreme
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces9} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Aposel Somes
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 65432
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle className="btn btn-sm btn-icon btn-light btn-wave no-caret" variant='' type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<span className="avatar avatar-lg bg-pink-transparent avatar-rounded me-3">
													RO
												</span>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Rubek Onoke
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 873 5613
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces2} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Shara Alisab
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02456
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex">
												<div className="avatar avatar-md avatar-rounded me-3">
													<img src={faces4} alt="" />
												</div>
												<div className="flex-1  flex-between">
													<div>
														<h6 className="mb-1 fw-semibold">
															Yakebeth Jone
														</h6>
														<p className="fw-semibold fs-11 mb-0 text-muted">
															+1(555) 76554 02876
														</p>
													</div>
													<div className="d-flex align-items-center">
														<Link to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
														<Dropdown>
															<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="ri-more-2-fill"></i>
															</Dropdown.Toggle>
															<Dropdown.Menu>
																<Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
																<Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</Offcanvas.Body>
						</Offcanvas>
						<Button variant='primary' className="m-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowb}
							data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
							bottom
							offcanvas</Button>
						<Offcanvas placement='bottom' show={showb} onHide={handleCloseb} className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
							aria-labelledby="offcanvasBottomLabel">
							<Offcanvas.Header closeButton className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
								</h5>
							</Offcanvas.Header>
							<Offcanvas.Body className=" small">
								...
							</Offcanvas.Body>
						</Offcanvas>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Offcanvass;
