import React, { FC, Fragment } from "react";
import { Card, Col, Dropdown, Nav, Row, Tab, Table } from "react-bootstrap";
import { Leadscrmdata, Leadssource, Totalrevenue } from "./crmdata";
import { Link } from "react-router-dom";

//IMAGES
import faces2 from "../../../assets/images/faces/2.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces13 from "../../../assets/images/faces/13.jpg";

const Crm = () => {
	return (
		<Fragment>
			<Row>
				<Col xxl={6} xl={12}>
					<Row>
						{Leadscrmdata.map((idx) => (
							<Col xxl={6} lg={6} md={6} sm={6} key={Math.random()}>
								<Card className="custom-card">
									<Card.Body>
										<div className="d-flex align-items-center">
											<div className="me-2">
												<div className={`avatar avatar-md bg-${idx.color}-transparent text-${idx.color}`}>
													<i className={idx.icon1}></i>
												</div>
											</div>
											<div className="flex-1">
												<Dropdown>
													<Dropdown.Toggle variant='' aria-label="anchor" className="tx-inverse float-end lh-1 text-muted no-caret p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots tx-14"></i></Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item href="#">Action</Dropdown.Item>
														<Dropdown.Item href="#">Another Action</Dropdown.Item>
														<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
												<div className="mg-b-6">
													<p className="mb-0 tx-13 text-muted">{idx.title}</p>
												</div>
												<div className="flex-between w-100">
													<h3 className="tx-20 mb-0 font-weight-normal">{idx.text1}</h3>
													<span className={`text-${idx.color} ms-1`}><i className={`ti ti-arrow-${idx.icon2}-right me-1`}></i>{idx.text2}</span>
												</div>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
						<Col xxl={6} xl={6} lg={6} md={6} className="">
							<Card className="custom-card">
								<Card.Header className="justify-content-between">
									<Card.Title>
										Leads Response
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item href="#">Today</Dropdown.Item>
											<Dropdown.Item href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body>
									<div className="mb-3">
										<div className="d-flex align-items-center">
											<div className="d-sm-flex align-items-center">
												<span className="text-lg fw-semibold">6.70</span>
												<p className="mb-0 mt-0 fs-13 ms-sm-2 text-muted">Average Lead Response Time</p>
											</div>
										</div>
									</div>
									<ul className="list-unstyled mb-0">
										<li className="mb-3">
											<div className="d-flex">
												<span className="avatar avatar-md avatar-rounded bg-secondary-transparent fw-semibold me-2">
													PO
												</span>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<p className="mb-0">Patty O'Furniture.</p>
														<span>2.7</span>
													</div>
													<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-secondary progress-bar-striped" style={{ width: "45%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex">
												<span className="avatar avatar-md avatar-rounded bg-success-transparent fw-semibold me-2">
													MB
												</span>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<p className="mb-0">Maureen Biologist.</p>
														<span>4.7</span>
													</div>
													<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-success progress-bar-striped" style={{ width: "65%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex">
												<span className="avatar avatar-md avatar-rounded bg-warning-transparent fw-semibold me-2">
													P0
												</span>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<p className="mb-0">Paddy O'Furniture.</p>
														<span>3.5</span>
													</div>
													<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-warning progress-bar-striped" style={{ width: "50%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="">
											<div className="d-flex">
												<span className="avatar avatar-md avatar-rounded bg-info-transparent fw-semibold me-2">
													BS
												</span>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<p className="mb-0">Borry Sananesh.</p>
														<span>4.6</span>
													</div>
													<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-info progress-bar-striped" style={{ width: "70%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={6} xl={6} md={6} lg={6}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="justify-content-between">
									<Card.Title>
										Top Deals
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item as="li" className="dropdown-item" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" className="dropdown-item" href="#">This Week</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body>
									<ul className="list-unstyled crm-top-deals mb-0">
										<li className="mb-3">
											<div className="d-flex align-items-top flex-wrap">
												<div className="me-2">
													<div className="me-2">
														<div className="avatar avatar-md"><img src={faces1} alt="img" className="radius-5" /></div>
													</div>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0">Michael Jordan</p>
													<span className="text-muted fs-12">michael@example.com</span>
												</div>
												<div className="fw-semibold fs-15">$2,893</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex align-items-top flex-wrap">
												<div className="me-2">
													<div className="me-2">
														<div className="avatar avatar-md"><img src={faces2} alt="img" className="radius-5" /></div>
													</div>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0">Emigo Kiaren</p>
													<span className="text-muted fs-12">emigo@gmail.com</span>
												</div>
												<div className="fw-semibold fs-15">$4,289</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex align-items-top flex-wrap">
												<div className="me-2">
													<div className="me-2">
														<div className="avatar avatar-md"><img src={faces1} alt="img" className="radius-5" /></div>
													</div>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0">Randy Origon</p>
													<span className="text-muted fs-12">randyn@gmail.com</span>
												</div>
												<div className="fw-semibold fs-15">$6,347</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex align-items-top flex-wrap">
												<div className="me-2">
													<div className="me-2">
														<div className="avatar avatar-md"><img src={faces3} alt="img" className="radius-5" /></div>
													</div>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0">George Pieterson</p>
													<span className="text-muted fs-12">george@gmail.com</span>
												</div>
												<div className="fw-semibold fs-15">$3,894</div>
											</div>
										</li>
										<li className="">
											<div className="d-flex align-items-top flex-wrap">
												<div className="me-2">
													<div className="me-2">
														<div className="avatar avatar-md"><img src={faces4} alt="img" className="radius-5" /></div>
													</div>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0">Shara Pieterson</p>
													<span className="text-muted fs-12">Pieterson@gmail.com</span>
												</div>
												<div className="fw-semibold fs-15">$4,699</div>
											</div>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="justify-content-between">
									<Card.Title>
										Leads Overview
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fe fe-more-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" role="menu">
											<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="p-0">
									<div className="table-responsive">
										<table className="table text-nowrap">
											<thead>
												<tr>
													<th scope="col" className="ps-4">Lead Name</th>
													<th scope="col">Lead Source</th>
													<th scope="col">Contact</th>
													<th scope="col">Lead Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<div className="me-2 lh-1">
																<div className="avatar avatar-sm"><img src={faces7} alt="img" className="radius-5" /></div>
															</div>
															<div>
																<span className="fs-14">
																	Benson and John's
																</span>
															</div>
														</div>
													</td>
													<td className="text-success ">online store</td>
													<td>
														<div>
															<p className="mb-0">+123-9876530</p>
														</div>
													</td>
													<td className="border-top-0">
														<span className="badge rounded-pill bg-danger-transparent">Unqualified</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<div className="me-2 lh-1">
																<div className="avatar avatar-sm"><img src={faces6} alt="img" className="radius-5" /></div>
															</div>
															<div>
																<span className="fs-14">
																	Ragnor Rock
																</span>
															</div>
														</div>
													</td>
													<td className="text-info">External Link</td>
													<td>
														<div>
															<p className="mb-0">+123-9876760</p>
														</div>
													</td>
													<td className="border-top-0">
														<span className="badge rounded-pill bg-success-transparent">Attempt To Contact</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<div className="me-2 lh-1">
																<div className="avatar avatar-sm"><img src={faces8} alt="img" className="radius-5" /></div>
															</div>
															<div>
																<span className="fs-14">
																	Beth Industries
																</span>
															</div>
														</div>
													</td>
													<td className="text-success">Online Store</td>
													<td>
														<div>
															<p className="mb-0">+123-48986760</p>
														</div>
													</td>
													<td className="border-top-0">
														<span className="badge rounded-pill bg-primary-transparent">New</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<div className="me-2 lh-1">
																<div className="avatar avatar-sm"><img src={faces5} alt="img" className="radius-5" /></div>
															</div>
															<div>
																<span className="fs-14">
																	Opera
																</span>
															</div>
														</div>
													</td>
													<td className="text-info">External Link</td>
													<td>
														<div>
															<p className="mb-0">+123-98986760</p>
														</div>
													</td>
													<td className="border-top-0">
														<span className="badge rounded-pill bg-warning-transparent">Bad Timming</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xxl={6} xl={12}>
					<Row>
						<Col xxl={12} xl={12} className="">
							<Card className="custom-card">
								<div className="card-header justify-content-between flex-wrap">
									<Card.Title>
										Total Revenue
									</Card.Title>
									<div className="btn-group" role="group" aria-label="Basic example">
										<button type="button" className="btn btn-primary btn-sm btn-wave">1D</button>
										<button type="button" className="btn btn-primary-light btn-sm btn-wave">1W</button>
										<button type="button" className="btn btn-primary-light btn-sm btn-wave">1M</button>
										<button type="button" className="btn btn-primary-light btn-sm btn-wave">3M</button>
										<button type="button" className="btn btn-primary-light btn-sm btn-wave">6M</button>
										<button type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</button>
									</div>
								</div>
								<div className="card-body p-0">
									<div id="crm-statistics" className="p-3">
										<Totalrevenue />
									</div>
								</div>
							</Card>

						</Col>
						<Col xxl={6} xl={6} md={6}>
							<Card className="custom-card ">
								<Card.Header className="">
									<Card.Title>Tasks</Card.Title>
								</Card.Header>
								<Card.Body className="card-body todo-tab">
									<Tab.Container defaultActiveKey="first">
										<div className="panel panel-primary">
											<Nav className="nav nav-tabs tab-style-1 d-sm-flex d-block mb-0 justify-content-between" defaultActiveKey="first">
												<Nav.Item className="mt-0">
													<Nav.Link eventKey="first" href="#orders">Today</Nav.Link>
												</Nav.Item>
												<Nav.Item className="mt-0">
													<Nav.Link eventKey="second" href="#accepted" >Upcoming</Nav.Link>
												</Nav.Item>
												<Nav.Item className="mt-0">
													<Nav.Link eventKey="third" href="#declined">Completed</Nav.Link>
												</Nav.Item>
											</Nav>
											<Tab.Content className="">
												<Tab.Pane eventKey="first" className="border-0 ">
													<div className="todolist mb-3 mt-1 d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Added New Customers</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Invi sadip takimata</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>18-05-22</span>
																<span className="badge badge-sm rounded-pill bg-primary-transparent">Progress</span>
															</div>
														</div>
													</div>
													<div className="todolist mb-3 d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" defaultChecked />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Sales Accounting</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Eos dolor ea</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>05-10-22</span>
																<span className="badge badge-sm rounded-pill bg-success-transparent">Completed</span>
															</div>
														</div>
													</div>
													<div className="todolist mb-3 d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Meeting with Sales Team</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Nonumy erat ipsum ut ipsum</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>15-03-22</span>
																<span className="badge badge-sm rounded-pill bg-danger-transparent">not Started</span>
															</div>
														</div>
													</div>
													<div className="todolist d-flex">
														<div className="mb-3 form-check me-2">
															<input type="checkbox" className="form-check-input" defaultChecked />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Customers Meeting</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Sed labore ut sed</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>15-03-22</span>
																<span className="badge badge-sm rounded-pill bg-success-transparent">completed</span>
															</div>
														</div>
													</div>
												</Tab.Pane>
												<Tab.Pane eventKey="second" className=" border-0">
													<div className="todolist">
														<div className="todolist mb-3 d-flex">
															<div className="mb-3 form-check  me-2">
																<input type="checkbox" className="form-check-input" />
															</div>
															<div className="flex-1">
																<div className="d-flex align-items-start justify-content-between">
																	<p className="mb-0 fs-14">Build a New Team</p>
																	<div className="">
																		<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																	</div>
																</div>
																<p className="text-muted mb-2 fs-13">Nonumy erat ipsum ut ipsum</p>
																<div className="flex-between">
																	<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>15-03-22</span>
																	<span className="badge badge-sm rounded-pill bg-danger-transparent">not Started</span>
																</div>
															</div>
														</div>
														<div className="todolist mb-3 d-flex">
															<div className="mb-3 form-check  me-2">
																<input type="checkbox" className="form-check-input" />
															</div>
															<div className="flex-1">
																<div className="d-flex align-items-start justify-content-between">
																	<p className="mb-0 fs-14">Meeting with Sales Team</p>
																	<div className="">
																		<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																	</div>
																</div>
																<p className="text-muted mb-2 fs-13">Consetetur et amet dolor</p>
																<div className="flex-between">
																	<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>15-03-22</span>
																	<span className="badge badge-sm rounded-pill bg-danger-transparent">not Started</span>
																</div>
															</div>
														</div>
														<div className="todolist mb-3 d-flex">
															<div className="mb-3 form-check  me-2">
																<input type="checkbox" className="form-check-input" />
															</div>
															<div className="flex-1">
																<div className="d-flex align-items-start justify-content-between">
																	<p className="mb-0 fs-14">Created a New Task today</p>
																	<div className="">
																		<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																	</div>
																</div>
																<p className="text-muted mb-2 fs-13">Nonumy erat ipsum ut ipsum</p>
																<div className="flex-between">
																	<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>15-03-22</span>
																	<span className="badge badge-sm rounded-pill bg-danger-transparent">not Started</span>
																</div>
															</div>
														</div>
													</div>
													<div className="todolist  d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">27 New people joined summit</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Accusam aliquyam ea sea</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>15-03-22</span>
																<span className="badge badge-sm rounded-pill bg-danger-transparent">not Started</span>
															</div>
														</div>
													</div>
												</Tab.Pane>
												<Tab.Pane eventKey="third" className=" border-0">
													<div className="todolist mb-3 d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" defaultChecked />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Meeting with Sales Team</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Eos dolor ea</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>05-10-22</span>
																<span className="badge badge-sm rounded-pill bg-success-transparent">Completed</span>
															</div>
														</div>
													</div>
													<div className="todolist mb-3 d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" defaultChecked />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Replied to new support request</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Eos clita dolor elitr et</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>05-10-22</span>
																<span className="badge badge-sm rounded-pill bg-success-transparent">Completed</span>
															</div>
														</div>
													</div>
													<div className="todolist mb-3 d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" defaultChecked />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Update of calendar events</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Sadi tempor guberg rebum</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>05-10-22</span>
																<span className="badge badge-sm rounded-pill bg-success-transparent">Completed</span>
															</div>
														</div>
													</div>
													<div className="todolist  d-flex">
														<div className="mb-3 form-check  me-2">
															<input type="checkbox" className="form-check-input" defaultChecked />
														</div>
														<div className="flex-1">
															<div className="d-flex align-items-start justify-content-between">
																<p className="mb-0 fs-14">Added New Customers</p>
																<div className="">
																	<Link to="#" className="text-danger op-7 mg-e-6" data-bs-toggle="tooltip" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="fe fe-trash fs-14"></i></Link>
																</div>
															</div>
															<p className="text-muted mb-2 fs-13">Sadi tempor guberg rebum</p>
															<div className="flex-between">
																<span className="text-muted fs-12"><i className="bi bi-calendar4-event me-2 fs-11"></i>05-10-22</span>
																<span className="badge badge-sm rounded-pill bg-success-transparent">Completed</span>
															</div>
														</div>
													</div>
												</Tab.Pane>
											</Tab.Content>
										</div>
									</Tab.Container>
								</Card.Body>

							</Card>
						</Col>
						<Col xxl={6} xl={6} md={6}>
							<Card className="custom-card overflow-hidden">
								<Card.Header>
									<div>
										<h5 className="card-title mb-0">Leads By Source</h5>
									</div>
									<div className="ms-auto">
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu-start">
												<Dropdown.Item className="" href="#">
													<i className="ri-share-forward-line me-2 d-inline-block"></i>Share
												</Dropdown.Item>
												<Dropdown.Item className="" href="#">
													<i className="ri-download-2-line me-2 d-inline-block"></i>Download
												</Dropdown.Item>
												<Dropdown.Item className="" href="#">
													<i className="ri-delete-bin-7-line me-2 d-inline-block"></i>Delete
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</Card.Header>
								<Card.Body className="pb-2">
									<div id="dealsSource">
										<Leadssource />
									</div>
								</Card.Body>
								<Card.Footer className="p-0">
									<div className="d-flex flex-wrap">
										<div className="flex-1 px-4 py-3 text-center border-end-dotted">
											<p className="fs-13 mb-1  text-muted">Total Leads</p>
											<span className="text-md fw-semibold">1,289</span>
											<span className="text-success fs-12 ms-2"><i className="ti ti-arrow-up-right mg-e-3"></i>5.08%</span>
										</div>
										<div className="flex-1 px-4 py-3 text-center">
											<p className="fs-13 mb-1 text-muted">Leads to Deals Rate</p>
											<span className="text-md fw-semibold">+12.08%</span>
											<span className="text-success fs-12 ms-2"><i className="ti ti-arrow-up-right mg-e-3"></i>3.64%</span>
										</div>
									</div>
								</Card.Footer>
							</Card>
						</Col>

					</Row>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Top Deals
							</Card.Title>
							<div className="d-flex flex-wrap">
								<div className="me-3 my-1">
									<input className="form-control  form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
								</div>
								<Dropdown className="dropdown m-1">
									<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu-start" role="menu">
										<Dropdown.Item href="#">New</Dropdown.Item>
										<Dropdown.Item href="#">Popular</Dropdown.Item>
										<Dropdown.Item href="#">Relevant</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col">S.No </th>
											<th scope="col">Deal </th>
											<th scope="col">Sales Rep</th>
											<th scope="col">Mail</th>
											<th scope="col">Amount</th>
											<th scope="col">Location</th>
											<th scope="col">Sales Cycle length</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<span>
													01
												</span>
											</td>
											<td>
												<span className="fw-semibold">	Xenon Tech. Ed.</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={faces15} alt="" />
														</span>
													</div>
													<div className="fs-14">Simon Cowall</div>
												</div>
											</td>
											<td>
												mayorkelly@gmail.com
											</td>
											<td>
												<span className="fw-semibold fs-14">$4320.29</span>
											</td>
											<td>
												<div className="d-inline-flex align-items-center">
													<i className="ri-map-pin-fill text-muted fs-10"></i>
													<span className="ms-1">Germany</span>
												</div>
											</td>
											<td>
												<span className="text-muted">43 Days</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-1">
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span>
													02
												</span>
											</td>
											<td>
												<span className="fw-semibold">Ideal IT Sol.</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={faces4} alt="" />
														</span>
													</div>
													<div className="fs-14">Meisha Kerr</div>
												</div>
											</td>
											<td>
												andrewgarfield@gmail.com
											</td>
											<td>
												<span className="fw-semibold fs-14">$6745.99</span>
											</td>
											<td>
												<div className="d-inline-flex align-items-center">
													<i className="ri-map-pin-fill text-muted fs-10"></i>
													<span className="ms-1">Canada</span>
												</div>
											</td>
											<td>
												<span className="text-muted">45 Days</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-1">
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span>
													03
												</span>
											</td>
											<td>
												<span className="fw-semibold">Inferno Xo</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={faces5} alt="" />
														</span>
													</div>
													<div className="fs-14">Jessica</div>
												</div>
											</td>
											<td>
												simoncowel234@gmail.com
											</td>
											<td>
												<span className="fw-semibold fs-14">$1176.89</span>
											</td>
											<td>
												<div className="d-inline-flex align-items-center">
													<i className="ri-map-pin-fill text-muted fs-10"></i>
													<span className="ms-1">Singapore</span>
												</div>
											</td>
											<td>
												<span className="text-muted">50 Days</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-1">
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span>
													04
												</span>
											</td>
											<td>
												<span className="fw-semibold">Myami Group &amp; Tech.</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={faces6} alt="" />
														</span>
													</div>
													<div className="fs-14">Amanda B</div>
												</div>
											</td>
											<td>
												mirindahers@gmail.com
											</td>
											<td>
												<span className="fw-semibold fs-14">$1899.99</span>
											</td>
											<td>
												<div className="d-inline-flex align-items-center">
													<i className="ri-map-pin-fill text-muted fs-10"></i>
													<span className="ms-1">USA</span>
												</div>
											</td>
											<td>
												<span className="text-muted">55 Days</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-1">
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span>
													05
												</span>
											</td>
											<td>
												<span className="fw-semibold">Mevengo Tech Et Sed</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={faces11} alt="" />
														</span>
													</div>
													<div className="fs-14">Jason Stathman</div>
												</div>
											</td>
											<td>
												jacobsmith@gmail.com
											</td>
											<td>
												<span className="fw-semibold fs-14">$1867.29</span>
											</td>
											<td>
												<div className="d-inline-flex align-items-center">
													<i className="ri-map-pin-fill text-muted fs-10"></i>
													<span className="ms-1">Europe</span>
												</div>
											</td>
											<td>
												<span className="text-muted">30 Days</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-1">
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<span>
													06
												</span>
											</td>
											<td>
												<span className="fw-semibold">Lackme Info Et.</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={faces13} alt="" />
														</span>
													</div>
													<div className="fs-14">Khabib Hussain</div>
												</div>
											</td>
											<td>
												Hussain@gmail.com
											</td>
											<td>
												<span className="fw-semibold fs-14">$2439.99</span>
											</td>
											<td>
												<div className="d-inline-flex align-items-center">
													<i className="ri-map-pin-fill text-muted fs-10"></i>
													<span className="ms-1">Canada</span>
												</div>
											</td>
											<td>
												<span className="text-muted">35 Days</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-1">
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
						<div className="card-footer">
							<div className="d-flex align-items-center">
								<div>
									Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
								</div>
								<div className="ms-auto">
									<nav aria-label="Page navigation" className="pagination-style-4">
										<ul className="pagination mb-0">
											<li className="page-item disabled">
												<Link className="page-link" to="#">
													Prev
												</Link>
											</li>
											<li className="page-item active"><Link className="page-link" to="#">1</Link></li>
											<li className="page-item"><Link className="page-link" to="#">2</Link></li>
											<li className="page-item">
												<Link className="page-link text-primary" to="#">
													next
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Crm;
