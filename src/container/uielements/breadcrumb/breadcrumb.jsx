import React, { FC, Fragment } from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Showcode from "../../../components/ui/showcode/showcode";
import { braed1, bread2, bread3, bread4, bread5, bread6, bread7 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Breadcrumbs = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Showcode title="Example" code={braed1}>
						<nav aria-label="breadcrumb">
							<Breadcrumb>
								<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
							</Breadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<Breadcrumb>
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<Breadcrumb className="mb-0">
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Example1" code={bread2}>
						<nav aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb-example1">
								<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
							</Breadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb-example1">
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb-example1 mb-0">
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Dividers" code={bread3}>
						<nav
							aria-label="breadcrumb" className='divider-breadcrumb'>
							<Breadcrumb className="mb-0">
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Embedded SVG icon" code={bread4}>
						<nav
							aria-label="breadcrumb" className='svg-breadcrumb'>
							<Breadcrumb className="mb-0">
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Breadcrumb Style-1" code={bread5}>
						<nav aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Breadcrumb Style-2" code={bread6}>
						<nav aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
								<Breadcrumb.Item href="#"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</Showcode>
				</Col>
				<Col xl={12}>
					<Showcode title="Background colors" code={bread7} customCardClass="background-breadcrumb">
						<nav
							aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb mb-0">
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Breadcrumbs;
