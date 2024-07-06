import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Collapse, Container, Dropdown, Form, Navbar, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LabeledTwoThumbs1 from "./productsadata1";
import { AddToCart } from "../../../../redux/action";

//IMAGES
import togglelogo from "../../../../assets/images/brand-logos/toggle-logo.png";
import { Maindata } from "./productsdata";

const Products = ({ local_varaiable }) => {

	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [allData, setAllData] = useState(Maindata);
	const userdata = [];

	const myfunction = (idx) => {
		let Data;
		for (Data of local_varaiable.ecommercedata) {
			if (Data.title[0] == " ") {
				Data.title = Data.title.trim();
			}
			if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
				if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
					userdata.push(Data);
				}
			}

		}
		setAllData(userdata);
	};

	return (
		<Fragment>
			<div className="my-4">
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Body className="p-0">
								<Navbar expand="xxl" className="navbar navbar-expand-xxl bg-white">
									<Container fluid>
										<Navbar.Brand className="" href="#">
											<img src={togglelogo} alt="" className="d-inline-block align-text-top" />
										</Navbar.Brand>
										<Navbar.Toggle aria-controls="navbarSupportedContent" />
										<Navbar.Collapse className="collapse navbar-collapse navbar-justified" id="navbarSupportedContent">
											<ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-xxl-center">
												<li className="nav-item">
													<a className="nav-link active" aria-current="page" href="#">Men</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="#">Women</a>
												</li>
												<Dropdown className="nav-item dropdown d-flex">
													<Dropdown.Toggle variant='' className="nav-link dropdown-toggle no-carert" href="#" id="navbarDropdown"
														role="button" data-bs-toggle="dropdown"
														aria-expanded="false">
														Kids
													</Dropdown.Toggle>
													<Dropdown.Menu className="dropdown-menu" aria-labelledby="navbarDropdown">
														<Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
														<Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
														<Dropdown.Divider>
														</Dropdown.Divider>
														<Dropdown.Item className="dropdown-item" href="#">Something else
															here</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
												<li className="nav-item">
													<a href="#" className="nav-link">Today Deals</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">Electronics</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">Home & Kitchen</a>
												</li>
												<li className="nav-item">
													<a href="#" className="nav-link">Fashion</a>
												</li>
												<li className="nav-item mb-xxl-0 mb-2 ms-xxl-0 ms-3">
													<div className="btn-group d-xxl-flex d-block">
														<Dropdown>
															<Dropdown.Toggle variant='' className="btn btn-sm btn-primary-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																Sort By
															</Dropdown.Toggle>
															<Dropdown.Menu className="dropdown-menu">
																<Dropdown.Item href="#">Featured</Dropdown.Item>
																<Dropdown.Item href="#">Price: High to Low</Dropdown.Item>
																<Dropdown.Item active href="#">Price: Low to High</Dropdown.Item>
																<Dropdown.Item href="#">Newest</Dropdown.Item>
																<Dropdown.Item href="#">Ratings</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
													</div>
												</li>
											</ul>
											<div className="d-flex" role="search">
												<Form.Control className="form-control form-control-sm me-2" type="search" placeholder="Search" onChange={(ele) => { myfunction(ele.target.value); }}
													aria-label="Search" />
												<Button variant="light" className="btn btn-sm btn-light"
													type="submit">Search</Button>
											</div>
										</Navbar.Collapse>
									</Container>
								</Navbar>
							</Card.Body>
						</Card>
					</Col>
					<Col xxl={3} xl={4} lg={4} md={12} className="">
						<Card className="custom-card products-navigation-card">
							<Card.Body className="p-0">
								<div className="p-4 border-bottom">
									<p className="fw-semibold mb-0 text-muted">CATEGORIES</p>
									<div className="px-2 py-3 pb-0">
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="electronics" />
											<Form.Label className="form-check-label" htmlFor="electronics">
												Electronics
											</Form.Label>
											<span className="badge bg-light text-muted float-end">2,712</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="Accesories" />
											<Form.Label className="form-check-label" htmlFor="Accesories">
												Accesories
											</Form.Label>
											<span className="badge bg-light text-muted float-end">536</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="clothing" defaultChecked />
											<Form.Label className="form-check-label" htmlFor="clothing">
												Clothing
											</Form.Label>
											<span className="badge bg-light text-muted float-end">18,289</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="fashion" />
											<Form.Label className="form-check-label" htmlFor="fashion">
												Fashion
											</Form.Label>
											<span className="badge bg-light text-muted float-end">3,453</span>
										</div>
										<Collapse in={open}>
											<div id="category-more">
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="furniture" />
													<Form.Label className="form-check-label" htmlFor="furniture">
														Furniture
													</Form.Label>
													<span className="badge bg-light text-muted float-end">7,165</span>
												</div>
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="footwear" />
													<Form.Label className="form-check-label" htmlFor="footwear">
														Footwear
													</Form.Label>
													<span className="badge bg-light text-muted float-end">5,964</span>
												</div>
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="mobiles" />
													<Form.Label className="form-check-label" htmlFor="mobiles">
														Mobiles
													</Form.Label>
													<span className="badge bg-light text-muted float-end">2,123</span>
												</div>
											</div>
										</Collapse>
										<Link className="ecommerce-more-link" onClick={() => setOpen(!open)} to="#" role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
									</div>
								</div>
								<div className="p-4  border-bottom">
									<p className="fw-semibold mb-0 text-muted">PRICE</p>
									<div className="px-2 py-3 pb-0">
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="low" />
											<Form.Label className="form-check-label" htmlFor="low">
												$0 - $599
											</Form.Label>
											<span className="badge bg-light text-muted float-end">22,873</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="low1" defaultChecked />
											<Form.Label className="form-check-label" htmlFor="low1">
												$599 - $1299
											</Form.Label>
											<span className="badge bg-light text-muted float-end">11,345</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="medium" />
											<Form.Label className="form-check-label" htmlFor="medium">
												$1,299 - $2,199
											</Form.Label>
											<span className="badge bg-light text-muted float-end">6,987</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="high" />
											<Form.Label className="form-check-label" htmlFor="high">
												$2,199 - $3,499
											</Form.Label>
											<span className="badge bg-light text-muted float-end">5,236</span>
										</div>
										<div className="form-check mb-4">
											<Form.Check type="checkbox" value="" id="high1" />
											<Form.Label className="form-check-label" htmlFor="high1">
												$3,499 & Above
											</Form.Label>
											<span className="badge bg-light text-muted float-end">3,735</span>
										</div>
										<p className="fw-semibold mb-0 text-muted">PRICE RANGE</p>
										<div className="mt-5" id="product-price-range">
											<LabeledTwoThumbs1 rtl={local_varaiable.dir == "rtl"} />
										</div>
									</div>
								</div>
								<div className="p-4 border-bottom">
									<p className="fw-semibold mb-0 text-muted">BRANDS</p>
									<div className="px-2 py-3 pb-0">
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="Jimmy-Lolfiger" defaultChecked />
											<Form.Label className="form-check-label" htmlFor="Jimmy-Lolfiger">
												Money plant
											</Form.Label>
											<span className="badge bg-light text-muted float-end">512</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="dapzem1" defaultChecked />
											<Form.Label className="form-check-label" htmlFor="dapzem1">
												Dapzem & Co
											</Form.Label>
											<span className="badge bg-light text-muted float-end">2,186</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="denim-winjo1" defaultChecked />
											<Form.Label className="form-check-label" htmlFor="denim-winjo1">
												Light color lilly flowers
											</Form.Label>
											<span className="badge bg-light text-muted float-end">734</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="Louie-Phillippe" />
											<Form.Label className="form-check-label" htmlFor="Louie-Phillippe">
												Louie Phillippe
											</Form.Label>
											<span className="badge bg-light text-muted float-end">16</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="garage-clothing" />
											<Form.Label className="form-check-label" htmlFor="garage-clothing">
												Garage & Co
											</Form.Label>
											<span className="badge bg-light text-muted float-end">1,432</span>
										</div>
										<Collapse in={open1}>
											<div className="" id="brands-more">
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="blueberry" defaultChecked />
													<Form.Label className="form-check-label" htmlFor="blueberry">
														Blueberry & Co
													</Form.Label>
													<span className="badge bg-light text-muted float-end">257</span>
												</div>
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="aus-polo-assn" defaultChecked />
													<Form.Label className="form-check-label" htmlFor="aus-polo-assn">
														Cactus plants
													</Form.Label>
													<span className="badge bg-light text-muted float-end">1,845</span>
												</div>
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="denim-corp" defaultChecked />
													<Form.Label className="form-check-label" htmlFor="denim-corp">
														Denim Corp
													</Form.Label>
													<span className="badge bg-light text-muted float-end">5,893</span>
												</div>
											</div>
										</Collapse>
										<Link className="ecommerce-more-link" data-bs-toggle="collapse" onClick={() => setOpen1(!open1)} aria-expanded={open1} to="#" role="button" aria-controls="brands-more">MORE</Link>
									</div>
								</div>
								<div className="p-4">
									<p className="fw-semibold mb-0 text-muted">SIZES</p>
									<div className="px-2 py-3 pb-0">
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="extra-small" />
											<Form.Label className="form-check-label" htmlFor="extra-small">
												Extra Small (XS)
											</Form.Label>
											<span className="badge bg-light text-muted float-end">23,156</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="small" />
											<Form.Label className="form-check-label" htmlFor="small">
												Small (SM)
											</Form.Label>
											<span className="badge bg-light text-muted float-end">15,632</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="medium1" />
											<Form.Label className="form-check-label" htmlFor="medium1">
												Medium (MD)
											</Form.Label>
											<span className="badge bg-light text-muted float-end">15,032</span>
										</div>
										<div className="form-check mb-2">
											<Form.Check type="checkbox" value="" id="large" defaultChecked />
											<Form.Label className="form-check-label" htmlFor="large">
												Large (L)
											</Form.Label>
											<span className="badge bg-light text-muted float-end">7,154</span>
										</div>
										<Collapse in={open2}>
											<div className="" id="sizes-more">
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="extra-large" />
													<Form.Label className="form-check-label" htmlFor="extra-large">
														Extra Large (XL)
													</Form.Label>
													<span className="badge bg-light text-muted float-end">5,946</span>
												</div>
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="double-extralarge" />
													<Form.Label className="form-check-label" htmlFor="double-extralarge">
														XXL
													</Form.Label>
													<span className="badge bg-light text-muted float-end">3,267</span>
												</div>
												<div className="form-check mb-2">
													<Form.Check type="checkbox" value="" id="triple-extralarge" />
													<Form.Label className="form-check-label" htmlFor="triple-extralarge">
														XXL
													</Form.Label>
													<span className="badge bg-light text-muted float-end">578</span>
												</div>
											</div>
										</Collapse>
										<Link className="ecommerce-more-link" data-bs-toggle="collapse" to="#sizes-more" role="button" onClick={() => setOpen2(!open2)} aria-expanded={open2} aria-controls="sizes-more">MORE</Link>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col xxl={9} xl={8} lg={8} md={12} className="">
						<Row>
							{allData.map((idx) => (
								<Col xxl={6} xl={12} lg={12} md={6} sm={12} key={Math.random()}>
									<Card className="custom-card product-card">
										<Card.Body className="">
											<div className="d-sm-flex align-items-center">
												<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`} className="product-image-1">
													<img src={idx.preview} className="card-img" alt="..." />
												</Link>
												<div className="ms-3 mt-2 mt-sm-0">
													<h5 className="product-name fs-16 fw-semibold mb-0 align-items-center">{idx.title}</h5>
													<p className="product-description fs-13 text-muted mb-0">{idx.description}</p>
													<h4 className="mb-1 fw-semibold"><span>{idx.newpr}<span className="text-muted text-decoration-line-through ms-1  fs-14 op-6">{idx.oldpr}</span></span></h4>
													<p className={`badge bg-${idx.color}-transparent fs-11 rounded-1 mb-0 me-1`}>{idx.offerprice}</p>
													<span className="badge bg-warning-transparent rounded-1 me-1">4.2
														<i className="ri-star-s-fill align-middle  d-inline-block"></i>
													</span>
													<span className="text-muted">({idx.quantity})</span>
													<p className="fs-11 text-success fw-semibold mb-0 align-items-center">
														{idx.text}
													</p>
													<div className="mt-2">
														<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`} className="btn btn-sm btn-danger-light me-1"><i className="ri-heart-line"></i></Link>
														<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="btn btn-sm btn-info-light me-1" onClick={() => { AddToCart(idx.id); }}><i className="ri-shopping-cart-line"></i></Link>
														<Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`} className="btn btn-sm btn-success-light"><i className="ri-eye-line"></i></Link>
													</div>

												</div>
											</div>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
				<div className="float-end mb-4">
					<nav aria-label="Page navigation" className="pagination-style-4">
					<Pagination as="ul" className="pagination mb-0 gap-2">
        <Pagination.Item disabled href="#!">
            Prev
        </Pagination.Item>
        <Pagination.Item active href="#!">1</Pagination.Item>
        <Pagination.Item href="#!">2</Pagination.Item>
        <Pagination.Item>
            <i className="bi bi-three-dots"></i>
        </Pagination.Item>
        <Pagination.Item href="#!">16</Pagination.Item>
        <Pagination.Item className="d-none d-sm-flex" href="#!">17</Pagination.Item>
        <Pagination.Item className=" text-primary" href="#!">
            next
        </Pagination.Item>
    </Pagination>
					</nav>
				</div>

			</div>

		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Products);
