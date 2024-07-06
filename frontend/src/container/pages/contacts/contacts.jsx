import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";

//IMAGES
import faces1 from "../../../assets/images/faces/1.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces13 from "../../../assets/images/faces/13.jpg";
import faces14 from "../../../assets/images/faces/14.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces21 from "../../../assets/images/faces/21.jpg";
import media39 from "../../../assets/images/media/media-39.jpg";
import media13 from "../../../assets/images/media/media-13.jpg";
import media34 from "../../../assets/images/media/media-34.jpg";
import media21 from "../../../assets/images/media/media-21.jpg";
import media63 from "../../../assets/images/media/media-63.jpg";
import media36 from "../../../assets/images/media/media-36.jpg";
import media8 from "../../../assets/images/media/media-8.jpg";

const Contacts = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Body>
							<div className="contact-header">
								<div className="d-sm-flex d-block align-items-center justify-content-between">
									<div className="h5 fw-semibold mb-0">Contacts</div>
									<div className="d-flex mt-sm-0 mt-2 align-items-center">
										<InputGroup>
											<Form.Control type="text" className="bg-light" placeholder="Search Contact" aria-describedby="search-contact-member" />
											<Button variant='' aria-label="button" className="btn btn-primary" type="button" id="search-contact-member"><i className="ri-search-line"></i></Button>
										</InputGroup>
										<Dropdown className="ms-2">
											<Dropdown.Toggle variant='' aria-label="button" className="btn btn-icon btn-primary-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
												<i className="ti ti-dots-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu as="ul" className="dropdown-menu-start">
												<Dropdown.Item href="#">Delete All</Dropdown.Item>
												<Dropdown.Item className=" border-bottom" href="#">Copy All</Dropdown.Item>
												<Dropdown.Item href="#">Move To</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
										<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Add Contact </Tooltip>}>
											<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-secondary-light ms-2"
												data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Contact">
												<i className="ri-add-line"></i></Button>
										</OverlayTrigger>

									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media39} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Dwayne Happy
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">dwaynehappy235@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 985 2893
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top ">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces15} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Simon Cowall
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 873 8923
										</p>
									</div>
								</div>
							</div>
							<div className="">
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top ">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces4} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Melissa Jane
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 354 2345
										</p>
									</div>
								</div>
							</div>
							<div>
								<i className="ri-heart-3-fill contact-hover-fave fs-16 text-danger"></i>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces5} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Meisha Tite
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">meishatite456@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 675 4680
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces13} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Sahne Watson
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">shanewatson@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 674 7824
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces2} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Susana Sane
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">susanasane@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 347 0923
										</p>
									</div>
								</div>
							</div>
							<div>
								<i className="ri-heart-3-fill contact-hover-fave fs-16 text-danger"></i>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces10} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Andrew Gerfield
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">andrewgerfield00@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 765 8937
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media63} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Devon Convoy
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">devonconvoy65@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 693 7836
										</p>
									</div>
								</div>
							</div>
							<div>
								<i className="ri-heart-3-fill contact-hover-fave fs-16 text-danger"></i>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces21} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Samantha Melon
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">samanthamelon@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 890 5687
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces11} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Elisha Smith
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">elishasmith@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 972 9883
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded mb-1 bg-primary">
										SJ
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Shensovic Jeremy
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">shensovicjeremy@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 238 2342
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces12} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Jason Mama
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">jasonmama96@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 875 6789
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces1} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Monika Karen
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">monikakaren@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 568 9234
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media13} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Tom Holland
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">tomholland98@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 892 4334
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media36} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Anelica Julie
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">angelicajulie@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 882 3445
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces8} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Aneera Khan
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">aneerakhan@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 973 8734
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces14} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Umaga Nigel
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 783 0213
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media8} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Json Taylor
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">jsontaylor@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 234 2452
										</p>
									</div>
								</div>
							</div>
							<div>
								<i className="ri-heart-3-fill contact-hover-fave fs-16 text-danger"></i>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media34} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Gahaskar Shaik
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">gahaskarshaik@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 982 7648
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces6} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Ramika Missi
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">ramikamissi@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 982 4834
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media8} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Json Taylor
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">jsontaylor@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 234 2452
										</p>
									</div>
								</div>
							</div>
							<div>
								<i className="ri-heart-3-fill contact-hover-fave fs-16 text-danger"></i>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces7} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Karizma Tope
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">Karizmatope@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 890 2455
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={faces1} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Monika Karen
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">monikakaren@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 568 9234
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
				<div className="col-xxl-2 col-xl-4 col-lg-4 col-sm-6">
					<div className="card custom-card text-center">
						<div className="card-body contact-action">
							<div className="contact-overlay"></div>
							<div className="align-items-top">
								<div className="">
									<div className="avatar avatar-xl avatar-rounded">
										<img src={media21} alt="" />
									</div>
									<div>
										<h6 className="mb-1 fw-semibold">
											Balvinder Singh
										</h6>
										<p className="mb-1 text-muted contact-mail text-truncate">balvindersingh@gmail.com</p>
										<p className="fw-semibold fs-11 mb-0 text-primary">
											+1(555) 002 1239
										</p>
									</div>
								</div>
							</div>
							<div>
								<Button variant='' aria-label="button" className="btn btn-sm btn-icon contact-hover-fave   btn-primary btn-wave" type="button" aria-expanded="false">
									<i className="ri-heart-3-line fs-16 text-fixed-white"></i>
								</Button>
							</div>
							<Dropdown className="contact-hover-dropdown">
								<Dropdown.Toggle variant='' aria-label="button" className="btn btn-sm btn-icon btn-primary btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="ri-more-2-fill"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" align="end">
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
			</Row>
			<div className="float-end mb-4">
				<nav aria-label="Page navigation" className="pagination-style-4">
					<Pagination as="ul" className="mb-0 gap-2">
						<Pagination.Item disabled href="#">
							Prev
						</Pagination.Item>
						<Pagination.Item active href="#">1</Pagination.Item>
						<Pagination.Item href="#">2</Pagination.Item>
						<Pagination.Item href="#">
							<i className="bi bi-three-dots"></i>
						</Pagination.Item>
						<Pagination.Item href="#">17</Pagination.Item>
						<Pagination.Item className="text-primary" href="#">
							next
						</Pagination.Item>
					</Pagination>
				</nav>
			</div>

		</Fragment>
	);
};

export default Contacts;
