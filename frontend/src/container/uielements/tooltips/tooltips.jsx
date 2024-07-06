import React, { FC, Fragment } from "react";
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { SVGtooltip, Tooltipdirtooltip } from "./tooltipsdata";
import { Link } from "react-router-dom";

//IMAGES
import faces3 from "../../../assets/images/faces/3.jpg";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import Showcode from "../../../components/ui/showcode/showcode";
import { tool1, tool2, tool3, tool4, tool5, tool6 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Tooltips = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Showcode title="Tooltip Directions" code={tool1}>
						<div className="btn-list">
							{Tooltipdirtooltip.map((idx) => (
								<OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
									<Button type="button" className="btn btn-primary btn-wave">
										Tooltip on {idx.text}
									</Button>
								</OverlayTrigger>
							))}
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Showcode title="Colored Tooltips" code={tool2}>
						<div className="btn-list">
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
								<Button type="button" variant='primary' className="btn  btn-wave">
									Primary Tooltip
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
								<Button type="button" variant='secondary' className="btn  btn-wave">
									Secondary Tooltip
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
								<Button type="button" variant='warning' className="btn  btn-wave">
									Warning Tooltip
								</Button>
							</OverlayTrigger>

							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
								<Button type="button" variant='info' className="btn  btn-wave">
									Info Tooltip
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
								<Button type="button" variant='success' className="btn  btn-wave">
									Success Tooltip
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
								<Button type="button" variant='danger' className="btn  btn-wave">
									Danger Tooltip
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-light'>Light Tooltip </Tooltip>}>
								<Button type="button" variant='light' className="btn  btn-wave">
									Light Tooltip
								</Button>
							</OverlayTrigger>
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
								<Button type="button" variant='dark' className="btn  btn-wave">
									Dark Tooltip
								</Button>
							</OverlayTrigger>
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Showcode title="Tooltips on links" code={tool3}>
						<p className="text-muted mb-0">
							Hover on the link to view the
							<OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
								<Link to="#" className="text-primary ms-1 d-inline-flex">Tooltip</Link>
							</OverlayTrigger>
						</p>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="With an SVG's" code={tool4}>
						{SVGtooltip.map((idx) => (
							<OverlayTrigger key={Math.random()} placement="top" overlay={<Tooltip className={`tooltip-${idx.color}`}>{idx.text} </Tooltip>}>
								<Link to="#" className="me-3">
									<svg xmlns="http://www.w3.org/2000/svg" className={`svg-${idx.color}`} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
										<path d="M0 0h24v24H0V0z" fill="none" /><path
											d={idx.class} /></svg>
								</Link>
							</OverlayTrigger>
						))}
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Disabled elements" code={tool5}>
						<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled tooltip</Tooltip>}>
							<span className="d-inline-block">
								<Button disabled style={{ pointerEvents: "none" }}>
									Disabled button
								</Button>
							</span>
						</OverlayTrigger>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Showcode title="Tooltip For Images" code={tool6}>
						<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
							<Link to="#"
								className="avatar avatar-md me-2 online avatar-rounded">
								<img src={faces12} alt="img" />
							</Link>
						</OverlayTrigger>

						<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
							<Link to="#"
								className="avatar avatar-lg me-2 online avatar-rounded">
								<img src={faces3} alt="img" />
							</Link>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
							<Link to="#"
								className="avatar avatar-xl me-2 online avatar-rounded">
								<img src={faces15} alt="img" />
							</Link>
						</OverlayTrigger>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};
export default Tooltips;
