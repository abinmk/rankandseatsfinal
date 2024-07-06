import React, { FC, Fragment, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import ReactQuill from "react-quill";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import Select from "react-select";

//IMAGES
import faces4 from "../../../../assets/images/faces/4.jpg";
import faces3 from "../../../../assets/images/faces/3.jpg";
import faces6 from "../../../../assets/images/faces/6.jpg";
import faces7 from "../../../../assets/images/faces/7.jpg";
import faces8 from "../../../../assets/images/faces/8.jpg";
import faces11 from "../../../../assets/images/faces/11.jpg";
import faces15 from "../../../../assets/images/faces/15.jpg";
import faces16 from "../../../../assets/images/faces/16.jpg";
import faces5 from "../../../../assets/images/faces/5.jpg";
import faces10 from "../../../../assets/images/faces/10.jpg";
import faces12 from "../../../../assets/images/faces/12.jpg";

const Mailchat = () => {
	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
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
		<Fragment>

			<div className="main-mail-container pt-2 gap-4 d-flex mb-5">
				<div className="mail-navigation  d-none d-md-block">
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
								<Button variant='' onClick={handleClose} type="button" className="btn btn-light"
									data-bs-dismiss="modal">Cancel</Button>
								<Button variant='' type="button" className="btn btn-primary">Send</Button>
							</Modal.Footer>
						</Modal>
					</div>
					<div>
						<SimpleBar style={{ height: "650px" }} id="mail-main-nav">
							<ul className="list-unstyled mail-main-nav" id="mail-main-nav">

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
				<div className="mails-information">
					<div className="mail-info-header d-xxl-flex align-items-center">
						<div className="mail-option-read d-md-flex  d-block">
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Back to inbox</Tooltip>}>
								<Link to="#" className=" vertical-phone" data-bs-toggle="tooltip" title="" data-bs-original-title="Back to inbox">
									<i className="bx bx-left-arrow-alt"></i>
								</Link>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Archive</Tooltip>}>
								<Link to="#" className=" vertical-phone" data-bs-toggle="tooltip" title="" data-bs-original-title="Archive">
									<i className="bx bx-download"></i>
								</Link>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Report spam</Tooltip>}>
								<Link to="#" className=" vertical-phone" data-bs-toggle="tooltip" title="" data-bs-original-title="Report spam">
									<i className="bx bx-error-alt"></i>
								</Link>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>delete</Tooltip>}>
								<Link to="#" className=" vertical-phone" data-bs-toggle="tooltip" title="" data-bs-original-title="delete">
									<i className="bx bx-trash-alt"></i>
								</Link>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>mark as unread</Tooltip>}>
								<Link to="#" className=" vertical-phone" data-bs-toggle="tooltip" title="" data-bs-original-title="mark as unread">
									<i className="bx bx-envelope"></i>
								</Link>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Snooze</Tooltip>}>
								<Link to="#" className=" vertical-phone d-none d-xl-block" data-bs-toggle="dropdown" title="Snooze">
									<i className="bx bx-time-five"></i>
								</Link>
							</OverlayTrigger>
							<Dropdown.Menu>
								<Dropdown.Item className="fs--14 font-weight-semibold  border-bottom" href="#">Snooze Until..</Dropdown.Item>
								<Dropdown.Item className="fs--14" href="#">Today</Dropdown.Item>
								<Dropdown.Item className="fs--14" href="#">Tommaro</Dropdown.Item>
								<Dropdown.Item className="fs--14" href="#">This weekend</Dropdown.Item>
								<Dropdown.Item className="fs--14" href="#">Last weekend</Dropdown.Item>
							</Dropdown.Menu>
							<Dropdown>
								<Dropdown.Toggle variant='' href="#" className=" vertical-phone  profile-user d-none d-xl-block no-caret " data-bs-toggle="dropdown" title="move to">
									<i className="bx bx-folder-open"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item className=" fs--14 font-weight-semibold  border-bottom" href="#">Move TO</Dropdown.Item>
									<Dropdown.Item className=" fs--14" href="#"><i className="fa fa-inbox me-2"></i>Inbox</Dropdown.Item>
									<Dropdown.Item className=" fs--14" href="#"><i className="far fa-paper-plane me-2"></i> Sent</Dropdown.Item>
									<Dropdown.Item className=" fs--14" href="#"><i className="far fa-trash-alt  me-2"></i>Trash</Dropdown.Item>
									<Dropdown.Item className=" fs--14" href="#"><i className="far fa-file me-2"></i>Drafts</Dropdown.Item>
									<Dropdown.Item className=" fs--14" href="#"><i className="fas fa-download me-2"></i>  Archive</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Dropdown>
								<Dropdown.Toggle variant='' href="#" className=" vertical-phone  profile-user d-none d-xl-block no-caret " data-bs-toggle="dropdown" title="copy to">
									<i className="bx bx-copy"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item className="fs--14 font-weight-semibold  border-bottom" href="#">Copy TO</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"><i className="fa fa-inbox me-2"></i>Inbox</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"><i className="far fa-paper-plane me-2"></i> Sent</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"><i className="far fa-trash-alt  me-2"></i>Trash</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"><i className="far fa-file me-2"></i>Drafts</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"><i className="fas fa-download me-2"></i>  Archive</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Dropdown>
								<Dropdown.Toggle variant='' href="#" className=" vertical-phone  profile-user d-none d-lg-block  no-caret" data-bs-toggle="dropdown" title="Label as">
									<i className="bx bx-label"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item className="s--14 font-weight-semibold  border-bottom" href="#">Label as</Dropdown.Item>
									<Dropdown.Item className="fs--14"><label className="ckbox"><input className="form-check-input" type="checkbox" /><span className="ms-2">Main</span></label></Dropdown.Item>
									<Dropdown.Item className="fs--14"><label className="ckbox"><input className="form-check-input" type="checkbox" /><span className="ms-2">Home</span></label></Dropdown.Item>
									<Dropdown.Item className="fs--14"><label className="ckbox"><input className="form-check-input" type="checkbox" /><span className="ms-2">work</span></label></Dropdown.Item>
									<Dropdown.Item className="fs--14"><label className="ckbox"><input className="form-check-input" type="checkbox" /><span className="ms-2">Friends</span></label></Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Dropdown>
								<Dropdown.Toggle variant='' href="#" className=" vertical-phone no-caret" data-bs-toggle="dropdown" title="more">
									<i className="bx bx-dots-vertical-rounded"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item className="fs--14" href="#"> Mark As Important</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"> Unread</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"> Mark as Read</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#">Add Star</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"> delete</Dropdown.Item>
									<Dropdown.Item className="fs--14" href="#"> None</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
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
					<div className="mail-info-body p-4" >
						<SimpleBar style={{ height: "530px" }} id="mail-info-body">
							<div className="d-xl-flex d-block align-items-center justify-content-between mb-4">
								<div>
									<p className="fs-20 fw-semibold mb-0">History of planets are discovered yesterday.</p>
								</div>
								<div className="float-xl-
                              end">
									<span className="me-2 fs-12 text-muted">Oct-22-2022,03:05PM</span>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<div className="me-1">
									<span className="avatar avatar-md online me-2 avatar-rounded mail-msg-avatar">
										<img src={faces12} alt="" />
									</span>
								</div>
								<div className="flex-fill">
									<h6 className="mb-0 fw-semibold">Michael Jeremy</h6>
									<span className="text-muted fs-12">michaeljeremy2194@gmail.com</span>
								</div>
							</div>
							<div className="main-mail-content my-4">
								<p className="fs-14 fw-semibold mb-2">Hi, Json Taylor Greetings &#128400;</p>
								<p className="mb-2 fs-12 text-muted">Earth, our home, is the third planet from the sun.  While scientists continue to hunt for clues of life beyond Earth,is the third planet from the sun.  While scientists continue to hunt for clues of life beyond Earth, our home planet remains the only place in the universe where we've ever identified living organisms. .</p>
								<p className="mb-2 fs-12 text-muted">Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and is mostly round because gravity generally pulls matter into a ball. But the spin of our home planet causes it to be squashed at its poles and swollen at the equator, making the true shape of the Earth an "oblate spheroidEarth has a diameter of roughly 8,000 miles (13,000 kilometers) and is mostly round because gravity generally pulls matter into a ball. But the spin of our home planet causes it to be squashed at its poles and swollen at the equator,
									making the true shape of the Earth an "oblate spheroid.".</p>
								<p className="mb-0 mt-4">
									<span className="d-block">Regards,</span>
									<span className="d-block">Michael Jeremy</span>
								</p>
							</div>
							<div className="mail-attachments mb-4">
								<div className="d-sm-flex justify-content-between align-items-center">
									<div className="mb-0">
										<span className="fs-14 fw-semibold d-inline-flex"><i className="ri-attachment-2 me-1 align-middle"></i>Attachments (1.8mb):</span>
									</div>
									<div>
										<Button variant='' className="btn btn-sm btn-success">Download All</Button>
									</div>
								</div>
								<div className="mt-2 d-xl-flex d-lg-block flex-wrap d-sm-flex">
									<Link to="#" className="mail-attachment border m-1">
										<div className="attachment-icon"><svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 512 512"><path fill="#FFF" d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#2B669F" d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 28.1 28.1h305c15.5 0 28.1-12.6 28.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#084272" d="M333.6 6v103.1h103z" /><g><path fill="#084272" d="M465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" /><path fill="#1A252D" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" /><path fill="#2B669F" d="M64.1 308.4h383.7v124.5H64.1z" /></g><g fill="#2B669F"><path d="M298.3 78.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM298.3 110.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM391.8 142.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 174.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 206.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 238.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 270.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4z" /></g><g fill="#FFF"><path d="M229.3 373.3c0 6.9-1.6 12.5-4.7 16.7-3.1 4.2-7.5 6.3-13.2 6.3-2.2 0-4.2-.4-5.9-1.3-1.7-.9-3.2-2.1-4.5-3.7v21.8h-14.4v-63.8h13.6l.4 5c1.3-1.9 2.8-3.3 4.6-4.3 1.8-1 3.8-1.5 6.1-1.5 5.7 0 10.1 2.2 13.3 6.6 3.1 4.4 4.7 10.2 4.7 17.4v.8zm-14.3-.9c0-3.9-.6-7-1.7-9.4-1.1-2.4-3-3.5-5.4-3.5-1.6 0-3 .3-4.1.9-1.1.6-2 1.5-2.7 2.6v19.2c.7 1 1.6 1.7 2.7 2.2 1.1.5 2.5.7 4.1.7 2.5 0 4.3-1 5.4-3.1 1.1-2.1 1.6-5 1.6-8.7v-.9zM239.8 372.4c0-7.2 1.6-13 4.7-17.4 3.1-4.4 7.6-6.6 13.3-6.6 2.1 0 4 .5 5.8 1.5 1.7 1 3.3 2.4 4.6 4.2V329h14.4v66.4H270l-1-5.6c-1.4 2.1-3 3.7-4.9 4.8-1.9 1.1-4 1.7-6.4 1.7-5.7 0-10.1-2.1-13.2-6.3-3.1-4.2-4.7-9.7-4.7-16.6v-1zm14.4.9c0 3.7.5 6.7 1.6 8.7 1.1 2.1 2.9 3.1 5.5 3.1 1.5 0 2.8-.3 4-.8 1.1-.6 2.1-1.4 2.8-2.4v-18.6c-.7-1.2-1.7-2.2-2.8-2.8-1.1-.7-2.4-1-3.9-1-2.6 0-4.4 1.2-5.5 3.5-1.1 2.4-1.7 5.5-1.7 9.4v.9zM300 395.4v-36.1h-6.6v-10h6.6v-4.8c0-5.3 1.6-9.3 4.8-12.2 3.2-2.9 7.7-4.3 13.5-4.3 1.1 0 2.2.1 3.3.2 1.1.2 2.4.4 3.8.7l-1.1 10.6c-.8-.1-1.5-.2-2.1-.3-.6-.1-1.3-.1-2.2-.1-1.8 0-3.2.5-4.2 1.4-1 .9-1.4 2.3-1.4 4v4.8h9.1v10h-9.1v36.1H300z" /></g></svg>
										</div>
										<div className="lh-1">
											<p className="mb-1 attachment-name text-truncate">
												Earth_Archeology_2.21-4.pdf
											</p>
											<p className="mb-0 fs-11 text-muted">
												0.85MB
											</p>
										</div>
									</Link>
									<Link to="#" className="mail-attachment m-1 border">
										<div className="attachment-icon">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFF" d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#24A885" d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 27.1 28.1h305c16.5 0 29.1-12.6 29.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#16876B" d="M333.6 6v103.1h103zM465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" /><path fill="#59E0B9" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" /><path fill="#2EBA98" d="M64.1 308.4h383.7v124.5H64.1z" /><path fill="#16876B" d="M298.3 78.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM298.3 110.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM391.8 142.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 174.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 206.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 238.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 270.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4z" /><path fill="#FFF" d="M191.3 349.7v43.9c0 5.4-1.4 9.6-4.3 12.5-2.9 2.9-6.9 4.4-12.1 4.4-1.2 0-2.2-.1-3.2-.2s-2-.3-3.1-.5l.6-10.2c.8.2 1.4.3 2 .4s1.2.1 2.1.1c1.5 0 2.6-.5 3.4-1.6.8-1.1 1.2-2.7 1.2-4.8v-43.9h13.4zm-.2-10h-13.6v-9.1h13.6v9.1zM244.8 372.3c0 6.5-1.5 11.7-4.4 15.7-2.9 3.9-7.1 5.9-12.4 5.9-2.1 0-3.9-.4-5.5-1.2-1.6-.8-3-2-4.2-3.5v20.5h-13.5v-60h12.8l.4 4.7c1.2-1.8 2.6-3.1 4.3-4.1 1.7-1 3.6-1.4 5.7-1.4 5.4 0 9.5 2.1 12.5 6.2s4.4 9.6 4.4 16.3v.9zm-13.5-.8c0-3.7-.5-6.6-1.6-8.8-1.1-2.2-2.8-3.3-5.1-3.3-1.5 0-2.8.3-3.9.8-1.1.6-1.9 1.4-2.5 2.4v18.1c.6.9 1.5 1.6 2.5 2.1 1.1.5 2.4.7 3.9.7 2.4 0 4.1-1 5.1-2.9 1-2 1.5-4.7 1.5-8.2v-.9zM275.7 393.9c-6.6 0-11.7-2-15.4-6-3.7-4-5.6-9-5.6-15.1v-1.5c0-6.6 1.8-12 5.3-16.2 3.5-4.2 8.6-6.2 15.2-6.2 5.8 0 10.4 1.7 13.6 5.2 3.2 3.5 4.8 8.3 4.8 14.4v7.1h-24.8l-.1.2c.2 2.3 1.1 4.1 2.5 5.5 1.5 1.4 3.6 2.1 6.3 2.1 2.6 0 4.7-.2 6.5-.6 1.7-.4 3.7-1.1 5.9-2l3.2 8.3c-1.9 1.4-4.4 2.5-7.5 3.4-3.1 1-6.4 1.4-9.9 1.4zm-.5-34.5c-2.2 0-3.8.7-4.8 2.1-1 1.4-1.6 3.2-1.8 5.6l.1.2h11.7v-1c0-2.2-.4-3.9-1.2-5.1-.7-1.3-2.1-1.8-4-1.8zM303.3 371.5c0-6.8 1.5-12.2 4.4-16.3 3-4.1 7.1-6.2 12.5-6.2 2.3 0 4.3.5 6 1.6 1.7 1.1 3.2 2.6 4.5 4.6l.9-5.4h11.9v42.9c0 5.7-2 10.1-5.9 13.3-3.9 3.1-9.3 4.7-16.2 4.7-2.2 0-4.6-.3-7.1-.9-2.5-.6-4.8-1.4-7.1-2.5l2.3-10c1.9.9 3.8 1.5 5.6 1.9 1.8.4 3.8.6 6.1.6 2.9 0 5-.6 6.4-1.7 1.4-1.1 2.1-3 2.1-5.4v-3.4c-1.2 1.6-2.7 2.8-4.3 3.6-1.6.8-3.5 1.2-5.5 1.2-5.3 0-9.5-2-12.4-5.9-2.9-4-4.4-9.2-4.4-15.7v-1zm13.5.8c0 3.5.5 6.3 1.5 8.2 1 2 2.8 2.9 5.2 2.9 1.5 0 2.7-.2 3.8-.7 1.1-.5 1.9-1.1 2.6-2v-18.2c-.7-1-1.5-1.8-2.6-2.4-1-.5-2.3-.8-3.7-.8-2.4 0-4.1 1.1-5.2 3.3-1.1 2.2-1.6 5.2-1.6 8.8v.9z" /></svg>
										</div>
										<div className="lh-1">
											<p className="mb-1 attachment-name text-truncate">
												Planets_Image.Jpeg
											</p>
											<p className="mb-0 fs-11 text-muted">
												457KB
											</p>
										</div>
									</Link>
									<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Image_012.jpeg</Tooltip>}>
										<Link to="#" className="btn btn-icon btn-outline-light m-1 btn-lg border">
											<i className="ri-attachment-2 lh-1"></i>
										</Link>
									</OverlayTrigger>
								</div>
							</div>
							<div className="mb-3">
								<span className="fs-14 fw-semibold d-inline-flex"><i className="ri-reply-all-line me-1 align-middle"></i>Reply:</span>
							</div>
							<div className="mail-reply">
								<div id="mail-reply-editor">
									<ReactQuill theme="snow" value={value2} onChange={setValue2} />
								</div>
							</div>
						</SimpleBar>
					</div>
					<div className="mail-info-footer d-sm-flex align-items-center justify-content-between">
						<div className="mb-3 mb-sm-0">
							<OverlayTrigger placement="left" overlay={<Tooltip className='tooltip'>Print</Tooltip>}>
								<Button variant='' className="btn btn-icon btn-light m-1" data-bs-toggle="tooltip"
									data-bs-placement="top" data-bs-title="Print">
									<i className="ri-printer-line"></i>
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Mark as read</Tooltip>}>
								<Button variant='' className="btn btn-icon btn-light  m-1" data-bs-toggle="tooltip"
									data-bs-placement="top" data-bs-title="Mark as read">
									<i className="ri-mail-open-line"></i>
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Reload</Tooltip>}>
								<Button variant='' className="btn btn-icon btn-light  m-1" data-bs-toggle="tooltip"
									data-bs-placement="top" data-bs-title="Reload">
									<i className="ri-refresh-line"></i>
								</Button>
							</OverlayTrigger>
						</div>
						<div>
							<Button variant='' className="btn btn-secondary d-inline-flex m-1">
								<i className="ri-share-forward-line me-1 align-middle"></i>Forward
							</Button>
							<Button variant='' className="btn btn-danger  m-1 d-inline-flex">
								<i className="ri-reply-all-line me-1 align-middle"></i>Reply
							</Button>
						</div>
					</div>
				</div>
				<div className="mail-recepients  d-none d-md-block">
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
									<img src={faces10} alt="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Professor" />
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

		</Fragment>
	);
};

export default Mailchat;
