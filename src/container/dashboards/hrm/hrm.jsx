import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, OverlayTrigger, Pagination, ProgressBar, Row, Table, Tooltip } from "react-bootstrap";
import { Employeesdata, Hrmstatistics } from "./hrmdata";
import { Link } from "react-router-dom";

//IMAGES
import faces2 from "../../../assets/images/faces/2.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";

const Hrm = () => {
	return (
		<Fragment>
			<Row>
				<Col xxl={6}>
					<Row>
						<Col xl={6} lg={6} md={6}>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="d-flex align-items-center">
										<div className="me-2">
											<div className="avatar avatar-lg bg-info-transparent text-info">
												<i className="fe fe-users"></i>
											</div>
										</div>
										<div className="flex-1">
											<div className="">
												<p className="mb-0  text-muted">Total Employees</p>
											</div>
											<div className="flex-between">
												<h3 className="fs-20 mb-0 font-weight-normal">1,116</h3>
												<span className="text-info"><i className="ti ti-arrow-up-right me-1 fs-14"></i>+12.86%</span>
											</div>
											<span className="badge bg-info-transparent">This Month</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={6} lg={6} md={6}>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="d-flex align-items-center">
										<div className="me-2">
											<div className="avatar avatar-lg bg-warning-transparent text-warning">
												<i className="fe fe-mail"></i>
											</div>
										</div>
										<div className="flex-1">
											<div className="">
												<p className="mb-0  text-muted">Employees In Leave</p>
											</div>
											<div className="flex-between">
												<h3 className="fs-20 mb-0 font-weight-normal">0567</h3>
												<span className="text-warning"><i className="ti ti-arrow-up-right me-1 fs-14"></i>+54.86%</span>
											</div>
											<span className="badge bg-warning-transparent">This Month</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={6} lg={6} md={6}>
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-center">
										<div className="me-2">
											<div className="avatar avatar-lg bg-teal-transparent text-teal">
												<i className="fe fe-user-plus"></i>
											</div>
										</div>
										<div className="flex-1">
											<div className="">
												<p className="mb-0  text-muted">Total Clients</p>
											</div>
											<div className="flex-between">
												<h3 className="fs-20 mb-0 font-weight-normal">0567</h3>
												<span className="text-teal"><i className="ti ti-arrow-up-right me-1 fs-14"></i>+54.86%</span>
											</div>
											<span className="badge bg-teal-transparent">This Month</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={6} lg={6} md={6}>
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-center">
										<div className="me-2">
											<div className="avatar avatar-lg bg-pink-transparent text-pink">
												<i className="fe fe-map"></i>
											</div>
										</div>
										<div className="flex-1">
											<div className="">
												<p className="mb-0  text-muted">New Leads</p>
											</div>
											<div className="flex-between">
												<h3 className="fs-20 mb-0 font-weight-normal">457</h3>
												<span className="text-pink"><i className="ti ti-arrow-up-right me-1 fs-14"></i>+64.86%</span>
											</div>
											<span className="badge bg-pink-transparent">This Month</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={6}>
							<Card className="custom-card">
								<Card.Header>
									<div>
										<h5 className="card-title mb-0"> Total Employees</h5>
									</div>
									<div className="ms-auto">
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-start">
												<Dropdown.Item className="d-flex " href="#">
													<i className="ri-share-forward-line me-2"></i>Share
												</Dropdown.Item>
												<Dropdown.Item className="d-flex " href="#">
													<i className="ri-download-2-line me-2"></i>Download
												</Dropdown.Item>
												<Dropdown.Item className="d-flex " href="#">
													<i className="ri-delete-bin-7-line me-2"></i>Delete
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</Card.Header>
								<Row>
									<Col xl={12}>
										<Card.Body>
											<div className="d-sm-flex mb-3 ">
												<div className="me-sm-2 my-auto">
													<div className="avatar bg-primary-transparent text-primary">
														<i className="fe fe-user-plus"></i>
													</div>
												</div>
												<div className="">
													<p className="mb-0 text-muted">Total Employees</p>
													<h3 className="mb-0 numberfont">50,200</h3>
												</div>
											</div>
											<ProgressBar className="progress progress-xl my-4">
												<ProgressBar variant="primary" now={65} label={`${65}%`} key={1} />
												<ProgressBar variant="secondary" now={35} label={`${35}%`} key={2} />
											</ProgressBar>
											<div className="d-flex justify-content-evenly text-center ">
												<div className="me-5">
													<span className="fs-12 text-muted fw-semibold d-block d-sm-inline-block"><i className="bx bxs-circle text-primary fs-12 me-1"></i>Male</span>
													<h5 className="mb-0">30,000</h5>
												</div>
												<div className="">
													<span className="fs-12 text-muted fw-semibold d-block d-sm-inline-block"><i className="bx bxs-circle text-secondary fs-12 me-1"></i>Female</span>
													<h5 className="mb-0">20,200</h5>
												</div>
											</div>

										</Card.Body>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col xl={6}>
							<Card className="custom-card">
								<Card.Header className="justify-content-between">
									<Card.Title>
										Birthday Today
									</Card.Title>
									<div className="ms-auto">
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-start">
												<Dropdown.Item className="d-flex " href="#">
													<i className="ri-share-forward-line me-2"></i>Share
												</Dropdown.Item>
												<Dropdown.Item className="d-flex " href="#">
													<i className="ri-download-2-line me-2"></i>Download
												</Dropdown.Item>
												<Dropdown.Item className="d-flex " href="#">
													<i className="ri-delete-bin-7-line me-2"></i>Delete
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</Card.Header>
								<div className="">
									<ul className="list-group list-group-flush rounded-3">
										<li className="list-group-item d-flex">
											<Link to="#">
												<div className="d-flex flex-wrap align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2 lh-1">
															<span className="avatar avatar-md">
																<img src={faces10} alt="" />
															</span>
														</div>
														<div>
															<p className="fw-semibold mb-0 fs-15">Kakasha Si</p>
															<span className="text-muted fs-12">@sensei011</span>
														</div>
													</div>
												</div>
											</Link>
											<div className="ms-auto">
												<button type="button" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Wish Him</button>
											</div>
										</li>
										<li className="list-group-item d-flex">
											<Link to="#">
												<div className="d-flex flex-wrap align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2 lh-1">
															<span className="avatar avatar-md">
																<img src={faces12} alt="" />
															</span>
														</div>
														<div>
															<p className="fw-semibold mb-0 fs-15">SakuraYM</p>
															<span className="text-muted fs-12">@sakura903</span>
														</div>
													</div>
												</div>
											</Link>
											<div className="ms-auto">
												<button type="button" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Wish Him</button>
											</div>
										</li>
										<li className=" list-group-item d-flex">
											<Link to="#">
												<div className="d-flex flex-wrap align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="me-2 lh-1">
															<span className="avatar avatar-md">
																<img src={faces4} alt="" />
															</span>
														</div>
														<div>
															<p className="fw-semibold mb-0 fs-15">Sasuke Uchiha</p>
															<span className="text-muted fs-12">@sasuke777</span>
														</div>
													</div>
												</div>
											</Link>
											<div className="ms-auto">
												<button type="button" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Wish Her</button>
											</div>
										</li>
									</ul>
								</div>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xxl={6}>
					<Col xxl={12} xl={12} className="">
						<Card className="custom-card">
							<Card.Header className=" justify-content-between">
								<Card.Title>Payrol Summary</Card.Title>
								<Dropdown>
									<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										<i className="fe fe-more-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu as="ul" role="menu" align="end">
										<Dropdown.Item href="#">Today</Dropdown.Item>
										<Dropdown.Item href="#">This Week</Dropdown.Item>
										<Dropdown.Item className="" href="#">Last Week</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Card.Header>
							<Card.Body>
								<div id="hrmstatistics">
									<Hrmstatistics />
								</div>
								<div className="row mt-4 justify-content-center">
									<Col xl={4} md={4} className="m-1 m-md-0 d-block text-center">
										<div className="px-4 py-2 border rounded-1">
											<h4 className="mb-1">$73,970</h4>
											<p className="mb-0 text-muted"><i className="bx bxs-circle text-primary fs-13  me-1"></i>Gross Salary </p>
										</div>
									</Col>
									<Col xl={4} md={4} className="m-1 m-md-0  d-block text-center">
										<div className="px-4 py-2  border rounded-1">
											<h4 className="mb-1">45,389</h4>
											<p className="mb-0 text-muted"><i className="bx bxs-circle text-secondary fs-13 me-1"></i>Net Salary </p>
										</div>
									</Col>
									<Col xl={4} md={4} className="m-1  m-md-0 d-block text-center">
										<div className="px-4 py-2  border rounded-1">
											<h4 className="mb-1">19,685</h4>
											<p className="mb-0 text-muted"> <i className="bx bxs-circle text-light fs-13 me-1"></i>Taxes</p>
										</div>
									</Col>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header className="justify-content-between flex-wrap">
							<Card.Title className="flex-between">
								Upcoming Events
							</Card.Title>
							<Dropdown className="">
								<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="fe fe-more-vertical"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" role="menu">
									<Dropdown.Item href="#">Today</Dropdown.Item>
									<Dropdown.Item href="#">This Week</Dropdown.Item>
									<Dropdown.Item href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body>
							<ul className="list-unstyled mb-0 up-event-container">
								<li className="list-item mb-4 up-event">
									<div className="d-flex align-items-start">
										<div className="me-5 text-center fw-semibold">
											<p className="text-primary fs-12 mb-0">5 min ago</p>
										</div>
										<div className="flex-1 fw-semibold">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item href="#" className="">Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Another Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="mb-2">You Have An Announcement - Ipsum Est Diam Eirmod</p>
											<div className="d-flex flex-wrap align-items-center">
												<span className="text-muted fw-normal"><i className="fe fe-clock me-1 d-inline-flex"></i>10:00AM</span>
												<span className="badge bg-success-transparent rounded-pill badge-sm fw-semibold ms-2">Announcement</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item mb-4 up-event">
									<div className="d-flex align-items-start">
										<div className="me-5 text-center fw-semibold">
											<p className="text-primary fs-12 mb-0">2 hrs ago</p>
										</div>
										<div className="flex-1 fw-semibold">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item href="#" className="">Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Another Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="mb-2">National Holiday - Vero Jayanti</p>
											<div className="d-flex align-items-center">
												<span className="badge bg-pink-transparent rounded-pill badge-sm fw-semibold">Holiday</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item mb-4 up-event">
									<div className="d-flex align-items-start">
										<div className="me-5 text-center fw-semibold">
											<p className="text-primary fs-12 mb-0">12 hrs ago</p>
										</div>
										<div className="flex-1 fw-semibold">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item href="#" className="">Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Another Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="mb-2"><Link to="#" className="text-primary me-1">John Pup</Link>Birthday - Team Member</p>
											<div className="d-flex align-items-center">
												<span className="text-muted fw-normal"><i className="fe fe-clock me-1 d-inline-flex"></i>09:00AM</span>
												<span className="badge bg-secondary-transparent rounded-pill badge-sm fw-semibold ms-2">Birthday</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item  mb-4  up-event">
									<div className="d-flex align-items-start">
										<div className="me-5 text-center fw-semibold">
											<p className="text-primary fs-12 mb-0">yesterday</p>
										</div>
										<div className="flex-1 fw-semibold">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item href="#" className="">Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Another Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="mb-2">National Holiday - Dolore Ipsum</p>
											<div className="d-flex align-items-center">
												<span className="badge bg-pink-transparent rounded-pill badge-sm fw-semibold">Holiday</span>
											</div>
										</div>
									</div>
								</li>
								<li className="list-item up-event">
									<div className="d-flex align-items-start">
										<div className="me-5 text-center fw-semibold">
											<p className="text-primary fs-12 mb-0">yesterday</p>
										</div>
										<div className="flex-1 fw-semibold">
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor" className="text-muted float-end no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item href="#" className="">Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Another Action</Dropdown.Item>
													<Dropdown.Item href="#" className="">Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<p className="mb-2">Amet Sed No Dolor Kasd - Et Dolores Tempor Erat</p>
											<div className="d-flex align-items-center">
												<span className="text-muted fw-normal"><i className="fe fe-clock me-1 d-inline-flex"></i>06:00AM</span>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={5}>
					<Col xl={12}>
						<Card className="border-bottom-0 custom-card overflow-hidden">
							<Card.Header className="justify-content-between">
								<Card.Title>Absent Members</Card.Title>
								<Dropdown className="dropdown">
									<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										<i className="fe fe-more-vertical"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu as="ul" role="menu">
										<Dropdown.Item href="#">Today</Dropdown.Item>
										<Dropdown.Item href="#">This Week</Dropdown.Item>
										<Dropdown.Item href="#">Last Week</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Card.Header>
							<Card.Body className="p-0">
								<div className="table-responsive">
									<Table className="table text-nowrap mb-0">
										<thead>
											<tr>
												<th scope="col" className="ps-4">Member</th>
												<th scope="col">Role</th>
												<th scope="col">Cause</th>
												<th scope="col">From</th>
												<th scope="col">Up-To</th>
											</tr>
										</thead>
										<tbody className="top-selling">
											<tr>
												<td className="ps-4">
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces2} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-0 fs-14">Richard Dom</p>
															<Link to="#" className="text-muted fs-12">richard116@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">Team Leader</span>
												</td>
												<td>
													<span className="fw-semibold badge bg-primary-transparent">	Sick Leave</span>
												</td>
												<td>
													<span className="fw-semibold">	13-05-23</span>
												</td>
												<td>
													<span className="fw-semibold">	15-05-23</span>
												</td>
											</tr>
											<tr>
												<td className="ps-4">
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces10} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-0 fs-14">Jennifer Tab</p>
															<Link to="#" className="text-muted fs-12">jenny258@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">Project Manager</span>
												</td>
												<td>
													<span className="fw-semibold badge bg-success-transparent">Travel</span>
												</td>
												<td>
													<span className="fw-semibold">	15-05-23</span>
												</td>
												<td>
													<span className="fw-semibold">	20-05-23</span>
												</td>
											</tr>
											<tr>
												<td className="ps-4">
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces2} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-0 fs-14">Nikki Jey</p>
															<Link to="#" className="text-muted fs-12">nikki11@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">UI Developer</span>
												</td>
												<td>
													<span className="fw-semibold badge bg-secondary-transparent">Maternity Leave</span>
												</td>
												<td>
													<span className="fw-semibold">	10-05-23</span>
												</td>
												<td>
													<span className="fw-semibold">	15-12-23</span>
												</td>
											</tr>
											<tr>
												<td className="ps-4">
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces8} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-0 fs-14">Arifa Zed</p>
															<Link to="#" className="text-muted fs-12">arifaZ@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold">Web Developer</span>
												</td>
												<td>
													<span className="fw-semibold badge bg-info-transparent">Other</span>
												</td>
												<td>
													<span className="fw-semibold">	13-06-23</span>
												</td>
												<td>
													<span className="fw-semibold">	10-07-23</span>
												</td>
											</tr>
											<tr>
												<td className="ps-4">
													<div className="d-flex">
														<span className="avatar avatar-md">
															<img src={faces7} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 ms-2">
															<p className="mb-0 fs-14">Xiong Yu</p>
															<Link to="#" className="text-muted fs-12">xingzing444@demo.com</Link>
														</div>
													</div>
												</td>
												<td>
													<span className="fw-semibold ">Team Member</span>
												</td>
												<td>
													<span className="fw-semibold badge bg-info-transparent">Other</span>
												</td>
												<td>
													<span className="fw-semibold">	13-03-23</span>
												</td>
												<td>
													<span className="fw-semibold">	15-04-23</span>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Col>

				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Recruitment Pipeline
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<ul className="mb-0">
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-sm rounded-circle bg-primary-transparent text-primary"><i className="fe fe-file-text "></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold"> Total Applications</Link>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="text-primary fs-17">1,982</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-sm rounded-circle bg-secondary-transparent text-secondary"><i className="fe fe-user-plus "></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold"> Recruited</Link>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="text-secondary fs-17">982</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-sm rounded-circle bg-success-transparent text-success"><i className="fe fe-file-plus "></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">  Short Listed</Link>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="text-success fs-17">582</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-sm rounded-circle bg-warning-transparent text-warning"><i className="fe fe-zap-off "></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Rejected</Link>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="text-warning fs-17">395</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-sm rounded-circle bg-danger-transparent text-danger"><i className="fe fe-slash "></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Blocked</Link>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="text-danger fs-17">905</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-sm rounded-circle bg-success-transparent text-success"><i className="fe fe-file-plus "></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">  Short Listed</Link>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="text-success fs-17">582</span>
											</div>
										</div>
									</div>
								</li>
								<li className="">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-sm rounded-circle bg-info-transparent text-info"><i className="fe fe-monitor "></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Interviewed</Link>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="text-info fs-17">145</span>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xxl={12}>
					<Card className="custom-card">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Employees
							</Card.Title>
							<div className="d-flex flex-wrap">
								<div className="me-3 my-1">
									<input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
								</div>
								<Dropdown className="dropdown my-1">
									<Dropdown.Toggle className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu as="ul" className="" role="menu" align="end">
										<Dropdown.Item as="li" href="#">New</Dropdown.Item>
										<Dropdown.Item as="li" href="#">Popular</Dropdown.Item>
										<Dropdown.Item as="li" href="#">Relevant</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body className="">
							<div className="table-responsive">
								<Table className="table-hover text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col" className="text-center">S.No</th>
											<th scope="col">Employee Name</th>
											<th scope="col">Employee Id</th>
											<th scope="col">Designation</th>
											<th scope="col">Email</th>
											<th scope="col">Contact</th>
											<th scope="col">Status</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										{Employeesdata.map((idx) => (
											<tr key={Math.random()}>
												<td className="text-center">
													0{idx.id}
												</td>
												<td>
													<div className="d-flex align-items-center">
														<span className="avatar avatar-sm">
															<img src={idx.src} className="rounded-1" alt="" />
														</span>
														<div className="flex-1 flex-between pos-relative ms-2">
															<div className="">
																<Link to="#" className="fs-13 fw-semibold">{idx.name}</Link>
															</div>
														</div>
													</div>
												</td>
												<td>
													<span className="text-primary fs-14">{idx.emid}</span>
												</td>
												<td>
													<span className="">{idx.role}</span>
												</td>
												<td>
													<Link to="#" className="text-muted fs-12">{idx.email}</Link>
												</td>
												<td>
													<span className="">{idx.contact}</span>
												</td>
												<td>
													<span className="badge bg-success-transparent">Active</span>
												</td>
												<td>
													<div className="g-2">
														<Button variant='primary-light' aria-label="anchor" className="btn   btn-sm" >
															<OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
																<span className="ri-pencil-line fs-14"></span>
															</OverlayTrigger>
														</Button>
														<Button variant='danger-light' aria-label="anchor" className="btn  btn-sm ms-2" >
															<OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
																<span className="ri-delete-bin-7-line fs-14"></span>
															</OverlayTrigger>
														</Button>
													</div>
												</td>
											</tr>
										))}

									</tbody>
								</Table>
							</div>
						</Card.Body>
						<Card.Footer className="">
							<div className="d-flex align-items-center">
								<div>
									Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
								</div>
								<div className="ms-auto">
									<nav aria-label="Page navigation" className="pagination-style-4">
										<Pagination as="ul" className="pagination mb-0">
											<Pagination.Item disabled as="li" href="#">
												Prev
											</Pagination.Item>
											<Pagination.Item active href="#">1</Pagination.Item>
											<Pagination.Item href="#">2</Pagination.Item>
											<Pagination.Item className="text-primary" href="#">
												next
											</Pagination.Item>
										</Pagination>
									</nav>
								</div>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Hrm;
