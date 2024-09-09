
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
								<Link to={`${import.meta.env.BASE_URL}login/`} className="btn btn-wave btn-info login-btn-mobile">
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
							</>
								) : (
								<Link to={`${import.meta.env.BASE_URL}login/`} className="btn btn-wave btn-info">
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
						<section className="section home-section">
							<div className="container main-banner-container">
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
    {/* <h4 className="fw-semibold mb-2">
      Our consultancy offers numerous advanced features.
    </h4>
    <div className="row justify-content-center">
      <Col xl={6}>
        <p className="text-muted fs-15 mb-5 fw-normal">
          Our services include the most advanced features to enhance your educational journey, ensuring optimal performance and success.
        </p>
      </Col>
    </div> */}

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
			No more missing out on the newest alerts and being the last person to know. Apart from the alerts and notification tab in our dashboard, also get notified via WhatsApp on the latest news.
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
            <h6 className="fw-semibold mx-1">Previous Year Allotments</h6>
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
			All India and state allotment details of the last 3 years listed for you in a comprehensible manner. Alloted quota, candidate category, or seat type - you name it, and we have it.
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
			Equipping you to make the best choices, we have the closing ranks of each course and each institution listed for you.
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
			Get a look into all the participating insitutes of All India and State counsellings. Bed strength, nearest railway stations, and airports are important information that will impact your choice and do not want to miss out on.
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
	  Dozens of filters that'll let you sort through your options and make comparisons easier. You get to filter the colleges and courses on the basis of state, rank, type of course, and what not. </p>
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
			8. List your favourite course in your preferred colleges and let the confusion end. Sort through them as you wish and have your choice list ready for the real choice filling.
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


<section className="section section-background container-price section-style" id="pricing">
  <div className="container text-center">
    <p className="fs-12 fw-semibold text-primary mb-1">
      <span className="landing-section-heading">PRICING</span>
    </p>
    <h4 className="fw-semibold mb-2">NEET PG 2024</h4>
    <Col xl={6} className="mx-auto">
      <p className="text-muted fs-15 mb-3 fw-normal">
	  Everything you need to navigate NEET PG Counselling 2024. Secure the best possible seat and do justice to your hard-earned rank. 
      </p>
    </Col>
    <div className="row justify-content-center mt-4">
      <Col xl={4} lg={6} md={8} sm={10}>
        <div className="card custom-card overflow-hidden shadow-sm">
          <div className="card-body p-0">
            <div className="p-4 pricing-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-left">
				<i className="fas fa-crown fs-32 text-icon me-2"></i>
                  <div className="fs-24">Premium Access</div>
                </div>
                <div>
                  <span className="badge bg-success-transparent">NEET PG 2024</span>
                </div>
              </div>
              <div className="fs-25 fw-bold mb-1 price-class">
                ₹999<sub className="text-muted fw-semibold fs-11">+ GST</sub>
              </div>
              <div className="fs-12 mb-3">
              </div>
			  <ul className=" content-text mb-0">
  {[
    "Up-to-date Info on 2024 NEET PG Counselling (AIQ, DNB, Deemed & All States)",
    "Institute Details - Contact, Infrastructure & Connectivity",
    "Previous Year Allotments - (2021, 2022 & 2023)",
    "Details of Admitted Students - (2021, 2022 & 2023)",
    "Previous Years’ Last Ranks",
    "Latest Fee Structure",
    "Latest Stipend Information",
    "Bond & Seat Leaving Penalty",
    "Seat Matrix, Courses",
    "My Choice Wishlist",
    "Alerts & Updates",
  ].map((feature, index) => (
    <li className="d-flex align-items-start mb-2" key={index}>
      <i className="ri-checkbox-circle-line fs-15 text-success me-2"></i>
      <span className="fs-14">{feature}</span>
    </li>
  ))}
</ul>
              <p className="text-muted mt-2 fs-14">
                <strong>Validity:</strong> Till the conclusion of NEET PG Counselling 2024 (AIQ & all States).
              </p>
			  <PricingPopup />
              <div className="text-center mt-4">
                
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </div>
</section>
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
          <Link to="#" className="text-fixed-white op-6"><i className="ri-phone-line me-1 align-middle"></i> +91 89 21 35 03 51</Link>
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

