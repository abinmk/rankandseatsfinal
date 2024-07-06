
import React, { FC, Fragment, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import { Earningsdata, Salesdonut, WorldMap } from "./ecommercedata";
import { Link } from "react-router-dom";

//IMAGES
import faces4 from "../../../assets/images/faces/4.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import ecommerce1 from "../../../assets/images/ecommerce/jpg/1.jpg";
import ecommerce2 from "../../../assets/images/ecommerce/jpg/2.jpg";
import ecommerce3 from "../../../assets/images/ecommerce/jpg/3.jpg";
import ecommerce4 from "../../../assets/images/ecommerce/jpg/4.jpg";
import ecommerce5 from "../../../assets/images/ecommerce/jpg/5.jpg";
import ecommerce6 from "../../../assets/images/ecommerce/jpg/6.jpg";

const Ecommerce = () => {

	const [_content, setContent] = useState("");

	return (
		<Fragment>
			<Row>
				<Col xxl={12}>
					<Card className="custom-card">
						<Card.Body className="p-0">
							<div className="row row-cols-sm-2 row-cols-xxl-5 g-0 ecommerce-cards">
								<div className="col d-flex p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-2 my-auto">
										<div className="avatar avatar-lg bg-secondary-transparent radius-5"><i className="ti ti-package fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Total Products</p>
										<div className="">
											<span className="text-xl fw-semibold">45,280</span>
											<span className="ms-2 fs-13 text-secondary"><i className="fe fe-arrow-up-right me-1 d-inline-block fs-12"></i>1.31%</span>
										</div>
									</div>
								</div>
								<div className="col d-flex p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-2 my-auto">
										<div className="avatar avatar-lg bg-pink-transparent radius-5"><i className="ti ti-packge-import fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Total Orders</p>
										<div className="">
											<span className="text-xl fw-semibold">12,088</span>
											<span className="ms-2 fs-13 text-pink"><i className="fe fe-arrow-up-right me-1 d-inline-block fs-12"></i>12.05%</span>
										</div>
									</div>
								</div>
								<div className="col d-flex p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-2 my-auto">
										<div className="avatar avatar-lg bg-info-transparent radius-5"><i className="ti ti-rocket fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Total Sales</p>
										<div className="">
											<span className="text-xl fw-semibold">10,500</span>
											<span className="ms-2 fs-13 text-info"><i className="fe fe-arrow-down-right fs-12 me-1 d-inlineblock"></i>1.14%</span>
										</div>
									</div>
								</div>
								<div className="col d-flex p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-2 my-auto">
										<div className="avatar avatar-lg bg-orange-transparent radius-5"><i className="ti ti-wallet fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Income</p>
										<div className="">
											<span className="text-xl fw-semibold">$69,270</span>
											<span className="ms-2 fs-13 text-orange"><i className="fe fe-arrow-up-right me-1 d-inline-block fs-12 "></i>2.58%</span>
										</div>
									</div>
								</div>
								<div className="col d-flex p-4 tx-white pos-relative">
									<Link aria-label="anchor" to="#" className="masked-link"></Link>
									<div className="me-2 my-auto">
										<div className="avatar avatar-lg bg-success-transparent radius-5"><i className="ti ti-coin fs-20"></i></div>
									</div>
									<div className="flex-1">
										<p className="mb-0 text-muted">Expenses</p>
										<div className="d-flex flex-wrap align-items-baseline">
											<span className="text-xl fw-semibold">$21,520</span>
											<span className="ms-2 fs-13 text-success"><i className="fe fe-arrow-down-right fs-12 me-1 d-inlineblock"></i>14.69%</span>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={12}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header className="justify-content-between">
									<Card.Title>Earnings</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" href="#" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fe fe-more-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item href="#">Today</Dropdown.Item>
											<Dropdown.Item href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body>
									<div className="row justify-content-center">
										<div className="col-xl-4 col-md-4  m-1 m-md-0">
											<div className="d-flex align-items-center justify-content-center">
												<span className="avatar avatar-md br-5 bg-primary-transparent text-primary me-2"><i className="fe fe-arrow-up"></i></span>
												<div className="">
													<h5 className="mb-0">180.32k</h5>
													<p className="mb-0 tx-muted">Total Orders </p>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-md-4  m-1 m-md-0">
											<div className="d-flex align-items-center justify-content-center">
												<span className="avatar avatar-md br-5 bg-secondary-transparent text-secondary me-2"><i className="fe fe-arrow-down"></i></span>
												<div className="">
													<h5 className="mb-0">743.32k</h5>
													<p className="mb-0 tx-muted">Total Sales </p>
												</div>
											</div>
										</div>
									</div>
									<div id="projectstatistics">
										<Earningsdata />
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="justify-content-between">
									<Card.Title className="">
										Top Countries By Sales
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="true">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item href="#">Today</Dropdown.Item>
											<Dropdown.Item href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="overflow-hidden">
									<Row>
										<Col xl={6}>
											<div id="country-sales">
												<WorldMap setTooltipContent={setContent} />
											</div>
										</Col>
										<Col xl={6}>
											<div className="">
												<div className="d-flex mb-1">
													<p className="mb-0">Usa</p>
													<span className="ms-auto">75%</span>
												</div>
												<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-primary" style={{ width: "75%" }}>
													</div>
												</div>
											</div>
											<div className="mt-4">
												<div className="d-flex mb-1">
													<p className="mb-0">India</p>
													<span className="ms-auto">55%</span>
												</div>
												<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-secondary" style={{ width: "55%" }}>
													</div>
												</div>
											</div>
											<div className="mt-4">
												<div className="d-flex mb-1">
													<p className="mb-0">Vatican City</p>
													<span className="ms-auto">60%</span>
												</div>
												<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-info" style={{ width: "60%" }}>
													</div>
												</div>
											</div>
											<div className="mt-4">
												<div className="d-flex mb-1">
													<p className="mb-0">Palau</p>
													<span className="ms-auto">80%</span>
												</div>
												<div className="progress progress-xs mb-3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-warning" style={{ width: "80%" }}>
													</div>
												</div>
											</div>
											<div className="mt-4">
												<div className="d-flex mb-1">
													<p className="mb-0">Sao Tome and Principe</p>
													<span className="ms-auto">45%</span>
												</div>
												<div className="progress progress-xs" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-success" style={{ width: "45%" }}>
													</div>
												</div>
											</div>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xxl={6} xl={12}>
					<Row>
						<Col xxl={6} xl={6} lg={6} md={6}>
							<Card className="custom-card">
								<Card.Header className="justify-content-between">
									<Card.Title className="">
										Invoice
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' href="#" className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="true">
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
									<ul className="list-unstyled mb-0">
										<li className="mb-3">
											<Link to={`${import.meta.env.BASE_URL}pages/invoice/invoicedetails`}>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-top justify-content-center">
														<div className="me-2">
															<span className="avatar bg-primary-transparent rounded-circle"><i className="ti ti-building-skyscraper fs-18"></i></span>
														</div>
														<div>
															<p className="mb-0 fw-semibold">Hedges Corp Ed</p>
															<p className="mb-0 text-muted fs-12">30 Invoices</p>
														</div>
													</div>
													<div>
														<span className="badge bg-success-transparent badge-sm rounded-pill min-w-fit-content ms-1">Paid</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="mb-3">
											<Link to={`${import.meta.env.BASE_URL}pages/invoice/invoicedetails`}>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-top justify-content-center">
														<div className="me-2">
															<span className="avatar"><img src={faces4} alt="img" className="rounded-circle" /></span>
														</div>
														<div>
															<p className="mb-0 fw-semibold">Charlie Beth</p>
															<p className="mb-0 text-muted fs-12">11 Invoices</p>
														</div>
													</div>
													<div>
														<span className="badge bg-warning-transparent badge-sm rounded-pill min-w-fit-content ms-1">Unpaid</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="mb-3">
											<Link to={`${import.meta.env.BASE_URL}pages/invoice/invoicedetails`}>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-top justify-content-center">
														<div className="me-2">
															<span className="avatar bg-secondary-transparent  rounded-circle"><i className="ti ti-user fs-18 "></i></span>
														</div>
														<div>
															<p className="mb-0 fw-semibold">Nikson Bey</p>
															<p className="mb-0 text-muted fs-12">21 Invoices</p>
														</div>
													</div>
													<div>
														<span className="badge bg-success-transparent badge-sm rounded-pill min-w-fit-content ms-1">Paid</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="mb-3">
											<Link to={`${import.meta.env.BASE_URL}pages/invoice/invoicedetails`}>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-top justify-content-center">
														<div className="me-2">
															<span className="avatar"><img src={faces2} alt="img" className="rounded-circle" /></span>
														</div>
														<div>
															<p className="mb-0 fw-semibold">Malbi Inf Et.</p>
															<p className="mb-0 text-muted fs-12">07 Invoices</p>
														</div>
													</div>
													<div>
														<span className="badge bg-success-transparent badge-sm rounded-pill min-w-fit-content ms-1">Paid</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="mb-3">
											<Link to={`${import.meta.env.BASE_URL}pages/invoice/invoicedetails`}>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-top justify-content-center">
														<div className="me-2">
															<span className="avatar"><img src={faces8} alt="img" className="rounded-circle" /></span>
														</div>
														<div>
															<p className="mb-0 fw-semibold">Hedges Corp Ed.</p>
															<p className="mb-0 text-muted fs-12">37 Invoices</p>
														</div>
													</div>
													<div>
														<span className="badge bg-danger-transparent badge-sm rounded-pill min-w-fit-content ms-1">Overdue</span>
													</div>
												</div>
											</Link>
										</li>
										<li className="">
											<Link to={`${import.meta.env.BASE_URL}pages/invoice/invoicedetails`}>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-top justify-content-center">
														<div className="me-2">
															<span className="avatar"><img src={faces10} alt="img" className="rounded-circle" /></span>
														</div>
														<div>
															<p className="mb-0 fw-semibold">Bickle Bob</p>
															<p className="mb-0 text-muted fs-12">313 Invoices</p>
														</div>
													</div>
													<div>
														<span className="badge bg-secondary-transparent badge-sm rounded-pill min-w-fit-content ms-1">Unpaid</span>
													</div>
												</div>
											</Link>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={6} xl={6} lg={6} md={6} className="">
							<Card className="custom-card overflow-hidden">
								<Card.Header className="justify-content-between">
									<Card.Title className="">
										Sales By Category
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" href="#" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fe fe-more-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item href="#">Today</Dropdown.Item>
											<Dropdown.Item href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body>
									<div id="salesDonut">
										<Salesdonut />
									</div>
								</Card.Body>
								<Card.Body className="p-0">
									<div className="row row-cols-12 border-top border-block-start-dashed">
										<div className="col p-0">
											<div className="ps-4 py-3 pe-3 text-center border-end border-inline-end-dashed">
												<span className="text-muted fs-12 mb-1 crm-lead-legend mobile d-inline-block">Electronics
												</span>
												<div><span className="text-md fw-semibold">7,724</span>
												</div>
											</div>
										</div>
										<div className="col p-0">
											<div className="p-3 text-center border-end border-inline-end-dashed">
												<span className="text-muted fs-12 mb-1 crm-lead-legend desktop d-inline-block">Women's
												</span>
												<div><span className="text-md fw-semibold">4,987</span></div>
											</div>
										</div>
										<div className="col p-0">
											<div className="p-3 text-center border-end border-inline-end-dashed">
												<span className="text-muted fs-12 mb-1 crm-lead-legend laptop d-inline-block">Men's
												</span>
												<div><span className="text-md fw-semibold">8,093</span>
												</div>
											</div>
										</div>
										<div className="col p-0">
											<div className="p-3 text-center">
												<span className="text-muted fs-12 mb-1 crm-lead-legend tablet d-inline-block">Kid's
												</span>
												<div><span className="text-md fw-semibold">979</span></div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card overflow-hidden">
								<Card.Header className="justify-content-between">
									<Card.Title>Top Selling Products</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fe fe-more-vertical"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item href="#">Today</Dropdown.Item>
											<Dropdown.Item href="#">This Week</Dropdown.Item>
											<Dropdown.Item href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className="p-0">
									<div className="table-responsive">
										<table className="table text-nowrap mb-0">
											<thead>
												<tr>
													<th scope="col" className="text-center">S.no</th>
													<th scope="col">Product</th>
													<th scope="col">Total Sales</th>
													<th scope="col">Stock</th>
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
																<img src={ecommerce1} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0">Black color Smart mobile phone</p>
																<Link to="#" className="text-primary ">#129470</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">5,093</span>
													</td>
													<td><span className="badge badge-sm bg-success-transparent text-success">In Stock</span></td>
												</tr>
												<tr>
													<td className="text-center lh-1">
														02
													</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={ecommerce3} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0">Small alarm watch</p>
																<Link to="#" className="text-primary ">#199470</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">7,093</span>
													</td>
													<td><span className="badge badge-sm bg-success-transparent text-success">In Stock</span></td>
												</tr>
												<tr>
													<td className="text-center lh-1">
														03
													</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={ecommerce4} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0">Black color lens cemara</p>
																<Link to="#" className="text-primary ">#153470</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">34,093</span>
													</td>
													<td><span className="badge badge-sm bg-danger-transparent text-danger">Out Of Stock</span></td>
												</tr>
												<tr>
													<td className="text-center lh-1">
														04
													</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={ecommerce5} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0">Beautiful flower Frame</p>
																<Link to="#" className="text-primary ">#123470</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">1,793</span>
													</td>
													<td><span className="badge badge-sm bg-danger-transparent text-danger">Out Of Stock</span></td>
												</tr>
												<tr>
													<td className="text-center lh-1">
														05
													</td>
													<td>
														<div className="d-flex">
															<span className="avatar avatar-md">
																<img src={ecommerce6} className="rounded-1" alt="" />
															</span>
															<div className="flex-1 ms-2">
																<p className="mb-0">Sports shoes   for men</p>
																<Link to="#" className="text-primary ">#193470</Link>
															</div>
														</div>
													</td>
													<td>
														<span className="fw-semibold">50,793</span>
													</td>
													<td><span className="badge badge-sm bg-success-transparent text-success">In Stock</span></td>
												</tr>
											</tbody>
										</table>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card ">
						<Card.Header className="justify-content-between">
							<div className="card-title">
								Order Summary
							</div>
							<div className="d-sm-flex">
								<div className="me-3 mb-2 mb-sm-0">
									<input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
								</div>
								<Dropdown>
									<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu role="menu">
										<Dropdown.Item href="#">New</Dropdown.Item>
										<Dropdown.Item href="#">Popular</Dropdown.Item>
										<Dropdown.Item href="#">Relevant</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<table className="table text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col">Product Name</th>
											<th scope="col">Transaction Id</th>
											<th scope="col">Price</th>
											<th scope="col">Date</th>
											<th scope="col">Payment method</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={ecommerce2} alt="" className="rounded-1" />
														</span>
													</div>
													<div className="fs-14">Black colored Headset</div>
												</div>
											</td>
											<td>
												<span className="fw-semibold">#1234-4567</span>
											</td>
											<td>
												$1,299.99
											</td>
											<td>
												<span className="">02-03-2023</span>
											</td>
											<td>
												<span className="">Cash On Delivery</span>
											</td>
											<td>
												<span className="badge bg-success-transparent">Delivered</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={ecommerce3} alt="" className="rounded-1" />
														</span>
													</div>
													<div className="fs-14">Small alarm watch</div>
												</div>
											</td>
											<td>
												<span className="fw-semibold">#1902-9883</span>
											</td>
											<td>
												$99.99
											</td>
											<td>
												<span className="">02-03-2023</span>
											</td>
											<td>
												<span className="">Cash On Delivery</span>
											</td>
											<td>
												<span className="badge bg-danger-transparent">cancelled</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={ecommerce5} alt="" className="rounded-1" />
														</span>
													</div>
													<div className="fs-14">Beautiful flower Frame</div>
												</div>
											</td>
											<td>
												<span className="fw-semibold">#1962-9033</span>
											</td>
											<td>
												$199.99
											</td>
											<td>
												<span className="">03-02-2023</span>
											</td>
											<td>
												<span className="">Cash On Delivery</span>
											</td>
											<td>
												<span className="badge bg-primary-transparent">Shipped</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={ecommerce4} alt="" className="rounded-1" />
														</span>
													</div>
													<div className="fs-14">Black color lens cemara</div>
												</div>
											</td>
											<td>
												<span className="fw-semibold">#8745-1232</span>
											</td>
											<td>
												$79.00
											</td>
											<td>
												<span className="">	01-03-2023</span>
											</td>
											<td>
												<span className="">Online</span>
											</td>
											<td>
												<span className="badge bg-warning-transparent">Pending</span>
											</td>
										</tr>

										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={ecommerce1} alt="" className="rounded-1" />
														</span>
													</div>
													<div className="fs-14">Black color Smart mobile phone</div>
												</div>
											</td>
											<td>
												<span className="fw-semibold">#1734-9743</span>
											</td>
											<td>
												$199.99
											</td>
											<td>
												<span className="">03-03-2023</span>
											</td>
											<td>
												<span className="">Online</span>
											</td>
											<td>
												<span className="badge bg-success-transparent">Delivered</span>
											</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm">
															<img src={ecommerce6} alt="" className="rounded-1" />
														</span>
													</div>
													<div className="fs-14">Sports shoes   for men</div>
												</div>
											</td>
											<td>
												<span className="fw-semibold">#1802-9883</span>
											</td>
											<td>
												$39.99
											</td>
											<td>
												<span className="">02-03-2023</span>
											</td>
											<td>
												<span className="">Cash On Delivery</span>
											</td>
											<td>
												<span className="badge bg-danger-transparent">cancelled</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex align-items-center">
								<div>
									Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
								</div>
								<div className="ms-auto">
									<nav aria-label="Page navigation" className="pagination-style-4">
										<Pagination as="ul" className="pagination mb-0">
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

export default Ecommerce;
