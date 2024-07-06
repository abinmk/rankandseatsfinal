import React, { FC, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import Select from "react-select";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

//IMAGES
import faces4 from "../../../../assets/images/faces/4.jpg";
import faces5 from "../../../../assets/images/faces/5.jpg";
import faces3 from "../../../../assets/images/faces/3.jpg";
import faces6 from "../../../../assets/images/faces/6.jpg";
import faces7 from "../../../../assets/images/faces/7.jpg";
import faces8 from "../../../../assets/images/faces/8.jpg";
import faces11 from "../../../../assets/images/faces/11.jpg";
import faces15 from "../../../../assets/images/faces/15.jpg";
import faces16 from "../../../../assets/images/faces/16.jpg";

const Mailapp = () => {
	//
	const [value1, setValue1] = useState("");
	//
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const Mailoptions = [
		{ value: "jay@gmail.com", label: "jay@gmail.com" },
		{ value: "kia@gmail.com", label: "kia@gmail.com" },
		{ value: "don@gmail.com", label: "don@gmail.com" },
		{ value: "kimo@gmail.com", label: "kimo@gmail.com" },
	];

	return (
		<>
			<div className="main-mail-container p-2 gap-4 d-lg-flex">
				<div className="mail-navigation mb-5">
					<div className="d-grid align-items-top p-3 border-bottom">
						<Button variant='' className="btn btn-primary d-flex align-items-center justify-content-center" data-bs-toggle="modal"
							onClick={handleShow}
							data-bs-target="#mail-Compose">
							<i className="ri-add-circle-line fs-16 align-middle me-1"></i>Compose Mail
						</Button>
						<Modal size="lg" show={show} onHide={handleClose} className="modal-lg fade" id="mail-Compose" tabIndex={-1} aria-labelledby="mail-ComposeLabel" aria-hidden="true">

							<Modal.Header closeButton className="">
								<h6 className="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
							</Modal.Header>
							<Modal.Body className="px-4">
								<Row>
									<Col xl={6} className="mb-2">
										<Form.Label htmlFor="fromMail" className="form-label">From<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
										<Form.Control type="email" className="form-control" id="fromMail" defaultValue="jsontaylor2345@gmail.com" />
									</Col>
									<Col xl={6} className="mb-2">
										<Form.Label htmlFor="toMail" className="form-label">To<sup>
											<i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
										<Select isMulti name="colors" options={Mailoptions} className="basic-multi-select"
											menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Mailoptions[0]]}
										/>
									</Col>
									<Col xl={6} className="mb-2">
										<Form.Label htmlFor="mailCC" className="form-label text-dark fw-semibold">Cc</Form.Label>
										<Form.Control type="email" className="form-control" id="mailCC" />
									</Col>
									<Col xl={6} className=" mb-2">
										<Form.Label htmlFor="mailBcc" className="form-label text-dark fw-semibold">Bcc</Form.Label>
										<Form.Control type="email" className="form-control" id="mailBcc" />
									</Col>
									<Col xl={12} className="mb-2">
										<Form.Label htmlFor="Subject" className="form-label">Subject</Form.Label>
										<Form.Control type="text" className="form-control" id="Subject" placeholder="Subject" />
									</Col>
									<Col xl={12}>
										<label className="col-form-label">Content :</label>
										<div className="mail-compose">
											<div id="mail-compose-editor">
												<ReactQuill theme="snow" value={value1} onChange={setValue1} />
											</div>
										</div>
									</Col>
								</Row>
							</Modal.Body>
							<Modal.Footer>
								<Button variant='' type="button" className="btn btn-light" onClick={handleClose}
									data-bs-dismiss="modal">Cancel</Button>
								<Button variant='' type="button" className="btn btn-primary">Send</Button>
							</Modal.Footer>
						</Modal>
					</div>
					<div>
						<SimpleBar id="mail-main-nav">
							<ul className="list-unstyled mail-main-nav">
								<li className="px-0 pt-0 mail-nav-heading">
									<span className="fs-11 text-muted op-7 fw-semibold">MAILS</span>
								</li>
								<li className="active">
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-inbox-archive-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												All Mails
											</span>
											<span className="badge bg-info-transparent rounded-1">789</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-inbox-archive-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Inbox
											</span>
											<span className="badge bg-success-transparent rounded-1">5</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-send-plane-2-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Sent
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-draft-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Drafts
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-spam-2-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Spam
											</span>
											<span className="badge bg-warning-transparent rounded-1">8</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-bookmark-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Important
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-delete-bin-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Trash
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-archive-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Archive
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-star-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Starred
											</span>
											<span className="badge bg-secondary-transparent rounded-1">2</span>
										</div>
									</Link>
								</li>
								<li className="px-0 mail-nav-heading">
									<span className="fs-11 text-muted op-7 fw-semibold">SETTINGS</span>
								</li>
								<li>
									<Link to={`${import.meta.env.BASE_URL}pages/email/mailsettings`}>
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i className="ri-settings-3-line align-middle fs-14"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Settings
											</span>
										</div>
									</Link>
								</li>
								<li className="px-0 mail-nav-heading">
									<span className="fs-11 text-muted op-7 fw-semibold">LABELS</span>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i
													className="bx bx-label align-middle fs-14 fw-semibold text-secondary"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Mail
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i
													className="bx bx-label align-middle fs-14 fw-semibold text-danger"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Home
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i
													className="bx bx-label align-middle fs-14 fw-semibold text-success"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Work
											</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-center">
											<span className="me-2 lh-1">
												<i
													className="bx bx-label align-middle fs-14 fw-semibold text-info"></i>
											</span>
											<span className="flex-fill text-nowrap">
												Friends
											</span>
										</div>
									</Link>
								</li>
								<li className="px-0 mail-nav-heading">
									<span className="fs-11 text-muted op-7 fw-semibold">ONLINE USERS</span>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-top lh-1">
											<div className="me-2">
												<span className="avatar avatar-sm online avatar-rounded">
													<img src={faces4} alt="" />
												</span>
											</div>
											<div>
												<p className="text-default fw-semibold mb-1">Angelica</p>
												<p className="fs-12 text-muted mb-0">Hello this is angelica.</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-top lh-1">
											<div className="me-2">
												<span className="avatar avatar-sm online avatar-rounded">
													<img src={faces6} alt="" />
												</span>
											</div>
											<div>
												<p className="text-default fw-semibold mb-1">Rexha</p>
												<p className="fs-12 text-muted mb-0">Thanks for sharing file &#128512;.</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#">
										<div className="d-flex align-items-top lh-1">
											<div className="me-2">
												<span className="avatar avatar-sm online avatar-rounded">
													<img src={faces5} alt="" />
												</span>
											</div>
											<div>
												<p className="text-default fw-semibold mb-1">Alirodse</p>
												<p className="fs-12 text-muted mb-0">Hello Hiii.... &#129306;&#128525;.</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</SimpleBar>
					</div>
				</div>
				<div className="total-mails mt-lg-0">
					<div className="p-3 d-flex align-items-center border-bottom">
						<div className="me-3">
							<input className="form-check-input" type="checkbox" id="checkAll" value="" aria-label="..." />
						</div>
						<OverlayTrigger placement="left" overlay={<Tooltip className='tooltip'>refresh</Tooltip>}>
							<Link to="#" className="  fs-14" data-bs-toggle="tooltip" title="" data-bs-original-title="refresh">
								<i className="fe fe-rotate-cw text-muted"></i>
							</Link>
						</OverlayTrigger>
						<Dropdown className="ms-3">
							<Dropdown.Toggle variant='' href="#" className=" text-muted border-0 fs-14 no-caret" data-bs-toggle="dropdown" aria-expanded="true">
								<i className="fe fe-more-vertical"></i>
							</Dropdown.Toggle>
							<Dropdown.Menu role="menu" data-popper-placement="bottom-start">
								<Dropdown.Item href="#">Read</Dropdown.Item>
								<Dropdown.Item href="#">Unread</Dropdown.Item>
								<Dropdown.Item href="#">Mark As Read</Dropdown.Item>
								<Dropdown.Item href="#">Spam</Dropdown.Item>
								<Dropdown.Item href="#">Delete</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<div className="unstyled inbox-pagination ms-auto mb-0 ps-3">
							<span>
								<Link to="#" className="text-muted d-inline-flex">1-50 of 234</Link>
								<Link to="#" className="fs-18  op-6">
									<i className="fe fe-chevron-left text-muted"></i>
								</Link>
								<Link to="#" className=" fs-18">
									<i className="fe fe-chevron-right text-muted"></i>
								</Link>
							</span>
						</div>
					</div>
					<SimpleBar style={{ height: "900px" }} id="mail-messages" className="mail-messages" >
						<ul className="list-unstyled mb-0">
							<li className="active">
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">New Project details</span>
											<span className="fs-12 text-muted text-truncate">
												<span className="badge bg-danger rounded-1 me-1">mail</span>
												&#128525; Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor&#128077; cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">Most Probable date of project completion</span>
											<span className="fs-12 text-muted text-truncate">
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="active">
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">Personal Mail</span>
											<span className="fs-12 text-muted text-truncate">
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper  nisi enean vulputat enean commodo &#128522;&#128525;li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="active">
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">Applying for bank loan?</span>
											<span className="fs-12 text-muted text-truncate">
												<span className="badge bg-success rounded-1  me-1">Friends</span>
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">
												Life Insurance Corporation</span>
											<span className="fs-12 text-muted text-truncate">
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum &#129306;semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">
												Life Insurance Corporation</span>
											<span className="fs-12 text-muted text-truncate">
												<span className="badge bg-danger rounded-1  me-1">mail</span>
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="active">
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">
												&#128522;History of planets are discovered yesterday.....</span>
											<span className="fs-12 text-muted text-truncate">
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">
												New Project details</span>
											<span className="fs-12 text-muted text-truncate">
												<span className="badge bg-info rounded-1  me-1">Home</span>
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="active">
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">
												Life Insurance Corporation</span>
											<span className="fs-12 text-muted text-truncate">
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo &#128525;li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">
												Life Insurance Corporation</span>
											<span className="fs-12 text-muted text-truncate">
												<span className="badge bg-danger rounded-1  me-1">mail</span>
												Lorem ipsum dolor sit amet consectetur adipisicing elit-&#127881;&#127874; viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="border-bottom">
								<div className="d-flex align-items-top">
									<div className="me-3 mt-1">
										<input className="form-check-input" type="checkbox" value="" aria-label="..." />
									</div>
									<div className="me-2 lh-1">
										<Link to="#" className="main-mail-star  d-inline-block">
											<i className="bx bx-star"></i>
										</Link>
									</div>
									<div className="me-1 lh-1">
										<Link to="#" data-bs-toggle="tooltip" title="" className="main-mail-star d-inline-block" data-bs-original-title="mark as Important">
											<i className="bx bx-label"></i>
										</Link>
									</div>
									<div className="flex-fill ms-2 subject-container">
										<Link to={`${import.meta.env.BASE_URL}pages/email/mailchat`} className="stretched-link"></Link>
										<p className="mb-0  main-mail-subject">
											<span className="d-block mb-0 fw-semibold fs-14">
												New Project details</span>
											<span className="fs-12 text-muted text-truncate">
												<span className="badge bg-info rounded-1  me-1">Home</span>
												Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
											</span>
										</p>
									</div>
									<div className="icons-mail">
										<div className=" mail-date float-end text-muted fw-normal fs-11"><span className="me-2"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
										<div className="mail-hover-icons">
											<div className="d-flex justify-content-end align-items-center">
												<OverlayTrigger placement="top" overlay={<Tooltip>mark as read</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-mail"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>delete</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="">
														<i className="fe fe-trash"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Snooze</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-clock"></i>
													</Link>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>archive</Tooltip>}>
													<Link to="#" data-bs-toggle="tooltip" title="" >
														<i className="fe fe-download"></i>
													</Link>
												</OverlayTrigger>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</SimpleBar>
					{/* </SimpleBar> */}
					<div className="float-end mt-3 pe-3">
						<nav aria-label="Page navigation" className="pagination-style-4">
							<Pagination className="pagination mb-0 gap-2">
								<Pagination.Item className="bg-light rounded-5" href="#">
									Prev
								</Pagination.Item>
								<Pagination.Item active className=" rounded-5" href="#">1</Pagination.Item>
								<Pagination.Item className="bg-light rounded-5 d-none d-sm-block" href="#">2</Pagination.Item>
								<Pagination.Item className="bg-light rounded-5" href="#">
									<i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item className="bg-light rounded-5 d-none d-sm-block" href="#">16</Pagination.Item>
								<Pagination.Item className="bg-light rounded-5" href="#">17</Pagination.Item>
								<Pagination.Item className="bg-light rounded-5 text-primary" href="#">
									next
								</Pagination.Item>
							</Pagination>
						</nav>
					</div>
				</div>
				<div className="mail-recepients d-none d-lg-block">
					<div className="p-3 border-bottom">
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Add Recepient</Tooltip>}>
							<Button variant='' className="btn btn-light btn-icon rounded-pill" data-bs-toggle="tooltip"
								data-bs-placement="top" data-bs-title="Add Recepient"><i className="ri-add-line"></i></Button>
						</OverlayTrigger>

					</div>
					<SimpleBar className="p-3 d-flex flex-column align-items-center total-mail-recepients" id="mail-recepients">
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Sujika</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar online avatar-rounded">
									<img src={faces5} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sujika" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Samantha May</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar online avatar-rounded">
									<img src={faces7} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Samantha May" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Brenda</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar offline avatar-rounded">
									<img src={faces4} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Brenda" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Monika</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar offline online avatar-rounded">
									<img src={faces8} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Monika" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Kiara Jah</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar offline avatar-rounded">
									<img src={faces3} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Kiara Jah" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Sujika</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar offline avatar-rounded">
									<img src={faces11} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sujika" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Kim Noah</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar online avatar-rounded">
									<img src={faces16} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Kim Noah" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Professor</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar offline avatar-rounded">
									<img src={faces11} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Professor" />
								</span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Alex Carey</Tooltip>}>
							<Link to="#" className="mail-recepeint-person">
								<span className="avatar offline avatar-rounded">
									<img src={faces15} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Alex Carey" />
								</span>
							</Link>
						</OverlayTrigger>
					</SimpleBar>
				</div>
			</div>

		</>
	);
};

export default Mailapp;
