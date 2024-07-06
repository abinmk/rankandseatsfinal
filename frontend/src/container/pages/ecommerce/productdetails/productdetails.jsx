import React, { FC, Fragment, useState } from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import {
	Autoplay, Thumbs, FreeMode, Navigation
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

//IMAGES

import png13 from "../../../../assets/images/ecommerce/png/13.png";
import png14 from "../../../../assets/images/ecommerce/png/14.png";
import faces3 from "../../../../assets/images/faces/3.jpg";
import faces15 from "../../../../assets/images/faces/15.jpg";
import png17 from "../../../../assets/images/ecommerce/png/17.png";
import png15 from "../../../../assets/images/ecommerce/png/15.png";
import png21 from "../../../../assets/images/ecommerce/png/21.png";
import png16 from "../../../../assets/images/ecommerce/png/16.png";
import png23 from "../../../../assets/images/ecommerce/png/23.png";
import { Link } from "react-router-dom";

const Productdetails = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Body>
							<Row>
								<Col xxl={4} xl={12} className="">
									<Row>
										<Col xxl={12} xl={6} lg={6} md={6} sm={12} className=" mb-md-5 mb-3">
											<div className="">
												<Swiper spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true}
													thumbs={{ swiper: thumbsSwiper }}
													modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-preview-details bd-gray-100 product-details-page">
													<SwiperSlide id="img-container">
														<img className="img-fluid" src={png15} alt="img" />
													</SwiperSlide>
													<SwiperSlide className="image-container">
														<img className="img-fluid" src={png13} alt="img" />
													</SwiperSlide>
													<SwiperSlide className="image-container">
														<img className="img-fluid" src={png14} alt="img" />
													</SwiperSlide>
													<SwiperSlide className="image-container">
														<img className="img-fluid" src={png17} alt="img" />
													</SwiperSlide>
												</Swiper>
												<Swiper onSwiper={setThumbsSwiper}
													autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
													modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-view-details mt-2">
													<SwiperSlide>
														<img className="img-fluid" src={png15} alt="img" />
													</SwiperSlide>
													<SwiperSlide>
														<img className="img-fluid" src={png13} alt="img" />
													</SwiperSlide>
													<SwiperSlide>
														<img className="img-fluid" src={png14} alt="img" />
													</SwiperSlide>
													<SwiperSlide>
														<img className="img-fluid" src={png17} alt="img" />
													</SwiperSlide>
												</Swiper>
											</div>
										</Col>
										<Col xxl={12} xl={6} lg={6} md={6} sm={12} className=" mb-md-5 mb-3">
											<Card className="custom-card bg-transparent shadow-none border rounded">
												<Card.Header className=" flex-between justify-content-between">
													<Card.Title className="">Frequently bought together</Card.Title>
												</Card.Header>
												<Card.Body>
													<div className="d-sm-flex justify-content-evenly mt-4">
														<div className="">
															<div className="text-center">
																<div className="avatar avatar-xxl bg-light p-1">
																	<img src={png16} alt="" />
																</div>
																<h5 className="mb-1 fs-12 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
																<p className="mb-0 text-muted fs-12 px-3">Aluminium Case with Multiple Featured Sports Band - Regular</p>
																<div className="flex-fill mb-1">
																	<span className="badge bg-success rounded-1">4.4<i className="ri-star-s-fill ms-1"></i></span>
																	<span className="text-muted ms-1">(256)</span>
																</div>
																<div className="d-flex  justify-content-center mb-1">
																	<h6 className="mb-0 fw-semibold">
																		$1,099
																	</h6>
																</div>
															</div>
														</div>
														<div className=" d-flex ">
															<span className="text-muted fs-25 fw-semibold"><i className="bx bx-plus"></i></span>
														</div>
														<div className="">
															<div className="text-center">
																<div className="avatar avatar-xxl bg-light p-1">
																	<img src={png21} alt="" />
																</div>
																<h5 className="mb-1 fs-12 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
																<p className="mb-0 text-muted fs-12 px-3">Aluminium Case with Multiple Featured Sports Band - Regular</p>
																<div className="flex-fill mb-1">
																	<span className="badge bg-success rounded-1">4.0<i className="ri-star-s-fill ms-1"></i></span>
																	<span className="text-muted ms-1">(156)</span>
																</div>
																<div className="d-flex  justify-content-center mb-1">
																	<h6 className="mb-0 fw-semibold">
																		$2,099
																	</h6>
																</div>
															</div>
														</div>
													</div>

												</Card.Body>
												<div className="card-footer">
													<div className="d-flex mt-2">
														<div className="">
															<h6>Total Price</h6>
															<h5 className="mb-0 fw-semibold">$4,099  </h5>
														</div>
														<div className="ms-auto">
															<div className="">
																<button type="button" className="btn btn-primary">Add to cart </button>
															</div>
														</div>
													</div>
												</div>
											</Card>
										</Col>
									</Row>
								</Col>
								<div className="col-xxl-8 col-xl-12 ">
									<div className="row g-0 product-scroll rounded-3 p-3 px-0">
										<div className="col-xl-8 mt-xxl-0 mt-3">
											<div>
												<p className="fs-18 fw-semibold mb-0">Omega Men's Sports Running, Walking, Gym Shoes with Ultra bounce. Comfortable and Durable.</p>
												<p className="fs-18 mb-4">
													<i className="ri-star-s-fill text-warning align-middle"></i>
													<i className="ri-star-s-fill text-warning align-middle"></i>
													<i className="ri-star-s-fill text-warning align-middle"></i>
													<i className="ri-star-s-fill text-warning align-middle"></i>
													<i className="ri-star-half-s-fill text-warning align-middle"></i>
													<span className="fw-semibold text-muted ms-1">4.3<a className="text-info" href="#;">(2.4k Reviews)</a></span>
												</p>
												<div className="row mb-4">
													<div className="col-xxl-3 col-xl-12">
														<p className="mb-1 lh-1 fs-11 text-success fw-semibold">Special Offer</p>
														<div className="d-flex align-items-center">
															<h3 className="mb-1 fw-semibold"><span>$229.00</span></h3>
															<span className="text-muted text-decoration-line-through d-inline-block ms-1  fs-16 op-6">$2,799</span>
														</div>
														<span className="rounded-1 fs-11 badge bg-danger-transparent">50% Off</span>
													</div>
												</div>
												<div className="mb-4">
													<Row>
														<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
															<p className="fs-15 fw-semibold mb-2">Colors :</p>
															<p className="mb-0 d-flex">
																<a aria-label="anchor" className="color-1 product-colors selected" href="#">
																	<i className="ri-checkbox-blank-circle-fill"></i>
																</a>
																<a aria-label="anchor" className="color-2 product-colors" href="#">
																	<i className="ri-checkbox-blank-circle-fill"></i>
																</a>
																<a aria-label="anchor" className="color-3 product-colors" href="#">
																	<i className="ri-checkbox-blank-circle-fill"></i>
																</a>
																<a aria-label="anchor" className="color-4 product-colors" href="#">
																	<i className="ri-checkbox-blank-circle-fill"></i>
																</a>
																<a aria-label="anchor" className="color-5 product-colors" href="#">
																	<i className="ri-checkbox-blank-circle-fill"></i>
																</a>
															</p>
														</div>
														<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-md-0 mt-3">
															<p className="fs-15 fw-semibold mb-2">Dial Size(in mm) :</p>
															<p className="mb-0 d-flex">
																<a className="color-1 product-sizes selected" href="#">
																	44
																</a>
																<a className="color-2 product-sizes" href="#">
																	40
																</a>
																<a className="color-3 product-sizes" href="#">
																	38
																</a>
															</p>
														</div>
													</Row>
												</div>
												<div className="mb-4">
													<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} className="btn btn-secondary me-2 mb-2">Buy Now</Link>
													<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="btn btn-success me-2 mb-2">Add To Cart</Link>
												</div>
												<div className="mb-4">
													<p className="fs-15 fw-semibold mb-1"><i className="ti ti-discount-2 fs-17 me-1 text-success d-inline-flex"></i>Offers:</p>
													<p className="text-muted mb-0 ps-2 mt-2">
														<i className="ti ti-discount-2 fs-14 text-success d-inline-flex me-1"></i>
														<span>
															20% off upto 300 on min purchase of $555
														</span>
													</p>
													<p className="text-muted mb-0 ps-2 mt-2">
														<i className="ti ti-discount-2 fs-14 text-success d-inline-flex me-1"></i>
														<span>
															starting from ₹101 monthView Plans
														</span>
													</p>
													<p className="text-muted mb-0 ps-2 mt-2">
														<i className="ti ti-discount-2 fs-14 text-success d-inline-flex me-1"></i>
														<span>
															No cost emi on selected bank card on min purchase of $1,499
														</span>
													</p>
													<p className="text-muted mb-0 ps-2 mt-2">
														<i className="ti ti-discount-2 fs-14 text-success d-inline-flex me-1"></i>
														<span>
															Free delivery on first orderView.
														</span>
													</p>
													<p className="text-muted mb-0 ps-2 mt-2">
														<i className="ti ti-discount-2 fs-14 text-success d-inline-flex me-1"></i>
														<span>
															Offer upto 30% on grosery on purchase of this itemT&amp;C.
														</span>
													</p>
													<div className="collapse " id="more-offers">
														<p className="text-muted mb-0 ps-2 mt-2">
															<i className="ti ti-discount-2 fs-14 text-success d-inline-flex me-1"></i>
															<span>
																Buy 4 and get 20% Off oN smart Travel bages
															</span>
														</p>
														<p className="text-muted mb-0 ps-2 mt-2">
															<i className="ti ti-discount-2 fs-14 text-success d-inline-flex me-1"></i>
															<span>
																No Cost EMI available.
															</span>
														</p>

													</div>
													<a className="text-success fs-12 ps-2" data-bs-toggle="collapse" href="#more-offers" aria-expanded="false"><u>View More</u></a>

												</div>
												<div className="mb-4">
													<p className="fs-15 fw-semibold mb-1">Description :</p>
													<p className="text-muted mb-0">
														Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, quaerat nam quo optio reiciendis harum reprehenderit omnis tempora adipisci in iste aperiam unde, repellendus possimus explicabo veritatis? Dignissimos,
														Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, quaerat nam quo optio reiciendis.
													</p>
												</div>
												<div className="row pe-4 ps-3">
													<div className="border p-0 px-0 rounded-3 mb-0">
														<p className="fs-15 fw-semibold mb-3 p-3">Reviews &amp; Ratings :</p>
														<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 p-3 pt-0">
															<div className="d-flex align-items-top mb-3">
																<div className="me-2 lh-1">
																	<i className="ri-star-fill fs-25 text-warning"></i>
																</div>
																<div className="lh-1">
																	<p className="mb-1 fw-semibold fs-18">4.5 out of 5</p>
																	<p className="mb-0 text-muted fs-11">Based on (23,435) ratings</p>
																</div>
															</div>
															<div className="d-flex align-items-center mb-3">
																<div className="fs-12 me-2 fw-semibold">5 <i className="ri-star-fill fs-10"></i></div>
																<ProgressBar variant='success' className='progress-xs flex-fill' now={55} />
																<div className="text-muted ms-2 fs-12">(10,893)</div>
															</div>
															<div className="d-flex align-items-center mb-3">
																<div className="fs-12 me-2 fw-semibold">4 <i className="ri-star-fill fs-10"></i></div>
																<ProgressBar variant='success' className='progress-xs flex-fill' now={55} />
																<div className="text-muted ms-2 fs-12">(6,534)</div>
															</div>
															<div className="d-flex align-items-center mb-3">
																<div className="fs-12 me-2 fw-semibold">3 <i className="ri-star-fill fs-10"></i></div>
																<ProgressBar variant='success' className='progress-xs flex-fill' now={8} />
																<div className="text-muted ms-2 fs-12">(4,342)</div>
															</div>
															<div className="d-flex align-items-center mb-3">
																<div className="fs-12 me-2 fw-semibold">2 <i className="ri-star-fill fs-10"></i></div>
																<ProgressBar variant='warning' className='progress-xs flex-fill' now={9} />
																<div className="text-muted ms-2 fs-12">(1,432)</div>
															</div>
															<div className="d-flex align-items-center">
																<div className="fs-12 me-2 fw-semibold">1 <i className="ri-star-fill fs-10"></i></div>
																<ProgressBar variant='danger' className='progress-xs flex-fill' now={6} />
																<div className="text-muted ms-2 fs-12">(1,453)</div>
															</div>
														</div>
														<div className="border-top my-3"></div>
														<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
															<div className="p-3">
																<div className="d-sm-flex d-block align-items-top">
																	<div className="d-flex flex-fill">
																		<div className="me-2">
																			<span className="avatar avatar-sm avatar-rounded">
																				<img src={faces15} alt="" />
																			</span>
																		</div>
																		<div className="">
																			<h6 className="">Alex Carey <span className="badge bg-warning-transparent mb-0 rounded-1"><i className="ri-star-s-fill">4.5</i></span></h6>
																		</div>
																	</div>
																</div>
																<div className="ps-sm-4 ps-0 mb-3">
																	<p className="fw-semibold mb-1 ps-2">Wonderful product&#128512;</p>
																	<p className="mb-0 fs-12 text-muted ps-2">Really this product is very good quality and best for daily use... It supports Spo2.. Very well.. </p>
																</div>
																<div className="product-images ps-sm-4 ps-0">
																	<Row>
																		<div className="col-xl-6">
																			<div className="products-review-images">
																				<a aria-label="anchor" href="#;">
																					<img src={png13} alt="" />
																				</a>
																				<a aria-label="anchor" href="#;">
																					<img src={png15} alt="" />
																				</a>
																			</div>
																		</div>
																		<div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
																			<button aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light me-2">
																				<i className="ri-thumb-up-line"></i>
																			</button>
																			<button aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
																				<i className="ri-thumb-down-line"></i>
																			</button>
																		</div>
																	</Row>
																</div>
															</div>
														</div>
														<div className="border-top my-3"></div>
														<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
															<div className="p-3">
																<div className="d-sm-flex d-block align-items-top">
																	<div className="d-flex flex-fill">
																		<div className="me-2">
																			<span className="avatar avatar-sm avatar-rounded">
																				<img src={faces3} alt="" />
																			</span>
																		</div>
																		<div className="">
																			<h6 className="">Alex Carey <span className="badge bg-warning-transparent mb-0 rounded-1"><i className="ri-star-s-fill">4</i></span></h6>
																		</div>
																	</div>
																</div>
																<div className="ps-sm-4 ps-0 mb-3">
																	<p className="fw-semibold mb-1 ps-2">Good product</p>
																	<p className="mb-0 fs-12 text-muted ps-2">Really this product is very good quality and best for daily use... It supports Spo2.. Very well.. </p>
																</div>
																<div className="product-images ps-sm-4 ps-0">
																	<div className="row justify-content-end">
																		<div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
																			<button aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light me-2">
																				<i className="ri-thumb-up-line"></i>
																			</button>
																			<button aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
																				<i className="ri-thumb-down-line"></i>
																			</button>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 mt-xxl-0 mt-3">
											<div className="mb-3 border p-3 rounded-3 ">
												<p className="fs-15 fw-semibold mb-2">Features :</p>
												<Row>
													<Col xl={12}>
														<ul className="ps-3 mb-0">
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																Dial height: 44 mm
															</li>
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																Dial width: 35 mm
															</li>
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																SpO2
															</li>
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																30+ sports mode
															</li>
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																Upto 12 days battery life
															</li>
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																Water resistant
															</li>
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																Battery powered
															</li>
															<li className="text-muted mb-2">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																Country of origin: USA
															</li>
															<li className="text-muted">
																<i className="bx bxs-circle fs-6 me-2 op-5"></i>
																1-year warranty
															</li>
														</ul>
													</Col>
												</Row>
											</div>

											<div className="border p-3 rounded-3 mb-3">
												<p className="fs-16 fw-semibold mb-2">Product Details :</p>
												<Row>
													<Col xl={12}>
														<Row>
															<div className="col-xl-5">
																<span className="fs-14 fw-semibold">Brand</span>
															</div>
															<div className="col-xl-7">
																<p className="text-muted fs-14">Orange.Inc</p>
															</div>
														</Row>
														<Row>
															<div className="col-xl-5">
																<span className="fs-14 fw-semibold">Model Name</span>
															</div>
															<div className="col-xl-7">
																<p className="text-muted fs-14"> Orange Travel bag series 4</p>
															</div>
														</Row>
														<Row>
															<div className="col-xl-5">
																<span className="fs-14 fw-semibold">Color</span>
															</div>
															<div className="col-xl-7">
																<p className="text-muted fs-14">Raging Brass</p>
															</div>
														</Row>
														<Row>
															<div className="col-xl-5">
																<span className="fs-14 fw-semibold">Style</span>
															</div>
															<div className="col-xl-7">
																<p className="text-muted fs-14">GPS</p>
															</div>
														</Row>
														<Row>
															<div className="col-xl-5">
																<span className="fs-14 fw-semibold">Special Features</span>
															</div>
															<div className="col-xl-7">
																<p className="text-muted fs-14">Heart rate sensor,GPS,Wifi calling,SAmoled display e.t.c</p>
															</div>
														</Row>
													</Col>
												</Row>
											</div>
											<div className="border rounded-3 p-3 mb-3">
												<div className="d-flex align-items-center mb-3">
													<div className="avatar avatar-lg bg-light p-2">
														<svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" viewBox="0 0 64 64" id="free-shipping"><g data-name="21"><path fill="#546e7a" d="m61.79 32.39-7-9A1 1 0 0 0 54 23h-9v-4a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v21a5 5 0 0 0 5 5 1 1 0 0 0 0-2 3 3 0 0 1-3-3v-4h39v7H22.91a6 6 0 1 0 0 2h23.18a6 6 0 0 0 11.82 0H61a1 1 0 0 0 1-1V33a1 1 0 0 0-.21-.61Z"></path><path fill="#e7f5f3" d="M4 34V19a3 3 0 0 1 3-3h33a3 3 0 0 1 3 3v15Z"></path><circle cx="17" cy="44" r="4" fill="#80cbc4"></circle><circle cx="52" cy="44" r="4" fill="#80cbc4"></circle><path fill="#e7f5f3" d="M60 43h-2.09a6 6 0 0 0-11.82 0H45V25h8.51L60 33.34Z"></path><path fill="#546e7a" d="M52 27h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 .77-1.64l-5-6A1 1 0 0 0 52 27Z"></path><path fill="#80cbc4" d="M49 33v-4h2.53l3.34 4H49z"></path><path fill="#546e7a" d="M23 23.5a3.5 3.5 0 0 0-3.5-3.5H17a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-2h1.46l1.71 2.55A1 1 0 0 0 22 30a.94.94 0 0 0 .55-.17 1 1 0 0 0 .28-1.38l-1.37-2.06A3.49 3.49 0 0 0 23 23.5zM18 22h1.5a1.5 1.5 0 0 1 0 3H18zm-5 0a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2h-3v-2zm17 0a1 1 0 0 0 0-2h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3v-2h3a1 1 0 0 0 0-2h-3v-2zm8 0a1 1 0 0 0 0-2h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3v-2h3a1 1 0 0 0 0-2h-3v-2z"></path></g></svg>
													</div>
													<div className="ms-3">
														<span className="fs-14 fw-semibold mb-0">Free Shipping</span>
													</div>
												</div>
												<div className="d-flex align-items-center mb-3">
													<div className="avatar avatar-lg bg-light p-2">
														<svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" viewBox="0 0 64 64" id="guarantee"><g data-name="3"><path fill="#546e7a" d="M32 60a1 1 0 0 1-.45-.11l-9.15-4.57A27.86 27.86 0 0 1 7 30.4V8a1 1 0 0 1 .49-.86 1 1 0 0 1 1 0l.51.24a20.18 20.18 0 0 0 22.37-2.15 1 1 0 0 1 1.26 0A20.18 20.18 0 0 0 55 7.38l.49-.26A1 1 0 0 1 57 8v22.4a27.86 27.86 0 0 1-15.4 24.92l-9.15 4.57A1 1 0 0 1 32 60Z"></path><path fill="#e7f5f3" d="M9 9.64V30.4a25.88 25.88 0 0 0 14.3 23.13l8.7 4.35 8.7-4.35A25.88 25.88 0 0 0 55 30.4V9.64a22.13 22.13 0 0 1-23-2.37A22.13 22.13 0 0 1 9 9.64Z"></path><path fill="#546e7a" d="M28 40a1 1 0 0 1-.71-.29l-12-12a1 1 0 0 1 1.42-1.42l11.35 11.35 19.29-16.4a1 1 0 1 1 1.3 1.52l-20 17A1 1 0 0 1 28 40Z"></path></g></svg>
													</div>
													<div className="ms-3">
														<span className="fs-14 fw-semibold mb-0">3 Years warranty</span>
													</div>
												</div>
												<div className="d-flex align-items-center mb-3">
													<div className="avatar avatar-lg bg-light p-2">
														<svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" viewBox="0 0 64 64" id="refund"><g data-name="7"><path fill="#546e7a" d="M59 5.94a.78.78 0 0 0 0-.16v-.19a.35.35 0 0 0 0-.08l-.07-.12-.11-.11-.1-.09-.15-.08-.08-.05h-.17L58 5H22a1 1 0 0 0-.71.29l-16 16a1.32 1.32 0 0 0-.19.29v.09a1.31 1.31 0 0 0-.06.27S5 22 5 22v32a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5V22.38L57 8.66v29.47a7 7 0 0 1-1.6 4.45L47 52.85a1 1 0 0 0 1.54 1.27L57 43.85a9 9 0 0 0 2-5.72V5.94Z"></path><path fill="#80cbc4" d="M38.34 7H55.8L43.55 21H27.18l11.1-13.88a.45.45 0 0 0 .06-.12zM22.41 7h13.41l-11.1 13.88a.45.45 0 0 0-.06.12H8.41z"></path><path fill="#e7f5f3" d="M43 54a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V23h36v31Z"></path><path fill="#546e7a" d="m50.21 25.21 4-4a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0zM31 30H11a1 1 0 0 0 0 2h20a7 7 0 0 1 0 14H13.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 48H31a9 9 0 0 0 0-18z"></path></g></svg>
													</div>
													<div className="ms-3">
														<span className="fs-14 fw-semibold mb-0">7 days  returnable</span>
													</div>
												</div>
												<div className="d-flex align-items-center">
													<div className="avatar avatar-lg bg-light p-2">
														<svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" viewBox="0 0 64 64" id="verified-payment"><g data-name="23"><rect width="58" height="32" x="3" y="22" fill="#e7f5f3" rx="1"></rect><path fill="#546e7a" d="M61 21h-3.29a16 16 0 1 0 .29 3v-1h2v30H4V23h18.76a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h58a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1Z"></path><circle cx="42" cy="24" r="14" fill="#80cbc4"></circle><path fill="#546e7a" d="m39.47 28.64-7.12-7.11a1 1 0 0 0-1.41 1.41l7.77 7.77a1 1 0 0 0 1.35.05l12.94-11a1 1 0 0 0 .11-1.41 1 1 0 0 0-1.4-.11zM21 30a1 1 0 0 0 0-2h-4v-2a1 1 0 0 0-2 0v2a5 5 0 0 0-5 5v1a5 5 0 0 0 5 5v7h-4a1 1 0 0 0 0 2h4v2a1 1 0 0 0 2 0v-2a5 5 0 0 0 5-5v-1a5 5 0 0 0-5-5v-7zm-1 12v1a3 3 0 0 1-3 3v-7a3 3 0 0 1 3 3zm-5-5a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3z"></path></g></svg>
													</div>
													<div className="ms-3">
														<span className="fs-14 fw-semibold mb-0">Cash on  Delievry</span>
													</div>
												</div>
											</div>
											<div className="border rounded-3 p-3">
												<p className="fs-15 fw-semibold mb-2">Returns:</p>
												<p className="fs-12 text-muted">Min 7 days return and exchange policy. Return Policies may vary based on products and promotions.
													For full details on our Returns Policies, please <a href="#;" className="text-primary">click here</a>․</p>
											</div>
										</div>
									</div>
								</div>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Similar Products</Card.Title>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xl={2} className="col my-2">
									<div className="text-center">
										<div className="similar-products-image me-2">
											<img src={png16} alt="" />
										</div>
										<h5 className="mb-1 fs-14 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
										<div className="d-flex align-items-center justify-content-center mb-1">
											<h5 className="mb-0 fw-semibold">
												$1,099
											</h5>
											<p className="mb-0 text-muted">
												<span className="text-success fs-11 ms-1">25% off</span>
											</p>
										</div>
										<div className="flex-fill">
											<span className="badge bg-success rounded-1">4.4<i className="ri-star-s-fill ms-1"></i></span>
											<span className="text-muted ms-1">(13,256)</span>
										</div>
									</div>

								</Col>
								<Col xl={2} className="col my-2">
									<div className="text-center">
										<div className="similar-products-image me-2">
											<img src={png21} alt="" />
										</div>
										<h5 className="mb-1 fs-14 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
										<div className="d-flex align-items-center justify-content-center mb-1">
											<h5 className="mb-0 fw-semibold">
												$2,099
											</h5>
											<p className="mb-0 text-muted">
												<span className="text-success fs-11 ms-1">20% off</span>
											</p>
										</div>
										<div className="flex-fill">
											<span className="badge bg-success rounded-1">4.0<i className="ri-star-s-fill ms-1"></i></span>
											<span className="text-muted ms-1">(13,256)</span>
										</div>
									</div>

								</Col>
								<Col xl={2} className="col my-2">
									<div className="text-center">
										<div className="similar-products-image me-2">
											<img src={png23} alt="" />
										</div>
										<h5 className="mb-1 fs-14 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
										<div className="d-flex align-items-center justify-content-center mb-1">
											<h5 className="mb-0 fw-semibold">
												$15,099
											</h5>
											<p className="mb-0 text-muted">
												<s>$8,759</s>
												<span className="text-success fs-11 ms-1">55% off</span>
											</p>
										</div>
										<div className="flex-fill">
											<span className="badge bg-success rounded-1">4.3<i className="ri-star-s-fill ms-1"></i></span>
											<span className="text-muted ms-1">(18,256)</span>
										</div>
									</div>

								</Col>
								<Col xl={2} className="col my-2">
									<div className="text-center">
										<div className="similar-products-image me-2">
											<img src={png13} alt="" />
										</div>
										<h5 className="mb-1 fs-14 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
										<div className="d-flex align-items-center justify-content-center mb-1">
											<h5 className="mb-0 fw-semibold">
												$4,099
											</h5>
											<p className="mb-0 text-muted">
												<s>$2,759</s>
												<span className="text-success fs-11 ms-1">40% off</span>
											</p>
										</div>
										<div className="flex-fill">
											<span className="badge bg-success rounded-1">4.4<i className="ri-star-s-fill ms-1"></i></span>
											<span className="text-muted ms-1">(19,256)</span>
										</div>
									</div>

								</Col>
								<Col xl={2} className="col my-2">
									<div className="text-center">
										<div className="similar-products-image me-2">
											<img src={png14} alt="" />
										</div>
										<h5 className="mb-1 fs-14 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
										<div className="d-flex align-items-center justify-content-center mb-1">
											<h5 className="mb-0 fw-semibold">
												$5,099
											</h5>
											<p className="mb-0 text-muted">
												<span className="text-success fs-11 ms-1">20% off</span>
											</p>
										</div>
										<div className="flex-fill">
											<span className="badge bg-success rounded-1">4.4<i className="ri-star-s-fill ms-1"></i></span>
											<span className="text-muted ms-1">(13,256)</span>
										</div>
									</div>

								</Col>
								<Col xl={2} className="col my-2">
									<div className="text-center">
										<div className="similar-products-image me-2">
											<img src={png17} alt="" />
										</div>
										<h5 className="mb-1 fs-14 fw-semibold   mt-1">Omega Sports shoes series 3</h5>
										<div className="d-flex align-items-center justify-content-center mb-1">
											<h5 className="mb-0 fw-semibold">
												$6,099
											</h5>
											<p className="mb-0 text-muted">
												<s>$1,759</s>
												<span className="text-success fs-11 ms-1">35% off</span>
											</p>
										</div>
										<div className="flex-fill">
											<span className="badge bg-success rounded-1">3.5<i className="ri-star-s-fill ms-1"></i></span>
											<span className="text-muted ms-1">(19,256)</span>
										</div>
									</div>

								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Productdetails;
