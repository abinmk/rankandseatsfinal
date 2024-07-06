import React, { FC, Fragment } from "react";
import { Card, Col, Dropdown, Form, OverlayTrigger, Pagination, Row, Table, Tooltip } from "react-bootstrap";
import { Stockcapdata } from "./stocksdata";
import { Link } from "react-router-dom";

const Stocks = () => {
	return (
		<Fragment>
			<Row>
				<Col xxl={2} md={4} sm={6} className="">
					<Card className="custom-card">
						<Card.Body className="p-0">
							<div className="p-3">
								<div className="d-flex pos-relative flex-wrap">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<Link aria-label="anchor" to="#" className="pe-2">
										<span className="avatar border bd-gray-100 text-primary"><i className="bi bi-apple fs-20"></i></span>
									</Link>
									<div className="flex-1">
										<div className="flex-between mb-1 fs-13">
											<span className="fw-semibold">Apple</span>
											<span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 ms-2"></i>0.14%</span>
										</div>
										<div className="flex-between fs-12 mb-3">
											<h5 className="">$12,289.44</h5>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link to="#" className="flex-1 btn btn-sm btn-success-light me-2">Short</Link>
									<Link to="#" className="flex-1 btn btn-sm btn-info-light">Buy</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={2} md={4} sm={6}>
					<Card className="card custom-card">
						<Card.Body className="p-0">
							<div className="p-3">
								<div className="d-flex pos-relative flex-wrap">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<Link aria-label="anchor" to="#" className="pe-2">
										<span className="avatar border bd-gray-100 text-info"><i className="bi bi-currency-bitcoin fs-20"></i></span>
									</Link>
									<div className="flex-1">
										<div className="flex-between mb-1 fs-13">
											<span className="fw-semibold">Bitcion</span>
											<span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 ms-2"></i>2.14%</span>
										</div>
										<div className="flex-between fs-12 mb-3">
											<h5 className="">$58,151.02</h5>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link to="#" className="flex-1 btn btn-sm btn-success-light me-2">Short</Link>
									<Link to="#" className="flex-1 btn btn-sm btn-info-light">Buy</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={2} md={4} sm={6}>
					<Card className="card custom-card">
						<Card.Body className="p-0">
							<div className="p-3">
								<div className="d-flex pos-relative flex-wrap">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<Link aria-label="anchor" to="#" className="pe-2">
										<span className="avatar border bd-gray-100 text-warning"><i className="bi bi-asterisk fs-20"></i></span>
									</Link>
									<div className="flex-1">
										<div className="flex-between mb-1 fs-13">
											<span className="fw-semibold">Telsa</span>
											<span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 ms-2"></i>4.02%</span>
										</div>
										<div className="flex-between fs-12 mb-3">
											<h5 className="">$14,452.36</h5>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link to="#" className="flex-1 btn btn-sm btn-success-light me-2">Short</Link>
									<Link to="#" className="flex-1 btn btn-sm btn-info-light">Buy</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={2} md={4} sm={6}>
					<Card className="card custom-card">
						<Card.Body className="p-0">
							<div className="p-3">
								<div className="d-flex pos-relative flex-wrap">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<Link aria-label="anchor" to="#" className="pe-2">
										<span className="avatar border bd-gray-100 text-secondary"><i className="bi bi-truck fs-20"></i></span>
									</Link>
									<div className="flex-1">
										<div className="flex-between mb-1 fs-13">
											<span className="fw-semibold">Amozan</span>
											<span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 ms-2"></i>5.14%</span>
										</div>
										<div className="flex-between fs-12 mb-3">
											<h5 className="">$63,251.11</h5>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link to="#" className="flex-1 btn btn-sm btn-success-light me-2">Short</Link>
									<Link to="#" className="flex-1 btn btn-sm btn-info-light">Buy</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={2} md={4} sm={6}>
					<Card className="card custom-card">
						<Card.Body className="p-0">
							<div className="p-3">
								<div className="d-flex pos-relative flex-wrap">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<Link aria-label="anchor" to="#" className="pe-2">
										<span className="avatar border bd-gray-100 text-success"><i className="bi bi-box2-heart fs-20"></i></span>
									</Link>
									<div className="flex-1">
										<div className="flex-between mb-1 fs-13">
											<span className="fw-semibold">Ali Xpres</span>
											<span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 ms-2"></i>3.32%</span>
										</div>
										<div className="flex-between fs-12 mb-3">
											<h5 className="">$54,01.50</h5>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link to="#" className="flex-1 btn btn-sm btn-success-light me-2">Short</Link>
									<Link to="#" className="flex-1 btn btn-sm btn-info-light">Buy</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={2} md={4} sm={6}>
					<Card className="card custom-card">
						<Card.Body className="p-0">
							<div className="p-3">
								<div className="d-flex pos-relative flex-wrap">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<Link aria-label="anchor" to="#" className="pe-2">
										<span className="avatar border bd-gray-100 text-pink"><i className="bi bi-phone fs-20"></i></span>
									</Link>
									<div className="flex-1">
										<div className="flex-between mb-1 fs-13">
											<span className="fw-semibold">Samsung</span>
											<span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 ms-2"></i>0.14%</span>
										</div>
										<div className="flex-between fs-12 mb-3">
											<h5 className="">$12,289.44</h5>
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Link to="#" className="flex-1 btn btn-sm btn-success-light me-2">Short</Link>
									<Link to="#" className="flex-1 btn btn-sm btn-info-light">Buy</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<div className="row ">
				<Col xxl={4} xl={5}>
					<Card className="card custom-card">
						<Card.Header className=" border-bottom-0 flex-between">
							<div className="d-flex align-items-center">
								<Card.Title>My Stocks</Card.Title>
							</div>
							<div className="w-50 min-w-fit-content d-sm-flex align-items-center justify-content-end">
								<div className="form-group m-0 w-50">
									<Form.Control type="search" className="form-control-sm" placeholder="Search..." />
								</div>
							</div>
						</Card.Header>
						<Card.Body className="p-0">
							<div className="accordion accordion-style2 my-stocks-container" id="accordionStyle2">
								<div className="accordion-item stock-item p-3">
									<div className="accordion-header d-flex align-items-center" id="stockHeading_1">
										<Link to="#" className="p-0 flex-1" data-bs-toggle="collapse" data-bs-target="#stockItem1" aria-expanded="true" aria-controls="stockItem1">
											<div className="flex-between">
												<div className="me-2">
													<span className="avatar rounded-circle bg-primary-transparent border text-primary"><i className="bi bi-github fs-20"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<span>GTHB (Gituhb, Demo Inc.)</span>
														<span className="text-end">$12,390.02</span>
													</div>
													<div className="flex-between tx-11">
														<span className="text-muted">12 shares</span>
														<span className="text-success"><i className="ti ti-trending-up me-1 ms-2"></i>0.14%</span>
													</div>
												</div>
											</div>
										</Link>
										<span className="ms-3">
											<Link aria-label="anchor" to="#" className="tx-inverse" data-bs-toggle="tooltip" title="Wishlist">
												<i className="mdi mdi-star fs-20 op-7"></i></Link>
										</span>
									</div>
									<div id="stockItem1" className="accordion-collapse border-top-0 collapse show" aria-labelledby="stockHeading_1" data-bs-parent="#accordionStyle2">
										<div className="accordion-body px-0 pb-0">
											<div className="flex-between d-block d-sm-flex">
												<div className="flex-1 d-flex align-items-center mb-sm-0 mb-2 me-2">
													<OverlayTrigger placement="top" overlay={<Tooltip>Buy</Tooltip>}>
														<Link to="#" className="btn btn-icon btn-sm btn-primary ht-25 wd-25 me-2">B</Link>
													</OverlayTrigger>
													<OverlayTrigger placement="top" overlay={<Tooltip>Sell</Tooltip>}>
														<Link to="#" className="btn btn-icon btn-sm btn-secondary ht-25 wd-25 me-2">S</Link>
													</OverlayTrigger>
													<OverlayTrigger placement="top" overlay={<Tooltip>Market Cap</Tooltip>}>
														<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-light ht-25 wd-25" ><i className="ti ti-chart-candle fs-12 -f"></i></Link>
													</OverlayTrigger>
												</div>
												<div className="min-w-fit-content d-flex align-items-center">
													<p className="mb-0 me-3">
														<span className="text-muted me-1">High:</span>
														<span className="text-success">$20,399,08</span>
													</p>
													<p className="mb-0">
														<span className="text-muted me-1">Low:</span>
														<span className="text-danger">$11,021,36</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item stock-item p-3">
									<div className="accordion-header d-flex align-items-center" id="stockHeading_2">
										<Link to="#" className="collapsed p-0 flex-1" data-bs-toggle="collapse" data-bs-target="#stockItem2" aria-expanded="false" aria-controls="stockItem2">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar rounded-circle bg-secondary-transparent text-secondary"><i className="bi bi-twitter-x fs-20"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<span>TTR (Twiter.com, Inc.)</span>
														<span className="text-end">$15,526.01</span>
													</div>
													<div className="flex-between tx-11">
														<span className="text-muted">1,290 shares</span>
														<span className="text-success"><i className="ti ti-trending-up me-1 ms-2"></i>2.14%</span>
													</div>
												</div>
											</div>
										</Link>
										<span className="ms-3">
											<Link aria-label="anchor" to="#" className="tx-inverse" data-bs-toggle="tooltip" title="Wishlist"><i className="mdi mdi-star-outline fs-20 op-7"></i></Link>
										</span>
									</div>
									<div id="stockItem2" className="accordion-collapse border-top-0 collapse" aria-labelledby="stockHeading_2" data-bs-parent="#accordionStyle2">
										<div className="accordion-body px-0 pb-0">
											<div className="flex-between d-block d-sm-flex">
												<div className="flex-1 d-flex align-items-center mb-sm-0 mb-2 me-2">
													<Link to="#" className="btn btn-icon btn-sm btn-primary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Buy">B</Link>
													<Link to="#" className="btn btn-icon btn-sm btn-secondary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Sell">S</Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-light ht-25 wd-25" data-bs-toggle="tooltip" title="Market Cap"><i className="ti ti-chart-candle fs-12 -f"></i></Link>
												</div>
												<div className="min-w-fit-content d-flex align-items-center">
													<p className="mb-0 me-3">
														<span className="text-muted me-1">High:</span>
														<span className="text-success">$20,399,08</span>
													</p>
													<p className="mb-0">
														<span className="text-muted me-1">Low:</span>
														<span className="text-danger">$11,021,36</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item stock-item p-3">
									<div className="accordion-header d-flex align-items-center" id="stockHeading_3">
										<Link to="#" className="collapsed p-0 flex-1" data-bs-toggle="collapse" data-bs-target="#stockItem3" aria-expanded="false" aria-controls="stockItem3">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar rounded-circle bg-warning-transparent border text-warning"><i className="bi bi-film fs-20"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<span>NTFX (Netfllx.com, Inc.)</span>
														<span className="text-end">$41,250.50</span>
													</div>
													<div className="flex-between tx-11">
														<span className="text-muted">230 shares</span>
														<span className="text-danger"><i className="ti ti-trending-down me-1 ms-2"></i>4.02%</span>
													</div>
												</div>
											</div>
										</Link>
										<span className="ms-3">
											<Link aria-label="anchor" to="#" className="tx-inverse" data-bs-toggle="tooltip" title="Wishlist"><i className="mdi mdi-star fs-20 op-7"></i></Link>
										</span>
									</div>
									<div id="stockItem3" className="accordion-collapse border-top-0 collapse" aria-labelledby="stockHeading_3" data-bs-parent="#accordionStyle2">
										<div className="accordion-body px-0 pb-0">
											<div className="flex-between d-block d-sm-flex">
												<div className="flex-1 d-flex align-items-center mb-sm-0 mb-2 me-2">
													<Link to="#" className="btn btn-icon btn-sm btn-primary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Buy">B</Link>
													<Link to="#" className="btn btn-icon btn-sm btn-secondary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Sell">S</Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-light ht-25 wd-25" data-bs-toggle="tooltip" title="Market Cap"><i className="ti ti-chart-candle fs-12 -f"></i></Link>
												</div>
												<div className="min-w-fit-content d-flex align-items-center">
													<p className="mb-0 me-3">
														<span className="text-muted me-1">High:</span>
														<span className="text-success">$20,399,08</span>
													</p>
													<p className="mb-0">
														<span className="text-muted me-1">Low:</span>
														<span className="text-danger">$11,021,36</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item stock-item p-3">
									<div className="accordion-header d-flex align-items-center" id="stockHeading_4">
										<Link to="#" className="collapsed p-0 flex-1" data-bs-toggle="collapse" data-bs-target="#stockItem4" aria-expanded="true" aria-controls="stockItem4">
											<div className="flex-between">
												<div className="me-2">
													<span className="avatar rounded-circle bg-info-transparent border text-info"><i className="bi bi-bootstrap fs-20"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<span>BS (Boostrap, Inc.)</span>
														<span className="text-end">$30,500.15</span>
													</div>
													<div className="flex-between tx-11">
														<span className="text-muted">325 shares</span>
														<span className="text-danger"><i className="ti ti-trending-down me-1 ms-2"></i>2.73%</span>
													</div>
												</div>
											</div>
										</Link>
										<span className="ms-3">
											<Link aria-label="anchor" to="#" className="tx-inverse" data-bs-toggle="tooltip" title="Wishlist"><i className="mdi mdi-star-outline fs-20 op-7"></i></Link>
										</span>
									</div>
									<div id="stockItem4" className="accordion-collapse border-top-0 collapse" aria-labelledby="stockHeading_4" data-bs-parent="#accordionStyle2">
										<div className="accordion-body px-0 pb-0">
											<div className="flex-between d-block d-sm-flex">
												<div className="flex-1 d-flex align-items-center mb-sm-0 mb-2 me-2">
													<Link to="#" className="btn btn-icon btn-sm btn-primary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Buy">B</Link>
													<Link to="#" className="btn btn-icon btn-sm btn-secondary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Sell">S</Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-light ht-25 wd-25" data-bs-toggle="tooltip" title="Market Cap"><i className="ti ti-chart-candle fs-12 -f"></i></Link>
												</div>
												<div className="min-w-fit-content d-flex align-items-center">
													<p className="mb-0 me-3">
														<span className="text-muted me-1">High:</span>
														<span className="text-success">$20,399,08</span>
													</p>
													<p className="mb-0">
														<span className="text-muted me-1">Low:</span>
														<span className="text-danger">$11,021,36</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item stock-item p-3">
									<div className="accordion-header d-flex align-items-center" id="stockHeading_5">
										<Link to="#" className="collapsed p-0 flex-1" data-bs-toggle="collapse" data-bs-target="#stockItem5" aria-expanded="false" aria-controls="stockItem5">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar rounded-circle bg-success-transparent border text-success"><i className="bi bi-windows fs-20"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<span>MS (Micorsoft, Inc.)</span>
														<span className="text-end">$1,80,520.02</span>
													</div>
													<div className="flex-between tx-11">
														<span className="text-muted">1,523 shares</span>
														<span className="text-success"><i className="ti ti-trending-up me-1 ms-2"></i>8.63%</span>
													</div>
												</div>
											</div>
										</Link>
										<span className="ms-3">
											<Link aria-label="anchor" to="#" className="tx-inverse" data-bs-toggle="tooltip" title="Wishlist"><i className="mdi mdi-star fs-20 op-7"></i></Link>
										</span>
									</div>
									<div id="stockItem5" className="accordion-collapse border-top-0 collapse" aria-labelledby="stockHeading_5" data-bs-parent="#accordionStyle2">
										<div className="accordion-body px-0 pb-0">
											<div className="flex-between d-block d-sm-flex">
												<div className="flex-1 d-flex align-items-center mb-sm-0 mb-2 me-2">
													<Link to="#" className="btn btn-icon btn-sm btn-primary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Buy">B</Link>
													<Link to="#" className="btn btn-icon btn-sm btn-secondary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Sell">S</Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-light ht-25 wd-25" data-bs-toggle="tooltip" title="Market Cap"><i className="ti ti-chart-candle fs-12 -f"></i></Link>
												</div>
												<div className="min-w-fit-content d-flex align-items-center">
													<p className="mb-0 me-3">
														<span className="text-muted me-1">High:</span>
														<span className="text-success">$20,399,08</span>
													</p>
													<p className="mb-0">
														<span className="text-muted me-1">Low:</span>
														<span className="text-danger">$11,021,36</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item stock-item p-3">
									<div className="accordion-header d-flex align-items-center" id="stockHeading_6">
										<Link to="#" className="collapsed p-0 flex-1" data-bs-toggle="collapse" data-bs-target="#stockItem6" aria-expanded="false" aria-controls="stockItem6">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar rounded-circle bg-danger-transparent border text-danger"><i className="bi bi-apple fs-20"></i></span>
												</div>
												<div className="flex-1">
													<div className="flex-between mb-1">
														<span>AAPL (Appil, Inc.)</span>
														<span className="text-end">$21,093.20</span>
													</div>
													<div className="flex-between tx-11">
														<span className="text-muted">30 shares</span>
														<span className="text-danger"><i className="ti ti-trending-down me-1 ms-2"></i>4.10%</span>
													</div>
												</div>
											</div>
										</Link>
										<span className="ms-3">
											<Link aria-label="anchor" to="#" className="tx-inverse" data-bs-toggle="tooltip" title="Wishlist"><i className="mdi mdi-star fs-20 op-7"></i></Link>
										</span>
									</div>
									<div id="stockItem6" className="accordion-collapse border-top-0 collapse" aria-labelledby="stockHeading_6" data-bs-parent="#accordionStyle2">
										<div className="accordion-body px-0 pb-0">
											<div className="flex-between d-block d-sm-flex">
												<div className="flex-1 d-flex align-items-center mb-sm-0 mb-2 me-2">
													<Link to="#" className="btn btn-icon btn-sm btn-primary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Buy">B</Link>
													<Link to="#" className="btn btn-icon btn-sm btn-secondary ht-25 wd-25 me-2" data-bs-toggle="tooltip" title="Sell">S</Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-light ht-25 wd-25" data-bs-toggle="tooltip" title="Market Cap"><i className="ti ti-chart-candle fs-12 -f"></i></Link>
												</div>
												<div className="min-w-fit-content d-flex align-items-center">
													<p className="mb-0 me-3">
														<span className="text-muted me-1">High:</span>
														<span className="text-success">$20,399,08</span>
													</p>
													<p className="mb-0">
														<span className="text-muted me-1">Low:</span>
														<span className="text-danger">$11,021,36</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={8} xl={7} className="">
					<Card className="custom-card overflow-hidden">
						<Card.Header className="flex-between">
							<h6 className="card-title">Statistics</h6>
							<div className="btn-group">
								<Link to="#" className="btn btn-sm btn-primary-light">1H</Link>
								<Link to="#" className="btn btn-sm btn-primary-light">6H</Link>
								<Link to="#" className="btn btn-sm btn-primary-light">12H</Link>
								<Link to="#" className="btn btn-sm btn-primary">1D</Link>
							</div>
						</Card.Header>
						<Card.Body className="">
							<div className="d-sm-flex align-items-start justify-content-between mb-4">
								<div className="min-w-fit-content">
									<p className="mb-1">
										<span className="fs-22 text-primary font-weight-semibold">$12,390.02</span>
										<span className="text-danger ms-2 fs-11"><i className="ti ti-trending-down me-1 ms-2"></i>0.14%</span>
									</p>
									<p className="mb-1 fs-12 text-muted">
										<span className="text-danger">-89.75</span>
										<i className="mdi mdi-circle-small me-1"></i>
										<span>Today</span>
									</p>
									<p className="mb-0 fs-11 text-muted">
										<span>Jun 17, 2022</span>
										<i className="mdi mdi-circle-small"></i>
										<span>11:25 AM</span>
										<i className="mdi mdi-circle-small"></i>
										<span>UTC +5:30</span>
									</p>
								</div>
								<div className="flex-1 text-sm-end mt-2 mt-sm-0">
									<p className="mb-0 fs-16">GITUHB</p>
									<p className="mb-1 fs-11 text-muted">
										<span>GTHB</span>
										<i className="mdi mdi-circle-small me-1"></i>
										<span>INDEXNSE</span>
									</p>
									<Link to="#" className="text-primary"><i className="ti ti-plus me-1"></i>Compare</Link>
								</div>
							</div>
							<div id="stockCap" className="">
								<Stockcapdata />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</div>
			<Row>
				<div className="col-xxl-5">
					<Card className="card custom-card">
						<Card.Header className="card-header justify-content-between">
							<Card.Title>
								Transaction History
							</Card.Title>
							<div className="d-flex flex-wrap">
								<div className="me-3 my-1">
									<input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
								</div>
								<Dropdown className="my-1">
									<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu role="menu">
										<Dropdown.Item as="li" href="#">New</Dropdown.Item>
										<Dropdown.Item as="li" href="#">Popular</Dropdown.Item>
										<Dropdown.Item as="li" href="#">Relevant</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table table-hover text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col">Symbol</th>
											<th scope="col">Date</th>
											<th scope="col">Type</th>
											<th scope="col">Amount</th>
											<th scope="col">Shares</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="fw-semibold  fs-14">EPA:NTIX </td>
											<td> 11 Apr 2023</td>
											<td className=""><span className="badge badge-sm rounded-pill bg-warning">sell</span></td>
											<td className=""><span className="text-danger">-$3,390</span></td>
											<td className=" pe-4"><span className="text-danger">-60</span></td>
										</tr>
										<tr>
											<td className="fw-semibold fs-14"> EPA:THI </td>
											<td> 01 Apr 2023</td>
											<td className=""><span className="badge badge-sm rounded-pill bg-primary">Buy</span></td>
											<td className=""><span className="text-success">$1,290</span></td>
											<td className=" pe-4"><span className="text-success">+20</span></td>
										</tr>
										<tr>
											<td className="fw-semibold  fs-14"> EPA:SCB </td>
											<td> 04 Apr 2023</td>
											<td className=""><span className="badge badge-sm rounded-pill bg-primary">Buy</span></td>
											<td className=""><span className="text-danger">-$7,390</span></td>
											<td className=" pe-4"><span className="text-success">+50</span></td>
										</tr>
										<tr>
											<td className="fw-semibold  fs-14"> EPA:CGIO </td>
											<td> 10 Apr 2023</td>
											<td className=""><span className="badge badge-sm rounded-pill bg-warning">sell</span></td>
											<td className=""><span className="text-success">$3,390</span></td>
											<td className=" pe-4"><span className="text-success">+60</span></td>
										</tr>
										<tr>
											<td className="fw-semibold  fs-14">EPA:MOD </td>
											<td> 11 May 2023</td>
											<td className=""><span className="badge badge-sm rounded-pill bg-primary">Buy</span></td>
											<td className=""><span className="text-success">$3,390</span></td>
											<td className=" pe-4"><span className="text-danger">-80</span></td>
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
				</div>
				<Col xxl={7} className="">
					<Card className="custom-card">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Market Movers
							</Card.Title>
							<div className="d-flex flex-wrap">
								<div className="me-3 my-1">
									<input className="form-control form-control-sm " type="text" placeholder="Search Here" aria-label=" example" />
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
						<Card.Body>
							<div className="table-responsive">
								<Table className="table table-hover text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col">Symbol</th>
											<th scope="col">Name</th>
											<th scope="col">Price</th>
											<th scope="col">1D change</th>
											<th scope="col">1D Return%</th>
											<th scope="col">Volume</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="fw-semibold  fs-14">EPA:NTIX </td>
											<td> App1e Inc.<span className="fs-10 text-primary ms-1">NASDAQ</span></td>
											<td className="">$1,116.90<i className="ti ti-trending-up text-success fs-12 ms-1 d-inline-block"></i></td>
											<td className=""><span className="text-success">$3,390</span></td>
											<td className=" "><span className="text-success">13.60%</span></td>
											<td className=" "><span>12,389.30</span></td>
										</tr>
										<tr>
											<td className="fw-semibold  fs-14">TTR </td>
											<td> Twiter.com Inc.<span className="fs-10 text-primary ms-1">Nync</span></td>
											<td className="">$5,116.90<i className="ti ti-trending-up text-success fs-12 ms-1  d-inline-block"></i></td>
											<td className=""><span className="text-success">$75,390</span></td>
											<td className=" "><span className="text-success">86.60%</span></td>
											<td className=" "><span>53,389.30</span></td>
										</tr>
										<tr>
											<td className="fw-semibold  fs-14">BS </td>
											<td> Boostrap.com.<span className="fs-10 text-primary ms-1">Nse</span></td>
											<td className="">$5,116.90<i className="ti ti-trending-down text-danger fs-12 ms-1 d-inline-block"></i></td>
											<td className=""><span className="text-danger">$25,390</span></td>
											<td className=" "><span className="text-danger">86.60%</span></td>
											<td className=" "><span>87,389.30</span></td>
										</tr>
										<tr>
											<td className="fw-semibold  fs-14">NFLX </td>
											<td> Netfilx.com Inc.<span className="fs-10 text-primary ms-1">Lse</span></td>
											<td className="">$7,116.90<i className="ti ti-trending-down text-danger fs-12 ms-1 d-inline-block"></i></td>
											<td className=""><span className="text-danger">$25,390</span></td>
											<td className=" "><span className="text-danger">86.60%</span></td>
											<td className=" "><span>90,389.30</span></td>
										</tr>
										<tr>
											<td className="fw-semibold  fs-14">ION </td>
											<td> Ion.com Corp.<span className="fs-10 text-primary ms-1">Fsx</span></td>
											<td className="">$7,116.90<i className="ti ti-trending-up text-success fs-12 ms-1 d-inline-block"></i></td>
											<td className=""><span className="text-success">$90,390</span></td>
											<td className=" "><span className="text-success">54.60%</span></td>
											<td className=" "><span>86,389.30</span></td>
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
											<Pagination.Item disabled href="#">
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
export default Stocks;
