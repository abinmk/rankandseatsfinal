import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";
import { BTC, Bitcoin, DTC, Dash, ETC, Ethereum, Euro, IOTA, Marketcap, NEO, Selectdata1, Trademeter, XRP } from "./cryptodata";
import { Link } from "react-router-dom";
import Select from "react-select";

//IMAGES
import bitcoin from "../../../assets/images/crypto-currencies/regular/Bitcoin.svg";
import ethereum from "../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import neo from "../../../assets/images/crypto-currencies/regular/Neo.svg";
import iota from "../../../assets/images/crypto-currencies/regular/IOTA.svg";
import dash from "../../../assets/images/crypto-currencies/regular/Dash.svg";
import euro from "../../../assets/images/crypto-currencies/regular/Euro.svg";
import litecoin from "../../../assets/images/crypto-currencies/regular/litecoin.svg";
import ripple from "../../../assets/images/crypto-currencies/regular/Ripple.svg";

const Crypto = () => {
	return (
		<Fragment>
			<Row>
				<Col xxl={3} lg={6}>
					<Card className="custom-card overflow-hidden">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between">
								<div>
									<span className="avatar avatar-md avatar-rounded bg-light p-2">
										<img src={bitcoin} alt="" />
									</span>
								</div>
								<div className="flex-fill ms-3">
									<div className="d-flex align-items-center justify-content-between flex-wrap">
										<div>
											<p className="text-muted mb-0">Bitcoin
												<span className="ms-1 badge bg-success-transparent badge-sm rounded-pill">+25.8%</span></p>
											<h3 className="fw-semibold mb-0">
												$12,800
											</h3>
										</div>
										<div>
											<span id="crm-total-customers">
												<Bitcoin />
											</span>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} lg={6}>
					<Card className="custom-card overflow-hidden">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between">
								<div>
									<span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
										<img src={ethereum} alt="" />
									</span>
								</div>
								<div className="flex-fill ms-3">

									<div className="d-flex align-items-center justify-content-between flex-wrap">
										<div>
											<p className="text-muted mb-0">Ethereum
												<span className="ms-1 badge bg-success-transparent badge-sm rounded-pill">+35.9%</span></p>
											<h3 className="fw-semibold mb-0">$18,600
											</h3>
										</div>
										<div id="crm-total-revenue">
											<Ethereum />
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} lg={6}>
					<Card className="custom-card overflow-hidden">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between">
								<div>
									<span className="avatar avatar-md avatar-rounded bg-light p-2">
										<img src={dash} alt="" />
									</span>
								</div>
								<div className="flex-fill ms-3">
									<div className="d-flex align-items-center justify-content-between flex-wrap">
										<div>
											<p className="text-muted mb-0">Dash
												<span className="ms-1 badge bg-success-transparent badge-sm rounded-pill">+15.9%</span></p>
											<h3 className="fw-semibold mb-0">$16,580
											</h3>
										</div>
										<div id="crm-conversion-ratio">
											<Dash />
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} lg={6}>
					<Card className="custom-card overflow-hidden">
						<Card.Body>
							<div className="d-flex align-items-top justify-content-between">
								<div>
									<span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
										<img src={euro} alt="" />
									</span>
								</div>
								<div className="flex-fill ms-3">
									<div className="d-flex align-items-center justify-content-between flex-wrap">
										<div>
											<p className="text-muted mb-0">Euro
												<span className="ms-1 badge bg-success-transparent badge-sm rounded-pill">+35.7%</span></p>
											<h3 className="fw-semibold mb-0">$76,560
											</h3>
										</div>
										<div id="crm-total-deals">
											<Euro />
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={4} className="">
					<div className="row row-deck">
						<Col xl={12}>
							<Card className="card custom-card">
								<Card.Body>
									<div className="d-flex justify-content-between">
										<div>
											<p className="mb-0 text-muted">Your Balance</p>
											<h5 className="text-xl fw-semibold mb-0">$23,895.00</h5>
											<p className=" text-muted fs-12 mb-3">1.5002746BTC</p>
										</div>
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
									</div>
									<div className="row mb-3">
										<div className="col-xl-6 col-sm-6 col-6">
											<div className="d-sm-flex align-items-center flex-wrap">
												<div className="me-sm-2 mb-2 mb-sm-0">
													<div className="avatar bg-primary-transparent tx-primary br-5">
														<i className="ti ti-arrow-big-up-lines fs-20"></i>
													</div>
												</div>
												<div className="flex-1">
													<span className="text-md mb-1 fw-semibold">$22,490.00</span>
													<p className="mb-0 fs-12  text-muted">Invested</p>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6 col-6">
											<div className="d-sm-flex align-items-center flex-wrap">
												<div className="me-sm-2 mb-2 mb-sm-0">
													<div className="avatar bg-primary-transparent tx-primary br-5">
														<i className="ti ti-corner-up-right-double fs-20"></i>
													</div>
												</div>
												<div className="flex-1">
													<span className="text-md mb-1  fw-semibold">$22,490.00</span>
													<p className="mb-0 fs-12  text-muted">Expenses</p>
												</div>
											</div>
										</div>
									</div>
									<div className="d-flex">
										<Link to="#" className="btn btn-secondary flex-1 me-2"><i className="ti ti-arrow-bar-to-down fs-16 me-2 d-inline-flex"></i>Withdraw Money</Link>
										<Link to="#" className="btn btn-primary flex-1"><i className="ti ti-send fs-16 me-2 d-inline-flex"></i>Deposit Money</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="card custom-card">

								<Card.Header className="card-header justify-content-between">
									<Card.Title className="card-title">Prediction Meter</Card.Title>

									<Select name="state" options={Selectdata1} className="w-6 js-example-placeholder-multiple w-full js-states" defaultValue={[Selectdata1[0]]}
										menuPlacement='auto' classNamePrefix="Select2" isSearchable
									/>
								</Card.Header>
								<Card.Body>
									<div className="row align-items-center">
										<div className="col-xxl-6">
											<div id="trademeter">
												<Trademeter />
											</div>
										</div>
										<div className="col-xxl-6">
											<div className="d-flex align-items-center mb-3">
												<div className="flex-1 d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-xs rounded-circle bg-success-transparent"><i className="ti ti-bolt fs-14"></i></span>
													</div>
													<span>Sell</span>
												</div>
												<div className="text-end">
													<span className="badge bg-success-transparent badge-sm">0 - 45</span>
												</div>
											</div>
											<div className="d-flex align-items-center mb-3">
												<div className="flex-1 d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-xs rounded-circle bg-primary-transparent"><i className="ti ti-activity-heartbeat fs-14"></i></span>
													</div>
													<span>Neutral</span>
												</div>
												<div className="text-end">
													<span className="badge bg-primary-transparent badge-sm">45 - 65</span>
												</div>
											</div>
											<div className="d-flex align-items-center">
												<div className="flex-1 d-flex align-items-center">
													<div className="me-2">
														<span className="avatar avatar-xs rounded-circle bg-secondary-transparent"><i className="ti ti-bolt fs-14"></i></span>
													</div>
													<span>Buy</span>
												</div>
												<div className="text-end">
													<span className="badge bg-secondary-transparent badge-sm">65 Above</span>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header className="justify-content-between">
									<Card.Title>Converter</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn btn-sm btn-primary-light no-caret" data-bs-toggle="dropdown">Euro (€)<i className="ti ti-chevron-down v-middle fs-16 ms-1"></i></Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu fs-13">
											<Dropdown.Item href="#">USD</Dropdown.Item>
											<Dropdown.Item active className=" " href="#">Euro (€)</Dropdown.Item>
											<Dropdown.Item className="" href="#">FJD ($)</Dropdown.Item>
											<Dropdown.Item className="" href="#">INR (₹)</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<Card.Body className=" p-0">
									<div className="d-sm-flex px-4 pt-3 border-top-dashed border-bottom-dashed">
										<p className=" text-muted mb-0 d-inline-flex">Bal Available:<span className="text-primary text-sm ms-1">$25,390.00</span></p>
										<p className=" text-muted mb-0 ms-sm-auto text-end">1 USD:<span className="text-primary text-sm ms-1">	~ 0.000158BTC</span></p>
									</div>
									<div className="p-4">
										<div className="form-group mb-3">
											<div className="input-group">
												<span className="input-group-text">Pay</span>
												<input className="form-control" type="number" defaultValue="0.0329" placeholder="Emount of coins" />
												<span className="input-group-text p-0 crypto-buy-sell   border-0">

													<Select name="state" options={Selectdata1} className="w-6 js-example-placeholder-multiple w-full js-states" placeholder="BTC" isSearchable
														menuPlacement='auto' classNamePrefix="Select2"
													/>
												</span>
											</div>
											<Link aria-label="anchor" to="#" className="d-block btn btn-secondary-light btn-icon btn-sm mx-auto my-3"><i className="ti ti-arrows-down-up"></i></Link>
											<div className="input-group">
												<span className="input-group-text">Buy</span>
												<input className="form-control" type="number" defaultValue="0.00378" placeholder="Emount you get" />
												<span className="input-group-text p-0  crypto-buy-sell  border-0">

													<Select name="state" options={Selectdata1} className="w-6 js-example-placeholder-multiple w-full js-states" placeholder="BTC"
														menuPlacement='auto' classNamePrefix="Select2" isSearchable
													/>
												</span>
											</div>
										</div>
										<div className="p-3 rounded-1 bd-gray-100 mb-3">
											<Row>
												<div className="col-xl-6 mb-2">
													<span>Transaction Fee</span>
												</div>
												<div className="col-xl-6 mb-2">
													<span className="float-end">$2.05</span>
												</div>
												<div className="col-xl-6 mb-2">
													<span>Other Charges</span>
												</div>
												<div className="col-xl-6 mb-2">
													<span className="float-end">$7.73</span>
												</div>
												<div className="col-xl-6">
													<span className="fw-semibold text-md">Total</span>
												</div>
												<div className="col-xl-6">
													<span className="float-end fw-semibold text-md">$34,798.00</span>
												</div>
											</Row>
										</div>
										<div className="d-grid">
											<Link to="#" className="btn btn-primary btn-wave waves-effect d-inline-flex justify-content-center">Exchange
												<i className="ti ti-arrow-narrow-right v-middle fs-16 ms-2"></i></Link>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</div>
				</Col>
				<div className="col-xl-8">
					<div className="row row-deck">
						<Col xl={12}>
							<Card className="card custom-card">
								<Card.Header className="card-header flex-between">
									<h6 className="card-title">Statistics</h6>
									<div className="btn-group">
										<Link to="#" className="btn btn-sm btn-primary-light">1H</Link>
										<Link to="#" className="btn btn-sm btn-primary-light">6H</Link>
										<Link to="#" className="btn btn-sm btn-primary-light">12H</Link>
										<Link to="#" className="btn btn-sm btn-primary">1D</Link>
									</div>
								</Card.Header>
								<div className="card-body p-0">
									<div className="px-4 py-3 flex-wrap border-top-dashed border-bottom-dashed d-sm-flex justify-content-between">
										<div className="me-1 min-w-fit-content">
											<span className="text-lg fw-semibold ">$18,589.00</span>
											<span className="ms-2 badge bg-success rounded-pill">+12.6%</span>
											<div className="input-group mt-1 crypto-buy-sell">
												<input type="text" className="form-control crypto-buy-sell-input flex-none" aria-label="crypto buy select" placeholder="Select Currency" />

												<Select name="state" options={Selectdata1} className="w-6 js-example-placeholder-multiple w-full js-states" defaultValue={[Selectdata1[0]]}
													menuPlacement='auto' classNamePrefix="Select2" isSearchable
												/>
											</div>
										</div>
										<div className="d-flex flex-wrap flex-1 justify-content-end my-auto  mt-3 mt-sm-0">
											<div className="me-4">
												<span className=" text-muted fs-12">Last Price</span>
												<p className="mb-0 text-sm  fw-semibold">$12,577.58</p>
											</div>
											<div className="me-4">
												<span className=" text-muted fs-12">24h Volume</span>
												<p className="mb-0 text-sm  fw-semibold">85.45BTC</p>
											</div>
											<div className="me-4">
												<span className=" text-muted fs-12">Open</span>
												<p className="mb-0 text-sm  fw-semibold">42,397.89</p>
											</div>
											<div className="me-4">
												<span className=" text-muted fs-12">High</span>
												<p className="mb-0 text-sm  fw-semibold">99,373.38</p>
											</div>
											<div className="me-0">
												<span className=" text-muted fs-12">Close</span>
												<p className="mb-0 text-sm  fw-semibold">85,158.74</p>
											</div>
										</div>
									</div>
									<div id="marketCap" className="p-4 pt-0">
										<Marketcap />
									</div>
								</div>
							</Card>
						</Col>
						<div className="col-xl-5">
							<Card className="card custom-card">
								<Card.Header className="card-header justify-content-between">
									<Card.Title>Recent Transactions</Card.Title>
									<Link to="#" className="btn btn-primary-light btn-sm"><i className="ti ti-history fs-14 me-2 d-inline-block"></i>Full History</Link>
								</Card.Header>
								<Card.Body>
									<ul className="list-unstyled mb-0">
										<li className="mb-3">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md rounded-circle bg-pink-transparent tx-pink"><i className="ti ti-coin fs-16"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between">
														<span className="fw-semibold">Bought Bitcoin</span>
														<span className="text-pink text-end">-$1,250</span>
													</div>
													<div className="d-flex align-items-start justify-content-between fs-13">
														<span className="text-muted">Success</span>
														<span className=" text-muted text-end">+0.0012BTC</span>
													</div>
												</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md rounded-circle bg-secondary-transparent tx-secondary"><i className="ti ti-coin fs-16"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between">
														<span className="fw-semibold">Bought Bitcoin</span>
														<span className="text-danger text-end">-$1,250</span>
													</div>
													<div className="d-flex align-items-start justify-content-between fs-13">
														<span className="text-muted">Failed</span>
														<span className=" text-muted text-end">+0.0012BTC</span>
													</div>
												</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md rounded-circle bg-warning-transparent"><i className="ti ti-send fs-16"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between">
														<span className="fw-semibold">Sell Bitcoin</span>
														<span className="text-warning text-end">+$12,205</span>
													</div>
													<div className="d-flex align-items-start justify-content-between fs-13">
														<span className="text-muted">Success</span>
														<span className=" text-muted text-end">-0.0015BTC</span>
													</div>
												</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md rounded-circle bg-success-transparent"><i className="ti ti-send fs-16"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between">
														<span className="fw-semibold">Sell Bitcoin</span>
														<span className="text-success text-end">+$12,205</span>
													</div>
													<div className="d-flex align-items-start justify-content-between fs-13">
														<span className="text-muted">Failed</span>
														<span className=" text-muted text-end">-0.0015BTC</span>
													</div>
												</div>
											</div>
										</li>
										<li className="mb-3">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md rounded-circle bg-info-transparent tx-info"><i className="ti ti-user fs-16"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between">
														<span className="fw-semibold">Sent to Afgan Javebi</span>
														<span className="text-info text-end">-$5,152</span>
													</div>
													<div className="d-flex align-items-start justify-content-between fs-13">
														<span className="text-muted">Pending</span>
													</div>
												</div>
											</div>
										</li>
										<li className="">
											<div className="d-flex align-items-center">
												<div className="me-2">
													<span className="avatar avatar-md rounded-circle bg-purple-transparent tx-purple"><i className="ti ti-user fs-16"></i></span>
												</div>
												<div className="flex-1">
													<div className="d-flex align-items-start justify-content-between">
														<span className="fw-semibold">Sent to Arif Maura</span>
														<span className="text-purple text-end">-$4,350</span>
													</div>
													<div className="d-flex align-items-start justify-content-between fs-13">
														<span className="text-muted">Success</span>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</div>
						<div className="col-xl-7">
							<Card className="card custom-card overflow-hidden">
								<Card.Header className="card-header justify-content-between">
									<Card.Title>
										Your Assets
									</Card.Title>
									<Dropdown>
										<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu role="menu">
											<Dropdown.Item className="" href="#">Today</Dropdown.Item>
											<Dropdown.Item className="" href="#">This Week</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href="#">Last Week</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Card.Header>
								<div className="card-body p-0">
									<div className="table-responsive">
										<table className="table card-table table-vcenter text-nowrap mb-0">
											<thead>
												<tr>
													<th scope="col">Currency</th>
													<th scope="col">Total</th>
													<th scope="col">Holding</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody className="active-tab">
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div className="lh-1">
																<span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
																	<img src={bitcoin} alt="" />
																</span>
															</div>
															<div className="align-items-center">
																<span className="fs-12">Bitcoin</span>
																<p className="mb-0 text-muted fs-12">(0.0092312)</p>
															</div>
														</div>
													</td>
													<td>
														<span>$1,11,290</span>
													</td>
													<td>
														<span>1.00089BTC</span>
													</td>
													<td className="">
														<Link to="#" className="btn btn-secondary btn-sm me-1">Buy</Link>
														<Link to="#" className="btn btn-primary btn-sm">Sell</Link>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div className="lh-1">
																<span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
																	<img src={ethereum} alt="" />
																</span>
															</div>
															<div className="align-items-center">
																<span className="fs-12">Etherium </span>
																<p className="mb-0 text-muted fs-12">(0.9207702)</p>
															</div>
														</div>
													</td>
													<td>
														<span>$43,11,290</span>
													</td>
													<td>
														<span>1.00089ETH</span>
													</td>
													<td className="">
														<Link to="#" className="btn btn-secondary btn-sm me-1">Buy</Link>
														<Link to="#" className="btn btn-primary btn-sm">Sell</Link>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div className="lh-1">
																<span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
																	<img src={dash} alt="" />
																</span>
															</div>
															<div className="align-items-center">
																<span className="fs-12">Dash</span>
																<p className="mb-0 text-muted fs-12">(0.83092333)</p>
															</div>
														</div>
													</td>
													<td>
														<span>$6,11,290</span>
													</td>
													<td>
														<span>1.00089DAH</span>
													</td>
													<td className="">
														<Link to="#" className="btn btn-secondary btn-sm me-1">Buy</Link>
														<Link to="#" className="btn btn-primary btn-sm">Sell</Link>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div className="lh-1">
																<span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
																	<img src={euro} alt="" />
																</span>
															</div>
															<div className="align-items-center">
																<span className="fs-12">Euro</span>
																<p className="mb-0 text-muted fs-12">(0.0092363)<span className="text-muted"></span></p>
															</div>
														</div>
													</td>
													<td>
														<span>$93,11,290</span>
													</td>
													<td>
														<span>1.00089EUR</span>
													</td>
													<td className="">
														<Link to="#" className="btn btn-secondary btn-sm me-1">Buy</Link>
														<Link to="#" className="btn btn-primary btn-sm">Sell</Link>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div className="lh-1">
																<span className="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
																	<img src={litecoin} alt="" />
																</span>
															</div>
															<div className="align-items-center">
																<span className="fs-12 text-muted">Litecoin</span>
																<p className="mb-0 text-muted fs-12">(1.00009023)</p>
															</div>
														</div>
													</td>
													<td>
														<span>$7,11,290</span>
													</td>
													<td>
														<span>1.00089LIT</span>
													</td>
													<td className="">
														<Link to="#" className="btn btn-secondary btn-sm me-1">Buy</Link>
														<Link to="#" className="btn btn-primary btn-sm">Sell</Link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header className="card-header justify-content-between flex-wrap">
							<Card.Title>
								Crypto currencies Market Value
							</Card.Title>
							<div className="btn-group" role="group" aria-label="Basic example">
								<Button variant='primary' type="button" className="btn btn-primary btn-sm btn-wave">1D</Button>
								<Button variant='primary-light' type="button" className="btn btn-sm btn-wave">1W</Button>
								<Button variant='primary-light' type="button" className="btn btn-sm btn-wave">1M</Button>
								<Button variant='primary-light' type="button" className="btn btn-sm btn-wave">3M</Button>
								<Button variant='primary-light' type="button" className="btn btn-sm btn-wave">6M</Button>
								<Button variant='primary-light' type="button" className="btn btn-sm btn-wave">1Y</Button>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<Table className="table table-hover text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col">S.No</th>
											<th scope="col">Name</th>
											<th scope="col">Price</th>
											<th scope="col">24H Volume</th>
											<th scope="col">MarketCap</th>
											<th scope="col">Price Graph</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>
												<div className="lh-1 d-flex align-items-center">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={bitcoin} alt="" />
													</span> - BTC
												</div>
											</td>
											<td>
												$16,839.10
											</td>
											<td className="">
												<span className="badge badge-sm bg-success-transparent rounded-pill">+12.02%</span>
											</td>
											<td>
												14,674,311,168
											</td>
											<td>
												<div id="bitcoin-price-graph">
													<BTC />
												</div>
											</td>
											<td className="">
												<div className="btn-list">
													<Link to="#" className="btn btn-primary-light btn-sm me-1">Buy</Link>
													<Link to="#" className="btn btn-secondary-light btn-sm">Trade</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td>
												<div className="lh-1 d-flex align-items-center">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={ethereum} alt="" />
													</span> - ETH
												</div>
											</td>
											<td>
												1,217.96
											</td>
											<td className="">
												<span className="badge badge-sm bg-success-transparent rounded-pill">+142.05%</span>
											</td>
											<td>
												$4,758,554,801
											</td>
											<td>
												<div id="etherium-price-graph">
													<ETC />
												</div>
											</td>
											<td className="">
												<div className="btn-list">
													<Link to="#" className="btn btn-primary-light btn-sm me-1">Buy</Link>
													<Link to="#" className="btn btn-secondary-light btn-sm">Trade</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>3</td>
											<td>
												<div className="lh-1 d-flex align-items-center">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={dash} alt="" />
													</span> - DASH
												</div>
											</td>
											<td>
												$43.49
											</td>
											<td className="">
												<span className="badge badge-sm bg-success-transparent rounded-pill">+712.02%</span>
											</td>
											<td className="">
												54,758,554,801
											</td>
											<td>
												<div id="dash-price-graph">
													<DTC />
												</div>
											</td>
											<td className="">
												<div className="btn-list">
													<Link to="#" className="btn btn-primary-light btn-sm me-1">Buy</Link>
													<Link to="#" className="btn btn-secondary-light btn-sm">Trade</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>4</td>
											<td>
												<div className="lh-1 d-flex align-items-center">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={ripple} alt="" />
													</span> - XRP
												</div>
											</td>
											<td>
												$0.3531
											</td>
											<td className="">
												<span className="badge badge-sm bg-danger-transparent rounded-pill">+12.02%</span>
											</td>
											<td>
												$511,598,941
											</td>
											<td>
												<div id="ripple-price-graph">
													<XRP />
												</div>
											</td>
											<td className="">
												<div className="btn-list">
													<Link to="#" className="btn btn-primary-light btn-sm me-1">Buy</Link>
													<Link to="#" className="btn btn-secondary-light btn-sm">Trade</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>5</td>
											<td>
												<div className="lh-1 d-flex align-items-center">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={iota} alt="" />
													</span> - IOTA
												</div>
											</td>
											<td>
												$0.169741
											</td>
											<td className="">
												<span className="badge badge-sm bg-success-transparent rounded-pill">+542.02%</span>
											</td>
											<td>
												$5,524,385
											</td>
											<td>
												<div id="iota-price-graph">
													<IOTA />
												</div>
											</td>
											<td className="">
												<div className="btn-list">
													<Link to="#" className="btn btn-primary-light btn-sm me-1">Buy</Link>
													<Link to="#" className="btn btn-secondary-light btn-sm">Trade</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>6</td>
											<td>
												<div className="lh-1 d-flex align-items-center">
													<span className="avatar avatar-xs avatar-rounded">
														<img src={neo} alt="" />
													</span> - NEO
												</div>
											</td>
											<td>
												$6.43
											</td>
											<td className="">
												<span className="badge badge-sm bg-danger-transparent rounded-pill">+12.02%</span>
											</td>
											<td>
												$12,904,320
											</td>
											<td>
												<div id="neo-price-graph">
													<NEO />
												</div>
											</td>
											<td className="">
												<div className="btn-list">
													<Link to="#" className="btn btn-primary-light btn-sm me-1">Buy</Link>
													<Link to="#" className="btn btn-secondary-light btn-sm">Trade</Link>
												</div>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex align-items-center">
								<div>
									Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
								</div>
								<div className="ms-auto">
									<nav aria-label="Page navigation" className="pagination-style-4">
										<Pagination as="ul" className="pagination mb-0">
											<Pagination.Item disabled className="" href="#">
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

export default Crypto;
