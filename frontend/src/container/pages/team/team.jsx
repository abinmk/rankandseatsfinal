import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Pagination, Row } from "react-bootstrap";
import { Teamloopdata, Teamselectdata } from "./teamdata";
import SimpleBar from "simplebar-react";
import Select from "react-select";

//IMAGES
import faces13 from "../../../assets/images/faces/13.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces14 from "../../../assets/images/faces/14.jpg";
import faces16 from "../../../assets/images/faces/1.jpg";
import { Link } from "react-router-dom";

const Team = () => {
	// for User search function
	const [Data, setData] = useState(Teamloopdata);

	const userdata = [];

	const myfunction = (idx) => {
		let Data;
		for (Data of Teamloopdata) {
			if (Data.name[0] == " ") {
				Data.name = Data.name.trim();
			}
			if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
				if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
					userdata.push(Data);
				}
			}

		}
		setData(userdata);
	};
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//
	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);
	return (
		<Fragment>
			<Row>
				<Col xl={9}>
					<div className="team-members" id="team-members">
						<Row>
							<Col xl={12}>
								<Card className="custom-card">
									<Card.Body className="">
										<div className="team-header">
											<div className="d-flex flex-wrap align-items-center justify-content-between">
												<div className="h5 fw-semibold mb-0">Team Ui</div>
												<div className="d-flex align-items-center">
													<div className="input-group">
														<Form.Control type="text" className="form-control" placeholder="Search Person Name" onChange={(ele) => { myfunction(ele.target.value); }}
															aria-describedby="search-team-member" />
														<Button variant='' className="btn btn-light  btn-primary" type="button" id="search-team-member"><i className="ri-search-line"></i></Button>
													</div>
													<Dropdown className="ms-2">
														<Dropdown.Toggle variant='' className="btn btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
															<i className="ti ti-dots-vertical"></i>
														</Dropdown.Toggle>
														<Dropdown.Menu as="ul" className="dropdown-menu">
															<Dropdown.Item as="li" href="#">Delete Team</Dropdown.Item>
															<Dropdown.Item as="li" href="#">Edit</Dropdown.Item>
															<Dropdown.Item as="li" href="#">Add Member</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</div>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
							{Data.map((idx) => (
								<Col xxl={3} xl={6} lg={6} md={6} sm={12} className="" key={Math.random()}>
									<Card className="custom-card ">
										<Card.Body className="">
											<div className="text-center">
												<span className="avatar avatar-xxxl rounded">
													<img src={idx.src} alt="" className="rounded-circle" />
												</span>
											</div>
											<div className="d-flex  text-center justify-content-between mt-1 mb-3">
												<div className="flex-fill">
													<p className="mb-0 fw-semibold fs-16 text-truncate max-w-150 mx-auto">
														<Link to={`${import.meta.env.BASE_URL}pages/profile`}>{idx.name}</Link>
													</p>
													<p className="mb-0 fs-12 text-muted text-truncate max-w-150 mx-auto">{idx.mail}</p>
												</div>
											</div>
											<div className="btn-list text-center">
												<div className="btn-list">
													<Button variant='info-light ' className="btn btn-sm btn-icon btn-wave waves-effect waves-light">
														<i className="ri-facebook-line fw-bold"></i>
													</Button>
													<Button variant='secondary-light' className="btn btn-sm btn-icon btn-wave waves-effect waves-light">
														<i className="ri-twitter-line fw-bold"></i>
													</Button>
													<Button variant='success-light ' className="btn btn-sm btn-icon btn-wave waves-effect waves-light">
														<i className="ri-github-line fw-bold"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
										<Card.Footer className="border-block-start-dashed text-center p-0">
											<div className="d-flex align-items-center justify-content-center">
												<div className="d-flex p-3 border-end">
													<div className="text-center ">
														<p className="fw-semibold mb-0">Projects</p>
														<span className="text-muted fs-12">{idx.project}</span>
													</div>
												</div>
												<div className="d-flex p-3">
													<div className="text-center">
														<p className="fw-semibold mb-0">Position</p>
														<span className="text-muted fs-12">{idx.position}</span>
													</div>
												</div>
											</div>
										</Card.Footer>
									</Card>
								</Col>
							))}
						</Row>
						<div className="float-end mb-4 ms-auto">
							<nav aria-label="Page navigation" className="pagination-style-4">
								<Pagination as="ul" className="pagination mb-0 gap-2">
									<Pagination.Item disabled href="#">
										Prev
									</Pagination.Item>
									<Pagination.Item active href="#">1</Pagination.Item>
									<Pagination.Item href="#">2</Pagination.Item>
									<Pagination.Item href="#">
										<i className="bi bi-three-dots"></i>
									</Pagination.Item>
									<Pagination.Item className="d-none d-sm-flex" href="#">16</Pagination.Item>
									<Pagination.Item href="#">17</Pagination.Item>
									<Pagination.Item className=" text-primary" href="#">
										next
									</Pagination.Item>
								</Pagination>
							</nav>
						</div>
					</div>
				</Col>
				<Col xl={3}>
					<div className="team-groups">
						<Card className=" custom-card">
							<Card.Header className="card-header d-flex align-items-center justify-content-between">
								<h6 className="fw-semibold mb-0">All Teams</h6>
								<div>
									<Button variant='' className="btn btn-sm btn-primary-light" data-bs-toggle="modal" onClick={handleShow}
										data-bs-target="#create-team">Create Team<i className="ri-add-line ms-1 align-middle d-inline-flex"></i></Button>
									<Modal centered show={show} onHide={handleClose} className="modal fade" id="create-team" tabindex={-1} aria-labelledby="create-teamLabel" aria-hidden="true">
										<Modal.Header closeButton className="">
											<h6 className="modal-title" id="create-teamLabel">Create Team</h6>
										</Modal.Header>
										<Modal.Body className="px-4">
											<div className="row gy-3">
												<Col xl={12}>
													<label htmlFor="team-name" className="form-label">Team Name</label>
													<input type="text" className="form-control" id="team-name" placeholder="Enter Name" />
												</Col>
												<Col xl={12}>
													<label className="form-label">Maximum Team Limit</label>
													{/* <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                                                    <option value="10" selected>10</option>
                                                                    <option value="20">20</option>
                                                                    <option value="30">30</option>
                                                                </select> */}
													<Select name="state" options={Teamselectdata} className="js-example-placeholder-multiple w-full js-states"
														defaultValue={[Teamselectdata[0]]}
														menuPlacement='auto' classNamePrefix="Select2" isSearchable
													/>
												</Col>
											</div>
										</Modal.Body>
										<Modal.Footer className="">
											<Button variant='light' onClick={handleClose} type="button" className="btn btn-sm " data-bs-dismiss="modal">Cancel</Button>
											<Button variant='primary' type="button" className="btn btn-sm">Create</Button>
										</Modal.Footer>
									</Modal>
								</div>
							</Card.Header>
							<Card.Body className="p-0">
								<div className="teams-nav" id="teams-nav">

									<SimpleBar style={{ height: "530px" }} id="teams-nav">
										<ul className="list-unstyled mb-0 mt-2">
											<li className="pb-0">
												<div className="d-flex justify-content-between align-items-center">
													<div className="fs-10 fw-semibold mb-2 text-muted">TEAM UI</div>
													<div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Member">
														<Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave" onClick={handleShow1} data-bs-toggle="modal" data-bs-target="#create-teamui-mem"><i className="ri-add-line"></i></Button>
													</div>
												</div>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces3} alt="" className="rounded-circle" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Angelica Hale</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded offline">
																<img src={faces5} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Mona Magore</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">
																8 min
															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces15} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Mark Wains</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces12} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Alex Carey</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded offline">
																<img src={faces7} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Monika Karen</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">
																24 mins
															</span>
														</div>
													</div>
												</Link>
											</li>
											<li className="pb-0">
												<div className="d-flex justify-content-between align-items-center">
													<div className="fs-10 fw-semibold mb-2 text-muted">TEAM REACT</div>
													<div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Member">
														<Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave" onClick={handleShow1}
															data-bs-toggle="modal" data-bs-target="#create-teamreact-mem"><i className="ri-add-line"></i></Button>
													</div>
												</div>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces10} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Matthew Ray</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces8} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Melissa Blue</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces2} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Brenda Sams</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded offline">
																<img src={faces14} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Muhammed Kher</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">
																13 mins
															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces4} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Dorga Boavan</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded offline">
																<img src={faces13} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Yashna Polana</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">
																19 mins
															</span>
														</div>
													</div>
												</Link>
											</li>
											<li className="pb-0">
												<div className="d-flex justify-content-between align-items-center">
													<div className="fs-10 fw-semibold mb-2 text-muted">TEAM TESTING</div>
													<div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Member">
														<Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave" onClick={handleShow1}
															data-bs-toggle="modal" data-bs-target="#create-teamtesting-mem"><i className="ri-add-line"></i></Button>
													</div>
												</div>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces11} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Jason Smith</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded offline">
																<img src={faces6} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Sasha Hops</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">
																21 mins
															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces9} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Mark Zaker</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">
																38 mins
															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded online">
																<img src={faces16} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Suarez Adam</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">

															</span>
														</div>
													</div>
												</Link>
											</li>
											<li>
												<Link to="#">
													<div className="d-flex align-items-center">
														<div className="me-2 d-flex align-items-center">
															<span className="avatar avatar-sm avatar-rounded offline">
																<img src={faces1} alt="" />
															</span>
														</div>
														<div className="flex-fill">
															<span>Kiara Advensh</span>
														</div>
														<div>
															<span className="fs-10 fw-semibold text-muted">
																1 hr
															</span>
														</div>
													</div>
												</Link>
											</li>
										</ul>
									</SimpleBar>
								</div>
							</Card.Body>
						</Card>
					</div>
				</Col>
			</Row>

			<Modal centered className="modal fade" id="create-teamui-mem" tabindex="-1" aria-labelledby="create-teamuiLabel" aria-hidden="true" show={show1} onHide={handleClose1}>
				<Modal.Header closeButton className="">
					<h6 className="modal-title" id="create-teamuiLabel">Add Member</h6>
					{/* <Button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></Button> */}
				</Modal.Header>
				<Modal.Body className=" p-4">
					<Row className="row">
						<Col xl={12} className="">
							<label htmlFor="team-name3" className="form-label">Name</label>
							<Form.Control type="text" className="form-control" id="team-name3" placeholder="Enter Name" />
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" type="button" className="btn btn-sm" onClick={handleClose1} data-bs-dismiss="modal">Cancel</Button>
					<Button variant="primary" type="button" className="btn btn-sm ">Add</Button>
				</Modal.Footer>

			</Modal>
		</Fragment>
	);
};

export default Team;
