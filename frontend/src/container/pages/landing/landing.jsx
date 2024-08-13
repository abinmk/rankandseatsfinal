
import React, { FC, Fragment, useEffect } from "react";
import { Accordion, Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ThemeChanger } from "../../../redux/action";
import store from "../../../redux/store";
import faces1 from "../../../assets/images/faces/1.jpg";
import { Link } from "react-router-dom";

//IMAGES
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import landing1 from "../../../assets/images/media/landing/1.png";
import landing3 from "../../../assets/images/media/landing/3.png";
import landing4 from "../../../assets/images/media/landing/4.png";
import landing5 from "../../../assets/images/media/landing/5.png";
import landing6 from "../../../assets/images/media/landing/6.png";
import landing7 from "../../../assets/images/media/landing/7.png";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import Navbar1 from "./navbar";

const Landing = () => {

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth <= 992) {
				const theme = store.getState();
				ThemeChanger({ ...theme, "toggled": "close", "dataNavLayout": "horizontal" });
			} else {
				const theme = store.getState();
				ThemeChanger({ ...theme, "toggled": "open", "dataNavLayout": "horizontal" });
			}
		}

		handleResize(); // Initial check

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const rootDiv = document.getElementById("root");
		if (rootDiv) {
		}
		return () => {
			if (rootDiv) {

				rootDiv.className = ""; // Remove the className when component unmounts
			}
		};
	}, []);

	const Switchericon = () => {
		document.querySelector(".offcanvas-end")?.classList.toggle("show");
		const Rightside = document.querySelector(".offcanvas-end");
		Rightside.style.insetInlineEnd = "0px";
		if (document.querySelector(".switcher-backdrop")?.classList.contains("d-none")) {
			document.querySelector(".switcher-backdrop")?.classList.add("d-block");
			document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
		}
	};

	const Topup = () => {
		const scrollY = window.scrollY;
		const landingBody = document.querySelector(".landing-body");
		const headerElements = document.querySelectorAll(".app-header");
		const sidebar = document.querySelector(".app-sidebar");

		if (scrollY > 30 && landingBody) {
			headerElements.forEach((e) => {
				e.classList.add("sticky-pin");
			});

			if (sidebar) {
				sidebar.classList.add("sticky");
			}
		} else {
			headerElements.forEach((e) => {
				e.classList.remove("sticky-pin");
			});

			if (sidebar) {
				sidebar.classList.remove("sticky");
			}
		}
	};
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", Topup);
	}
	useEffect(() => {
		const pageLinks = document.querySelectorAll(".side-menu__item");

		const handleClick = (_e) => {
			// Your event handling logic here
		};

		pageLinks.forEach((elem) => {
			elem.addEventListener("click", handleClick);
		});

		return () => {
			// Clean up event listeners when the component unmounts
			pageLinks.forEach((elem) => {
				elem.removeEventListener("click", handleClick);
			});
		};
	}, []);
	//// Template Highlights collapse

	const onScroll = () => {
		const sections = document.querySelectorAll(".side-menu__item");
		const scrollPos =
			window.scrollY ||
			document.documentElement.scrollTop ||
			(document.querySelector("body")?.scrollTop || 0);

		sections.forEach((elem) => {
			const value = elem.getAttribute("href") ?? "";
			const fragmentIndex = value.indexOf("#");
			const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

			if (fragment) {
				const refElement = document.getElementById(fragment);

				if (refElement) {
					const scrollTopMinus = scrollPos + 73;
					if (
						refElement.offsetTop <= scrollTopMinus &&
						refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
					) {
						elem.classList.add("active");
					} else {
						elem.classList.remove("active");
					}
				}
			}
		});
	};
	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	function menuClose() {

		const theme = store.getState();
		if (window.innerWidth <= 992) {
			ThemeChanger({ ...theme, toggled: "close" });
		}
		const overlayElement = document.querySelector("#responsive-overlay");
		if (overlayElement) {
			overlayElement.classList.remove("active");
		}
	}

	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="landing-body landing-alert"></body>
				</Helmet>

				<header className="app-header">

					<div className="main-header-container container-fluid">

						<div className="header-content-left">

							<div className="header-element">
								<div className="horizontal-logo">
									<Link to={`${import.meta.env.BASE_URL}dashboards/`} className="header-logo">
										{/* <img src={togglelogo} alt="logo" className="toggle-logo" />
										<img src={toggledark} alt="logo" className="toggle-dark" /> */}
									</Link>
								</div>
							</div>
							<div className="header-element">
								<Link aria-label="anchor" to="#" className="sidemenu-toggle header-link" data-bs-toggle="sidebar">
									<span className="open-toggle">
										<i className="ri-menu-3-line fs-20"></i>
									</span>
								</Link>
							</div>

						</div>

					</div>

				</header>
				<div id="responsive-overlay"></div>
				<aside className="app-sidebar d-none d-lg-block" id="sidebar">
					<div className="container p-0">
						<div className="main-sidebar">
						<nav className="main-menu-container nav nav-pills sub-open">
							<div className="landing-logo-container">
							<div className="horizontal-logo">
								<Link to={`${import.meta.env.BASE_URL}dashboards/`} className="header-logo">
								<img src={desktoplogo} alt="logo" className="desktop-logo" />
								<img src={desktopdark} alt="logo" className="desktop-dark" />
								</Link>
							</div>
							</div>
							<div className="slide-left" id="slide-left">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
								<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
							</svg>
							</div>
							<Navbar1 />
							<div className="slide-right" id="slide-right">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
								<path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
							</svg>
							</div>
							<div className="d-lg-flex d-none">
							<div className="btn-list d-xl-flex d-none">
								<Link to={`${import.meta.env.BASE_URL}login/`} className="btn btn-wave btn-success">
								Dashboard
								</Link>
							</div>
							</div>
						</nav>
						</div>
					</div>
					</aside>

				<div className="main-content landing-main">

					<div className="landing-banner" id="home">
						<section className="section">
							<div className="container main-banner-container">
								{/* <img src={landing5} alt="img" className="banner-png" />
								<img src={landing3} alt="img" className="banner-png1" />
								<img src={landing4} alt="img" className="banner-png2" />
								<img src={landing6} alt="img" className="banner-png3" /> */}
								<div className="row justify-content-center">
								<div className="col-xxl-9 col-xl-8 col-lg-12 col-md-12">
									<div className="py-lg-5 text-center">
										<p className="landing-banner-heading text-fixed-white mb-1">Achieve your dreams with <span className="">us!</span></p>
										<div className="fs-16 mb-4 text-fixed-white op-8 px-4">Your gateway to accurate rankings and seat allotments</div>
										<Link to={`${import.meta.env.BASE_URL}lastrank`} className="m-1 btn btn-lg btn-success" target="_blank"> Explore Rankings <i className="ri-arrow-right-line ms-2 align-middle"></i> </Link>
										<Link to={`${import.meta.env.BASE_URL}allotments`} className="m-1 btn btn-lg btn-light" target="_blank"> View Seat Allotments <i className="ri-eye-line ms-2 align-middle"></i> </Link>
									</div>
								</div>
							</div>
							</div>
						</section>
					</div>
					<section className="section section-background section-style" id="exam-prep">
    <div className="container text-center">
        <p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">PREPARE WITH US</span></p>
        <h4 className="fw-semibold mb-2">Your Path to Success Starts Here</h4>
        <div className="row justify-content-center">
            <Col xl={6}>
                <p className="text-muted fs-15 mb-5 fw-normal">Our consultancy provides unparalleled support to help you navigate your exam preparations. Explore our specialized support services for each exam category below.</p>
            </Col>
        </div>
        <div className="row justify-content-center">
            <Col xl={3} lg={4} md={6} sm={12} className="mb-3">
                <div className="card custom-card text-center border">
                    <Card.Body>
                        <div className="features-icon mb-2 m-auto bg-primary-transparent">
                            <i className="bx bx-book fs-24 text-primary animate__animated animate__bounce"></i>
                        </div>
                        <h6 className="fw-semibold">NEET PG</h6>
                        <p className="text-muted">Benefit from our expert support and guidance tailored for NEET PG aspirants.</p>
                        <Button variant="primary" size="lg" className="w-100 animate__animated animate__pulse">Get Support for NEET PG</Button>
                    </Card.Body>
                </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12} className="mb-3">
                <div className="card custom-card text-center border">
                    <Card.Body>
                        <div className="features-icon mb-2 m-auto bg-success-transparent">
                            <i className="bx bx-medal fs-24 text-success animate__animated animate__shakeY"></i>
                        </div>
                        <h6 className="fw-semibold">NEET SS</h6>
                        <p className="text-muted">Get the right support and guidance you need to succeed in NEET SS.</p>
                        <Button variant="success" size="lg" className="w-100 animate__animated animate__pulse">Get Support for NEET SS</Button>
                    </Card.Body>
                </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12} className="mb-3">
                <div className="card custom-card text-center border">
                    <Card.Body>
                        <div className="features-icon mb-2 m-auto bg-info-transparent">
                            <i className="bx bx-trophy fs-24 text-info animate__animated animate__rubberBand"></i>
                        </div>
                        <h6 className="fw-semibold">INI CET</h6>
                        <p className="text-muted">Leverage our expertise to navigate your INI CET preparations with confidence.</p>
                        <Button variant="info" size="lg" className="w-100 animate__animated animate__pulse">Get Support for INI CET</Button>
                    </Card.Body>
                </div>
            </Col>
        </div>
    </div>
</section>


					{/* <section className="section section-background section-style" id="exam-categories">
    <div className="container text-center">
        <p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">EXAM CATEGORIES</span></p>
        <h4 className="fw-semibold mb-2">Choose Your Exam Category</h4>
        <div className="row justify-content-center">
            <Col xl={6}>
                <p className="text-muted fs-15 mb-5 fw-normal">Select the category of exams to explore resources, guidance, and support tailored to your needs.</p>
            </Col>
        </div>
        <div className="row justify-content-center">
            <Col xl={3} lg={4} md={6} sm={12} className="mb-3">
                <Button variant="primary" size="lg" className="w-100 mb-2">NEET PG</Button>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12} className="mb-3">
                <Button variant="success" size="lg" className="w-100 mb-2">NEET SS</Button>
            </Col>
            <Col xl={3} lg={4} md={6} sm={12} className="mb-3">
                <Button variant="info" size="lg" className="w-100 mb-2">INI CET</Button>
            </Col>
        </div>
    </div>
</section> */}

					<section className="section section-background section-style " id="features">
						<div className="container text-center">
							<p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">FEATURES</span></p>
							<h4 className="fw-semibold mb-2">Our consultancy offers numerous advanced features.</h4>
							<div className="row justify-content-center">
								<Col xl={6}>
									<p className="text-muted fs-15 mb-5 fw-normal">Our services include the most advanced features to enhance your educational journey, ensuring optimal performance and success.</p>
								</Col>
							</div>
							<div className="row text-start">
								<div className="col-12 col-md-3">
									<div className="card custom-card card-style-angle border">
										<div className="card-body rounded m-2 text-center">
											<div className="features-icon m-auto mb-2 bg-primary-transparent">
												<svg className="svg-primary shadow-lg" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
													<path
														d="M7.00293 8.05957a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 7.00293 8.05957zm0-4a1 1 0 1 0 1 1A1.0013 1.0013 0 0 0 7.00293 4.05957zM17.00293 12.05957a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 17.00293 12.05957zm0-4a1 1 0 1 0 1 1A1.0013 1.0013 0 0 0 17.00293 8.05957zM7.00293 22.05957a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 7.00293 22.05957zm0-4a1 1 0 1 0 1 1A1.0013 1.0013 0 0 0 7.00293 18.05957z" />
													<path opacity=".3"
														d="M17.00293,12.05957a2.98168,2.98168,0,0,1-1.15424-.2323,2.00186,2.00186,0,0,1-1.84576,1.2323h-4a3.95376,3.95376,0,0,0-2,.55646V7.87531a2.80519,2.80519,0,0,1-2-.00007v8.3686a2.89912,2.89912,0,0,1,2.1543.048,2.00179,2.00179,0,0,1,1.8457-1.23224h4a4.00437,4.00437,0,0,0,3.90619-3.15509A2.96013,2.96013,0,0,1,17.00293,12.05957Z" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Expert Guidance
											</h6>
											<p className="text-muted mb-2 mx-1">
												Our team provides expert guidance to help you navigate your educational journey.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3">
									<div className="card custom-card border card-style-angle">
										<div className="card-body text-center rounded m-2">
											<div className="features-icon mb-2 m-auto bg-secondary-transparent">
												<svg className="svg-secondary shadow-lg" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
													<path
														d="M12,15.89355c-0.17551-0.00004-0.34792-0.04618-0.5-0.13378l-9-5.19727c-0.47839-0.27632-0.64221-0.88814-0.36589-1.36653C2.22187,9.04403,2.34806,8.91784,2.5,8.83008l9-5.19336c0.30964-0.17774,0.69036-0.17774,1,0l9,5.19336c0.4784,0.27632,0.64221,0.88814,0.36589,1.36653c-0.08776,0.15194-0.21395,0.27813-0.36589,0.36589l-9,5.19727C12.34792,15.84737,12.17551,15.89351,12,15.89355z" />
													<path opacity=".3"
														d="M21.5,13.43359l-2.48682-1.435L12.5,15.75977c-0.1521,0.08759-0.32452,0.13373-0.5,0.13379c-0.17548-0.00006-0.3479-0.0462-0.5-0.13379L4.98682,11.9986L2.5,13.43359c-0.15192,0.08771-0.27814,0.21393-0.36591,0.36584C1.85779,14.27783,2.02161,14.88965,2.5,15.16602l9,5.19727c0.1521,0.08759,0.32452,0.13373,0.5,0.13379c0.17554-0.00006,0.3479-0.0462,0.5-0.13379l9-5.19727c0.15192-0.08777,0.27814-0.21399,0.36591-0.36591C22.14221,14.32172,21.97839,13.7099,21.5,13.43359z" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Personalized Support
											</h6>
											<p className="text-muted mb-2 mx-1">
												Receive tailored guidance and support to navigate your educational journey.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3">
									<div className="card custom-card card-style-angle border">
										<div className="card-body text-center rounded m-2">
											<div className="features-icon mb-2 m-auto bg-warning-transparent">
												<svg className="svg-warning shadow-lg" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
													<path
														d="M16,11H8c-0.55197,0.00031-0.99969-0.44689-1-0.99886C7,10.00076,7,10.00038,7,10V6C6.99969,5.44803,7.44689,5.00031,7.99886,5C7.99924,5,7.99962,5,8,5h8c0.55197-0.00031,0.99969,0.44689,1,0.99886C17,5.99924,17,5.99962,17,6v4c0.00031,0.55197-0.44689,0.99969-0.99886,1C16.00076,11,16.00038,11,16,11z" />
													<path opacity=".3"
														d="M18,2H6C4.89545,2,4,2.89545,4,4v16c0,1.10455,0.89545,2,2,2h12c1.10455,0,2-0.89545,2-2V4C20,2.89545,19.10455,2,18,2z M17,6v4c0.00031,0.55194-0.4469,0.99969-0.99884,1C16.00073,11,16.00037,11,16,11H8c-0.55194,0.00031-0.99969-0.4469-1-0.99884C7,10.00073,7,10.00037,7,10V6C6.99969,5.44806,7.4469,5.00031,7.99884,5C7.99927,5,7.99963,5,8,5h8c0.55194-0.00031,0.99969,0.4469,1,0.99884C17,5.99927,17,5.99963,17,6z" />
													<circle cx="8" cy="14" r="1" />
													<circle cx="8" cy="18" r="1" />
													<circle cx="12" cy="18" r="1" />
													<circle cx="16" cy="18" r="1" />
													<circle cx="16" cy="14" r="1" />
													<circle cx="12" cy="14" r="1" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Responsive Design
											</h6>
											<p className="text-muted mb-2 mx-1">
												Our platform is built with a responsive design to ensure a seamless experience across all devices.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3">
									<div className="card custom-card card-style-angle border">
										<div className="card-body text-center rounded m-2">
											<div className="features-icon mb-2 m-auto bg-info-transparent">
												<svg className="svg-info shadow-lg" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
													<path opacity=".3"
														d="M21,22H14a.99974.99974,0,0,1-1-1V14a.99974.99974,0,0,1,1-1h7a.99974.99974,0,0,1,1,1v7A.99974.99974,0,0,1,21,22Z" />
													<path
														d="M7.91406 17.5l2.793-2.793A.99989.99989 0 0 0 9.293 13.293L6.5 16.08594 3.707 13.293A.99989.99989 0 0 0 2.293 14.707l2.793 2.793L2.293 20.293A.99989.99989 0 1 0 3.707 21.707l2.793-2.793 2.793 2.793A.99989.99989 0 0 0 10.707 20.293zM21 11H14a1.00009 1.00009 0 0 1-.89453-1.44727l3.5-7a1.04127 1.04127 0 0 1 1.78906 0l3.5 7A1.00009 1.00009 0 0 1 21 11z" />
													<path opacity=".3"
														d="M6.5,11A4.5,4.5,0,1,1,11,6.5,4.50491,4.50491,0,0,1,6.5,11Z" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Diverse Resources
											</h6>
											<p className="text-muted mb-2 mx-1">
												Access a wide variety of resources to support your educational journey and success.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3">
									<div className="card custom-card card-style-angle border">
										<div className="card-body text-center rounded m-2">
											<div className="features-icon mb-2 m-auto bg-pink-transparent">
												<svg className="svg-pink shadow-lg" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
													<path opacity=".3"
														d="M8.44444,3.11121c-1.10457,0-2,0.89543-2,2v13.55556c-0.00003,1.22729-0.99493,2.22219-2.22222,2.22223h14.44445C20.50762,20.889,22,19.39662,22,17.55567c0,0,0-0.00001,0-0.00001V5.11121c0-1.10457-0.89543-2-2-2L8.44444,3.11121z" />
													<path
														d="M6.44446,18.66675V7.55603H4c-1.10455,0-2,0.89539-2,1.99994v9.33301c0,1.10461,0.89545,2,2,2h0.22223C5.44952,20.88898,6.4444,19.89404,6.44446,18.66675z" />
													<path
														d="M17,9.0001h-6c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h6c0.55228,0,1,0.44772,1,1S17.55228,9.0001,17,9.0001z M17,13.0001h-1c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h1c0.55228,0,1,0.44771,1,1S17.55228,13.0001,17,13.0001z M12,13.0001h-1c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h1c0.55229,0,1,0.44771,1,1S12.55229,13.0001,12,13.0001z M17,17.0001h-1c-0.55229,0-1-0.44772-1-1c0-0.55229,0.44771-1,1-1h1c0.55228,0,1,0.44771,1,1C18,16.55238,17.55228,17.0001,17,17.0001z M12,17.0001h-1c-0.55229,0-1-0.44772-1-1c0-0.55229,0.44771-1,1-1h1c0.55229,0,1,0.44771,1,1C13,16.55238,12.55229,17.0001,12,17.0001z" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Comprehensive Resources
											</h6>
											<p className="text-muted mb-2 mx-1">
												Access a wide range of resources and tools to support your educational journey and success.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3">
									<div className="card custom-card card-style-angle border">
										<div className="card-body text-center rounded m-2">
											<div className="features-icon mb-2 m-auto bg-purple-transparent">
												<svg className="svg-purple shadow-lg" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
													<rect width="18" height="6" x="3" y="3" opacity=".3" rx="2" />
													<rect width="18" height="6" x="3" y="9" opacity=".3" rx="2" />
													<rect width="18" height="6" x="3" y="15" opacity=".3" rx="2" />
													<circle cx="18" cy="6" r="1" />
													<circle cx="18" cy="12" r="1" />
													<circle cx="18" cy="18" r="1" />
													<circle cx="15" cy="6" r="1" />
													<circle cx="15" cy="12" r="1" />
													<circle cx="15" cy="18" r="1" />
													<path
														d="M9 7H6A1 1 0 0 1 6 5H9A1 1 0 0 1 9 7zM9 13H6a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2zM9 19H6a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2z" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Built for Students
											</h6>
											<p className="text-muted mb-2 mx-1">
												Our platform is designed with students in mind, offering a wealth of resources and tools.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3">
									<div className="card custom-card card-style-angle border">
										<div className="card-body text-center rounded m-2">
											<div className="features-icon mb-2 m-auto bg-success-transparent">
												<svg className="svg-success shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path opacity=".3"
														d="M20,8.99969l-7-7H7a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z" />
													<path
														d="M20 8.99969H15a2 2 0 0 1-2-2v-5zM19 22a.99974.99974 0 0 1-1-1V19a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 19 22zM19 17a1.03391 1.03391 0 0 1-.71-.29.99108.99108 0 0 1-.21045-1.08984A1.14883 1.14883 0 0 1 18.29 15.29a1.02673 1.02673 0 0 1 .32959-.21.91433.91433 0 0 1 .76025 0 1.03418 1.03418 0 0 1 .33008.21 1.15772 1.15772 0 0 1 .21.33008A.98919.98919 0 0 1 19.71 16.71a1.15384 1.15384 0 0 1-.33008.21A.9994.9994 0 0 1 19 17zM15 18H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM15 14H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM10 10H9A1 1 0 0 1 9 8h1a1 1 0 0 1 0 2z" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Detailed Documentation
											</h6>
											<p className="text-muted mb-2 mx-1">
												Our documentation provides detailed guidance to help you make the most of our services.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-3">
									<div className="card custom-card card-style-angle border">
										<div className="card-body text-center rounded m-2">
											<div className="features-icon mb-2 m-auto bg-danger-transparent">
												<svg className="svg-danger shadow-lg" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
													<path opacity=".3"
														d="M11,22A9,9,0,0,1,11,4a.99943.99943,0,0,1,1,1v7h7a.99943.99943,0,0,1,1,1A9.00984,9.00984,0,0,1,11,22Z" />
													<path
														d="M21,10H15a.99943.99943,0,0,1-1-1V3a.99943.99943,0,0,1,1-1,7.0018,7.0018,0,0,1,7,7A.99943.99943,0,0,1,21,10Z" />
												</svg>
											</div>
											<h6 className="fw-semibold mx-1">
												Comprehensive Charts
											</h6>
											<p className="text-muted mb-2 mx-1">
												Utilize our comprehensive charts to gain insights and make informed decisions.
											</p>
											<Link className="fs-12 mx-1 text-primary" to="#">Read More<i className="ri-arrow-right-s-line align-middle"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section" id="about">
						<img src={landing4} alt="img" className="banner-png2 op-1" />
						<img src={landing7} alt="img" className="banner-png4" />
						<div className="container text-center">
							<p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">ABOUT US</span></p>
							<h4 className="fw-semibold mb-2">Empowering Your Educational Journey</h4>
							<div className="row justify-content-center">
								<Col xl={6}>
									<p className="text-muted fs-15 mb-5 fw-normal">Our consultancy offers tailored solutions and support to ensure your success. Discover the range of services we provide to help you achieve your academic goals.</p>
								</Col>
							</div>
							<Row>
								<Col xl={5} className="customize-image">
									<img src={landing1} alt="" className="custmize-img" />
								</Col>
								<Col lg={7} className="text-start">
									<p className="h4 mb-0"> Get to Know Us</p>
									<p className="mb-4 sub-text">Explore our diverse range of services and gain insight into our areas of specialization.</p>
									<ul className="list-unstyled fw-500 mb-4">
										<li className="list-item mb-2">
											<div className="d-flex align-items-start">
												<span className="me-1 text-primary op-8"><i className="bx bx-radio-circle-marked fs-20"></i></span>
												<div>
													<h6 className="fs-15">Creative Solutions</h6>
													<p className="op-8">We provide innovative solutions tailored to your educational needs.</p>
												</div>
											</div>
										</li>
										<li className="list-item mb-2">
											<div className="d-flex align-items-start">
												<span className="me-1 text-primary op-8"><i className="bx bx-radio-circle-marked fs-20"></i></span>
												<div>
													<h6 className="fs-15">Quality & Clean Code</h6>
													<p className="op-8 mb-0">Our platform is built with quality and clean code to ensure a smooth and efficient experience.</p>
												</div>
											</div>
										</li>
									</ul>
									<Link to="#" className="btn btn-primary btn-lg me-2">Get Started Now</Link>
									<Link to="#" className="btn btn-primary-transparent btn-lg">Learn More</Link>
								</Col>
							</Row>
						</div>
					</section>


					{/* <section className="section landing-Features" id="statistics">
						<div className="container text-center position-relative text-fixed-white">
							<p className="fs-12 fw-semibold text-primary mb-1 text-fixed-white"><span className="landing-section-heading">STATISTICS</span></p>
							<h4 className="fw-semibold mb-2 text-fixed-white">Helping Students Achieve Their Dreams.</h4>
							<div className="row justify-content-center">
								<Col xl={6}>
									<p className="op-7 fs-15 mb-5 fw-normal text-fixed-white">We take pride in guiding thousands of students towards successful college admissions, shaping their futures with our expertise.</p>
								</Col>
							</div>
							<div className="row g-4 justify-content-evenly">
								<Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
									<div className="p-3 text-center rounded-2 bg-dark-transparent">
										<span className="mb-3 avatar avatar-lg avatar-rounded bg-dark-transparent">
											<i className="fs-24 bx bx-book text-fixed-white"></i>
										</span>
										<h3 className="fw-semibold mb-0 text-fixed-white">500+</h3>
										<p className="mb-1 fs-14 op-7 text-fixed-white">
											Successful Admissions
										</p>
									</div>
								</Col>
								<Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
									<div className="p-3 text-center rounded-2 bg-dark-transparent">
										<span className="mb-3 avatar avatar-lg avatar-rounded bg-dark-transparent">
											<i className="fs-24 bx bx-graduation text-fixed-white"></i>
										</span>
										<h3 className="fw-semibold mb-0 text-fixed-white">10K+</h3>
										<p className="mb-1 fs-14 op-7 text-fixed-white">
											Students Guided
										</p>
									</div>
								</Col>
								<Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
									<div className="p-3 text-center rounded-2 bg-dark-transparent">
										<span className="mb-3 avatar avatar-lg avatar-rounded bg-dark-transparent">
											<i className="fs-24 bx bx-money text-fixed-white"></i>
										</span>
										<h3 className="fw-semibold mb-0 text-fixed-white">$15M</h3>
										<p className="mb-1 fs-14 op-7 text-fixed-white">
											Scholarships Secured
										</p>
									</div>
								</Col>
								<Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
									<div className="p-3 text-center rounded-2 bg-dark-transparent">
										<span className="mb-3 avatar avatar-lg avatar-rounded bg-dark-transparent">
											<i className="fs-24 bx bx-user-circle text-fixed-white"></i>
										</span>
										<h3 className="fw-semibold mb-0 text-fixed-white">150</h3>
										<p className="mb-1 fs-14 op-7 text-fixed-white">
											Partner Colleges
										</p>
									</div>
								</Col>
								<Col xl={2} lg={4} md={6} sm={6} className="col-12 mb-3">
									<div className="p-3 text-center rounded-2 bg-dark-transparent">
										<span className="mb-3 avatar avatar-lg avatar-rounded bg-dark-transparent">
											<i className="fs-24 bx bx-calendar text-fixed-white"></i>
										</span>
										<h3 className="fw-semibold mb-0 text-fixed-white">8+</h3>
										<p className="mb-1 fs-14 op-7 text-fixed-white">
											Years of Service
										</p>
									</div>
								</Col>
							</div>
						</div>
					</section> */}

					{/* <section className="section landing-testimonials section-background section-style " id="clients">
						<div className="container text-center">
							<p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">OUR TEAM</span></p>
							<h4 className="fw-semibold mb-2">Empowering Students Through Teamwork</h4>
							<div className="row justify-content-center">
								<Col xl={6}>
									<p className="text-muted fs-15 mb-5 fw-normal">Our success is built on a foundation of teamwork, with each member bringing their expertise to help students achieve their academic goals.</p>
								</Col>
							</div>

							<Swiper className="pagination-dynamic text-start mySwiper"
								spaceBetween={30} centeredSlides={false} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{
									dynamicBullets: true, clickable: true,
								}} modules={[Pagination, Autoplay]}
								breakpoints={{
									640: {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 30,
									},
									1024: {
										slidesPerView: 4,
										spaceBetween: 30,
									}
								}}>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces4} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Samantha Taylor</p>
											<span className="text-primary fs-12">Founder &amp; CEO</span>
											<p className="text-muted px-1 mt-2">Leading with vision and passion to shape the future of education consultancy.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" aria-label="button" type="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces15} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Peter Parker</p>
											<span className="text-primary fs-12">Director</span>
											<p className="text-muted px-1 mt-2">Overseeing operations to ensure the highest quality of service for our clients.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces12} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Andrew Garfield</p>
											<span className="text-primary fs-12">Manager</span>
											<p className="text-muted px-1 mt-2">Ensuring smooth operations and coordinating efforts across the team.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces5} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Elizabeth Rose</p>
											<span className="text-primary fs-12">HR</span>
											<p className="text-muted px-1 mt-2">Managing human resources and fostering a collaborative work environment.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces11} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Stuart Benny</p>
											<span className="text-primary fs-12">Team Lead</span>
											<p className="text-muted px-1 mt-2">Leading projects and ensuring timely delivery with high standards.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces2} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Sasha Banks</p>
											<span className="text-primary fs-12">Senior Consultant</span>
											<p className="text-muted px-1 mt-2">Providing expert advice and personalized support to students.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces8} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Alicia Keys</p>
											<span className="text-primary fs-12">Admissions Specialist</span>
											<p className="text-muted px-1 mt-2">Specializing in admissions processes to ensure student success.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card text-center team-card border">
										<Card.Body>
											<span className="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
												<img src={faces9} alt="" />
											</span>
											<p className="fw-semibold fs-15 mb-0 text-default mt-4">Jason Mama</p>
											<span className="text-primary fs-12">Educational Consultant</span>
											<p className="text-muted px-1 mt-2">Helping students navigate their educational journeys with personalized advice.</p>
											<div className="mt-3">
												<div className="btn-list">
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant="" type="button" aria-label="button" className="btn btn-icon btn-primary-light btn-wave">
														<i className="ri-instagram-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className="mt-4">
								<div className="text-center">
									<Link to="#" className="btn text-primary text-decoration-underline">View all</Link>
								</div>
							</div>
						</div>
					</section> */}

					{/* <section className="section" id="our-mission">
						<img src={landing4} alt="img" className="banner-png2 op-2" />
						<img src={landing7} alt="img" className="banner-png4" />
						<div className="container text-center">
							<p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">ABOUT PRODUCT</span></p>
							<h4 className="fw-semibold mb-2">Best in class range.</h4>
							<div className="row justify-content-center mb-5">
								<Col xl={6}>
									<p className="text-muted fs-15 mb-5 fw-normal">We assemble an experienced interdisciplinary team to make your vision real. We turn your ideas into great digital products.</p>
								</Col>
							</div>
							<div id="carouselExampleSlidesOnly">
								<div className="row justify-content-center">
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-info">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-info-transparent">
															<i className="bx bx-check-square text-info fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Quality &amp; Clean Code
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-primary">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
															<i className="bx bx-file-blank text-primary fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Advanced Pages
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-warning">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-warning-transparent">
															<i className="bx bx-bookmark-minus text-warning fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Design Quality
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-purple">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-purple-transparent">
															<i className="bx bx-select-multiple text-purple fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Multiple Demos
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-pink">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-pink-transparent">
															<i className="bx bx-layer text-pink fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															React Bootstrap Framework
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-secondary">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-secondary-transparent">
															<i className="bx bx-smile text-secondary fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															6 types of Icons
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-info">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-info-transparent">
															<i className="bx bx-check-square text-info fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Quality &amp; Clean Code
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-primary">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-primary-transparent">
															<i className="bx bx-file-blank text-primary fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Advanced Pages
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-warning">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-warning-transparent">
															<i className="bx bx-bookmark-minus text-warning fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Design Quality
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-purple">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-purple-transparent">
															<i className="bx bx-select-multiple text-purple fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															Multiple Demos
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-pink">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-pink-transparent">
															<i className="bx bx-layer text-pink fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-semibold mb-1">
															React Bootstrap Framework
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
									<div className="col-12 col-xl-3 col-lg-4 col-sm-6">
										<div className="card custom-card text-start border landing-missions landing-missions-secondary">
											<Card.Body>
												<div className="d-flex align-items-top">
													<div className="me-3">
														<span className="avatar avatar-lg avatar-rounded bg-secondary-transparent">
															<i className="bx bx-smile text-secondary fs-20  p-2 rounded-5 "></i>
														</span>
													</div>
													<div>
														<h6 className="fw-se
                                    
                                    mibold mb-1">
															6 types of Icons
														</h6>
														<p className="mb-0 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
													</div>
												</div>
											</Card.Body>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section> */}
					 <section className="section section-background section-style" id="pricing">
      <div className="container text-center">
        <p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">PRICING</span></p>
        <h4 className="fw-semibold mb-2">Affordable Plan for Your Educational Needs</h4>
        <Col xl={6} className="mx-auto">
          <p className="text-muted fs-15 mb-3 fw-normal">
            Choose the plan that suits your requirements. Our affordable plan ensures that you get the best value for your educational journey.
          </p>
        </Col>
        <div className="row justify-content-center mt-4">
          <Col xl={4} lg={6} md={8} sm={10}>
            <div className="card custom-card overflow-hidden">
              <div className="card-body p-0">
                <div className="p-4 pricing-card">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <i className="ti ti-free-rights fs-24 text-primary me-1"></i>
                      <div className="fs-18 fw-semibold">Rank and Seats</div>
                    </div>
                    <div>
                      <span className="badge bg-success-transparent">For NEET Aspirants</span>
                    </div>
                  </div>
                  <div className="fs-25 fw-bold mb-1">
                    ₹999<sub className="text-muted fw-semibold fs-11">+ GST / Per Year</sub>
                  </div>
                  <div className="mb-1 text-muted">
                    Get full access to all features to help you in your NEET counselling journey.
                  </div>
                  <div className="fs-12 mb-3">
                    <u>Billed Annually</u>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                      </span>
                      <span>
                        <strong className="me-1 d-inline-block">Full Access</strong> to All Features
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                      </span>
                      <span>
                        <strong className="me-1 d-inline-block">All</strong> Counselings
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                      </span>
                      <span>
                        <strong className="me-1 d-inline-block">Wishlist</strong>Creation
                      </span>
                    </li>
                    <li className="d-grid">
                      <Button variant="primary" type="button" aria-label="Choose Plan" className="btn btn-primary">
                        Choose Plan
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </section>
					{/* <section className="section landing-Features">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-xl-12  text-start">
									<h3 className="text-fixed-white">Get Notify When Project is Updated</h3>
									<p className=" fs-15 fw-normal text-fixed-white op-7 mt-2">We develop modern concepts to design and develop the interface design, web development to deliver them with eye-catching innovative ideas. We believe in effective, efficient and timely solutions for various types of businesses. Our team develops a
										long-term strategy to bring out spark conversation with clients, and visibility to your company.</p>
									<span className="text-center d-flex mt-3">
										<input type="email" className="form-control wd-200 me-2" id="contact-address-email" placeholder="Enter Email Id" />
										<Button variant="" type="button" aria-label="button" className="text-center btn btn-wave btn-secondary">Notify me</Button>
									</span>
								</div>
							</div>
						</div>
					</section> */}
					{/* <section className="section  section-background section-style" id="faq">
						<div className="container text-center">
							<p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">F.A.Q</span></p>
							<h4 className="fw-semibold mb-2">Frequently asked questions ?</h4>
							<div className="row justify-content-center">
								<Col xl={6}>
									<p className="text-muted fs-15 mb-5 fw-normal">We have shared some of the most frequently asked questions to help you out.</p>
								</Col>
							</div>
							<div className="row text-start">
								<Col xl={12}>
									<Row>
										<Col xl={6}>
											<Card className="custom-card">
												<Card.Header>
													<Card.Title className="d-flex align-items-center">
														<i className="bx bx-layer fs-20 me-1"></i>   General ?
													</Card.Title>
												</Card.Header>
												<Card.Body>
													<Accordion defaultActiveKey="first" className="accordion-customicon1 accordion-primary" id="accordionFAQ1">
														<Accordion.Item eventKey='first' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon2One">
																Where can I subscribe to your newsletter?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
														<Accordion.Item eventKey='second' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon2Two">
																Where can in edit my address?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
														<Accordion.Item eventKey='third' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon2Three">
																What are your opening hours?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
														<Accordion.Item eventKey='fourth' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon2Four">
																Do I have the right to return an item?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
													</Accordion>
												</Card.Body>
											</Card>
										</Col>
										<Col xl={6}>
											<Card className="custom-card">
												<Card.Header>
													<Card.Title className="d-flex align-items-center">
														<i className="bx bx-support fs-20 me-1"></i>  Support ?
													</Card.Title>
												</Card.Header>
												<Card.Body>
													<Accordion defaultActiveKey="second" className="accordion-customicon1 accordion-primary" id="accordionFAQ3">
														<Accordion.Item eventKey='first' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon3One">
																What is the order procedure?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
														<Accordion.Item eventKey='second' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon3Two">
																How and when do I receive the invoices?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
														<Accordion.Item eventKey='third' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon3Three">
																Which method of ordering is best for me?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
														<Accordion.Item eventKey='fourth' className="shadow-none">
															<Accordion.Header as="h2" id="headingcustomicon3Four">
																What does an order cost?
															</Accordion.Header>
															<Accordion.Body>
																<strong>This is the first item's accordion body.</strong> It is shown by
																default, until the collapse plugin adds the appropriate classes that we
																use to style each element
																<code>.accordion-body</code>, though the transition does limit overflow.
															</Accordion.Body>
														</Accordion.Item>
													</Accordion>
												</Card.Body>
											</Card>
										</Col>
									</Row>
								</Col>
							</div>
						</div>
					</section> */}
					{/* <section className="section" id="testimonials">
						<img src={landing4} alt="img" className="banner-png2 op-2" />
						<img src={landing7} alt="img" className="banner-png4" />
						<div className="container text-center">
							<p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">TESTIMONIALS</span></p>
							<h4 className="fw-semibold mb-2">We never failed to reach expectations</h4>
							<div className="row justify-content-center">
								<Col xl={6}>
									<p className="text-muted fs-15 mb-5 fw-normal">Some of the reviews our clients gave which brings motivation to work for future projects.</p>
								</Col>
							</div>
							<Swiper className="pagination-dynamic text-start pt-0"
								spaceBetween={30} centeredSlides={false} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{
									dynamicBullets: true, clickable: true,
								}} modules={[Pagination, Autoplay]}
								breakpoints={{
									640: {
										slidesPerView: 1,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 30,
									},
									1024: {
										slidesPerView: 4,
										spaceBetween: 30,
									}
								}} >
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces15} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
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
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces1} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
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
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces2} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
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
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces11} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
														<p className="mb-1 fw-semibold fs-14">Josephw Alize</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces2} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
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
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces5} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
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
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces8} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
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
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="card custom-card border">
										<Card.Body>
											<div className="text-center">
												<div className="">
													<div className="">
														<span className="avatar avatar-xxl mb-3">
															<img src={faces9} alt="" />
														</span>
													</div>
													<div className="lh-1 ">
														<p className="mb-1 fw-semibold fs-14">kevin Povell</p>
														<div className="mb-1">
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-fill text-warning align-middle fs-13"></i>
															<i className="ri-star-s-line text-warning align-middle fs-12"></i>
														</div>
													</div>
												</div>
												<div className="mb-3 ps-2">
													<span className="text-muted"><i className="ri-double-quotes-l fs-15"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r fs-15"></i></span>
												</div>
											</div>
										</Card.Body>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</section> */}
					<section className="section section-background section-style" id="contact">
      <div className="container text-center">
        <p className="fs-12 fw-semibold text-primary mb-1"><span className="landing-section-heading">CONTACT US</span></p>
        <h4 className="fw-semibold mb-2">Have any questions? We would love to hear from you.</h4>
        <p className="text-muted fs-15 mb-5 fw-normal">Feel free to reach out with any queries or concerns. We're here to help and ensure you have a smooth experience with Rank and Seats.</p>

        <div className="row text-start justify-content-center">
          <div className="col-xxl-10 col-lg-12 col-md-12 col-sm-12">
            <div className="card custom-card contactus-form overflow-hidden">
              <div className="card-body p-4">
                <Row>
                  <div className="col-xl-5 p-0">
                    <div className="p-3">
                      <h5 className="card-title mb-1">Contact Information</h5>
                      <p className="text-muted mb-0">Fill out the form, and our team will get back to you shortly.</p>
                    </div>
                    <div className="p-3">
                      <div className="d-flex align-items-top mt-2">
                        <div className="me-3">
                          <span className="avatar avatar-md p-2 bg-info-transparent">
                            <i className="bx bxs-phone"></i>
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="mb-1 align-items-top">
                            <h6 className="fw-semibold mb-1 lh-1">Phone Number</h6>
                            <span className="text-muted">+91 80 75 91 92 24</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-top mt-4">
                        <div className="me-3">
                          <span className="avatar avatar-md p-2 bg-pink-transparent">
                            <i className="bx bxs-envelope"></i>
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="mb-1 align-items-top">
                            <h6 className="fw-semibold mb-1 lh-1">Email Address</h6>
                            <span className="text-muted">support@rankandseats.com</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-top mt-4">
                        <div className="me-3">
                          <span className="avatar avatar-md p-2 bg-teal-transparent">
                            <i className="bx bxs-time"></i>
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="mb-1 align-items-top">
                            <h6 className="fw-semibold mb-1 lh-1">Office Hours</h6>
                            <span className="text-muted">Mon-Fri 09:00 AM - 06:00 PM</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-top mt-4">
                        <div className="me-3">
                          <span className="avatar avatar-md p-2 bg-warning-transparent">
                            <i className="bx bxs-location-plus"></i>
                          </span>
                        </div>
                        <div className="flex-fill">
                          <div className="mb-1 align-items-top">
                            <h6 className="fw-semibold mb-1 lh-1">Address</h6>
                            <span className="text-muted">1st Floor, KINFRA Techno Industrial Park, Malappuram, Kerala – 673634</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 border rounded-3 p-3">
                    <div className="row gy-3">
                      <Col xl={6}>
                        <label htmlFor="contact-address-firstname" className="form-label">First Name :</label>
                        <input type="text" className="form-control" id="contact-address-firstname" placeholder="Enter Name" />
                      </Col>
                      <Col xl={6}>
                        <label htmlFor="contact-address-lastname" className="form-label">Last Name :</label>
                        <input type="text" className="form-control" id="contact-address-lastname" placeholder="Enter Name" />
                      </Col>
                      <div className="col-xl-6 mt-4">
                        <label htmlFor="contact-address-phone" className="form-label">Phone No :</label>
                        <input type="text" className="form-control" id="contact-address-phone" placeholder="Enter Phone No" />
                      </div>
                      <div className="col-xl-6 mt-4">
                        <label htmlFor="contact-address-email" className="form-label">Email Id :</label>
                        <input type="email" className="form-control" id="contact-address-email1" placeholder="Enter Email Id" />
                      </div>
                      <div className="col-xl-6 mt-4">
                        <label htmlFor="contact-address-address" className="form-label">Address :</label>
                        <textarea className="form-control" id="contact-address-address" rows={2} placeholder="Enter Address"></textarea>
                      </div>
                      <div className="col-xl-6 mt-4">
                        <label htmlFor="contact-mail-message" className="form-label">Message :</label>
                        <textarea className="form-control" id="contact-mail-message" rows={2} placeholder="Enter Your Message"></textarea>
                      </div>
                    </div>
                    <div className="card-footer border-top-0 ps-0 pb-0 mt-1">
                      <div className="text-start">
                        <Button variant="primary" type="button" aria-label="Send Message" className="btn btn-primary btn-wave">Send Message</Button>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	<section className="section landing-footer text-fixed-white">
      <div className="container">
        <Row>
          <Col xl={4}>
            <div className="px-4">
              <p className="fw-semibold mb-3">
                <Link aria-label="anchor" to="/">
                  <img src={desktopdark} alt="Rank and Seats Logo" />
                </Link>
              </p>
              <p className="mb-2 op-6 fw-normal">
                Rank and Seats is your trusted partner in navigating the complexities of NEET counseling. We provide comprehensive data and insights to help you make informed decisions about your future.
              </p>
              <p className="mb-0 op-6 fw-normal">Your success is our priority. Let's achieve it together.</p>
            </div>
          </Col>
          <Col xl={2}>
            <div className="px-4">
              <h6 className="fw-semibold mb-3 text-fixed-white mb-2">PAGES</h6>
              <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                <li>
                  <a href="/about-us" className="text-fixed-white" target="_blank" rel="noopener noreferrer">About Us</a>
                </li>
                <li>
                  <a href="/contact-us" className="text-fixed-white" target="_blank" rel="noopener noreferrer">Contact Us</a>
                </li>
                <li>
                  <a href="/pricing" className="text-fixed-white" target="_blank" rel="noopener noreferrer">Pricing</a>
                </li>
                <li>
                  <a href="/features" className="text-fixed-white" target="_blank" rel="noopener noreferrer">Features</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={2}>
            <div className="px-4">
              <h6 className="fw-semibold mb-3 text-fixed-white mb-2">INFO</h6>
              <ul className="list-unstyled op-6 fw-normal landing-footer-list">
                <li>
                  <Link to="/privacy-policy" className="text-fixed-white">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-fixed-white">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/cancellation-refund-policy" className="text-fixed-white">Cancellation/Refund Policy</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={4}>
            <div className="px-4">
              <h6 className="fw-semibold text-fixed-white mb-2">CONTACT US</h6>
              <ul className="list-unstyled fw-normal landing-footer-list">
                <li>
                  <Link to="#" className="text-fixed-white op-6"><i className="ri-home-4-line me-1 align-middle"></i> Rankseats Solutions LLP
C/o Kayalody Arcade
Thettamala Road
Vellamunda, Wayanad
Kerala-670731</Link>
                </li>
                <li>
                  <Link to="#" className="text-fixed-white op-6"><i className="ri-mail-line me-1 align-middle"></i> support@rankandseats.com</Link>
                </li>
                <li>
                  <Link to="#" className="text-fixed-white op-6"><i className="ri-phone-line me-1 align-middle"></i> +91 80 75 91 92 24</Link>
                </li>
                <li className="mt-3">
                  <p className="mb-2 fw-semibold op-8">FOLLOW US ON :</p>
				  <div className="mb-0">
  <div className="btn-list">
    <a href="https://facebook.com/rankandseats" target="_blank" rel="noopener noreferrer">
      <Button variant="" type="button" aria-label="Facebook" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
        <i className="ri-facebook-line fw-bold"></i>
      </Button>
    </a>
    <a href="https://twitter.com/rankandseats" target="_blank" rel="noopener noreferrer">
      <Button variant="" type="button" aria-label="Twitter" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
        <i className="ri-twitter-line fw-bold"></i>
      </Button>
    </a>
    <a href="https://instagram.com/rankandseats" target="_blank" rel="noopener noreferrer">
      <Button variant="" type="button" aria-label="Instagram" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
        <i className="ri-instagram-line fw-bold"></i>
      </Button>
    </a>
    <a href="https://youtube.com/rankandseats" target="_blank" rel="noopener noreferrer">
      <Button variant="" type="button" aria-label="YouTube" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
        <i className="ri-youtube-line fw-bold"></i>
      </Button>
    </a>
  </div>
</div>

                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>

					<div className="text-center landing-main-footer py-3">
						<span className="text-muted fs-15"> Copyright © <span id="year">2024</span> <Link to="#" className="text-primary fw-semibold"><u>Rank & Seats</u></Link>.
							Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#" className="text-primary fw-semibold"><u>
								Sysbreeze</u>
						</Link> All
							rights
							reserved
						</span>
					</div>

				</div>
			</HelmetProvider>
		</Fragment>
	);
};
const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landing);

