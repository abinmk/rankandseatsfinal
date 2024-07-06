import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicradar, Multipleradar, Polygonradar } from "./radarchartdata";

const Radarchart = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Basic Radar Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="radar-basic">
								<Basicradar />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Radar Chart-Multiple Series</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="radar-multiple">
								<Multipleradar />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Radar Chart Polygon Fill</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="radar-polygon">
								<Polygonradar />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Radarchart;
