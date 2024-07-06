import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";
import { Filedetailsgallery } from "./blogdetailsdata";
import { Link } from "react-router-dom";

//IMAGES
import media24 from "../../../../assets/images/media/media-24.jpg";
import media52 from "../../../../assets/images/media/media-52.jpg";
import media54 from "../../../../assets/images/media/media-54.jpg";
import media56 from "../../../../assets/images/media/media-56.jpg";
import media39 from "../../../../assets/images/media/media-39.jpg";
import media88 from "../../../../assets/images/media/media-88.jpg";
import faces2 from "../../../../assets/images/faces/2.jpg";
import faces3 from "../../../../assets/images/faces/3.jpg";
import faces4 from "../../../../assets/images/faces/4.jpg";
import faces15 from "../../../../assets/images/faces/15.jpg";

const Blogdetails = () => {
	return (
		<Fragment>
			<div className="container-lg">
				<Row>
					<Col xl={8}>
						<Row>
							<Col xl={12}>
								<Card className="card custom-card border-0">
									<Link to="#">
										<img src={media24} className=" blog-details-img card-img-top" alt="..." />
									</Link>
									<Card.Header className="d-block border-bottom border-block-end-dashed">
										<p className="fs-22 fw-semibold mb-1">Touring excites in winter when we travel with friends !</p>
										<div className="d-sm-flex align-items-cneter">
											<div className="d-flex align-items-center flex-fill">
												<span className="avatar avatar-sm avatar-rounded me-3">
													<img src={faces15} alt="" className="" />
												</span>
												<div>
													<p className="mb-0 fw-semibold fs-14">Json Taylor - <span className="fs-12 text-muted fw-normal">Tue,25 Dec 2022 - 11:45</span></p>
												</div>
											</div>
											<div className="mt-sm-0 mt-2">
												<span className="badge bg-success-transparent me-3">
													<i className="ri-thumb-up-line me-1 align-middle d-inline-block"></i> 32 Likes
												</span>
												<span className="badge bg-info-transparent me-3">
													<i className="ri-chat-4-line me-1 align-middle d-inline-block"></i> 10 Comments
												</span>
											</div>
										</div>
									</Card.Header>
									<Card.Body>
										<h6 className="fw-semibold">
											Seeing with “fresh eyes” – A deeper nature experience
										</h6>
										<p className="mb-5 text-muted">
											The world is animated by the wind. This invisible Its absence can cast a calm stillness over the earth. On barren mountain tops its power is barely perceptible; in forests and seas its presence becomes manifest. Winds are wild, and sometimes destructive. When we look deeply into the surely gravity’s law, strong as an ocean current, takes hold of even the strongest thing and pulls it toward the heart of the world. Each thing- each stone, blossom, child – is held in place. Only we, in our arrogance, push out beyond what we belong to for some empty freedom. If we surrendered
										</p>
										<div className="card custom-card bg-light mb-5 shadow-none">
											<Link aria-label="anchor" to="#" className="card-anchor"></Link>
											<Card.Body>
												<blockquote className="blockquote mb-0 text-center">
													<p className="fs-16 fw-semibold mb-2 text-dark">In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful..</p>
													<footer className="blockquote-footer mt-2 fs-14 op-7">Someone famous as <cite title="Source Title">-Alice Walker</cite></footer>
												</blockquote>
											</Card.Body>
										</div>
										<p className="mb-5 text-muted">
											From enchanting nature's beauty quotes that evoke visions of lush meadows full of brilliantly-colored flowers or dense forests with sky-high trees to famous quotes about nature's ever-present—and absolutely fundamental—role in our lives, these 101 quotes about nature will have you itching to get off your couch and get outside. For famous <b>quotes about nature</b>, we have them here!
										</p>
										<p className="text-center">
											<Button variant='' className="btn btn-primary-light" type="button">
												<span className="spinner-border spinner-border-sm align-middle me-1" role="status" aria-hidden="true"></span>
												View More
											</Button>
										</p>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Comments
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<div className="">
											<div className="media mb-3 overflow-visible d-flex">
												<div className="me-3">
													<span className="avatar avatar-rounded avatar-md mb-3">
														<img src={faces2} alt="img" />
													</span>
												</div>
												<div className="media-body overflow-visible  ">
													<div className="border p-3 br-5">
														<nav className="nav float-end">
															<Dropdown>
																<Dropdown.Toggle variant='' aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
																<Dropdown.Menu className="dropdown-menu-start">
																	<Dropdown.Item className="d-flex" href="#"><i className="fe fe-edit me-1"></i> Edit</Dropdown.Item>
																	<Dropdown.Item className="d-flex" href="#"><i className="fe fe-flag me-1"></i> Report Abuse</Dropdown.Item>
																	<Dropdown.Item className="d-flex" href="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</nav>
														<h6 className="mt-0">Gavin Murray <span className="text-muted fs-12 ms-1">1 day ago</span></h6>
														<span><i className="fe fe-thumb-up text-danger"></i></span>
														<p className="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter
															what industry you’re working in, as a blogger, you should live and die by this statement.</p>
														<span className="reply">
															<Link data-bs-toggle="collapse" to="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><span className="btn btn-info-light btn-sm rounded-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i>Reply</span></Link>
														</span>
														<div className="collapse" id="collapseExample">
															<textarea className="form-control mb-2 mt-3" id="text-area" rows={3} placeholder="Write a reply ..."></textarea>
															<div className="text-end">
																<Button variant='' type="button" className="btn btn-primary btn-wave btn-sm">Post</Button>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="media mb-3 overflow-visible d-flex ms-0 ms-lg-5">
												<div className="me-3">
													<span className="avatar avatar-rounded avatar-md mb-3">
														<img src={faces3} alt="img" />
													</span>
												</div>
												<div className="media-body border p-3 overflow-visible br-5">
													<nav className="nav float-end">
														<Dropdown>
															<Dropdown.Toggle variant='' aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
															<Dropdown.Menu className="dropdown-menu-start">
																<Dropdown.Item className="d-flex" href="#"><i className="fe fe-edit me-1"></i> Edit</Dropdown.Item>
																<Dropdown.Item className="d-flex" href="#"><i className="fe fe-flag me-1"></i> Report Abuse</Dropdown.Item>
																<Dropdown.Item className="d-flex" href="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</nav>
													<h6 className="mt-0">Mozelle Belt <span className="text-muted fs-12 mx-1 bg-normal-light">Reply to Gavin Murray</span><span className="text-muted fs-12 ms-1">2 min ago</span></h6>
													<span><i className="fe fe-thumb-up text-danger"></i></span>
													<p className="font-13 text-muted">Nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you’re working in, as a blogger, you should
														live and die by this statement.</p>
													<span className="reply">
														<a data-bs-toggle="collapse" aria-controls="collapseExample" href="/velvet-ts/preview/pages/blog/blogdetails#collapseExample">
															<span className="btn btn-info-light btn-sm rounded-2">
																<i className="fe fe-corner-up-left me-1 d-inline-flex"></i>Reply
															</span>
														</a>
													</span>
													<div id="collapseExample" className="">
														<textarea className="form-control mb-2 mt-3" rows={3} placeholder="Write a reply ..."></textarea>
														<div className="text-end">
															<Button variant='' type="button" className="btn btn-primary btn-wave btn-sm">Post</Button>
														</div>
													</div>
												</div>
											</div>
											<div className="media mb-3 overflow-visible d-flex">
												<div className="me-3">
													<span className="avatar avatar-rounded avatar-md mb-3">
														<img src={faces4} alt="img" />
													</span>
												</div>
												<div className="media-body overflow-visible d-flex">
													<div className="border mb-3 p-3 br-5">
														<nav className="nav float-end">
															<Dropdown>
																<Dropdown.Toggle variant='' aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
																<Dropdown.Menu className="dropdown-menu-start">
																	<Dropdown.Item className="d-flex" href="#"><i className="fe fe-edit me-1"></i> Edit</Dropdown.Item>
																	<Dropdown.Item className="d-flex" href="#"><i className="fe fe-flag me-1"></i> Report Abuse</Dropdown.Item>
																	<Dropdown.Item className="d-flex" href="#"><i className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
														</nav>
														<h6 className="mt-0">Paul Smith<span className="text-muted fs-12 ms-1">10 min ago</span></h6>
														<p className="font-13 text-muted">Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the </p>
														<span className="reply">
															<Link data-bs-toggle="collapse" to="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><span className="btn btn-info-light btn-sm rounded-2"><i className="fe fe-corner-up-left me-1 d-inline-flex"></i>Reply</span></Link>
														</span>
														<div className="collapse" id="collapseExample2">
															<textarea className="form-control mb-2 mt-3" rows={3} placeholder="Write a reply ..."></textarea>
															<div className="text-end">
																<Button variant='' type="button" className="btn btn-primary btn-wave btn-sm">Post</Button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Leave a Comment
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<div className="row gy-3">
											<Col xl={6}>
												<Form.Label htmlFor="blog-first-name" className="">First Name</Form.Label>
												<Form.Control type="text" className="" id="blog-first-name" placeholder="Enter Name" />
											</Col>
											<Col xl={6}>
												<Form.Label htmlFor="blog-last-name" className="">Last Name</Form.Label>
												<Form.Control type="text" className="" id="blog-last-name" placeholder="Enter Name" />
											</Col>
											<Col xl={12}>
												<Form.Label htmlFor="blog-email" className="">Email ID</Form.Label>
												<Form.Control type="text" className="" id="blog-email" placeholder="Enter Email" />
											</Col>
											<Col xl={12}>
												<Form.Label htmlFor="blog-comment" className="">Write Comment</Form.Label>
												<Form.Control as="textarea" className="" id="blog-comment" rows={5}></Form.Control>
											</Col>
										</div>
									</Card.Body>
									<Card.Footer>
										<div className="text-end">
											<Button variant='' type="button" className="btn btn-primary">Post Comment</Button>
										</div>
									</Card.Footer>
								</Card>
							</Col>
						</Row>
					</Col>
					<Col xl={4}>
						<Row>
							<Col xxl={12}>
								<Card className="custom-card border-0">
									<img src={media88} className="card-img-top" alt="..." />
									<Card.Body>
										<h6 className="card-title fw-semibold mb-0">Emiley Jackson</h6>
										<p className="fs-12 text-muted"><span>emaileyjackson2134</span>@gmail.com</p>
										<p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
									</Card.Body>
									<div className="card-footer border-block-start-dashed text-center">
										<div className="btn-list">
											<div className="btn-list">
												<Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
													<i className="ri-facebook-line"></i>
												</Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
													<i className="ri-twitter-line"></i>
												</Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
													<i className="ri-instagram-line"></i>
												</Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
													<i className="ri-github-line"></i>
												</Button>
												<Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
													<i className="ri-youtube-line"></i>
												</Button>
											</div>
										</div>
									</div>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Gallery
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<div className="text-center demo-gallery">
											<div className="">
												<Filedetailsgallery />
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Popular Tags
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<div className="blog-popular-tags">
											<Link to="#" className="badge bg-light text-muted">#blogger</Link>
											<Link to="#" className="badge bg-light text-muted">#styleblogger</Link>
											<Link to="#" className="badge bg-light text-muted">#livecolorfully</Link>
											<Link to="#" className="badge bg-light text-muted">#amwriting</Link>
											<Link to="#" className="badge bg-light text-muted">#analytics</Link>
											<Link to="#" className="badge bg-light text-muted">#designblogger</Link>
											<Link to="#" className="badge bg-light text-muted">#picoftheday</Link>
											<Link to="#" className="badge bg-light text-muted">#adventure</Link>
											<Link to="#" className="badge bg-light text-muted">#landscape</Link>
											<Link to="#" className="badge bg-light text-muted">#fitnessgoals</Link>
											<Link to="#" className="badge bg-light text-muted">#foodblogger</Link>
											<Link to="#" className="badge bg-light text-muted">#vegan</Link>
											<Link to="#" className="badge bg-light text-muted">#portrait</Link>
											<Link to="#" className="badge bg-light text-muted">#canonphotography</Link>
											<Link to="#" className="badge bg-light text-muted">#fineart</Link>
											<Link to="#" className="badge bg-light text-muted">#trending</Link>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Recent Posts
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<ListGroup as="ul">
											<ListGroup.Item as="li">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media39} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Animals</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															There are many variations of passages of Lorem Ipsum available
														</p>
														<span className="text-muted fs-11">24,Nov 2022 - 18:27</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media56} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Travel</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															Latin words, combined with a handful of model sentence
														</p>
														<span className="text-muted fs-11">28,Nov 2022 - 10:45</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media54} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Interior</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															Contrary to popular belief, Lorem Ipsum is not simply random
														</p>
														<span className="text-muted fs-11">30,Nov 2022 - 08:32</span>
													</div>
												</div>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<div className="d-flex flex-wrap align-items-center">
													<span className="avatar avatar-xl me-3">
														<img src={media52} className="img-fluid" alt="..." />
													</span>
													<div className="flex-fill">
														<Link to="#" className="fs-14 fw-semibold mb-0">Nature</Link>
														<p className="mb-1 popular-blog-content text-truncate">
															It was popularised in the 1960s with the release of Letraset sheets containing
														</p>
														<span className="text-muted fs-11">3,Dec 2022 - 12:56</span>
													</div>
												</div>
											</ListGroup.Item>
											<li className="list-group-item text-center d-grid">
												<Button variant='' type="button" className="btn btn-primary-light">Load more</Button>
											</li>
										</ListGroup>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Newsletter
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<div className="text-center">
											<h6 className="fw-semibold mb-3"><span className="text-primary fs-18">1658</span> Subscribers</h6>
											<div className="input-group mb-3">
												<input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
												<Button variant='' className="btn btn-primary" type="button" id="blog-subscribe">Subscribe</Button>
											</div>
											<label className="form-check-label">
												By Subscribing you accept to <Link to="#" className="text-success"><u>privacy policy</u></Link>
											</label>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Explore Topics
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<ListGroup as="ul">
											<ListGroup.Item as="li">
												<Link to="#">
													<div className="d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<div>
																<span className="avatar avatar-xs bg-secondary avatar-rounded">
																	N
																</span>
															</div>
															<div>
																<span className="fw-semibold ms-2">Nature</span>
															</div>
														</div>
														<div>
															<span className="badge bg-light text-default rounded-pill">21</span>
														</div>
													</div>
												</Link>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<Link to="#">
													<div className="d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<div>
																<span className="avatar avatar-xs bg-success avatar-rounded">
																	S
																</span>
															</div>
															<div>
																<span className="fw-semibold ms-2">Sports</span>
															</div>
														</div>
														<div>
															<span className="badge bg-light text-default rounded-pill">16</span>
														</div>
													</div>
												</Link>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<Link to="#">
													<div className="d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<div>
																<span className="avatar avatar-xs bg-warning avatar-rounded">
																	F
																</span>
															</div>
															<div>
																<span className="fw-semibold ms-2">Food</span>
															</div>
														</div>
														<div>
															<span className="badge bg-light text-default rounded-pill">06</span>
														</div>
													</div>
												</Link>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<Link to="#">
													<div className="d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<div>
																<span className="avatar avatar-xs bg-danger avatar-rounded">
																	T
																</span>
															</div>
															<div>
																<span className="fw-semibold ms-2">Travel</span>
															</div>
														</div>
														<div>
															<span className="badge bg-light text-default rounded-pill">18</span>
														</div>
													</div>
												</Link>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<Link to="#">
													<div className="d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<div>
																<span className="avatar avatar-xs bg-primary avatar-rounded">
																	F
																</span>
															</div>
															<div>
																<span className="fw-semibold ms-2">Fashion</span>
															</div>
														</div>
														<div>
															<span className="badge bg-light text-default rounded-pill">09</span>
														</div>
													</div>
												</Link>
											</ListGroup.Item>
											<ListGroup.Item as="li">
												<Link to="#">
													<div className="d-flex align-items-center justify-content-between">
														<div className="d-flex align-items-center">
															<div>
																<span className="avatar avatar-xs bg-secondary avatar-rounded">
																	B
																</span>
															</div>
															<div>
																<span className="fw-semibold ms-2">Beauty</span>
															</div>
														</div>
														<div>
															<span className="badge bg-light text-default rounded-pill">11</span>
														</div>
													</div>
												</Link>
											</ListGroup.Item>
										</ListGroup>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>

		</Fragment>
	);
};

export default Blogdetails;
