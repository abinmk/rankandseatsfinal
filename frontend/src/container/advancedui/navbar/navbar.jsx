import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Collapse, Container, Dropdown, Form, InputGroup, Nav, NavDropdown, Navbar, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";

const Navbars = () => {

	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Navbar with sub-component
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
								<Container fluid>
									<Navbar.Brand href="#">
										<img src={togglelogo} alt="" className="d-inline-block align-text-top" />
									</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="" id="navbarSupportedContent">
										<Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item>
												<Nav.Link active className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="" href="#">Link</Nav.Link>
											</Nav.Item>
											<NavDropdown title="Dropdown" id="basic-nav-dropdown">
												<NavDropdown.Item href="#">Action</NavDropdown.Item>
												<NavDropdown.Item href="#">
													Another action
												</NavDropdown.Item>
												<NavDropdown.Divider />
												<NavDropdown.Item href="#">
													Something else
													here
												</NavDropdown.Item>
											</NavDropdown>
											<Nav.Item>
												<Nav.Link className="disabled">Disabled</Nav.Link>
											</Nav.Item>
										</Nav>
										<Form className="d-flex" role="search">
											<Form.Control className="me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button variant='primary' className="btn"
												type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Brand With And Without Links
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar bg-light mb-3">
								<Container fluid>
									<Link className="navbar-brand" to="#"><img src={togglelogo} alt="" /></Link>
								</Container>
							</Navbar>
							<Navbar className="navbar bg-light">
								<Container fluid>
									<span className="navbar-brand mb-0 h1"><img src={togglelogo} alt="" /></span>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Image and text
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar bg-light">
								<Container fluid>
									<Navbar.Brand className="navbar-brand">
										<img src={togglelogo} alt="" width="24"
											height="24" className="d-inline-block align-text-top" /> Bootstrap
									</Navbar.Brand>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Nav with lists, links and dropdowns
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar-expand-lg bg-light mb-3" expand="lg">
								<Container fluid>
									<Link className="navbar-brand" to="#">
										<img src={togglelogo} alt="" /></Link>
									<Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </Navbar.Toggle>
									<Navbar.Collapse className="collapsee" id="navbarNav">
										<Nav as="ul" className="navbar-nav">
											<Nav.Item as="li"> <a className="nav-link active" aria-current="page" href="#!">Home</a> </Nav.Item>
											<Nav.Item> <a className="nav-link" href="#!">Features</a> </Nav.Item>
											<Nav.Item> <a className="nav-link" href="#!">Pricing</a> </Nav.Item>
											<Nav.Item> <a className="nav-link disabled">Disabled</a> </Nav.Item>
										</Nav>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<Navbar expand="lg" className="navbar navbar-expand-lg bg-light mb-3">
								<Container fluid>
									<Navbar.Brand >
										<img src={togglelogo} alt="" />
									</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarNavAltMarkup">
										<Nav className="navbar-nav">
											<Nav.Link className="active" aria-current="page" >Home</Nav.Link>
											<Nav.Link >Features</Nav.Link>
											<Nav.Link >Pricing</Nav.Link>
											<Nav.Link className="disabled" >Disabled</Nav.Link>
										</Nav>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
								<Container fluid>
									<Navbar.Brand >
										<img src={togglelogo} alt="" />
									</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarNavDropdown">
										<Nav className="navbar-nav">
											<Nav.Item>
												<Nav.Link className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link>Features</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link>Pricing</Nav.Link>
											</Nav.Item>
											<Nav.Item className="dropdown">
												<NavDropdown title="Dropdown" id="basic-nav-dropdown">
													<NavDropdown.Item>Action</NavDropdown.Item>
													<NavDropdown.Item>
														Another action
													</NavDropdown.Item>
													<NavDropdown.Divider />
													<NavDropdown.Item>Something else here</NavDropdown.Item>
												</NavDropdown>
											</Nav.Item>
										</Nav>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								External content
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Collapse in={open}>
								<div className="bg-dark p-4">
									<h5 className="text-white h4">Collapsed content</h5>
									<span className="text-white op-7">Toggleable via the navbar brand.</span>
								</div>
							</Collapse>
							<Navbar className="navbar navbar-dark bg-dark rounded-0">
								<Container fluid>
									<Button variant=''
										onClick={() => setOpen(!open)} className="nav-toggle"
										aria-controls="example-collapse-text"
										aria-expanded={open}>
										<span className="navbar-toggler-icon"></span>
									</Button>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Responsive behaviors Toggler
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light mb-3">
								<Container fluid>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo01">
										<Navbar.Brand className="navbar-brand text-default">Hidden brand</Navbar.Brand>
										<Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item as="li">
												<a href="#!" className="active nav-link" aria-current="page">Home</a>
											</Nav.Item>
											<Nav.Item as="li">
												<a href="#!" className='nav-link'>Link</a>
											</Nav.Item>
											<Nav.Item as="li">
												<a className="nav-link disabled" href="#!" tabIndex={-1}
													aria-disabled="true">Disabled</a>
											</Nav.Item>
										</Nav>
										<Form className="d-flex">
											<Form.Control className="form-control me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button className="btn btn-primary" variant='primary'
												type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<h6>With a brand name shown on the left and toggler on the right:</h6>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light mb-3">
								<Container fluid>
									<Navbar.Brand className="navbar-brand text-default">Navbar</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo02">
										<Nav className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item>
												<a className="nav-link active" aria-current="page" href="#!">Home</a>
											</Nav.Item>
											<Nav.Item>
												<a href="#!" className='nav-link'>Link</a>
											</Nav.Item>
											<Nav.Item>
												<a className="nav-link disabled" href="#!" tabIndex={-1}
													aria-disabled="true">Disabled</a>
											</Nav.Item>
										</Nav>
										<Form className="d-flex">
											<Form.Control className="form-control me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button className="btn btn-primary" variant='primary'
												type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<h6>With a toggler on the left and brand name on the right:</h6>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
								<Container fluid>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Brand className="navbar-brand text-default">Navbar</Navbar.Brand>
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo03">
										<Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item as="li">
												<Nav.Link className="active" aria-current="page" href="#">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link href="#">Link</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link className="disabled" href="#" tabIndex={-1}
													aria-disabled="true">Disabled</Nav.Link>
											</Nav.Item>
										</Nav>
										<Form className="d-flex">
											<Form.Control className="form-control me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button className="btn btn-primary" variant='primary'
												type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Scrolling
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
								<Container fluid>
									<Navbar.Brand className="">Navbar scroll</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarScroll">
										<Nav as="ul" className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
										>
											<Nav.Item as="li">
												<Nav.Link className="nav-link active" aria-current="page" href="#">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link className="nav-link" href="#">Link</Nav.Link>
											</Nav.Item>
											<Dropdown className="nav-item dropdown">
												<Dropdown.Toggle variant='' className="nav-link dropdown-toggle"
													id="navbarScrollingDropdown" role="button"
													data-bs-toggle="dropdown" aria-expanded="false">
													Link
												</Dropdown.Toggle>
												<Dropdown.Menu className="dropdown-menu"
													aria-labelledby="navbarScrollingDropdown">
													<Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
													<Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
													<Dropdown.Divider className="dropdown-divider" />
													<Dropdown.Item className="dropdown-item" href="#">Something else
														here</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<Nav.Item as="li">
												<Nav.Link className="disabled" href="#" tabIndex={-1}
													aria-disabled="true">Link</Nav.Link>
											</Nav.Item>
										</Nav>
										<Form className="d-flex mt-3">
											<Form.Control className=" me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button className="btn btn-primary" variant='primary'
												type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Containers
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<h6>Top center</h6>
							<Container>
								<Navbar expand="lg" className="navbar-expand-lg bg-light mb-3">
									<Container fluid>
										<Navbar.Brand>Navbar</Navbar.Brand>
									</Container>
								</Navbar>
							</Container>
							<h6>Change the responsive container to how to wide the content</h6>
							<Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
								<div className="container-md">
									<Navbar.Brand>Navbar</Navbar.Brand>
								</div>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Placement
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar fixed-bottom navbar-light bg-light">
								<Container fluid>
									<Navbar.Brand >Fixed bottom</Navbar.Brand>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Placement
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="sticky-top navbar-light bg-light">
								<Container fluid>
									<Navbar.Brand className="">Sticky top</Navbar.Brand>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Placement
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar bg-light">
								<Container fluid>
									<Navbar.Brand >Default</Navbar.Brand>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Placement
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar fixed-top bg-light">
								<Container fluid>
									<Navbar.Brand >Fixed top</Navbar.Brand>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xxl={6} xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Transparent Color Schemes
							</Card.Title>
						</Card.Header>
						<Card.Body>

							<Navbar expand="lg" className="navbar navbar-primary-transparent mb-3">
								<Container fluid>
									<Navbar.Brand className="navbar-brand">
										<img src={togglelogo} alt="" />
									</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarColor01">
										<Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item as="li">
												<Nav.Link className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link>Features</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link>About</Nav.Link>
											</Nav.Item>
										</Nav>
										<Form className="d-flex" role="search">
											<Form.Control className="form-control me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button className="btn" variant='primary' type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-secondary-transparent mb-3">
								<Container fluid>
									<Navbar.Brand className="navbar-brand">  <img src={togglelogo} alt="" /></Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarColor02">
										<Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item as="li">
												<Nav.Link className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link>Features</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link>About</Nav.Link>
											</Nav.Item>
										</Nav>
										<Form className="d-flex" role="search">
											<Form.Control className="form-control me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button variant='secondary' className="btn btn-secondary" type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark-transparent">
								<Container fluid>
									<Navbar.Brand className="navbar-brand">  <img src={togglelogo} alt="" /></Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarColor03">
										<Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item as="li">
												<Nav.Link className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link>Features</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link>About</Nav.Link>
											</Nav.Item>
										</Nav>
										<Form className="d-flex" role="search">
											<Form.Control className="form-control me-2" type="search" placeholder="Search"
												aria-label="Search" />
											<Button variant='dark' className="btn "
												type="submit">Search</Button>
										</Form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Solid Color Schemes
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-primary mb-3">
								<Container fluid>
									<Navbar.Brand >
										<img src={toggledark} alt="" />
									</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarColor04">
										<Nav className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item>
												<Nav.Link className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="nav-link">Features</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="nav-link">About</Nav.Link>
											</Nav.Item>
										</Nav>
										<form className="d-flex" role="search">
											<Form.Control className="form-control me-2 border-0" type="search" placeholder="Search"
												aria-label="Search" />
											<Button variant='light' className="btn btn-light" type="submit">Search</Button>
										</form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-secondary mb-3">
								<Container fluid>
									<Navbar.Brand >  <img src={toggledark} alt="" /></Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarColor05">
										<Nav className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item>
												<Nav.Link className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link>Features</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link>About</Nav.Link>
											</Nav.Item>
										</Nav>
										<form className="d-flex" role="search">
											<Form.Control className="form-control me-2 border-0" type="search" placeholder="Search"
												aria-label="Search" />
											<Button variant='light' className="btn btn-light" type="submit">Search</Button>
										</form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
							<Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark">
								<Container fluid>
									<Navbar.Brand >  <img src={togglelogo} alt="" /></Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarColor06">
										<Nav className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item>
												<Nav.Link className="active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link>Features</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link>About</Nav.Link>
											</Nav.Item>
										</Nav>
										<form className="d-flex" role="search">
											<Form.Control className="form-control me-2 border-0" type="search" placeholder="Search"
												aria-label="Search" />
											<Button variant='light' className="btn btn-light"
												type="submit">Search</Button>
										</form>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Navbar With Text
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar bg-light mb-3">
								<Container fluid>
									<span className="navbar-text">
										Navbar text with an inline element
									</span>
								</Container>
							</Navbar>
							<Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
								<Container fluid>
									<Navbar.Brand>Navbar with text</Navbar.Brand>
									<Navbar.Toggle aria-controls="basic-navbar-nav" />
									<Navbar.Collapse className="collapse navbar-collapse" id="navbarText">
										<Nav className="navbar-nav me-auto mb-2 mb-lg-0">
											<Nav.Item>
												<Nav.Link className="nav-link active" aria-current="page">Home</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="nav-link">Features</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link className="nav-link">Pricing</Nav.Link>
											</Nav.Item>
										</Nav>
										<span className="navbar-text">
											Navbar text with an inline element
										</span>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Forms In Navbar
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar className="navbar bg-light mb-3">
								<Container fluid>
									<Form className="d-flex" role="search">
										<Form.Control className="form-control me-2" type="search" placeholder="Search"
											aria-label="Search" />
										<Button variant='primary' className="btn btn-primary" type="submit">Search</Button>
									</Form>
								</Container>
							</Navbar>
							<Navbar className="navbar bg-light mb-3">
								<Container fluid>
									<Navbar.Brand>  <img src={togglelogo} alt="" /></Navbar.Brand>
									<Form className="d-flex" role="search">
										<input className="form-control me-2" type="search" placeholder="Search"
											aria-label="Search" />
										<Button variant='primary' className="btn btn-primary" type="submit">Search</Button>
									</Form>
								</Container>
							</Navbar>
							<h6 className="mb-3 fw-semibold">Input groups in navbar forms</h6>
							<Navbar className="navbar bg-light mb-3">
								<Form className="container-fluid">
									<InputGroup>
										<span className="input-group-text" id="basic-addon1">@</span>
										<Form.Control type="text" className="form-control" placeholder="Username"
											aria-label="Username" aria-describedby="basic-addon1" />
									</InputGroup>
								</Form>
							</Navbar>
							<h6 className="mb-3 fw-semibold"> Variation buttons are supported as part of the navbar forms</h6>
							<Navbar className="navbar bg-light">
								<Form className="container-fluid justify-content-start">
									<Button variant='primary' className="btn m-1" type="button">Main
										button</Button>
									<Button variant='' className="btn btn-sm btn-outline-secondary m-1" type="button">Smaller
										button</Button>
								</Form>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Offcanvas
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Navbar expand={false} className="navbar bg-light fixed-top">
								<Container fluid>
									<Navbar.Brand>Navbar Offcanvas</Navbar.Brand>
									<Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" className='dark-filter-img' />
									<Navbar.Offcanvas
										id={"offcanvasNavbar-expand-false"}
										aria-labelledby="offcanvasNavbarLabel-expand-false"
										placement="end">
										<Offcanvas.Header closeButton >
											<Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
												Offcanvas
											</Offcanvas.Title>
										</Offcanvas.Header>
										<Offcanvas.Body>
											<Nav className="justify-content-end flex-grow-1 pe-3">
												<Nav.Link active href="#action1" className='px-2 mb-1'>Home</Nav.Link>
												<Nav.Link href="#action2" className='px-2'>Link</Nav.Link>
												<NavDropdown
													title="Dropdown"
													id="offcanvasNavbarDropdown-expand-false"
												>
													<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
													<NavDropdown.Item href="#action4">
														Another action
													</NavDropdown.Item>
													<NavDropdown.Divider />
													<NavDropdown.Item href="#action5">
														Something else here
													</NavDropdown.Item>
												</NavDropdown>
											</Nav>
											<Form className="d-flex mt-3">
												<Form.Control
													type="search"
													placeholder="Search"
													className="me-2"
													aria-label="Search"
												/>
												<Button variant="outline-success">Search</Button>
											</Form>
										</Offcanvas.Body>
									</Navbar.Offcanvas>
								</Container>
							</Navbar>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Navbars;
