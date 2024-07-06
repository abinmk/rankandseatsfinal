import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Advancedmultirange, Basictimeline, Multiplecolored, Timelinegrouped, Timelinegrouped1 } from "./timelinechartdata";

const Timelinechart = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Basic Timeline Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="timeline-basic">
								<Basictimeline />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Multiple Colored TImeline Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="timeline-colors">
								<Multiplecolored />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Multi Series Timeline Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="timeline-multi">
								<Timelinegrouped1 />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Advanced Timeline Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="timeline-advanced">
								<Advancedmultirange />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Timeline-Grouped Rows</Card.Title>
						</Card.Header>
						<div className="p-0 p-sm-4">
							<div id="timeline-grouped">
								<Timelinegrouped />
							</div>
						</div>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Timelinechart;
