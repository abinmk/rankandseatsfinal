import React, { FC, Fragment } from "react";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Bootstrapicons, Boxicons, Feathericons, LineAwesomeicons, Remixicons, Tablericons } from "./iconsdata";
import { Link } from "react-router-dom";

const Icons = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Line Awesome Icons</Card.Title>
						</Card.Header>
						<Card.Body>
							<p className="mb-1">Simply beautiful open source icons. For more info <Link to="https://icons8.com/line-awesome" target="_blank" className="text-primary" rel="noreferrer">click here</Link>.</p>
							<p className="mb-4"><code>&lt;i className="las la-ICON_NAME"&gt;&lt;/i&gt;</code></p>
							<ul className="icons-list list-unstyled">
								{LineAwesomeicons.map((idx) => (
									<li className="icons-list-item" key={Math.random()}>
										<OverlayTrigger placement="top" overlay={<Tooltip>bi bi-{idx.text}</Tooltip>}>
											<i className={`las la-${idx.text}`}></i>
										</OverlayTrigger>
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Boxicons</Card.Title>
						</Card.Header>
						<Card.Body>
							<p className="mb-1">Simply beautiful open source icons. For more info <a href="https://boxicons.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
							<p className="mb-4"><code>&lt;i className="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code></p>
							<ul className="icons-list list-unstyled">
								{Boxicons.map((idx) => (
									<li className="icons-list-item" key={Math.random()}>
										<OverlayTrigger placement="top" overlay={<Tooltip>bi bi-{idx.text}</Tooltip>}>
											<i className={`bx bx-${idx.text}`}></i>
										</OverlayTrigger>
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Tabler Icons</Card.Title>
						</Card.Header>
						<Card.Body>
							<p className="mb-1">Simply beautiful open source icons. For more info <a href="https://tabler-icons.io/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
							<p className="mb-4"><code>&lt;i className="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
							<ul className="icons-list list-unstyled">
								{Tablericons.map((idx) => (
									<li className="icons-list-item" key={Math.random()}>
										<OverlayTrigger placement="top" overlay={<Tooltip>bi bi-{idx.text}</Tooltip>}>
											<i className={`ti ti-${idx.text}`}></i>
										</OverlayTrigger>
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Remix Icons</Card.Title>
						</Card.Header>
						<Card.Body>
							<p className="mb-1">Simply beautiful open source icons. For more info <a href="https://remixicon.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
							<p className="mb-4"><code>&lt;i className="ri-ICON_NAME"&gt;&lt;/i&gt;</code></p>
							<ul className="icons-list list-unstyled">
								{Remixicons.map((idx) => (
									<li className="icons-list-item" key={Math.random()}>
										<OverlayTrigger placement="top" overlay={<Tooltip>bi bi-{idx.text}</Tooltip>}>
											<i className={`ri-${idx.text}`}></i>
										</OverlayTrigger>
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Bootstrap Icons</Card.Title>
						</Card.Header>
						<Card.Body>
							<p className="mb-1">Simply beautiful open source icons. For more info <a href="https://icons.getbootstrap.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
							<p className="mb-4"><code>&lt;i className="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
							<ul className="icons-list list-unstyled">
								{Bootstrapicons.map((idx) => (
									<li className="icons-list-item" key={Math.random()}>
										<OverlayTrigger placement="top" overlay={<Tooltip>bi bi-{idx.text}</Tooltip>}>
											<i className={`bi bi-${idx.text}`}></i>
										</OverlayTrigger>
									</li>
								))}
							</ul>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Feather Icons</Card.Title>
						</Card.Header>
						<Card.Body>
							<p className="mb-1">Simply beautiful open source icons. For more info <a href="https://feathericons.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
							<p className="mb-4"><code>&lt;i className="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
							<ul className="icons-list list-unstyled">
								{Feathericons.map((idx) => (
									<li className="icons-list-item" key={Math.random()}>
										<OverlayTrigger placement="top" overlay={<Tooltip>bi bi-{idx.text}</Tooltip>}>
											<i className={`fe fe-${idx.text}`}></i>
										</OverlayTrigger>
									</li>
								))}</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
export default Icons;
