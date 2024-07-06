import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, ProgressBar, Row, Table } from "react-bootstrap";
import { Analyticusers, Analyticvisitors, Audiencereport, Bouncerate, Pageviews, Sessionsbydevice, Visitors } from "./analyticsdata";
import { Link } from "react-router-dom";

//IMAGES
import usflag from "../../../assets/images/flags/us_flag.jpg";
import argentinaflag from "../../../assets/images/flags/argentina_flag.jpg";
import indianflag from "../../../assets/images/flags/india_flag.jpg";
import spainflag from "../../../assets/images/flags/spain_flag.jpg";
import mexicoflag from "../../../assets/images/flags/mexico_flag.jpg";
import canadaflag from "../../../assets/images/flags/canada_flag.jpg";
import russiaflag from "../../../assets/images/flags/russia_flag.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";

const Analytics = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Row>
						<Col xxl={3} sm={6} className="">
							<Card className="custom-card">
								<Card.Body className="">
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<div>
											<h6 className="fw-semibold mb-1">Total Users</h6>
											<h3 className="fw-semibold">9,789</h3>
											<span className="d-block text-success fs-12">+0.892 <i className="ti ti-trending-up ms-1"></i></span>
										</div>
										<div id="analytics-users">
											<Analyticusers />
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} sm={6}>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<div>
											<h6 className="fw-semibold mb-1">Total visitors</h6>
											<h3 className="fw-semibold">17,789</h3>
											<span className="d-block text-success fs-12">+0.892 <i className="ti ti-trending-up ms-1"></i></span>
										</div>
										<div id="analytics-visitors">
											<Analyticvisitors />
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} sm={6}>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<div>
											<h6 className="fw-semibold mb-1">Bounce Rate</h6>
											<h3 className="fw-semibold">70.09%</h3>
											<span className="d-block text-success fs-12">+0.892 <i className="ti ti-trending-up ms-1"></i></span>
										</div>
										<div id="Bounce-Rate">
											<Bouncerate />
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} sm={6}>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="d-flex flex-wrap align-items-center justify-content-between">
										<div>
											<h6 className="fw-semibold mb-1">Page Views</h6>
											<h3 className="fw-semibold">19,789</h3>
											<span className="d-block text-success fs-12">+0.892 <i className="ti ti-trending-up ms-1"></i></span>
										</div>
										<div id="Page-Views">
											<Pageviews />
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} md={6} sm={12}>
							<Card className="custom-card">
								<Card.Header className="card-header justify-content-between flex-wrap">
									<Card.Title>
										Sessions By Device
									</Card.Title>
								</Card.Header>
								<Card.Body className="">
									<div id="sessionsByDevice">
										<Sessionsbydevice />
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} md={6} sm={12}>
							<Card className="custom-card">
								<Card.Header className="card-header justify-content-between flex-wrap">
									<Card.Title>
										Activity
									</Card.Title>
								</Card.Header>
								<Card.Body className="">
									<div className="analytics-timeline">
										<ul className="timeline-1 mb-0">
											<li className="mt-0">
												<i className="bx bx-bullseye analytics-icon bg-primary-transparent text-primary"></i>
												<span className="fw-semibold mb-4 fs-14 ">Total Visits</span>
												<Link to="#" className="float-end fs-12 text-muted">1 hour ago</Link>
												<p className="text-muted fs">15% increased</p>
											</li>
											<li className="mt-0">
												<i className="bx bx-cube-alt analytics-icon bg-warning-transparent text-warning"></i>
												<span className="fw-semibold mb-4 fs-14 ">Total Products</span>
												<Link to="#" className="float-end fs-12 text-muted">1 day ago</Link>
												<p className="mb-0 text-muted fs">1.3k New Products</p>
											</li>
											<li className="mt-0">
												<i className="bx bx-wallet-alt analytics-icon bg-secondary-transparent text-secondary"></i>
												<span className="fw-semibold mb-4 fs-14 ">Total Sales</span>
												<Link to="#" className="float-end fs-12 text-muted">3 days ago</Link>
												<p className="mb-0 text-muted fs">23,89k  New Sales</p>
											</li>
											<li className="mt-0">
												<i className="bx bx-money-withdraw analytics-icon bg-success-transparent text-success"></i>
												<span className="fw-semibold mb-4 fs-14 ">Total Revenue</span>
												<Link to="#" className="float-end fs-12 text-muted">5 days ago</Link>
												<p className="mb-0 text-muted fs">187k  New Revenue</p>
											</li>
											<li className="mt-0">
												<i className="bx bx-download analytics-icon bg-info-transparent text-info"></i>
												<span className="fw-semibold mb-4 fs-14 ">Total profit</span>
												<Link to="#" className="float-end fs-12 text-muted">1 week ago</Link>
												<p className="mb-0 text-muted fs">13k  New profit</p>
											</li>
											<li className="my-0 mb-2">
												<i className="bx bx-money analytics-icon bg-pink-transparent text-pink"></i>
												<span className="fw-semibold mb-4 fs-14 ">Total Income</span>
												<Link to="#" className="float-end fs-12 text-muted">2 week ago</Link>
												<p className="mb-0 text-muted fs">983k  New Income</p>
											</li>
										</ul>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={6}>
							<Card className="custom-card">
								<Card.Header className="card-header justify-content-between">
									<Card.Title>
										Audience Report
									</Card.Title>
									<div>
										<Button variant='' type="button" className="btn btn-sm btn-primary-light btn-wave"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Export</Button>
									</div>
								</Card.Header>
								<Card.Body className="">
									<div id="audienceReport">
										<Audiencereport />
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} lg={6}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="card-header justify-content-between">
									<Card.Title>
										Top Countries By visitors
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-light btn-sm border no-caret" data-bs-toggle="dropdown">
											<i className="fe fe-more-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" align="start">
											<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="p-0">
									<div className="table-responsive">
										<Table className="table text-nowrap mb-0">
											<tbody className="top-selling">
												<tr>
													<td className="ps-4">
														<div className="d-inline-flex top-countries">
															<span className="avatar avatar-xs  text-default">
																<img src={usflag} alt="" />
															</span>
															<span className="ms-2 fs-14 fw-semibold mb-0">USA</span>
														</div>
													</td>
													<td className="wd-100">
														<ProgressBar className="progress-xs" striped animated now={90} variant="primary" />
													</td>
													<td className="">
														<span className="fw-semibold fs-14">98.75k</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-inline-flex top-countries">
															<span className="avatar avatar-xs  text-default">
																<img src={indianflag} alt="" />
															</span>
															<span className="ms-2 fs-14 fw-semibold mb-0">India</span>
														</div>
													</td>
													<td className="wd-100">
														<ProgressBar className="progress-xs" striped animated now={60} variant="secondary" />
													</td>
													<td className="">
														<span className="fw-semibold fs-14">14.82k</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-inline-flex top-countries">
															<span className="avatar avatar-xs  text-default">
																<img src={argentinaflag} alt="" />
															</span>
															<span className="ms-2 fs-14 fw-semibold mb-0">Argentina</span>
														</div>
													</td>
													<td className="wd-100">
														<ProgressBar className="progress-xs" striped animated now={60} variant="info" />
													</td>
													<td className="">
														<span className="fw-semibold fs-14">14.82k</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-inline-flex top-countries">
															<span className="avatar avatar-xs  text-default">
																<img src={canadaflag} alt="" />
															</span>
															<span className="ms-2 fs-14 fw-semibold mb-0">Canada</span>
														</div>
													</td>
													<td className="wd-100">
														<ProgressBar className="progress-xs" striped animated now={75} variant="warning" />
													</td>
													<td className="">
														<span className="fw-semibold fs-14">91.60k</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-inline-flex top-countries">
															<span className="avatar avatar-xs  text-default">
																<img src={russiaflag} alt="" />
															</span>
															<span className="ms-2 fs-14 fw-semibold mb-0">Russia</span>
														</div>
													</td>
													<td className="wd-100">
														<ProgressBar className="progress-xs" striped animated now={60} variant="success" />
													</td>
													<td className="">
														<span className="fw-semibold fs-14">15.60k</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="">
															<div className="d-inline-flex top-countries">
																<span className="avatar avatar-xs  text-default">
																	<img src={spainflag} alt="" />
																</span>
																<span className="ms-2 fs-14 fw-semibold mb-0">Spain</span>
															</div>
														</div>
													</td>
													<td className="wd-100">
														<ProgressBar className="progress-xs" striped animated now={70} variant="pink" />
													</td>
													<td className="">
														<span className="fw-semibold fs-14">14.60k</span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="">
															<div className="d-inline-flex top-countries">
																<span className="avatar avatar-xs  text-default">
																	<img src={mexicoflag} alt="" />
																</span>
																<span className="ms-2 fs-14 fw-semibold mb-0">Mexico</span>
															</div>
														</div>
													</td>
													<td className="wd-100">
														<ProgressBar className="progress-xs" striped animated now={50} variant="teal" />
													</td>
													<td className="">
														<span className="fw-semibold fs-14">14.60k</span>
													</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={5} lg={6}>
							<Card className="custom-card  overflow-hidden">
								<Card.Header className="card-header justify-content-between">
									<Card.Title>Top Visitors</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fe fe-more-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" role="menu" align="end">
											<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="p-0">
									<div className="table-responsive">
										<Table className="table text-nowrap mb-0">
											<thead>
												<tr>
													<th scope="col" className="ps-4">Member</th>
													<th scope="col">Time</th>
													<th scope="col">Location</th>
													<th scope="col">Status</th>
												</tr>
											</thead>
											<tbody className="top-selling">
												<tr>
													<td className="ps-4">
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={faces1} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0 fs-14">Diam Ipsum</p>
																<Link to="#" className="text-muted fs-12">12 min ago</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">Today, 10:03</span>
													</td>
													<td>
														<span className="fw-semibold">Germany</span>
													</td>
													<td><span className="badge badge-sm bg-success-transparent text-success">online</span></td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={faces2} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0 fs-14">Magna Elitr</p>
																<Link to="#" className="text-muted fs-12">15 min ago</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">Today, 10:03</span>
													</td>
													<td>
														<span className="fw-semibold">England</span>
													</td>
													<td><span className="badge badge-sm bg-success-transparent text-success">online</span></td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={faces3} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0 fs-14">No Eirmod</p>
																<Link to="#" className="text-muted fs-12">30 min ago</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">Today, 11:03</span>
													</td>
													<td>
														<span className="fw-semibold">parise</span>
													</td>
													<td><span className="badge badge-sm bg-danger-transparent text-danger">offline</span></td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={faces4} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0 fs-14">Eirmod Vonsetetur</p>
																<Link to="#" className="text-muted fs-12">50 min ago</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">Today, 12:03</span>
													</td>
													<td>
														<span className="fw-semibold">Usa</span>
													</td>
													<td><span className="badge badge-sm bg-success-transparent text-success">online</span></td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={faces7} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0 fs-14">Morrie ali</p>
																<Link to="#" className="text-muted fs-12">60 min ago</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">Today, 01:03</span>
													</td>
													<td>
														<span className="fw-semibold">England</span>
													</td>
													<td><span className="badge badge-sm bg-danger-transparent text-danger">offline</span></td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={4} lg={6}>
							<Card className="custom-card  overflow-hidden">
								<Card.Header className=" justify-content-between">
									<Card.Title>
										Browser Usage
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" role="menu">
											<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="p-0">
									<div className="table-responsive">
										<Table className="table table-hover text-nowrap">
											<thead>
												<tr>
													<th scope="col" className="ps-4">Browser</th>
													<th scope="col">Sessions</th>
													<th scope="col" className="text-center">Bounce Rate</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<span className="avatar avatar-rounded avatar-sm p-2 bg-primary-transparent me-2">
																<i className="ri-google-fill fs-18 text-primary"></i>
															</span>
															<div className="fw-semibold">Google</div>
														</div>
													</td>
													<td>
														<span>23,379</span>
													</td>
													<td>
														<span className="d-block text-success fs-14 text-center">+0.892 <i className="ti ti-trending-up ms-1"></i></span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<span className="avatar avatar-rounded avatar-sm p-2 bg-secondary-transparent me-2">
																<i className="ri-safari-line fs-18 text-secondary"></i>
															</span>
															<div className="fw-semibold">Safari</div>
														</div>
													</td>
													<td>
														<span>78,973</span>
													</td>
													<td>
														<span className="d-block text-success fs-14 text-center">+4.892 <i className="ti ti-trending-up ms-1"></i></span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<span className="avatar avatar-rounded avatar-sm p-2 bg-success-transparent me-2">
																<i className="ri-opera-fill fs-18 text-success"></i>
															</span>
															<div className="fw-semibold">Opera</div>
														</div>
													</td>
													<td>
														<span>12,457</span>
													</td>
													<td>
														<span className="d-block text-danger fs-14 text-center">-0.142 <i className="ti ti-trending-down ms-1"></i></span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<span className="avatar avatar-rounded avatar-sm p-2 bg-info-transparent me-2">
																<i className="ri-edge-fill fs-18 text-info"></i>
															</span>
															<div className="fw-semibold">Edge</div>
														</div>
													</td>
													<td>
														<span>8,570</span>
													</td>
													<td>
														<span className="d-block text-success fs-14 text-center">+21.092 <i className="ti ti-trending-up ms-1"></i></span>
													</td>
												</tr>
												<tr>
													<td className="ps-4">
														<div className="d-flex align-items-center">
															<span className="avatar avatar-rounded avatar-sm p-2 bg-warning-transparent me-2">
																<i className="ri-firefox-fill fs-18 text-warning"></i>
															</span>
															<div className="fw-semibold">Firefox</div>
														</div>
													</td>
													<td>
														<span>6,135</span>
													</td>
													<td>
														<span className="d-block text-danger fs-14 text-center">-2.098 <i className="ti ti-trending-down ms-1"></i></span>
													</td>
												</tr>
												<tr>
													<td className="border-bottom-0 ps-4">
														<div className="d-flex align-items-center">
															<span className="avatar avatar-rounded avatar-sm p-2 bg-danger-transparent me-2">
																<i className="ri-ubuntu-fill fs-18 text-danger"></i>
															</span>
															<div className="fw-semibold">Ubuntu</div>
														</div>
													</td>
													<td className="border-bottom-0">
														<span>4,789</span>
													</td>
													<td>
														<span className="d-block text-success fs-14 text-center">+31.765 <i className="ti ti-trending-up ms-1"></i></span>
													</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} xl={4} lg={6}>
							<Card className="custom-card ">
								<Card.Header className="justify-content-between">
									<Card.Title>
										Visitors
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fe fe-more-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu align="start" as="ul">
											<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="">
									<div id="popTrades" className="mx-auto">
										<Visitors />
									</div>
									<div className="d-flex justify-content-center">
										<div className="d-flex p-4  pb-0  ps-0">
											<div className="text-center">
												<p className="mb-1 text-muted"> <i className="bx bxs-circle text-primary fs-13  me-1"></i>Online visitors</p>
												<h5 className="mb-0">186,75.00 </h5>
												<span className="text-success font-semibold fs-12"><i className="ri-arrow-up-s-fill align-middle"></i>0.23%</span>
											</div>
										</div>
										<div className="d-flex p-4  pb-0 ">
											<div className="text-center">
												<p className="mb-1 text-muted"> <i className="bx bxs-circle text-light fs-13  me-1"></i>Offline visitors</p>
												<h5 className=" mb-0">$122,39 </h5>
												<span className="text-danger font-semibold fs-12"><i className="ri-arrow-down-s-fill align-middle"></i>0.23%</span>
											</div>
										</div>
									</div>
								</Card.Body>

							</Card>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<h6 className="text-sm fw-semibold mb-0">Active Users</h6>
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu as="ul" role="menu">
												<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
												<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
												<Dropdown.Item as="li" href="#">Last Week</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<div className="d-flex align-items-end">
										<div className="flex-1">
											<p className="text-lg fw-semibold mb-1">12,890<span className="text-success fs-12 ms-2"><i className="fe fe-arrow-up-right me-2 fs-12"></i>10.5%</span></p>
											<p className="mb-0 fs-12 text-muted">Currently active now</p>
										</div>
										<div className="ms-2">
											<span className="avatar radius-5 bg-primary"><i className="fe fe-activity"></i></span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={9} xl={8} lg={12} className="">
							<Card className="custom-card overflow-hidden">
								<Card.Header className="justify-content-between">
									<Card.Title>
										Visitors By Channel Report
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
												<Dropdown.Item as="li" href="#">New</Dropdown.Item>
												<Dropdown.Item as="li" href="#">Popular</Dropdown.Item>
												<Dropdown.Item as="li" href="#">Relevant</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</Card.Header>
								<Card.Body className="">
									<div className="table-responsive">
										<Table className="table table-hover text-nowrap table-bordered">
											<thead>
												<tr>
													<th scope="col">S.No</th>
													<th scope="col">Channel</th>
													<th scope="col">Sessions</th>
													<th scope="col">Bounce Rate</th>
													<th scope="col">Avg Session Duration</th>
													<th scope="col">Goal Completed</th>
													<th scope="col">Pages Per Session</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row" className="text-center">
														1
													</th>
													<td>
														<div className="d-flex align-items-center">
															<span className="avatar avatar-sm bg-primary-transparent avatar-rounded">
																<i className="ri-search-2-line fs-15 fw-semibiold text-primary"></i>
															</span>
															<span className="ms-2">
																Organic Search
															</span>
														</div>
													</td>
													<td>782</td>
													<td>32.09%</td>
													<td>
														0 hrs : 0 mins : 32 secs
													</td>
													<td className="text-center">
														<span className="">278</span>
													</td>
													<td className="text-center">
														<span className="badge bg-primary-transparent">2.9</span>
													</td>
												</tr>
												<tr>
													<th scope="row" className="text-center">
														2
													</th>
													<td>
														<div className="d-flex align-items-center">
															<span className="avatar avatar-sm bg-secondary-transparent avatar-rounded">
																<i className="ri-globe-line fs-15 fw-semibiold text-secondary"></i>
															</span>
															<span className="ms-2">
																Direct
															</span>
														</div>
													</td>
													<td>882</td>
													<td>39.38%</td>
													<td>
														0 hrs : 2 mins : 45 secs
													</td>
													<td className="text-center">
														<span className="">782</span>
													</td>
													<td className="text-center">
														<span className="badge bg-secondary-transparent">1.5</span>
													</td>
												</tr>
												<tr>
													<th scope="row" className="text-center">
														3
													</th>
													<td>
														<div className="d-flex align-items-center">
															<span className="avatar avatar-sm bg-success-transparent avatar-rounded">
																<i className="ri-share-forward-line fs-15 fw-semibiold text-success"></i>
															</span>
															<span className="ms-2">
																Referral
															</span>
														</div>
													</td>
													<td>322</td>
													<td>22.67%</td>
													<td>
														0 hrs : 38 mins : 28 secs
													</td>
													<td className="text-center">
														<span >622</span>
													</td>
													<td className="text-center">
														<span className="badge bg-success-transparent"> 3.2</span>
													</td>
												</tr>
												<tr>
													<th scope="row" className="text-center">
														4
													</th>
													<td>
														<div className="d-flex align-items-center">
															<span className="avatar avatar-sm bg-info-transparent avatar-rounded">
																<i className="ri-reactjs-line fs-15 fw-semibiold text-info"></i>
															</span>
															<span className="ms-2">
																Social
															</span>
														</div>
													</td>
													<td>389</td>
													<td>25.11%</td>
													<td>
														0 hrs : 12 mins : 89 secs
													</td>
													<td className="text-center">
														<span>142</span>
													</td>
													<td className="text-center">
														<span className="badge bg-info-transparent">  5.5</span>
													</td>
												</tr>
												<tr>
													<th scope="row" className="text-center">
														5
													</th>
													<td>
														<div className="d-flex align-items-center">
															<span className="avatar avatar-sm bg-warning-transparent avatar-rounded">
																<i className="ri-mail-line fs-15 fw-semibiold text-warning"></i>
															</span>
															<span className="ms-2">
																Email
															</span>
														</div>
													</td>
													<td>378</td>
													<td>23.79%</td>
													<td>
														0 hrs : 14 mins : 27 secs
													</td>
													<td className="text-center">
														<span >178</span>
													</td>
													<td className="text-center">
														<span className="badge bg-warning-transparent">  2.5</span>
													</td>
												</tr>
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
												<Pagination className="pagination mb-0">
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
					</Row>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Analytics;
