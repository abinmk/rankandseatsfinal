
import React, { FC, Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ReactTabulator } from "react-tabulator";
import { BasicTable, ResponsiveDataTable, Savetable, columns, data } from "./datatabledata";

const Datatables = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Datatable
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<BasicTable />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Responsive Datatable
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<ResponsiveDataTable />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Sortable DataTable
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<ReactTabulator className="table-hover table-bordered"
								data={data}
								columns={columns}
								options={{
									pagination: "local",
									paginationSize: pageSize,
									paginationSizeSelector: [10, 20, 50, 100], // Define available page sizes
									paginationInitialPage: currentPage,
									paginationButtonCount: 5, // Number of pagination buttons to display
									paginationDataReceived: { last_page: totalPages },
									paginationDataSent: { page: currentPage, size: pageSize }
								}}
								onPageChange={(data) => handlePageChange(data.page)} />
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Delete Row Datatable</Card.Title>
						</Card.Header>
						<Card.Body className="overflow-auto">
							<Savetable />
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};
export default Datatables;
