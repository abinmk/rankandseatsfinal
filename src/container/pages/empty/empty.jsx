import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Empty = () => (
	<Fragment>
		<Row>
			<Col xl={12}>
				<Card className="custom-card">
					<Card.Body className="">
						<Card.Title as="h6" className="fw-semibold mb-0">Enter Something text here....</Card.Title>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</Fragment>
);

export default Empty;
