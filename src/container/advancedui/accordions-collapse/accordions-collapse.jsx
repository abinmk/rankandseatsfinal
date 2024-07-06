import React, { FC, Fragment, useState } from "react";
import { Accordion, Button, Card, Col, Collapse, Row } from "react-bootstrap";
import Showcode from "../../../components/ui/showcode/showcode";
import { accordian1, accordian10, accordian11, accordian12, accordian13, accordian14, accordian15, accordian2, accordian3, accordian4, accordian5, accordian6, accordian7, accordian8, accordian9 } from "../../../components/ui/data/advanceuiprismdata/advanceuiprism";

const AccordionsCollapse = () => {
	const [isFirstCollapsed, setisFirstCollapsed] = useState(false);
	const [isSecondCollapsed, setisSecondCollapsed] = useState(false);

	const first = () => {
		if (isFirstCollapsed === false) {
			setisFirstCollapsed(true);
		}
		else if (isFirstCollapsed === true) {
			setisFirstCollapsed(false);
		}
	};

	const second = () => {

		if (isSecondCollapsed === true) {
			setisSecondCollapsed(false);
		}
		else if (isSecondCollapsed === false) {
			setisSecondCollapsed(true);
		}
	};

	const both = () => {
		if (isSecondCollapsed === true) {
			setisSecondCollapsed(false);
		}
		else if (isSecondCollapsed === false) {
			setisSecondCollapsed(true);
		}
		if (isFirstCollapsed === true) {
			setisFirstCollapsed(false);
		}
		else if (isFirstCollapsed === false) {
			setisFirstCollapsed(true);
		}
	};

	const [open, setOpen] = useState(false);

	const [openb, setOpenb] = useState(false);

	return (

		<div>
			<Fragment>
				<Row>
					<Col xl={6}>
						<Showcode title=" Basic Accordion" code={accordian1}>
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
					<Col xl={6}>
						<Showcode title="Always Open Accordion <p class='text-muted subtitle fs-12 fw-normal'>Omit the <code>data-bs-parent</code>attributon each  <code>.accordion-collapse</code>  to make accordion items stay open when another item is opened.</p>" code={accordian2}>
							<Accordion defaultActiveKey={["0"]} alwaysOpen>
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
				</Row>
				<Row>
					<Col xl={12}>
						<Showcode title=" Flush Accordion
                  <p class='subtitle text-muted fs-12 fw-normal'>
                    Add <code>.accordion-flush</code> to remove the default
                    <code>background-color</code>,
                    some borders, and some rounded corners to render accordions edge-to-edge with
                    their
                    parent container.
                  </p>" code={accordian2} customCardBodyClass="p-0">
							<Accordion className="accordion accordion-flush" id="accordionFlushExample" defaultActiveKey="" flush>
								<Accordion.Item eventKey='0'>
									<Accordion.Header id="flush-headingOne">
										Accordion Item #1
									</Accordion.Header>
									<Accordion.Body className="">Placeholder content for this accordion,
										which is
										intended to demonstrate the <code>.accordion-flush</code> class.
										This is
										the
										first item's accordion body.</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='1'>
									<Accordion.Header id="flush-headingTwo">
										Accordion Item #2
									</Accordion.Header>
									<Accordion.Body>Placeholder content for this accordion,
										which is
										intended to demonstrate the <code>.accordion-flush</code> class.
										This is
										the
										second item's accordion body. Let's imagine this being filled
										with
										some
										actual content.</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='2'>
									<Accordion.Header id="flush-headingThree">
										Accordion Item #3
									</Accordion.Header>
									<Accordion.Body>Placeholder content for this accordion,
										which is
										intended to demonstrate the <code>.accordion-flush</code> class.
										This is
										the
										third item's accordion body. Nothing more exciting happening
										here in
										terms
										of content, but just filling up the space to make it look, at
										least
										at
										first
										glance, a bit more representative of how this would look in a
										real-world
										application.</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
				</Row>
				<h6 className="mb-3">Solid Colors:</h6>
				<Row>
					<Col xl={6}>
						<Showcode title="Primary" code={accordian3}>
							<Accordion defaultActiveKey="0" className="accordion accordion-solid-primary" id="accordionPrimarySolidExample">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
					<Col xl={6}>
						<Showcode title="Secondary" code={accordian4} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion accordion-solid-secondary" id="accordionSecondarySolidExample">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
				</Row>
				<h6 className="mb-3">Light Colors:</h6>
				<Row>
					<Col xl={6}>
						<Showcode title="Primary" code={accordian5} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion accordion-primary">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
					<Col xl={6}>
						<Showcode title="Secondary" code={accordian6} className="custom-card">

							<Accordion defaultActiveKey="0" className="accordion accordion-secondary">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
				</Row>
				<Row>
					<Col xl={6}>
						<Showcode title="Custom Icon Accordian" code={accordian7} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion accordion-customicon1 accordions-items-seperate">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
					<Col xl={6}>
						<Showcode title="Custom Accordian" code={accordian8} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion customized-accordion accordions-items-seperate">
								<Accordion.Item eventKey="0" className="custom-accordion-primary">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1" className="accordion-item custom-accordion-secondary">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2" className="accordion-item custom-accordion-danger">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
				</Row>
				<h6 className="mb-3">Colored Borders:</h6>
				<Row>
					<Col xl={6}>
						<Showcode title="Primary" code={accordian9} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
					<Col xl={6}>
						<Showcode title="Success" code={accordian10} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
				</Row>
				<Row>
					<Col xl={6}>
						<Showcode title="Left Aligned Icons" code={accordian11} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
					<Col xl={6}>
						<Showcode title="Without Icon" code={accordian12} className="custom-card">
							<Accordion defaultActiveKey="0" className="accordion accordionicon-none accordions-items-seperate">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
										default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just  about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about any HTML can go within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Accordion Item #3</Accordion.Header>
									<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
										by default, until the collapse plugin adds the appropriate classes that we
										use to style each element. These classes control the overall appearance, as
										well as the showing and hiding via CSS transitions. You can modify any of this with
										custom CSS or overriding our default variables. It's also worth noting that
										just about  any HTML can go within the <code>.accordion-body</code>, though the
										transition  does limit overflow.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Showcode>
					</Col>
				</Row>
				<Row>
					<Col xl={6}>
						<Showcode title="Example" code={accordian13} className="custom-card">
							<p className="mb-0">
								<Button className="btn btn-primary collapsed m-1" aria-controls="example-collapse-text" data-bs-toggle="collapse" onClick={() => setOpenb(!openb)}
									href="#collapseExample">
									Link with href
								</Button>
								<Button className="btn btn-secondary collapsed m-1" type="button" onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={openb}
									data-bs-toggle="collapse" data-bs-target="#collapseExample">
									Button with data-bs-target
								</Button>
							</p>
							<Collapse in={openb}>
								<div className="card card-body mb-0">
									Some placeholder content for the collapse component. This panel
									is
									hidden by default but revealed when the user activates the
									relevant
									trigger.
								</div>
							</Collapse>
						</Showcode>
					</Col>
					<Col xl={6}>
						<Showcode title="Multiple Target Collapse" code={accordian14} className="custom-card">
							<p className="mb-0">
								<Button variant='primary' className="m-1" data-bs-toggle="collapse" onClick={() => { first(); }}
									aria-expanded="false"
									aria-controls="">Toggle first element</Button>
								<Button variant='success' className="m-1" type="button" data-bs-toggle="collapse" onClick={() => { second(); }}
									data-bs-target="#multiCollapseExample2" aria-expanded="false"
									aria-controls="multiCollapseExample2">Toggle second
									element</Button>
								<Button variant='danger' className="m-1" type="button" data-bs-toggle="collapse" onClick={() => { both(); }}
									data-bs-target=".multi-collapse" aria-expanded="false"
									aria-controls=" multiCollapseExample2">Toggle
									both elements</Button>
							</p>
							<Row>
								<div className="col m-1">
									{isFirstCollapsed ? (
										<div className="multi-collapse" id="multiCollapseExample1">
											<div className="card card-body mb-0">
												Some placeholder content for the first collapse
												component of
												this multi-collapse example. This panel is hidden by
												default
												but revealed when the user activates the relevant
												trigger.
											</div>
										</div>
									) : null}
								</div>
								<div className="col m-1">
									{isSecondCollapsed ? (
										<div className=" multi-collapse" id="multiCollapseExample2">
											<div className="card card-body mb-0">
												Some placeholder content for the second collapse
												component
												of this multi-collapse example. This panel is hidden by
												default but revealed when the user activates the
												relevant
												trigger.
											</div>
										</div>
									) : null}
								</div>
							</Row>
						</Showcode>
					</Col>
				</Row>
				<Row>
					<Col xl={6}>
						<Showcode title="Horzontal Collapse" code={accordian15} className="custom-card">
							<p>
								<Button variant='primary' className="" type="button" data-bs-toggle="collapse" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}
									data-bs-target="#collapseWidthExample" >
									Toggle width collapse
								</Button>
							</p>
							<div style={{ minHeight: "120px" }}>
								<Collapse in={open} dimension="width">
									<div id="example-collapse-text">
										<Card className='mt-2' body style={{ width: "230px" }}>This is some placeholder content for a horizontal collapse. It's
											hidden by default and shown when triggered.
										</Card>
									</div>
								</Collapse>
							</div>
						</Showcode>
					</Col>
				</Row>
			</Fragment>
		</div>
	);
};

export default AccordionsCollapse;
