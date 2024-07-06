import React, { FC, Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";

//IMAGES
import faces1 from "../../../assets/images/faces/1.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces9 from "../../../assets/images/faces/9.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces13 from "../../../assets/images/faces/13.jpg";
import faces14 from "../../../assets/images/faces/14.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import Showcode from "../../../components/ui/showcode/showcode";
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avtar1 } from "../../../components/ui/data/utilitiesdata/utilitiesprism";
import { Link } from "react-router-dom";

const Avatars = () => {

	return (
		<Fragment>
			<Row>
				<Col xxl={4} lg={6} md={12} sm={12}>
					<Showcode title="Avatar Sizes <p className='subtitle text-muted fs-12 font-normal'> Avatars of different sizes </p>" code={avatar1}>
						<span className="avatar avatar-xs me-2">
							<img src={faces4} alt="img" />
						</span>
						<span className="avatar avatar-sm me-2">
							<img src={faces5} alt="img" />
						</span>
						<span className="avatar avatar-md me-2">
							<img src={faces5} alt="img" />
						</span>
						<span className="avatar avatar-lg me-2">
							<img src={faces7} alt="img" />
						</span>
						<span className="avatar avatar-xl me-2">
							<img src={faces8} alt="img" />
						</span>
						<span className="avatar avatar-xxl me-2">
							<img src={faces9} alt="img" />
						</span>
						<Card.Footer className="p-0">
							<div className="table-responsive">
								<Table className="table mb-0">
									<tbody>
										<tr>
											<td>Classes :</td>
											<td><code>.avatar-[size]</code></td>
										</tr>
										<tr>
											<td>Values :</td>
											<td>xs, sm  , md , lg , xl , xxl</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
				<Col xxl={4} lg={6} md={12} sm={12}>
					<Showcode title="Avatars" code={avtar1} customCardBodyClass="py-4">
						<span className="avatar me-2 avatar-radius-0">
							<img src={faces1} alt="img" />
						</span>
						<span className="avatar me-2">
							<img src={faces2} alt="img" />
						</span>
						<span className="avatar me-2 avatar-rounded">
							<img src={faces3} alt="img" />
						</span>
						<Card.Footer className="card-footer p-0">
							<div className="table-responsive">
								<table className="table mb-0">
									<tbody>
										<tr>
											<td>Without radius :</td>
											<td><code>.avatar.avatar-radius-0</code></td>
										</tr>
										<tr>
											<td>With Radius :</td>
											<td><code>.avatar</code></td>
										</tr>
										<tr>
											<td>Round Avatar :</td>
											<td><code>.avatar.avatar-rounded</code></td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
				<Col xxl={4} lg={12} md={12} sm={12}>
					<Showcode title="Avatar With Icons<p class='subtitle text-muted fs-12 font-normal'>Avatar contains icons to perform respective action.</p>" code={avatar2}>
						<span className="avatar avatar-xs me-2 avatar-rounded">
							<img src={faces2} alt="img" />
							<Link aria-label="anchor" to="#" className="badge bg-success rounded-pill avatar-badge"><i className="fe fe-camera"></i></Link>
						</span>
						<span className="avatar avatar-sm me-2 avatar-rounded">
							<img src={faces3} alt="img" />
							<Link aria-label="anchor" to="#" className="badge rounded-pill bg-secondary avatar-badge"><i className="fe fe-edit"></i></Link>
						</span>
						<span className="avatar avatar-md me-2 avatar-rounded">
							<img src={faces14} alt="img" />
							<Link aria-label="anchor" to="#" className="badge rounded-pill bg-warning avatar-badge"><i className="fe fe-plus"></i></Link>
						</span>
						<span className="avatar avatar-lg me-2 avatar-rounded">
							<img src={faces13} alt="img" />
							<Link aria-label="anchor" to="#" className="badge rounded-pill bg-info avatar-badge"><i className="fe fe-edit"></i></Link>
						</span>
						<span className="avatar avatar-xl me-2 avatar-rounded">
							<img src={faces15} alt="img" />
							<a aria-label="anchor" href="#;" className="badge rounded-pill bg-success avatar-badge"><i className="fe fe-camera"></i></a>
						</span>
						<span className="avatar avatar-xxl me-2 avatar-rounded">
							<img src={faces9} alt="img" />
							<a aria-label="anchor" href="#;" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-plus"></i></a>
						</span>
						<Card.Footer className="p-0">
							<div className="table-responsive">
								<table className="table mb-0">
									<tbody>
										<tr>
											<td>Class Name :</td>
											<td><code>.badge.number-badge</code></td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xxl={4} lg={6} md={12} sm={12}>
					<Showcode title="Avatar With Ofline Status Indicators<p class='subtitle text-muted fs-12 font-normal'>avatars having a offline status indicator.</p>" code={avatar3}>
						<span className="avatar avatar-xs me-2 offline avatar-rounded">
							<img src={faces2} alt="img" />
						</span>
						<span className="avatar avatar-sm offline me-2 avatar-rounded">
							<img src={faces3} alt="img" />
						</span>
						<span className="avatar avatar-md me-2 offline avatar-rounded">
							<img src={faces4} alt="img" />
						</span>
						<span className="avatar avatar-lg me-2 offline avatar-rounded">
							<img src={faces5} alt="img" />
						</span>
						<span className="avatar avatar-xl me-2 offline avatar-rounded">
							<img src={faces5} alt="img" />
						</span>
						<span className="avatar avatar-xxl me-2 offline avatar-rounded">
							<img src={faces7} alt="img" />
						</span>

						<Card.Footer className="p-0 mt-3">
							<div className="table-responsive">
								<table className="table mb-0">
									<tbody>
										<tr>
											<td>Class Name :</td>
											<td><code>.avatar.offline</code></td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
				<Col xxl={4} lg={6} md={12} sm={12}>
					<Showcode title="Avatar With Online Status Indicators
								<p className='subtitle text-muted fs-12 font-normal'>
									avatars having online status indicator.
								</p>" code={avatar4}>
						<span className="avatar avatar-xs me-2 online avatar-rounded">
							<img src={faces8} alt="img" />
						</span>
						<span className="avatar avatar-sm online me-2 avatar-rounded">
							<img src={faces10} alt="img" />
						</span>
						<span className="avatar avatar-md me-2 online avatar-rounded">
							<img src={faces12} alt="img" />
						</span>
						<span className="avatar avatar-lg me-2 online avatar-rounded">
							<img src={faces13} alt="img" />
						</span>
						<span className="avatar avatar-xl me-2 online avatar-rounded">
							<img src={faces14} alt="img" />
						</span>
						<span className="avatar avatar-xxl me-2 online avatar-rounded">
							<img src={faces15} alt="img" />
						</span>
						<Card.Footer className="p-0 mt-3">
							<div className="table-responsive">
								<table className="table mb-0">
									<tbody>
										<tr>
											<td>Class Name :</td>
											<td><code>.avatar.online</code></td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
				<Col xxl={4} lg={12} md={12} sm={12}>
					<Showcode title="Avatars With Number Badges
								<p class='subtitle text-muted fs-12 font-normal'>
									Avatar numbers indicates the no. of unread notififactions/messages.
								</p>" code={avatar5}>
						<span className="avatar avatar-xs me-2 avatar-rounded">
							<img src={faces2} alt="img" />
							<span className="badge rounded-pill bg-primary avatar-badge">2</span>
						</span>
						<span className="avatar avatar-sm me-2 avatar-rounded">
							<img src={faces3} alt="img" />
							<span className="badge rounded-pill bg-secondary avatar-badge">5</span>
						</span>
						<span className="avatar avatar-md me-2 avatar-rounded">
							<img src={faces14} alt="img" />
							<span className="badge rounded-pill bg-warning avatar-badge">1</span>
						</span>
						<span className="avatar avatar-lg me-2 avatar-rounded">
							<img src={faces13} alt="img" />
							<span className="badge rounded-pill bg-info avatar-badge">7</span>
						</span>
						<span className="avatar avatar-xl me-2 avatar-rounded">
							<img src={faces15} alt="img" />
							<span className="badge rounded-pill bg-success avatar-badge">3</span>
						</span>
						<span className="avatar avatar-xxl me-2 avatar-rounded">
							<img src={faces9} alt="img" />
							<span className="badge rounded-pill bg-danger avatar-badge">9</span>
						</span>
						<Card.Footer className="p-0 mt-3">
							<div className="table-responsive">
								<Table className="table mb-0">
									<tbody>
										<tr>
											<td>Class Name :</td>
											<td><code>.badge.number-badge</code></td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6} lg={6} md={12} sm={12}>
					<Showcode title="Stacked Avatars
								<p class='subtitle text-muted fs-12 font-normal'>
									Group of avatars stacked together.
								</p>" code={avatar6}>
						<div className="avatar-list-stacked">
							<span className="avatar">
								<img src={faces2} alt="img" />
							</span>
							<span className="avatar">
								<img src={faces8} alt="img" />
							</span>
							<span className="avatar">
								<img src={faces2} alt="img" />
							</span>
							<span className="avatar">
								<img src={faces10} alt="img" />
							</span>
							<span className="avatar">
								<img src={faces4} alt="img" />
							</span>
							<span className="avatar">
								<img src={faces13} alt="img" />
							</span>
							<a className="avatar bg-primary text-fixed-white" href="#;">
								+8
							</a>
						</div>
						<Card.Footer className="p-0 mt-3">
							<div className="table-responsive">
								<table className="table mb-0">
									<tbody>
										<tr>
											<td>Class Name :</td>
											<td><code>.avatar-list-stacked</code> for parent div</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
				<Col xl={6} lg={6} md={12} sm={12}>
					<Showcode title="Rounded Stacked Avatars
								<p class='subtitle text-muted fs-12 font-normal'>
									Group of avatars stacked together.
								</p>"code={avatar7}>
						<div className="avatar-list-stacked">
							<span className="avatar avatar-rounded">
								<img src={faces2} alt="img" />
							</span>
							<span className="avatar avatar-rounded">
								<img src={faces8} alt="img" />
							</span>
							<span className="avatar avatar-rounded">
								<img src={faces2} alt="img" />
							</span>
							<span className="avatar avatar-rounded">
								<img src={faces10} alt="img" />
							</span>
							<span className="avatar avatar-rounded">
								<img src={faces4} alt="img" />
							</span>
							<span className="avatar avatar-rounded">
								<img src={faces13} alt="img" />
							</span>
							<a className="avatar bg-primary avatar-rounded text-fixed-white" href="#;">
								+8
							</a>
						</div>
						<Card.Footer className="p-0 mt-3">
							<div className="table-responsive">
								<table className="table mb-0">
									<tbody>
										<tr>
											<td>Class Name :</td>
											<td><code>.avatar-list-stacked</code> for parent div &amp; <code>.avatar-rounded</code> for .avatar</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card.Footer>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xxl={6} xl={6} lg={6} md={12} sm={12}>
					<Showcode title="Avatar With Initials
								<p class='subtitle text-muted fs-12 font-normal'>
									Avatar contains intials when user profile doesn't exist.
								</p>" code={avatar8}>
						<span className="mb-1 avatar avatar-xs me-2 bg-primary">
							xs
						</span>
						<span className="mb-1 avatar avatar-sm me-2 bg-secondary">
							SM
						</span>
						<span className="mb-1 avatar avatar-md me-2 bg-warning">
							MD
						</span>
						<span className="mb-1 avatar avatar-lg me-2 bg-danger">
							LG
						</span>
						<span className="mb-1 avatar avatar-xl me-2 bg-success">
							XL
						</span>
						<span className="mb-1 avatar avatar-xxl me-2 bg-info">
							XXL
						</span>
					</Showcode>
				</Col>
				<Col xxl={6} xl={6} lg={6} md={12} sm={12}>
					<Showcode title="Rounded Avatar With Initials
								<p class='subtitle text-muted fs-12 font-normal'>
									Avatar contains intials when user profile doesn't exist.
								</p>" code={avatar9}>
						<span className="avatar avatar-rounded avatar-xs me-2 bg-primary">
							xs
						</span>
						<span className="avatar avatar-rounded avatar-sm me-2 bg-secondary">
							SM
						</span>
						<span className="avatar avatar-rounded avatar-md me-2 bg-warning">
							MD
						</span>
						<span className="avatar avatar-rounded avatar-lg me-2 bg-danger">
							LG
						</span>
						<span className="avatar avatar-rounded avatar-xl me-2 bg-success">
							XL
						</span>
						<span className="avatar avatar-rounded avatar-xxl me-2 bg-info">
							XXL
						</span>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Avatars;
