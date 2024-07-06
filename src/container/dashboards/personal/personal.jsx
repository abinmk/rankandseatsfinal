import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, OverlayTrigger, Pagination, Row, Table, Tooltip } from "react-bootstrap";
import { Balance, Personalbalance } from "./personaldata";
import { Link } from "react-router-dom";

//IMAGES
import faces11 from "../../../assets/images/faces/11.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces13 from "../../../assets/images/faces/13.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";

const Personal = () => {
	return (
		<Fragment>
			<Row>
				<Col xxl={9}>
					<Row>
						<Col xl={12}>
							<Row>
								<Col xl={3} sm={6} lg={6}>
									<Card className="custom-card">
										<Card.Body>
											<div className="flex-1">
												<div className="d-flex align-items-center justify-content-between">
													<span className="mb-0 flex-1 fs-14">Instagram</span>
													<div className="ms-2">
														<span className="avatar bg-warning-transparent text-warning"><i className="bi bi-instagram fs-16"></i></span>
													</div>
												</div>
												<h3 className="mb-0 fs-24">121K</h3>
												<div className="flex-between">
													<span className="text-muted fs-12">6 min ago</span>
													<span className="text-warning"><i className="bi bi-arrow-down-right mg-e-3 fs-10 me-1  d-inline-block"></i>1.5%</span>
												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
								<Col xl={3} sm={6} lg={6}>
									<Card className="custom-card">
										<Card.Body>
											<div className="d-flex align-items-center">
												<div className="flex-1">
													<div className="d-flex align-items-center justify-content-between">
														<span className="mb-0 flex-1 fs-14">Facebook</span>
														<div className="ms-2">
															<span className="avatar bg-success-transparent text-success"><i className="bi bi-facebook fs-16"></i></span>
														</div>
													</div>
													<h3 className="mb-0 fs-24">2.1K</h3>
													<div className="flex-between">
														<span className="text-muted fs-12">1 hr ago</span>
														<span className="text-success"><i className="bi bi-arrow-down-right mg-e-3 fs-10 me-1  d-inline-block"></i>1.9%</span>
													</div>
												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
								<Col xl={3} sm={6} lg={6}>
									<Card className="custom-card">
										<Card.Body>
											<div className=" flex-1">
												<div className="d-flex align-items-center justify-content-between">
													<span className="mb-0 flex-1 fs-14">Twitter</span>
													<div className="ms-2">
														<span className="avatar bg-info-transparent text-info"><i className="bi bi-twitter-x fs-16"></i></span>
													</div>
												</div>
												<h3 className="mb-0 fs-24">2.1K</h3>
												<div className="flex-between">
													<span className="text-muted fs-12">1 week ago</span>
													<span className="text-info"><i className="bi bi-arrow-up-right mg-e-3 fs-10 me-1  d-inline-block"></i>1.9%</span>
												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
								<Col xl={3} sm={6} lg={6}>
									<Card className="custom-card">
										<Card.Body>
											<div className=" flex-1">
												<div className="d-flex align-items-center justify-content-between">
													<span className="mb-0 flex-1 fs-14">Youtube</span>
													<div className="ms-2">
														<span className="avatar bg-danger-transparent text-danger"><i className="bi bi-youtube fs-16"></i></span>
													</div>
												</div>
												<h3 className="mb-0 fs-24">1.1M</h3>
												<div className="flex-between">
													<span className="text-muted fs-12">1 day ago</span>
													<span className="text-danger"><i className="bi bi-arrow-up-right mg-e-3 fs-10 me-1  d-inline-block"></i>1.9%</span>
												</div>
											</div>

										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Header className="d-flex ajustify-content-between">
									<div className="flex-1">
										<Card.Title>Upcoming Events</Card.Title>
									</div>
									<Dropdown className="p-0">
										<Dropdown.Toggle variant='' className="btn-outline-light btn-sm text-muted no-caret">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" role="menu">
											<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item >
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body>
									<ul className="list-unstyled mb-0">
										<li className="list-item mb-4">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar bg-primary-transparent text-primary"><i className="bi bi-calendar2-heart"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between">
														<span className="badge bg-primary-transparent">11-06-2022</span>
														<Dropdown>
															<Dropdown.Toggle variant='' aria-label="anchor" className="tx-inverse text-default no-caret p-0" data-bs-toggle="dropdown"><i className="bi bi-three-dots "></i></Dropdown.Toggle>
															<Dropdown.Menu as="ul">
																<Dropdown.Item href="#">Action</Dropdown.Item>
																<Dropdown.Item href="#">Another Action</Dropdown.Item>
																<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
													<span>Meeting with<Link to="#" className="text-primary font-weight-semibold ms-1 op-8">Umar Xai</Link></span>
												</div>
											</div>
										</li>
										<li className="list-item  mb-4">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar  text-secondary">
														<img src={faces3} alt="img" className="rounded-circle" />
													</span>
												</div>
												<div className="flex-1">
													<div className="flex-between">
														<span className="badge bg-secondary-transparent">15-06-2022</span>
														<Dropdown>
															<Dropdown.Toggle variant='' aria-label="anchor" className="tx-inverse text-default no-caret p-0" data-bs-toggle="dropdown"><i className="bi bi-three-dots "></i></Dropdown.Toggle>
															<Dropdown.Menu as="ul">
																<Dropdown.Item href="#">Action</Dropdown.Item>
																<Dropdown.Item href="#">Another Action</Dropdown.Item>
																<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
													<span><Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="text-primary font-weight-semibold me-1 op-8">Sheh Map</Link> Birthday Party</span>
												</div>
											</div>
										</li>
										<li className="list-item  mb-4">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar bg-secondary-transparent text-secondary"><i className="bi bi-compass"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between">
														<span className="badge bg-orange-transparent">20-06-2022</span>
														<Dropdown>
															<Dropdown.Toggle variant='' aria-label="anchor" className="tx-inverse text-default no-caret p-0" data-bs-toggle="dropdown"><i className="bi bi-three-dots "></i></Dropdown.Toggle>
															<Dropdown.Menu as="ul">
																<Dropdown.Item href="#">Action</Dropdown.Item>
																<Dropdown.Item href="#">Another Action</Dropdown.Item>
																<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
													<span>Holiday Trip To Italy</span>
												</div>
											</div>
										</li>
										<li className="list-item  mb-4">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar bg-info-transparent text-info"><i className="bi bi-balloon-heart"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between">
														<span className="badge bg-info-transparent">24-07-2022</span>
														<Dropdown>
															<Dropdown.Toggle variant='' aria-label="anchor" className="tx-inverse text-default no-caret p-0" data-bs-toggle="dropdown"><i className="bi bi-three-dots "></i></Dropdown.Toggle>
															<Dropdown.Menu as="ul">
																<Dropdown.Item href="#">Action</Dropdown.Item>
																<Dropdown.Item href="#">Another Action</Dropdown.Item>
																<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
													<span>Wedding Anniversary</span>
												</div>
											</div>
										</li>
										<li className="list-item">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar  text-warning">
														<img src={faces8} alt="img" className="rounded-circle" />
													</span>
												</div>
												<div className="flex-1">
													<div className="flex-between">
														<span className="badge bg-warning-transparent">11-11-2022</span>
														<Dropdown>
															<Dropdown.Toggle variant='' aria-label="anchor" className="tx-inverse text-default no-caret p-0" data-bs-toggle="dropdown"><i className="bi bi-three-dots "></i></Dropdown.Toggle>
															<Dropdown.Menu as="ul">
																<Dropdown.Item href="#">Action</Dropdown.Item>
																<Dropdown.Item href="#">Another Action</Dropdown.Item>
																<Dropdown.Item href="#">Something Else Here</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
													<span>Meeting With <Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="text-primary font-weight-semibold op-8  ms-1">Irav Ert</Link></span>
												</div>
											</div>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={8}>
							<Card className="custom-card">
								<div className="card-header">
									<Card.Title>Statistics</Card.Title>
									<div className="ms-auto">
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-start">
												<Dropdown.Item className="d-flex" href="#">
													<i className="ri-share-forward-line me-2"></i>Share
												</Dropdown.Item>
												<Dropdown.Item className="d-flex" href="#">
													<i className="ri-download-2-line me-2"></i>Download
												</Dropdown.Item>
												<Dropdown.Item className="d-flex" href="#">
													<i className="ri-delete-bin-7-line me-2"></i>Delete
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
								<Card.Body>
									<div className="">
										<div id="balance">
											<Personalbalance />
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Header className="d-flex  justify-content-between">
									<div className="flex-1">
										<Card.Title>Recent Messages</Card.Title>
									</div>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" role="menu">
											<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body>
									<div className="row d-lg-flex d-none mb-2">
										<Col sm={2}>
											<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status rounded-circle">
												<img src={faces2} alt="img" className="avatar avatar-md rounded-circle" />
											</Link>
										</Col>
										<Col sm={2}>
											<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status rounded-circle">
												<img src={faces3} alt="img" className="avatar avatar-md rounded-circle" />
											</Link>
										</Col>
										<Col sm={2}>
											<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status rounded-circle">
												<img src={faces6} alt="img" className="avatar avatar-md rounded-circle" />
											</Link>
										</Col>
										<Col sm={2}>
											<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status offline rounded-circle">
												<img src={faces9} alt="img" className="avatar avatar-md rounded-circle" />
											</Link>
										</Col>
										<Col sm={2}>
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="avatar avatar-md rounded-circle bg-light text-primary">
												<i className="fe fe-chevron-right"></i>
											</Link>
										</Col>
									</div>
									<div className="flex-between mb-3">
										<span className="text-muted fw-semibiold">Messages</span>
										<Link to="#" className="tx-inverse text-muted  fw-semibiold"><i className="bi bi-check2-all  v-middle me-1"></i>Mark as read</Link>
									</div>
									<ul className="list-unstyled mb-0">
										<li className="list-item mb-3">
											<div className="d-flex align-items-start">
												<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="me-2">
													<img src={faces11} alt="img" className="avatar rounded-circle" />
												</Link>
												<div className="flex-1 flex-between pos-relative">
													<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="masked-link"></Link>
													<div className="flex-1">
														<p className="mb-0 fw-semibold fs-14">Elon Isk</p>
														<span className="fs-12 text-muted">Hello there! How are you doing? Call me when...</span>
													</div>
													<div className="min-w-fit-content ms-2 text-end">
														<p className="mb-0 text-muted fs-12">2 min</p>
														<span className="badge bg-primary radius-20">2</span>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-3">
											<div className="d-flex align-items-start">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="me-2">
													<span className="avatar bg-success-transparent text-success"><i className="bi bi-person fs-18"></i></span>
												</Link>
												<div className="flex-1 flex-between pos-relative">
													<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="masked-link"></Link>
													<div className="flex-1">
														<p className="mb-0 fw-semibold fs-14">Sebastian</p>
														<span className="fs-12 text-muted">Shall we go to the cafe at downtown...</span>
													</div>
													<div className="min-w-fit-content ms-2 text-end">
														<p className="mb-0 text-muted fs-12">yesterday</p>
														<span className="badge bg-primary radius-20">2</span>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-3">
											<div className="d-flex align-items-start">
												<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="me-2">
													<img src={faces4} alt="img" className="avatar rounded-circle" />
												</Link>
												<div className="flex-1 flex-between pos-relative">
													<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="masked-link"></Link>
													<div className="flex-1">
														<p className="mb-0 fw-semibold fs-14">Shakira Sen</p>
														<span className="fs-12 text-muted">I would like to discuss about that assets...</span>
													</div>
													<div className="min-w-fit-content ms-2 text-end">
														<p className="mb-0 text-muted fs-12">09:43</p>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-3">
											<div className="d-flex align-items-start">
												<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="me-2">
													<img src={faces11} alt="img" className="avatar rounded-circle" />
												</Link>
												<div className="flex-1 flex-between pos-relative">
													<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="masked-link"></Link>
													<div className="flex-1">
														<p className="mb-0 fw-semibold fs-14">Elon Isk</p>
														<span className="fs-12 text-muted">Hello there! How are you doing? Call me when...</span>
													</div>
													<div className="min-w-fit-content ms-2 text-end">
														<p className="mb-0 text-muted fs-12">2 min</p>
														<span className="badge bg-primary radius-20">2</span>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-3">
											<div className="d-flex align-items-start">
												<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="me-2">
													<img src={faces4} alt="img" className="avatar rounded-circle" />
												</Link>
												<div className="flex-1 flex-between pos-relative">
													<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="masked-link"></Link>
													<div className="flex-1">
														<p className="mb-0 fw-semibold fs-14">Shakira Sen</p>
														<span className="fs-12 text-muted">I would like to discuss about that assets...</span>
													</div>
													<div className="min-w-fit-content ms-2 text-end">
														<p className="mb-0 text-muted fs-12">09:43</p>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item">
											<div className="d-flex align-items-start">
												<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="me-2">
													<span className="avatar bg-primary-transparent text-primary"><i className="bi bi-person fs-18"></i></span>
												</Link>
												<div className="flex-1 flex-between pos-relative">
													<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/chat`} className="masked-link"></Link>
													<div className="flex-1">
														<p className="mb-0 fw-semibold fs-14">Sebastian</p>
														<span className="fs-12 text-muted">Shall we go to the cafe at downtown...</span>
													</div>
													<div className="min-w-fit-content ms-2 text-end">
														<p className="mb-0 text-muted fs-12">yesterday</p>
														<span className="badge bg-primary radius-20">2</span>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={8}>
							<Card className="custom-card">
								<Card.Header className="justify-content-between">
									<Card.Title>
										Recent Trasaction history
									</Card.Title>
									<div className="d-flex flex-wrap">
										<div className="me-3 my-1">
											<Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
										</div>
										<Dropdown className=" my-1">
											<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
												Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu align="end" as="ul" role="menu">
												<Dropdown.Item as="li" href="#">New</Dropdown.Item >
												<Dropdown.Item as="li" href="#">Popular</Dropdown.Item >
												<Dropdown.Item as="li" href="#">Relevant</Dropdown.Item >
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</Card.Header>
								<Card.Body>
									<div className="table-responsive">
										<Table className="table table-hover text-nowrap table-bordered">
											<thead>
												<tr>
													<th scope="col" className="text-center">S.No</th>
													<th scope="col">Recipient</th>
													<th scope="col">Transaction Id</th>
													<th scope="col">Amount</th>
													<th scope="col">Type</th>
													<th scope="col">Status</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="text-center">
														01
													</td>
													<td>
														<div className="d-flex align-items-center">
															<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
																<img src={faces9} alt="img" className="avatar avatar-md radius-5" />
															</Link>
															<div className="flex-1 flex-between">
																<div className="flex-1 pos-relative">
																	<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
																	<p className="mb-0 fw-semibold fs-14">Arzil Merob</p>
																	<span className="fs-12 text-muted">Merob0198@.com</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<span className="text-primary">#abc0012311</span>
													</td>
													<td>
														<div className="">
															$12,098
														</div>
													</td>
													<td>
														<div className="d-flex align-items-center">
															Debited
														</div>
													</td>
													<td>
														<span className="badge bg-success-transparent">Success</span>
													</td>
													<td>
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
													<td className="text-center">
														02
													</td>
													<td>
														<div className="d-flex align-items-center">
															<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
																<img src={faces2} alt="img" className="avatar avatar-md radius-5" />
															</Link>
															<div className="flex-1 flex-between">
																<div className="flex-1 pos-relative">
																	<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
																	<p className="mb-0 fw-semibold fs-14">Vrsiore Merob</p>
																	<span className="fs-12 text-muted">Vrsiore987@.com</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<span className="text-primary">#abc0012312</span>
													</td>
													<td>
														<div className="">
															$62,098
														</div>
													</td>
													<td>
														<div className="d-flex align-items-center">
															Debited
														</div>
													</td>
													<td>
														<span className="badge bg-success-transparent">Success</span>
													</td>
													<td>
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
													<td className="text-center">
														03
													</td>
													<td>
														<div className="d-flex align-items-center">
															<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
																<img src={faces2} alt="img" className="avatar avatar-md radius-5" />
															</Link>
															<div className="flex-1 flex-between">
																<div className="flex-1 pos-relative">
																	<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
																	<p className="mb-0 fw-semibold fs-14">Johber Akber</p>
																	<span className="fs-12 text-muted">Johber1123@.com</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<span className="text-primary">#abc0012313</span>
													</td>
													<td>
														<div className="">
															$122,098
														</div>
													</td>
													<td>
														<div className="d-flex align-items-center">
															Credited
														</div>
													</td>
													<td>
														<span className="badge bg-info-transparent">Pending</span>
													</td>
													<td>
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
													<td className="text-center">
														04
													</td>
													<td>
														<div className="d-flex align-items-center">
															<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
																<img src={faces4} alt="img" className="avatar avatar-md radius-5" />
															</Link>
															<div className="flex-1 flex-between">
																<div className="flex-1 pos-relative">
																	<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
																	<p className="mb-0 fw-semibold fs-14">Bobber John</p>
																	<span className="fs-12 text-muted">Bobber123@.com</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<span className="text-primary">#abc0012314</span>
													</td>
													<td>
														<div className="">
															$502,098
														</div>
													</td>
													<td>
														<div className="d-flex align-items-center">
															Credited
														</div>
													</td>
													<td>
														<span className="badge bg-danger-transparent">cancel</span>
													</td>
													<td>
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
													<td className="text-center">
														05
													</td>
													<td>
														<div className="d-flex align-items-center">
															<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
																<img src={faces6} alt="img" className="avatar avatar-md radius-5" />
															</Link>
															<div className="flex-1 flex-between">
																<div className="flex-1 pos-relative">
																	<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
																	<p className="mb-0 fw-semibold fs-14">Allian Aksa</p>
																	<span className="fs-12 text-muted">Allian123@.com</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<span className="text-primary">#abc0012315</span>
													</td>
													<td>
														<div className="">
															$95,098
														</div>
													</td>
													<td>
														<div className="d-flex align-items-center">
															Debited
														</div>
													</td>
													<td>
														<span className="badge bg-success-transparent">success</span>
													</td>
													<td>
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
												<Pagination className=" mb-0">
													<Pagination.Item disabled href="#">
														Prev
													</Pagination.Item>
													<Pagination.Item active className="" href="#">1</Pagination.Item>
													<Pagination.Item className="" href="#">2</Pagination.Item>
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
				</Col>
				<Col xxl={3} className="">
					<Row>
						<Col xxl={12} md={6} className="">
							<Card className="custom-card">
								<Card.Body className="card-body ">
									<div className="d-flex justify-content-between">
										<div className="me-4">
											<h6 className="mb-3">Your Balance</h6>
											<h3 className="mb-0">$56,470</h3>
										</div>
										<div className="">
											<div id="personal-balance">
												<Balance />
											</div>
										</div>
									</div>
									<p className="mb-3">
										<i className="fe fe-trending-up me-1 text-success"></i>
										<span className="fs-11 text-muted">12% in last 7 days</span>
									</p>
									<div className="d-flex justify-content-between mt-4 flex-wrap">
										<div className="d-flex">
											<Link aria-label="anchor" to="#"><span className="avatar avatar-sm br-5 bg-primary-transparent text-primary me-2"><i className="fe fe-arrow-up"></i></span></Link>
											<div className="w-100">
												<Link to="#">
													<h5 className="mb-0  me-3">$73.002</h5>
												</Link>
												<p className="fs-12 text-muted me-3 mb-0">Income</p>
											</div>
										</div>
										<div className="d-flex">
											<Link aria-label="anchor" to="#"><span className="avatar avatar-sm br-5 bg-light  text-dark me-2"><i className="fe fe-arrow-down"></i></span></Link>
											<div className="w-100">
												<Link to="#">
													<h5 className="mb-0  me-3">$43.987</h5>
												</Link>
												<p className="fs-12 text-muted me-3 mb-0">Outcome</p>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>

							<Card className="custom-card">
								<Card.Header className="d-flex  justify-content-between">
									<div className="flex-1">
										<Card.Title>My Goals</Card.Title>
									</div>
								</Card.Header>
								<Card.Body>
									<ul className="list-unstyled mb-0">
										<li className="list-item mb-4">
											<div className="d-flex align-items-start pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link z-1"></Link>
												<div className="me-2">
													<span className="avatar bg-info-transparent text-info"><i className="bi bi-globe2"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between mb-2">
														<span className="flex-1 fw-semibold">Maldives Trip</span>
														<span className="min-w-fit-content ms-1 text-info">80%</span>
													</div>
													<div className="progress progress-xs progress-custom progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-info" style={{ width: "80%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-4">
											<div className="d-flex align-items-start pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link z-1"></Link>
												<div className="me-2">
													<span className="avatar bg-warning-transparent text-warning"><i className="bi bi-balloon-heart"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between mb-2">
														<span className="flex-1  fw-semibold">Savings For Birthday</span>
														<span className="min-w-fit-content ms-1 text-warning">70%</span>
													</div>
													<div className="progress progress-xs progress-custom progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-warning" style={{ width: "70%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-4">
											<div className="d-flex align-items-start pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link z-1"></Link>
												<div className="me-2">
													<span className="avatar bg-secondary-transparent text-secondary"><i className="bi bi-lightning"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between mb-2">
														<span className="flex-1 fw-semibold">Learn Guitar</span>
														<span className="min-w-fit-content ms-1 text-secondary">40%</span>
													</div>
													<div className="progress progress-xs progress-custom progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-secondary" style={{ width: "40%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item">
											<div className="d-flex align-items-start pos-relative">
												<Link aria-label="anchor" to="#" className="masked-link z-1"></Link>
												<div className="me-2">
													<span className="avatar bg-success-transparent text-success"><i className="bi bi-shop-window"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between mb-2">
														<span className="flex-1 fw-semibold">Learn Dancing</span>
														<span className="min-w-fit-content ms-1 text-success">55%</span>
													</div>
													<div className="progress progress-xs progress-custom progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
														<div className="progress-bar bg-success" style={{ width: "55%" }}>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</Card.Body>
							</Card>

						</Col>
						<Col xxl={12} md={6} className="">
							<Card className="custom-card">
								<Card.Header className="d-flex  justify-content-between">
									<div className="flex-1">
										<Card.Title>Favourite Contacts</Card.Title>
									</div>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" role="menu" align="end">
											<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
											<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body>
									<ul className="list-unstyled mb-0">
										<li className="list-item mb-4">
											<div className="d-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
													<img src={faces9} alt="img" className="avatar avatar-md radius-5" />
												</Link>
												<div className="flex-1 flex-between">
													<div className="flex-1 pos-relative">
														<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
														<p className="mb-0 fw-semibold fs-14">Gold</p>
														<span className="fs-12 text-muted">+(72)-86976972</span>
													</div>
													<div className="min-w-fit-content ms-1">
														<Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-4">
											<div className="d-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
													<img src={faces12} alt="img" className="avatar avatar-md radius-5" />
												</Link>
												<div className="flex-1 flex-between">
													<div className="flex-1 pos-relative">
														<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
														<p className="mb-0 fw-semibold fs-14">Prax Bhav</p>
														<span className="fs-12 text-muted">+(12)-05147532</span>
													</div>
													<div className="min-w-fit-content ms-1">
														<Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-4">
											<div className="d-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
													<img src={faces1} alt="img" className="avatar avatar-md radius-5" />
												</Link>
												<div className="flex-1 flex-between">
													<div className="flex-1 pos-relative">
														<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
														<p className="mb-0 fw-semibold fs-14">Rox avaren</p>
														<span className="fs-12 text-muted">+(12)-05147582</span>
													</div>
													<div className="min-w-fit-content ms-1">
														<Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-4">
											<div className="d-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
													<img src={faces13} alt="img" className="avatar avatar-md radius-5" />
												</Link>
												<div className="flex-1 flex-between">
													<div className="flex-1 pos-relative">
														<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
														<p className="mb-0 fw-semibold fs-14">Zebor varin</p>
														<span className="fs-12 text-muted">+(12)-05147532</span>
													</div>
													<div className="min-w-fit-content ms-1">
														<Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-4">
											<div className="d-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
													<img src={faces6} alt="img" className="avatar avatar-md radius-5" />
												</Link>
												<div className="flex-1 flex-between">
													<div className="flex-1 pos-relative">
														<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
														<p className="mb-0 fw-semibold fs-14">Arhohs Vlli</p>
														<span className="fs-12 text-muted">+(21)-16773116</span>
													</div>
													<div className="min-w-fit-content ms-1">
														<Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item mb-4">
											<div className="d-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
													<img src={faces7} alt="img" className="avatar avatar-md radius-5" />
												</Link>
												<div className="flex-1 flex-between">
													<div className="flex-1 pos-relative">
														<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
														<p className="mb-0 fw-semibold fs-14">Arif Azedh</p>
														<span className="fs-12 text-muted">+(22)-19873116</span>
													</div>
													<div className="min-w-fit-content ms-1">
														<Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
													</div>
												</div>
											</div>
										</li>
										<li className="list-item">
											<div className="d-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/contacts`} className="me-2">
													<img src={faces15} alt="img" className="avatar avatar-md radius-5" />
												</Link>
												<div className="flex-1 flex-between">
													<div className="flex-1 pos-relative">
														<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="masked-link"></Link>
														<p className="mb-0 fw-semibold fs-14">Aliz Varne</p>
														<span className="fs-12 text-muted">+(99)-19873116</span>
													</div>
													<div className="min-w-fit-content ms-1">
														<Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>

					</Row>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Personal;
