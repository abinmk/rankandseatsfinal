import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Nav, Pagination, Row, Tab } from "react-bootstrap";
import { Todolistincompleted, Todolistinprogress, Todolistloopdata, Todolistpending, Option1, Option2 } from "./todolistdata";
import Select from "react-select";
import DatePicker from "react-datepicker";

//IMAGES
import faces8 from "../../../assets/images/faces/8.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import media66 from "../../../assets/images/media/media-66.png";
import { Link } from "react-router-dom";

const Todolist = () => {

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

	const [startDate1, setStartDate1] = useState(new Date());
	const handleDateChange1 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate1(date);
		}
	};
	const [startDate2, setStartDate2] = useState(new Date());
	const handleDateChange2 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate2(date);
		}
	};

	return (
		<Fragment>
			<Row>
				<Col xl={3}>
					<Card className="custom-card">
						<div className="p-0">
							<div className="p-3 d-grid border-bottom border-block-end-dashed">
								<Button type="button" className="btn btn-primary d-flex align-items-center justify-content-center" onClick={handleShow}
									data-bs-toggle="modal" data-bs-target="#addtask">
									<i className="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
								</Button>
								<Modal className="fade" id="addtask" tabIndex={-1} aria-hidden="true" show={show} onHide={handleClose}>
									<Modal.Header closeButton className="">
										<h6 className="modal-title" id="mail-ComposeLabel">Create Task</h6>
									</Modal.Header>
									<Modal.Body className="px-4">
										<div className="row gy-2">
											<Col xl={12}>
												<label htmlFor="task-name" className="form-label">Task Name</label>
												<input type="text" className="form-control" id="task-name" placeholder="Task Name" />
											</Col>
											<Col xl={12}>
												<label className="form-label">Assigned To</label>
												<Select isMulti name="colors" options={Option1} className="!p-0 ti-form-select !rounded-s-none"
													menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Option1[0]]} />

											</Col>
											<Col xl={6}>
												<label className="form-label">Assigned Date</label>
												<Form.Group>
													<InputGroup>
														<div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
														<DatePicker
															selected={startDate1}
															onChange={handleDateChange1}
															timeInputLabel="Time:"
															dateFormat="yy/MM/dd h:mm aa"
															placeholderText='Choose date with time'
															showTimeInput
														/>
													</InputGroup>
												</Form.Group>
											</Col>
											<Col xl={6}>
												<label className="form-label">Target Date</label>
												<Form.Group>
													<InputGroup>
														<div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
														<DatePicker
															selected={startDate2}
															onChange={handleDateChange2}
															timeInputLabel="Time:"
															dateFormat="yy/MM/dd h:mm aa"
															placeholderText='Choose date with time'
															showTimeInput
														/>
													</InputGroup>
												</Form.Group>
											</Col>
											<Col xl={12}>
												<label className="form-label">Priority</label>
												<Select name="state" options={Option2}
													className="js-example-placeholder-multiple w-full js-states"
													menuPlacement='auto' classNamePrefix="Select2" isSearchable
												/>
											</Col>
										</div>
									</Modal.Body>
									<Modal.Footer className="">
										<Button variant="light" type="button" onClick={handleClose}
											data-bs-dismiss="modal">Cancel</Button>
										<Button variant="primary" type="button">Create</Button>
									</Modal.Footer>
								</Modal>
							</div>
							<div className="p-3 border-bottom border-block-end-dashed">
								<InputGroup>
									<input type="text" className="form-control border-end-0" placeholder="Search Task Here" aria-describedby="button-addon2" />
									<Button aria-label="button" className="btn btn-light" variant='' type="button" id="button-addon2"><i className="ri-search-line text-primary"></i></Button>
								</InputGroup>
							</div>
							<div className="p-3 task-navigation border-bottom border-block-end-dashed">
								<ul className="list-unstyled task-main-nav mb-0">
									<li className="px-0 pt-0">
										<span className="fs-11 text-muted op-7 fw-semibold">TASKS</span>
									</li>
									<li className="active bg-light">
										<Link to="#">
											<div className="d-flex align-items-center">
												<span className="me-2 lh-1">
													<i className="ri-task-line align-middle fs-14"></i>
												</span>
												<span className="flex-fill text-nowrap">
													All Tasks
												</span>
												<span className="badge bg-success-transparent rounded-pill">167</span>
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
											</div>
										</Link>
									</li>
									<li>
										<Link to="#">
											<div className="d-flex align-items-center">
												<span className="me-2 lh-1">
													<i className="ri-delete-bin-5-line align-middle fs-14"></i>
												</span>
												<span className="flex-fill text-nowrap">
													Trash
												</span>
											</div>
										</Link>
									</li>
									<li className="px-0 pt-2">
										<span className="fs-11 text-muted op-7 fw-semibold">CATEGORIES</span>
									</li>
									<li>
										<Link to="#">
											<div className="d-flex align-items-center">
												<span className="me-2 lh-1">
													<i className="ri-price-tag-line align-middle fs-14 fw-semibold text-primary"></i>
												</span>
												<span className="flex-fill text-nowrap">
													Personal
												</span>
											</div>
										</Link>
									</li>
									<li>
										<Link to="#">
											<div className="d-flex align-items-center">
												<span className="me-2 lh-1">
													<i className="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
												</span>
												<span className="flex-fill text-nowrap">
													Daily Goals
												</span>
											</div>
										</Link>
									</li>
									<li>
										<Link to="#">
											<div className="d-flex align-items-center">
												<span className="me-2 lh-1">
													<i className="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
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
													<i className="ri-price-tag-line align-middle fs-14 fw-semibold text-warning"></i>
												</span>
												<span className="flex-fill text-nowrap">
													Health &amp; Fitness
												</span>
											</div>
										</Link>
									</li>
									<li>
										<Link to="#">
											<div className="d-flex align-items-center">
												<span className="me-2 lh-1">
													<i className="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
												</span>
												<span className="flex-fill text-nowrap">
													Financial Management
												</span>
											</div>
										</Link>
									</li>
								</ul>
							</div>
							<div className="p-3 text-center">
								<img src={media66} alt="img" className="wd-150" />
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={9}>
					<Row>
						<Tab.Container defaultActiveKey="first">
							<Col xl={12}>
								<Card className="custom-card">
									<div className="p-0">
										<div className="d-flex p-3 align-items-center justify-content-between">
											<div>
												<h6 className="fw-semibold mb-0">Tasks</h6>
											</div>
											<div>
												<Nav className="nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist" defaultActiveKey="first">
													<Nav.Item as="li" className="m-1">
														<Nav.Link eventKey="first">All Tasks</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li" className="m-1">
														<Nav.Link eventKey="second">Pending</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li" className="m-1">
														<Nav.Link eventKey="third" >In Progress</Nav.Link>
													</Nav.Item>
													<Nav.Item as="li" className="m-1">
														<Nav.Link eventKey="fourth">Completed</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
											<div>
												<Dropdown className="">
													<Dropdown.Toggle variant='' aria-label="button" className="btn btn-icon btn-sm btn-light btn-wave waves-light waves-effect no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
														<i className="ti ti-dots-vertical"></i>
													</Dropdown.Toggle>
													<Dropdown.Menu as="ul" className="dropdown-menu" align="end">
														<li className="dropdown-item">Select All</li>
														<li className="dropdown-item">Share All</li>
														<li className="dropdown-item">Delete All</li>
													</Dropdown.Menu >
												</Dropdown>
											</div>
										</div>
									</div>
								</Card>
							</Col>
							<Tab.Content className="task-tabs-container">
								<Tab.Pane eventKey="first" className="p-0" id="all-tasks"
									role="tabpanel">
									<Row id="tasks-container">
										{Todolistloopdata.map((idx) => (
											<Col xxl={4} md={6} className="task-card" key={Math.random()}>
												<Card className="custom-card task-inprogress-card">
													<Card.Body className="">
														<div className="d-flex justify-content-between">
															<div>
																<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">{idx.title}</Link>
																<p className="mb-3">Status : <span className={`badge bg-${idx.color2}`}>{idx.status}</span></p>
																<p className="mb-0">Assigned To : </p>
																<span className="avatar-list-stacked ms-1">
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces8} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																</span>
																<span className="me-2">
																	<Button variant="" aria-label="button" type="button" className="btn btn-sm btn-icon btn-wave btn-primary-light waves-effect waves-light" onClick={handleShow1}
																		data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>

															</div>
															<div>
																<div className="btn-list">
																	<Link to="#" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Link>
																	<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																</div>
																<span className={`footer-badge badge bg-${idx.color1}-transparent d-block`}>{idx.badge}</span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
										))}
										<Modal className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true" show={show1} onHide={handleClose1}>

											<Modal.Header closeButton>
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
												<Button variant="" type="button" className="btn btn-primary" onClick={handleClose1}>Cancel</Button>
											</Modal.Footer>
										</Modal>
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="second" className="p-0" id="pending"
									role="tabpanel">
									<Row>
										{Todolistpending.map((idx) => (
											<Col xxl={4} md={6} className="task-card" key={Math.random()}>
												<div className="card custom-card task-pending-card">
													<div className="card-body">
														<div className="d-flex justify-content-between">
															<div>
																<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">{idx.title}</Link>
																<p className="mb-3">Status : <span className={`badge bg-${idx.color2}`}>{idx.status}</span></p>
																<p className="mb-0">Assigned To :</p>
																<span className="avatar-list-stacked ms-1">
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces8} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																</span>
																<span className="me-2">
																	<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" onClick={handleShow2}
																		data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>

															</div>
															<div>
																<div className="btn-list">
																	<Button variant="" aria-label="anchor" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
																	<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																</div>
																<span className={`footer-badge badge bg-${idx.color1}-transparent d-block`}>{idx.badge}</span>
															</div>
														</div>
													</div>
												</div>
											</Col>
										))}
										<Modal className="fade" id="addpromodal12" tabIndex={-1} aria-labelledby="AddModalLabel12" aria-hidden="true" show={show2} onHide={handleClose2}>

											<Modal.Header closeButton>
												<h6 className="modal-title" id="AddModalLabel12">Edit Assigne</h6>
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
												<Button type="button" className="btn btn-secondary"
													data-bs-dismiss="modal">Save</Button>
												<Button type="button" className="btn btn-primary" onClick={handleClose2}>Cancel</Button>
											</Modal.Footer>
										</Modal>
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="third" className="p-0" id="in-progress"
									role="tabpanel">
									<Row>
										{Todolistinprogress.map((idx) => (
											<Col xxl={4} md={6} className="task-card" key={Math.random()}>
												<Card className="custom-card task-inprogress-card">
													<Card.Body>
														<div className="d-flex justify-content-between">
															<div>
																<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">{idx.title}</Link>
																<p className="mb-3">Status : <span className={`badge bg-${idx.color2}`}>{idx.status}</span></p>
																<p className="mb-0">Assigned To :</p>
																<span className="avatar-list-stacked ms-1">
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces8} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																</span>
																<span className="me-2">
																	<Button variant="primary-light" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave  waves-effect waves-light" onClick={handleShow3}
																		data-bs-toggle="modal" data-bs-target="#addpromodal15"><i className="ri-add-fill"></i></Button></span>

															</div>
															<div>
																<div className="btn-list">
																	<Button variant="primary-light" aria-label="anchor" href="#" className="btn btn-sm btn-icon btn-wave"><i className="ri-eye-line"></i></Button>
																	<Button type="button" variant="danger-light" aria-label="button" className="btn btn-sm btn-icon btn-wave  me-0"><i className="ri-delete-bin-line"></i></Button>
																</div>
																<span className={`footer-badge badge bg-${idx.color1}-transparent d-block`}>{idx.badge}</span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
										))}
										<Modal className="modal fade" id="addpromodal15" tabIndex={-1} aria-labelledby="AddModalLabel15" aria-hidden="true" show={show3} onHide={handleClose3}>

											<Modal.Header closeButton>
												<h6 className="modal-title" id="AddModalLabel15">Edit Assigne</h6>
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
												<Button type="button" className="btn btn-primary" onClick={handleClose3}>Cancel</Button>
											</Modal.Footer>
										</Modal>
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey="fourth" className="p-0" id="completed"
									role="tabpanel">
									<Row>
										{Todolistincompleted.map((idx) => (
											<Col xxl={4} md={6} className="task-card" key={Math.random()}>
												<Card className="custom-card task-completed-card">
													<Card.Body>
														<div className="d-flex justify-content-between">
															<div>
																<Link to="#" className="fs-14 fw-semibold mb-3 d-flex align-items-center">{idx.title}</Link>
																<p className="mb-3">Status : <span className={`badge bg-${idx.color1}`}>{idx.status}</span></p>
																<p className="mb-0">Assigned To :</p>
																<span className="avatar-list-stacked ms-1">
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces8} alt="user-img" />
																	</span>
																	<span className="avatar avatar-sm avatar-rounded">
																		<img src={faces2} alt="user-img" />
																	</span>
																</span>
																<span className="me-2"><Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light waves-effect waves-light" onClick={handleShow4}
																	data-bs-toggle="modal" data-bs-target="#addpromodal20"><i className="ri-add-fill"></i></Button></span>

															</div>
															<div>
																<div className="btn-list">
																	<Link to="#" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Link>
																	<Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
																</div>
																<span className={`footer-badge badge bg-${idx.color3}-transparent d-block`}>{idx.badge1}</span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</Col>
										))}
										<Modal className="modal fade" id="addpromodal20" tabIndex={-1} aria-labelledby="AddModalLabel20" aria-hidden="true" show={show4} onHide={handleClose4}>

											<Modal.Header closeButton>
												<h6 className="modal-title" id="AddModalLabel20">Edit Assigne</h6>
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
												<Button type="button" className="btn btn-secondary"
													data-bs-dismiss="modal">Save</Button>
												<Button type="button" className="btn btn-primary" onClick={handleClose4}>Cancel</Button>
											</Modal.Footer>
										</Modal>
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Row>
					<div className="float-end mb-4">
						<nav aria-label="Page navigation" className="pagination-style-4">
							<Pagination className="mb-0  gap-2">
								<Pagination.Item disabled href="#">
									Prev
								</Pagination.Item>
								<Pagination.Item active href="#">1</Pagination.Item>
								<Pagination.Item className="" href="#">2</Pagination.Item>
								<Pagination.Item>
									<i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item className="page-item d-none d-sm-flex" href="#">16</Pagination.Item>
								<Pagination.Item href="#">17</Pagination.Item>
								<Pagination.Item className=" text-primary">
									next
								</Pagination.Item>
							</Pagination>
						</nav>
					</div>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Todolist;
