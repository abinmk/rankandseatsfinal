import React, { FC, Fragment } from "react";
import { Card, Col, Pagination, Row, Table } from "react-bootstrap";
import { Productlistloopdata } from "./productlistdata";
import { Link } from "react-router-dom";

const Productlist = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card className="card custom-card">
						<Card.Header>
							<Card.Title>
								Products List
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive mb-4">
								<Table className="table text-nowrap table-bordered">
									<thead>
										<tr>
											<th scope="col">
												<input className="form-check-input" type="checkbox" id="all-products" value="" aria-label="..." />
											</th>
											<th scope="col">Product</th>
											<th scope="col">Product Id</th>
											<th scope="col">Category</th>
											<th scope="col">Price</th>
											<th scope="col">Seller</th>
											<th scope="col">Stock</th>
											<th scope="col">Gender</th>
											<th scope="col">Published</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										{Productlistloopdata.map((idx) => (
											<tr key={Math.random()}>
												<td><input className="form-check-input" type="checkbox" id="product1" value="" aria-label="..." /></td>
												<td>
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-md bg-light p-1">
																<img src={idx.src} alt="" />
															</span>
														</div>
														<div className="fw-semibold">
															{idx.title}
														</div>
													</div>
												</td>
												<td>
													<span className="text-primary fs-12">{idx.productid}</span>
												</td>
												<td>
													<span className={`badge  bg-${idx.color1}-transparent`}>{idx.category}</span>
												</td>
												<td>{idx.price}</td>
												<td>{idx.seller}</td>
												<td>
													<span className={`badge bg-${idx.color2}-transparent`}>{idx.stock}</span>
												</td>
												<td>{idx.gender}</td>
												<td>{idx.date}</td>
												<td>
													<div className="hstack gap-2 fs-15">
														<Link to="#" className="btn btn-icon btn-sm btn-info-light"><i className="ri-edit-line"></i></Link>
														<Link to="#" className="btn btn-icon btn-sm btn-danger-light"><i className="ri-delete-bin-line"></i></Link>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
							<div className="d-flex align-items-center justify-content-between flex-wrap">
								<nav aria-label="...">
									<Pagination className="mb-0">
										<Pagination.Item disabled href="#">Previous </Pagination.Item>
										<Pagination.Item href="#">1</Pagination.Item>
										<Pagination.Item active href="#">2</Pagination.Item>
										<Pagination.Item href="#">3</Pagination.Item>
										<Pagination.Item href="#">next </Pagination.Item>
									</Pagination>
								</nav>
								<button className="btn btn-danger btn-wave m-1">Delete All</button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
export default Productlist;
