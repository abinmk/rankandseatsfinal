import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import faces4 from "../../../assets/images/faces/4.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";

const Notifications = () => {
	return (
		<>
			<div className="">
				<Row>
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card mb-3">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-warning-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#ffce6d" d="M18,13.18463V10c0-3.31372-2.68628-6-6-6s-6,2.68628-6,6v3.18463C4.83832,13.59863,4.00146,14.69641,4,16v2c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h14c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18v-2C19.99854,14.69641,19.16168,13.59863,18,13.18463z"></path><path fill="#ffae0c" d="M8.14233 19c.4472 1.72119 1.99689 2.99817 3.85767 3 1.86078-.00183 3.41046-1.27881 3.85767-3H8.14233zM12 4c.34149 0 .67413.03516 1 .08997V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.08997C11.32587 4.03516 11.65851 4 12 4z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification<span className="badge bg-success  badge-notify ms-2">Update</span></span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												you're not looking too goodWarning! Better check yourself, you're not looking too good<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card mb-3">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-success-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#75cfa5" d="m20.34 9.32-13.99-7a3 3 0 0 0-4.08 3.9L4.41 11l.26.59a1.06 1.06 0 0 1 0 .82l-.26.59-2.14 4.78a2.954 2.954 0 0 0 .67 3.38A2.966 2.966 0 0 0 5 22a3.141 3.141 0 0 0 1.35-.32l13.99-7a2.993 2.993 0 0 0 0-5.36Z"></path><path fill="#198754" d="M14.46 12a.997.997 0 0 1-1 1H4.41l.26-.59a1.06 1.06 0 0 0 0-.82L4.41 11h9.05a.997.997 0 0 1 1 1Z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification</span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												you're not looking too goodWarning! Better check yourself, you're not looking too good<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card mb-3">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-danger-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#ff9ea7" d="M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z"></path><circle cx="12" cy="17" r="1" fill="#dc3545"></circle><path fill="#dc3545" d="M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification</span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												you're not looking too goodWarning! Better check yourself, you're not looking too good<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card mb-3">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-info-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#9ddbff" d="M9.243 18H5a1 1 0 0 1-1-1v-4.243a1 1 0 0 1 .293-.707l9.76-9.757a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1 0 1.414l-9.757 9.76a1 1 0 0 1-.707.293Z"></path><path fill="#49b6f5" d="M15.467 2.293a1 1 0 0 0-1.414 0l-3.54 3.539 5.654 5.654.006-.004 3.534-3.535a1 1 0 0 0 0-1.414zM21 22H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification<span className="badge bg-info  badge-notify ms-2">Update</span></span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												you're not looking too goodWarning! Better check yourself, you're not looking too good<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
				</Row>

				<div className="fw-semibold fs-16 mb-3">Notifications Style-2</div>
				<div className="row ">
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card mb-3 notify-border-start-warning">
									<div className="d-flex p-3 ">
										<div className="">
											<svg className="me-4  bg-warning-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#ffce6d" d="M18,13.18463V10c0-3.31372-2.68628-6-6-6s-6,2.68628-6,6v3.18463C4.83832,13.59863,4.00146,14.69641,4,16v2c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h14c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18v-2C19.99854,14.69641,19.16168,13.59863,18,13.18463z"></path><path fill="#ffae0c" d="M8.14233 19c.4472 1.72119 1.99689 2.99817 3.85767 3 1.86078-.00183 3.41046-1.27881 3.85767-3H8.14233zM12 4c.34149 0 .67413.03516 1 .08997V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.08997C11.32587 4.03516 11.65851 4 12 4z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification<span className="badge bg-success  badge-notify ms-2">Update</span></span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card mb-3 notify-border-start-success">
									<div className="d-flex p-3 ">
										<div className="">
											<svg className="me-4  bg-success-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#75cfa5" d="m20.34 9.32-13.99-7a3 3 0 0 0-4.08 3.9L4.41 11l.26.59a1.06 1.06 0 0 1 0 .82l-.26.59-2.14 4.78a2.954 2.954 0 0 0 .67 3.38A2.966 2.966 0 0 0 5 22a3.141 3.141 0 0 0 1.35-.32l13.99-7a2.993 2.993 0 0 0 0-5.36Z"></path><path fill="#198754" d="M14.46 12a.997.997 0 0 1-1 1H4.41l.26-.59a1.06 1.06 0 0 0 0-.82L4.41 11h9.05a.997.997 0 0 1 1 1Z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification</span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card mb-3 notify-border-start-danger">
									<div className="d-flex p-3 ">
										<div className="">
											<svg className="me-4  bg-danger-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#ff9ea7" d="M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z"></path><circle cx="12" cy="17" r="1" fill="#dc3545"></circle><path fill="#dc3545" d="M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification</span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card mb-3 notify-border-start-info">
									<div className="d-flex p-3 ">
										<div className="">
											<svg className="me-4  bg-info-transparent  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#9ddbff" d="M9.243 18H5a1 1 0 0 1-1-1v-4.243a1 1 0 0 1 .293-.707l9.76-9.757a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1 0 1.414l-9.757 9.76a1 1 0 0 1-.707.293Z"></path><path fill="#49b6f5" d="M15.467 2.293a1 1 0 0 0-1.414 0l-3.54 3.539 5.654 5.654.006-.004 3.534-3.535a1 1 0 0 0 0-1.414zM21 22H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification<span className="badge bg-info  badge-notify ms-2">Update</span></span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-primary d-inline-flex">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
				</div>

				<div className="fw-semibold fs-16 mb-3">Notifications Style-3</div>

				<div className="row ">
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card mb-3 bg-warning-transparent ">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-warning  alt-notify" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#ffe1a7" d="M18,13.18463V10c0-3.31372-2.68628-6-6-6s-6,2.68628-6,6v3.18463C4.83832,13.59863,4.00146,14.69641,4,16v2c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h14c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18v-2C19.99854,14.69641,19.16168,13.59863,18,13.18463z"></path><path fill="#ffe1a7" d="M8.14233 19c.4472 1.72119 1.99689 2.99817 3.85767 3 1.86078-.00183 3.41046-1.27881 3.85767-3H8.14233zM12 4c.34149 0 .67413.03516 1 .08997V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.08997C11.32587 4.03516 11.65851 4 12 4z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification<span className="badge bg-warning  badge-notify ms-2">Update</span></span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-warning">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-warning border border-warning rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card bg-success-transparent mb-3">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-success  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#82d5be" d="m20.34 9.32-13.99-7a3 3 0 0 0-4.08 3.9L4.41 11l.26.59a1.06 1.06 0 0 1 0 .82l-.26.59-2.14 4.78a2.954 2.954 0 0 0 .67 3.38A2.966 2.966 0 0 0 5 22a3.141 3.141 0 0 0 1.35-.32l13.99-7a2.993 2.993 0 0 0 0-5.36Z"></path><path fill="#abffe8" d="M14.46 12a.997.997 0 0 1-1 1H4.41l.26-.59a1.06 1.06 0 0 0 0-.82L4.41 11h9.05a.997.997 0 0 1 1 1Z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification</span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-success">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-success border border-success rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card mb-3  bg-danger-transparent">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-danger  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#ff9ea7" d="M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z"></path><circle cx="12" cy="17" r="1" fill="#dc3545"></circle><path fill="#dc3545" d="M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification</span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-danger">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-danger border border-danger  rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card mb-3 bg-info-transparent">
									<div className="d-flex p-3 border-bottom-0">
										<div className="">
											<svg className="me-4  bg-info  alt-notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="#9fdcff" d="M9.243 18H5a1 1 0 0 1-1-1v-4.243a1 1 0 0 1 .293-.707l9.76-9.757a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1 0 1.414l-9.757 9.76a1 1 0 0 1-.707.293Z"></path><path fill="#9fdcff" d="M15.467 2.293a1 1 0 0 0-1.414 0l-3.54 3.539 5.654 5.654.006-.004 3.534-3.535a1 1 0 0 0 0-1.414zM21 22H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"></path></svg>
										</div>
										<div className="mt-0 text-start">
											<span className="fs-14 fw-semibold">New Notification<span className="badge bg-info  badge-notify ms-2">Update</span></span>
											<p className="fs-13 text-muted mb-0">Warning! Better check yourself, you're not looking too goodWarning! Better check yourself,
												<Link to="#" className="ms-3 text-info">Read more</Link></p>
										</div>
										<Link to="#" className="ms-auto">
											<i className="fe fe-x text-info border border-info rounded-2 p-1 fs-12"></i>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
				</div>

				<div className="fw-semibold fs-16 mb-3">Notifications Style-4</div>

				<div className="row ">
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md online me-3 avatar-rounded">
														<img alt="avatar" src={faces4} />
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Emperio</p>
															<p className="mb-0 text-muted">Project assigned by the manager all<span className="badge bg-primary-transparent fw-semibold mx-1">files</span>and<span className="badge bg-primary-transparent fw-semibold mx-1">folders</span>were included</p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																12 mins ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md offline me-3 avatar-rounded">
														<img alt="avatar" src={faces15} />
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Dwayne Bero</p>
															<p className="mb-0 text-muted">Admin and other team accepted your work request</p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																17 mins ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md offline me-3 avatar-rounded">
														<img alt="avatar" src={faces11} />
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Alister Chuk</p>
															<p className="mb-0 text-muted">Temporary data will be <span className="badge bg-danger-transparent fw-semibold mx-1">deleted</span> once dedicated time complated</p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																4 hrs ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md online me-3 avatar-rounded">
														<img alt="avatar" src={faces5} />
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Melissa Blue</p>
															<p className="mb-0 text-muted">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 fs-16 align-middle"></i></p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																5 hrs ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
				</div>

				<div className="fw-semibold fs-16 mb-3">Notifications Style-5</div>

				<div className="row ">
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md  me-3 avatar-rounded bg-warning-transparent">
														EP
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Emperio</p>
															<p className="mb-0 text-muted">Project assigned by the manager all<span className="badge bg-primary-transparent fw-semibold mx-1">files</span>and<span className="badge bg-primary-transparent fw-semibold mx-1">folders</span>were included</p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																12 mins ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md  me-3 avatar-rounded bg-pink-transparent">
														DB
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Dwayne Bero</p>
															<p className="mb-0 text-muted">Admin and other team accepted your work request</p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																17 mins ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
					<Col xxl={6} xl={12} lg={12} md={12} sm={12}>
						<ul className="list-unstyled mb-0 notification-container">
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md  me-3 avatar-rounded bg-info-transparent">
														AC
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Alister Chuk</p>
															<p className="mb-0 text-muted">Temporary data will be <span className="badge bg-danger-transparent fw-semibold mx-1">deleted</span> once dedicated time complated</p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																4 hrs ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
							<li>
								<div className="card custom-card un-read">
									<div className="card-body p-3">
										<Link to="#">
											<div className="d-flex align-items-top mt-0 flex-wrap">
												<div className="lh-1">
													<span className="avatar avatar-md  me-3 avatar-rounded bg-success-transparent">
														MB
													</span>
												</div>
												<div className="flex-fill">
													<div className="d-flex align-items-center">
														<div className="mt-sm-0 mt-2">
															<p className="mb-0 fs-14 fw-semibold">Melissa Blue</p>
															<p className="mb-0 text-muted">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 fs-16 align-middle"></i></p>
														</div>
														<div className="ms-auto">
															<span className="float-end badge bg-light text-muted">
																5 hrs ago
															</span>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</Col>
				</div>
			</div>

		</>
	);
};

export default Notifications;
