import React, { FC, Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import { Bitcoin, Nftselectoptions, Nftstatistics } from "./nftdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Select from "react-select";

//IMAGES
import nft1 from "../../../assets/images/nft-images/1.png";
import nft2 from "../../../assets/images/nft-images/2.png";
import nft3 from "../../../assets/images/nft-images/3.png";
import nft4 from "../../../assets/images/nft-images/4.png";
import nft7 from "../../../assets/images/nft-images/7.png";
import nft6 from "../../../assets/images/nft-images/6.png";
import nft8 from "../../../assets/images/nft-images/8.png";
import nft9 from "../../../assets/images/nft-images/9.png";
import nft10 from "../../../assets/images/nft-images/10.png";
import nft11 from "../../../assets/images/nft-images/11.png";
import nft12 from "../../../assets/images/nft-images/12.png";
import nft13 from "../../../assets/images/nft-images/13.png";
import nft14 from "../../../assets/images/nft-images/14.png";
import nft15 from "../../../assets/images/nft-images/15.png";
import nft16 from "../../../assets/images/nft-images/16.png";
import nft17 from "../../../assets/images/nft-images/17.png";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import ethereum from "../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import bitcoin from "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg";
import { Autoplay } from "swiper/modules";

const Nft = () => {

	return (
		<Fragment>
			<Row>
				<Col xxl={6} lg={12} className="">
					<Card className=" overflow-hidden">
						<Card.Body className="">
							<Row>
								<Col md={4} className="col-auto">
									<div className="featured-nft d-md-block d-none">
										<img src={nft1} alt="" />
									</div>
								</Col>
								<Col md={8} className="">
									<div className="p-2">
										<h4 className="fw-semibold mb-2">Discover, collect and sell your <span className="text-primary">NFTs</span> at one place</h4>
										<p className="mb-4 text-muted fs-14 op-7">
											NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies.It is is a unique digital identifier that cannot be copied.
										</p>
										<div className="btn-list pt-1">
											<Button variant='' type="button" className="btn btn-primary btn-wave m-1">Discover Now</Button>
											<Button variant='' type="button" className="btn btn-outline-primary btn-wave m-1">Create Yours</Button>
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} lg={6} className="">
					<Card className=" overflow-hidden">
						<Card.Body className=" mb-3">
							<div className="d-flex flex-wrap align-items-center lh-1 mb-2">
								<span className="avatar avatar-md me-1">
									<img src={bitcoin} alt="" />
								</span>
								<h6 className="ms-2 fs-16 mt-2">Bitcoin</h6>
							</div>
							<div className="d-flex align-items-center flex-wrap">
								<h3 className="mb- fw-semibold">$124.00USD</h3>
								<span className="fw-semibold text-muted fs-14 ms-auto min-w-fit-content">
									<i className="ti ti-trending-up me-2 text-success fs-18 align-middle d-inline-block"></i>122.03%</span>
							</div>
						</Card.Body>
						<div id="nft-balance-chart">
							<Bitcoin />
						</div>
					</Card>
				</Col>
				<Col xxl={3} lg={6} className="">
					<Card className="">
						<Card.Body className="">
							<div className="d-flex align-items-start justify-content-between mb-3">
								<div className="flex-grow-1">
									<p className="fs-14 mb-2 text-muted">Your Balance</p>
									<h3 className="mb-3">$23,773.09</h3>
								</div>
								<span className="bg-primary-transparent text-primary avatar avatar-lg br-10"><i className="bi bi-wallet-fill"></i></span>
							</div>
							<p className="text-muted mb-1 fs-14">Transactions</p>
							<div className="d-flex align-items-center justify-content-between mb-4">
								<h6 className="fs-18 mb-0">1,107</h6>
								<span className="fs-13 text-muted">Last activity 07-08-22</span>
							</div>
							<div className="d-flex align-items-center">
								<Link to="#" className="flex-grow-1 btn btn-primary me-2">Withdraw Money</Link>
								<Link to="#" className="min-w-fit-content btn btn-outline-primary" data-bs-toggle="tooltip" aria-label="Topup Wallet"><i className="ti ti-wallet "></i></Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xxl={9} xl={12} lg={12} className="">
					<div className="d-xl-flex flex-wrap align-items-center justify-content-between gap-2 ">
						<div className="nft-tag nft-tag-primary active me-2">
							<Link aria-label="anchor" to="#" className="stretched-link"></Link>
							<span className="nft-tag-icon bg-primary-transparent"><i className="ti ti-world fs-18 "></i></span>
							<span className="nft-tag-text">All</span>
						</div>
						<div className="nft-tag nft-tag-secondary me-2">
							<Link aria-label="anchor" to="#" className="stretched-link"></Link>
							<span className="nft-tag-icon bg-secondary-transparent"><i className="ti ti-flame fs-18 "></i></span>
							<span className="nft-tag-text">New Trends</span>
						</div>
						<div className="nft-tag nft-tag-info me-2">
							<Link aria-label="anchor" to="#" className="stretched-link"></Link>
							<span className="nft-tag-icon bg-info-transparent"><i className="ti ti-palette fs-18 "></i></span>
							<span className="nft-tag-text">Art Work</span>
						</div>
						<div className="nft-tag nft-tag-success me-2">
							<Link aria-label="anchor" to="#" className="stretched-link"></Link>
							<span className="nft-tag-icon bg-success-transparent"><i className="ti ti-device-gamepad-2 fs-18 "></i></span>
							<span className="nft-tag-text">Games</span>
						</div>
						<div className="nft-tag nft-tag-warning me-2">
							<Link aria-label="anchor" to="#" className="stretched-link"></Link>
							<span className="nft-tag-icon bg-warning-transparent"><i className="ti ti-tie fs-18 "></i></span>
							<span className="nft-tag-text">Fashion</span>
						</div>
						<div className="nft-tag nft-tag-pink me-2">
							<Link aria-label="anchor" to="#" className="stretched-link"></Link>
							<span className="nft-tag-icon bg-pink-transparent"><i className="ti ti-music fs-18 "></i></span>
							<span className="nft-tag-text">Music</span>
						</div>
						<div className="nft-tag nft-tag-danger me-2">
							<Link aria-label="anchor" to="#" className="stretched-link"></Link>
							<span className="nft-tag-icon bg-danger-transparent"><i className="ti ti-home fs-18 "></i></span>
							<span className="nft-tag-text">AI</span>
						</div>
					</div>
					<div className="mb-4 d-flex align-items-center justify-content-between">
						<h5 className="fw-bold mb-0">Trending Auctions :</h5>
						<div>
							<Button variant='' type="button" className="btn btn-sm btn-primary-light btn-wave">View All</Button>
						</div>
					</div>
					<Row>
						<Col xxl={3} lg={6} sm={6} className="col-12">
							<Card className="">
								<img src={nft2} className="card-img-top" alt="..." />
								<div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
									<div className="flex-fill">
										<Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
											<i className="ri-heart-fill"></i>
										</Button>
									</div>
									<div>
										<span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
									</div>
								</div>
								<Card.Body className="">
									<p className="mb-0 text-fixed-white nft-auction-time">
										04hrs : 24m : 38s
									</p>
									<div className="d-flex justify-content-between align-items-start mb-2  flex-wrap">
										<div className="d-inline-flex align-items-start position-relative">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/profile`} className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces1} alt="img" className="avatar avatar-md rounded-circle bg-primary-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">SpaceY NFT</h6>
												<span className="fs-13 text-muted">@sp1116 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<span className="fs-13 text-muted">1.2K Likes</span>
									</div>
									<h6 className="fs-16 mb-2"><Link to="#">NFT Lorem Shapes</Link></h6>
									<div className="d-flex align-items-end  flex-wrap">
										<div className="flex-grow-1 me-2">
											<p className="fs-14 mb-1 text-muted">Highest Bid</p>
											<h6 className="fs-18 mb-0">
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="20" fill="var(--default-color)" data-name="Layer 1" viewBox="0 0 128 128"><path d="m64 34.84 35.58 23.2L64 7 29.24 58.07 64 34.84z" /><path d="M99.91 63.98 64 41.43 28.09 64 64 86.57l35.91-22.59z" /><path d="M28.42 69.93 64 121l34.76-51.08L64 93.16 28.42 69.93z" /></svg>
												1.16ETH
											</h6>
										</div>
										<Link to="#" className="min-w-fit-content btn btn-primary mt-0 mt-xxl-2">Place Bid</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} lg={6} sm={6} className="col-12">
							<Card className="custom-card">
								<img src={nft4} className="card-img-top" alt="..." />
								<div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3 ">
									<div className="flex-fill">
										<Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
											<i className="ri-heart-fill"></i>
										</Button>
									</div>
									<div>
										<span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
									</div>
								</div>
								<Card.Body className="">
									<p className="mb-0 text-fixed-white nft-auction-time">
										04hrs : 24m : 38s
									</p>
									<div className="d-flex justify-content-between align-items-start mb-2  flex-wrap">
										<div className="d-inline-flex align-items-start position-relative">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/profile`} className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces2} alt="img" className="avatar avatar-md rounded-circle bg-primary-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">Applx YUN</h6>
												<span className="fs-13 text-muted">@appi1x76 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<span className="fs-13 text-muted">1.7K Likes</span>
									</div>
									<h6 className="fs-16 mb-2"><Link to="#">Ivan Yang Hun</Link></h6>
									<div className="d-flex align-items-end  flex-wrap">
										<div className="flex-grow-1  me-2">
											<p className="fs-14 mb-1 text-muted">Highest Bid</p>
											<h6 className="fs-18 mb-0">
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="20" fill="var(--default-color)" data-name="Layer 1" viewBox="0 0 128 128"><path d="m64 34.84 35.58 23.2L64 7 29.24 58.07 64 34.84z" /><path d="M99.91 63.98 64 41.43 28.09 64 64 86.57l35.91-22.59z" /><path d="M28.42 69.93 64 121l34.76-51.08L64 93.16 28.42 69.93z" /></svg>
												2.05ETH
											</h6>
										</div>
										<Link to="#" className="min-w-fit-content btn btn-primary mt-0 mt-xxl-2">Place Bid</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} lg={6} sm={6} className="col-12">
							<Card className="">
								<img src={nft3} className="card-img-top" alt="..." />
								<div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3 ">
									<div className="flex-fill">
										<Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
											<i className="ri-heart-fill"></i>
										</Button>
									</div>
									<div>
										<span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
									</div>
								</div>
								<Card.Body className="">
									<p className="mb-0 text-fixed-white nft-auction-time">
										04hrs : 24m : 38s
									</p>
									<div className="d-flex justify-content-between align-items-start mb-2  flex-wrap">
										<div className="d-inline-flex align-items-start position-relative">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/profile`} className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces3} alt="img" className="avatar avatar-md rounded-circle bg-primary-transparent" />
											</div>
											<div className="flex-grow-1 ">
												<h6 className="mb-0">Notingu</h6>
												<span className="fs-13 text-muted">@oneplsk <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<span className="fs-13 text-muted">1.4K Likes</span>
									</div>
									<h6 className="fs-16 mb-2"><Link to="#">Nature Atom Ion</Link></h6>
									<div className="d-flex align-items-end  flex-wrap">
										<div className="flex-grow-1  me-2">
											<p className="fs-14 mb-1 text-muted">Highest Bid</p>
											<h6 className="fs-18 mb-0">
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-success" height="20" fill="var(--default-color)" data-name="Layer 1" viewBox="0 0 128 128"><path d="m64 34.84 35.58 23.2L64 7 29.24 58.07 64 34.84z" /><path d="M99.91 63.98 64 41.43 28.09 64 64 86.57l35.91-22.59z" /><path d="M28.42 69.93 64 121l34.76-51.08L64 93.16 28.42 69.93z" /></svg>
												1.76ETH
											</h6>
										</div>
										<Link to="#" className="min-w-fit-content btn btn-primary mt-0 mt-xxl-2">Place Bid</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xxl={3} lg={6} sm={6} className=" col-12">
							<Card className="">
								<img src={nft6} className="card-img-top" alt="..." />
								<div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
									<div className="flex-fill">
										<Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
											<i className="ri-heart-fill"></i>
										</Button>
									</div>
									<div>
										<span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.32k</span>
									</div>
								</div>
								<Card.Body className="">
									<p className="mb-0 text-fixed-white nft-auction-time">
										07hrs : 04m : 38s
									</p>
									<div className="d-flex justify-content-between align-items-start flex-wrap">
										<div className="d-inline-flex align-items-start position-relative">
											<Link aria-label="anchor" to={`${import.meta.env.BASE_URL}pages/profile`} className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces4} alt="img" className="avatar avatar-md rounded-circle bg-primary-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">TesliX NFT</h6>
												<span className="fs-13 text-muted">@spcss3 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<span className="fs-13 text-muted">2.34K Likes</span>
									</div>
									<h6 className="fs-16 mb-2"><Link to="#">Nortin Waving</Link></h6>
									<div className="d-flex align-items-end  flex-wrap">
										<div className="flex-grow-1  me-2">
											<p className="fs-14 mb-1 text-muted">Highest Bid</p>
											<h6 className="fs-18 mb-0">
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-pink" height="20" fill="var(--default-color)" data-name="Layer 1" viewBox="0 0 128 128"><path d="m64 34.84 35.58 23.2L64 7 29.24 58.07 64 34.84z" /><path d="M99.91 63.98 64 41.43 28.09 64 64 86.57l35.91-22.59z" /><path d="M28.42 69.93 64 121l34.76-51.08L64 93.16 28.42 69.93z" /></svg>
												3.36ETH
											</h6>
										</div>
										<Link to="#" className="min-w-fit-content btn btn-primary mt-0 mt-xxl-2">Place Bid</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xxl={3} xl={12} lg={12} className="">
					<Card className="custom-card">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Top Sellers
							</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu role="menu">
									<Dropdown.Item href="#">Today</Dropdown.Item>
									<Dropdown.Item href="#">This Week</Dropdown.Item>
									<Dropdown.Item className="dropdown-item" href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body className="">
							<ul className="list-unstyled mb-0">
								<li className="list-unstyled mb-4">
									<div className="d-flex align-items-start justify-content-between">
										<div className="d-flex align-items-center position-relative">
											<Link aria-label="anchor" to="#" className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces1} alt="img" className="avatar rounded-circle bg-warning-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">Kakashi Si</h6>
												<span className=" tx-muted">@sensei011 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<div className="min-w-fit-content d-flex">
											<Link aria-label="anchor" to="#" className="btn btn-icon btn-secondary-transparent me-1 rounded-pill btn-wave waves-effect waves-light" data-bs-toggle="tooltip" title="Follow"><i className="fe fe-user-plus"></i></Link>
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor"
													className="btn btn-icon btn-light rounded-pill  btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item className="mb-0" >Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Another Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
								</li>
								<li className="list-unstyled mb-4">
									<div className="d-flex align-items-start justify-content-between">
										<div className="d-flex align-items-center position-relative">
											<Link aria-label="anchor" to="#" className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces1} alt="img" className="avatar rounded-circle bg-warning-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">Gervon Hir</h6>
												<span className=" tx-muted">@Gervon0012 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<div className="min-w-fit-content d-flex">
											<Link aria-label="anchor" to="#" className="btn btn-icon btn-secondary-transparent me-1 rounded-pill btn-wave waves-effect waves-light" data-bs-toggle="tooltip" title="Follow"><i className="fe fe-user-plus"></i></Link>
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor"
													className="btn btn-icon btn-light rounded-pill  btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item className="mb-0" >Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Another Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
								</li>
								<li className="list-unstyled mb-4">
									<div className="d-flex align-items-start justify-content-between">
										<div className="d-flex align-items-center position-relative">
											<Link aria-label="anchor" to="#" className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces3} alt="img" className="avatar rounded-circle bg-primary-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">Oorichimaru Io</h6>
												<span className=" tx-muted">@ooro000 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<div className="min-w-fit-content d-flex">
											<Link aria-label="anchor" to="#" className="btn btn-icon btn-secondary-transparent me-1 rounded-pill btn-wave waves-effect waves-light" data-bs-toggle="tooltip" title="Following"><i className="fe fe-user-check"></i></Link>
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor"
													className="btn btn-icon btn-light rounded-pill  btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item className="mb-0" >Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Another Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
								</li>
								<li className="list-unstyled mb-4">
									<div className="d-flex align-items-start justify-content-between">
										<div className="d-flex align-items-center position-relative">
											<Link aria-label="anchor" to="#" className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces6} alt="img" className="avatar rounded-circle bg-secondary-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">Sakura Yt</h6>
												<span className=" tx-muted">@sak111 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<div className="min-w-fit-content d-flex">
											<Link aria-label="anchor" to="#" className="btn btn-icon btn-secondary-transparent me-1 rounded-pill btn-wave waves-effect waves-light" data-bs-toggle="tooltip" title="Follow"><i className="fe fe-user-plus"></i></Link>
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor"
													className="btn btn-icon btn-light rounded-pill  btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item className="mb-0" >Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Another Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
								</li>
								<li className="list-unstyled mb-4">
									<div className="d-flex align-items-start justify-content-between">
										<div className="d-flex align-items-center position-relative">
											<Link aria-label="anchor" to="#" className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces8} alt="img" className="avatar rounded-circle bg-warning-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">Sasuke Uchiha</h6>
												<span className=" tx-muted">@sasuke777 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<div className="min-w-fit-content d-flex">
											<Link aria-label="anchor" to="#" className="btn btn-icon btn-secondary-transparent me-1 rounded-pill btn-wave waves-effect waves-light" data-bs-toggle="tooltip" title="Follow"><i className="fe fe-user-plus"></i></Link>
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor"
													className="btn btn-icon btn-light rounded-pill  btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item className="mb-0" >Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Another Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
								</li>
								<li className="list-unstyled">
									<div className="d-flex align-items-start justify-content-between">
										<div className="d-flex align-items-center position-relative">
											<Link aria-label="anchor" to="#" className="stretched-link"></Link>
											<div className="me-2">
												<img src={faces5} alt="img" className="avatar rounded-circle bg-primary-transparent" />
											</div>
											<div className="flex-grow-1">
												<h6 className="mb-0">Naruto Uzumaki</h6>
												<span className=" tx-muted">@naruto111 <i className="bi bi-patch-check-fill text-primary ms-1 fs-15"></i></span>
											</div>
										</div>
										<div className="min-w-fit-content d-flex">
											<Link aria-label="anchor" to="#" className="btn btn-icon btn-secondary-transparent me-1 rounded-pill btn-wave waves-effect waves-light" data-bs-toggle="tooltip" title="Following"><i className="fe fe-user-check"></i></Link>
											<Dropdown>
												<Dropdown.Toggle variant='' aria-label="anchor"
													className="btn btn-icon btn-light rounded-pill  btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown"><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item className="mb-0" >Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Another Action</Dropdown.Item>
													<Dropdown.Item className="mb-0" >Something Else Here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xxl={6} xl={8} lg={7} md={12} sm={12} className="">
					<Card className="custom-card">
						<Card.Header className="justify-content-between flex-wrap">
							<Card.Title className="flex-between">
								Upcoming Events
							</Card.Title>
							<div className="d-flex align-items-center nft-choices">
								<Select name="state" options={Nftselectoptions} className="basic-multi-select w-5" isSearchable
									menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Nftselectoptions[5]]}
								/>
								<span className="ms-2">2023</span>
							</div>
						</Card.Header>
						<div className=" p-0">
							<div className="d-flex flex-wrap p-3 border-bottom border-block-end-dashed">
								<div className="me-3">
									<span className="avatar avatar-md avatar-rounded p-2 bg-light">
										<img src={ethereum} alt="" />
									</span>
								</div>
								<div className="d-sm-flex flex-wrap justify-content-evenly flex-fill">
									<div className="m-1">
										<span>Symbol</span>
										<p className="fw-semibold mb-0">ETH</p>
									</div>
									<div className="m-1">
										<span>Price Benchmark</span>
										<p className="fw-semibold mb-0">-0.39%</p>
									</div>
									<div className="m-1">
										<span>Price (USD)</span>
										<p className="text-success fe-semibold mb-0">$1,212.67</p>
									</div>
									<div className="m-1">
										<span>Change (24H)</span>
										<p className="text-danger fw-semibold mb-0">-0.14%</p>
									</div>
									<div className="m-1">
										<span>Market Cap</span>
										<p className="fw-semibold mb-0">$148.20B</p>
									</div>
								</div>
							</div>
							<div id="nft-statistics" className="p-3">
								<Nftstatistics />
							</div>
						</div>
					</Card>
				</Col>
				<Col xxl={3} xl={4} lg={5} md={12} sm={12} className="">
					<div className="mb-3 d-flex align-items-center justify-content-between">
						<h5 className="fw-semibold mb-0">Featured Collections :</h5>
						<div>
							<Button variant='' type="button" className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">View All</Button>
						</div>
					</div>

					<Swiper spaceBetween={30} centeredSlides={false} autoplay={{ delay: 2500, disableOnInteraction: false, }}
						modules={[Autoplay]} className="mySwiper pagination-dynamic text-start">
						<SwiperSlide>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="row g-2">
										<div className="col-6">
											<img src={nft6} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft7} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft8} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft9} alt="" className="nft-featuredcollect-image" />
										</div>
									</div>
								</Card.Body>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<div className="text-muted fs-12 d-flex align-items-center">Collection Rank :
												<span className="fw-semibold text-success fs-15 mb-0 ms-1">#1</span>
											</div>
										</div>
										<div className="d-flex align-items-center">
											<div className="me-2 lh-1">
												<span className="avatar avatar-rounded bg-light p-1 avatar-sm">
													<img src={ethereum} alt="" />
												</span>
											</div>
											<div>
												<span className="fw-semibold fs-15">1.0979ETH</span>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center">
										<div className="d-flex align-items-center flex-fill">
											<div className="me-2 lh-1">
												<span className="avatar avatar-md avatar-rounded">
													<img src={faces15} alt="" />
													<Link aria-label="anchor" to="#" className="badge rounded-pill bg-primary avatar-badge"><i className="ri-check-line align-mmiddle"></i></Link>
												</span>
											</div>
											<div>
												<p className="mb-0 fw-semibold"><Link to="#">Simon Cowell</Link></p>
												<p className="text-muted fs-12 mb-0">@simon</p>
											</div>
										</div>
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-primary-light no-caret" data-bs-toggle="dropdown">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else here</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="row g-2">
										<div className="col-6">
											<img src={nft11} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft12} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft13} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft14} alt="" className="nft-featuredcollect-image" />
										</div>
									</div>
								</Card.Body>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<div className="text-muted fs-12 d-flex align-items-center">Collection Rank :
												<span className="fw-semibold text-success fs-15 mb-0 ms-1">#2</span>
											</div>
										</div>
										<div className="d-flex align-items-center">
											<div className="me-2 lh-1">
												<span className="avatar avatar-rounded bg-light p-1 avatar-sm">
													<img src={ethereum} alt="" />
												</span>
											</div>
											<div>
												<span className="fw-semibold fs-15">1.0466ETH</span>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center">
										<div className="d-flex align-items-center flex-fill">
											<div className="me-2 lh-1">
												<span className="avatar avatar-md avatar-rounded">
													<img src={faces5} alt="" />
													<Link aria-label="anchor" to="#" className="badge rounded-pill bg-primary avatar-badge"><i className="ri-check-line align-mmiddle"></i></Link>
												</span>
											</div>
											<div>
												<p className="mb-0 fw-semibold"><Link to="#">Melissa Smith</Link></p>
												<p className="text-muted fs-12 mb-0">@melissa</p>
											</div>
										</div>
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-primary-light no-caret" data-bs-toggle="dropdown">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item href="#">Something else here</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className="custom-card">
								<Card.Body className="">
									<div className="row g-2">
										<div className="col-6">
											<img src={nft10} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft15} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft17} alt="" className="nft-featuredcollect-image" />
										</div>
										<div className="col-6">
											<img src={nft16} alt="" className="nft-featuredcollect-image" />
										</div>
									</div>
								</Card.Body>
								<div className="card-footer">
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<div className="text-muted fs-12 d-flex align-items-center">Collection Rank :
												<span className="fw-semibold text-success fs-15 mb-0 ms-1">#3</span>
											</div>
										</div>
										<div className="d-flex align-items-center">
											<div className="me-2 lh-1">
												<span className="avatar avatar-rounded bg-light p-1 avatar-sm">
													<img src={ethereum} alt="" />
												</span>
											</div>
											<div>
												<span className="fw-semibold fs-15">1.0355ETH</span>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex align-items-center">
										<div className="d-flex align-items-center flex-fill">
											<div className="me-2 lh-1">
												<span className="avatar avatar-md avatar-rounded">
													<img src={faces10} alt="" />
													<Link aria-label="anchor" to="#" className="badge rounded-pill bg-primary avatar-badge"><i className="ri-check-line align-mmiddle"></i></Link>
												</span>
											</div>
											<div>
												<p className="mb-0 fw-semibold"><Link to="#">Json Talor</Link></p>
												<p className="text-muted fs-12 mb-0">@taylor</p>
											</div>
										</div>
										<Dropdown>
											<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-primary-light no-caret" data-bs-toggle="dropdown">
												<i className="fe fe-more-vertical"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item href="#">Action</Dropdown.Item>
												<Dropdown.Item href="#">Another action</Dropdown.Item>
												<Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
							</Card>
						</SwiperSlide>
					</Swiper>
				</Col>
				<Col xxl={3} lg={6} className="">
					<Card className="custom-card overflow-hidden">
						<div className="card-header justify-content-between">
							<Card.Title>
								History
							</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu role="menu">
									<Dropdown.Item href="#">Today</Dropdown.Item>
									<Dropdown.Item href="#">This Week</Dropdown.Item>
									<Dropdown.Item className="dropdown-item" href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className=" p-0">
							<ul className="list-group list-group-flush mb-0">
								<li className="list-group-item">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={nft10} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Kakasha Si</p>
													<span className="text-muted fs-12">@sensei011</span>
												</div>
											</div>
											<div>
												<p className="mb-0 fw-semibold d-flex align-items-center fs-16">0.234<span className="text-muted fs-12 mt-1 ms-1">BTC</span></p>
											</div>
										</div>
									</Link>
								</li>
								<li className="list-group-item">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={nft1} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Oorichimaru lo</p>
													<span className="text-muted fs-12">@ooro001</span>
												</div>
											</div>
											<div>
												<p className="mb-0 fw-semibold d-flex align-items-center fs-16">0.334<span className="text-muted fs-12 mt-1 ms-1">BTC</span></p>
											</div>
										</div>
									</Link>
								</li>
								<li className="list-group-item">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={nft12} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">SakuraYM</p>
													<span className="text-muted fs-12">@sakura903</span>
												</div>
											</div>
											<div>
												<p className="mb-0 fw-semibold d-flex align-items-center fs-16">0.2534<span className="text-muted fs-12 mt-1 ms-1">BTC</span></p>
											</div>
										</div>
									</Link>
								</li>
								<li className="list-group-item">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={nft4} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Sasuke Uchiha</p>
													<span className="text-muted fs-12">@sasuke777</span>
												</div>
											</div>
											<div>
												<p className="mb-0 fw-semibold d-flex align-items-center fs-16">0.3504<span className="text-muted fs-12 mt-1 ms-1">BTC</span></p>
											</div>
										</div>
									</Link>
								</li>
								<li className="list-group-item">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={nft15} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Naruto Uzumaki</p>
													<span className="text-muted fs-12">@naruto111</span>
												</div>
											</div>
											<div>
												<p className="mb-0 fw-semibold d-flex align-items-center fs-16">0.2504<span className="text-muted fs-12 mt-1 ms-1">BTC</span></p>
											</div>
										</div>
									</Link>
								</li>
								<li className="list-group-item">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={nft17} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Uchiha Uzumaki</p>
													<span className="text-muted fs-12">@uzumaki111</span>
												</div>
											</div>
											<div>
												<p className="mb-0 fw-semibold d-flex align-items-center fs-16">0.2504<span className="text-muted fs-12 mt-1 ms-1">BTC</span></p>
											</div>
										</div>
									</Link>
								</li>
								<li className="list-group-item">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={nft6} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Nagiro Ohinavo</p>
													<span className="text-muted fs-12">@nagiro096</span>
												</div>
											</div>
											<div>
												<p className="mb-0 fw-semibold d-flex align-items-center fs-16">0.3564<span className="text-muted fs-12 mt-1 ms-1">BTC</span></p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
						</div>
					</Card>
				</Col>
				<Col xxl={3} lg={6} className="">
					<Card className="custom-card overflow-hidden">
						<div className="card-header justify-content-between">
							<Card.Title>
								Top Creators NFTs
							</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu role="menu">
									<Dropdown.Item href="#">Today</Dropdown.Item>
									<Dropdown.Item href="#">This Week</Dropdown.Item>
									<Dropdown.Item className="dropdown-item" href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className=" p-0">
							<ul className="list-group list-group-flush mb-0">
								<li className="list-group-item d-flex">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={faces10} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Kakasha Si</p>
													<span className="text-muted fs-12">@sensei011</span>
												</div>
											</div>
										</div>
									</Link>
									<div className="ms-auto my-auto">
										<Link to="#" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Follow</Link>
									</div>
								</li>
								<li className="list-group-item d-flex">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={faces1} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Oorichimaru lo</p>
													<span className="text-muted fs-12">@ooro001</span>
												</div>
											</div>
										</div>
									</Link>
									<div className="ms-auto my-auto">
										<Link to="#" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Follow</Link>
									</div>
								</li>
								<li className="list-group-item d-flex">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={faces12} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">SakuraYM</p>
													<span className="text-muted fs-12">@sakura903</span>
												</div>
											</div>
										</div>
									</Link>
									<div className="ms-auto my-auto">
										<Link to="#" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Follow</Link>
									</div>
								</li>
								<li className="list-group-item d-flex">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={faces4} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Sasuke Uchiha</p>
													<span className="text-muted fs-12">@sasuke777</span>
												</div>
											</div>
										</div>
									</Link>
									<div className="ms-auto my-auto">
										<Link to="#" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Follow</Link>
									</div>
								</li>
								<li className="list-group-item d-flex">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={faces15} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Naruto Uzumaki</p>
													<span className="text-muted fs-12">@naruto111</span>
												</div>
											</div>
										</div>
									</Link>
									<div className="ms-auto my-auto">
										<Link to="#" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Follow</Link>
									</div>
								</li>
								<li className="list-group-item d-flex">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={faces7} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Uchiha Uzumaki</p>
													<span className="text-muted fs-12">@uzumaki111</span>
												</div>
											</div>
										</div>
									</Link>
									<div className="ms-auto my-auto">
										<Link to="#" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Follow</Link>
									</div>
								</li>
								<li className="list-group-item d-flex">
									<Link to="#">
										<div className="d-flex flex-wrap align-items-center justify-content-between">
											<div className="d-flex align-items-center">
												<div className="me-2 lh-1">
													<span className="avatar avatar-md">
														<img src={faces6} alt="" />
													</span>
												</div>
												<div>
													<p className="fw-semibold mb-0 fs-14">Nagiro Ohinavo</p>
													<span className="text-muted fs-12">@nagiro096</span>
												</div>
											</div>
										</div>
									</Link>
									<div className="ms-auto my-auto">
										<Link to="#" className="btn btn-primary-light btn-sm  btn-wave waves-effect waves-light">Follow</Link>
									</div>
								</li>
							</ul>
						</div>
					</Card>
				</Col>
				<Col xxl={9} lg={12} className="">
					<Card className="custom-card">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Top NFTs
							</Card.Title>
							<div className="d-flex">
								<div className="me-3">
									<Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
								</div>
								<Dropdown>
									<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu role="menu" align="end">
										<Dropdown.Item href="#">New</Dropdown.Item>
										<Dropdown.Item href="#">Popular</Dropdown.Item>
										<Dropdown.Item href="#">Relevant</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body className="">
							<div className="table-responsive">
								<table className="table table-hover table-bordered text-nowrap">
									<thead>
										<tr>
											<th scope="col">Collection</th>
											<th scope="col">Owners</th>
											<th scope="col">Volume</th>
											<th scope="col">24h %</th>
											<th scope="col">7d %</th>
											<th scope="col">Floor Price</th>
											<th scope="col">Items</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-md avatar-rounded">
															<img src={nft1} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">Starter Sense NFT</Link></p>
														<Link to="#" className="fs-12 text-muted fw-normal" title="creator_name">@irukasensei229</Link>
													</div>
												</div>
											</td>
											<td><span className="fw-semibold text-muted">5.55k</span></td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">2.56BTC</Link></p>
													</div>
												</div>
											</td>
											<td>
												<span className="text-success"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>15.2%</span>
											</td>
											<td><span className="text-success"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>3.1%</span></td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">2.31BTC</Link></p>
													</div>
												</div>
											</td>
											<td>12.4K</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-md avatar-rounded">
															<img src={nft2} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">Lorem Kekkei</Link></p>
														<Link to="#" className="fs-12 text-muted fw-normal" title="creator_name">@clansound209</Link>
													</div>
												</div>
											</td>
											<td><span className="fw-semibold text-muted">6.13k</span></td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">1.25BTC</Link></p>
													</div>
												</div>
											</td>
											<td>
												<span className="text-success"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>3.7%</span>
											</td>
											<td><span className="text-danger"><i className="ti ti-trending-down me-1 align-middle d-inline-block"></i>0.5%</span></td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">0.25BTC</Link></p>
													</div>
												</div>
											</td>
											<td>10.1K</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-md avatar-rounded">
															<img src={nft10} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">NFT Uchiha</Link></p>
														<Link to="#" className="fs-12 text-muted fw-normal" title="creator_name">@sasukeuhi990</Link>
													</div>
												</div>
											</td>
											<td><span className="fw-semibold text-muted">7.23k</span></td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">2,092BTC</Link></p>
													</div>
												</div>
											</td>
											<td><span className="text-danger"><i className="ti ti-trending-down me-1 align-middle d-inline-block"></i>23.1%</span></td>
											<td>
												<span className="text-success"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>9.12%</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name"> 2,000BTC</Link></p>
													</div>
												</div>
											</td>
											<td>52.7K</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-md avatar-rounded">
															<img src={nft12} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">
															Lorem Ipsum Uch</Link></p>
														<Link to="#" className="fs-12 text-muted fw-normal" title="creator_name">@kakashi092</Link>
													</div>
												</div>
											</td>
											<td><span className="fw-semibold text-muted">1.07k</span></td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name"> 36.25BTC</Link></p>
													</div>
												</div>
											</td>
											<td><span className="text-danger"><i className="ti ti-trending-down me-1 align-middle d-inline-block"></i>5.2%</span></td>
											<td>
												<span className="text-danger"><i className="ti ti-trending-down me-1 align-middle d-inline-block"></i>4.1%</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">30.12BTC</Link></p>
													</div>
												</div>
											</td>
											<td>31.4K</td>
										</tr>
										<tr>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-md avatar-rounded">
															<img src={nft15} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">
															Ivan Shomer Har</Link></p>
														<Link to="#" className="fs-12 text-muted fw-normal" title="creator_name">@narutouze025</Link>
													</div>
												</div>
											</td>
											<td><span className="fw-semibold text-muted">3.02k</span></td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">12.52BTC</Link></p>
													</div>
												</div>
											</td>
											<td><span className="text-success"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>7.0%</span></td>
											<td>
												<span className="text-success"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>12.5%</span>
											</td>
											<td>
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-xs avatar-rounded">
															<img src={bitcoin} alt="" />
														</span>
													</div>
													<div>
														<p className="mb-0 fw-semibold"><Link to="#" title="nft_name">12.50BTC</Link></p>
													</div>
												</div>
											</td>
											<td>121.5K</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Body>
						<Card.Footer className="card-footer">
							<div className="d-flex align-items-center">
								<div>
									Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
								</div>
								<div className="ms-auto">
									<nav aria-label="Page navigation" className="pagination-style-4">
										<Pagination className="mb-0">
											<Pagination.Item disabled href="#">
												Prev
											</Pagination.Item>
											<Pagination.Item active href="#">1</Pagination.Item>
											<Pagination.Item href="#">2</Pagination.Item>
											<Pagination.Item className=" text-primary" href="#">
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

export default Nft;
