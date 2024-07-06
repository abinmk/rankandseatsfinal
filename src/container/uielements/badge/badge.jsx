import React, { FC, Fragment } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import { badgesdata, badges1, Outlinebadgesdata } from "./badgedata";

//IMAGES
import faces2 from "../../../assets/images/faces/2.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import Showcode from "../../../components/ui/showcode/showcode";
import { badge1, badge10, badge11, badge12, badge13, badge14, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Badges = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Showcode title="Badges" code={badge1} customCardBodyClass="d-flex flex-wrap gap-2">
						{badgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color} ${badge.class}`}>{badge.heading}</Badge>
						))}
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Pill badges" code={badge2} customCardBodyClass="d-flex flex-wrap gap-2">
						{badgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color} ${badge.class} rounded-pill`}>{badge.heading}</Badge>
						))}
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Light Badges" code={badge3} customCardBodyClass="d-flex flex-wrap gap-2">
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
						))}
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Light Pill Badges" code={badge4} customCardBodyClass="d-flex flex-wrap gap-2">
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
						))}
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Outline Badges" code={badge5} customCardBodyClass="d-flex flex-wrap gap-2">
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
						))}
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Outline Pill Badges" code={badge6} customCardBodyClass="d-flex flex-wrap gap-2">
						{Outlinebadgesdata.map((badge) => (
							<Badge key={Math.random()} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
						))}
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Gradient Badges" code={badge7} customCardBodyClass="d-flex flex-wrap gap-2">
						{badges1.map((badge1) => (
							<Badge key={Math.random()} bg={badge1.color} className={`badge bg-${badge1.color}-gradient`}>{badge1.heading}</Badge>
						))}
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Gradient Pill Badges" code={badge8} customCardBodyClass="d-flex flex-wrap gap-2">
						{badges1.map((badge1) => (
							<Badge key={Math.random()} bg={badge1.color} className={`badge bg-${badge1.color}-gradient rounded-pill`}>{badge1.heading}</Badge>
						))}
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<Showcode title="Buttons With Badges" code={badge9} customCardBodyClass="d-flex flex-wrap gap-2">
						<Button variant='danger' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-danger">777</Badge>
						</Button>
						<Button variant='primary' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-primary">4</Badge>
						</Button>
						<Button variant='info' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-info">32</Badge>
						</Button>
						<Button variant='warning' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-warning">7</Badge>
						</Button>
						<Button variant='success' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-success">12</Badge>
						</Button>
						<Button variant='secondary' type="button" className="my-1 me-2">
							Notifications <Badge bg="white" className=" ms-2 text-secondary">7</Badge>
						</Button>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Buttons With Badges" code={badge10} customCardBodyClass="d-flex flex-wrap gap-2">
						<Button variant='primary' type="button" className=" my-1 me-2">
							Notifications <Badge bg="secondary" className="ms-2 ">4</Badge>
						</Button>
						<Button variant='secondary' type="button" className=" my-1 me-2">
							Notifications <Badge bg="primary" className="ms-2 ">7</Badge>
						</Button>
						<Button variant='success' type="button" className=" my-1 me-2">
							Notifications <Badge bg="danger" className="ms-2 ">12</Badge>
						</Button>
						<Button variant='info' type="button" className=" my-1 me-2">
							Notifications <Badge bg="warning" className="ms-2 ">32</Badge>
						</Button>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Outline Button Badges" code={badge11} customCardBodyClass="d-flex flex-wrap gap-2">
						<Button variant='outline-primary' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">4</Badge>
						</Button>
						<Button variant='outline-secondary' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">7</Badge>
						</Button>
						<Button variant='outline-success' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">12</Badge>
						</Button>
						<Button variant='outline-info' type="button" className="btn  my-1 me-2">
							Notifications <Badge bg="" className="badge ms-2">32</Badge>
						</Button>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Headings" code={badge12}>
						<h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
						<h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
						<h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
						<h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
						<h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
						<h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Row>
						<div className="col-xl-12">
							<Showcode title="Positioned Badges" code={badge13} className="custom-card">
								<span className="avatar me-4 my-1">
									<img src={faces15} alt="img" />
									<span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light   rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
								<span className="avatar me-4 my-1">
									<img src={faces2} alt="img" />
									<span
										className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
								<span className="avatar me-4 avatar-rounded my-1">
									<img src={faces10} alt="img" />
									<span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
										<span className="visually-hidden">New alerts</span>
									</span>
								</span>
								<Button variant='secondary' type="button" className="position-relative me-4 my-1">
									Profile
									<span
										className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
										<span className="visually-hidden">New alerts</span>
									</span>
								</Button>
								<Button variant='outline-info' type="button" className="btn  position-relative">
									Inbox
									<span
										className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-fixed-white">
										99+
										<span className="visually-hidden">unread messages</span>
									</span>
								</Button>
							</Showcode>
						</div>
						<div className="col-xl-12">
							<Showcode title="Custom Badges" code={badge14} customCardBodyClassClass="d-block d-xxl-flex">
								<p className="mb-xxl-0 badge bg-outline-info custom-badge fs-15 me-5"><i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
								<p className="mb-xxl-0 badge bg-success custom-badge fs-15 me-5"><i className="ti ti-home me-1 d-inline-flex"></i>Home</p>
								<p className="mb-xxl-0 icon-badge me-5">
									<svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg> <span className="badge rounded-pill bg-success">14</span> </p>
								<p className="mb-xxl-0 badge border bg-light text-default custom-badge me-5"><i className="fe fe-eye me-1 d-inline-flex"></i>13.2k</p>
								<p className="mb-xxl-0 text-badge me-5"> <span className="text fs-18">Inbox</span> <span className="badge rounded-pill bg-success">32</span> </p>
							</Showcode>
						</div>
					</Row>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Badges;
