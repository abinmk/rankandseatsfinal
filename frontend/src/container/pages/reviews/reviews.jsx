import React, { FC, Fragment } from "react";
import { Card, Col } from "react-bootstrap";

import faces1 from "../../../assets/images/faces/1.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces16 from "../../../assets/images/faces/16.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";

const Reviews = () => {
	return (
		<Fragment>
			<div className="container-lg">
				<div className="row justify-content-center ">
					<div className="card border-0 bg-transparent text-fixed-white text-center">
						<h5 className="mb-5 fw-semibold text-fixed-white">Reviews Style-1</h5>
					</div>
					<Col xxl={10} xl={12} lg={12} md={12} sm={12} className="">
						<div className="row gy-4">
							<Col xxl={4} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3">
								<Card className="custom-card">
									<Card.Body>
										<div className="">
											<div className="d-sm-flex d-block align-items-top mb-3">
												<div className="d-flex flex-fill align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src={faces15} alt="" />
														</span>
													</div>
													<div className="lh-1 me-2">
														<p className="mb-1 fw-semibold fs-14">Alex Carey</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
													<span className="badge border bd-gray-200 rounded-1 text-muted">18 hrs ago</span>
												</div>
											</div>
											<div className="mb-3 ps-2">
												<span className="text-muted"><i className="ri-double-quotes-l"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r"></i></span>
											</div>
											<div className="ps-2">
												<a href="#;" className="badge border bg-primary-transparent rounded-1  me-2">
													<i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i><span className=""> 150 </span>
												</a>
												<a href="#;" className="badge border bg-danger-transparent rounded-1 ">
													<i className="ri-thumb-down-line align-bottom me-1 d-inline-flex"></i><span className=""> 10 </span>
												</a>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3">
								<Card className="custom-card">
									<Card.Body>
										<div className="">
											<div className="d-sm-flex d-block align-items-top mb-3">
												<div className="d-flex flex-fill align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src={faces1} alt="" />
														</span>
													</div>
													<div className="lh-1 me-2">
														<p className="mb-1 fw-semibold fs-14">Adom Sharayi</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
													<span className="badge border bd-gray-200 rounded-1 text-muted">5 days ago</span>
												</div>
											</div>
											<div className="mb-3 ps-2">
												<span className="text-muted"><i className="ri-double-quotes-l"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r"></i></span>
											</div>
											<div className="ps-2">
												<a href="#;" className="badge border bg-primary-transparent rounded-1  me-2">
													<i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i><span className=""> 120 </span>
												</a>
												<a href="#;" className="badge border bg-danger-transparent rounded-1 ">
													<i className="ri-thumb-down-line align-bottom me-1 d-inline-flex"></i><span className=""> 30 </span>
												</a>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3">
								<Card className="custom-card">
									<Card.Body>
										<div className="">
											<div className="d-sm-flex d-block align-items-top mb-3">
												<div className="d-flex flex-fill align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src={faces2} alt="" />
														</span>
													</div>
													<div className="lh-1 me-2">
														<p className="mb-1 fw-semibold fs-14">Davide Jonese</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
													<span className="badge border bd-gray-200 rounded-1 text-muted">25 days ago</span>
												</div>
											</div>
											<div className="mb-3 ps-2">
												<span className="text-muted"><i className="ri-double-quotes-l"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r"></i></span>
											</div>
											<div className="ps-2">
												<a href="#;" className="badge border bg-primary-transparent rounded-1  me-2">
													<i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i><span className=""> 140 </span>
												</a>
												<a href="#;" className="badge border bg-danger-transparent rounded-1 ">
													<i className="ri-thumb-down-line align-bottom me-1 d-inline-flex"></i><span className=""> 60 </span>
												</a>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3">
								<Card className="custom-card">
									<Card.Body>
										<div className="">
											<div className="d-sm-flex d-block align-items-top mb-3">
												<div className="d-flex flex-fill align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src={faces6} alt="" />
														</span>
													</div>
													<div className="lh-1 me-2">
														<p className="mb-1 fw-semibold fs-14">Alisaben Avirayi</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
													<span className="badge border bd-gray-200 rounded-1 text-muted">28 day ago</span>
												</div>
											</div>
											<div className="mb-3 ps-2">
												<span className="text-muted"><i className="ri-double-quotes-l"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r"></i></span>
											</div>
											<div className="ps-2">
												<a href="#;" className="badge border bg-primary-transparent rounded-1  me-2">
													<i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i><span className=""> 100 </span>
												</a>
												<a href="#;" className="badge border bg-danger-transparent rounded-1 ">
													<i className="ri-thumb-down-line align-bottom me-1 d-inline-flex"></i><span className=""> 20 </span>
												</a>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3">
								<Card className="custom-card">
									<Card.Body>
										<div className="">
											<div className="d-sm-flex d-block align-items-top mb-3">
												<div className="d-flex flex-fill align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src={faces5} alt="" />
														</span>
													</div>
													<div className="lh-1 me-2">
														<p className="mb-1 fw-semibold fs-14">Karen Vally</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
													<span className="badge border bd-gray-200 rounded-1 text-muted">1 month ago</span>
												</div>
											</div>
											<div className="mb-3 ps-2">
												<span className="text-muted"><i className="ri-double-quotes-l"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r"></i></span>
											</div>
											<div className="ps-2">
												<a href="#;" className="badge border bg-primary-transparent rounded-1  me-2">
													<i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i><span className=""> 200 </span>
												</a>
												<a href="#;" className="badge border bg-danger-transparent rounded-1 ">
													<i className="ri-thumb-down-line align-bottom me-1 d-inline-flex"></i><span className=""> 50 </span>
												</a>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3">
								<Card className="custom-card">
									<Card.Body>
										<div className="">
											<div className="d-sm-flex d-block align-items-top mb-3">
												<div className="d-flex flex-fill align-items-center">
													<div className="me-2">
														<span className="avatar avatar-md avatar-rounded">
															<img src={faces8} alt="" />
														</span>
													</div>
													<div className="lh-1 me-2">
														<p className="mb-1 fw-semibold fs-14">Bollyes vrasu</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
													<span className="badge border bd-gray-200 rounded-1 text-muted">3 months ago</span>
												</div>
											</div>
											<div className="mb-3 ps-2">
												<span className="text-muted"><i className="ri-double-quotes-l"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r"></i></span>
											</div>
											<div className="ps-2">
												<a href="#;" className="badge border bg-primary-transparent rounded-1  me-2">
													<i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i><span className=""> 170 </span>
												</a>
												<a href="#;" className="badge border bg-danger-transparent rounded-1 ">
													<i className="ri-thumb-down-line align-bottom me-1 d-inline-flex"></i><span className=""> 40 </span>
												</a>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</div>
					</Col>
					<div className="card border-0 bg-transparent text-center">
						<h5 className="my-4 fw-semibold">Reviews Style-2</h5>
					</div>
					<Col xxl={10} xl={12} lg={12} md={12} sm={12} className="col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-12">
						<div className="row gy-4  reviews-container">
							<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
								<Card className="custom-card">
									<Card.Body>
										<div className="d-flex align-items-center mb-3">
											<span className="avatar avatar-md avatar-rounded me-3">
												<img src={faces10} alt="" />
											</span>
											<div>
												<p className="mb-0 fw-semibold fs-14 text-primary">Jhonson Smith</p>
												<p className="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY MBIO</p>
											</div>
										</div>
										<div className="mb-3">
											<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#;" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<span className="text-muted">Rating : </span>
												<span className="text-warning d-block ms-1">
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-half-fill"></i>
												</span>
											</div>
											<div className="float-end fs-12 fw-semibold text-muted text-end">
												<span>16 hrs ago</span>
												<span className="d-block fw-normal fs-12 text-success"><i>Jhonson Smith</i></span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
								<Card className="custom-card">
									<Card.Body>
										<div className="d-flex align-items-center mb-3">
											<span className="avatar avatar-md avatar-rounded me-3">
												<img src={faces12} alt="" />
											</span>
											<div>
												<p className="mb-0 fw-semibold fs-14 text-primary">Dwayne Stort</p>
												<p className="mb-0 fs-10 fw-semibold text-muted">CEO ARMEDILLO</p>
											</div>
										</div>
										<div className="mb-3">
											<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#;" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<span className="text-muted">Rating : </span>
												<span className="text-warning d-block ms-1">
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-line"></i>
												</span>
											</div>
											<div className="float-end fs-12 fw-semibold text-muted text-end">
												<span>22 days ago</span>
												<span className="d-block fw-normal fs-12 text-success"><i>Dwayne Stort</i></span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
								<Card className="custom-card">
									<Card.Body>
										<div className="d-flex align-items-center mb-3">
											<span className="avatar avatar-md avatar-rounded me-3">
												<img src={faces3} alt="" />
											</span>
											<div>
												<p className="mb-0 fw-semibold fs-14 text-primary">Jasmine Kova</p>
												<p className="mb-0 fs-10 fw-semibold text-muted">AGGENT AMIO</p>
											</div>
										</div>
										<div className="mb-3">
											<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#;" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<span className="text-muted">Rating : </span>
												<span className="text-warning d-block ms-1">
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-half-fill"></i>
												</span>
											</div>
											<div className="float-end fs-12 fw-semibold text-muted text-end">
												<span>26 days ago</span>
												<span className="d-block fw-normal fs-12 text-success"><i>Jasmine Kova</i></span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
								<Card className="custom-card">
									<Card.Body>
										<div className="d-flex align-items-center mb-3">
											<span className="avatar avatar-md avatar-rounded me-3">
												<img src={faces16} alt="" />
											</span>
											<div>
												<p className="mb-0 fw-semibold fs-14 text-primary">Dolph MR</p>
												<p className="mb-0 fs-10 fw-semibold text-muted">CEO MR BRAND</p>
											</div>
										</div>
										<div className="mb-3">
											<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#;" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<span className="text-muted">Rating : </span>
												<span className="text-warning d-block ms-1">
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
												</span>
											</div>
											<div className="float-end fs-12 fw-semibold text-muted text-end">
												<span>1 month ago</span>
												<span className="d-block fw-normal fs-12 text-success"><i>Dolph MR</i></span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
								<Card className="custom-card">
									<Card.Body>
										<div className="d-flex align-items-center mb-3">
											<span className="avatar avatar-md avatar-rounded me-3">
												<img src={faces5} alt="" />
											</span>
											<div>
												<p className="mb-0 fw-semibold fs-14 text-primary">Brenda Simpson</p>
												<p className="mb-0 fs-10 fw-semibold text-muted">CEO AIBMO</p>
											</div>
										</div>
										<div className="mb-3">
											<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#;" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<span className="text-muted">Rating : </span>
												<span className="text-warning d-block ms-1">
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-half-fill"></i>
												</span>
											</div>
											<div className="float-end fs-12 fw-semibold text-muted text-end">
												<span>1 month ago</span>
												<span className="d-block fw-normal fs-12 text-success"><i>Brenda Simpson</i></span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={4} xl={6} lg={6} md={6} sm={12}>
								<Card className="custom-card">
									<Card.Body>
										<div className="d-flex align-items-center mb-3">
											<span className="avatar avatar-md avatar-rounded me-3">
												<img src={faces7} alt="" />
											</span>
											<div>
												<p className="mb-0 fw-semibold fs-14 text-primary">Julia Sams</p>
												<p className="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY BHOL</p>
											</div>
										</div>
										<div className="mb-3">
											<span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#;" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<span className="text-muted">Rating : </span>
												<span className="text-warning d-block ms-1">
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
													<i className="ri-star-fill"></i>
												</span>
											</div>
											<div className="float-end fs-12 fw-semibold text-muted text-end">
												<span>2 month ago</span>
												<span className="d-block fw-normal fs-12 text-success"><i>Julia Sams</i></span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</div>
					</Col>
				</div>
			</div>

		</Fragment>
	);
};
export default Reviews;
