
import React, { FC, Fragment } from "react";
import { Card, Col, Dropdown, Nav, ProgressBar, Row, Tab, } from "react-bootstrap";
import { Newapplicantsdata, Recentapplicants, Recenttransactions, Tasksstatusdata, Teamembersdata, Topreferrersdata, Totalapplicantsdata } from "./widgetsdata";
import { Link } from "react-router-dom";

//IMAGES
import faces1 from "../../assets/images/faces/1.jpg";
import faces2 from "../../assets/images/faces/2.jpg";
import faces3 from "../../assets/images/faces/3.jpg";
import faces4 from "../../assets/images/faces/4.jpg";
import faces5 from "../../assets/images/faces/5.jpg";
import faces8 from "../../assets/images/faces/8.jpg";
import faces9 from "../../assets/images/faces/9.jpg";
import faces10 from "../../assets/images/faces/10.jpg";
import faces12 from "../../assets/images/faces/12.jpg";
import faces13 from "../../assets/images/faces/13.jpg";
import faces15 from "../../assets/images/faces/15.jpg";
import faces6 from "../../assets/images/faces/6.jpg";
import faces16 from "../../assets/images/faces/16.jpg";
import faces11 from "../../assets/images/faces/11.jpg";

const Widgets = () => {

	return (
		<Fragment>
			<Row>
				<Col xxl={12}>
					<Card className="custom-card">
						<Card.Body className="p-0">
							<div className="d-flex flex-wrap justify-content-between align-items-center">
								<div className="d-flex flex-1 p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-3 mt-1">
										<div className="avatar avatar-lg bg-secondary-transparent radius-5"><i className="ti ti-package fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Total Products</p>
										<span className="text-xl fw-semibold">45,280</span>
										<span className="ms-3 fs-13  text-secondary d-inline-block"><i className="fe fe-arrow-up-right fs-12"></i>1.31%</span>
									</div>
								</div>
								<div className="d-flex flex-1 p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-3 mt-1">
										<div className="avatar avatar-lg bg-pink-transparent radius-5"><i className="ti ti-packge-import fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Total Orders</p>
										<span className="text-xl fw-semibold">12,088</span>
										<span className="ms-3 fs-13  text-pink d-inline-block"><i className="fe fe-arrow-up-right fs-12"></i>12.05%</span>
									</div>
								</div>
								<div className="d-flex flex-1 p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-3 mt-1">
										<div className="avatar avatar-lg bg-info-transparent radius-5"><i className="ti ti-rocket fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Total Sales</p>
										<span className="text-xl fw-semibold">10,500</span>
										<span className="ms-3 fs-13  text-info d-inline-block"><i className="fe fe-arrow-down-right fs-12"></i>1.14%</span>
									</div>
								</div>
								<div className="d-flex flex-1 p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-3 mt-1">
										<div className="avatar avatar-lg bg-orange-transparent radius-5"><i className="ti ti-wallet fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Income</p>
										<span className="text-xl fw-semibold">$69,270</span>
										<span className="ms-3 fs-13 text-orange d-inline-block"><i className="fe fe-arrow-up-right fs-12 "></i>2.58%</span>
									</div>
								</div>
								<div className="d-flex flex-1 p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-3 mt-1">
										<div className="avatar avatar-lg bg-success-transparent radius-5"><i className="ti ti-coin fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Expenses</p>
										<span className="text-xl fw-semibold">$21,520</span>
										<span className="ms-3 fs-13  text-success d-inline-block"><i className="fe fe-arrow-down-right fs-12"></i>14.69%</span>
									</div>
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
									<span className="mb-0 flex-1 text-muted fw-semibold">Total Projects</span>
									<div className="ms-2">
										<span className="avatar bg-info-transparent text-info"><i className="bx bxs-briefcase fs-20"></i></span>
									</div>
								</div>
								<h4 className="mb-0">676,90</h4>
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
										<span className="avatar bg-pink-transparent text-pink"><i className="bx bxs-book-open fs-20"></i></span>
									</div>
								</div>
								<h4 className="mb-0">406,90</h4>
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
										<span className="avatar bg-warning-transparent text-warning"><i className="bx bxs-folder-plus fs-20"></i></span>
									</div>
								</div>
								<h4 className="mb-0">716,80</h4>
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
										<span className="avatar bg-teal-transparent text-teal"><i className="bx bxs-compass fs-20"></i></span>
									</div>
								</div>
								<h4 className="mb-0">536,80</h4>
								<div className="flex-between">
									<span className="text-muted fs-12">30 min ago</span>
									<span className="text-teal fw-semibold"><i className="bi bi-arrow-down-right me-1 fs-13"></i>396.03%</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className="row-cols-12">
				{Totalapplicantsdata.map((idx) => (
					<Col xxl={2} xl={4} md={4} sm={6} key={Math.random()}>
						<Card className="custom-card">
							<Card.Body>
								<div className="flex-between mb-3">
									<span className="text-muted">{idx.text1}</span>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="bi bi-three-dots"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul">
											<Dropdown.Item as="li" href="#" className="">Action</Dropdown.Item>
											<Dropdown.Item as="li" href="#" className="">Another Action</Dropdown.Item>
											<Dropdown.Item as="li" href="#" className="">Something Else Here</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="d-flex align-items-end">
									<div className="flex-1">
										<h3 className="mb-2">{idx.text2}</h3>
										<span className={`badge bg-${idx.color}-transparent rounded-1`}>{idx.class1}</span>
									</div>
									<span className={`ms-2 avatar bg-${idx.color}-transparent`}>
										<i className={`bi bi-${idx.class2} fs-18`}></i>
									</span>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<Row>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between mb-4">
								<div className="flex-fill d-flex align-items-top">
									<div className="me-2">
										<span className="avatar avatar-md text-primary border bg-light"><i className="ti ti-users fs-18"></i></span>
									</div>
									<div className="flex-fill">
										<p className="fw-semibold fs-14 mb-0">Total Candidates</p>
										<p className="mb-0 text-muted fs-12 op-7">Magna sit elitr kasd consetetur.</p>
									</div>
								</div>
								<Dropdown>
									<Dropdown.Toggle variant='' aria-label="anchor" data-bs-toggle="dropdown" className=" no-caret btn btn-icon btn-sm btn-light"><i className="ti ti-dots"></i></Dropdown.Toggle>
									<Dropdown.Menu as="ul">
										<Dropdown.Item href="#" as="li">Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Another Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Something Else Here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="d-flex align-items-center mb-0">
								<p className="mb-0 fs-20 fw-semibold">2,460</p>
								<span className="text-muted ms-2"><i className="ti ti-trending-up align-middle text-success me-1 d-inline-flex"></i>2.5%</span>
							</div>
							<div className="d-flex align-items-center">
								<div className="flex-fill">
									<div className="progress progress-xs">
										<div className="progress-bar bg-primary" role="progressbar" style={{ width: "14%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
									</div>
								</div>
								<div className="ms-3">
									<span className="fs-12 text-muted">14% Target</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between mb-4">
								<div className="flex-fill d-flex align-items-top">
									<div className="me-2">
										<span className="avatar avatar-md text-secondary border bg-light"><i className="ti ti-user-circle fs-18"></i></span>
									</div>
									<div className="flex-fill">
										<p className="fw-semibold fs-14 mb-0">Recruiters</p>
										<p className="mb-0 text-muted fs-12 op-7">Elitr at gubergren sit sed.</p>
									</div>
								</div>
								<Dropdown>
									<Dropdown.Toggle variant='' aria-label="anchor" data-bs-toggle="dropdown" className=" no-caret btn btn-icon btn-sm btn-light"><i className="ti ti-dots"></i></Dropdown.Toggle>
									<Dropdown.Menu as="ul">
										<Dropdown.Item href="#" as="li">Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Another Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Something Else Here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="d-flex align-items-center mb-0">
								<p className="mb-0 fs-20 fw-semibold">7,539</p>
								<span className="text-muted ms-2"><i className="ti ti-trending-up align-middle text-success me-1 d-inline-flex"></i>3.1%</span>
							</div>
							<div className="d-flex align-items-center">
								<div className="flex-fill">
									<div className="progress progress-xs">
										<div className="progress-bar bg-secondary" role="progressbar" style={{ width: "55%" }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
									</div>
								</div>
								<div className="ms-3">
									<span className="fs-12 text-muted">55% Target</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between mb-4">
								<div className="flex-fill d-flex align-items-top">
									<div className="me-2">
										<span className="avatar avatar-md text-success border bg-light"><i className="ti ti-view-360 fs-18"></i></span>
									</div>
									<div className="flex-fill">
										<p className="fw-semibold fs-14 mb-0">Page Views</p>
										<p className="mb-0 text-muted fs-12 op-7">Sed duo ut sanctus gubergren.</p>
									</div>
								</div>
								<Dropdown>
									<Dropdown.Toggle variant='' aria-label="anchor" data-bs-toggle="dropdown" className=" no-caret btn btn-icon btn-sm btn-light"><i className="ti ti-dots"></i></Dropdown.Toggle>
									<Dropdown.Menu as="ul">
										<Dropdown.Item href="#" as="li">Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Another Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Something Else Here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="d-flex align-items-center mb-0">
								<p className="mb-0 fs-20 fw-semibold">13,693</p>
								<span className="text-muted ms-2"><i className="ti ti-trending-up align-middle text-success me-1 d-inline-flex"></i>5.4%</span>
							</div>
							<div className="d-flex align-items-center">
								<div className="flex-fill">
									<div className="progress progress-xs">
										<div className="progress-bar bg-success" role="progressbar" style={{ width: "24%" }} aria-valuenow={24} aria-valuemin={0} aria-valuemax={100}></div>
									</div>
								</div>
								<div className="ms-3">
									<span className="fs-12 text-muted">24% Target</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} sm={6}>
					<Card className="custom-card">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between mb-4">
								<div className="flex-fill d-flex align-items-top">
									<div className="me-2">
										<span className="avatar avatar-md text-indigo border bg-light"><i className="ti ti-view-360 fs-18"></i></span>
									</div>
									<div className="flex-fill">
										<p className="fw-semibold fs-14 mb-0">Total Subscriptions</p>
										<p className="mb-0 text-muted fs-12 op-7">Invidunt magna voluptua.</p>
									</div>
								</div>
								<Dropdown>
									<Dropdown.Toggle variant='' aria-label="anchor" data-bs-toggle="dropdown" className=" no-caret btn btn-icon btn-sm btn-light"><i className="ti ti-dots"></i></Dropdown.Toggle>
									<Dropdown.Menu as="ul">
										<Dropdown.Item href="#" as="li">Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Another Action</Dropdown.Item>
										<Dropdown.Item href="#" as="li">Something Else Here</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="d-flex align-items-center mb-0">
								<p className="mb-0 fs-20 fw-semibold">1,116</p>
								<span className="text-muted ms-2"><i className="ti ti-trending-down align-middle text-danger me-1"></i>3.2%</span>
							</div>
							<div className="d-flex align-items-center">
								<div className="flex-fill">
									<div className="progress progress-xs">
										<div className="progress-bar bg-indigo" role="progressbar" style={{ width: "67%" }} aria-valuenow={67} aria-valuemin={0} aria-valuemax={100}></div>
									</div>
								</div>
								<div className="ms-3">
									<span className="fs-12 text-muted">67% Target</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={9}>
					<Card className="custom-card">
						<Card.Body className="p-0">
							<Row>
								<div className="col-xl-3 border-end border-inline-end-dashed">
									<div className="d-flex flex-wrap align-items-top p-4">
										<div className="me-3 lh-1">
											<span className="avatar avatar-md avatar-rounded bg-primary shadow-sm">
												<i className="ti ti-package fs-18"></i>
											</span>
										</div>
										<div className="flex-fill">
											<h5 className="fw-semibold mb-1">45,280</h5>
											<p className="text-muted mb-0 fs-12">Total Products</p>
										</div>
										<div>
											<span className="badge bg-success-transparent"><i className="ri-arrow-up-s-line align-middle me-1"></i>1.31%</span>
										</div>
									</div>
								</div>
								<div className="col-xl-3 border-end border-inline-end-dashed">
									<div className="d-flex flex-wrap align-items-top p-4">
										<div className="me-3 lh-1">
											<span className="avatar avatar-md avatar-rounded bg-secondary shadow-sm">
												<i className="ti ti-rocket fs-18"></i>
											</span>
										</div>
										<div className="flex-fill">
											<h5 className="fw-semibold mb-1">10,500</h5>
											<p className="text-muted mb-0 fs-12">Total Sales</p>
										</div>
										<div>
											<span className="badge bg-danger-transparent"><i className="ri-arrow-down-s-line align-middle me-1"></i>1.14%</span>
										</div>
									</div>
								</div>
								<div className="col-xl-3 border-end border-inline-end-dashed">
									<div className="d-flex flex-wrap align-items-top p-4">
										<div className="me-3 lh-1">
											<span className="avatar avatar-md avatar-rounded bg-success shadow-sm">
												<i className="ti ti-wallet fs-18"></i>
											</span>
										</div>
										<div className="flex-fill">
											<h5 className="fw-semibold mb-1">$69,270</h5>
											<p className="text-muted mb-0 fs-12">Income</p>
										</div>
										<div>
											<span className="badge bg-success-transparent"><i className="ri-arrow-up-s-line align-middle me-1"></i>2.58%</span>
										</div>
									</div>
								</div>
								<Col xl={3}>
									<div className="d-flex flex-wrap align-items-top p-4">
										<div className="me-3 lh-1">
											<span className="avatar avatar-md avatar-rounded bg-warning shadow-sm">
												<i className="ti ti-packge-import fs-18"></i>
											</span>
										</div>
										<div className="flex-fill">
											<h5 className="fw-semibold mb-1">12,088</h5>
											<p className="text-muted mb-0 fs-12">Total Orders</p>
										</div>
										<div>
											<span className="badge bg-success-transparent"><i className="ri-arrow-up-s-line align-middle me-1"></i>12.05%</span>
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card card-bg-primary text-fixed-white">
						<Card.Body className="p-0">
							<div className="d-flex align-items-top p-4 flex-wrap">
								<div className="me-3 lh-1">
									<span className="avatar avatar-md avatar-rounded bg-white text-primary shadow-sm">
										<i className="ti ti-coin fs-18"></i>
									</span>
								</div>
								<div className="flex-fill">
									<h5 className="fw-semibold mb-1">$21,520</h5>
									<p className="op-7 mb-0 fs-12">Expenses</p>
								</div>
								<div>
									<span className="badge bg-success"><i className="ri-arrow-up-s-line align-middle me-1"></i>14.69%</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row>
				<Col xxl={6} xl={6} lg={12}>
					<Row>
						<div className="col">
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-top">
										<div className="me-3">
											<span className="avatar avatar-md p-2 bg-primary-transparent">
												<svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
													<path d="M0 0h24v24H0V0z" fill="none"></path>
													<path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
												</svg>
											</span>
										</div>
										<div className="flex-fill">
											<div className="d-flex mb-1 align-items-top justify-content-between">
												<h5 className="fw-semibold mb-0 lh-1">256</h5>
												<div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill me-1 align-middle"></i>-1.05%</div>
											</div>
											<p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL EMPLOYERS</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col">
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-top">
										<div className="me-3">
											<span className="avatar avatar-md p-2 bg-secondary-transparent">
												<svg className="svg-secondary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
													<rect fill="none" height="24" width="24"></rect>
													<g>
														<path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"></path>
													</g>
												</svg>
											</span>
										</div>
										<div className="flex-fill">
											<div className="d-flex mb-1 align-items-top justify-content-between">
												<h5 className="fw-semibold mb-0 lh-1">4,026</h5>
												<div className="text-success fw-semibold"><i className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.40%</div>
											</div>
											<p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL CANDIDATES</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col">
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-top">
										<div className="me-3">
											<span className="avatar avatar-md p-2 bg-info-transparent">
												<svg className="svg-info" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
													<path d="M0 0h24v24H0V0z" fill="none"></path>
													<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"></path>
												</svg>
											</span>
										</div>
										<div className="flex-fill">
											<div className="d-flex mb-1 align-items-top justify-content-between">
												<h5 className="fw-semibold mb-0 lh-1">48</h5>
												<div className="text-success fw-semibold"><i className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.82%</div>
											</div>
											<p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL LOCATIONS</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col">
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-top">
										<div className="me-3">
											<span className="avatar avatar-md p-2 bg-success-transparent">
												<svg className="svg-success" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
													<g>
														<rect fill="none" height="24" width="24"></rect>
													</g>
													<g>
														<g>
															<path d="M9,14c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S7.35,14,9,14z M9,10c0.54,0,1,0.46,1,1s-0.46,1-1,1s-1-0.46-1-1 S8.46,10,9,10z"></path>
															<path d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99-0.9,1.99-2L24,5C24,3.9,23.1,3,22,3z M4.54,19 c1.1-1.22,2.69-2,4.46-2s3.36,0.78,4.46,2H4.54z M22,19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54,1.61-6.92,4H2V5h20V19z"></path>
															<polygon points="15.78,11.15 17.25,10.3 17.25,12 18.75,12 18.75,10.3 20.22,11.15 20.97,9.85 19.5,9 20.97,8.15 20.22,6.85 18.75,7.7 18.75,6 17.25,6 17.25,7.7 15.78,6.85 15.03,8.15 16.5,9 15.03,9.85"></polygon>
														</g>
													</g>
												</svg>
											</span>
										</div>
										<div className="flex-fill">
											<div className="d-flex mb-1 align-items-top justify-content-between">
												<h5 className="fw-semibold mb-0 lh-1">1,116</h5>
												<div className="text-success fw-semibold"><i className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.21%</div>
											</div>
											<p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL RECRUITERS</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col">
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-top">
										<div className="me-3">
											<span className="avatar avatar-md p-2 bg-pink-transparent">
												<svg className="svg-pink" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
													<path d="M0 0h24v24H0V0z" fill="none"></path>
													<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path>
												</svg>
											</span>
										</div>
										<div className="flex-fill">
											<div className="d-flex mb-1 align-items-top justify-content-between">
												<h5 className="fw-semibold mb-0 lh-1">1,468</h5>
												<div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill me-1 align-middle"></i>-0.153%</div>
											</div>
											<p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL SUBSCRIPTIONS</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col">
							<Card className="custom-card">
								<Card.Body>
									<div className="d-flex align-items-top">
										<div className="me-3">
											<span className="avatar avatar-md p-2 bg-teal-transparent">
												<svg className="svg-teal" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
													<g>
														<rect fill="none" height="24" width="24"></rect>
														<g>
															<path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"></path>
														</g>
														<path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"></path>
													</g>
												</svg>
											</span>
										</div>
										<div className="flex-fill">
											<div className="d-flex mb-1 align-items-top justify-content-between">
												<h5 className="fw-semibold mb-0 lh-1">34%</h5>
												<div className="text-success fw-semibold"><i className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.165%</div>
											</div>
											<p className="mb-0 fs-10 op-7 text-muted fw-semibold">RESSUME UPLOAD RATIO</p>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Row>
				</Col>
				<Col xxl={6} xl={6} lg={5}>
					<Row>
						<div className="col-xxl-6">
							<Card className="custom-card card-bg-primary">
								<div className="card-header justify-content-between border-bottom-0">
									<div className="card-title text-fixed-white">
										Premium Recruiters
									</div>
									<div>
										<button type="button" aria-label="button" className="btn btn-sm btn-icon text-bg-primary"><i className="ti ti-chevron-right"></i></button>
									</div>
								</div>
								<Card.Body>
									<div className="d-flex flex-wrap align-items-top">
										<div className="flex-fill overflow-hidden">
											<p className="mb-2 lh-1 fs-5 fw-semibold">9,231</p>
											<p className="mb-0 fs-12 text-fixed-white op-7">
												<span><i className="bi bi-caret-up-fill"></i> 2.3%</span>
												<span className="op-7 ms-1">From Last Month</span>
											</p>
										</div>
										<div>
											<span className="avatar avatar-sm bg-success avatar-rounded"><i className="bi bi-people-fill"></i></span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col-xxl-6">
							<Card className="custom-card">
								<Card.Body className="p-0">
									<div className="p-3">
										<div className="d-flex flex-wrap mb-1">
											<Link aria-label="anchor" to="#" className="pe-2">
												<span className="avatar border text-muted text-primary"><i className="ri-bit-coin-fill fs-18"></i></span>
											</Link>
											<div className="flex-fill">
												<div className="d-flex flex-wrap align-items-center justify-content-between mb-1">
													<span className="fw-semibold">Bitcoin</span>
													<span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1"></i>2.14%</span>
												</div>
												<div className="d-flex flex-wrap align-items-center justify-content-between fs-12 mb-3">
													<span className="text-muted">$58,151.02</span>
													<span className="text-success text-end">+$5,745.62</span>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-center">
											<Link to="#" className="flex-fill btn btn-sm btn-light me-2">Short</Link>
											<Link to="#" className="flex-fill btn btn-sm btn-primary-light">Buy</Link>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Row>
				</Col>
				<Col xxl={6} xl={7} lg={7}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>Team Performance</Card.Title>
								</Card.Header>
								<Card.Body>
									<div className="row m-1">
										<div className="col-xl-4 text-center p-2 team-performance1">
											<Link to="#" className="mb-2">
												<img src={faces10} alt="img" width="40" height="40" className="rounded-circle" />
											</Link>
											<p className=" fs-16 mt-2 mb-0">Aliaroon</p>
											<p className="  fs-12 text-muted fs-semibold mb-0">customer1</p>
										</div>
										<div className="col-xl-4 col-sm-6  col-6 p-0 text-center  border border-end-0 p-2 border-start team-performance2">
											<div className="mt-1">
												<div className="me-2 mb-2 mb-sm-0">
													<span className="avatar avatar-sm br-5 bg-primary-transparent text-primary primary-shadow">
														<i className="ti ti-briefcase fs-20"></i>
													</span>
												</div>
												<div className="flex-grow-1 mt-2">
													<span className="fs-16 mb-1">71,234 </span>
													<p className="mb-0 fs-12 text-muted">Total Targets</p>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-sm-6 col-6 text-center  border p-2 team-performance3">
											<div className="mt-1">
												<div className="me-2 mb-2 mb-sm-0">
													<span className="avatar avatar-sm br-5 bg-secondary-transparent text-seconday success-shadow">
														<i className="ti ti-cash-banknote fs-20"></i>
													</span>
												</div>
												<div className="flex-grow-1 mt-2">
													<span className="fs-16 mb-1"> 66,450</span>
													<p className="mb-0 fs-12 text-muted">Total sales</p>
												</div>
											</div>
										</div>
										<div className="border bg-light text-primary p-2 border-top-0">
											<span className=" fs-14 mt-2 text-end">See All Team Performance</span>
											<Link to="#" className="float-end fs-15 text-primary fs-semibold">
												<div className="list-group-item list-group-item-action border-0 header-link switcher-icon p-0">
													<span className="badge bg-primary br-3">click me<i className="ms-1 ti ti-arrow-bar-to-right d-inline-flex"></i></span>
												</div>
											</Link>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xxl={6} xl={5}>
					<div className="card  custom-card">
						<Card.Header>
							<Card.Title>
								Sales By Category
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="d-sm-flex mb-3">
								<div className="me-sm-2 mb-2 mb-sm-0">
									<div className="avatar bg-primary-transparent text-primary br-5 fs-22"><i className="bx bx-category"></i></div>
								</div>
								<div className="flex-1">
									<div className="flex-between mb-1">
										<p className="mb-0 fs-14">Total Sales</p>
									</div>
									<h5 className="mb-0">55,283 <span className="tx-muted tx-13"> / 120K</span></h5>
								</div>
							</div>
							<ProgressBar className="progress progress-xl my-4">
								<ProgressBar variant="primary" now={55} key={1} label={`${55}%`} />
								<ProgressBar variant="secondary" now={45} key={2} label={`${45}%`} />
							</ProgressBar>
							<span className="fs-14 mt-2 d-block d-sm-inline-block"><i className="bx bxs-circle text-primary tx-8 me-2"></i>Electronics</span>
							<span className="ms-3 fs-14 mt-2 d-block d-sm-inline-block"><i className="bx bxs-circle text-secondary tx-8 me-2"></i>Home Appliances</span>
						</Card.Body>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xxl={4} xl={12} md={12}>
					<Card className="custom-card overflow-hidden justify-content-between">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Top Referrers
							</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" role="menu">
									<Dropdown.Item className="border-bottom" href="#">Today</Dropdown.Item>
									<Dropdown.Item className="border-bottom" href="#">This Week</Dropdown.Item>
									<Dropdown.Item href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body className="p-0">
							<div className="table-responsive">
								<table className="table text-nowrap">
									<thead>
										<tr>
											<th scope="col" className="ps-4">Browser</th>
											<th scope="col">Page Views</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										{Topreferrersdata.map((idx) => (
											<tr key={Math.random()}>
												<td className="ps-4">
													<div className="d-flex align-items-center">
														<div className="me-2 lh-1">
															<span className={`avatar avatar-sm avatar-rounded bg-${idx.class}`}>
																<i className={`ri ri-${idx.icon1}`}></i>
															</span>
														</div>
														<div>
															<span className="fw-semibold">
																{idx.text1}
															</span>
														</div>
													</div>
												</td>
												<td>{idx.text2}<i className={`bi bi-caret-${idx.icon2}-fill ms-2 fs-11 text-${idx.color}`}></i></td>
												<td className="border-top-0">
													<ProgressBar className="progress-sm mb-3" variant='primary' now={idx.width} />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={5} xl={6}>
					<Card className="custom-card">
						<Tab.Container defaultActiveKey="1">
							<Card.Header className="d-sm-flex d-block">
								<Card.Title className="">Task List</Card.Title>
								<div className="tab-menu-heading border-0 p-0 ms-auto mt-sm-0 mt-2">
									<div className="tabs-menu-task me-3">
										<Nav className="nav nav-tabs panel-tabs-task border-0" role="tablist">
											<Nav.Item>
												<Nav.Link eventKey="1"
													href="#Active" aria-selected="true">Active Tasks</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="2"
													href="#Complete" aria-selected="true">Completed Tasks</Nav.Link>
											</Nav.Item>
										</Nav>
									</div>
								</div>
								<div className="mt-sm-0 mt-2">
									<button type="button" className="btn btn-sm btn-light">
										<i className="ti ti-plus me-1 fw-semibold align-middle d-inline-flex"></i>Add Task</button>
								</div>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content className="tab-content p-0">
									<Tab.Pane eventKey="1" className="p-0 border-0" id="Active" role="tabpanel">
										<div className="table-responsive">
											<table className="table text-nowrap table-hover">
												<thead>
													<tr>
														<th scope="col" className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="checkAll" defaultValue="" aria-label="..." />
															</span>
														</th>
														<th scope="col">Task details</th>
														<th scope="col">Assigned date</th>
														<th scope="col">Target</th>
														<th scope="col">Assigned to</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check1" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>Design task page for new template</td>
														<td className="text-muted">12.43pm</td>
														<td><span className="badge bg-primary">Today</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces2} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces8} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces2} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check2" defaultChecked aria-label="..." />
															</span>
														</td>
														<td>Solve UI issues in new template</td>
														<td className="text-muted">11.25am</td>
														<td><span className="badge bg-secondary">Tomorrow</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces6} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces9} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check3" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>prepare pre requisites</td>
														<td className="text-muted">9.56am</td>
														<td><span className="badge bg-primary">Today</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces3} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces5} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces10} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces15} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check4" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>Change total styles od that dashboard</td>
														<td className="text-muted">8.15am</td>
														<td><span className="badge bg-primary">Today</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces11} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check5" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>Update color theme</td>
														<td className="text-muted">4.20pm</td>
														<td><span className="badge bg-secondary">Tomorrow</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces13} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces16} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces8} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check11" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>New dashboard design update</td>
														<td className="text-muted">8.29am</td>
														<td><span className="badge bg-primary">Today</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces10} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces5} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="2" className="p-0 border-0" id="Complete" role="tabpanel">
										<div className="table-responsive">
											<table className="table text-nowrap table-hover">
												<thead>
													<tr>
														<th scope="col" className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="checkAll1" defaultValue="" aria-label="..." />
															</span>
														</th>
														<th scope="col">Task details</th>
														<th scope="col">Assigned date</th>
														<th scope="col">Completed</th>
														<th scope="col">Assigned to</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check6" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>New landing page ui update</td>
														<td className="text-muted">24 Nov 2022</td>
														<td><span className="badge bg-success">4 hrs ago</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces5} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces9} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check7" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>Job portal dashboard redesign</td>
														<td className="text-muted">30 Nov 2022</td>
														<td><span className="badge bg-success">Today</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces11} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces12} alt="user-img" />
																</span>
																<span className="avatar avatar-xs">
																	<img src={faces13} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td className="text-center">
															<span>
																<input className="form-check-input" type="checkbox" id="check8" defaultValue="" aria-label="..." />
															</span>
														</td>
														<td>New template layout update</td>
														<td className="text-muted">11 Dec 2022</td>
														<td><span className="badge bg-success">Yesterday</span></td>
														<td>
															<div className="avatar-list-stacked mb-0">
																<span className="avatar avatar-xs">
																	<img src={faces4} alt="user-img" />
																</span>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Tab.Container>
					</Card>
				</Col>
				<Col xxl={3} xl={6}>
					<Card className="custom-card recent-transactions-card overflow-hidden">
						<Card.Header className="justify-content-between">
							<Card.Title>Recent Transactions</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
									<i className="fe fe-more-vertical"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul">
									<Dropdown.Item className="border-bottom" href="#">Action</Dropdown.Item>
									<Dropdown.Item className="border-bottom" href="#">Another action</Dropdown.Item>
									<Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body className="p-0">
							<div className="list-group">
								{Recenttransactions.map((idx) => (
									<Link to="#" className="border-0" key={Math.random()}>
										<div className="list-group-item border-0">
											<div className="d-flex align-items-start">
												<span className={`tansaction-icon bg-${idx.class}-transparent`}>
													<i className={`bx bx-${idx.icon}`}></i>
												</span>
												<div className="w-100">
													<div className="d-flex align-items-top justify-content-between">
														<div className="mt-0">
															<p className="mb-0 fw-semibold"><span className="me-3">{idx.text1}</span></p>
															<span className="mb-0 fs-12 text-muted">{idx.text2}</span>
														</div>
														<div className="text-muted fs-12 text-center"></div>
														<span className="ms-auto">
															<span className={`text-end text-${idx.color1} d-block`}>
																{idx.text3}
															</span>
															<span className="text-end text-muted d-block fs-12">{idx.text4}</span>
														</span>
													</div>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
					<Card className="custom-card overflow-hidden">
						<div className="card-header d-flex justify-content-between">
							<Card.Title>Tasks Status</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant="" type="button" className="btn dropdown-toggle  btn-sm btn-wave waves-effect waves-light btn-primary d-flex align-items-center" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-calendar-2-line me-1"></i>Weekly</Dropdown.Toggle>
								<Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton1">
									<Dropdown.Item href="#">Monthly</Dropdown.Item>
									<Dropdown.Item href="#">More</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<Card.Body className="p-0">
							<div className="table-responsive">
								<table className="table text-nowrap table-hover">
									<tbody>
										{Tasksstatusdata.map((idx) => (
											<tr key={Math.random()}>
												<td className="w-12 ps-4">
													<div className="d-flex align-items-center">
														<div className={`avatar avatar-md me-2 bg-${idx.color}-transparent`}>
															<i className="ri-file-chart-2-line fs-16"></i>
														</div>
														<div>
															<p className="mb-0 fw-semibold">{idx.name}</p>
															<span className="fs-10 fw-semibold text-muted">{idx.text1}</span>
														</div>
													</div>
												</td>
												<td>
													<div className="mb-1">
														<span className="fs-12 fw-semibold">Completed</span>
														<span className="fs-10 mb-0 float-end">{idx.text2}%<i className={`ri-arrow-up-line text-${idx.color}`}></i></span>
													</div>
													<ProgressBar className="progress-xs" variant={idx.color} now={idx.text2} />
												</td>
												<td className="text-center">
													<div className="avatar-list-stacked my-auto">
														<span className="avatar avatar-rounded avatar-sm">
															<img src={idx.src1} alt="user-img" />
														</span>
														<span className="avatar avatar-rounded avatar-sm">
															<img src={idx.src2} alt="user-img" />
														</span>
														<span className="avatar avatar-rounded avatar-sm">
															<img src={idx.src3} alt="user-img" />
														</span>
													</div>
												</td>
												<td className="w-2 pe-3 text-end">
													<button type="button" className="btn btn-sm btn-wave btn-primary-light d-inline-flex align-items-center waves-effect waves-light"><i className="ri-timer-flash-line me-1 fs-13"></i>Reminder</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</Card.Body>
					</Card>
				</div>
				<Col xl={4} lg={6} md={6} sm={12} className="">
					<Card className="custom-card overflow-hidden">
						<div className="card-header d-flex justify-content-between">
							<Card.Title>Team Members</Card.Title>
							<button type="button" className="btn btn-sm btn-wave btn-primary-light waves-effect waves-light">View all <i className="ri-arrow-right-line align-middle"></i></button>
						</div>
						<Card.Body>
							<ul className="list-group online-agents">
								{Teamembersdata.map((idx) => (
									<li className="list-group-item" key={Math.random()}>
										<div className="d-flex justify-content-between align-items-center">
											<div className="d-flex align-items-center">
												<div className={`avatar avatar-sm avatar-rounded ${idx.class} me-2`}>
													<img src={idx.src} alt="user-img" />
												</div>
												<div className="lh-1">
													<Link to="#" className="mb-1 fw-semibold fs-13 d-block">{idx.name}</Link>
													<span className="fs-11 text-muted fw-semibold">Hey hi.!</span>
												</div>
											</div>
											<div className="badge bg-light px-2 rounded-pill text-dark">
												<span className="fs-11 ms-auto fw-semibold d-inline-flex">
													<i className="ri-map-pin-line fs-10 me-1 text-success"></i>{idx.text}</span>
											</div>
											<div className="btn-list d-flex flex-wrap justify-content-end">
												<Link to="#" className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-secondary" aria-label="Chat">
													<i className="bi bi-chat-dots"></i>
												</Link>
												<Link to="#" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" aria-label="View">
													<i className="bi bi-eye"></i>
												</Link>
											</div>
										</div>
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
					<Card className="custom-card overflow-hidden">
						<div className="card-header d-flex justify-content-between">
							<Card.Title>New Applicants</Card.Title>
							<Link to="#" className="btn btn-sm btn-wave btn-primary-light waves-effect waves-light">Today</Link>
						</div>
						<div className="card-body p-2">
							<div className="table-responsive">
								<table className="table text-nowrap table-hover">
									<tbody>
										{Newapplicantsdata.map((idx) => (
											<tr key={Math.random()}>
												<td className="w-50 border-bottom-0">
													<div className="d-flex align-items-center">
														<div className="avatar avatar-sm me-2">
															<img src={idx.src} alt="user-img" />
														</div>
														<div className="lh-1">
															<p className="mb-1 fw-semibold">{idx.name}</p>
															<span className="fs-11 text-muted">{idx.text}</span>
														</div>
													</div>
												</td>
												<td className="w-30 border-bottom-0 text-end">
													<Link to="#" className="badge bg-info-transparent">View</Link>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</Card>
				</div>
			</Row>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header className="d-flex align-items-start justify-content-between">
							<div className="flex-1">
								<Card.Title>Quick Transfer</Card.Title>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="row d-lg-flex d-none mb-2 g-0">
								<div className="col">
									<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status rounded-circle">
										<img src={faces2} alt="img" className="avatar avatar-md rounded-circle" />
									</Link>
								</div>
								<div className="col">
									<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status rounded-circle">
										<img src={faces3} alt="img" className="avatar avatar-md rounded-circle" />
									</Link>
								</div>
								<div className="col">
									<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status offline rounded-circle">
										<img src={faces13} alt="img" className="avatar avatar-md rounded-circle" />
									</Link>
								</div>
								<div className="col">
									<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status rounded-circle">
										<img src={faces6} alt="img" className="avatar avatar-md rounded-circle" />
									</Link>
								</div>
								<div className="col">
									<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status offline rounded-circle">
										<img src={faces9} alt="img" className="avatar avatar-md rounded-circle" />
									</Link>
								</div>
								<div className="col">
									<Link to={`${import.meta.env.BASE_URL}pages/chat`} className="avatar-sm avatar-status offline rounded-circle">
										<img src={faces1} alt="img" className="avatar avatar-md rounded-circle" />
									</Link>
								</div>
								<div className="col">
									<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/contacts`} className="avatar avatar-md rounded-circle btn btn-light text-primary">
										<i className="fe fe-chevron-right"></i>
									</Link>
								</div>
							</div>
							<p className="mb-3 text-muted">Send / Receive</p>
							<div className="form-group">
								<div className="input-group">
									<span className="input-group-text">Send To</span>
									<input type="text" className="form-control" placeholder="Account Number" defaultValue="11167731611" />
									<Link to="#" className="input-group-text btn btn-primary-light btn-sm lh-lg">Check</Link>
								</div>
								<label className="form-label mt-1 mb-3 fs-12 text-success">Sayi Hii...</label>
							</div>
							<div className="form-group mb-4">
								<div className="input-group">
									<span className="input-group-text">Amount</span>
									<input type="text" className="form-control" placeholder="Amount" defaultValue="2000" />
								</div>
							</div>
							<div className="btn-list d-flex">
								<Link aria-label="anchor" to="#" className="btn btn-primary-light"><i className="bi bi-arrow-down-up ms-2"></i></Link>
								<Link to="#" className="btn btn-primary flex-1"><i className="bi bi-send me-3 fs-14"></i>Proceed To Pay</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Recent Applicants</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="views">
								<Recentapplicants />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card contactus-form overflow-hidden">
						<Card.Body className="p-4">
							<Row>
								<Col xl={12}>
									<div className="mb-4">
										<h5 className="card-title mb-1">Contact Information</h5>
										<p className="text-muted mb-0">Fill up the Form our team will be get back to you</p>
									</div>
									<div>
										<div className="d-flex align-items-top mt-2">
											<div className="me-3">
												<span className="avatar avatar-md p-2 bg-info-transparent">
													<i className="bx bxs-phone"></i>
												</span>
											</div>
											<div className="flex-fill">
												<div className=" mb-1 align-items-top">
													<h6 className="fw-semibold mb-1 lh-1">Phone number</h6>
													<span className="text-muted">+ 01 234 567 88</span>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-top mt-4">
											<div className="me-3">
												<span className="avatar avatar-md p-2 bg-pink-transparent">
													<i className="bx bxs-envelope" ></i>
												</span>
											</div>
											<div className="flex-fill">
												<div className=" mb-1 align-items-top">
													<h6 className="fw-semibold mb-1 lh-1">Email Address</h6>
													<span className="text-muted">Alizver873@example.com</span>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-top mt-4">
											<div className="me-3">
												<span className="avatar avatar-md p-2 bg-teal-transparent">
													<i className="bx bxs-time" ></i>
												</span>
											</div>
											<div className="flex-fill">
												<div className=" mb-1 align-items-top">
													<h6 className="fw-semibold mb-1 lh-1">Timings</h6>
													<span className="text-muted">Mon-Fri 09:00 to 06:00</span>
												</div>
											</div>
										</div>
										<div className="d-flex align-items-top mt-4">
											<div className="me-3">
												<span className="avatar avatar-md p-2 bg-warning-transparent">
													<i className="bx bxs-location-plus" ></i>
												</span>
											</div>
											<div className="flex-fill">
												<div className=" mb-1 align-items-top">
													<h6 className="fw-semibold mb-1 lh-1">Address</h6>
													<span className="text-muted">New York, NY 10012, US-52014</span>
												</div>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
export default Widgets;
