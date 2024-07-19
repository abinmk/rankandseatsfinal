
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { Button, Card, Dropdown, InputGroup, ListGroup, Modal, Nav, Offcanvas, Tab } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import { MENUITEMS } from "../sidebar/sidemenu";
import DatePicker from "react-datepicker";
import store from "../../../redux/store";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import "./header.scss"
//IMAGES
import desktoplogo from "../../../assets/images/brand-logos/desktop-dark.png";
import media34 from "../../../assets/images/media/media-34.jpg";
import media35 from "../../../assets/images/media/media-35.jpg";
import media36 from "../../../assets/images/media/media-36.jpg";
import faces16 from "../../../assets/images/faces/16.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces14 from "../../../assets/images/faces/14.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import png1 from "../../../assets/images/ecommerce/png/1.png";
import png15 from "../../../assets/images/ecommerce/png/15.png";
import png40 from "../../../assets/images/ecommerce/png/40.png";
import png8 from "../../../assets/images/ecommerce/png/8.png";
import png11 from "../../../assets/images/ecommerce/png/11.png";




const Header = ({ local_varaiable, ThemeChanger }) => {

	const [startDatei, setStartDatei] = useState(new Date());

	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);

	const location = useLocation();
    const [selectedTab, setSelectedTab] = useState("Allotments");

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
        }else if (path.includes("dashboard")) {
            setSelectedTab("Dashboard");
        }
    }, [location]);

	function menuClose() {
		const theme = store.getState();
		if (window.innerWidth <= 992) {
			ThemeChanger({ ...theme, toggled: "close" });
		}
		if (window.innerWidth >= 992) {
			ThemeChanger({ ...theme, toggled: local_varaiable.toggled ? local_varaiable.toggled : "" });
		}
	}
	//Dark Model
	const ToggleDark = () => {

		ThemeChanger({
			...local_varaiable,
			"dataThemeMode": local_varaiable.dataThemeMode == "dark" ? "light" : "dark",
			"dataHeaderStyles": local_varaiable.dataThemeMode == "dark" ? "light" : "gradient",
			"dataMenuStyles": "horizontal" ? local_varaiable.dataThemeMode == "dark" ? "gradient" : "dark" : "dark"

		});
		
		const theme = store.getState();

		if (theme.dataThemeMode != "dark") {

			ThemeChanger({
				...theme,
				"bodyBg": "",
				"Light": "",
				"darkBg": "",
				"inputBorder": "",
				"dataHeaderStyles": "gradient"

			});
			localStorage.removeItem("velvetdarktheme");
			localStorage.removeItem("darkBgRGB1");
			localStorage.removeItem("darkBgRGB2");
			localStorage.removeItem("darkBgRGB3");
			localStorage.removeItem("darkBgRGB4");
			localStorage.removeItem("velvetMenu");
			localStorage.removeItem("velvetHeader");
		}
		else {
			localStorage.setItem("velvetdarktheme", "dark");
			localStorage.removeItem("velvetlighttheme");
			localStorage.removeItem("velvetHeader");
			localStorage.removeItem("velvetMenu");

		}

	};

	const [menuitems, setMenuitems] = useState(MENUITEMS);
	function closeMenuFn() {
		const closeMenuRecursively = (items) => {
			items?.forEach((item) => {
				item.active = false;
				closeMenuRecursively(item.children);
			});
		};
		closeMenuRecursively(MENUITEMS);
		setMenuitems((arr) => [...arr]);
	}
	///
	const toggleSidebar = () => {
		const theme = store.getState();
		// let html = document.documentElement;
		const sidemenuType = theme.dataNavLayout;
		if (window.innerWidth >= 992) {
			if (sidemenuType === "vertical") {
				const verticalStyle = theme.dataVerticalStyle;
				const navStyle = theme.dataNavStyle;
				switch (verticalStyle) {
				// closed
				case "closed":
					ThemeChanger({ ...theme, "dataNavStyle": "" });
					if (theme.toggled === "close-menu-close") {
						ThemeChanger({ ...theme, "toggled": "" });
					} else {
						ThemeChanger({ ...theme, "toggled": "close-menu-close" });
					}
					break;
					// icon-overlay
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
					// icon-text
				case "icontext":
					ThemeChanger({ ...theme, "dataNavStyle": "" });
					if (theme.toggled === "icon-text-close") {
						ThemeChanger({ ...theme, "toggled": "" });
					} else {
						ThemeChanger({ ...theme, "toggled": "icon-text-close" });
					}
					break;
					// doublemenu
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
					// detached
				case "detached":
					if (theme.toggled === "detached-close") {
						ThemeChanger({ ...theme, "toggled": "" });

					} else {
						ThemeChanger({ ...theme, "toggled": "detached-close" });
					}
					break;
					// default
				case "default":
					ThemeChanger({ ...theme, "toggled": "" });

				}
				switch (navStyle) {
				case "menu-click":
					if (theme.toggled === "menu-click-closed") {
						ThemeChanger({ ...theme, "toggled": "" });
					}
					else {
						ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
					}
					break;
					// icon-overlay
				case "menu-hover":
					if (theme.toggled === "menu-hover-closed") {
						ThemeChanger({ ...theme, "toggled": "" });
						closeMenuFn();
					} else {
						ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });
						// setMenuUsingUrl();
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
						// setMenuUsingUrl();

					}
					break;
				}
			}
		}
		else {
			if (theme.toggled === "close") {
				ThemeChanger({ ...theme, "toggled": "open" });

				setTimeout(() => {
					if (theme.toggled == "open") {
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

	///****fullscreeen */
	const [fullScreen, setFullScreen] = useState(false);

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

	const cartProduct = [
		{
			id: 1,
			src: png1,
			name: "Cactus mini plant",
			quantity: "02",
			price: "$1,299.00",
			oldpr: "$1,799",
			newpr: "$1,229",
		},
		{
			id: 2,
			src: png15,
			name: "Sports shoes for men",
			quantity: "01",
			price: "$179.29",
			oldpr: "$799",
			newpr: "$10,229",
		},
		{
			id: 3,
			src: png40,
			name: "Pink color smart watch",
			quantity: "03",
			oldpr: "$599",
			newpr: "$5,500",
		},
		{
			id: 4,
			src: png8,
			name: "Red Leafs plant",
			quantity: "01",
			oldpr: "$799",
			newpr: "$15,300",

		},
		{
			id: 5,
			src: png11,
			name: "Good luck mini plant",
			quantity: "02",
			oldpr: "$99",
			newpr: "$600",
		},
	];


	const img1 = <img src={faces2} alt="" />;
	const img2 = <img src={faces8} alt="" />;

	const initialNotifications = [
		{ id: 1, src: img1, icon: "", name: "Olivia James", text1: "Congratulate for New template start", text2: "", text3: "2 min ago", avatarcolor: "secondary", },
		{ id: 2, src: "", icon: "bx bx-pyramid fs-18", name: "Order Placed", text1: "Order Placed Successfully", text2: "ID: #1116773", text3: "5 min ago", avatarcolor: "warning", },
		{ id: 3, src: img2, icon: "", name: "Elizabeth Lewis", text1: "added new schedule realease date", text2: "", text3: "10 min ago", avatarcolor: "secondary", },
		{ id: 4, src: "", icon: "bx bx-pulse fs-18", name: "Your Order Has Been Shipped", text1: "Order No: 123456 Has Shipped To Your Delivery Address", text2: "", text3: "12 min ago", avatarcolor: "primary", },
		{ id: 5, src: "", icon: "bx bx-badge-check", name: "Account Has Been Verified", text1: "Your Account Has Been Verified Sucessfully", text2: "", text3: "20 min ago", avatarcolor: "pink", },
	];

	const [notifications, setNotifications] = useState([...initialNotifications]);

	const handleNotificationClose = (index) => {
		// Create a copy of the notifications array and remove the item at the specified index
		const updatedNotifications = [...notifications];
		updatedNotifications.splice(index, 1);
		setNotifications(updatedNotifications);

	};

	const searchRef = useRef(null);

	const handleClick = (event) => {
		const searchInput = searchRef.current;

		if (searchInput && (searchInput === event.target || searchInput.contains(event.target))) {
			document.querySelector(".header-search")?.classList.add("searchdrop");
		} else {
			document.querySelector(".header-search")?.classList.remove("searchdrop");
		}
	};

	useEffect(() => {
		document.body.addEventListener("click", handleClick);

		return () => {
			document.body.removeEventListener("click", handleClick);
		};
	}, []);

	//   sticky-pin
	const Topup = () => {
		if (window.scrollY > 30 && document.querySelector(".app-header")) {
			const Scolls = document.querySelectorAll(".app-header");
			Scolls.forEach((e) => {
				e.classList.add("sticky-pin");
			});
		} else {
			const Scolls = document.querySelectorAll(".app-header");
			Scolls.forEach((e) => {
				e.classList.remove("sticky-pin");
			});
		}
	};
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", Topup);
	}

	return (
		<Fragment>
			<header className="app-header">

				<div className="main-header-container container-fluid" id="main-container">


					<div className="header-content-left">
						<div className="header-element">
							<div>
								<Link aria-label="anchor" to="#" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={() => toggleSidebar()}>
									<span className="open-toggle me-2">
										<i className="bx bx-menu header-link-icon"></i>
									</span>
								</Link>
							</div>
						</div>
					<div className="header-content-left d-flex align-items-center">
                        <Link to="/home" className="header-logo">
                            <img src={desktoplogo} alt="logo" className="desktop-logo" />
                        </Link>
					</div>
						<div className="header-container">
                        <h3 className="ms-3" id="selectedTab">{selectedTab}</h3>
						</div>
					</div>

					<div className="header-content-right">
						{/* <div className="header-element header-theme-mode">
							<Link aria-label="anchor" to="#" className="header-link layout-setting" onClick={() => ToggleDark()}>

								<i className="bx bx-sun bx-flip-horizontal header-link-icon ionicon  dark-layout"></i>

								<i className="bx bx-moon bx-flip-horizontal header-link-icon ionicon light-layout"></i>

							</Link>
						</div> */}

						<Dropdown className="header-element notifications-dropdown" autoClose="outside">
							<Dropdown.Toggle variant='' className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
								<i className="bx bx-bell bx-flip-horizontal header-link-icon ionicon"></i>
								<span className="badge bg-info rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">{notifications.length}</span>
							</Dropdown.Toggle>
							<Dropdown.Menu align="end" className="main-header-dropdown dropdown-menu  border-0 dropdown-menu-end" data-popper-placement="none">
								<div className="p-3">
									<div className="d-flex align-items-center justify-content-between">
										<p className="mb-0 fs-17 fw-semibold">Notifications</p>
										<span className="badge bg-secondary-transparent" id="notifiation-data">{`${notifications.length} Unread`}</span>
									</div>
								</div>
								<div className="dropdown-divider"></div>
								<ul className="list-unstyled mb-0" >
									<SimpleBar id="header-notification-scroll">
										{notifications.map((notification, index) => (
											<Dropdown.Item as="li" key={index}>
												<div className="d-flex align-items-start">
													<div className="pe-2">
														<span className={`avatar avatar-md bg-${notification.avatarcolor}-transparent rounded-2`}>
															{notification.src}
															<i className={notification.icon}></i>
														</span>
													</div>
													<div className="flex-grow-1 d-flex  justify-content-between">
														<div>
															<p className="mb-0 fw-semibold"><Link to="#">{notification.name}</Link> <span className="text-warning">{notification.text2}</span></p>
															<span className="fs-12 text-muted fw-normal">{notification.text1}</span>

														</div>
														<div className="min-w-fit-content ms-2 text-end">
															<Link aria-label="anchor" to="#" className="min-w-fit-content text-muted me-1 -close1" onClick={() => handleNotificationClose(index)}>
																<i className="ti ti-x fs-14"></i></Link>
															<p className="mb-0 text-muted fs-11">{notification.text3}</p>
														</div>
													</div>
												</div>
											</Dropdown.Item>
										))}
									</SimpleBar>
								</ul>
								<div className={`p-3 empty-header-item1 border-top ${notifications.length === 0 ? "d-none" : "d-block"}`}>
									<div className="d-grid">
										<Link to="#" className="btn btn-primary">View All</Link>
									</div>
								</div>
								<div className={`p-5 empty-item1 ${notifications.length === 0 ? "d-block" : "d-none"}`}>
									<div className="text-center">
										<span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
											<i className="bx bx-bell-off bx-tada fs-2"></i>
										</span>
										<h6 className="fw-semibold mt-3">No New Notifications</h6>
									</div>
								</div>
							</Dropdown.Menu>
						</Dropdown>

				
						<div className="header-element header-fullscreen">
							<Link aria-label="anchor" onClick={toggleFullScreen} to="#" className="header-link">
								{fullScreen ? (
									<i className="bx bx-exit-fullscreen header-link-icon  full-screen-close"></i>
								) : (
									<i className="bx bx-fullscreen header-link-icon  full-screen-open"></i>
								)}
							</Link>
						</div>

						<Dropdown className="header-element mainuserProfile">
							<Dropdown.Toggle variant='' as="a" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
								<div className="d-flex align-items-center">
									<div className="d-sm-flex wd-100p">
										<div className="avatar avatar-sm"><img alt="avatar" className="rounded-circle" src={faces1} /></div>
										<div className="ms-2 my-auto d-none d-xl-flex">
											<h6 className=" font-weight-semibold mb-0 fs-13 user-name d-sm-block d-none">Harry Jones</h6>
										</div>
									</div>
								</div>
							</Dropdown.Toggle>
							{/* user profile */}
							<Dropdown.Menu as="ul" className="dropdown-menu  border-0 main-header-dropdown  overflow-hidden header-profile-dropdown" aria-labelledby="mainHeaderProfile">
								<Dropdown.Item as="li" className="border-0">
									<Link to="#"><i className="fs-13 me-2 bx bx-user"></i>Profile</Link></Dropdown.Item>
								<Dropdown.Item as="li" className="border-0">
									<Link to="#">
										<i className="fs-13 me-2 bx bx-comment"></i>Message
									</Link>
								</Dropdown.Item>
								<Dropdown.Item as="li" className="border-0">
									<Link to="#">
										<i className="fs-13 me-2 bx bx-cog"></i>Settings
									</Link>
								</Dropdown.Item>
								<Dropdown.Item as="li" className="border-0">
									<Link to="#">
										<i className="fs-13 me-2 bx bx-help-circle"></i>Help
									</Link>
								</Dropdown.Item>
								<Dropdown.Item as="li" className="border-0">
									<Link to="#">
										<i className="fs-13 me-2 bx bx-arrow-to-right"></i>Log Out
									</Link>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>

					   {/* settings */}
						{/* <div className="header-element">
							<Link aria-label="anchor" to="#" className="header-link switcher-icon ms-1" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas" onClick={() => Switchericon()}>
								<i className="bx bx-cog bx-spin header-link-icon"></i>
							</Link>
						</div> */}

					</div>

				</div>

			</header>
			<Offcanvas placement='end' show={show1} onHide={handleClose1} className="sidebar offcanvas offcanvas-end"  tabIndex={-1} id="sidebar-right">
				<Tab.Container defaultActiveKey="first">
					<Offcanvas.Header closeButton>
						<div>
							<Nav variant="tabs" className="tab-style-1 d-sm-flex d-block mb-0" defaultActiveKey="first">
								<Nav.Item>
									<Nav.Link eventKey="first"><i className="bx bx-user-plus me-1 fs-16 align-middle"></i>Team</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second"><i
										className="bx bx-pulse me-1 fs-16 align-middle"></i>Timeline</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third"><i
										className="bx bx-message-square-dots me-1 fs-16 align-middle"></i>Chat</Nav.Link>
								</Nav.Item>
								<Nav.Item className="me-1">
									<Link to="#" className="btn-close2 nav-link" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => handleClose1()}>
										<i className="bx bx-x sidebar-btn-close"></i>
									</Link>
								</Nav.Item>
							</Nav>
						</div>
					</Offcanvas.Header>
					<Offcanvas.Body className="position-relative">
						<Tab.Content>
							<Tab.Pane eventKey="first" className="" id="orders-1" role="tabpanel">
								<div className="card-body p-0">
									<DatePicker selected={startDatei} onChange={(date) => setStartDatei(date)} inline />
								</div>
								<div className="d-flex pt-4 mt-3 pb-3 align-items-center">
									<div>
										<h6 className="fw-semibold mb-0">Team Members</h6>
									</div>
									<div className="ms-auto">
										<Dropdown className="dropdown">
											<Dropdown.Toggle variant="" className="btn-outline-light btn btn-sm text-muted no-caret"
												data-bs-toggle="dropdown" aria-expanded="false">
												View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="" role="menu">
												<li className="border-bottom"><Dropdown.Item className="">Today</Dropdown.Item>
												</li>
												<li className="border-bottom"><Dropdown.Item className="">This
													Week</Dropdown.Item></li>
												<li><Dropdown.Item className="">Last Week</Dropdown.Item></li>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
								<ul className="ps-0 vertical-scroll">
									<li className="item">
										<div className="rounded-2 p-3 border mb-2">
											<div className="d-flex">
												<Link to="#"><img src={faces16} alt="img"
													className="avatar avatar-md rounded-2 me-3" /></Link>
												<div className="me-3">
													<Link to="#">
														<h6 className="mb-0 fw-semibold text-default">Vanessa James</h6>
													</Link>
													<span className="clearfix"></span>
													<span className="fs-12 text-muted">Front-end Developer</span>
												</div>
												<Link aria-label="anchor" to="#" className="ms-auto my-auto"> <i
													className="ri-arrow-right-s-line text-muted fs-20"></i></Link>
											</div>
										</div>
									</li>
									<li className="item">
										<div className="rounded-2 p-3 border mb-2">
											<div className="d-flex">
												<Link to="#"><span
													className="avatar avatar-md rounded-2 bg-primary-transparent text-primary me-3">KH</span></Link>
												<div className="me-3">
													<Link to="#">
														<h6 className="mb-0 fw-semibold text-default">Kriti Harris</h6>
													</Link>
													<span className="clearfix"></span>
													<span className="fs-12 text-muted">Back-end Developer</span>
												</div>
												<Link aria-label="anchor" to="#" className="ms-auto my-auto"> <i
													className="ri-arrow-right-s-line text-muted fs-20"></i></Link>
											</div>
										</div>
									</li>
									<li className="item">
										<div className="rounded-2 p-3 border mb-2">
											<div className="d-flex">
												<Link to="#"><img src={faces6} alt="img"
													className="avatar avatar-md rounded-2 me-3" /></Link>
												<div className="me-3">
													<Link to="#">
														<h6 className="mb-0 fw-semibold text-default">Mira Henry</h6>
													</Link>
													<span className="clearfix"></span>
													<span className="fs-12 text-muted">UI / UX Designer</span>
												</div>
												<Link aria-label="anchor" to="#" className="ms-auto my-auto"> <i
													className="ri-arrow-right-s-line text-muted fs-20"></i></Link>
											</div>
										</div>
									</li>
									<li className="item">
										<div className="rounded-2 p-3 border mb-2">
											<div className="d-flex">
												<Link to="#"><span
													className="avatar avatar-md rounded-2 bg-secondary-transparent text-secondary me-3">JK</span></Link>
												<div className="me-3">
													<Link to="#">
														<h6 className="mb-0 fw-semibold text-default">James Kimberly</h6>
													</Link>
													<span className="clearfix"></span>
													<span className="fs-12 text-muted">Angular Developer</span>
												</div>
												<Link aria-label="anchor" to="#" className="ms-auto my-auto"> <i
													className="ri-arrow-right-s-line text-muted fs-20"></i></Link>
											</div>
										</div>
									</li>
									<li className="item">
										<div className="rounded-2 p-3 border mb-2">
											<div className="d-flex">
												<Link to="#"><img src={faces9} alt="img"
													className="avatar avatar-md rounded-2 me-3" /></Link>
												<div className="me-3">
													<Link to="#">
														<h6 className="mb-0 fw-semibold text-default">Marley Paul</h6>
													</Link>
													<span className="clearfix"></span>
													<span className="fs-12 text-muted">Front-end Developer</span>
												</div>
												<Link aria-label="anchor" to="#" className="ms-auto my-auto"> <i
													className="ri-arrow-right-s-line text-muted fs-20"></i></Link>
											</div>
										</div>
									</li>
									<li className="item">
										<div className="rounded-2 p-3 border mb-2">
											<div className="d-flex">
												<Link to="#"><span
													className="avatar avatar-md rounded-2 bg-success-transparent text-success me-3">MA</span></Link>
												<div className="me-3">
													<Link to="#">
														<h6 className="mb-0 fw-semibold text-default">Mitrona Anna</h6>
													</Link>
													<span className="clearfix"></span>
													<span className="fs-12 text-muted">UI / UX Designer</span>
												</div>
												<Link aria-label="anchor" to="#" className="ms-auto my-auto"> <i
													className="ri-arrow-right-s-line text-muted fs-20"></i></Link>
											</div>
										</div>
									</li>
								</ul>
							</Tab.Pane>
							<Tab.Pane eventKey="second" className="" id="accepted-1" role="tabpanel">
								<ul className="activity-list">
									<li className="d-flex mt-4">
										<div>
											<i className="activity-icon">
												<Link to="#"><img src={faces14} alt="img"
													className="avatar avatar-xs rounded-2 me-3" /></Link>
											</i>
											<Link to="#">
												<h6 className="text-default">Elmer Barnes
													<span className="text-muted fs-11 mx-2 fw-normal">Today 02:41 PM</span>
												</h6>
											</Link>
											<p className="text-muted fs-12 mb-0">Added 1 attachment <strong>docfile.doc</strong></p>
											<div className="btn-group file-attach mt-3" role="group" aria-label="Basic example">
												<button type="button" className="btn btn-sm btn-primary-light">
													<span className="ri-file-line me-2"></span> Image_file.jpg
												</button>
												<button type="button" className="btn btn-sm btn-primary-light" aria-label="Close">
													<span className="ri-download-2-line"></span>
												</button>
											</div>
										</div>
									</li>
									<li className="d-flex mt-4">
										<div>
											<i className="activity-icon">
												<span className="avatar avatar-xs brround bg-success">RN</span>
											</i>
											<Link to="#">
												<h6 className="text-default">Roxanne Nunez
													<span className="text-muted fs-11 mx-2 fw-normal">Today 11:40 AM</span>
												</h6>
											</Link>
											<p className="text-muted fs-12 mb-0">Commented on <strong>Task Management</strong></p>
											<div className="activity-comment mt-3">
												<p>There are many variations of passages of Lorem Ipsum available.</p>
											</div>
										</div>
									</li>
									<li className="d-flex mt-4">
										<div>
											<i className="activity-icon">
												<span className="avatar avatar-xs brround bg-primary"><i
													className="ri-shield-line text-white"></i></span>
											</i>
											<Link to="#">
												<h6 className="text-default">Shirley Vega
													<span className="text-muted fs-11 mx-2 fw-normal">Today 08:43 AM</span>
												</h6>
											</Link>
											<p className="text-muted fs-12 mb-0">Task Closed by <strong> Today</strong></p>
										</div>
									</li>
									<li className="d-flex mt-4">
										<div>
											<i className="activity-icon">
												<Link to="#"><img src={faces11} alt="img"
													className="avatar avatar-xs rounded-2 me-3" /></Link>
											</i>
											<Link to="#">
												<h6 className="text-default">Vivian Herrera
													<span className="text-muted fs-11 mx-2 fw-normal">Today 08:00 AM</span>
												</h6>
											</Link>
											<p className="text-muted fs-12 mb-0">Assigned a new Task on <strong> UI Design</strong></p>
										</div>
									</li>
									<li className="d-flex mt-4">
										<div>
											<i className="activity-icon">
												<span className="avatar avatar-xs brround bg-success">TJ</span>
											</i>
											<Link to="#">
												<h6 className="text-default">Tony Jarvis
													<span className="text-muted fs-11 mx-2 fw-normal">Yesterday 05:40 PM</span>
												</h6>
											</Link>
											<p className="text-muted fs-12 mb-0">Added 3 attachments <strong>Project</strong></p>
											<div className="activity-images mt-3">
												<Link to="#"><img src={media34} alt="thumb1" /></Link>
												<Link to="#"><img src={media35} alt="thumb1" /></Link>
												<Link to="#"><img src={media36} alt="thumb1" /></Link>
											</div>
										</div>
									</li>
									<li className="d-flex mt-4">
										<div>
											<i className="activity-icon">
												<Link to="#"><img src={faces16} alt="img"
													className="avatar avatar-xs rounded-2 me-3" /></Link>
											</i>
											<Link to="#">
												<h6 className="text-default">Russell Kim
													<span className="text-muted fs-11 mx-2 fw-normal">17 May 2022</span>
												</h6>
											</Link>
											<p className="text-muted fs-12 mb-0">Created a group <strong> Team Unity</strong></p>
										</div>
									</li>
								</ul>
							</Tab.Pane>
							<Tab.Pane eventKey="third" className="" id="declined-1" role="tabpanel">
								<div className="list-group list-group-flush">
									<div className="pt-3 fw-semibold ps-2 text-muted">Today</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<Link to="#"><img src={faces16} alt="img"
												className="avatar avatar-md rounded-2" /></Link>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Leon Ray</h6>
												<p className="mb-0 fs-12 text-muted"> 2 mins ago </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md rounded-2 bg-danger-transparent text-danger">DT
												<span className="avatar-status bg-success"></span>
											</span>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Dane Tillery</h6>
												<p className="mb-0 fs-12 text-muted"> 10 mins ago </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<Link to="#"><img src={faces16} alt="img"
												className="avatar avatar-md rounded-2" /></Link>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Zelda Perkins</h6>
												<p className="mb-0 fs-12 text-muted"> 3 hours ago </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="py-3 fw-semibold ps-2 text-muted">Yesterday</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md rounded-2 bg-primary-transparent text-primary">GB
												<span className="avatar-status bg-success"></span>
											</span>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Gaylord Barrett</h6>
												<p className="mb-0 fs-12 text-muted"> 12:40 pm </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<Link to="#"><img src={faces16} alt="img"
												className="avatar avatar-md rounded-2" /></Link>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Roger Bradley</h6>
												<p className="mb-0 fs-12 text-muted"> 01:00 pm </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<Link to="#"><img src={faces16} alt="img"
												className="avatar avatar-md rounded-2" /></Link>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Magnus Haynes</h6>
												<p className="mb-0 fs-12 text-muted"> 03:53 pm </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md rounded-2 bg-secondary-transparent text-secondary">DC
												<span className="avatar-status bg-gray"></span>
											</span>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Doran Chasey</h6>
												<p className="mb-0 fs-12 text-muted"> 06:00 pm </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="list-group-item d-flex align-items-center">
										<div className="me-2">
											<span className="avatar avatar-md rounded-2 bg-warning-transparent text-warning">EW
												<span className="avatar-status bg-danger"></span>
											</span>
										</div>
										<div className="">
											<Link to="#">
												<h6 className="fw-semibold mb-0">Ellery Wolfe</h6>
												<p className="mb-0 fs-12 text-muted"> 08:46 pm </p>
											</Link>
										</div>
										<div className="ms-auto">
											<Link aria-label="anchor" to="#"
												className="btn btn-sm btn-outline-light  me-1"><i
													className="ri-phone-line text-success"></i></Link>
											<Link aria-label="anchor" to="#" className="btn btn-sm btn-outline-light"><i
												className="ri-chat-3-line text-primary"></i></Link>
										</div>
									</div>
									<div className="text-center">
										<Link to="#" className="btn btn-sm text-primary text-decoration-underline">View
											all</Link>
									</div>
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Offcanvas.Body>
				</Tab.Container>
			</Offcanvas>

		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
