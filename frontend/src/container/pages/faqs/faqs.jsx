import React, { FC } from "react";
import { Accordion, Card, Col, Nav, Tab } from "react-bootstrap";

const Faqs = () => {
	return (
		<>
			<div className="row justify-content-center">
				<Col xxl={12} xl={12} lg={12} md={12} xm={12} className="">
					<Card className="custom-card overflow-hidden">
						<Card.Body className="p-0">
							<div className="faqs-page-banner">
								<div className="text-center p-3 text-white mb-4">
									<h5 className="mb-1  fw-semibold text-primary">F.A.Q's</h5>
									<h3 className="mb-1 fw-semibold text-fixed-white">Frequently Asked Questions</h3>
									<p className="fs-15  op-8 text-fixed-white">We have shared some of the most frequently asked questions to help you out! </p>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>

				<Col xxl={8} xl={10} lg={10} md={10} sm={10} className="col-12">
					<Tab.Container defaultActiveKey="first">
						<Nav className="nav-pills nav-justified  mb-3 gx-3 tab-style-6 d-sm-flex d-block" id="pills-tab" role="tablist">
							<Nav.Item className="rounded" role="presentation">
								<Nav.Link eventKey="first" className="d-flex align-items-center" id="pills-home-tab" data-bs-toggle="pill"
									data-bs-target="#pills-home" type="button" role="tab"
									aria-controls="pills-home" aria-selected="true"><i className="bx bx-layer fs-20  me-2"></i><span className="d-block">General</span></Nav.Link>
							</Nav.Item>
							<Nav.Item className="rounded" role="presentation">
								<Nav.Link eventKey="second" className="d-flex align-items-center" id="pills-profile-tab" data-bs-toggle="pill"
									data-bs-target="#pills-profile" type="button" role="tab"
									aria-controls="pills-profile" aria-selected="false"><i className="bx bx-support fs-20  me-2"></i><span className="d-block"> Support</span></Nav.Link>
							</Nav.Item>
							<Nav.Item className="rounded" role="presentation">
								<Nav.Link eventKey="third" className="d-flex align-items-center" id="pills-contact-tab" data-bs-toggle="pill"
									data-bs-target="#pills-contact" type="button" role="tab"
									aria-controls="pills-contact" aria-selected="false"><i className="bx bx-shield-plus fs-20  me-2"></i><span className="d-block"> Security</span></Nav.Link>
							</Nav.Item>
							<Nav.Item className="rounded" role="presentation">
								<Nav.Link eventKey="fourth" className="d-flex align-items-center" id="pills-disabled-tab" data-bs-toggle="pill"
									data-bs-target="#pills-disabled" type="button" role="tab"
									aria-controls="pills-disabled" aria-selected="false"><i className="bx bx-cog fs-20  me-2"></i><span className="d-block">Services</span></Nav.Link>
							</Nav.Item>
							<Nav.Item className="rounded" role="presentation">
								<Nav.Link eventKey="fifth" className="d-flex align-items-center" id="pills-other-tab" data-bs-toggle="pill"
									data-bs-target="#pills-other" type="button" role="tab"
									aria-controls="pills-other" aria-selected="false"><i className="bx bx-category fs-20  me-2"></i><span className="d-block"> Others</span></Nav.Link>
							</Nav.Item>
						</Nav>
						<Card className="custom-card">
							<Card.Body>
								<Tab.Content className="" id="pills-tabContent">
									<Tab.Pane eventKey="first" className="p-0 border-0" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
										<h5 className="text-center mb-3">General</h5>
										<Accordion className="accordion-customicon1 accordion-primary" id="accordionFAQ1" defaultActiveKey="first">
											<Accordion.Item eventKey='first'>
												<Accordion.Header as="h2" id="headingcustomicon2One">
													Where can I subscribe to your newsletter?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='second'>
												<Accordion.Header as="h2" className="" id="headingcustomicon2Two">
													Where can in edit my address?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='third'>
												<Accordion.Header as="h2" id="headingcustomicon2Three">
													What are your opening hours?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fourth'>
												<Accordion.Header as="h2" id="headingcustomicon2Four">
													Do I have the right to return an item?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fifth'>
												<Accordion.Header as="h2" id="headingcustomicon2five">
													What are your opening hours?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Tab.Pane>
									<Tab.Pane eventKey="second" className="p-0 border-0" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
										<h5 className="text-center  mb-3">Support</h5>
										<Accordion className="accordion accordion-customicon1 accordion-primary" id="accordionFAQ3" defaultActiveKey="second">
											<Accordion.Item eventKey='first'>
												<Accordion.Header as="h2" id="headingcustomicon3One">
													What is the order procedure?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='second'>
												<Accordion.Header as="h2" id="headingcustomicon3Two">
													How and when do I receive the invoices?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='third'>
												<Accordion.Header as="h2" id="headingcustomicon3Three">
													Which method of ordering is best for me?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fourth'>
												<Accordion.Header as="h2" id="headingcustomicon3Four">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Tab.Pane>
									<Tab.Pane eventKey="third" className="p-0 border-0" id="pills-contact" role="tabpanel"
										aria-labelledby="pills-contact-tab" tabIndex={0}>
										<h5 className="text-center  mb-3">Security</h5>
										<Accordion defaultActiveKey="second" className="accordion accordion-customicon1 accordion-primary" id="accordionFAQ4">
											<Accordion.Item eventKey='first'>
												<Accordion.Header as="h2" id="headingcustomicon31">
													What is the order procedure?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='second'>
												<Accordion.Header as="h2" id="headingcustomicon32">
													How and when do I receive the invoices?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='third'>
												<Accordion.Header as="h2" id="headingcustomicon33">
													Which method of ordering is best for me?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fourth'>
												<Accordion.Header as="h2" id="headingcustomicon34">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fifth'>
												<Accordion.Header as="h2" id="headingcustomicon3five">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Tab.Pane>
									<Tab.Pane eventKey="fourth" className="p-0 border-0" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
										<h5 className="text-center  mb-3">Services</h5>
										<Accordion defaultActiveKey="second" className="accordion accordion-customicon1 accordion-primary" id="accordionFAQ5">
											<Accordion.Item eventKey='first'>
												<Accordion.Header as="h2" id="headingcustomicon311">
													What is the order procedure?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='second'>
												<Accordion.Header as="h2" id="headingcustomicon322">
													How and when do I receive the invoices?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='third'>
												<Accordion.Header as="h2" id="headingcustomicon333">
													Which method of ordering is best for me?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fourth'>
												<Accordion.Header as="h2" id="headingcustomicon344">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fifth'>
												<Accordion.Header as="h2" id="headingcustomicon5five">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='sixth'>
												<Accordion.Header as="h2" id="headingcustomicon5six">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Tab.Pane>
									<Tab.Pane eventKey="fifth" className="p-0 border-0" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab" tabIndex={0}>
										<h5 className="text-center  mb-3">Others</h5>
										<Accordion defaultActiveKey="second" className="accordion accordion-customicon1 accordion-primary" id="accordionFAQ">
											<Accordion.Item eventKey='fisrt'>
												<Accordion.Header as="h2" id="headingcustomicon4one">
													What is the order procedure?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='second'>
												<Accordion.Header as="h2" id="headingcustomicon4Two">
													How and when do I receive the invoices?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='third'>
												<Accordion.Header as="h2" id="headingcustomicon4Three">
													Which method of ordering is best for me?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fourth'>
												<Accordion.Header as="h2" id="headingcustomicon4Four">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='fifth'>
												<Accordion.Header as="h2" id="headingcustomicon4five">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey='sixth'>
												<Accordion.Header as="h2" id="headingcustomicon4six">
													What does an order cost?
												</Accordion.Header>
												<Accordion.Body>
													<strong>This is the first item's accordion body.</strong> It is shown by
													default, until the collapse plugin adds the appropriate classes that we
													use to style each element
													<code>.accordion-body</code>, though the transition does limit overflow.
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</div>

		</>
	);
};

export default Faqs;
