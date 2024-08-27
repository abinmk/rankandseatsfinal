import React, { Fragment, useEffect, useState, useContext } from "react";
import SimpleBar from "simplebar-react";
import { MENUITEMS } from "../sidebar/sidemenu";
import store from "../../../redux/store";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Modal, Button, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import axios from 'axios';
import { UserContext } from "../../../contexts/UserContext";
import "./header.scss";
import axiosInstance from '../../../utils/axiosInstance';
import "./userProfile.scss";
import { FaCheckCircle, FaTimesCircle, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaSave, FaTimes } from 'react-icons/fa';


// IMAGES
import desktoplogo from "../../../assets/images/brand-logos/desktop-dark.png";
import faces1 from "../../../assets/images/faces/1.jpg";

const Header = ({ local_varaiable, ThemeChanger }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    state: '',
    counseling: '',
  });

  const handleClose = () => setShowProfileModal(false);
  const handleShow = () => setShowProfileModal(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (showProfileModal) {
      // Fetch the user's profile data when the modal is opened
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

  const renderSubscriptionDetails = () => {
    if (profileData.paymentStatus === 'Paid') {
      return <div className="text-success">Subscription Status: Active</div>;
    } else {
      return <div className="text-danger">Subscription Status: Inactive</div>;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  const handleSave = async () => {
    try {
      // Simulate an API call to save profile data
      console.log('Saving profile data:', profileData);
      setShowConfirmation(true); // Show confirmation popup
      
      // Wait for the confirmation popup to be displayed for 3 seconds
      setTimeout(() => {
        setShowConfirmation(false); // Hide the confirmation popup
        //handleClose(); // Close the modal after the confirmation popup
      }, 3000);
      
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  

  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("Allotments");
  const [exam, setExam] = useState("NEET_PG");
  const [counselingType, setCounselingType] = useState("");
  const [availableCounselingTypes, setAvailableCounselingTypes] = useState([]);
  const [fullScreen, setFullScreen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, src: faces1, icon: "", name: "Olivia James", text1: "Congratulate for New template start", text2: "", text3: "2 min ago", avatarcolor: "secondary" },
    { id: 2, src: "", icon: "bx bx-pyramid fs-18", name: "Order Placed", text1: "Order Placed Successfully", text2: "ID: #1116773", text3: "5 min ago", avatarcolor: "warning" },
    { id: 3, src: faces1, icon: "", name: "Elizabeth Lewis", text1: "added new schedule release date", text2: "", text3: "10 min ago", avatarcolor: "secondary" },
    { id: 4, src: "", icon: "bx bx-pulse fs-18", name: "Your Order Has Been Shipped", text1: "Order No: 123456 Has Shipped To Your Delivery Address", text2: "", text3: "12 min ago", avatarcolor: "primary" },
    { id: 5, src: "", icon: "bx bx-badge-check", name: "Account Has Been Verified", text1: "Your Account Has Been Verified Successfully", text2: "", text3: "20 min ago", avatarcolor: "pink" },
  ]);

  const { user, logout } = useContext(UserContext);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("allotments")) {
      setSelectedTab("Allotments");
    } else if (path.includes("lastrank")) {
      setSelectedTab("Last Ranks");
    } else if (path.includes("fees")) {
      setSelectedTab("Fee, Stipend & Bonds");
    } else if (path.includes("courses")) {
      setSelectedTab("Courses");
    } else if (path.includes("institutes")) {
      setSelectedTab("Institutes");
    } else if (path.includes("wishlist")) {
      setSelectedTab("My Choice Wishlist");
    } else if (path.includes("dashboard")) {
      setSelectedTab("Dashboard");
    }
  }, [location]);

  const handleNotificationClose = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const toggleFullScreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => setFullScreen(true));
    } else {
      document.exitFullscreen().then(() => setFullScreen(false));
    }
  };

  const handleFullscreenChange = () => {
    setFullScreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleSidebar = () => {
    const theme = store.getState();
    if (window.innerWidth >= 992) {
      const sidemenuType = theme.dataNavLayout;
      if (sidemenuType === "vertical") {
        const verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          case "closed":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "close-menu-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "close-menu-close" });
            }
            break;
          case "overlay":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, "toggled": "icon-overlay-close" });
              }
            }
            break;
          case "icontext":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "icon-text-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-text-close" });
            }
            break;
          case "doublemenu":
            ThemeChanger({ ...theme, "dataNavStyle": "" });
            if (theme.toggled === "double-menu-open") {
              ThemeChanger({ ...theme, "toggled": "double-menu-close" });
            } else {
              const sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add("double-menu-active");
                  ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                } else {
                  ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                }
              }
            }
            break;
          case "detached":
            if (theme.toggled === "detached-close") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "detached-close" });
            }
            break;
          case "default":
            ThemeChanger({ ...theme, "toggled": "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.toggled === "menu-click-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
            }
            break;
          case "menu-hover":
            if (theme.toggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
              closeMenuFn();
            } else {
              ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });
            }
            break;
          case "icon-click":
            if (theme.toggled === "icon-click-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-click-closed" });
            }
            break;
          case "icon-hover":
            if (theme.toggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, "toggled": "" });
              closeMenuFn();
            } else {
              ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });
            }
            break;
        }
      }
    } else {
      if (theme.toggled === "close") {
        ThemeChanger({ ...theme, "toggled": "open" });
        setTimeout(() => {
          if (theme.toggled === "open") {
            const overlay = document.querySelector("#responsive-overlay");
            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = document.querySelector("#responsive-overlay");
                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }
          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              const overlay = document.querySelector("#responsive-overlay");
              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, "toggled": "close" });
      }
    }
  };

  const saveUserSelection = async (exam, counselingType) => {
    try {
      await axiosInstance.post('/users/save-user-selection', { exam, counselingType });
      console.log('User selection saved successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error saving user selection', error);
    }
  };

  const handleExamChange = (e) => {
    console.log("handle exam change");
    const selectedExam = e.target.value.toUpperCase().replace(/ /g, '_');
    setExam(selectedExam);
    saveUserSelection(selectedExam, counselingType);
    window.location.reload();
  };

  const handleCounselingTypeChange = (e) => {
    const selectedCounselingType = e.target.value;
    setCounselingType(selectedCounselingType);
    saveUserSelection(exam, selectedCounselingType);
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUserSelection = async () => {
      try {
        // Fetch the user's selected exam and counseling type from the backend
        const response = await axiosInstance.get(`${apiUrl}/users/exams`);
        console.log(response);
        const userSelection = response.data.selectedExams[0];
        console.log("user selection "+userSelection);

        if (userSelection.exam) {
          console.log("exam data is " + userSelection.exam);
          setExam(userSelection.exam); // Update the exam state with the user's selected exam
        }

        if (userSelection.counselingType) {
          setCounselingType(userSelection.counselingType); // Update the counselingType state
        }

      } catch (error) {
        console.error('Error fetching user selection:', error);
      }
    };

    const fetchDatasets = async () => {
      try {
        const response = await axiosInstance.get('/dataset/list-generated-datasets');
        const datasets = response.data.datasets || [];
        const types = datasets.map(dataset => {
          const match = dataset.match(/EXAM:.*_TYPE:(.*)/);          
          return match ? match[1].replace(/_/g, ' ') : null;
        }).filter(Boolean);

        setAvailableCounselingTypes(types);
      } catch (error) {
        console.error('Error fetching available datasets', error);
      }
    };

    fetchUserSelection(); // Fetch user's selected exam and counseling type
    fetchDatasets(); // Fetch available counseling types
  }, []);

  return (
    <Fragment>
      <header className="app-header">
        <div className="main-header-container container-fluid" id="main-container">
          <div className="header-content-left">
            <div className="header-element">
              <Link aria-label="anchor" to="#" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={toggleSidebar}>
                <span className="open-toggle me-2">
                  <i className="bx bx-menu header-link-icon"></i>
                </span>
              </Link>
            </div>
            <div className="header-content-left d-flex align-items-center">
              <Link to="/home" className="header-logo">
                <img src={desktoplogo} alt="logo" className="desktop-logo" />
              </Link>
            </div>
            <div className="exam-selection d-flex ms-3">
              <select value={exam} onChange={handleExamChange} className="form-select me-2" id="exam-name">
                <option value="NEET_PG">NEET PG</option>
                {/* <option value="NEET_SS">NEET SS</option>
                <option value="INI_CET">INI CET</option> */}
                {/* Add more exam options here */}
              </select>
              <select value={counselingType} onChange={handleCounselingTypeChange} className="form-select" id="counseling">
                {availableCounselingTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="header-container">
            <h3 className="ms-3" id="selectedTab">{selectedTab}</h3>
          </div>
          <div className="header-content-right">
            <Dropdown className="header-element notifications-dropdown" autoClose="outside">
              <Dropdown.Toggle variant='' className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                <i className="bx bx-bell bx-flip-horizontal header-link-icon ionicon"></i>
                <span className="badge bg-info rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">{notifications.length}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" className="main-header-dropdown dropdown-menu border-0 dropdown-menu-end" data-popper-placement="none">
                <div className="p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                    <span className="badge bg-secondary-transparent" id="notification-data">{`${notifications.length} Unread`}</span>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <ul className="list-unstyled mb-0">
                  <SimpleBar id="header-notification-scroll">
                    {notifications.map((notification, index) => (
                      <Dropdown.Item as="li" key={index}>
                        <div className="d-flex align-items-start">
                          <div className="pe-2">
                            <span className={`avatar avatar-md bg-${notification.avatarcolor}-transparent rounded-2`}>
                              {notification.src && <img src={notification.src} alt="avatar" className="avatar-img" />}
                              <i className={notification.icon}></i>
                            </span>
                          </div>
                          <div className="flex-grow-1 d-flex justify-content-between">
                            <div>
                              <p className="mb-0 fw-semibold"><Link to="#">{notification.name}</Link> <span className="text-warning">{notification.text2}</span></p>
                              <span className="fs-12 text-muted fw-normal">{notification.text1}</span>
                            </div>
                            <div className="min-w-fit-content ms-2 text-end">
                              <Link aria-label="anchor" to="#" className="min-w-fit-content text-muted me-1 -close1" onClick={() => handleNotificationClose(index)}>
                                <i className="ti ti-x fs-14"></i>
                              </Link>
                              <p className="mb-0 text-muted fs-11">{notification.text3}</p>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    ))}
                  </SimpleBar>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
            <div className="header-element header-fullscreen">
              <Link aria-label="anchor" onClick={toggleFullScreen} to="#" className="header-link">
                {fullScreen ? (
                  <i className="bx bx-exit-fullscreen header-link-icon full-screen-close"></i>
                ) : (
                  <i className="bx bx-fullscreen header-link-icon full-screen-open"></i>
                )}
              </Link>
            </div>
            <Dropdown className="mainuserProfile">
        <Dropdown.Toggle variant='' as="a" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          <div className="d-flex align-items-center">
            <div className="d-sm-flex wd-100p">
              {/* <div className="avatar avatar-sm">
                <img alt="avatar" className="rounded-circle" src={faces1} />
              </div> */}
              <div className="ms-2 my-auto d-none d-xl-flex">
                <h6 className="font-weight-semibold mb-0 fs-13 user-name d-sm-block d-none">
                  {user ? user.name : "Guest"}
                </h6> {/* Display user name */}
              </div>
            </div>
          </div>
        </Dropdown.Toggle>

        {user && (
          <Dropdown.Menu as="ul" className="dropdown-menu border-0 main-header-dropdown overflow-hidden header-profile-dropdown" aria-labelledby="mainHeaderProfile">
            <Dropdown.Item as="li" className="border-0" onClick={handleShow}>
              <i className="fs-13 me-2 bx bx-user"></i>Profile
            </Dropdown.Item>
            <Dropdown.Item as="li" className="border-0">
              <Link to="#" onClick={logout}><i className="fs-13 me-2 bx bx-arrow-to-right"></i>Log Out</Link> {/* Add logout functionality */}
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>

      {/* Profile Modal */}

      <Modal show={showProfileModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <FaUser className="me-2" />
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
              {renderSubscriptionDetails()} {/* Show subscription status based on paymentStatus */}
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
      {/* Custom Confirmation Popup */}

          </div>
        </div>
      </header>
   
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Header);
