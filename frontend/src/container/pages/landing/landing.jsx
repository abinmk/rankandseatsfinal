
import React, { FC, Fragment, useContext, useEffect,useState } from "react";
import { Accordion,Form, Button, Dropdown,Modal, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaCheckCircle, FaUserCircle, FaTimesCircle, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaSave, FaTimes } from 'react-icons/fa';
import axiosInstance from '../../../utils/axiosInstance';
import { connect } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ThemeChanger } from "../../../redux/action";
import store from "../../../redux/store";
import { Link } from "react-router-dom";
import "./nav.scss";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import Navbar1 from "./navbar";
import PricingPopup from "../payment/pricingPopup";

import { UserContext } from "../../../contexts/UserContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Landing = () => {

const {user,logout} = useContext(UserContext);
const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    state: '',
    counseling: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Allotments");
  const [exam, setExam] = useState("NEET_PG");
  const [counselingType, setCounselingType] = useState("");
  const [availableCounselingTypes, setAvailableCounselingTypes] = useState([]);


  useEffect(() => {
    if (showProfileModal) {
      const fetchProfileData = async () => {
        try {
          const response = await axiosInstance.get('/profile');
          setProfileData(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };
      fetchProfileData();
    }
  }, [showProfileModal]);

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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProfileData({ ...profileData, [name]: value });
	  };
	
	  const renderSubscriptionDetails = () => {
		if (profileData.paymentStatus === 'Paid') {
		  return <div className="text-success">Subscription Status: Active</div>;
		} else {
		  return <div className="text-danger">Subscription Status: Inactive</div>;
		}
	  };

	const handleSave = async () => {
		try {
		  setShowConfirmation(true);
		  setTimeout(() => {
			setShowConfirmation(false);
		  }, 3000);
		} catch (error) {
		  console.error('Error updating profile:', error);
		}
	  };
	
	  const handleClose = () => setShowProfileModal(false);
	const handleShow = () => setShowProfileModal(true);


	const handleLogout = () => {
		// Perform your logout operations here, e.g., clearing tokens, user data, etc.
		logout();
	
		// Redirect to the home page after logout
		navigate('/home');
	  };


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
		const scrollPos = window.scrollY || document.documentElement.scrollTop || (document.querySelector("body")?.scrollTop || 0);
	
		// const profileIcon = document.getElementById("profile-icon-land");
	
		let activeSectionFound = false;
	
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
						activeSectionFound = true;
					} else {
						elem.classList.remove("active");
					}
				}
			}
		});
	};
	
	// Attach the scroll event listener
	window.addEventListener("scroll", onScroll);
	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<Fragment>
			<HelmetProvider>
				<Helmet>
					<body className="landing-body landing-alert"></body>
				</Helmet>

		<header className="app-header">
      <div className="">
        <Link to={`${import.meta.env.BASE_URL}dashboards/`}>
          <img src={desktopdark} alt="logo" id="logo-mobile"  />
        </Link>
      </div>
	  <div className="d-flex">
								{/* <Link to={`${import.meta.env.BASE_URL}login/`} className="btn btn-wave btn-success">
								Dashboard
								</Link> */}

								{user ? (
									<>
								<Link to={`${import.meta.env.BASE_URL}dashboards`} className="btn btn-wav btn-success dashboard-btn-mobile">
									Dashboard
								</Link>
								<Dropdown className="mainuserProfile">
              <Dropdown.Toggle variant="" as="a" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <div className="d-flex">
                  <div className="d-sm-flex  profile-icon-div">
                    <div className=" ">
					<FontAwesomeIcon icon={faUser} className="profile-icon-filled" />
                    </div>
                    {/* <div className="ms-2 my-auto user-name-div">
                      <h6 className="font-weight-semibold mb-0 fs-13 user-name d-sm-block d-none">
                        {user ? user.name : "Guest"}
                      </h6>
                    </div> */}
                  </div>
                </div>
              </Dropdown.Toggle>

              {user && (
         <Dropdown.Menu as="ul" className="dropdown-menu border-0 main-header-dropdown overflow-hidden header-profile-dropdown" aria-labelledby="mainHeaderProfile">
         <Dropdown.Item as="li" className="border-0" onClick={handleShow}>
         <button type="button" className="btn btn-link p-0 m-0 d-flex align-items-center" onClick={handleShow} style={{ color: 'inherit', textDecoration: 'none' }}>
           <i className="fs-13 me-2 bx bx-user"></i>Profile
         </button>
         </Dropdown.Item>
         <Dropdown.Item as="li" className="border-0">
           <button type="button" className="btn btn-link p-0 m-0 d-flex align-items-center" onClick={handleLogout} style={{ color: 'inherit', textDecoration: 'none' }}>
             <i className="fs-13 me-2 bx bx-arrow-to-right"></i>Log Out
           </button>
         </Dropdown.Item>
       </Dropdown.Menu>
              )}
            </Dropdown>
								{/* <Link onclick={logout} to={`${import.meta.env.BASE_URL}home/`} className="btn btn-wave btn-danger">
								Logout
							</Link> */}
							</>
								) : (
								<Link to={`${import.meta.env.BASE_URL}login/`} className="btn btn-wave btn-danger login-btn-mobile">
									Login
								</Link>
								)}
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
							<div className="d-flex">
							<div className="btn-list d-flex">
								{/* <Link to={`${import.meta.env.BASE_URL}login/`} className="btn btn-wave btn-success">
								Dashboard
								</Link> */}

								{user ? (
									<>
								<Link to={`${import.meta.env.BASE_URL}dashboards`} className="btn btn-success">
									Dashboard
								</Link>
								<Dropdown className="mainuserProfile">
              <Dropdown.Toggle variant="" as="a" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <div className="d-flex">
                  <div className="d-sm-flex  profile-icon-div">
                    <div className="avatar avatar-sm ">
					<FontAwesomeIcon icon={faUser} className="profile-icon-filled" />

                    </div>
                    {/* <div className="ms-2 my-auto user-name-div">
                      <h6 className="font-weight-semibold mb-0 fs-13 user-name d-sm-block d-none">
                        {user ? user.name : "Guest"}
                      </h6>
                    </div> */}
                  </div>
                </div>
              </Dropdown.Toggle>

              {user && (
         <Dropdown.Menu as="ul" className="dropdown-menu border-0 main-header-dropdown overflow-hidden header-profile-dropdown" aria-labelledby="mainHeaderProfile">
         <Dropdown.Item as="li" className="border-0" onClick={handleShow}>
         <button type="button" className="btn btn-link p-0 m-0 d-flex align-items-center" onClick={handleShow} style={{ color: 'inherit', textDecoration: 'none' }}>
           <i className="fs-13 me-2 bx bx-user"></i>Profile
         </button>
         </Dropdown.Item>
         <Dropdown.Item as="li" className="border-0">
           <button type="button" className="btn btn-link p-0 m-0 d-flex align-items-center" onClick={handleLogout} style={{ color: 'inherit', textDecoration: 'none' }}>
             <i className="fs-13 me-2 bx bx-arrow-to-right"></i>Log Out
           </button>
         </Dropdown.Item>
       </Dropdown.Menu>
              )}
            </Dropdown>
								{/* <Link onclick={logout} to={`${import.meta.env.BASE_URL}home/`} className="btn btn-wave btn-danger">
								Logout
							</Link> */}
							</>
								) : (
								<Link to={`${import.meta.env.BASE_URL}login/`} className="btn btn-wave btn-danger">
									Login
								</Link>
								)}
							</div>
							</div>
						</nav>
						</div>
					</div>
					</aside>

					<Modal show={showProfileModal} onHide={handleClose} centered>
            <Modal.Header closeButton style={{ backgroundColor: '#223D6E', color: 'white', position: 'relative' }}>
            <Modal.Title style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
              <FaUser className="me-2" style={{ fontSize: '2rem', color: 'white' }} />
              User Profile
            </Modal.Title>
          </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label><FaUser className="me-2" />Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label><FaEnvelope className="me-2" />Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label><FaPhone className="me-2" />Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobileNumber"
                      value={profileData.mobileNumber}
                      onChange={handleChange}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="formState">
                    <Form.Label><FaMapMarkerAlt className="me-2" />State</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      value={profileData.state}
                      onChange={handleChange}
                    >
                      {['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry', 'Andaman & Nicobar Islands', 'Chandigarh', 'Dadra & Nagar Haveli and Daman & Diu'].map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formCounseling">
                    <Form.Label><FaGraduationCap className="me-2" />Preferred Counseling</Form.Label>
                    <Form.Control
                      as="select"
                      name="counseling"
                      value={profileData.counseling}
                      onChange={handleChange}
                    >
                      <option value="NEET PG">NEET PG</option>
                      <option value="NEET SS">NEET SS</option>
                      <option value="INI CET">INI CET</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formSubscription">
                    <Form.Label><FaCheckCircle className="me-2" />Subscription Details</Form.Label>
                    {renderSubscriptionDetails()}
                  </Form.Group>
                </Form>
                {showConfirmation && (
                  <div className="custom-popup">
                    <div className="popup-icon">
                      <FaCheckCircle className="text-success" />
                    </div>
                    <div className="popup-message">
                      <strong>Success!</strong> Profile updated successfully!
                    </div>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                  <FaTimes className="me-2" />
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  <FaSave className="me-2" />
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

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
										<p className="landing-banner-heading text-fixed-white mb-1">Your One Stop Platform for NEET PG Counselling</p>
										<div className="fs-16 mb-4 text-fixed-white op-8 px-4">Get your facts and figures straight to make an informed decision and do justice to your hard earned rank.</div>
										<Link to={`${import.meta.env.BASE_URL}allotments/`} className="m-1 btn btn-lg btn-success" target="_blank"> Explore Now <i className="ri-arrow-right-line ms-2 align-middle"></i> </Link>
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
						<Link to={`${import.meta.env.BASE_URL}allotments/`}>
						<Button variant="primary" size="lg" className="w-100 animate__animated animate__pulse">
							Explore Now
						</Button>
						</Link>              
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
						<Link to={`${import.meta.env.BASE_URL}allotments/`}>
                        <Button variant="success" size="lg" className="w-100 animate__animated animate__pulse">Get Support for NEET SS</Button>
						</Link>
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
						<Link to={`${import.meta.env.BASE_URL}allotments/`}>
                        <Button variant="info" size="lg" className="w-100 animate__animated animate__pulse">Get Support for INI CET</Button>
						</Link>
                    </Card.Body>
                </div>
            </Col>
        </div>
    </div>
</section>


<section className="section section-background section-style" id="features">
  <div className="container text-center">
    <p className="fs-12 fw-semibold text-primary mb-1">
      <span className="landing-section-heading">FEATURES</span>
    </p>
    <h4 className="fw-semibold mb-2">
      Our consultancy offers numerous advanced features.
    </h4>
    <div className="row justify-content-center">
      <Col xl={6}>
        <p className="text-muted fs-15 mb-5 fw-normal">
          Our services include the most advanced features to enhance your educational journey, ensuring optimal performance and success.
        </p>
      </Col>
    </div>

    <div className="row text-start">
      {/* Feature Card 1 */}
      <div className="col-12 col-md-3 d-flex">
        <div className="card custom-card card-style-angle border flex-fill">
          <div className="card-body rounded m-2 text-center d-flex flex-column">
            <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-success-transparent">
              <i className="ri-notification-3-line ri-2x"></i>
            </div>
            <h6 className="fw-semibold mx-1">Alerts and Notifications</h6>
            <p className="text-muted mb-2 mx-1 text-justify">
              Stay informed with our real-time alerts and notifications, even via WhatsApp.
            </p>
            <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
              Read More<i className="ri-arrow-right-s-line align-middle"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Card 2 */}
      <div className="col-12 col-md-3 d-flex">
        <div className="card custom-card card-style-angle border flex-fill">
          <div className="card-body rounded m-2 text-center d-flex flex-column">
            <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-secondary-transparent">
              <i className="ri-customer-service-2-line ri-2x"></i>
            </div>
            <h6 className="fw-semibold mx-1">Personalized Support</h6>
            <p className="text-muted mb-2 mx-1 text-justify">
              Tailored guidance to ensure you navigate through your educational journey efficiently.
            </p>
            <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
              Read More<i className="ri-arrow-right-s-line align-middle"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Card 3 */}
      <div className="col-12 col-md-3 d-flex">
        <div className="card custom-card card-style-angle border flex-fill">
          <div className="card-body rounded m-2 text-center d-flex flex-column">
            <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-warning-transparent">
              <i className="ri-coins-line ri-2x"></i>
            </div>
            <h6 className="fw-semibold mx-1">Fee, Bond, and Stipend</h6>
            <p className="text-muted mb-2 mx-1 text-justify">
              Access detailed information on fees, bonds, and stipends for every course and institution.
            </p>
            <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
              Read More<i className="ri-arrow-right-s-line align-middle"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Card 4 */}
      <div className="col-12 col-md-3 d-flex">
        <div className="card custom-card card-style-angle border flex-fill">
          <div className="card-body rounded m-2 text-center d-flex flex-column">
            <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-info-transparent">
              <i className="ri-bar-chart-2-line ri-2x"></i>
            </div>
            <h6 className="fw-semibold mx-1">Last Ranks</h6>
            <p className="text-muted mb-2 mx-1 text-justify">
              See the closing ranks of each course and institution to help guide your decisions.
            </p>
            <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
              Read More<i className="ri-arrow-right-s-line align-middle"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Repeat similar blocks for the rest of the feature cards */}

      {/* Example for Info on Institutes */}
      <div className="col-12 col-md-3 d-flex">
        <div className="card custom-card card-style-angle border flex-fill">
          <div className="card-body rounded m-2 text-center d-flex flex-column">
            <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-pink-transparent">
              <i className="ri-building-line ri-2x"></i>
            </div>
            <h6 className="fw-semibold mx-1">Info on Institutes</h6>
            <p className="text-muted mb-2 mx-1 text-justify">
              Get details about bed strength, location, and other vital data on participating institutes.
            </p>
            <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
              Read More<i className="ri-arrow-right-s-line align-middle"></i>
            </Link>
          </div>
        </div>
      </div>

	  <div className="col-12 col-md-3 d-flex">
  <div className="card custom-card card-style-angle border flex-fill">
    <div className="card-body rounded m-2 text-center d-flex flex-column">
      <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-purple-transparent">
        <i className="ri-user-line ri-2x"></i>
      </div>
      <h6 className="fw-semibold mx-1">Admitted Students</h6>
      <p className="text-muted mb-2 mx-1 text-justify">
        Details of the admitted students of the previous 3 years in each college along with their domiciliary states listed out, making your enquiries easier.
      </p>
      <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
        Read More<i className="ri-arrow-right-s-line align-middle"></i>
      </Link>
    </div>
  </div>
</div>



      {/* Example for Filters */}
      <div className="col-12 col-md-3 d-flex">
        <div className="card custom-card card-style-angle border flex-fill">
		<div className="card-body rounded m-2 text-center d-flex flex-column">
      <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-success-transparent">
        <i className="ri-filter-3-line ri-2x"></i>
      </div>
      <h6 className="fw-semibold mx-1">Filters</h6>
      <p className="text-muted mb-2 mx-1 text-justify">
	  Dozens of filters that'll let you sort through your options and make comparisons easier. You get to filter the colleges and courses on the basis of state, rank, type of course, and what not.    </p>
      <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
        Read More<i className="ri-arrow-right-s-line align-middle"></i>
      </Link>
    </div>
        </div>
      </div>

      {/* Example for Your Choice Wishlist */}
      <div className="col-12 col-md-3 d-flex">
        <div className="card custom-card card-style-angle border flex-fill">
          <div className="card-body rounded m-2 text-center d-flex flex-column">
            <div className="features-icon d-flex justify-content-center align-items-center m-auto mb-2 bg-danger-transparent">
              <i className="ri-heart-line ri-2x"></i>
            </div>
            <h6 className="fw-semibold mx-1">Your Choice Wishlist</h6>
            <p className="text-muted mb-2 mx-1 text-justify">
              Save and organize your preferred courses in colleges and have them ready for choice filling.
            </p>
            <Link className="fs-12 mt-auto text-primary" to={`${import.meta.env.BASE_URL}allotments/`}>
              Read More<i className="ri-arrow-right-s-line align-middle"></i>
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
					{/* <section className="section" id="about">*/}


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
          <u>One-Time Fee</u>
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
              <strong className="me-1 d-inline-block">Wishlist</strong> Creation
            </span>
          </li>
          <li className="d-grid">
            <PricingPopup />
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
					{/* <section className="section section-background section-style" id="contact">
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
                        <Button variant="primary" type="button" aria-label="Send Message" onClick={function(){
							alert("Thanks for choosing us !")
						}} className="btn btn-primary btn-wave">Send Message</Button>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
	<section className="section landing-footer text-fixed-white">
      <div className="container">
	  <Row className="justify-content-center my-0">
  <Col xl={2} lg={3} md={4} className="mb-4">
    <div className="px-4">
      <h6 className="fw-semibold mb-3 text-fixed-white">PAGES</h6>
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
  <Col xl={2} lg={3} md={4} className="mb-4">
    <div className="px-4">
      <h6 className="fw-semibold mb-3 text-fixed-white">INFO</h6>
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
  <Col xl={3} lg={6} md={8} className="mb-4">
    <div className="px-4">
      <h6 className="fw-semibold text-fixed-white mb-3">CONTACT US</h6>
      <ul className="list-unstyled fw-normal landing-footer-list">
        <li>
          <Link to="#" className="text-fixed-white op-6"><i className="ri-mail-line me-1 align-middle"></i> support@rankandseats.com</Link>
        </li>
        <li>
          <Link to="#" className="text-fixed-white op-6"><i className="ri-phone-line me-1 align-middle"></i> +91 80 75 91 92 24</Link>
        </li>
        <li className="mt-3">
          <p className="mb-2 fw-semibold op-8">FOLLOW US ON :</p>
          <div className="mb-0 justify-content-center">
            <div className="btn-list d-inline-flex gap-2">
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
	<div className="landing-main-footer py-4">
  <span className="footer-text">
    © <span id="year">2024</span> <Link to="" className="footer-link">Rank & Seats.</Link>
    All rights reserved.
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

