import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import png1 from "../../../../assets/images/ecommerce/png/1.png";
import png2 from "../../../../assets/images/ecommerce/png/2.png";
import png3 from "../../../../assets/images/ecommerce/png/3.png";
import png4 from "../../../../assets/images/ecommerce/png/4.png";
import png15 from "../../../../assets/images/ecommerce/png/15.png";
import png11 from "../../../../assets/images/ecommerce/png/11.png";
import png16 from "../../../../assets/images/ecommerce/png/16.png";
import png10 from "../../../../assets/images/ecommerce/png/10.png";
import png18 from "../../../../assets/images/ecommerce/png/18.png";

const Orders = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<div className="card-body d-flex align-items-center  flex-xxl-nowrap flex-wrap">
							<div className="flex-fill">
								<span className="mb-0 fs-14 text-muted">Total number of orders placed upto now : <span className="fw-semibold text-success">28</span></span>
							</div>
							<Dropdown className="my-sm-0 my-2">
								<Dropdown.Toggle className="btn btn-light mx-sm-1 mx-0 my-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Sort By
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton1">
									<Dropdown.Item as="li" href="#">Date</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Price</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Category</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<div className="d-flex" role="search">
								<Form.Control type="search" placeholder="Search" aria-label="Search" />
								<Button variant='' className="btn btn-sm btn-light mx-1 my-0" type="submit">Search</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-12031</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-success fs-11 rounded-1">Confirmed</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png1} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Ugaoo self water plants</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											2nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											20-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$1,229</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$1,799</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-info-light">Shop Similar</Link></div>
							<div className="mt-sm-0 mt-2">
								<Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-1233</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-danger fs-11 rounded-1">Cancelled</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png2} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Colored leaf plant with pot</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											3nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											24-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$3,229</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$1,799</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div className="mt-sm-0 mt-2">
								<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-primary-light">Back to Shop</Link>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-1235</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-warning fs-11 rounded-1">Shipped</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png3} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Green color money plant</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											3nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											24-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$2,800</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$1,098</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-info-light">Shop Similar</Link></div>
							<div className="mt-sm-0 mt-2">
								<Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-1236</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-warning fs-11 rounded-1">Shipped</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png4} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Ugoa big leaf plant</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											3nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											25-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$8,800</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$6,098</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-info-light">Shop Similar</Link></div>
							<div className="mt-sm-0 mt-2">
								<Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-12036</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-success fs-11 rounded-1">Confirmed</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png15} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Omega Sports shoes</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											2nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											28-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$1,234</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$880</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-info-light">Shop Similar</Link></div>
							<div className="mt-sm-0 mt-2">
								<Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-12038</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-primary fs-11 rounded-1">Out For Delivery</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png11} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Cactus plant  with gray color pot</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											2nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											30-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$5,234</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$580</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-info-light">Shop Similar</Link></div>
							<div className="mt-sm-0 mt-2">
								<Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-1239</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-danger fs-11 rounded-1">Cancelled</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png16} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Omega Sports shoes</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											3nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											24-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$4,229</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$2,799</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div className="mt-sm-0 mt-2">
								<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-primary-light">Back to Shop</Link>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-120348</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-primary fs-11 rounded-1">Out For Delivery</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png10} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Light lemon color lilly flowers</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											2nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											31-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$4,234</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$280</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-info-light">Shop Similar</Link></div>
							<div className="mt-sm-0 mt-2">
								<Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
					<Card className="custom-card">
						<Card.Header className="d-block">
							<div className="d-sm-flex d-block justify-content-between">
								<div className="">
									<span className="fs-14 fw-semibold">Order Id</span>
									<span className="d-sm-block text-primary">#SPK-12043</span>
								</div>
								<div className="text-sm-end">
									<p className="fs-14 fw-semibold mb-0">Ordered Status</p>
									<span className="badge bg-success fs-11 rounded-1">Confirmed</span>
								</div>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
								<div className="me-3">
									<span className="avatar avatar-xxxl bd-gray-200">
										<img src={png18} alt="" />
									</span>
								</div>
								<div>
									<div className="mb-1 fs-14 fw-semibold">
										<Link to="#">Omega Sports shoes</Link>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
											2nd street,houston texas,united states.</span>
										</p>
									</div>
									<div className="">
										<p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
											31-Jan-2023</span>
										</p>
									</div>
									<div className="d-flex mb-1">
										<h5 className="mb-1">$9,229</h5>
										<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$4,799</p>
									</div>
								</div>
							</div>
						</Card.Body>
						<div className="card-footer d-sm-flex d-block align-items-center justify-content-between">
							<div><Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-sm btn-info-light">Shop Similar</Link></div>
							<div className="mt-sm-0 mt-2">
								<Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
			<div className="float-end mb-4">
				<nav aria-label="Page navigation" className="pagination-style-4">
					<Pagination className="pagination mb-0 gap-2">
						<Pagination.Item disabled>
							Prev
						</Pagination.Item>
						<Pagination.Item active>1</Pagination.Item>
						<Pagination.Item>2</Pagination.Item>
						<Pagination.Item>
							<i className="bi bi-three-dots"></i>
						</Pagination.Item>
						<Pagination.Item>16</Pagination.Item>
						<Pagination.Item className="text-primary">
							next
						</Pagination.Item>
					</Pagination>
				</nav>
			</div>

		</Fragment>
	);
};

export default Orders;
