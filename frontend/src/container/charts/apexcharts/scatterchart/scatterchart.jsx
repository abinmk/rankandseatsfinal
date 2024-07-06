import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicscatter, Datetimescatter, Imagefillescatter } from "./scatterchartdata";

const Scatterchart = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Basic Scatter Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="scatter-basic">
								<Basicscatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Datetime Scatter Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="scatter-datetime">
								<Datetimescatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Image Fill Scatter Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="scatter-image">
								<Imagefillescatter />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Scatterchart;
