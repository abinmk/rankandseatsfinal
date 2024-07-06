import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basiheatmap, Colorrange, Multiseriesheatmap, Shadesheatmap } from "./heatmapdata";

const Heatmapchart = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Basic Heatmap Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-basic">
								<Basiheatmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Multi Series Heatmap Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-multiseries">
								<Multiseriesheatmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Color Range Heatmap Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-colorrange">
								<Colorrange />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Heatmap Range Without Shades</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="heatmap-range">
								<Shadesheatmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Heatmapchart;
