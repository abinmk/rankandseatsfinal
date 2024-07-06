import React, { FC, Fragment } from "react";
import { Filedetailsgallery } from "./filedetailsdata";
import { Card, Col, Dropdown, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import media32 from "../../../../assets/images/media/media-32.jpg";
import filemanager6 from "../../../../assets/images/media/file-manager/6.png";
import filemanager4 from "../../../../assets/images/media/file-manager/4.png";
import filemanager5 from "../../../../assets/images/media/file-manager/5.png";
import filemanager9 from "../../../../assets/images/media/file-manager/9.png";

const Filedetails = () => {
	return (
		<Fragment>
			<div className="container-lg ">
				<Row>
					<Col xl={8}>
						<Row>
							<Col xl={12}>
								<Card className="custom-card">
									<Link to="#">
										<img src={media32} className="card-img-top" alt="..." />
									</Link>
									<div className="card-header d-block border-bottom ">
										<p className="fs-18 fw-semibold mb-1">Nature.jpg</p>
									</div>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header className="justify-content-between">
										<Card.Title>
											Related Files
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<div className="row mb-3">
											<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
												<Card className="card border custom-card shadow-none">
													<Card.Body>
														<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
															<div>
																<span className="avatar avatar-xl">
																	<img src={filemanager6} alt="" />
																</span>
															</div>
															<div>
																<Dropdown>
																	<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																		<i className="ri-more-2-fill"></i>
																	</Dropdown.Toggle>
																	<Dropdown.Menu>
																		<Dropdown.Item href="#">Delete</Dropdown.Item>
																		<Dropdown.Item href="#">Rename</Dropdown.Item>
																		<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
																	</Dropdown.Menu>
																</Dropdown>
															</div>
														</div>
														<p className="fs-14 fw-semibold mb-1 lh-1">
															<Link to="#">Images</Link>
														</p>
														<div className="d-flex align-items-center justify-content-between flex-wrap">
															<div>
																<span className="text-muted fs-12">
																	246 Files
																</span>
															</div>
															<div>
																<span className="text-default fw-semibold">
																	214.32MB
																</span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</div>
											<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
												<Card className="card border custom-card shadow-none">
													<Card.Body>
														<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
															<div>
																<span className="avatar avatar-xl">
																	<img src={filemanager9} alt="" />
																</span>
															</div>
															<div>
																<Dropdown>
																	<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																		<i className="ri-more-2-fill"></i>
																	</Dropdown.Toggle>
																	<Dropdown.Menu>
																		<Dropdown.Item href="#">Delete</Dropdown.Item>
																		<Dropdown.Item href="#">Rename</Dropdown.Item>
																		<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
																	</Dropdown.Menu>
																</Dropdown>
															</div>
														</div>
														<p className="fs-14 fw-semibold mb-1 lh-1">
															<Link to="#">Docs</Link>
														</p>
														<div className="d-flex align-items-center justify-content-between flex-wrap">
															<div>
																<span className="text-muted fs-12">
																	17 Files
																</span>
															</div>
															<div>
																<span className="text-default fw-semibold">
																	432.39KB
																</span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</div>
											<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
												<Card className="card border custom-card shadow-none">
													<Card.Body>
														<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
															<div>
																<span className="avatar avatar-xl">
																	<img src={filemanager4} alt="" />
																</span>
															</div>
															<div>
																<Dropdown>
																	<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																		<i className="ri-more-2-fill"></i>
																	</Dropdown.Toggle>
																	<Dropdown.Menu>
																		<Dropdown.Item href="#">Delete</Dropdown.Item>
																		<Dropdown.Item href="#">Rename</Dropdown.Item>
																		<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
																	</Dropdown.Menu>
																</Dropdown>
															</div>
														</div>
														<p className="fs-14 fw-semibold mb-1 lh-1">
															<Link to="#">Downloads</Link>
														</p>
														<div className="d-flex align-items-center justify-content-between flex-wrap">
															<div>
																<span className="text-muted fs-12">
																	437 Files
																</span>
															</div>
															<div>
																<span className="text-default fw-semibold">
																	3.12GB
																</span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</div>
											<div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
												<Card className="card border custom-card shadow-none">
													<Card.Body>
														<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
															<div>
																<span className="avatar avatar-xl">
																	<img src={filemanager5} alt="" />
																</span>
															</div>
															<div>
																<Dropdown>
																	<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																		<i className="ri-more-2-fill"></i>
																	</Dropdown.Toggle>
																	<Dropdown.Menu>
																		<Dropdown.Item href="#">Delete</Dropdown.Item>
																		<Dropdown.Item href="#">Rename</Dropdown.Item>
																		<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
																	</Dropdown.Menu>
																</Dropdown>
															</div>
														</div>
														<p className="fs-14 fw-semibold mb-1 lh-1">
															<Link to="#">Apps</Link>
														</p>
														<div className="d-flex align-items-center justify-content-between flex-wrap">
															<div>
																<span className="text-muted fs-12">
																	165 Files
																</span>
															</div>
															<div>
																<span className="text-default fw-semibold">
																	12.56GB
																</span>
															</div>
														</div>
													</Card.Body>
												</Card>
											</div>
										</div>

									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Col>
					<Col xl={4}>
						<Row>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header className="justify-content-between">
										<Card.Title>
											File Information
										</Card.Title>
									</Card.Header>
									<Card.Body>
										<div className="table-responsive">
											<Table className="table table-bordered text-nowrap mb-0">
												<tbody className="top-selling">
													<tr>
														<th className="">
															<span className="fw-semibold fs-13">File Name</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">Nature.jpg</span></td>
													</tr>
													<tr>
														<th className="">
															<span className="fw-semibold fs-13">File Size</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">799KB</span></td>
													</tr>
													<tr>
														<th className="">
															<span className="fw-semibold fs-13">Created Date</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">1-10-2023</span></td>
													</tr>
													<tr>
														<th className="">
															<span className="fw-semibold fs-13">Modified Date</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">10-10-2023</span></td>
													</tr>
													<tr>
														<th className="">
															<span className="fw-semibold fs-13">File Location</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">Location/file/Images/Nature.jpg</span></td>
													</tr>
													<tr>
														<th className="">
															<span className="fw-semibold fs-13">Height</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">500px</span></td>
													</tr>
													<tr>
														<th className="">
															<span className="fw-semibold fs-13">Width</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">750px</span></td>
													</tr>
													<tr>
														<th className=" ">
															<span className="fw-semibold fs-13">Uploaded by</span>
														</th>
														<td><span className=" text-muted fs-13 fw-normal">Ali AronJohn</span></td>
													</tr>
												</tbody>
											</Table>
										</div>
									</Card.Body>
								</Card>
							</Col>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Header>
										<Card.Title>
											Recent Files
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
						</Row>
					</Col>
				</Row>
			</div>

		</Fragment>
	);
};
export default Filedetails;
