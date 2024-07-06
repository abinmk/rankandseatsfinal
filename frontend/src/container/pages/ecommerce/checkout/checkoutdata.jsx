
import React from "react";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";

//IMAGES
import png3 from "../../../../assets/images/ecommerce/png/3.png";
import png5 from "../../../../assets/images/ecommerce/png/5.png";
import png11 from "../../../../assets/images/ecommerce/png/11.png";
import png24 from "../../../../assets/images/ecommerce/png/24.png";
import card1 from "../../../../assets/images/payment-cards/1.png";
import card3 from "../../../../assets/images/payment-cards/3.png";
import card4 from "../../../../assets/images/payment-cards/4.png";
import card5 from "../../../../assets/images/payment-cards/5.png";
import { Link } from "react-router-dom";

//Basic start
const Wizard = ({ step: currentIndex, ...props }) => {
	const steps = React.Children.toArray(props.children);
	const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
	const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

	return (
		<div>

			<nav className="btn-group steps basicsteps d-md-flex d-block">
				{steps.map((step, index) => (
					<Button key={Math.random()} onClick={() => props.onChange(index)} className={getClsNavBtn(index === currentIndex)}>
						{step.props.title}
					</Button>
				))}
			</nav>

			{steps[currentIndex]}

			<div className=" p-3 d-flex justify-content-between ">
				<Button
					visible={prevStep}
					onClick={() => props.onChange(currentIndex - 1)}
					title={prevStep.description}
					className="ti-btn btn btn-primary me-2"
				>
					Back
				</Button>
				<Button
					visible={nextStep}
					onClick={() => props.onChange(currentIndex + 1)}
					title={nextStep.description}
					className="ti-btn btn btn-primary"
				>
					Next
				</Button>
			</div>
		</div>
	);
};
const Step = ({ children }) => children;

function getClsNavBtn(active) {
	return "btn" + (active ? " active" : "");
}
function Button({ visible, ...props }) {
	return (

		<button
			className={visible ? "btn btn-primary " : "invisible"}
			{...props}
		/>

	);
}

export class Basicwizard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			step: 0,
		};
	}

	openModal = () => {
		this.setState({ showModal: true });
	};

	closeModal = () => {
		this.setState({ showModal: false });
	};

	handleStep = (step) => {
		this.setState({ step });
	};
	render() {

		return (
			<Wizard step={this.state.step} onChange={this.handleStep}>
				<Step title={<><i className="ri-truck-line basicstep-icon"></i> Shipping</>} number="1">
					<section className="Basicwizard ">
						<div className="p-4">
							<p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
							<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
								<div>Shipping Address :</div>
								<div className="mt-sm-0 mt-2">
									<Button
										aria-label="button"
										type="button"
										className="btn btn-primary btn-sm"
										data-bs-toggle="modal"
										data-bs-target="#modal-new-address"
										onClick={this.openModal}
									>
										<i className="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add New Address
									</Button>
									<Modal
										centered
										size="lg"
										className="modal fade"
										show={this.state.showModal}
										onHide={this.closeModal}
										id="modal-new-address"
										tabIndex={-1}
										aria-labelledby="modal-new-address"
										aria-hidden="true"
									>
										<Modal.Header className="" closeButton>
											<h6 className="modal-title" id="staticBackdropLabel">New Address
											</h6>
										</Modal.Header>
										<Modal.Body className="">
											<div className="row gy-3">
												<Col xl={6}>
													<Form.Label htmlFor="fullname-new">Full Name</Form.Label>
													<Form.Control type="text" id="fullname-new" placeholder="Full Name" />
												</Col>
												<Col xl={6}>
													<Form.Label htmlFor="email-new">Email</Form.Label>
													<Form.Control type="email" id="email-new" placeholder="email" />
												</Col>
												<Col xl={6}>
													<Form.Label htmlFor="phonenumber-new">Phone Number</Form.Label>
													<Form.Control type="number" id="phonenumber-new" placeholder="Phone" />
												</Col>
												<Col xl={6}>
													<Form.Label htmlFor="address-new">Address</Form.Label>
													<Form.Control type="text" id="address-new" placeholder="Address" />
												</Col>
												<Col xl={12}>
													<Row>
														<Col xl={6}>
															<Form.Label htmlFor="pincode-new" className="form-label">Pincode</Form.Label>
															<Form.Control type="number" id="pincode-new" placeholder="Pincode" />
														</Col>
														<Col xl={6}>
															<Form.Label htmlFor="city-new" className="form-label">City</Form.Label>
															<Form.Control type="text" id="city-new" placeholder="City" />
														</Col>
														<Col xl={6}>
															<Form.Label htmlFor="state-new" className="form-label">State</Form.Label>
															<Form.Control type="text" id="state-new" placeholder="State" />
														</Col>
														<Col xl={6}>
															<Form.Label htmlFor="country-new" className="form-label">Country</Form.Label>
															<Form.Control type="text" id="country-new" placeholder="Country" />
														</Col>
													</Row>
												</Col>
											</div>
										</Modal.Body>
										<Modal.Footer className="modal-footer">
											<button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={this.closeModal}>Close</button>
											<button type="button" className="btn btn-success">Save
												Address</button>
										</Modal.Footer>
									</Modal>
								</div>
							</div>
							<div className="row gy-4 mb-4">
								<Col xl={6}>
									<div className="form-floating">
										<input type="text" className="form-control" id="fullname-add" defaultValue="Json Taylor" placeholder="Name" />
										<label htmlFor="fullname-add">Full Name</label>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-floating">
										<input type="email" className="form-control" id="email-add" defaultValue="jsontaylor2413@gmail.com" placeholder="name@example.com" />
										<label htmlFor="email-add">Email</label>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-floating">
										<input type="email" className="form-control is-valid" id="phoneno-add" defaultValue="(555) 555-1234" placeholder="1234-XX-XXXX" />
										<label htmlFor="phoneno-add">Phone No</label>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-floating">
										<Form.Control as="textarea" placeholder="Address Here" id="address-add"
											defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA"></Form.Control>
										<label htmlFor="address-add">Address</label>
									</div>
									<div className="form-check mt-1">
										<input className="form-check-input form-checked-outline form-checked-success" type="checkbox" defaultValue="" id="invalidCheck" required defaultChecked />
										<label className="form-check-label text-success" htmlFor="invalidCheck">
											Same as Billing Address ?
										</label>
									</div>
								</Col>
								<Col xl={12}>
									<div className="row gy-2">
										<div className="col-xl-3">
											<div className="form-floating">
												<input type="text" className="form-control is-valid" id="pincode-add" defaultValue="20071" placeholder="Name" />
												<label htmlFor="pincode-add">Pin Code</label>
											</div>
										</div>
										<div className="col-xl-3">
											<div className="form-floating">
												<Form.Control type="text" className="form-control" id="city-add" defaultValue="Georgetown" placeholder="Name" />
												<label htmlFor="city-add">City</label>
											</div>
										</div>
										<div className="col-xl-3">
											<div className="form-floating">
												<Form.Control type="text" className="form-control" id="state-add" defaultValue="Washington, D.C" placeholder="Name" />
												<label htmlFor="state-add">State</label>
											</div>
										</div>
										<div className="col-xl-3">
											<div className="form-floating">
												<Form.Control type="text" className="form-control" id="country-add" defaultValue="USA" placeholder="Name" />
												<label htmlFor="country-add">Country</label>
											</div>
										</div>
									</div>
								</Col>
							</div>
							<div className="row gy-3">
								<p className="fs-15 fw-semibold mb-1">Shipping Methods :</p>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input" defaultChecked />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">UPS</p>
													<p className="text-muted fs-11 mb-0">Delivered By 24,Nov</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$9.99
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input" />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">USPS</p>
													<p className="text-muted fs-11 mb-0">Delivered By 22,Nov</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$10.49
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method3" name="shipping-methods" type="radio" className="form-check-input" />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">FedEx</p>
													<p className="text-muted fs-11 mb-0">Delivered Tomorrow</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$12.29
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col xl={6}>
									<div className="form-check shipping-method-container mb-0">
										<input id="shipping-method4" name="shipping-methods" type="radio" className="form-check-input" />
										<div className="form-check-label">
											<div className="d-sm-flex align-items-center justify-content-between">
												<div className="shipping-partner-details me-sm-5 me-0">
													<p className="mb-0 fw-semibold">DHL</p>
													<p className="text-muted fs-11 mb-0">Delivered Today</p>
												</div>
												<div className="fw-semibold me-sm-5 me-0">
													$18.99
												</div>
											</div>
										</div>
									</div>
								</Col>
							</div>
						</div>
					</section>
				</Step>

				<Step title={<><i className="ri-user-3-line basicstep-icon"></i> PersonalDetails </>} number="2">
					<section className="card-body Basicwizard p-0 ">
						<div className="p-4">
							<p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
							<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
								<div>Order Summary :</div>
							</div>
							<ul className="list-group mb-0 border-0 rounded-0">
								<li className="list-group-item  border-bottom border-block-end-dashed">
									<div className="d-flex align-items-start flex-wrap">
										<div className="me-2">
											<span className="avatar avatar-xxl bd-gray-200">
												<img src={png3} alt="" />
											</span>
										</div>
										<div className="flex-fill">
											<p className="mb-0 fw-semibold  fs-15 me-2">Green color money plant with pot</p>
											<p className="mb-0 fs-14 fw-semibold">$189<span className="ms-1 text-muted fs-11 d-inline-block"><s>$987</s></span></p>
											<p className="mb-0 text-muted fs-12">Quantity : 1  <span className="badge bg-success-transparent ms-3">50% Off</span></p>
										</div>
										<div>
											<p className="mb-0 text-end">
												<Link aria-label="anchor" to="#">
													<i className="ri-close-line fs-15 text-danger bg-danger-transparent rounded-1"></i>
												</Link>
											</p>
										</div>
									</div>
								</li>
								<li className="list-group-item  border-bottom border-block-end-dashed">
									<div className="d-flex align-items-start flex-wrap">
										<div className="me-2">
											<span className="avatar avatar-xxl bd-gray-200">
												<img src={png11} alt="" />
											</span>
										</div>
										<div className="flex-fill">
											<p className="mb-0 fw-semibold  fs-15 me-2">Cactus plants with gray color pot </p>
											<p className="mb-0 fs-14 fw-semibold">$129<span className="ms-1 text-muted fs-11 d-inline-block"><s>$198</s></span></p>
											<p className="mb-0 text-muted fs-12">Quantity : 2  <span className="badge bg-success-transparent ms-3">30% Off</span></p>
										</div>
										<div>
											<p className="mb-0 text-end">
												<Link aria-label="anchor" to="#">
													<i className="ri-close-line fs-15 text-danger bg-danger-transparent rounded-1"></i>
												</Link>
											</p>
										</div>
									</div>
								</li>
								<li className="list-group-item  border-bottom">
									<div className="d-flex align-items-start flex-wrap">
										<div className="me-2">
											<span className="avatar avatar-xxl bd-gray-200">
												<img src={png5} alt="" />
											</span>
										</div>
										<div className="flex-fill">
											<p className="mb-0 fw-semibold fs-15 me-2">Combo Cactus plants with color pots</p>
											<p className="mb-0 fs-14 fw-semibold">$329<span className="ms-1 text-muted fs-11 d-inline-block"><s>$50</s></span></p>
											<p className="mb-0 text-muted fs-12">Quantity : 4  <span className="badge bg-success-transparent ms-3">70% Off</span></p>
										</div>
										<div>
											<p className="mb-0 text-end">
												<Link aria-label="anchor" to="#">
													<i className="ri-close-line fs-15 text-danger bg-danger-transparent rounded-1"></i>
												</Link>
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</section>
				</Step>
				<Step title={<><i className="ri-bank-card-line basicstep-icon"></i> Payment  </>} number="3">
					<section className="card-body Basicwizard p-0 ">
						<div className="p-4">
							<p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
							<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
								<div>Payment Details :</div>
							</div>
							<Row>
								<Col xl={12}>
									<div className="mb-3">
										<Form.Label className="form-label">Delivery Address</Form.Label>
										<div className="input-group">
											<input type="text" className="form-control" placeholder="Address" aria-label="address" aria-describedby="payment-address" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA" />
											<button type="button" className="btn btn-info-light input-group-text" id="payment-address">Change</button>
										</div>
									</div>
									<div className="card custom-card border shadow-none mb-3">
										<div className="card-header">
											<div className="card-title">
												Payment Methods
											</div>
										</div>
										<div className="card-body">
											<div className="btn-group mb-3 d-sm-flex d-block" role="group" aria-label="Basic radio toggle button group">
												<input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
												<label className="btn btn-outline-light text-default" htmlFor="btnradio1">C.O.D(Cash on delivery)</label>
												<input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
												<label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio2">UPI</label>
												<input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
												<label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</label>
											</div>
											<div className="row gy-3">
												<Col xl={12}>
													<Form.Label htmlFor="payment-card-number" className="form-label">Card Number</Form.Label>
													<Form.Control type="text" className="" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
												</Col>
												<Col xl={12}>
													<Form.Label htmlFor="payment-card-name" className="form-label">Name On Card</Form.Label>
													<Form.Control type="text" className="" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
												</Col>
												<Col xl={4}>
													<Form.Label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</Form.Label>
													<Form.Control type="text" className="" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
												</Col>
												<Col xl={4}>
													<Form.Label htmlFor="payment-cvv" className="form-label">CVV</Form.Label>
													<Form.Control type="text" className="" id="payment-cvv" placeholder="XXX" defaultValue="341" />
												</Col>
												<Col xl={4}>
													<Form.Label htmlFor="payment-security" className="form-label">O.T.P</Form.Label>
													<Form.Control type="text" className="" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
													<label htmlFor="payment-security" className="form-label mt-1 text-success fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
												</Col>
												<Col xl={12}>
													<div className="form-check">
														<input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
														<label className="form-check-label" htmlFor="payment-card-save">
															Save this card
														</label>
													</div>
												</Col>
											</div>
										</div>
										<Card.Footer>
											<div className="row gy-3">
												<p className="fs-15 fw-semibold mb-1">Other Cards :</p>
												<Col md={3} sm={6}>
													<div className="form-check payment-card-container mb-0 lh-1">
														<input id="payment-card1" name="payment-cards" type="radio" className="form-check-input" defaultChecked />
														<div className="form-check-label">
															<div className="d-sm-flex d-block align-items-center justify-content-between">
																<div className="me-2 lh-1">
																	<img src={card1} alt="" className="avatar avatar-lg" />
																</div>
															</div>
														</div>
													</div>
												</Col>
												<Col md={3} sm={6}>
													<div className="form-check payment-card-container mb-0 lh-1">
														<input id="payment-card2" name="payment-cards" type="radio" className="form-check-input" />
														<div className="form-check-label">
															<div className="d-sm-flex d-block align-items-center justify-content-between">
																<div className="me-2 lh-1">
																	<img src={card3} alt=" " className="avatar avatar-lg" />
																</div>
															</div>
														</div>
													</div>
												</Col>
												<Col md={3} sm={6}>
													<div className="form-check payment-card-container mb-0 lh-1">
														<input name="payment-cards" type="radio" className="form-check-input" />
														<div className="form-check-label">
															<div className="d-sm-flex d-block align-items-center justify-content-between">
																<div className="me-2 lh-1">
																	<img src={card4} alt="" className="avatar avatar-lg" />
																</div>
															</div>
														</div>
													</div>
												</Col>
												<Col md={3} sm={6}>
													<div className="form-check payment-card-container mb-0 lh-1">
														<input name="payment-cards" type="radio" className="form-check-input" />
														<div className="form-check-label">
															<div className="d-sm-flex d-block align-items-center justify-content-between">
																<div className="me-2 lh-1">
																	<img src={card5} alt="" className="avatar avatar-lg" />
																</div>
															</div>
														</div>
													</div>
												</Col>
											</div>
										</Card.Footer>
									</div>
								</Col>
							</Row>
						</div>

					</section>
				</Step>
				<Step title={<><i className="ri-checkbox-circle-line basicstep-icon"></i> Confirmation  </>} number="4">
					<section className="card-body Basicwizard ">
						<div className="p-sm-5 checkout-payment-success my-3">
							<div className="mb-5">
								<h5 className="text-success fw-semibold">Payment Successful... &#128522;</h5>
							</div>
							<div className="mb-5">
								<img src={png24} alt="" />
							</div>
							<div className="mb-4">
								<p className="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from <Link className="link-success" to="#"><u>Track Order</u></Link></p>
								<p className="text-muted">Thankyou for shopping with us.</p>
							</div>
							<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-success">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
						</div>
					</section>
				</Step>
			</Wizard>
		);
	}
}
//Basic end
