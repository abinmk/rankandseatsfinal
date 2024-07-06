import React, { FC, Fragment } from "react";
import { Button, Col, OverlayTrigger, Popover, Row } from "react-bootstrap";
import { Colorheaderalerts, Colredalerts, Defaultalerts, Dismissiblealerts } from "./popoversdata";
import { Link } from "react-router-dom";
import Showcode from "../../../components/ui/showcode/showcode";
import { pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

//IMAGES
import faces10 from "../../../assets/images/faces/10.jpg";
import faces1 from "../../../assets/images/faces/1.jpg";

const Popovers = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={5}>
					<Showcode title="Default Popovers" code={pop1}>
						<div className="btn-list">
							{Defaultalerts.map((idx) => (
								<OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
									overlay={<Popover>
										<Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
										<Popover.Body>
											And here's some amazing content. It's very engaging. Right?
										</Popover.Body>
									</Popover>}>
									<Button variant='' href="#" className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
								</OverlayTrigger>
							))}
						</div>
					</Showcode>
				</Col>
				<Col xl={7}>
					<Showcode title="Colored Headers" code={pop2}>
						<div className="btn-list">
							{Colorheaderalerts.map((idx) => (
								<OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
									// autoclose='true' 
									overlay={<Popover className={`header-${idx.color1} ${idx.color2}`}>
										<Popover.Header as="h3" data-bs-custom-classname={`header-${idx.color1}`}> Color Header</Popover.Header>
										<Popover.Body>
											Popover with primary header.
										</Popover.Body>
									</Popover>}>
									<Button variant={idx.color} className="btn btn-wave">Header {idx.text}</Button>
								</OverlayTrigger>
							))}
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-12">
					<Showcode title="Colored Popovers" code={pop3}>
						<div className="btn-list">
							{Colredalerts.map((idx) => (
								<OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}`}>
									<Popover.Header as="h3">Color Background</Popover.Header>
									<Popover.Body>Popover with {idx.text} background.</Popover.Body>
								</Popover>}>
									<Button variant={idx.color1}>{idx.text} </Button>
								</OverlayTrigger>
							))}
						</div>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-12">
					<Showcode title="Light Popovers" code={pop4}>
						<div className="btn-list">
							{Colredalerts.map((idx) => (
								<OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}-light`} id="tooltip-disabled">
									<Popover.Header as="h3">Light Background</Popover.Header>
									<Popover.Body>Popover with light {idx.text} background.</Popover.Body>
								</Popover>}>
									<Button variant='' className={`btn btn-${idx.color1}-light btn-wave`}>{idx.text} </Button>
								</OverlayTrigger>
							))}
						</div>
					</Showcode>
				</div>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Dismissible Popovers" code={pop5} customCardBodyClass="d-sm-flex  justify-content-lg-between gap-0">
						{Dismissiblealerts.map((idx) => (
							<OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={Math.random()}
								overlay={<Popover>
									<Popover.Header as="h3"> Dismissible Popover</Popover.Header>
									<Popover.Body>
										And here's some amazing content. It's very engaging. Right?
									</Popover.Body>
								</Popover>}>
								<Button variant={idx.color} className="btn  btn-wave m-1">Popover Dismiss</Button>
							</OverlayTrigger>
						))}
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Disabled Popover" code={pop6}>
						<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
							<Popover.Body>Disabled Popover!</Popover.Body>
						</Popover>}>
							<span className="d-inline-block mb-3 mb-sm-1 me-2">
								<Button variant="primary" disabled>
									Disabled button
								</Button>
							</span>
						</OverlayTrigger>
						<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
							<Popover.Body>Disabled Popover!</Popover.Body>
						</Popover>}>
							<span className="d-inline-block mb-3 mb-sm-1 me-2">
								<Button variant="info" disabled>
									Disabled button
								</Button>
							</span>
						</OverlayTrigger>
						<OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
							<Popover.Body>Disabled Popover!</Popover.Body>
						</Popover>}>
							<span className="d-inline-block">
								<Button variant="light" disabled>
									Disabled button
								</Button>
							</span>
						</OverlayTrigger>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Icon Popovers" code={pop7}>
						<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-secondary only-body' id="tooltip-disabled">
							<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
						</Popover>}>
							<Link className="me-4" to="#">
								<svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
									<path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-info only-body' id="tooltip-disabled">
							<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
						</Popover>}>
							<Link className="me-4" to="#" >
								<svg xmlns="http://www.w3.org/2000/svg" className="svg-info" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement='right' trigger="click" overlay={<Popover className='popover-warning only-body' id="tooltip-disabled">
							<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
						</Popover>}>
							<Link className="me-4" to="#">
								<span className="avatar avatar-md br-5 bg-warning-transparent text-warning ">
									<i className="fe fe-box"></i></span>
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement='bottom' trigger="click" overlay={<Popover className='popover-teal only-body' id="tooltip-disabled">
							<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
						</Popover>}>
							<Link className="me-4" to="#" >
								<span className="avatar avatar-md br-5 bg-teal-transparent text-teal ">
									<i className="fe fe-zap"></i></span>
							</Link>
						</OverlayTrigger>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Icon Popovers" code={pop9}>
						<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-primary only-body' id="tooltip-disabled">
							<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
						</Popover>}>
							<Link className="me-4 avatar avatar-md br-5" to="#" >
								<img src={faces10} alt="img" />
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement='right' trigger="click" overlay={<Popover className='popover-light only-body' id="tooltip-disabled">
							<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
						</Popover>}>
							<Link className="me-4 avatar avatar-md rounded-circl" to="#" >
								<img src={faces1} alt="img" />
							</Link>
						</OverlayTrigger>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Popovers;
