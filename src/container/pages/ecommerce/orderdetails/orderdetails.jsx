import React, { FC, Fragment } from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";

//IMAGES
import png6 from "../../../../assets/images/ecommerce/png/6.png";
import png29 from "../../../../assets/images/ecommerce/png/29.png";
import png11 from "../../../../assets/images/ecommerce/png/11.png";
import png14 from "../../../../assets/images/ecommerce/png/14.png";
import png40 from "../../../../assets/images/ecommerce/png/40.png";
import png41 from "../../../../assets/images/ecommerce/png/41.png";
import { Link } from "react-router-dom";

const Orderdetails = () => {
	const print = () => {
		window.print();
	};
	return (
		<Fragment>
			<Row>
				<Col xl={8}>
					<Row>
						<Col xl={12}>
							<Row>
								<Col xl={12}>
									<Card className="custom-card">
										<Card.Header className="d-flex justify-content-between">
											<Card.Title>
												Order No - <span className="text-primary">#SPK-1023</span>
											</Card.Title>
										</Card.Header>
										<Card.Body className="p-0">
											<div className="table-responsive">
												<table className="table text-nowrap">
													<thead>
														<tr>
															<th scope="col">Item</th>
															<th scope="col">Tracking No</th>
															<th scope="col">Price</th>
															<th scope="col">Quantity</th>
															<th scope="col">Total Price</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<div className="d-flex align-items-center">
																	<div className="me-3 lh-1">
																		<span className="avatar avatar-xxl bd-gray-200">
																			<img src={png14} alt="" />
																		</span>
																	</div>
																	<div>
																		<div className="mb-1 fs-14 fw-semibold">
																			<a href="#;">Sports shoes series 4</a>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Dial Size:</span><span className="text-muted">44mm</span>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Color:</span><span className="text-muted">Metallic Black</span>
																		</div>
																	</div>
																</div>
															</td>
															<td><a href="#;" className="text-primary">SPK1218153635</a></td>
															<td>
																<span className="fs-15 fw-semibold">$1,249</span>
															</td>
															<td className="">1</td>
															<td>
																<span className="fs-15 fw-semibold">$1,249</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="d-flex align-items-center">
																	<div className="me-3 lh-1">
																		<span className="avatar avatar-xxl bd-gray-200">
																			<img src={png11} alt="" />
																		</span>
																	</div>
																	<div>
																		<div className="mb-1 fs-14 fw-semibold">
																			<a href="#;">Cactus plant with gray color pot</a>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Size:</span><span className="text-muted">Large</span>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Color:</span><span className="text-muted">Orange<span className="badge bg-info ms-3">32% Off</span></span>
																		</div>
																	</div>
																</div>
															</td>
															<td><a href="#;" className="text-primary">SPK1120324532</a></td>
															<td>
																<span className="fs-15 fw-semibold">$799</span>
															</td>
															<td className="">1</td>
															<td>
																<span className="fs-15 fw-semibold">$799</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="d-flex align-items-center">
																	<div className="me-3 lh-1">
																		<span className="avatar avatar-xxl bd-gray-200">
																			<img src={png40} alt="" />
																		</span>
																	</div>
																	<div>
																		<div className="mb-1 fs-14 fw-semibold">
																			<a href="#;">Smart watch for women</a>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Size:</span><span className="text-muted">Large</span>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Color:</span><span className="text-muted">Orange<span className="badge bg-info ms-3">32% Off</span></span>
																		</div>
																	</div>
																</div>
															</td>
															<td><a href="#;" className="text-primary">SPK1120324932</a></td>
															<td>
																<span className="fs-15 fw-semibold">$800</span>
															</td>
															<td className="">2</td>
															<td>
																<span className="fs-15 fw-semibold">$1600</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="d-flex align-items-center">
																	<div className="me-3 lh-1">
																		<span className="avatar avatar-xxl bd-gray-200">
																			<img src={png6} alt="" />
																		</span>
																	</div>
																	<div>
																		<div className="mb-1 fs-14 fw-semibold">
																			<a href="#;">Combo mini plant sets</a>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Dial Size:</span><span className="text-muted">44mm</span>
																		</div>
																		<div className="mb-1">
																			<span className="me-1">Color:</span><span className="text-muted">Metallic Black</span>
																		</div>
																	</div>
																</div>
															</td>
															<td><a href="#;" className="text-primary">SPK12181536395</a></td>
															<td>
																<span className="fs-15 fw-semibold">$7,249</span>
															</td>
															<td className="">1</td>
															<td>
																<span className="fs-15 fw-semibold">$3,249</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</Card.Body>
										<div className="card-footer border-top-0">
											<div className="btn-list float-end">
												<Button variant="" type="button" className="d-inline-flex btn btn-primary btn-wave" onClick={() => print()}><i className="ri-printer-line me-1 align-middle"></i>Print</Button>
												<Button variant="" type="button" className="d-inline-flex btn btn-secondary btn-wave"><i className="ri-share-forward-line me-1 align-middle"></i>Share Details</Button>
											</div>
										</div>
									</Card>
								</Col>
							</Row>
						</Col>
						<Col xl={12}>
							<Row>
								<Col xl={4}>
									<Card className="custom-card">
										<Card.Header>
											<Card.Title>
												Customer Details
											</Card.Title>
										</Card.Header>
										<Card.Body>
											<ul className="list-unstyled order-details-list">
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">Name : </span>Jacob Smith</div>
												</li>
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">Email : </span><a href="#;" className="text-primary">jacobsmith232@gmail.com</a></div>
												</li>
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">Phone : </span>(555) - 0123 - 1215</div>
												</li>
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">Land Mark : </span>Lf-21-089</div>
												</li>
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">Street : </span>Lincoln Street</div>
												</li>
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">City : </span>Los Angeles</div>
												</li>
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">State : </span>San Fransisco</div>
												</li>
												<li>
													<div className="fs-14 text-muted"><span className="me-2 text-default fw-semibold">Zip : </span>200071</div>
												</li>
											</ul>
										</Card.Body>
									</Card>
								</Col>
								<Col xl={4}>
									<Card className="custom-card overflow-hidden">
										<Card.Header>
											<Card.Title>
												Delivery Address
											</Card.Title>
										</Card.Header>
										<Card.Body className="p-0">
											<div className="p-3 overflow-x-auto">
												<div className="mb-3">
													<span className="fs-15 fw-semibold">Billing Address :</span>
												</div>
												<ul className="list-unstyled order-details-list">
													<li>
														<div className="fs-14 text-muted d-inline-flex"><span className="me-2 text-default fw-semibold">Street : </span>2840 Wilderness Pl</div>
													</li>
													<li>
														<div className="fs-14 text-muted d-inline-flex"><span className="me-2 text-default fw-semibold">City/Town : </span>Boulder</div>
													</li>
													<li>
														<div className="fs-14 text-muted d-inline-flex"><span className="me-2 text-default fw-semibold">State/Province/Region : </span>Colorado</div>
													</li>
													<li>
														<div className="fs-14 text-muted d-inline-flex"><span className="me-2 text-default fw-semibold">Zip/Postal Code : </span>80301</div>
													</li>
													<li>
														<div className="fs-14 text-muted d-inline-flex"><span className="me-2 text-default fw-semibold">Phone Number : </span>(303) 447-0600</div>
													</li>
													<li>
														<div className="fs-14 text-muted d-inline-flex"><span className="me-2 text-default fw-semibold">Country : </span>United States</div>
													</li>
												</ul>
											</div>
											<div className="alert alert-success d-flex align-items-center rounded-0 shadow-none" role="alert">
												<svg className="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
												<div>
													<strong>Shipping address</strong> is same as billing address
												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
								<Col xl={4}>
									<Card className="custom-card">
										<Card.Header>
											<Card.Title>
												Shipping Details
											</Card.Title>
										</Card.Header>
										<div className="card-body text-center">
											<div className="text-center mb-2">
												<span className="avatar avatar-xxl">
													<img src={png29} alt="" />
												</span>
											</div>
											<div className="fs-15 fw-semibold">
												FedEx Home Delivery Services
											</div>
											<div className="text-muted fs-12 mb-3">Scan barcode to track order</div>
											<div><img src={png41} alt="" /></div>
										</div>
									</Card>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Payment Summary
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="">
								<div className="d-flex align-items-center justify-content-between mb-3">
									<div className=" fs-14">Total Items</div>
									<div className="fw-semibold fs-16">05</div>
								</div>
								<div className="d-flex align-items-center justify-content-between mb-3">
									<div className=" fs-14">Sub Total</div>
									<div className="fw-semibold fs-16">$10,308</div>
								</div>
								<div className="d-flex align-items-center justify-content-between mb-3">
									<div className=" fs-14">Applied Coupen</div>
									<div className="badge bg-success-transparent fs-11">SPKFIR</div>
								</div>
								<div className="d-flex align-items-center justify-content-between mb-3">
									<div className=" fs-14">Discount</div>
									<div className="fw-semibold fs-16 text-success">10%- $301.8</div>
								</div>
								<div className="d-flex align-items-center justify-content-between mb-3">
									<div className=" fs-14">Delivery Charges</div>
									<div className="fw-semibold fs-16 text-danger">-$150</div>
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<div className=" fs-14">Service Tax (18%)</div>
									<div className="fw-semibold fs-16">- $45.029</div>
								</div>
							</div>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex align-items-center justify-content-between">
								<div className="fs-18 fw-semibold">Total</div>
								<h4 className="fw-semibold">$12,234</h4>
							</div>
						</Card.Footer>
					</Card>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Order Tracking
							</Card.Title>
							<div className="ms-auto text-success">#SPK1218153635</div>
						</Card.Header>
						<Card.Body>
							<div className="order-track">
								<Accordion alwaysOpen defaultActiveKey="0" className="" id="basicAccordion">
									<Accordion.Item eventKey='0' className="border-0 bg-transparent mb-2">
										<Accordion.Header id="headingOne">
											<Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
												<div className="d-flex ">
													<div className="me-3">
														<span className="avatar avatar-md  avatar-rounded bg-light text-muted">
															<i className="bx bxs-cart"></i>
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-semibold mb-0 fs-14">Order Placed</p>
														<span className="fs-12 text-success">Nov 03, 2022</span>
													</div>
												</div>
											</Link>
										</Accordion.Header>
										{/* <div id="basicOne" className="accordion-collapse collapse show border-top-0" aria-labelledby="headingOne" data-bs-parent="#basicAccordion"> */}
										<Accordion.Body className="accordion-body pt-0 ps-5 ms-2">
											<div className="fs-12">
												<p className="mb-0">Order placed successfully by <Link to="#" className="font-weight-semibold text-primary">Sansa Taylor</Link></p>
												<span className="text-muted op-7">Nov 03, 2022, 15:36</span>
											</div>
										</Accordion.Body>
										{/* </div> */}
									</Accordion.Item>
								</Accordion>
								<Accordion alwaysOpen defaultActiveKey="0" className="" id="basicAccordion1">
									<Accordion.Item eventKey='0' className="border-0 bg-transparent mb-2">
										<Accordion.Header id="headingTwo">
											<Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
												<div className="d-flex">
													<div className="me-3">
														<span className="avatar avatar-md avatar-rounded bg-light text-muted">
															<i className='bx bxs-badge-check' ></i>
														</span>
													</div>
													<div className="flex-fill">
														<p className="fw-semibold mb-0 fs-14">Picked</p>
														<span className="fs-12">Nov 03, 15:10</span>
													</div>
												</div>
											</Link>
										</Accordion.Header>
										{/* <div id="basicTwo" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingTwo" data-bs-parent="#basicAccordion1"> */}
										<Accordion.Body className="pt-0 ps-5 ms-2">
											<div className="fs-12">
												<p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
												<span className="text-muted op-7">Nov 03, 2022, 15:36</span>
											</div>
										</Accordion.Body>
										{/* </div> */}
									</Accordion.Item>
								</Accordion>
								<Accordion alwaysOpen defaultActiveKey="0" className="" id="basicAccordion2">
									<Accordion.Item eventKey='0' className="border-0 bg-transparent mb-2">
										<Accordion.Header id="headingThree">
											{/* <a className="px-0 pt-0" href="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree"> */}
											<div className="d-flex">
												<div className="me-3">
													<span className="avatar avatar-md avatar-rounded bg-light text-muted">
														<i className='bx bxs-truck' ></i>
													</span>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0 fs-14">Shipping</p>
													<span className="fs-12">Nov 03, 15:10</span>
												</div>
											</div>
											{/* </a> */}
										</Accordion.Header>
										{/* <div id="basicThree" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingThree" data-bs-parent="#basicAccordion2"> */}
										<Accordion.Body className=" pt-0 ps-5 ms-2">
											<div className="fs-12 mb-3">
												<p className="mb-0">Arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
												<span className="text-muted op-7">Nov 03, 2022, 15:36</span>
											</div>
											<div className="fs-12 mb-3">
												<p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
												<span className="text-muted op-7">Nov 03, 2022, 15:36</span>
											</div>
											<div className="fs-12">
												<p className="mb-0">Arrived in Hyderabad and expected Delivery is <span className="font-weight-semibold">Apr 16, 2022</span> </p>
												<span className="text-muted op-7">Nov 03, 2022, 15:36</span>
											</div>
										</Accordion.Body>
										{/* </div> */}
									</Accordion.Item>
								</Accordion>
								<Accordion className="" id="basicAccordion3">
									<Accordion.Item eventKey='0' className="border-0 bg-transparent next-step mb-2">
										<Accordion.Header id="headingFour">
											{/* <a className="collapsed px-0 pt-0" href="#" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="true" aria-controls="basicFour"> */}
											<div className="d-flex">
												<div className="me-3">
													<span className="avatar avatar-md avatar-rounded bg-success text-white border"><i className="bx bxs-package"></i></span>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0 fs-14">Out For Delivery</p>
													<span className="text-muted fs-12">Nov 03, 15:10 (expected)</span>
												</div>
											</div>
											{/* </a> */}
										</Accordion.Header>
										{/* <div id="basicFour" className="accordion-collapse collapse border-top-0" aria-labelledby="headingFour" data-bs-parent="#basicAccordion3"> */}
										<Accordion.Body className="accordion-body pt-0 ps-5 ms-2">
											<div className="fs-12">
												<p className="mb-0">Your order is out for devlivery</p>
												<span className="text-muted op-7">Nov 03, 2022, 15:36 (expected)</span>
											</div>
										</Accordion.Body>
										{/* </div> */}
									</Accordion.Item>
								</Accordion>
								<Accordion className="" id="basicAccordion4">
									<Accordion.Item eventKey='0' className="border-0 bg-transparent next-step mb-2">
										<Accordion.Header id="headingFive">
											{/* <a className="collapsed px-0 pt-0" href="#" role="button" data-bs-toggle="collapse" aria-expanded="true" > */}
											<div className="d-flex">
												<div className="me-3">
													<span className="avatar avatar-md avatar-rounded bg-success text-white border"><i className="bx bxs-package"></i></span>
												</div>
												<div className="flex-fill">
													<p className="fw-semibold mb-0 fs-14">Delivered</p>
													<span className="fs-12 text-muted">Nov 03, 18:42</span>
												</div>
											</div>
											{/* </a> */}
										</Accordion.Header>
									</Accordion.Item>
								</Accordion>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/*  */}
		</Fragment>
	);
};

export default Orderdetails;
