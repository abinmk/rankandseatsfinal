import React, { FC, Fragment, useEffect, useState } from "react";
import { ItemData1 } from "../products/productsdata";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../../redux/action";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const Cart = ({ local_varaiable }) => {

	const [FiltershopingData, sethopingData] = useState([]);
	const [Price, setPrice] = useState(0);
	// const containerRef = useRef(null);

	useEffect(() => {
		if (local_varaiable.ecommercedata == undefined) {
			sethopingData(ItemData1);
			ItemData1.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}
		else if (local_varaiable.ecommercedata.length == 0) {
			sethopingData(ItemData1);
			ItemData1.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}
		else {
			sethopingData(local_varaiable.ecommercedata);
			local_varaiable.ecommercedata.filter((ele) => {
				setPrice(Number(ele.newprice) + Price);
			});
		}

	}, [local_varaiable.ecommercedata]);

	function handleRemove(id) {
		if (local_varaiable.ecommercedata == undefined) {
			const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
			sethopingData(RemoveData);
		}
		else if (local_varaiable.ecommercedata.length == 0) {
			const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
			sethopingData(RemoveData);
		}
		else {
			const RemoveData = FiltershopingData.filter((ale) => ale.id !== id);
			sethopingData(RemoveData);
		}
	}

	function dec(el) {
		const unit = el.currentTarget.parentElement.querySelector("input").value;

		if (Number(unit) === 0) {
			return false;
		} else {
			el.currentTarget.parentElement.querySelector("input").value--;
		}
	}
	function inc(el) {
		el.currentTarget.parentElement.querySelector("input").value++;

	}
	return (
		<Fragment>
			<div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="row justify-content-center" >
						<div className="col-xxl-8">
							<div className="card custom-card" id="cart-container-Deletee">
								<div className="card-header">
									<div className="card-title">
										Cart Items
									</div>
								</div>
								<div className="card-body p-0">
									{FiltershopingData !== "" ? FiltershopingData.map((idx) => (
										<div className="d-sm-flex align-items-start p-4" key={Math.random()}>
											<div className="d-flex flex-wrap align-items-center">
												<div className="me-3">
													<span className="avatar avatar-xxxl bd-gray-200">
														<img src={idx.preview} alt="" />
													</span>
												</div>
												<div>
													<div className="mb-1">
														<Link to="#" className="fs-15 fw-bold">{idx.title}</Link>
														<span className="badge bg-success-transparent fw-semibold  fs-11 rounded-2 mx-2">72% off</span>
													</div>
													<div className="mb-1">
														<span className="me-1">Size:</span><span className="fw-semibold text-muted">Large</span>
													</div>
													<div className="mb-1">
														<span className="me-1">Color:</span><span className="fw-semibold text-muted">Grey<span className="badge bg-success-transparent ms-3">In Offer</span></span>
													</div>
													<div className="d-flex mb-1">
														<h5 className="mb-1">{idx.newpr}</h5>
														<p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">{idx.oldpr}</p>
													</div>
												</div>
											</div>
											<div className="ms-auto align-items-center">
												<div className="align-items-center">
													<div className="product-quantity-container text-center ">
														<div className="input-group border rounded-1 flex-nowrap">
															<button aria-label="button" type="button" onClick={dec} className="btn btn-sm bg-transparent input-group-text flex-fill border-start-0 border-top-0 border-bottom-0 border-end product-quantity-minus" ><i className="ri-subtract-line"></i></button>
															<input type="text" className="form-control form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity" defaultValue="2" />
															<button aria-label="button" type="button" onClick={inc} className="btn btn-sm bg-transparent input-group-text flex-fill border-end-0 border-top-0 border-bottom-0 border-start product-quantity-plus" ><i className="ri-add-line"></i></button>
														</div>
													</div>
													<div className="">
														<Link to="#" className="btn  btn-sm btn-danger-light fw-semibold mt-2 me-1" onClick={() => { handleRemove(idx.id); }}><i className="d-inline-flex fe fe-trash me-1" ></i>Delete</Link>
														<Link to="#" className="btn  btn-sm btn-info-light fw-semibold mt-2"><i className="d-inline-flex fe fe-heart me-1"></i>Save</Link>
													</div>
												</div>
											</div>

										</div>
									)) : <tr><td>"There is no product available in the Cart"</td></tr>}
									<div className="border-top"></div>
								</div>
								{/* // )) : <tr><td>"There is no product available in the Cart"</td></tr>} */}
							</div>
							<div className="card custom-card d-none" id="cart-empty-cart">
								<div className="card-header">
									<div className="card-title">
										Empty Cart
									</div>
								</div>
								<div className="card-body">
									<div className="cart-empty text-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="svg-muted" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
										<h3 className="fw-bold mb-1">Your Cart is Empty</h3>
										<h5 className="mb-3">Add some items to make me happy :)</h5>
										<a href="#" className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></a>
									</div>
								</div>
							</div>

							<div className="float-end mb-4 ms-auto">
								<nav aria-label="Page navigation" className="pagination-style-4">
									<Pagination className="mb-0 gap-2">
										<Pagination.Item className="page-item disabled">
											<span className="page-link">
												Prev
											</span>
										</Pagination.Item>
										<Pagination.Item className="page-item active"><span className="page-link">1</span></Pagination.Item>
										<Pagination.Item className="page-item"><span className="page-link">2</span></Pagination.Item>
										<Pagination.Item className="page-item">
											<span aria-label="anchor" className="page-link">
												<i className="bi bi-three-dots"></i>
											</span>
										</Pagination.Item>
										<Pagination.Item className="page-item"><span className="page-link">17</span></Pagination.Item>
										<Pagination.Item className="page-item">
											<span className="page-link text-primary">
												next
											</span>
										</Pagination.Item>
									</Pagination>
								</nav>
							</div>
						</div>
						<div className="col-xxl-4">
							<div className="card custom-card">
								<div className="card-header justify-content-between">
									<div className="card-title">
										Have a coupon..?
									</div>
								</div>
								<div className="card-body">
									<div className="">
										<div className="input-group">
											<input type="text" className="form-control form-control-sm" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
											<button type="button" className="btn btn-primary input-group-text" id="coupons">Apply</button>
										</div>
									</div>
								</div>
							</div>
							<div className="card custom-card">
								<div className="card-header justify-content-between">
									<div className="card-title">
										Price Details
									</div>
								</div>
								<div className="card-body p-0">
									<div className="p-4 border-bottom border-block-end-dashed">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted ">Sub Total</div>
											<div className="fw-semibold fs-14">$1,299</div>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted ">Discount</div>
											<div className="fw-semibold fs-14 text-success">10% - $129</div>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted ">Delivery Charges</div>
											<div className="fw-semibold fs-14 text-danger">- $49</div>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="text-muted ">Service Tax (18%)</div>
											<div className="fw-semibold fs-14">- $169</div>
										</div>
									</div>
									<div className=" py-3 px-4">
										<div className="d-flex align-items-center justify-content-between">
											<div className="fw-semibold fs-18 ">Total :</div>
											<div className="fw-semibold fs-18"> $1,387</div>
										</div>

									</div>
									<div className="p-3 border-top text-center">
										<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} className="btn btn-primary m-1">Proceed To Checkout</Link>
										<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-light m-1 ">Continue Shopping</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Cart);
