
import React, { FC, Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Showcode from "../../../../components/ui/showcode/showcode";
import { check1, check10, check11, check12, check13, check14, check15, check16, check17, check18, check19, check2, check20, check21, check22, check23, check24, check3, check4, check5, check6, check7, check8, check9 } from "../../../../components/ui/data/formsdata/formsprism";

const Checksradio = () => {

	const Checkdata1 = [
		{ id: "1", class1: "mb-2", class2: "", text: "Primary" },
		{ id: "2", class1: "mb-2", class2: "secondary", text: "Secondary" },
		{ id: "3", class1: "mb-2", class2: "warning", text: "Warning" },
		{ id: "4", class1: "mb-2", class2: "info", text: "Info" },
		{ id: "5", class1: "mb-2", class2: "success", text: "Success" },
		{ id: "6", class1: "mb-2", class2: "danger", text: "Danger" },
		{ id: "7", class1: "mb-0", class2: "dark", text: "Dark" }
	];
	const [secondary1, setsecondary1] = useState("on");
	const [success1, setsuccess1] = useState("on");
	const [dark1, setdark1] = useState("on");
	const [primary1, setprimary1] = useState("on");
	const [warning1, setwarning1] = useState("on");
	const [info1, setinfo1] = useState("on");
	const [danger1, setdanger1] = useState("on");
	const [light1, setlight1] = useState("on");

	//sizes 
	const [primary2, setprimary2] = useState("on");
	const [secondary2, setsecondary2] = useState("on");
	const [success2, setsuccess2] = useState("on");

	return (
		<Fragment>
			<Row>
				<Col xl={3} lg={6} md={6} sm={12}>
					<Showcode title="Checks" code={check1}>
						<Form.Check label="Default checkbox" />
						<Form.Check defaultChecked label="Checked checkbox" />
					</Showcode>
				</Col>
				<Col xl={3} lg={6} md={6} sm={12}>
					<Showcode title=" Disabled" code={check2}>
						<Form.Check disabled label="Disabled checkbox" />
						<Form.Check disabled defaultChecked label="Disabled checked checkbox" />
					</Showcode>
				</Col>
				<Col xl={3} lg={6} md={6} sm={12} >
					<Showcode title="Radios" code={check3}>
						<Form.Check type="radio" label="Default radio" name="example-radios1" />
						<Form.Check type="radio" defaultChecked label="Default checked radio" name="example-radios1" />
					</Showcode>
				</Col>
				<Col xl={3} lg={6} md={6} sm={12} >
					<Showcode title="Disabled" code={check4}>
						<Form.Check type="radio" disabled label="Disabled radio" />
						<Form.Check type="radio" disabled defaultChecked label="Disabled checked radio" />
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6} lg={6} md={12} sm={12}>
					<Showcode title=" Default (stacked)" code={check5}>
						<Form.Check label="Default checkbox" />
						<Form.Check disabled label="Disabled checkbox" />
						<Form.Check type="radio" defaultChecked label="Default radio" />
						<Form.Check type="radio" disabled label="Disabled radio" />
					</Showcode>
				</Col>
				<Col xl={6} lg={6} md={12} sm={12}>
					<Showcode title="  Switches" code={check6}>
						<Form.Check type="switch" label="Default switch checkbox input" />
						<Form.Check type="switch" defaultChecked label="Default switch checkbox input" />
						<Form.Check type="switch" disabled label="Disabled switch checkbox input" />
						<Form.Check type="switch" disabled defaultChecked label="Disabled checked switch checkbox input" />
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
					<Showcode title=" Radio toggle buttons" code={check7}>
						<Form.Check type="radio" className="btn-check" name="options" id="option1" defaultChecked />
						<Button className="btn btn-primary m-1">Checked</Button>
						<Form.Check type="radio" className="btn-check" name="options" id="option2" />
						<Button className="btn btn-primary m-1">Radio</Button>
						<Form.Check type="radio" className="btn-check" name="options" id="option3" disabled />
						<Button disabled className="btn btn-primary m-1">Disabled</Button>
						<Form.Check type="radio" className="btn-check" name="options" id="option4" />
						<Button className="btn btn-primary m-1">Radio</Button>
					</Showcode>
				</div>
				<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
					<Showcode title="Checkbox toggle buttons" code={check8}>
						<Form.Check type="checkbox" className="btn-check" id="btn-check" />
						<Button className="btn btn-primary m-1">Single toggle</Button>
						<Form.Check type="checkbox" className="btn-check" id="btn-check-2" defaultChecked />
						<Button className="btn btn-primary m-1">Checked</Button>
						<Form.Check type="checkbox" className="btn-check" id="btn-check-3" disabled />
						<Button disabled className="btn btn-primary m-1">Disabled</Button>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-6  col-lg-12 col-md-12 col-sm-12">
					<Showcode title=" Inline" code={check9}>
						<Form.Check className="form-check-inline" type="checkbox" label="1" />
						<Form.Check className="form-check-inline" type="checkbox" label="2" />
						<Form.Check className="form-check-inline" disabled type="checkbox" label="3 (disabled)" />
						<Form.Check className="form-check-inline" type="radio" label="1" name='radio1' />
						<Form.Check className="form-check-inline" type="radio" label="2" name='radio1' />
						<Form.Check className="form-check-inline" disabled type="radio" label="3 (disabled)" />
					</Showcode>
					<Showcode title="Without labels" code={check10}>
						<div className="d-flex">
							<Form.Check className="me-4" type="checkbox" />
							<Form.Check className="" type="radio" />
						</div>

					</Showcode>
				</div>
				<div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
					<Showcode title="Reverse" code={check11}>
						<Form.Check className="form-check-reverse mb-3" type="checkbox" label="Reverse checkbox" />
						<Form.Check className="form-check-reverse mb-3" type="checkbox" disabled label="Disabled reverse checkbox" />
						<Form.Check className="form-check-reverse mb-3" type="switch" label="Reverse switch checkbox input" />
					</Showcode>
				</div>
				<div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
					<Showcode title=" Outlined styles" code={check12}>
						<Form.Control type="checkbox" className="btn-check" id="btn-check-outlined" />
						<Button variant='outline-primary' className="mb-3">Single toggle</Button><br />
						<Form.Check type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
						<Button variant='outline-secondary' className=" mb-3">Checked</Button><br />
						<Form.Check type="radio" className="btn-check" name="options-outlined" id="success-outlined"
							defaultChecked />
						<Button variant='outline-success' className="m-1">Checked success
							radio</Button>
						<Form.Check type="radio" className="btn-check" name="options-outlined" id="danger-outlined"
						/>
						<Button variant='outline-danger' className="m-1" >Danger radio</Button>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<Showcode title="Checkbox Sizes" code={check13} customCardBodyClass="d-sm-flex align-items-center justify-content-between">
						<Form.Check type="checkbox" defaultChecked label="Default" />
						<Form.Check className="form-check-md d-flex align-items-center"
							type="checkbox" defaultChecked id="checkebox-md" label="Medium" />
						<Form.Check className="form-check-lg d-flex align-items-center"
							type="checkbox" defaultChecked id="checkebox-lg" label="Large" />
					</Showcode>
				</div>
				<div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<Showcode title="Radio Sizes" code={check14} customCardBodyClass="d-sm-flex align-items-center justify-content-between" className="custom-card">
						<Form.Check type="radio" label="Default" name="example-radios" />
						<Form.Check type="radio" className="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
						<Form.Check type="radio" className="form-check-lg" name="example-radios"
							defaultChecked id="Radio-lg" label="Large" />
					</Showcode>
				</div>
				<div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<Showcode code={check15} title="Switch Sizes" customCardBodyClass="d-sm-flex align-item-center justify-content-between" className="custom-card">
						<Form.Check type="switch" label="Default" />
						<Form.Check type="switch" className="form-check-md form-switch" id="switch-md" label="Medium" />
						<Form.Check type="switch" className="form-check-lg form-switch"
							id="switch-lg" label="Large" />
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
					<Showcode title="Toggle Switches Style-1" code={check16}>
						<Row className="row gy-1">

							<Col xl={4}>
								<div className={`toggle  ${primary1}`} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
									<span></span>
								</div>
							</Col>
							<Col xl={4}>
								<div className={`toggle mb-3  toggle-secondary ${secondary1}`} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on"); }}>
									<span></span>
								</div>
							</Col>
							<Col xl={4}>
								<div className={`toggle mb-3  toggle-warning ${warning1}`} onClick={() => { warning1 == "on" ? setwarning1("off") : setwarning1("on"); }} >
									<span></span>
								</div>
							</Col>
							<Col xl={4}>
								<div className={`toggle mb-3  toggle-info ${info1}`} onClick={() => { info1 == "on" ? setinfo1("off") : setinfo1("on"); }} >
									<span></span>
								</div>
							</Col>
							<Col xl={4}>
								<div className={`toggle mb-3  toggle-success ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
									<span></span>
								</div>
							</Col>
							<Col xl={4}>
								<div className={`toggle mb-3  toggle-danger ${danger1}`} onClick={() => { danger1 == "on" ? setdanger1("off") : setdanger1("on"); }} >
									<span></span>
								</div>
							</Col>
							<Col xl={4}>
								<div className={`toggle mb-3  toggle-light ${light1}`} onClick={() => { light1 == "on" ? setlight1("off") : setlight1("on"); }} >
									<span></span>
								</div>
							</Col>
							<Col xl={4}>
								<div className={`toggle ms-sm-2  toggle-dark ${dark1}`} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on"); }}>
									<span></span>
								</div>
							</Col>
						</Row>
					</Showcode>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
					<Showcode title="Toggle Switches Style-2" code={check17}>
						<div className="row gy-1">
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchPrimary" className="m-0 label-primary"></Form.Label><span className="ms-3">Primary</span>
								</div>
							</Col>
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchSecondary" className="m-0 label-secondary"></Form.Label><span className="ms-3">Secondary</span>
								</div>
							</Col>
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchWarning" className="m-0 label-warning"></Form.Label><span className="ms-3">Warning</span>
								</div>
							</Col>
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchInfo" className="m-0 label-info"></Form.Label><span className="ms-3">Info</span>
								</div>
							</Col>
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchSuccess" className="m-0 label-success"></Form.Label><span className="ms-3">Success</span>
								</div>
							</Col>
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchDanger" className="m-0 label-danger"></Form.Label><span className="ms-3">Danger</span>
								</div>
							</Col>
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchLight" className="m-0 label-light"></Form.Label><span className="ms-3">Light</span>
								</div>
							</Col>
							<Col xl={4}>
								<div className="custom-toggle-switch d-flex align-items-center mb-4">
									<Form.Control id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked />
									<Form.Label htmlFor="toggleswitchDark" className="m-0 label-dark"></Form.Label><span className="ms-3">Dark</span>
								</div>
							</Col>
						</div>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
					<Showcode title="Toggle Switch-1 Sizes" code={check18}>
						<div className="d-flex align-items-center flex-wrap mb-3">
							<div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>

							<div className={`toggle  toggle-sm mb-0 ${primary2}`} onClick={() => { primary2 == "on" ? setprimary2("off") : setprimary2("on"); }}>
								<span></span>
							</div>
						</div>
						<div className="d-flex align-items-center flex-wrap mb-3">
							<div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>

							<div className={`toggle mb-0  toggle-secondary ${secondary2}`} onClick={() => { secondary2 == "on" ? setsecondary2("off") : setsecondary2("on"); }}>
								<span></span>
							</div>
						</div>
						<div className="d-flex align-items-center flex-wrap">
							<div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>

							<div className={`toggle toggle-lg mb-0  toggle-success ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
								<span></span>
							</div>
						</div>
					</Showcode>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
					<Showcode title=" Toggle Switch-2 Sizes" code={check19} className="custom-card">
						<div className="d-flex align-items-center flex-wrap mb-4">
							<div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
							<div className="custom-toggle-switch toggle-sm ms-2">
								<Form.Control id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked />
								<Form.Label htmlFor="size-sm" className="label-primary m-0"></Form.Label>
							</div>
						</div>
						<div className="d-flex align-items-center flex-wrap mb-4">
							<div className=""><p className="text-muted m-0">Default toggle switch</p></div>
							<div className="custom-toggle-switch ms-2">
								<Form.Control id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked />
								<Form.Label htmlFor="size-default" className="label-secondary mb-1"></Form.Label>
							</div>
						</div>
						<div className="d-sm-flex d-block align-items-center flex-wrap">
							<div className="mb-sm-0 mb-2"><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
							<div className="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
								<Form.Control id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked />
								<Form.Label htmlFor="size-lg" className="label-success mb-2"></Form.Label>
							</div>
						</div>
					</Showcode>
				</div>
			</Row>
			<div className="row row-cols-12">
				<div className="col">
					<Showcode title=" Colored Checkboxes" code={check20}>
						{Checkdata1.map((idx) => (
							<div className={`form-check ${idx.class1}`} key={Math.random()}>
								<input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
									type="checkbox" defaultChecked />
								<label className=''>{idx.text}</label>
							</div>
						))}
					</Showcode>
				</div>
				<div className="col">
					<Showcode title="  Outline Checkboxes" code={check21}>
						{Checkdata1.map((idx) => (
							<div className={`form-check ${idx.class1}`} key={Math.random()}>
								<input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
									type="checkbox" defaultChecked />
								<label className=''>{idx.text}</label>
							</div>
						))}
					</Showcode>
				</div>
				<div className="col">
					<Showcode title="Colored Radios" code={check22}>
						{Checkdata1.map((idx) => (
							<div className={`form-check ${idx.class1}`} key={Math.random()}>
								<input id={idx.id} className={`form-check-input form-checked form-checked-${idx.class2}`}
									type="radio" defaultChecked />
								<label className=''>{idx.text}</label>
							</div>
						))}
					</Showcode>
				</div>
				<div className="col">
					<Showcode title=" Outline Radios" code={check23}>
						{Checkdata1.map((idx) => (
							<div className={`form-check ${idx.class1}`} key={Math.random()}>
								<input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
									type="radio" defaultChecked />
								<label className=''>{idx.text}</label>
							</div>
						))}
					</Showcode>
				</div>
				<div className="col">
					<Showcode title="Switches Colors" code={check24}>
						{Checkdata1.map((idx) => (
							<div className={`form-check form-switch ${idx.class1}`} key={Math.random()}>
								<input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
									type="checkbox" defaultChecked />
								<label className=''>{idx.text}</label>
							</div>
						))}
					</Showcode>
				</div>
			</div>

		</Fragment>
	);
};

export default Checksradio;
