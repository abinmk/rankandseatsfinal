import React, { FC, useState } from "react";
import { Card, Col, Form, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Maindata } from "../products/productsdata";
import { Link } from "react-router-dom";
import { AddToCart, ProductReduxData } from "../../../../redux/action";
import Swal from "sweetalert2";

const Wishlist = () => {
	//search function
	const [allData, setAllData] = useState(Maindata);
	const allElement2 = [];
	const myfunction = (InputData) => {
		let allElement;
		for (allElement of allData) {
			if (allElement.title[0] == " ") {
				allElement.title = allElement.title.trim();
			}
			if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}

		}
		setAllData(allElement2);
	};

	function handleDelete(id) {
		// Display a confirmation popup
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {
				// User clicked "Yes, delete it!" button
				const updatedInvoiceData = allData.filter((idx) => idx.id.toString() !== id);
				setAllData(updatedInvoiceData);
				Swal.fire("Deleted!", "Your data has been deleted.", "success");
			}
		});
	}
	return (
		<>

			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Body className="d-sm-flex align-items-center justify-content-between">
							<div className="fs-15 mb-sm-0 mb-2">Total <span className="badge bg-success">12</span> products are wishlisted</div>
							<div className="d-flex" role="search">
								<Form.Control className="form-control form-control-sm me-2" type="search" onChange={(ele) => { myfunction(ele.target.value); }} placeholder="Search" aria-label="Search" />
								<button className="btn btn-sm btn-light" type="submit">Search</button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{allData.map((idx) => (
					<Col xxl={4} xl={6} lg={12} md={12} sm={12} key={Math.random()}>
						<Card className="custom-card product-card">
							<Card.Body className="d-sm-flex align-items-center flex-wrap">
								<a href={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`} className="whishlist-image mb-2">
									<img src={idx.preview} className="card-img" alt="..." />
								</a>
								<div className="product-icons">
									<Link aria-label="anchor" to="#" onClick={() => handleDelete(idx.id)} className="wishlist btn-delete"><i className="ri-close-line"></i></Link>
								</div>
								<div className="ms-3 mt-2 mt-sm-0">
									<h5 className="product-name fs-16 fw-semibold mb-0 align-items-center">{idx.title}</h5>
									<p className="product-description fs-13 text-muted mb-0">{idx.description}</p>
									<h4 className="mb-1 fw-semibold"><span>{idx.newpr}<span className="text-muted text-decoration-line-through ms-1  fs-14 op-6">{idx.oldpr}</span></span></h4>
									<p className={`badge bg-${idx.color}-transparent fs-11 rounded-1 mb-0 me-1`}>{idx.offerprice}</p>
									<span className="badge bg-warning-transparent rounded-1 me-1">4.2 <i className="ri-star-s-fill align-middle  d-inline-block"></i>
									</span>
									<span className="text-muted">({idx.quantity})</span>
									<p className="fs-11 text-success fw-semibold mb-0 align-items-center">
										{idx.text}
									</p>
									<div className="mt-2">
										<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="d-inline-flex btn btn-sm btn-info-light me-2 mb-1" onClick={() => { AddToCart(idx.id); }}><i className="ri-shopping-cart-line me-2"></i>Move To Cart</Link>
										<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`} className="d-inline-flex btn btn-sm  btn-success-light mb-1"><i className="ri-eye-line me-2"></i>View Product</Link>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<div className="float-end mb-4">
				<nav aria-label="Page navigation" className="pagination-style-4">
					<Pagination className=" mb-0 gap-2">
						<Pagination.Item disabled>
							Prev
						</Pagination.Item>
						<Pagination.Item active href="#">1</Pagination.Item>
						<Pagination.Item href="#">2</Pagination.Item>
						<Pagination.Item >
							<i className="bi bi-three-dots"></i>
						</Pagination.Item>
						<Pagination.Item href="#">16</Pagination.Item>
						<Pagination.Item className="d-none d-sm-flex" href="#">17</Pagination.Item>
						<Pagination.Item className="text-primary" href="#">
							next
						</Pagination.Item>
					</Pagination>
				</nav>
			</div>

		</>
	);
};
const mapStateToProps = (state) => ({
	local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);
