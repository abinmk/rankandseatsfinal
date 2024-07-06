import React, { FC, Fragment } from "react";
import { Button, ButtonGroup, Col, Dropdown, DropdownButton, Form, Row, SplitButton } from "react-bootstrap";
import { AlignmentButtons, AutocloseButtons, CustomButtons, SingleButtons, SplitButtonsdata } from "./dropdownsdata";
import { GhostButtons, OutlineButtons } from "../buttongroup/buttongroupdata";
import Showcode from "../../../components/ui/showcode/showcode";
import { dropdown1, dropdown10, dropdown11, dropdown12, dropdown13, dropdown14, dropdown15, dropdown16, dropdown17, dropdown18, dropdown19, dropdown2, dropdown20, dropdown21, dropdown22, dropdown23, dropdown24, dropdown25, dropdown26, dropdown27, dropdown28, dropdown29, dropdown3, dropdown4, dropdown5, dropdown6, dropdown7, dropdown8, dropdown9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Dropdowns = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Showcode title="Dropdowns" code={dropdown1}>
						<div className="btn-list d-flex align-items-center flex-wrap">
							<Dropdown className="dropdown">
								<Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
									id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown button
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Dropdown className="dropdown">
								<Dropdown.Toggle className="btn btn-secondary dropdown-toggle" role="button"
									id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown link
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Single dropdown buttons" code={dropdown2}>
						<div className="btn-list">
							{SingleButtons.map((idx) => (
								<div className="btn-group" key={Math.random()}>
									<Dropdown>
										<Dropdown.Toggle type="button" variant={idx.class} className="btn"
											data-bs-toggle="dropdown" aria-expanded="false">
											Action
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul">
											<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Rounded Button Dropdowns" code={dropdown3}>
						<div className="btn-list">
							{SingleButtons.map((idx) => (
								<div className="btn-group" key={Math.random()}>
									<Dropdown>
										<Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
											data-bs-toggle="dropdown" aria-expanded="false">
											Action
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul">
											<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Outline Button Dropdowns" code={dropdown4}>
						<div className="btn-list">
							{OutlineButtons.map((idx) => (
								<div className="btn-group me-0" key={Math.random()}>
									<Dropdown>
										<Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle"
											data-bs-toggle="dropdown" aria-expanded="false">
											Action
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" align="end" className="dropdown-menu-end">
											<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
											<li>
												<hr className="dropdown-divider" />
											</li>
											<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Rounded Outline Dropdowns" code={dropdown5}>
						<div className="btn-list">
							{OutlineButtons.map((idx) => (
								<div className="btn-group me-0" key={Math.random()}>
									<Dropdown>
										<Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
											data-bs-toggle="dropdown" aria-expanded="false">
											Action
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul">
											<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
											<Dropdown.Divider className="dropdown-divider" />
											<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Split buttons" code={dropdown6}>
						{SplitButtonsdata.map((idx) => (
							<SplitButton key={Math.random()} className='me-2 my-1'
								variant={idx.class}
								title="Action"
							>
								<Dropdown.Item eventKey="1">Action</Dropdown.Item>
								<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
								<Dropdown.Item eventKey="3" active>
									Active Item
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
							</SplitButton>
						))}
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Dropdown Sizing" code={dropdown7} className="custom-card">
						<div className="btn-group my-1 me-2">
							<Dropdown>
								<Dropdown.Toggle variant='' className="btn btn-primary btn-lg dropdown-toggle" type="button"
									data-bs-toggle="dropdown" aria-expanded="false">
									Large button
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
									<Dropdown.Divider className="dropdown-divider" />
									<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="btn-group my-1 me-2">
							<Dropdown as={ButtonGroup}>
								<Button variant="light">Large split button</Button>
								<Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
									<Dropdown.Divider className="dropdown-divider" />
									<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="btn-group my-1 me-2">
							<Dropdown>
								<Dropdown.Toggle size="sm" variant='' className="btn btn-primary dropdown-toggle" type="button"
									data-bs-toggle="dropdown" aria-expanded="false">
									Small button
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
									<Dropdown.Divider className="dropdown-divider" />
									<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className="btn-group my-1 me-2">
							<Dropdown as={ButtonGroup}>
								<Button size='sm' variant="light">Small split button</Button>
								<Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
									<Dropdown.Divider className="dropdown-divider" />
									<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-3">
					<Showcode title="Dropup" code={dropdown8}>
						<Dropdown drop="up" className="btn-group dropup my-1 me-2">
							<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown" aria-expanded="false">
								Dropup
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								<Dropdown.Divider className="dropdown-divider" />
								<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown drop="up" className="btn-group dropup my-1">
							<Button variant='' type="button" className="btn btn-info">
								Split dropup
							</Button>
							<Dropdown.Toggle variant='' type="button"
								className="btn btn-info dropdown-toggle dropdown-toggle-split"
								data-bs-toggle="dropdown" aria-expanded="false">
								<span className="visually-hidden">Toggle Dropdown</span>
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								<Dropdown.Divider className="dropdown-divider" />
								<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Dropup Right" code={dropdown9} className="custom-card">
						<Dropdown className="btn-group dropend my-1 me-2" drop="end">
							<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown" aria-expanded="false">
								Dropright
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								<Dropdown.Divider className="dropdown-divider" />
								<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown drop="end" className="btn-group dropend my-1">
							<Button variant='' type="button" className="btn btn-info">
								Split dropend
							</Button>
							<Dropdown.Toggle variant='' type="button"
								className="btn btn-info dropdown-toggle dropdown-toggle-split"
								data-bs-toggle="dropdown" aria-expanded="false">
								<span className="visually-hidden">Toggle Dropright</span>
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul" align="end" className="dropdown-menu-end">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								<Dropdown.Divider className="dropdown-divider" />
								<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Dropup left" code={dropdown10}>
						<Dropdown className="btn-group dropstart my-1 me-2" drop="start">
							<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown" aria-expanded="false">
								Dropstart
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								<Dropdown.Divider className="dropdown-divider" />
								<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<div className="btn-group">
							<Dropdown className="btn-group dropstart my-1" role="group" drop="start">
								<Dropdown.Toggle variant='' type="button"
									className="btn btn-info dropdown-toggle dropdown-toggle-split"
									data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Toggle Dropstart</span>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
									<Dropdown.Divider className="dropdown-divider" />
									<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Button variant='' type="button" className="btn btn-info my-1">
								Split dropstart
							</Button>
						</div>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Active" code={dropdown11}>
						<Dropdown>
							<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown" aria-expanded="false">
								Dropstart
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul">
								<Dropdown.Item as="li" href="#">Regular link</Dropdown.Item>
								<Dropdown.Item className="dropdown-item active" href="#" aria-current="true">Active
									link
								</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another link</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-3">
					<Showcode title="Disabled" code={dropdown12}>
						<Dropdown>
							<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown" aria-expanded="false">
								Dropstart
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul">
								<Dropdown.Item as="li" href="#">Regular link</Dropdown.Item>
								<Dropdown.Item className="dropdown-item disabled" href="#" aria-current="true">Active
									link</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another link</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
				<Col xl={6}>
					<Showcode title="Auto close behavior" code={dropdown13}>
						<div className="btn-list">
							{AutocloseButtons.map((idx) => (
								<div className="btn-group" key={Math.random()}>
									<Dropdown>
										<Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle" type="button"
											id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
											aria-expanded="false">
											{idx.text}
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
											<Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</Col>
				<div className="col-xl-3">
					<Showcode title="dropdowns with Forms" code={dropdown14}>
						<Dropdown>
							<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
								data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu">
								<Form className="px-4 py-3">
									<div className="mb-3">
										<Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
											address</Form.Label>
										<Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
											placeholder="email@example.com" />
									</div>
									<div className="mb-3">
										<Form.Label htmlFor="exampleDropdownFormPassword1"
											className="form-label">Password</Form.Label>
										<Form.Control type="password" className="form-control"
											id="exampleDropdownFormPassword1" placeholder="Password" />
									</div>
									<div className="mb-3">
										<div className="form-check">
											<input type="checkbox" className="form-check-input" id="dropdownCheck" />
											<label className="form-check-label" htmlFor="dropdownCheck">
												Remember me
											</label>
										</div>
									</div>
									<Button variant='' type="submit" className="btn btn-primary">Sign in</Button>
								</Form>
								<div className="dropdown-divider"></div>
								<Dropdown.Item as="li" href="#">New around here? Sign up</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Forgot password?</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xxl-3 col-xl-6">
					<Showcode title="Dropdown menu centered" code={dropdown15}>
						<p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
						</p>
						<Dropdown className="dropdown-center">
							<Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
								id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
								Centered dropdown
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul" aria-labelledby="dropdownCenterBtn">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Action two</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Action three</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
				<div className="col-xxl-3 col-xl-6">
					<Showcode title="Dropup centered" code={dropdown16}>
						<p className="card-title mb-3">Use <code>.dropup-center</code>
							on the parent element.
						</p>
						<Dropdown className="dropup-center dropup" drop="up">
							<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
								id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
								Centered dropup
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Action two</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Action three</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
				<div className="col-xxl-3 col-xl-6">
					<Showcode title="Menu items" code={dropdown17}>
						<p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
							dropdown items.</p>
						<Dropdown className="dropdown">
							<Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
								id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
								<Dropdown.Item>Action</Dropdown.Item>
								<Dropdown.Item>Another action
								</Dropdown.Item>
								<Dropdown.Item>Something else
									here
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
				<div className="col-xxl-3 col-xl-6">
					<Showcode title="Dropdowns options" code={dropdown18}>
						<p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
							the location of the dropdown.</p>
						<div className="d-flex align-items-center flex-wrap">
							<Dropdown className="dropdown me-1 mt-1">
								<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
									id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
									data-bs-offset="10,20">
									Offset
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>

							<Dropdown drop="up" className="btn-group dropup my-1">
								<Button variant='' type="button" className="btn btn-info">
									Reference
								</Button>
								<Dropdown.Toggle variant='' type="button"
									className="btn btn-info dropdown-toggle dropdown-toggle-split"
									data-bs-toggle="dropdown" aria-expanded="false">
									<span className="visually-hidden">Reference</span>
								</Dropdown.Toggle>
								<Dropdown.Menu as="ul">
									<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
									<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
									<Dropdown.Divider className="dropdown-divider" />
									<Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-9">
					<Showcode title="Alignment options" code={dropdown19}>
						<div className="btn-list">
							{AlignmentButtons.map((idx) => (
								<div className="btn-group" key={Math.random()}>
									<Dropdown className={idx.dir}>
										<Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
											id="dropdownMenuButton" data-bs-toggle="dropdown"
											aria-expanded="false">
											{idx.text}
										</Dropdown.Toggle>
										<Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
											<Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
											<Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Dark Dropdowns" code={dropdown20}>
						<Dropdown>
							<Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
								id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown button
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul" className="dropdown-menu dropdown-menu-dark">
								<Dropdown.Item as="li" href="#">Action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
								<Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-4">
					<Showcode title="Menu alignment" code={dropdown21}>
						<Dropdown>
							<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown" aria-expanded="false">
								Right-aligned menu example
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu dropdown-menu-end">
								<Dropdown.Item>Action
								</Dropdown.Item>
								<Dropdown.Item>Another
									action</Dropdown.Item>
								<Dropdown.Item>Something else
									here
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Showcode>
				</div>
				<div className="col-xl-4">
					<Showcode title="Responsive alignment end" code={dropdown22}>
						<div className="btn-group">
							<DropdownButton variant="secondary" as={ButtonGroup} align={{ lg: "end" }} title="Left-aligned but right aligned when large screen" id="dropdown-menu-align-responsive-1" className="text-wrap">
								<Dropdown.Item eventKey="1">Action</Dropdown.Item>
								<Dropdown.Item eventKey="2">Another action </Dropdown.Item>
								<Dropdown.Item eventKey="2">Something else here</Dropdown.Item>
							</DropdownButton>
						</div>
					</Showcode>
				</div>
				<div className="col-xl-4">
					<Showcode title="Responsive alignment left" code={dropdown23}>
						<div className="btn-group">
							<DropdownButton variant="info" as={ButtonGroup} align={{ lg: "start" }} title="Left-aligned but right aligned when large screen" className="text-wrap" id="dropdown-menu-align-responsive-1">
								<Dropdown.Item eventKey="1">Action</Dropdown.Item>
								<Dropdown.Item eventKey="2">Another action </Dropdown.Item>
								<Dropdown.Item eventKey="2">Something else here</Dropdown.Item>
							</DropdownButton>
						</div>
					</Showcode>
				</div>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Custom Dropdown Menu's" code={dropdown24}>
						<div className="btn-list">
							{CustomButtons.map((idx) => (
								<div className="btn-group" key={Math.random()}>
									<Dropdown>
										<Dropdown.Toggle variant={idx.class} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											{idx.text}
										</Dropdown.Toggle>
										<Dropdown.Menu className={`dropdown-menu-${idx.class} dropdown-${idx.class1} dropmenu}`} align="end">
											<li>
												<Dropdown.Item as="a" className="dropdown-item">Action</Dropdown.Item>
											</li>
											<li>
												<Dropdown.Item as="a" className="dropdown-item">Another action</Dropdown.Item>
											</li>
											<li>
												<Dropdown.Item as="a" className="dropdown-item">Something else here</Dropdown.Item>
											</li>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Ghost Button Dropdowns" code={dropdown25}>
						<div className="btn-list">
							{GhostButtons.map((idx) => (
								<div className="btn-group" key={Math.random()}>
									<Dropdown>
										<Dropdown.Toggle variant={idx.class} type="button" className="btn btn-primary-ghost dropdown-toggle"
											data-bs-toggle="dropdown" aria-expanded="false">
											{idx.text}
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
											<Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
											<Dropdown.Divider className="dropdown-divider" />
											<Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-3">
					<Showcode title="non-interactive dropdown items" code={dropdown26}>
						<p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
						<div className="bd-example">
							<Dropdown.Menu className="dropdown-menu" show>
								<Dropdown.Item><span className="dropdown-item-text px-0">Dropdown item text</span>
								</Dropdown.Item>
								<Dropdown.Item href="#">Action</Dropdown.Item>
								<Dropdown.Item href="#">Another action</Dropdown.Item>
								<Dropdown.Item href="#">Something else here
								</Dropdown.Item>
							</Dropdown.Menu>
						</div>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Dropdown Headers" code={dropdown27}>
						<p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
						<div className="bd-example">
							<Dropdown.Menu show>
								<Dropdown.Header>
									<h6 className="dropdown-header px-0">Dropdown header</h6>
								</Dropdown.Header>
								<Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
								<Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
								<Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
							</Dropdown.Menu>
						</div>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Dropdown Dividers" code={dropdown28}>
						<div className="bd-example">
							<Dropdown.Menu className="dropdown-menu" show>
								<Dropdown.Header>Heading</Dropdown.Header>
								<Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
								<Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
								<Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
								<Dropdown.Divider className="dropdown-divider" />
								<Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
							</Dropdown.Menu>
						</div>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Dropdown Menu Text" code={dropdown29}>
						<div className="bd-example">
							<Dropdown.Menu show className="dropdown-menu p-4 text-muted" style={{ maxWidth: 200 }}>
								<p>
									Some example text that's free-flowing within the dropdown menu.
								</p>
								<p className="mb-0">
									And this is more example text.
								</p>
							</Dropdown.Menu>
						</div>
					</Showcode>
				</div>
			</Row>

		</Fragment>
	);
};

export default Dropdowns;
