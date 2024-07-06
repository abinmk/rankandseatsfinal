import React, { FC, Fragment } from "react";
import { Card, Col, Dropdown, Nav, OverlayTrigger, Row, Tab, Table, Tooltip } from "react-bootstrap";
import { Projectanalysis, Selectoption1 } from "./projectsdata";
import { Link } from "react-router-dom";
import Select from "react-select";

//.IMAGES
import faces1 from "../../../assets/images/faces/1.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces16 from "../../../assets/images/faces/16.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces13 from "../../../assets/images/faces/13.jpg";
import faces14 from "../../../assets/images/faces/14.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";

const Projects = () => {
	return (
		<Fragment>
			<Row>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="flex-1 border-bottom-dashed">
								<div className="d-flex align-items-center justify-content-between">
									<span className="mb-0 flex-1 text-muted fw-semibold">Total Projects</span>
									<div className="ms-2">
										<span className="avatar bg-info-transparent text-info"><i className="bx bx-briefcase fs-20"></i></span>
									</div>
								</div>
								<h3 className="mb-0">676,90</h3>
								<div className="flex-between">
									<span className="text-muted fs-12">6 min ago</span>
									<span className="text-info fw-semibold"><i className="bi bi-arrow-down-right me-1 fs-13"></i>105.05%</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="flex-1 border-bottom-dashed">
								<div className="d-flex align-items-center justify-content-between">
									<span className="mb-0 flex-1 text-muted fw-semibold">Pending Projects</span>
									<div className="ms-2">
										<span className="avatar bg-pink-transparent text-pink"><i className="bx bx-book-open fs-20"></i></span>
									</div>
								</div>
								<h3 className="mb-0">406,90</h3>
								<div className="flex-between">
									<span className="text-muted fs-12">30 min ago</span>
									<span className="text-pink fw-semibold"><i className="bi bi-arrow-up-right me-1 fs-13"></i>095.05%</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="flex-1 border-bottom-dashed">
								<div className="d-flex align-items-center justify-content-between">
									<span className="mb-0 flex-1 text-muted fw-semibold">New Projects</span>
									<div className="ms-2">
										<span className="avatar bg-warning-transparent text-warning"><i className="bx bx-folder-plus fs-20"></i></span>
									</div>
								</div>
								<h3 className="mb-0">716,80</h3>
								<div className="flex-between">
									<span className="text-muted fs-12">1 hr ago</span>
									<span className="text-warning fw-semibold"><i className="bi bi-arrow-up-right me-1 fs-13"></i>006.43%</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="flex-1 border-bottom-dashed">
								<div className="d-flex align-items-center justify-content-between">
									<span className="mb-0 flex-1 text-muted fw-semibold">Completed Projects</span>
									<div className="ms-2">
										<span className="avatar bg-teal-transparent text-teal"><i className="bx bx-compass fs-20"></i></span>
									</div>
								</div>
								<h3 className="mb-0">536,80</h3>
								<div className="flex-between">
									<span className="text-muted fs-12">30 min ago</span>
									<span className="text-teal fw-semibold"><i className="bi bi-arrow-down-right me-1 fs-13"></i>396.03%</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<div>
								<h5 className="card-title mb-0"> Project Analysis</h5>
							</div>
							<div className="ms-auto">
								<Dropdown>
									<Dropdown.Toggle variant='' aria-label="anchor" className="btn  btn-sm text-muted border rounded-1 no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i className="fe fe-more-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu className=" dropdown-menu-start">
										<Dropdown.Item href="#">
											<i className="ri-share-forward-line me-2 d-inline-block"></i>Share
										</Dropdown.Item>
										<Dropdown.Item href="#">
											<i className="ri-download-2-line me-2 d-inline-block"></i>Download
										</Dropdown.Item>
										<Dropdown.Item href="#">
											<i className="ri-delete-bin-7-line me-2 d-inline-block"></i>Delete
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body>
							<div id="projectAnalysis">
								<Projectanalysis />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} xl={6}>
					<Card className="custom-card">
						<Card.Header className="justify-content-between">
							<Card.Title>Ongoing Tasks</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn  btn-sm text-muted border rounded-1 no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" role="menu">
									<Dropdown.Item href="#">Today</Dropdown.Item>
									<Dropdown.Item href="#">This Week</Dropdown.Item>
									<Dropdown.Item href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body>
							<ul className="list-unstyled mb-0">
								<li className="list-item mb-3">
									<div className="d-flex">
										<div className="me-2">
											<label className="ckbox mb-0 mt-1 me-2"><input type="checkbox" className="form-check-input" /><span></span></label>
										</div>
										<div className="flex-1">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted  float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another Action</Dropdown.Item>
													<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="tx-capitalize mb-1 fs-14 fw-semibiold">Designing a landing page</p>
											<div className="d-flex">
												<div className="avatar-list-stacked">
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces2} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces4} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces6} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces10} /></div>
												</div>
												<span className="text-muted fw-semibold fs-11 lh-lg ms-2"><i className="fe fe-clock me-1 fs-13 d-inline-block" ></i>10-04-22</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item mb-3">
									<div className="d-flex">
										<div className="me-2">
											<label className="ckbox mb-0 mt-1 me-2"><input type="checkbox" className="form-check-input" defaultChecked /><span></span></label>
										</div>
										<div className="flex-1">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted  float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another Action</Dropdown.Item>
													<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="tx-capitalize mb-1 fs-14 fw-semibiold">Fixing Responsive Issues</p>
											<div className="d-flex">
												<div className="avatar-list-stacked">
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces8} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces10} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces14} /></div>
													<Link to="#" className="avatar avatar-xs bg-primary tx-white ">+3</Link>
												</div>
												<span className="text-muted fw-semibold fs-11 lh-lg ms-2"><i className="fe fe-clock me-1 fs-13 d-inline-block" ></i>07-04-22</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item mb-3">
									<div className="d-flex">
										<div className="me-2">
											<label className="ckbox mb-0 mt-1 me-2"><input type="checkbox" className="form-check-input" /><span></span></label>
										</div>
										<div className="flex-1">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted  float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													<Dropdown.Item href="#" >Action</Dropdown.Item>
													<Dropdown.Item href="#" >Another Action</Dropdown.Item>
													<Dropdown.Item href="#" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="tx-capitalize mb-1 fs-14 fw-semibiold">Fixing Bugs in project 2A2</p>
											<div className="d-flex">
												<div className="avatar-list-stacked">
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces11} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces13} /></div>
												</div>
												<span className="text-muted fw-semibold fs-11 lh-lg ms-2"><i className="fe fe-clock me-1 fs-13 d-inline-block" ></i>09-04-22</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item mb-3">
									<div className="d-flex">
										<div className="me-2">
											<label className="ckbox mb-0 mt-1 me-2"><input type="checkbox" className="form-check-input" /><span></span></label>
										</div>
										<div className="flex-1">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted  float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													<Dropdown.Item href="#" >Action</Dropdown.Item>
													<Dropdown.Item href="#" >Another Action</Dropdown.Item>
													<Dropdown.Item href="#" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="tx-capitalize mb-1 fs-14 fw-semibiold">Designing a landing page</p>
											<div className="d-flex">
												<div className="avatar-list-stacked">
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces2} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces4} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces6} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces10} /></div>
												</div>
												<span className="text-muted fw-semibold fs-11 lh-lg ms-2"><i className="fe fe-clock me-1 fs-13 d-inline-block" ></i>10-04-22</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item mb-3">
									<div className="d-flex">
										<div className="me-2">
											<label className="ckbox mb-0 mt-1 me-2"><input type="checkbox" className="form-check-input" defaultChecked /><span></span></label>
										</div>
										<div className="flex-1">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted  float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													<Dropdown.Item href="#" >Action</Dropdown.Item>
													<Dropdown.Item href="#" >Another Action</Dropdown.Item>
													<Dropdown.Item href="#" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="tx-capitalize mb-1 fs-14 fw-semibiold">Fixing Responsive Issues</p>
											<div className="d-flex">
												<div className="avatar-list-stacked">
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces8} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces10} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces14} /></div>
													<Link to="#" className="avatar avatar-xs bg-primary tx-white ">+3</Link>
												</div>
												<span className="text-muted fw-semibold fs-11 lh-lg ms-2"><i className="fe fe-clock me-1 fs-13 d-inline-block" ></i>07-04-22</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item">
									<div className="d-flex">
										<div className="me-2">
											<label className="ckbox mb-0 mt-1 me-2"><input type="checkbox" className="form-check-input" /><span></span></label>
										</div>
										<div className="flex-1">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted  float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													<Dropdown.Item href="#" >Action</Dropdown.Item>
													<Dropdown.Item href="#" >Another Action</Dropdown.Item>
													<Dropdown.Item href="#" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="tx-capitalize mb-1 fs-14 fw-semibiold">Fixing Bugs in registration page</p>
											<div className="d-flex">
												<div className="avatar-list-stacked">
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces11} /></div>
													<div className="avatar avatar-xs"><img alt="avatar" className="rounded-circle" src={faces13} /></div>
												</div>
												<span className="text-muted fw-semibold fs-11 lh-lg ms-2"><i className="fe fe-clock me-1 fs-13 d-inline-block" ></i>09-04-22</span>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Recent Activity</Card.Title>
						</Card.Header>
						<Card.Body>
							<ul className="project-list mb-0">
								<li className="">
									<div className="">
										<i className="task-icon bg-primary"></i>
										<div className="d-flex">
											<h6 className="fw-semibold mb-0">Task Finished</h6>
											<span className="fw-semibold text-muted fs-11 ms-auto my-auto">09 July 2021</span>
										</div>
										<p className="text-muted fs-12">Adam Berry finished task on
											<Link to="#" className="fw-semibold text-primary"> AngularJS Template</Link>
										</p>
									</div>
								</li>
								<li className="">
									<div className="">
										<i className="task-icon bg-secondary"></i>
										<div className="d-flex">
											<h6 className="fw-semibold mb-0">New Comment</h6>
											<span className="fw-semibold text-muted fs-11 ms-auto my-auto">05 July 2021</span>
										</div>
										<p className="text-muted fs-12">Victoria commented on Project
											<Link to="#" className="fw-semibold text-primary"> AngularJS Template</Link>
										</p>
									</div>
								</li>
								<li className="">
									<div className="">
										<i className="task-icon bg-success"></i>
										<div className="d-flex">
											<h6 className="fw-semibold mb-0">Task Overdue</h6>
											<span className="fw-semibold text-muted fs-11 ms-auto my-auto">29 June 2021</span>
										</div>
										<p className="text-muted fs-12">Petey Cruiser finished
											<Link to="#" className="fw-semibold text-primary"> Integrated management</Link>
										</p>
									</div>
								</li>
								<li className="">
									<div className="">
										<i className="task-icon bg-primary"></i>
										<div className="d-flex">
											<h6 className="fw-semibold mb-0">Task Finished</h6>
											<span className="fw-semibold text-muted fs-11 ms-auto my-auto">09 July 2021</span>
										</div>
										<p className="text-muted fs-12">Adam Berry finished task on
											<Link to="#" className="fw-semibold text-primary"> AngularJS Template</Link>
										</p>
									</div>
								</li>
								<li className="">
									<div className="">
										<i className="task-icon bg-warning"></i>
										<div className="d-flex">
											<h6 className="fw-semibold mb-0">Task Finished</h6>
											<span className="fw-semibold text-muted fs-11 ms-auto my-auto">09 July 2021</span>
										</div>
										<p className="text-muted fs-12">Adam Berry finished task on
											<Link to="#" className="fw-semibold text-primary"> Project Management</Link>
										</p>
									</div>
								</li>
								<li className="mb-0">
									<div className="">
										<i className="task-icon bg-info"></i>
										<div className="d-flex">
											<h6 className="fw-semibold mb-0">New Comment</h6>
											<span className="fw-semibold text-muted fs-11 ms-auto my-auto">05 July 2021</span>
										</div>
										<p className="text-muted fs-12 mb-0">Victoria commented on Project
											<Link to="#" className="fw-semibold text-primary"> AngularJS Template</Link>
										</p>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} xl={6}>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Project Status
							</Card.Title>
						</Card.Header>
						<Card.Body className="p-0 overflow-auto">
							<table className="table mb-0 text-nowrap">
								<tbody>
									<tr>
										<td className="ps-4">Wordpress Template</td>
										<td className="">
											<span className="fw-semibiold fs-13">25%</span>
										</td>
										<td className="">
											<span className="badge bg-info-transparent">Progress</span>
										</td>
									</tr>
									<tr >
										<td className="ps-4">Blog Page</td>
										<td className="">
											<span className="fw-semibiold fs-13">60%</span>
										</td>
										<td className="">
											<span className="badge bg-warning-transparent">Pending</span>
										</td>
									</tr>
									<tr >
										<td className="ps-4">E commerce Blog</td>
										<td className="">
											<span className="fw-semibiold fs-13">75%</span>
										</td>
										<td className="">
											<span className="badge bg-info-transparent">Progress</span>
										</td>
									</tr>
									<tr >
										<td className="ps-4">E-mail Templates</td>
										<td className="">
											<span className="fw-semibiold fs-13">100%</span>
										</td>
										<td className="">
											<span className="badge bg-success-transparent">Finished</span>
										</td>
									</tr>
									<tr >
										<td className="ps-4">Business Website</td>
										<td className="">
											<span className="fw-semibiold fs-13">100%</span>
										</td>
										<td className="">
											<span className="badge bg-success-transparent">Finished</span>
										</td>
									</tr>
									<tr >
										<td className="ps-4">Admin Templates</td>
										<td className="">
											<span className="fw-semibiold fs-13">90%</span>
										</td>
										<td className="">
											<span className="badge bg-info-transparent">Progress</span>
										</td>
									</tr>
									<tr>
										<td className="ps-4">Beauty Templates</td>
										<td className="">
											<span className="fw-semibiold fs-13">50%</span>
										</td>
										<td className="">
											<span className="badge bg-warning-transparent">Pending</span>
										</td>
									</tr>
									<tr>
										<td className="ps-4">Authentication Pages</td>
										<td className="">
											<span className="fw-semibiold fs-13">59%</span>
										</td>
										<td className="">
											<span className="badge bg-info-transparent">Progress</span>
										</td>
									</tr>
									<tr>
										<td className="ps-4">Landing Pages</td>
										<td className="">
											<span className="fw-semibiold fs-13">100%</span>
										</td>
										<td className="">
											<span className="badge bg-success-transparent">Finished</span>
										</td>
									</tr>
								</tbody>
							</table>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={4} xl={6}>
					<Card className="custom-card">
						<Card.Header className="card-header justify-content-between flex-wrap">
							<Card.Title className="card-title flex-between">
								Upcoming Shedule
							</Card.Title>
							<div className="d-flex align-items-center">
								<Select name="state" options={Selectoption1} className="basic-multi-select " isSearchable
									menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption1[4]]}
								/>
								<span className="ms-2">2023</span>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="upcoming-shedule">
								<Tab.Container defaultActiveKey="first">
									<Nav variant="pills" className="nav nav-pills mb-1">
										<Nav.Item className="nav-item fw-semibold mb-3">
											<Nav.Link eventKey="first" href="#sun_tab" className="nav-link sh-link  text-center" data-bs-toggle="tab">
												<p className="sh-dt mb-0">09</p>
												<span className="sh-day">Sun</span>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item fw-semibold mb-3">
											<Nav.Link eventKey="second" href="#mon_tab" className="nav-link sh-link text-center" data-bs-toggle="tab">
												<p className="sh-dt mb-0">10</p>
												<span className="sh-day">Mon</span>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item fw-semibold mb-3">
											<Nav.Link eventKey="third" href="#tue_tab" className="nav-link sh-link text-center" data-bs-toggle="tab">
												<p className="sh-dt mb-0">11</p>
												<span className="sh-day">Tue</span>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item fw-semibold mb-3">
											<Nav.Link eventKey="fourth" href="#wed_tab" className="nav-link sh-link text-center" data-bs-toggle="tab">
												<p className="sh-dt mb-0">12</p>
												<span className="sh-day">Wed</span>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item fw-semibold mb-3">
											<Nav.Link eventKey="fifth" href="#thu_tab" className="nav-link sh-link text-center" data-bs-toggle="tab">
												<p className="sh-dt mb-0">13</p>
												<span className="sh-day">Thu</span>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item fw-semibold mb-3">
											<Nav.Link eventKey="sixth" href="#fri_tab" className="nav-link sh-link text-center" data-bs-toggle="tab">
												<p className="sh-dt mb-0">14</p>
												<span className="sh-day">Fri</span>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item fw-semibold">
											<Nav.Link eventKey="seventh" href="#sat_tab" className="nav-link sh-link text-center" data-bs-toggle="tab">
												<p className="sh-dt mb-0">15</p>
												<span className="sh-day">Sat</span>
											</Nav.Link>
										</Nav.Item>
									</Nav>
									<Tab.Content>
										<Tab.Pane eventKey="first" className="" id="sun_tab">
											<ul className="list-unstyled mb-0 sh-shedule-container">
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Meeting with client</p>
															<span className="text-muted">video conference</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>09:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>12:00</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Lunch with team members</p>
															<span className="text-muted">Dolores Ait Labore Sit</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>12:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>13:20</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Meeting With Client <Link to="#" className="tx-primary">Yuhan Sev</Link></p>
															<span className="text-muted">Golden Park</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>16:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>17:20</span>
														</div>
													</div>
												</li>
												<li className="list-item">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Create New Registration Page</p>
															<span className="text-muted">2UA Project</span>
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
										</Tab.Pane>
										<Tab.Pane eventKey="second" className="" id="mon_tab">
											<ul className="list-unstyled mb-0 sh-shedule-container">
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Assigning Tasks To Employees</p>
															<span className="text-muted">Task Basic</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>09:35</span>
															<span className="mx-2 text-muted">-</span>
															<span>10:00</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Lunch With <Link to="#" className="tx-primary">John Abu</Link></p>
															<span className="text-muted">Silver Valley</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>12:20</span>
															<span className="mx-2 text-muted">-</span>
															<span>13:20</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Checking Upcoming Projects &amp; Shedules</p>
															<span className="text-muted">Vlarhar Dhi Ionk Si</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>15:40</span>
															<span className="mx-2 text-muted">-</span>
															<span>16:00</span>
														</div>
													</div>
												</li>
												<li className="list-item">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Uploading New Projects In Terminal</p>
															<span className="text-muted">WPN Project</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>16:45</span>
															<span className="mx-2 text-muted">-</span>
															<span>17:00</span>
														</div>
													</div>
												</li>
											</ul>
										</Tab.Pane>
										<Tab.Pane eventKey="third" className="" id="tue_tab">
											<ul className="list-unstyled mb-0 sh-shedule-container">
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Meeting With <Link to="#" className="tx-primary">Abu Siddik</Link></p>
															<span className="text-muted">Zoom Meeting</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>10:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>11:30</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Lunch with team members</p>
															<span className="text-muted">Amet Dolor Clita</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>13:45</span>
															<span className="mx-2 text-muted">-</span>
															<span>14:45</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Uploading New Dashboard</p>
															<span className="text-muted">Iox Ui</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>16:10</span>
															<span className="mx-2 text-muted">-</span>
															<span>16:30</span>
														</div>
													</div>
												</li>
												<li className="list-item">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Meeting With Client <Link to="#" className="tx-primary">Ion Habbu</Link></p>
															<span className="text-muted">Backend</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>16:55</span>
															<span className="mx-2 text-muted">-</span>
															<span>18:55</span>
														</div>
													</div>
												</li>
											</ul>
										</Tab.Pane>
										<Tab.Pane eventKey="fourth" className="" id="wed_tab">
											<ul className="list-unstyled mb-0 sh-shedule-container">
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Developing Backend For Login Page</p>
															<span className="text-muted">Backend</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>10:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>12:00</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Catch Lunch At <Link to="#" className="tx-primary">Sed Lorem</Link></p>
															<span className="text-muted">Lorem Ipsum</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>13:15</span>
															<span className="mx-2 text-muted">-</span>
															<span>14:10</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Join Client Meeting</p>
															<span className="text-muted">SpaceY</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>15:30</span>
															<span className="mx-2 text-muted">-</span>
															<span>16:20</span>
														</div>
													</div>
												</li>
												<li className="list-item">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Planning New Technology With Members</p>
															<span className="text-muted">Rio</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>17:30</span>
															<span className="mx-2 text-muted">-</span>
															<span>18:00</span>
														</div>
													</div>
												</li>
											</ul>
										</Tab.Pane>
										<Tab.Pane eventKey="fifth" className="" id="thu_tab">
											<ul className="list-unstyled mb-0 sh-shedule-container">
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Meeting with <Link to="#" className="tx-primary">Xion Shan</Link></p>
															<span className="text-muted">G - Meets</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>09:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>11:00</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Updating UI Of Dashboard</p>
															<span className="text-muted">Dashboard Xin</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>12:50</span>
															<span className="mx-2 text-muted">-</span>
															<span>13:20</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Assigning Tasks To Members</p>
															<span className="text-muted">Task MWU</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>15:45</span>
															<span className="mx-2 text-muted">-</span>
															<span>16:00</span>
														</div>
													</div>
												</li>
												<li className="list-item">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Dinner with team members</p>
															<span className="text-muted">Amet Dolor Clita</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>19:55</span>
															<span className="mx-2 text-muted">-</span>
															<span>20:30</span>
														</div>
													</div>
												</li>
											</ul>
										</Tab.Pane>
										<Tab.Pane eventKey="sixth" className="" id="fri_tab">
											<ul className="list-unstyled mb-0 sh-shedule-container">
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Meeting with client</p>
															<span className="text-muted">video conference</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>09:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>12:00</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Lunch with team members</p>
															<span className="text-muted">Dolores Ait Labore Sit</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>12:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>13:20</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Meeting With Client <Link to="#" className="tx-primary">Yuhan Sev</Link></p>
															<span className="text-muted">Golden Park</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>16:00</span>
															<span className="mx-2 text-muted">-</span>
															<span>17:20</span>
														</div>
													</div>
												</li>
												<li className="list-item">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Create New Registration Page</p>
															<span className="text-muted">2UA Project</span>
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
										</Tab.Pane>
										<Tab.Pane eventKey="seventh" className="" id="sat_tab">
											<ul className="list-unstyled mb-0 sh-shedule-container">
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Assigning Tasks To Employees</p>
															<span className="text-muted">Task Basic</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>09:35</span>
															<span className="mx-2 text-muted">-</span>
															<span>10:00</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Lunch With <Link to="#" className="tx-primary">John Abu</Link></p>
															<span className="text-muted">Silver Valley</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>12:20</span>
															<span className="mx-2 text-muted">-</span>
															<span>13:20</span>
														</div>
													</div>
												</li>
												<li className="list-item mb-3">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Checking Upcoming Projects &amp; Shedules</p>
															<span className="text-muted">Vlarhar Dhi Ionk Si</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>15:40</span>
															<span className="mx-2 text-muted">-</span>
															<span>16:00</span>
														</div>
													</div>
												</li>
												<li className="list-item">
													<div className="sh-shedule d-sm-flex align-items-start justify-content-between font-weight-semibold">
														<div className="ms-sm-2 mb-1 mb-sm-0">
															<p className="mb-sm-1 mb-0 fs-14">Uploading New Projects In Terminal</p>
															<span className="text-muted">WPN Project</span>
														</div>
														<div className="min-w-fit-content d-flex align-items-center text-muted">
															<span><i className="fe fe-clock me-1 fs-13"></i></span>
															<span>16:45</span>
															<span className="mx-2 text-muted">-</span>
															<span>17:00</span>
														</div>
													</div>
												</li>
											</ul>
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={5} xl={6} className="">
					<Col xl={12}>
						<Card className="custom-card overflow-hidden">
							<Card.Header className="justify-content-between">
								<Card.Title>Team Members</Card.Title>
								<Dropdown>
									<Dropdown.Toggle variant='' aria-label="anchor" className="btn  btn-sm text-muted border rounded-1 no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										<i className="fe fe-more-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu as="ul" role="menu">
										<Dropdown.Item href="#">Today</Dropdown.Item>
										<Dropdown.Item href="#">This Week</Dropdown.Item>
										<Dropdown.Item href="#">Last Week</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Card.Header>
							<div className="card-body p-0">
								<div className="table-responsive">
									<Table className="table text-nowrap mb-0">
										<thead>
											<tr>
												<th scope="col" className="text-center">S.no</th>
												<th scope="col">Member</th>
												<th scope="col">Role</th>
												<th scope="col">Member Id</th>
												<th scope="col">Tasks</th>
											</tr>
										</thead>
										<tbody className="top-selling">
											<tr>
												<td className="text-center lh-1">
													01
												</td>
												<td>
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces1} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-1 fs-14">Richard Dom</p>
															<Link to="#" className="text-muted fs-12">richarddom1116@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">Team Leader</span>
												</td>
												<td>
													<span className="fw-semibold">#HTC098701</span>
												</td>
												<td><span className="">135</span></td>
											</tr>
											<tr>
												<td className="text-center lh-1">
													02
												</td>
												<td>
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces10} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-1 fs-14">Jennifer Tab</p>
															<Link to="#" className="text-muted fs-12">jenny258@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">Project Manager</span>
												</td>
												<td>
													<span className="fw-semibold">#HTC098702</span>
												</td>
												<td><span className="">105</span></td>
											</tr>
											<tr>
												<td className="text-center lh-1">
													03
												</td>
												<td>
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces2} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-1 fs-14">Nikki Jey</p>
															<Link to="#" className="text-muted fs-12">nikkiJ141@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">UI Developer</span>
												</td>
												<td>
													<span className="fw-semibold">#HTC098703</span>
												</td>
												<td><span className="">100</span></td>
											</tr>
											<tr>
												<td className="text-center lh-1">
													04
												</td>
												<td>
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces8} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-1 fs-14">Arifa Zed</p>
															<Link to="#" className="text-muted fs-12">arifaZ@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">Web Developer</span>
												</td>
												<td>
													<span className="fw-semibold">#HTC098704</span>
												</td>
												<td><span className="">055</span></td>
											</tr>
											<tr>
												<td className="text-center lh-1">
													05
												</td>
												<td>
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces7} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-1 fs-14">Xiong Yu</p>
															<Link to="#" className="text-muted fs-12">xingzing444@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">Team Member</span>
												</td>
												<td>
													<span className="fw-semibold">#HTC098705</span>
												</td>
												<td><span className="">065</span></td>
											</tr>
										</tbody>
									</Table>
								</div>
							</div>
						</Card>
					</Col>
				</Col>
			</Row>
			<Row>
				<div className="col-xxl-12">
					<Card className="custom-card">
						<Card.Header className="card-header justify-content-between">
							<Card.Title>
								Projects Summary
							</Card.Title>
							<div className="d-flex flex-wrap">
								<div className="me-3 my-1">
									<input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
								</div>
								<Dropdown className="my-1">
									<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu as="ul" role="menu">
										<Dropdown.Item href="#">New</Dropdown.Item>
										<Dropdown.Item href="#">Popular</Dropdown.Item>
										<Dropdown.Item href="#">Relevant</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table table-hover text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col">S.No</th>
											<th scope="col">Project Name</th>
											<th scope="col">Start Date</th>
											<th scope="col">Due Date</th>
											<th scope="col">Team Members</th>
											<th scope="col">Status</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">
												1
											</th>
											<td>
												Home Page
											</td>
											<td>
												01 Apr 2023
											</td>
											<td>
												14-04-2023
											</td>
											<td>
												<div className="avatar-list-stacked">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces2} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces8} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces2} alt="img" />
													</span>
													<Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
														+2
													</Link>
												</div>
											</td>
											<td>
												<span className="badge bg-primary-transparent">In Progress</span>
											</td>
											<td>
											<div className="g-2">
																	<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn  btn-primary-light btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
																			<span className="ri-pencil-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>
																	<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn btn-danger-light btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
																			<span className="ri-delete-bin-7-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>

																</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												2
											</th>
											<td>
												Landing Design
											</td>
											<td>
												02 Apr 2023
											</td>
											<td>
												20-04-2023
											</td>
											<td>
												<div className="avatar-list-stacked">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces5} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces6} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces9} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces15} alt="img" />
													</span>
												</div>
											</td>
											<td>
												<span className="badge bg-primary-transparent">In Progress</span>
											</td>
											<td>
											<div className="g-2">
																	<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn  btn-primary-light btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
																			<span className="ri-pencil-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>
																	<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn btn-danger-light btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
																			<span className="ri-delete-bin-7-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>

																</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												3
											</th>
											<td>
												New Template Design
											</td>
											<td>
												10 Apr 2023
											</td>
											<td>
												29-05-2023
											</td>
											<td>
												<div className="avatar-list-stacked">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces1} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces3} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces4} alt="img" />
													</span>
												</div>
											</td>
											<td>
												<span className="badge bg-warning-transparent">Pending</span>
											</td>
											<td>
											<div className="g-2">
																	<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn  btn-primary-light btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
																			<span className="ri-pencil-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>
																	<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn btn-danger-light btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
																			<span className="ri-delete-bin-7-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>

																</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												4
											</th>
											<td>
												HR Management Template Design
											</td>
											<td>
												01 May 2023
											</td>
											<td>
												18-04-2023
											</td>
											<td>
												<div className="avatar-list-stacked">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces10} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces11} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces4} alt="img" />
													</span>
													<Link to="#" className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white">
														+5
													</Link>
												</div>
											</td>
											<td>
												<span className="badge bg-primary-transparent">In Progress</span>
											</td>
											<td>
											<div className="g-2">
																	<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn  btn-primary-light btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
																			<span className="ri-pencil-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>
																	<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn btn-danger-light btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
																			<span className="ri-delete-bin-7-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>

																</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												5
											</th>
											<td>
												Designing New Template
											</td>
											<td>
												20 May 2023
											</td>
											<td>
												11-04-2023
											</td>
											<td>
												<div className="avatar-list-stacked">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces2} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces9} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces16} alt="img" />
													</span>
													<Link to="#" className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white">
														+3
													</Link>
												</div>
											</td>
											<td>
												<span className="badge bg-success-transparent">Completed</span>
											</td>
											<td>
											<div className="g-2">
																	<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn  btn-primary-light btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
																			<span className="ri-pencil-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>
																	<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn btn-danger-light btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
																			<span className="ri-delete-bin-7-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>

																</div>
											</td>
										</tr>
										<tr>
											<th scope="row">
												6
											</th>
											<td>
												Documentation Project
											</td>
											<td>
												21 May 2023
											</td>
											<td>
												18-04-2023
											</td>
											<td>
												<div className="avatar-list-stacked">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces4} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces7} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces12} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces13} alt="img" />
													</span>
													<span className="avatar avatar-xs avatar-rounded">
														<img src={faces15} alt="img" />
													</span>
												</div>
											</td>
											<td>
												<span className="badge bg-primary-transparent">In Progress</span>
											</td>
											<td>
											<div className="g-2">
																	<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn  btn-primary-light btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit">
																			<span className="ri-pencil-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>
																	<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																		<Link to="#" aria-label="anchor" className="btn btn-danger-light btn-sm ms-2" data-bs-toggle="tooltip" data-bs-original-title="Delete">
																			<span className="ri-delete-bin-7-line fs-14"></span>
																		</Link>
																	</OverlayTrigger>

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
												<Link to="#" className="page-link">
													Prev
												</Link>
											</li>
											<li className="page-item active"><Link to="#" className="page-link">1</Link></li>
											<li className="page-item"><Link to="#" className="page-link">2</Link></li>
											<li className="page-item">
												<Link to="#" className="page-link text-primary">
													next
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</Row>
		</Fragment>
	);
};

export default Projects;
