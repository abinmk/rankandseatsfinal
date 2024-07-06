import React, { FC, Fragment } from "react";
import { Button, Card, Carousel, Col, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import media70 from "../../../../assets/images/media/media-70.jpg";
import media71 from "../../../../assets/images/media/media-71.jpg";
import media72 from "../../../../assets/images/media/media-72.jpg";
import media73 from "../../../../assets/images/media/media-73.jpg";
import media74 from "../../../../assets/images/media/media-74.jpg";
import media75 from "../../../../assets/images/media/media-75.jpg";
import media76 from "../../../../assets/images/media/media-76.jpg";
import media78 from "../../../../assets/images/media/media-78.jpg";
import media77 from "../../../../assets/images/media/media-77.jpg";
import media29 from "../../../../assets/images/media/media-29.jpg";
import media31 from "../../../../assets/images/media/media-31.jpg";
import media59 from "../../../../assets/images/media/media-59.jpg";
import media60 from "../../../../assets/images/media/media-60.jpg";
import media9 from "../../../../assets/images/media/media-9.jpg";
import media44 from "../../../../assets/images/media/media-44.jpg";
import media45 from "../../../../assets/images/media/media-45.jpg";
import media52 from "../../../../assets/images/media/media-52.jpg";
import media46 from "../../../../assets/images/media/media-46.jpg";
import media56 from "../../../../assets/images/media/media-56.jpg";
import media26 from "../../../../assets/images/media/media-26.jpg";
import media61 from "../../../../assets/images/media/media-61.jpg";
import media54 from "../../../../assets/images/media/media-54.jpg";
import media39 from "../../../../assets/images/media/media-39.jpg";
import faces2 from "../../../../assets/images/faces/2.jpg";
import faces4 from "../../../../assets/images/faces/4.jpg";
import faces7 from "../../../../assets/images/faces/7.jpg";
import faces12 from "../../../../assets/images/faces/12.jpg";
import faces15 from "../../../../assets/images/faces/15.jpg";
import faces16 from "../../../../assets/images/faces/16.jpg";
import faces3 from "../../../../assets/images/faces/3.jpg";
import faces11 from "../../../../assets/images/faces/11.jpg";

const Blog = () => {
	return (
		<Fragment>
			<div className="container-lg my-5 mt-0">
				<Row>
					<Card className="custom-card px-0">
						<Card.Header>
							<div className="card-title">
								Popular Topics
							</div>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col xxl={2} xl={2} lg={2} md={4} sm={6} className=" mb-4 mb-lg-0">
									<Link to="#">
										<div className="card custom-card shadow-none border mb-0">
											<img src={media78} className="card-img-top" alt="..." />
											<div className="card-body py-3">
												<h6 className="card-title fw-semibold text-center mb-0">Animals</h6>
											</div>
										</div>
									</Link>
								</Col>
								<Col xxl={2} xl={2} lg={2} md={4} sm={6} className=" mb-4 mb-lg-0">
									<Link to="#">
										<div className="card custom-card shadow-none border mb-0">
											<img src={media77} className="card-img-top" alt="..." />
											<div className="card-body py-3">
												<h6 className="card-title fw-semibold text-center mb-0">Fashion</h6>
											</div>
										</div>
									</Link>
								</Col>
								<Col xxl={2} xl={2} lg={2} md={4} sm={6} className=" mb-4 mb-lg-0">
									<Link to="#">
										<div className="card custom-card  shadow-none border mb-0">
											<img src={media75} className="card-img-top" alt="..." />
											<div className="card-body py-3">
												<h6 className="card-title fw-semibold text-center mb-0">Food</h6>
											</div>
										</div>
									</Link>
								</Col>
								<Col xxl={2} xl={2} lg={2} md={4} sm={6} className=" mb-4 mb-lg-0">
									<Link to="#">
										<div className="card custom-card  shadow-none border mb-0">
											<img src={media73} className="card-img-top" alt="..." />
											<div className="card-body py-3">
												<h6 className="card-title fw-semibold text-center mb-0">Nature</h6>
											</div>
										</div>
									</Link>
								</Col>
								<Col xxl={2} xl={2} lg={2} md={4} sm={6} className=" mb-4 mb-lg-0">
									<Link to="#">
										<div className="card custom-card  shadow-none border mb-0">
											<img src={media74} className="card-img-top" alt="..." />
											<div className="card-body py-3">
												<h6 className="card-title fw-semibold text-center mb-0">Sports</h6>
											</div>
										</div>
									</Link>
								</Col>
								<Col xxl={2} xl={2} lg={2} md={4} sm={6} className=" mb-4 mb-lg-0">
									<Link to="#">
										<div className="card custom-card  shadow-none border mb-0">
											<img src={media76} className="card-img-top" alt="..." />
											<div className="card-body py-3">
												<h6 className="card-title fw-semibold text-center mb-0">Travel</h6>
											</div>
										</div>
									</Link>
								</Col>
							</Row>

						</Card.Body>
					</Card>
					<Col xxl={7} xl={12}>
						<Card className="custom-card overflow-hidden">
							<Card.Body className=" p-0">
								<Carousel slide={true} indicators={false} controls={false} id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
									<Carousel.Item interval={2000} className='active' data-bs-interval="2000">
										<Link to="#">
											<img src={media70} className="d-block w-100" alt="..." />
											<div className="carousel-caption blog-caption text-start">
												<p className="mb-2">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
												<h6 className="fw-semibold mb-2 text-fixed-white">N.A.S.A</h6>
												<div className="d-flex align-items-center">
													<span className="avatar avatar-sm avatar-rounded me-2">
														<img src={faces15} alt="" />
													</span>
													<div className="fw-semibold">Json Taylor - <span className="fs-11 op-7 fw-normal">12,Dec 2023 - 04:34PM</span></div>
												</div>
											</div>
										</Link>
									</Carousel.Item >
									<Carousel.Item interval={2000} data-bs-interval="2000">
										<Link to="#">
											<img src={media71} className="d-block w-100" alt="..." />
											<div className="carousel-caption blog-caption text-start">
												<p className="mb-2">NASA is committed to providing all categories of businesses in both NASA prime contracts and subcontracts. </p>
												<h6 className="fw-semibold mb-2 text-fixed-white">NASA Businesses</h6>
												<div className="d-flex align-items-center">
													<span className="avatar avatar-sm avatar-rounded me-2">
														<img src={faces15} alt="" />
													</span>
													<div className="fw-semibold">Elisha Keens - <span className="fs-11 op-7 fw-normal">23,Dec 2023 - 11:27AM</span></div>
												</div>
											</div>
										</Link>
									</Carousel.Item >
									<Carousel.Item interval={2000} data-bs-interval="2000">
										<Link to="#">
											<img src={media72} className="d-block w-100" alt="..." />
											<div className="carousel-caption blog-caption text-start">
												<p className="mb-2">NASA Nelson served in the U.S. Senate for 18 years from Florida space shuttle mission 61-C in 1986.</p>
												<h6 className="fw-semibold mb-2 text-fixed-white">NASA Leadership</h6>
												<div className="d-flex align-items-center">
													<span className="avatar avatar-sm avatar-rounded me-2">
														<img src={faces4} alt="" />
													</span>
													<div className="fw-semibold">Melissa Blue - <span className="fs-11 op-7 fw-normal">16,Dec 2023 - 9:45AM</span></div>
												</div>
											</div>
										</Link>
									</Carousel.Item >
								</Carousel>
							</Card.Body>
						</Card>
					</Col>
					<Col xxl={5} xl={12}>
						<Row>
							<Col xl={12}>
								<Card className="custom-card">
									<div className="row g-0">
										<Col md={4}>
											<img src={media44} className="img-fluid rounded-start h-100 w-100" alt="..." />
										</Col>
										<Col md={8}>
											<Card.Body>
												<p className="card-text">This is a wider card with supporting text below as a natural .</p>
											</Card.Body>
											<Card.Footer>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="avatar avatar-sm avatar-rounded me-2">
															<img src={faces7} alt="" />
														</div>
														<div>
															<p className="mb-0 fw-semibold">Maria Bose</p>
															<p className="text-muted fs-10 mb-0">17,Dec 2023 - 12:32</p>
														</div>
													</div>
													<div className="btn-list">
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
													</div>
												</div>
											</Card.Footer>
										</Col>
									</div>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<div className="row g-0">
										<Col md={4}>
											<img src={media46} className="img-fluid rounded-start h-100 w-100" alt="..." />
										</Col>
										<Col md={8}>
											<Card.Body>
												<p className="card-text">This is a wider card with supporting text below as a natural .</p>
											</Card.Body>
											<Card.Footer>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="avatar avatar-sm avatar-rounded me-2">
															<img src={faces7} alt="" />
														</div>
														<div>
															<p className="mb-0 fw-semibold">Maria Bose</p>
															<p className="text-muted fs-10 mb-0">17,Dec 2023 - 12:32</p>
														</div>
													</div>
													<div className="btn-list">
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
													</div>
												</div>
											</Card.Footer>
										</Col>
									</div>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<div className="row g-0">
										<Col md={4}>
											<img src={media45} className="img-fluid rounded-start h-100 w-100" alt="..." />
										</Col>
										<Col md={8}>
											<Card.Body>
												<p className="card-text">This is a wider card with supporting text below as a natural .</p>
											</Card.Body>
											<Card.Footer>
												<div className="d-flex align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="avatar avatar-sm avatar-rounded me-2">
															<img src={faces4} alt="" />
														</div>
														<div>
															<p className="mb-0 fw-semibold">Arean Bose</p>
															<p className="text-muted fs-10 mb-0">17,Dec 2023 - 12:32</p>
														</div>
													</div>
													<div className="btn-list">
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
													</div>
												</div>
											</Card.Footer>
										</Col>
									</div>
								</Card>
							</Col>
						</Row>
					</Col>
					<Col xl={6}>
						<Card className="custom-card">
							<div className="row g-0">
								<Col md={4}>
									<img src={media29} className="img-fluid rounded-start h-100 w-100" alt="..." />
								</Col>
								<Col md={8}>
									<Card.Header>
										<div className="card-title">Lorem ipsum dolor sit amet consectetur</div>
									</Card.Header>
									<Card.Body>
										<p className="card-text">This is a wider card with supporting text below as a natural Beauti Image .</p>
									</Card.Body>
									<Card.Footer>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="avatar avatar-sm avatar-rounded me-2">
													<img src={faces7} alt="" />
												</div>
												<div>
													<p className="mb-0 fw-semibold">Alxire Bose</p>
													<p className="text-muted fs-10 mb-0">17,Dec 2023 - 12:32</p>
												</div>
											</div>
											<div className="btn-list">
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
											</div>
										</div>
									</Card.Footer>
								</Col>
							</div>
						</Card>
					</Col>
					<Col xl={6}>
						<Card className="custom-card">
							<div className="row g-0">
								<Col md={8}>
									<Card.Header>
										<p className="card-title">Lorem ipsum dolor sit amet consectetur</p>
									</Card.Header>
									<Card.Body>
										<p className="card-text">This is a wider card with supporting text below as a natural Beauti Image .</p>
									</Card.Body>
									<Card.Footer>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="avatar avatar-sm avatar-rounded me-2">
													<img src={faces7} alt="" className="" />
												</div>
												<div>
													<p className="mb-0 fw-semibold">Borene Bose</p>
													<p className="text-muted fs-10 mb-0">17,Dec 2023 - 12:32</p>
												</div>
											</div>
											<div className="btn-list">
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
											</div>
										</div>
									</Card.Footer>
								</Col>
								<Col md={4}>
									<img src={media31} className="img-fluid rounded-end h-100 w-100" alt="..." />
								</Col>
							</div>
						</Card>
					</Col>
					<Col xl={12}>
						<Row>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<Card className="custom-card">
									<Link to="#">
										<img src={media60} className="card-img-top" alt="..." />
									</Link>
									<Card.Body>
										<p className="fw-semibold fs-15 text-dark mb-1">Strawberry juice recipe.</p>
										<p className="card-text text-muted mb-3">Want to have something different but healthy to drink? Then look no further!! Strawberry Juice is rich in vitamin C.</p>
										<Link to="#" className="text-primary fw-semibold">Read More<i className="ti ti-arrow-narrow-right fs-15 align-middle fw-semibold ms-1 d-inline-block"></i></Link>
									</Card.Body>
									<Card.Footer>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="avatar avatar-sm avatar-rounded me-2">
													<img src={faces7} alt="" />
												</div>
												<div>
													<p className="mb-0 fw-semibold">Vraenox Bose</p>
													<p className="text-muted fs-10 mb-0">17,Dec 2023 - 12:32</p>
												</div>
											</div>
											<div className="btn-list">
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
											</div>
										</div>
									</Card.Footer>
								</Card>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<Card className="custom-card">
									<Link to="#">
										<img src={media61} className="card-img-top" alt="..." />
									</Link>
									<Card.Body>
										<p className="fw-semibold fs-15 text-dark mb-1">Night Sky is pleasent to watch.</p>
										<p className="card-text text-muted mb-3">Sky map showing the night sky tonight from any location. What planets are visible tonight? Where is Mars. </p>
										<Link to="#" className="text-primary fw-semibold">Read More<i className="ti ti-arrow-narrow-right fs-15 align-middle fw-semibold ms-1 d-inline-block"></i></Link>
									</Card.Body>
									<Card.Footer>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="avatar avatar-sm avatar-rounded me-2">
													<img src={faces2} alt="" />
												</div>
												<div>
													<p className="mb-0 fw-semibold">Helsenky</p>
													<p className="text-muted fs-10 mb-0">24,Dec 2023 - 14:21</p>
												</div>
											</div>
											<div className="btn-list">
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
											</div>
										</div>
									</Card.Footer>
								</Card>
							</div>
							<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<Card className="custom-card">
									<Link to="#">
										<img src={media9} className="card-img-top" alt="..." />
									</Link>
									<Card.Body>
										<p className="fw-semibold fs-15 text-dark mb-1">Is fashion industry growing ?</p>
										<p className="card-text text-muted mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
										<Link to="#" className="text-primary fw-semibold">Read More<i className="ti ti-arrow-narrow-right fs-15 align-middle fw-semibold ms-1 d-inline-block"></i></Link>
									</Card.Body>
									<Card.Footer>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="avatar avatar-sm avatar-rounded me-2">
													<img src={faces12} alt="" />
												</div>
												<div>
													<p className="mb-0 fw-semibold">Jason Mama</p>
													<p className="text-muted fs-10 mb-0">19,Dec 2023 - 15:48</p>
												</div>
											</div>
											<div className="btn-list">
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
											</div>
										</div>
									</Card.Footer>
								</Card>
							</div>
							<Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
								<Card className="custom-card">
									<Link to="#">
										<img src={media59} className="card-img-top" alt="..." />
									</Link>
									<Card.Body>
										<p className="fw-semibold fs-15 text-dark mb-1">Raising sun is a blessing to watch ..</p>
										<p className="card-text text-muted mb-3">Rising Sun is a 1993 American buddy cop crime thriller film directed by Philip Kaufman.</p>
										<Link to="#" className="text-primary fw-semibold">Read More<i className="ti ti-arrow-narrow-right fs-15 align-middle fw-semibold ms-1 d-inline-block"></i></Link>
									</Card.Body>
									<Card.Footer>
										<div className="d-flex align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="avatar avatar-sm avatar-rounded me-2">
													<img src={faces16} alt="" />
												</div>
												<div>
													<p className="mb-0 fw-semibold">Stuart Hall</p>
													<p className="text-muted fs-10 mb-0">13,Dec 2023 - 19:08</p>
												</div>
											</div>
											<div className="btn-list">
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
											</div>
										</div>
									</Card.Footer>
								</Card>
							</Col>
						</Row>
					</Col>
					<Col xl={12}>
						<Row>
							<Col xl={6} xxl={4} lg={12} md={12} className="">
								<Card className="custom-card">
									<Card.Header className="card-header d-flex align-items-center justify-content-between">
										<Card.Title className="">
											Featured Blogs
										</Card.Title>
										<div>
											<span className="badge bg-primary-transparent">32 Blogs</span>
										</div>
									</Card.Header>
									<Card.Body>
										<ul className="list-group">
											<li className="list-group-item">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media39} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Samantha Jack</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															There are many variations of passages of Lorem Ipsum available
														</p>
														<span className="text-muted fs-11">24,Nov 2023 - 18:27</span>
													</div>
												</div>
											</li>
											<li className="list-group-item">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media56} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Kirsten Sam</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															Latin words, combined with a handful of model sentence
														</p>
														<span className="text-muted fs-11">28,Nov 2023 - 10:45</span>
													</div>
												</div>
											</li>
											<li className="list-group-item">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media54} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Jessica Karon</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															Contrary to popular belief, Lorem Ipsum is not simply random
														</p>
														<span className="text-muted fs-11">30,Nov 2023 - 08:32</span>
													</div>
												</div>
											</li>
											<li className="list-group-item">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media52} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Broad Stuart</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															It was popularised in the 1960s with the release of Letraset sheets containing
														</p>
														<span className="text-muted fs-11">3,Dec 2023 - 12:56</span>
													</div>
												</div>
											</li>
											<li className="list-group-item text-center">
												<Link to="#" className="text-primary fw-semibold">Load More<i className="ti ti-arrow-narrow-right fs-15 align-middle fw-semibold ms-1 d-inline-block"></i></Link>
											</li>
										</ul>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={6} xxl={8} lg={12} md={12} className="">
								<Row>
									<Col xxl={6} xl={6} lg={6} md={6} className="">
										<Card className="custom-card">
											<Link to="#">
												<img src={media26} className="card-img-top" alt="..." />
											</Link>
											<Card.Body>
												<p className="fw-semibold fs-15 text-dark mb-1">Features of new car !</p>
												<p className="card-text text-muted mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
												<Link to="#" className="text-primary fw-semibold">Read More<i className="ti ti-arrow-narrow-right fs-15 align-middle fw-semibold ms-1 d-inline-block"></i></Link>
											</Card.Body>
											<Card.Footer>
												<div className="d-flex flex-wrap align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="avatar avatar-sm avatar-rounded me-2">
															<img src={faces11} alt="" />
														</div>
														<div>
															<p className="mb-0 fw-semibold">Alister Chuk</p>
															<p className="text-muted fs-10 mb-0">18,Dec 2023 - 12:25</p>
														</div>
													</div>
													<div className="btn-list">
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-thumb-up-line"></i></Button>
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-chat-2-line"></i></Button>
													</div>
												</div>
											</Card.Footer>
										</Card>
									</Col>
									<Col xxl={6} xl={6} lg={6} md={6}>
										<Card className="custom-card">
											<Link to="#">
												<img src={media31} className="card-img-top" alt="..." />
											</Link>
											<Card.Body>
												<p className="fw-semibold fs-15 text-dark mb-1">Beautiful beach on a sunny day !</p>
												<p className="card-text text-muted mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
												<Link to="#" className="text-primary fw-semibold">Read More<i className="ti ti-arrow-narrow-right fs-15 align-middle fw-semibold ms-1 d-inline-block"></i></Link>
											</Card.Body>
											<Card.Footer>
												<div className="d-flex flex-wrap align-items-center justify-content-between">
													<div className="d-flex align-items-center">
														<div className="avatar avatar-sm avatar-rounded me-2">
															<img src={faces3} alt="" />
														</div>
														<div>
															<p className="mb-0 fw-semibold">Samantha Nans</p>
															<p className="text-muted fs-10 mb-0">25,Dec 2023 - 04:25</p>
														</div>
													</div>
													<div className="btn-list">
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-thumb-up-line"></i></Button>
														<Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-chat-2-line"></i></Button>
													</div>
												</div>
											</Card.Footer>
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<div className="float-end mb-4">
					<nav aria-label="Page navigation" className="pagination-style-4">
						<Pagination className="pagination mb-0 gap-2">
							<Pagination.Item disabled href="#">
								Prev
							</Pagination.Item>
							<Pagination.Item active href="#">1</Pagination.Item>
							<Pagination.Item href="#">2</Pagination.Item>
							<Pagination.Item className="" href="#">
								<i className="bi bi-three-dots"></i>
							</Pagination.Item>
							<Pagination.Item href="#">17</Pagination.Item>
							<Pagination.Item className=" text-primary" href="#">
								next
							</Pagination.Item>
						</Pagination>
					</nav>
				</div>

			</div>
		</Fragment>
	);
};

export default Blog;
