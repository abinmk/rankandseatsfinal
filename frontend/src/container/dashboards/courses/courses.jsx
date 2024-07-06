
import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, OverlayTrigger, Pagination, ProgressBar, Row, Tooltip } from "react-bootstrap";
import { Coursestatistics, Payoutsreport } from "./coursesdata";
import { Link } from "react-router-dom";

//IMAGES
import faces2 from "../../../assets/images/faces/2.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import media15 from "../../../assets/images/media/media-15.jpg";
import media13 from "../../../assets/images/media/media-13.jpg";
import media14 from "../../../assets/images/media/media-14.jpg";
import media18 from "../../../assets/images/media/media-18.jpg";
import media22 from "../../../assets/images/media/media-22.jpg";

const Courses = () => {
	return (
		<Fragment>
			<Row>
				<Col xxl={5}>
					<Row>
						<Col sm={6}>
							<Card className="card">
								<Card.Body className="pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="pe-3 d-block">
											<span className="avatar radius-5 bg-primary-transparent text-primary"><i className="ti ti-wallet fs-18"></i></span>
										</Link>
										<div className="flex-1 font-weight-semibold">
											<h4 className="mb-0">$98,450</h4>
											<div className="flex-between">
												<span className="text-muted fs-14">YTD Earning</span>
												<span className="text-success fs-12"><i className="ti ti-trending-up fs-16 me-1 d-inline-block"></i>+2.02%</span>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={6}>
							<Card>
								<Card.Body className="pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-3 d-block">
											<span className="avatar radius-5 bg-secondary-transparent tx-secondary"><i className="ti ti-users fs-18"></i></span>
										</Link>
										<div className="flex-1 font-weight-semibold">
											<h4 className="mb-0">15,379</h4>
											<div className="flex-between">
												<span className="text-muted fs-14">Total Students</span>
												<span className="text-danger fs-12"><i className="ti ti-trending-down fs-16 me-1 d-inline-block"></i>+2.02%</span>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={6}>
							<Card>
								<Card.Body className="pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-3 d-block">
											<span className="avatar radius-5 bg-warning-transparent tx-warning"><i className="ti ti-id fs-18"></i></span>
										</Link>
										<div className="flex-1 font-weight-semibold">
											<h4 className="mb-0">377</h4>
											<div className="flex-between">
												<span className="text-muted fs-14">Total Instructors</span>
												<span className="text-danger fs-12"><i className="ti ti-trending-down fs-16 me-1 d-inline-block"></i>+2.02%</span>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={6}>
							<Card>
								<Card.Body className="pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-3 d-block">
											<span className="avatar radius-5 bg-pink-transparent text-pink"><i className="ti ti-gift fs-18"></i></span>
										</Link>
										<div className="flex-1 font-weight-semibold">
											<h4 className="mb-0">11,016</h4>
											<div className="flex-between">
												<span className="text-muted fs-14">Total Courses</span>
												<span className="text-success fs-12"><i className="ti ti-trending-up fs-16 me-1 d-inline-block"></i>+2.02%</span>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header className="justify-content-between">
									<Card.Title className="">
										New Students
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' href="#" className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item href="#">Today</Dropdown.Item>
											<Dropdown.Item href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="">
									<div className="table-responsive">
										<table className="table table-hover text-nowrap table-bordered">
											<thead>
												<tr>
													<th scope="col">Name</th>
													<th scope="col">Courses</th>
													<th scope="col">Completed</th>
													<th scope="col">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td >
														<div className="d-flex align-items-center">
															<Link to="#" className="pe-2 d-block">
																<img src={faces2} alt="img" className="avatar avatar-sm rounded-circle " />
															</Link>
															<div className="flex-1 pos-relative">
																<Link aria-label="anchor" to="#" className="masked-link"></Link>
																<p className="mb-0 fs-14">Richard Dom</p>
																<span className="text-muted fs-12">richarddom1116@demo.com</span>
															</div>
														</div>
													</td>
													<td className="text-center"> 08</td>
													<td className="text-center"><span className="badge badge-sm rounded-pill bg-warning">02</span></td>
													<td className="">
														<div className="g-2">
															<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																<Button variant='primary-light' className="btn  btn-primary-light btn-sm">
																	<span className="ri-pencil-line fs-14"></span>
																</Button>
															</OverlayTrigger>
															<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																<Button variant='primary-light' className="btn btn-danger-light btn-sm ms-2">
																	<span className="ri-delete-bin-7-line fs-14"></span>
																</Button>
															</OverlayTrigger>
														</div>
													</td>
												</tr>
												<tr>
													<td >
														<div className="d-flex align-items-center">
															<Link to="#" className="pe-2 d-block">
																<img src={faces1} alt="img" className="avatar avatar-sm rounded-circle " />
															</Link>
															<div className="flex-1 pos-relative">
																<Link aria-label="anchor" to="#" className="masked-link"></Link>
																<p className="mb-0 fs-14">Aliz Varna</p>
																<span className="text-muted fs-12">AlizVarn876a@demo.com</span>
															</div>
														</div>
													</td>
													<td className="text-center"> 10</td>
													<td className="text-center"><span className="badge badge-sm rounded-pill bg-success">05</span></td>
													<td className="">
														<div className="g-2">
															<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																<Button variant='primary-light' className="btn  btn-primary-light btn-sm">
																	<span className="ri-pencil-line fs-14"></span>
																</Button>
															</OverlayTrigger>
															<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																<Button variant='primary-light' className="btn btn-danger-light btn-sm ms-2">
																	<span className="ri-delete-bin-7-line fs-14"></span>
																</Button>
															</OverlayTrigger>
														</div>
													</td>
												</tr>
												<tr>
													<td >
														<div className="d-flex align-items-center">
															<Link to="#" className="pe-2 d-block">
																<img src={faces3} alt="img" className="avatar avatar-sm rounded-circle " />
															</Link>
															<div className="flex-1 pos-relative">
																<Link aria-label="anchor" to="#" className="masked-link"></Link>
																<p className="mb-0 fs-14">Joberon Varith</p>
																<span className="text-muted fs-12">Varith908@demo.com</span>
															</div>
														</div>
													</td>
													<td className="text-center"> 07</td>
													<td className="text-center"><span className="badge badge-sm rounded-pill bg-info">05</span></td>
													<td className="">
														<div className="g-2">
															<Button variant="primary-light" aria-label="anchor" className="btn btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
																<span className="ri-pencil-line fs-14"></span>
															</Button>
															<Button variant="danger-light" aria-label="anchor" className="btn btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
																<span className="ri-delete-bin-7-line fs-14"></span>
															</Button>
														</div>
													</td>
												</tr>
												<tr>
													<td >
														<div className="d-flex align-items-center">
															<Link to="#" className="pe-2 d-block">
																<img src={faces7} alt="img" className="avatar avatar-sm rounded-circle " />
															</Link>
															<div className="flex-1 pos-relative">
																<Link aria-label="anchor" to="#" className="masked-link"></Link>
																<p className="mb-0 fs-14">Alizbeth John</p>
																<span className="text-muted fs-12">Alizbeth123@demo.com</span>
															</div>
														</div>
													</td>
													<td className="text-center"> 10</td>
													<td className="text-center"><span className="badge badge-sm rounded-pill bg-danger">03</span></td>
													<td className="">
														<div className="g-2">
															<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																<Button variant='primary-light' className="btn  btn-primary-light btn-sm">
																	<span className="ri-pencil-line fs-14"></span>
																</Button>
															</OverlayTrigger>
															<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																<Button variant='primary-light' className="btn btn-danger-light btn-sm ms-2">
																	<span className="ri-delete-bin-7-line fs-14"></span>
																</Button>
															</OverlayTrigger>
														</div>
													</td>
												</tr>
												<tr>
													<td >
														<div className="d-flex align-items-center">
															<Link to="#" className="pe-2 d-block">
																<img src={faces8} alt="img" className="avatar avatar-sm rounded-circle " />
															</Link>
															<div className="flex-1 pos-relative">
																<Link aria-label="anchor" to="#" className="masked-link"></Link>
																<p className="mb-0 fs-14">Varjon Aryem</p>
																<span className="text-muted fs-12">VarjonAry123m@demo.com</span>
															</div>
														</div>
													</td>
													<td className="text-center"> 10</td>
													<td className="text-center"><span className="badge badge-sm rounded-pill bg-warning">06</span></td>
													<td className="">
														<div className="g-2">
															<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																<Button variant='primary-light' className="btn  btn-primary-light btn-sm">
																	<span className="ri-pencil-line fs-14"></span>
																</Button>
															</OverlayTrigger>
															<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																<Button variant='primary-light' className="btn btn-danger-light btn-sm ms-2">
																	<span className="ri-delete-bin-7-line fs-14"></span>
																</Button>
															</OverlayTrigger>
														</div>
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
				<Col xxl={7}>
					<Row>
						<Col xxl={12}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="flex-between">
									<Card.Title className="">Statistics</Card.Title>
									<div className="btn-group">
										<Link to="#" className="btn btn-sm btn-primary-light">1H</Link>
										<Link to="#" className="btn btn-sm btn-primary-light">6H</Link>
										<Link to="#" className="btn btn-sm btn-primary-light">12H</Link>
										<Link to="#" className="btn btn-sm btn-primary">1D</Link>
									</div>
								</Card.Header>
								<Card.Body className="">
									<div id="CourseStatistics" className="">
										<Coursestatistics />
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={12}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="flex-between justify-content-between">
									<Card.Title className="">Top Category</Card.Title>
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
								<Card.Body className="">
									<Row>
										<Col xl={3} sm={6} className="my-1">
											<Link to="#" className="category-link font-weight-semibold">
												<svg xmlns="http://www.w3.org/2000/svg" className="category-svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>
												<p className="fs-14 mb-0 text-center">UI / UX Design</p>
												<span className="fs-11 text-center d-block">1000+ Courses</span>
											</Link>
										</Col>
										<Col xl={3} sm={6} className="my-1">
											<Link to="#" className="category-link font-weight-semibold">
												<svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" /></g><g><g opacity=".3"><path d="M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5 l-0.82-1.91c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M19.99,4.01c0,0-3.55-0.69-8.23,3.99 c-1.32,1.32-2.4,3.38-2.73,4.04l2.93,2.93c0.65-0.32,2.71-1.4,4.04-2.73C20.68,7.56,19.99,4.01,19.99,4.01z M15,11 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C17,10.1,16.1,11,15,11z" /></g><g><path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z" /></g></g></svg>
												<p className="fs-14 mb-0 text-center">Digital Marketing</p>
												<span className="fs-11 text-center  d-block">90+ Courses</span>
											</Link>
										</Col>
										<Col xl={3} sm={6} className="my-1">
											<Link to="#" className="category-link font-weight-semibolda active">
												<svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M4,18h16V8H4V18z M12,15h6v2h-6V15z M6.09,10.41L7.5,9l4,4l-4,4l-1.41-1.41L8.67,13L6.09,10.41z" opacity=".3" /><rect height="2" width="6" x="12" y="15" /><path d="M20,4H4C2.89,4,2,4.9,2,6v12c0,1.1,0.89,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.11,4,20,4z M20,18H4V8h16V18z" /><polygon points="7.5,17 11.5,13 7.5,9 6.09,10.41 8.67,13 6.09,15.59" /></g></g></svg>
												<p className="fs-14 mb-0 text-center">Web Development</p>
												<span className="fs-11 text-center  d-block">250+ Courses</span>
											</Link>
										</Col>
										<Col xl={3} sm={6} className="my-1">
											<Link to="#" className="category-link font-weight-semibold">
												<svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24" /><g opacity=".3"><path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" /></g><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" /></g></svg>
												<p className="fs-14 mb-0 text-center ">Stocks &amp; Trading</p>
												<span className="fs-11 text-center  d-block">100+ Courses</span>
											</Link>
										</Col>
									</Row>
								</Card.Body>
							</Card>

						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col xxl={3} lg={6}>
					<Card className="custom-card">
						<Card.Header className="flex-between justify-content-between">
							<Card.Title className="">Ongoing Courses</Card.Title>
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
						<Card.Body className="">
							<ul className="mb-2">
								<li>
									<div className="d-flex mb-4 align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md br-5 bg-success-transparent text-success me-3"><i className="bx bx-store"></i></span>
										</div>
										<div className="flex-fill">
											<div className="d-flex justify-content-between">
												<h6 className="fw-semibold">
													Marketing
												</h6>
												<div>
													<p className="mb-0 fs-13 text-muted">
														<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-block"></i>93.0%
													</p>
												</div>
											</div>
											<ProgressBar striped animated variant='success' className='progress-xs' now={93} />
										</div>
									</div>
								</li>
								<li>
									<div className="d-flex mb-4 align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md br-5 bg-purple-transparent text-purple me-3"><i className="bx bx-layout"></i></span>
										</div>
										<div className="flex-fill">
											<div className="d-flex justify-content-between">
												<h6 className="fw-semibold">
													UI/UX Design
												</h6>
												<div>
													<p className="mb-0 fs-13 text-muted">
														<i className="fe fe-arrow-up-right  me-1 text-success brround d-inline-block"></i>75.0%
													</p>
												</div>
											</div>
											<ProgressBar striped animated variant='purple' className='progress-xs' now={70} />
										</div>
									</div>
								</li>
								<li>
									<div className="d-flex mb-4 align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md br-5 bg-warning-transparent text-warning me-3"><i className="bx bx-code"></i></span>
										</div>
										<div className="flex-fill">
											<div className="d-flex justify-content-between">
												<h6 className="fw-semibold">
													Java Programming
												</h6>
												<div>
													<p className="mb-0 fs-13 text-muted">
														<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-block"></i>85.0%
													</p>
												</div>
											</div>
											<ProgressBar striped animated variant='warning' className='progress-xs' now={85} />
										</div>
									</div>
								</li>
								<li>
									<div className="d-flex mb-4 align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md br-5 bg-pink-transparent text-pink me-3"><i className="bx bx-layer "></i></span>
										</div>
										<div className="flex-fill">
											<div className="d-flex justify-content-between">
												<h6 className="fw-semibold">
													Ui Development
												</h6>
												<div>
													<p className="mb-0 fs-13 text-muted">
														<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-block"></i>73.0%
													</p>
												</div>
											</div>
											<ProgressBar striped animated variant='pink' className='progress-xs' now={73} />
										</div>
									</div>
								</li>
								<li>
									<div className="d-flex align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md br-5 bg-info-transparent text-info me-3"><i className="bx bx-recycle"></i></span>
										</div>
										<div className="flex-fill">
											<div className="d-flex justify-content-between">
												<h6 className="fw-semibold">React Js
												</h6>
												<div>
													<p className="mb-0 fs-13 text-muted">
														<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-block"></i>60.0%
													</p>
												</div>
											</div>
											<ProgressBar striped animated variant='info' className='progress-xs' now={60} />
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} lg={6}>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="flex-between justify-content-between">
							<Card.Title className="">Top Instructors</Card.Title>
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
						<Card.Body className="">

							<ul className="list-unstyled mb-0 font-weight-semibold">
								<li className="list-item mb-4">
									<div className="flex-between">
										<div className="flex-1 d-flex align-items-center">
											<Link to="#" className="pe-2 d-block">
												<img src={faces4} alt="img" className="avatar avatar-md" />
											</Link>
											<div className="flex-1 pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link"></Link>
												<h6 className="fs-14 mb-0">John Hny</h6>
												<span className="fs-12 text-muted">M.tech</span>
											</div>
										</div>
										<div className="min-w-fit-content text-end">
											<Link to="#" className="d-block text-primary op-9">321 Courses</Link>
											<span className="fs-12 tx-muted">Digital Marketing</span>
										</div>
									</div>
								</li>
								<li className="list-item mb-4">
									<div className="flex-between">
										<div className="flex-1 d-flex align-items-center">
											<Link to="#" className="pe-2 d-block">
												<img src={faces9} alt="img" className="avatar avatar-md" />
											</Link>
											<div className="flex-1 pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link"></Link>
												<h6 className="fs-14 mb-0">Mortal Yun</h6>
												<span className="fs-12 text-muted">Phd</span>
											</div>
										</div>
										<div className="min-w-fit-content text-end">
											<Link to="#" className="d-block text-primary op-9">25 Courses</Link>
											<span className="fs-12 tx-muted">Stocks &amp; Trading</span>
										</div>
									</div>
								</li>
								<li className="list-item mb-4">
									<div className="flex-between">
										<div className="flex-1 d-flex align-items-center">
											<Link to="#" className="pe-2 d-block">
												<img src={faces10} alt="img" className="avatar avatar-md" />
											</Link>
											<div className="flex-1 pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link"></Link>
												<h6 className="fs-14 mb-0">Trex Con</h6>
												<span className="fs-12 text-muted">MBBS</span>
											</div>
										</div>
										<div className="min-w-fit-content text-end">
											<Link to="#" className="d-block text-primary op-9">39 Courses</Link>
											<span className="fs-12 tx-muted">Science</span>
										</div>
									</div>
								</li>
								<li className="list-item mb-4">
									<div className="flex-between">
										<div className="flex-1 d-flex align-items-center">
											<Link to="#" className="pe-2 d-block">
												<img src={faces7} alt="img" className="avatar avatar-md" />
											</Link>
											<div className="flex-1 pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link"></Link>
												<h6 className="fs-14 mb-0">Saiu Sarah</h6>
												<span className="fs-12 text-muted">Phd</span>
											</div>
										</div>
										<div className="min-w-fit-content text-end">
											<Link to="#" className="d-block text-primary op-9">11 Courses</Link>
											<span className="fs-12 tx-muted">Science</span>
										</div>
									</div>
								</li>
								<li className="list-item">
									<div className="flex-between">
										<div className="flex-1 d-flex align-items-center">
											<Link to="#" className="pe-2 d-block">
												<img src={faces12} alt="img" className="avatar avatar-md" />
											</Link>
											<div className="flex-1 pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link"></Link>
												<h6 className="fs-14 mb-0">Ion Hao</h6>
												<span className="fs-12 text-muted">M.tech</span>
											</div>
										</div>
										<div className="min-w-fit-content text-end">
											<Link to="#" className="d-block text-primary op-9">124 Courses</Link>
											<span className="fs-12 tx-muted">Web Development</span>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} lg={6} className="">
					<Card className="custom-card">
						<Card.Header className="justify-content-between">
							<Card.Title className="">
								Payouts
							</Card.Title>
							<div className="d-flex flex-wrap">
								<div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
									<input type="radio" className="btn-check" name="payoutsRadio" id="btnradio5" />
									<label className="btn btn-outline-primary mb-0" htmlFor="btnradio5">1M</label>

									<input type="radio" className="btn-check" name="payoutsRadio" id="btnradio6" />
									<label className="btn btn-outline-primary mb-0" htmlFor="btnradio6">6M</label>

									<input type="radio" className="btn-check" name="payoutsRadio" id="btnradio7" defaultChecked />
									<label className="btn btn-outline-primary mb-0" htmlFor="btnradio7">1Y</label>
								</div>
							</div>
						</Card.Header>
						<div className="px-4 d-sm-flex mt-3 mb-4 justify-content-between flex-wrap gap-2">
							<div className="d-flex align-items-center">
								<div className="me-3">
									<span className="avatar radius-5 bg-primary-transparent text-primary"><i className="ti ti-cash fs-18"></i></span>
								</div>
								<div className="flex-1 font-weight-semibold">
									<p className="mb-1 text-muted fs-12">Total Payouts</p>
									<h5 className="text-primary">$89,700</h5>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<div className="me-3">
									<span className="avatar radius-5 bg-secondary-transparent text-secondary"><i className="ti ti-x fs-18"></i></span>
								</div>
								<div className="flex-1 font-weight-semibold">
									<p className="mb-1 text-muted fs-12">Unpaid</p>
									<h5 className=" text-secondary">$21,300</h5>
								</div>
							</div>
						</div>
						<div id="payoutsReport" className="">
							<Payoutsreport />
						</div>
					</Card>
				</Col>
				<Col xxl={3} lg={6}>
					<Card className="custom-card">
						<Card.Header className="card-header justify-content-between">
							<Card.Title className="">
								Upcoming schedule
							</Card.Title>
						</Card.Header>
						<Card.Body className="">
							<ul className="list-unstyled mb-0 Upcoming-courses-schedule">
								<li className="list-item mb-4">
									<div className=" d-sm-flex align-items-start justify-content-between font-weight-semibold">
										<div className="ms-2 mb-1 mb-sm-0 course-schedule">
											<h6 className="mb-sm-1 mb-0">Web Design</h6>
											<span className="text-muted">10-06-2023</span>
										</div>
										<div className="min-w-fit-content d-flex align-items-center text-muted">
											<span><i className="fe fe-clock me-1 fs-13"></i></span>
											<span>09:00</span>
											<span className="mx-2 text-muted">-</span>
											<span>12:00</span>
										</div>
									</div>
								</li>
								<li className="list-item mb-4">
									<div className=" d-sm-flex align-items-start justify-content-between font-weight-semibold">
										<div className="ms-2 mb-1 mb-sm-0 course-schedule">
											<h6 className="mb-sm-1 mb-0">Java Programming</h6>
											<span className="text-muted">15-06-2023</span>
										</div>
										<div className="min-w-fit-content d-flex align-items-center text-muted">
											<span><i className="fe fe-clock me-1 fs-13"></i></span>
											<span>12:00</span>
											<span className="mx-2 text-muted">-</span>
											<span>13:20</span>
										</div>
									</div>
								</li>
								<li className="list-item mb-4">
									<div className=" d-sm-flex align-items-start justify-content-between font-weight-semibold">
										<div className="ms-2 mb-1 mb-sm-0 course-schedule">
											<h6 className="mb-sm-1 mb-0">Meeting <Link to="#" className="tx-primary">Yuhan Sev</Link></h6>
											<span className="text-muted">15-06-2023</span>
										</div>
										<div className="min-w-fit-content d-flex align-items-center text-muted">
											<span><i className="fe fe-clock me-1 fs-13"></i></span>
											<span>16:00</span>
											<span className="mx-2 text-muted">-</span>
											<span>17:20</span>
										</div>
									</div>
								</li>
								<li className="list-item  mb-4">
									<div className=" d-sm-flex align-items-start justify-content-between font-weight-semibold">
										<div className="ms-2 mb-1 mb-sm-0 course-schedule">
											<h6 className="mb-sm-1 mb-0">UX/UI</h6>
											<span className="text-muted">20-06-2023</span>
										</div>
										<div className="min-w-fit-content d-flex align-items-center text-muted">
											<span><i className="fe fe-clock me-1 fs-13"></i></span>
											<span>18:15</span>
											<span className="mx-2 text-muted">-</span>
											<span>19:00</span>
										</div>
									</div>
								</li>
								<li className="list-item">
									<div className=" d-sm-flex align-items-start justify-content-between font-weight-semibold">
										<div className="ms-2 mb-1 mb-sm-0 course-schedule">
											<h6 className="mb-sm-1 mb-0">React js</h6>
											<span className="text-muted">20-06-2023</span>
										</div>
										<div className="min-w-fit-content d-flex align-items-center text-muted">
											<span><i className="fe fe-clock me-1 fs-13"></i></span>
											<span>18:15</span>
											<span className="mx-2 text-muted">-</span>
											<span>19:00</span>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Col xxl={12}>
				<Card className="custom-card">
					<Card.Header className="justify-content-between">
						<Card.Title className="">
							Course List
						</Card.Title>
						<div className="d-flex flex-wrap">
							<div className="me-3">
								<input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
							</div>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret mt-1 mt-sm-0" data-bs-toggle="dropdown" aria-expanded="false">
									Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu role="menu" align="end">
									<Dropdown.Item href="#">New</Dropdown.Item>
									<Dropdown.Item href="#">Popular</Dropdown.Item>
									<Dropdown.Item href="#">Relevant</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</Card.Header>
					<Card.Body className="">
						<div className="table-responsive">
							<table className="table table-hover text-nowrap table-bordered">
								<thead>
									<tr>
										<th scope="col" className="text-center">S.No</th>
										<th scope="col">Course</th>
										<th scope="col">Category</th>
										<th scope="col" className="text-center">Classes</th>
										<th scope="col">Last Update</th>
										<th scope="col">Instructur</th>
										<th scope="col" className="text-center">Students</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="text-center">01 </td>
										<td>
											<div className="d-flex align-items-center">
												<Link to="#" className="pe-2 d-block">
													<img src={media15} alt="img" className="avatar avatar-sm rounded-circle " />
												</Link>
												<div className="flex-1 pos-relative">
													<Link aria-label="anchor" to="#" className="masked-link"></Link>
													<p className="mb-0 fs-14">Digital Marketing Course From Scratch</p>
												</div>
											</div>
										</td>
										<td className=""> <span className="badge rounded-pill bg-danger-transparent">Marketing</span> </td>
										<td className="text-center">115</td>
										<td className=""><span className="">21-06-2022</span></td>
										<td className=""><span className="">Stuart Little</span></td>
										<td className=" text-center"><span className="">1,189</span></td>
										<td className=" ">
											<div className="g-2">
												<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
													<Button variant="primary-light" aria-label="anchor" className="btn btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
														<span className="ri-pencil-line fs-14"></span>
													</Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
													<Button variant="danger-light" aria-label="anchor" className="btn btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
														<span className="ri-delete-bin-7-line fs-14"></span>
													</Button>
												</OverlayTrigger>

											</div>
										</td>
									</tr>
									<tr>
										<td className="text-center">02 </td>
										<td>
											<div className="d-flex align-items-center">
												<Link to="#" className="pe-2 d-block">
													<img src={media13} alt="img" className="avatar avatar-sm rounded-circle " />
												</Link>
												<div className="flex-1 pos-relative">
													<Link aria-label="anchor" to="#" className="masked-link"></Link>
													<p className="mb-0 fs-14">Master Linear Algebra Medium Level</p>
												</div>
											</div>
										</td>
										<td className=""> <span className="badge rounded-pill bg-success-transparent">Mathematics</span> </td>
										<td className="text-center">809</td>
										<td className=""><span className="">11-06-2022</span></td>
										<td className=""><span className="">Arya Neo</span></td>
										<td className=" text-center"><span className="">773</span></td>
										<td className=" ">
											<div className="g-2">
												<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
													<Button variant="primary-light" aria-label="anchor" className="btn btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
														<span className="ri-pencil-line fs-14"></span>
													</Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
													<Button variant="danger-light" aria-label="anchor" className="btn btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
														<span className="ri-delete-bin-7-line fs-14"></span>
													</Button>
												</OverlayTrigger>

											</div>
										</td>
									</tr>
									<tr>
										<td className="text-center">03 </td>
										<td>
											<div className="d-flex align-items-center">
												<Link to="#" className="pe-2 d-block">
													<img src={media14} alt="img" className="avatar avatar-sm rounded-circle " />
												</Link>
												<div className="flex-1 pos-relative">
													<Link aria-label="anchor" to="#" className="masked-link"></Link>
													<p className="mb-0 fs-14">Data Structures &amp; Algorithms For Beginners</p>
												</div>
											</div>
										</td>
										<td className=""> <span className="badge rounded-pill bg-info-transparent">Programming</span> </td>
										<td className="text-center">679</td>
										<td className=""><span className="">14-06-2022</span></td>
										<td className=""><span className="">Boran Ray</span></td>
										<td className=" text-center"><span className="">973</span></td>
										<td className=" ">
											<div className="g-2">
												<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
													<Button variant="primary-light" aria-label="anchor" className="btn btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
														<span className="ri-pencil-line fs-14"></span>
													</Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
													<Button variant="danger-light" aria-label="anchor" className="btn btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
														<span className="ri-delete-bin-7-line fs-14"></span>
													</Button>
												</OverlayTrigger>

											</div>
										</td>
									</tr>
									<tr>
										<td className="text-center">04 </td>
										<td>
											<div className="d-flex align-items-center">
												<Link to="#" className="pe-2 d-block">
													<img src={media18} alt="img" className="avatar avatar-sm rounded-circle " />
												</Link>
												<div className="flex-1 pos-relative">
													<Link aria-label="anchor" to="#" className="masked-link"></Link>
													<p className="mb-0 fs-14">Ray Optics &amp; Optical Fibre Master Class </p>
												</div>
											</div>
										</td>
										<td className=""> <span className="badge rounded-pill bg-teal-transparent">Science</span> </td>
										<td className="text-center">20</td>
										<td className=""><span className="">14-07-2022</span></td>
										<td className=""><span className="">Chin Op</span></td>
										<td className=" text-center"><span className="">05</span></td>
										<td className=" ">
											<div className="g-2">
												<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
													<Button variant="primary-light" aria-label="anchor" className="btn btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
														<span className="ri-pencil-line fs-14"></span>
													</Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
													<Button variant="danger-light" aria-label="anchor" className="btn btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
														<span className="ri-delete-bin-7-line fs-14"></span>
													</Button>
												</OverlayTrigger>

											</div>
										</td>
									</tr>
									<tr>
										<td className="text-center">05 </td>
										<td>
											<div className="d-flex align-items-center">
												<Link to="#" className="pe-2 d-block">
													<img src={media22} alt="img" className="avatar avatar-sm rounded-circle " />
												</Link>
												<div className="flex-1 pos-relative">
													<Link aria-label="anchor" to="#" className="masked-link"></Link>
													<p className="mb-0 fs-14">CSS Zero to Hero Master Class </p>
												</div>
											</div>
										</td>
										<td className=""> <span className="badge rounded-pill bg-pink-transparent">UI/UX</span> </td>
										<td className="text-center">70</td>
										<td className=""><span className="">14-08-2022</span></td>
										<td className=""><span className="">Burak Oin</span></td>
										<td className=" text-center"><span className="">55</span></td>
										<td className=" ">
											<div className="g-2">
												<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
													<Button variant="primary-light" aria-label="anchor" className="btn btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
														<span className="ri-pencil-line fs-14"></span>
													</Button>
												</OverlayTrigger>
												<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
													<Button variant="danger-light" aria-label="anchor" className="btn btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
														<span className="ri-delete-bin-7-line fs-14"></span>
													</Button>
												</OverlayTrigger>

											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Card.Body>
					<Card.Footer className="">
						<div className="d-flex align-items-center">
							<div>
								Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
							</div>
							<div className="ms-auto">
								<nav aria-label="Page navigation" className="pagination-style-4">
									<Pagination as="ul" className="mb-0">
										<Pagination.Item className="page-item disabled">
											<button className="page-link">
												Prev
											</button>
										</Pagination.Item>
										<Pagination.Item className="page-item active">
											<span className="page-link">1</span>
										</Pagination.Item>
										<Pagination.Item className="page-item">
											<button className="page-link text-primary">
												Next
											</button>
										</Pagination.Item>
									</Pagination>
								</nav>
							</div>
						</div>
					</Card.Footer>
				</Card>
			</Col>

		</Fragment>
	);
};

export default Courses;
