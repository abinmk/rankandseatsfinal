import React, { FC, Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import { Acceptanceratio, Applicationdata, Projectanalysis } from "./jobsdata";
import { Link } from "react-router-dom";

//IMAGES
import faces2 from "../../../assets/images/faces/2.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces16 from "../../../assets/images/faces/16.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";

const Jobs = () => {
	return (
		<Fragment>
			<Row className="row row-cols-12">
				{Applicationdata.map((idx) => (
					<Col xxl={2} xl={4} md={4} sm={6} key={Math.random()}>
						<Card className="custom-card">
							<Card.Body>
								<div className="flex-between mb-3">
									<span className="text-muted">{idx.title}</span>
									<Dropdown className='ms-1'>
										<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="bi bi-three-dots"></i>
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" align="end" className='text-nowrap'>
											<Dropdown.Item as="li">Action</Dropdown.Item>
											<Dropdown.Item as="li">Another Action</Dropdown.Item>
											<Dropdown.Item as="li">Something Else Here</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div className="d-flex align-items-end">
									<div className="flex-1">
										<h3 className="mb-2">{idx.text1}</h3>
										<span className={`badge bg-${idx.color}-transparent rounded-1`}>{idx.text2}</span>
									</div>
									<span className={`ms-2 avatar bg-${idx.color}-transparent`}>
										<i className={idx.icon}></i>
									</span>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<div className="row">
				<Col xxl={3} xl={5} md={5}>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="justify-content-between">
							<h6 className="card-title">Open Jobs</h6>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" role="menu">
									<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
									<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
									<Dropdown.Item href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body>
							<ul className="list-unstyled mb-0">
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="pe-3">
											<span className="avatar avatar-md radius-5 bg-primary-transparent text-primary"><i className="bi bi-phone-fill fs-16"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Sr. Mobile App Developer</Link>
												<p className="tx-inverse  text-muted mb-0">16 Applicants</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fs-12 text-muted">1 day ago</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="pe-3">
											<span className="avatar avatar-md radius-5 bg-secondary-transparent text-secondary"><i className="bi bi-briefcase-fill fs-16"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Data Scientist Trainee</Link>
												<p className="tx-inverse  text-muted mb-0">773 Applicants</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fs-12 text-muted">3 day ago</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="pe-3">
											<span className="avatar avatar-md radius-5 bg-info-transparent text-info"><i className="bi bi-capslock-fill fs-16"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="flex-1">
												<Link to="#" className="fs-13 fw-semibold">Sr. Backend Developer</Link>
												<p className="tx-inverse  text-muted mb-0">16 Applicants</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fs-12 text-muted">1 week ago</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="pe-3">
											<span className="avatar avatar-md radius-5 bg-success-transparent text-success"><i className="bi bi-bar-chart-fill fs-16"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="flex-1">
												<Link to="#" className="fs-13 fw-semibold">Data Visualization Engineer</Link>
												<p className="tx-inverse  text-muted mb-0">11 Applicants</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fs-12 text-muted">1 month ago</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="pe-3">
											<span className="avatar avatar-md radius-5 bg-orange-transparent text-orange"><i className="bi bi-capslock-fill fs-16"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="flex-1">
												<Link to="#" className="fs-13 fw-semibold">Sr. Backend Developer</Link>
												<p className="tx-inverse  text-muted mb-0">16 Applicants</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fs-12 text-muted">1 month ago</span>
											</div>
										</div>
									</div>
								</li>
								<li className="">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="pe-3">
											<span className="avatar avatar-md radius-5 bg-secondary-transparent text-secondary"><i className="bi bi-calendar3-range-fill fs-16"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="flex-1">
												<Link to="#" className="fs-13 fw-semibold">Dashboard Trainee</Link>
												<p className="tx-inverse  text-muted mb-0">16 Applicants</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fs-12 text-muted">14month ago</span>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={7} md={7}>
					<Card className="custom-card overflow-hidden">
						<Card.Header className="justify-content-between">
							<Card.Title>Project Analysis</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-outline-light btn-icons btn-sm text-muted no-caret" data-bs-toggle="dropdown">
									<i className="fe fe-more-vertical"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item href="#">Something else here</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body>
							<div id="applicantStats">
								<Projectanalysis />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={3} xl={5} md={5}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Recruitment Pipeline
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<ul className="mb-0">
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-md rounded-circle bg-primary-transparent text-primary"><i className="fe fe-file-text fs-14"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold"> Total Applications</Link>
												<p className="text-muted mb-0 fw-normal">This month</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fw-semibiold fs-17">1,982</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-md rounded-circle bg-secondary-transparent text-secondary"><i className="fe fe-user-plus fs-14"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold"> Recruited</Link>
												<p className="text-muted mb-0 fw-normal">This month</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fw-semibiold fs-17">982</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-md rounded-circle bg-success-transparent text-success"><i className="fe fe-file-plus fs-14"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">  Short Listed</Link>
												<p className="text-muted mb-0 fw-normal">This month</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fw-semibiold fs-17">582</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-md rounded-circle bg-warning-transparent text-warning"><i className="fe fe-zap-off fs-14"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Rejected</Link>
												<p className="text-muted mb-0 fw-normal">This month</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fw-semibiold fs-17">395</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-4">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-md rounded-circle bg-danger-transparent text-danger"><i className="fe fe-slash fs-14"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Blocked</Link>
												<p className="text-muted mb-0 fw-normal">This month</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fw-semibiold fs-17">905</span>
											</div>
										</div>
									</div>
								</li>
								<li className="mb-2">
									<div className="d-flex align-items-center">
										<Link aria-label="anchor" to="#" className="me-2">
											<span className="avatar avatar-md rounded-circle bg-info-transparent text-info"><i className="fe fe-monitor fs-14"></i></span>
										</Link>
										<div className="flex-1 flex-between pos-relative">
											<div className="">
												<Link to="#" className="fs-13 fw-semibold">Interviewed</Link>
												<p className="text-muted mb-0 fw-normal">This month</p>
											</div>
											<div className="min-w-fit-content text-end">
												<span className="fw-semibiold fs-17">145</span>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<div className="col-xxl-4 col-xl-7 col-md-7">
					<div className="card custom-card overflow-hidden justify-content-between">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Top Referrers
							</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" role="menu">
									<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
									<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
									<Dropdown.Item href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<div className="card-body p-0">
							<div className="table-responsive">
								<table className="table text-nowrap">
									<thead>
										<tr>
											<th scope="col" className="ps-4">Browser</th>
											<th scope="col">Page Views</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded bg-primary">
															<i className="ri-chrome-line"></i>
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Chrome
														</span>
													</div>
												</div>
											</td>
											<td>37,098<i className="bi bi-caret-up-fill ms-2 fs-11 text-success"></i></td>
											<td className="border-top-0">
												<div className="progress progress-sm" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-primary" style={{ width: "65%" }}>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded bg-secondary">
															<i className="ri-safari-line"></i>
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															safari
														</span>
													</div>
												</div>
											</td>
											<td>37,098<i className="bi bi-caret-up-fill ms-2 fs-11 text-success"></i></td>
											<td className="border-top-0">
												<div className="progress progress-sm" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-primary" style={{ width: "60%" }}>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded bg-info">
															<i className="ri-firefox-line"></i>
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Firefox
														</span>
													</div>
												</div>
											</td>
											<td>54,085<i className="bi bi-caret-down-fill ms-2 fs-11 text-danger"></i></td>
											<td className="border-top-0">
												<div className="progress progress-sm" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-primary" style={{ width: "40%" }}>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded bg-warning">
															<i className="ri-opera-line"></i>
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Opera
														</span>
													</div>
												</div>
											</td>
											<td>74,085<i className="bi bi-caret-up-fill ms-2 fs-11 text-success"></i></td>
											<td className="border-top-0">
												<div className="progress progress-sm" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-primary" style={{ width: "50%" }}>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded bg-success">
															<i className="ri-edge-line"></i>
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Edge
														</span>
													</div>
												</div>
											</td>
											<td>54,085<i className="bi bi-caret-down-fill ms-2 fs-11 text-danger"></i></td>
											<td className="border-top-0">
												<div className="progress progress-sm" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
													<div className="progress-bar bg-primary" style={{ width: "45%" }}>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xxl-5 col-xl-6 col-md-6">
					<div className="card custom-card overflow-hidden justify-content-between">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Recent Applicants
							</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" role="menu">
									<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
									<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
									<Dropdown.Item href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<div className="card-body p-0">
							<div className="table-responsive">
								<table className="table text-nowrap">
									<thead>
										<tr>
											<th scope="col" className="ps-4">Applicant</th>
											<th scope="col">Mail</th>
											<th scope="col">Role</th>
											<th scope="col">Date</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded">
															<img src={faces1} alt="" />
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Nasiha
														</span>
													</div>
												</div>
											</td>
											<td>nasiha293@demo</td>
											<td>Data Analyst</td>
											<td>13-06-22</td>
											<td>
												<span className="badge bg-success-transparent rounded-1">Hired</span>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded">
															<img src={faces2} alt="" />
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Hasi Nah
														</span>
													</div>
												</div>
											</td>
											<td>hasihas888@demo</td>
											<td>Executive Officer</td>
											<td>03-05-22</td>
											<td>
												<span className="badge bg-danger-transparent rounded-1">Rejected</span>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded">
															<img src={faces3} alt="" />
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															David
														</span>
													</div>
												</div>
											</td>
											<td>david@demo</td>
											<td>Data Analyst</td>
											<td>13-01-23</td>
											<td>
												<span className="badge bg-warning-transparent rounded-1">Screened</span>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded">
															<img src={faces4} alt="" />
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Jack Bruce
														</span>
													</div>
												</div>
											</td>
											<td>Jack5236@demo</td>
											<td>Developer</td>
											<td>16-01-23</td>
											<td>
												<span className="badge bg-info-transparent rounded-1">Interviewed</span>
											</td>
										</tr>
										<tr>
											<td className="ps-4">
												<div className="d-flex align-items-center">
													<div className="me-2 lh-1">
														<span className="avatar avatar-sm avatar-rounded">
															<img src={faces5} alt="" />
														</span>
													</div>
													<div>
														<span className="fw-semibold">
															Sarah Hny
														</span>
													</div>
												</div>
											</td>
											<td>Sarah123@demo</td>
											<td>Data Scientist</td>
											<td>07-02-23</td>
											<td>
												<span className="badge bg-success-transparent rounded-1">Applied</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-6 col-md-6">
					<div className="card custom-card overflow-hidden justify-content-between">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Acceptance Ratio
							</Card.Title>
							<Dropdown>
								<Dropdown.Toggle variant='' aria-label="anchor" className="btn-outline-light btn btn-sm text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="fe fe-more-vertical"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" role="menu">
									<Dropdown.Item as="li" href="#">Today</Dropdown.Item>
									<Dropdown.Item as="li" href="#">This Week</Dropdown.Item>
									<Dropdown.Item href="#">Last Week</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Header>
						<Card.Body className="py-0">
							<div id="careerPageStats">
								<Acceptanceratio />
							</div>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex justify-content-evenly">
								<div className="d-flex">
									<div className="me-2">
										<span className="avatar avatar-md rounded-circle bg-primary  text-white"><i className="fe fe-bar-chart fs-14"></i></span>
									</div>
									<div className="">
										<p className="mb-0 font-weight-semibold">Accepted</p>
										<span className="tx-primary ">+2.6%</span>
									</div>
								</div>
								<div className="d-flex">
									<div className="me-2">
										<span className="avatar avatar-md rounded-circle bg-primary-transparent text-primary"><i className="fe fe-corner-down-left fs-14"></i></span>
									</div>
									<div className="">
										<p className="mb-0 font-weight-semibold">Rejected</p>
										<span className="tx-danger ">-1.6%</span>
									</div>
								</div>
							</div>
						</Card.Footer>
					</div>
				</div>
			</div>
			<div className="row">
				<Col xl={12} className="">
					<Card className="custom-card">
						<Card.Header className="justify-content-between">
							<Card.Title>
								Interview Schedule
							</Card.Title>
							<div className="d-flex">
								<div className="me-3">
									<input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=" example" />
								</div>
								<Dropdown>
									<Dropdown.Toggle variant='' className="btn btn-sm btn-primary btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
										Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu as="ul" role="menu" align="end">
										<Dropdown.Item href="#">New</Dropdown.Item>
										<Dropdown.Item href="#">Popular</Dropdown.Item>
										<Dropdown.Item href="#">Relevant</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="table-responsive">
								<table className="table text-nowrap table-hover border table-bordered">
									<thead>
										<tr>
											<th scope="col">S.NO</th>
											<th scope="col">Candidate</th>
											<th scope="col">Designation</th>
											<th scope="col">Mail</th>
											<th scope="col">Time</th>
											<th scope="col">Date</th>
											<th scope="col">Status</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>01</td>
											<td>
												<div className="d-flex align-items-center fw-semibold">
													<span className="avatar avatar-sm me-2 avatar-rounded">
														<img src={faces4} alt="img" />
													</span>Mayor Kelly
												</div>
											</td>
											<td><span className="badge bg-primary-transparent">Team Lead</span></td>
											<td>mayorkelly@gmail.com</td>
											<td>
												<span className="ms-1">10.00am</span>
											</td>
											<td>Sep 15 - Oct 12, 2023</td>
											<td>
												<span className="badge badge-sm bg-warning-transparent rounded-pill">Processing</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-15">
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-info-light"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>02</td>
											<td>
												<div className="d-flex align-items-center fw-semibold">
													<span className="avatar avatar-sm me-2 avatar-rounded">
														<img src={faces15} alt="img" />
													</span>Andrew Garfield
												</div>
											</td>
											<td><span className="badge bg-secondary-transparent">Director</span></td>
											<td>andrewgarfield@gmail.com</td>
											<td><span className="ms-1">	14:00am</span>
											</td>
											<td>Apr 10 - Dec 12, 2023</td>
											<td>
												<span className="badge badge-sm bg-secondary-transparent rounded-pill">Not Started</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-15">
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-info-light"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>03</td>
											<td>
												<div className="d-flex align-items-center fw-semibold">
													<span className="avatar avatar-sm me-2 avatar-rounded">
														<img src={faces11} alt="img" />
													</span>Simon Cowel
												</div>
											</td>
											<td><span className="badge bg-success-transparent">Manager</span></td>
											<td>simoncowel234@gmail.com</td>
											<td><span className="ms-1">	12:00am</span>
											</td>
											<td>Sep 15 - Oct 12, 2023</td>
											<td>
												<span className="badge badge-sm bg-success-transparent rounded-pill">Completed</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-15">
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-info-light"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>04</td>
											<td>
												<div className="d-flex align-items-center fw-semibold">
													<span className="avatar avatar-sm me-2 avatar-rounded">
														<img src={faces8} alt="img" />
													</span>Mirinda Hers
												</div>
											</td>
											<td><span className="badge bg-danger-transparent">Employee</span></td>
											<td>mirindahers@gmail.com</td>
											<td><span className="ms-1">09:00am</span>
											</td>
											<td>Apr 10 - Dec 12, 2023</td>
											<td>
												<span className="badge badge-sm bg-warning-transparent rounded-pill">Processing</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-15">
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-info-light"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>05</td>
											<td>
												<div className="d-flex align-items-center fw-semibold">
													<span className="avatar avatar-sm me-2 avatar-rounded">
														<img src={faces16} alt="img" />
													</span>Andrew Garfield
												</div>
											</td>
											<td><span className="badge bg-warning-transparent">Director</span></td>
											<td>andrewgarfield@gmail.com</td>
											<td><span className="ms-1">	10:00am</span></td>
											<td>Jun 10 - Dec 12, 2022</td>
											<td>
												<span className="badge badge-sm bg-success-transparent rounded-pill">Completed</span>
											</td>
											<td>
												<div className="hstack gap-2 fs-15">
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-info-light"><i className="ri-download-2-line"></i></Link>
													<Link aria-label="anchor" to="#" className="btn btn-icon waves-effect waves-light btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex align-items-center">
								<div>
									Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
								</div>
								<div className="ms-auto">
									<nav aria-label="Page navigation" className="pagination-style-4">
										<Pagination as="ul" className="pagination mb-0">
											<Pagination.Item disabled>
												Prev
											</Pagination.Item>
											<Pagination.Item active href="#">1</Pagination.Item>
											<Pagination.Item href="#">2</Pagination.Item>
											<Pagination.Item className='text-primary' href="#">
												next
											</Pagination.Item>
										</Pagination>
									</nav>
								</div>
							</div>
						</Card.Footer>
					</Card>
				</Col>
			</div>
		</Fragment>
	);
};

export default Jobs;
