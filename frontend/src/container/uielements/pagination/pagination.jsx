import React, { FC, Fragment } from "react";
import { Col, Row, Pagination } from "react-bootstrap";
import Showcode from "../../../components/ui/showcode/showcode";
import { page1, page2, page3, page4, page5, page6, page7, page8, page9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Paginations = () => {

	return (
		<Fragment>
			<Row>
				<Col xxl={3} xl={6}>
					<Showcode title="Basic Pagination" code={page1}>
						<nav aria-label="Page navigation">
							<Pagination as="ul" className="pagination mb-0">
								<Pagination.Item disabled className="disabled" href="#">Previous</Pagination.Item>
								<Pagination.Item href="#">1</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">Next</Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
				<Col xxl={3} xl={6}>
					<Showcode title="Pagination With Icons" code={page2}>
						<nav aria-label="Page navigation">
							<Pagination className="pagination mb-0">
								<Pagination.Item className="page-item" href="#" aria-label="Previous">
									<span aria-hidden="true"><i className="bi bi-caret-left"></i></span></Pagination.Item>
								<Pagination.Item href="#">1</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">3</Pagination.Item>
								<Pagination.Item className="page-item" href="#" aria-label="Next">
									<span aria-hidden="true"><i className="bi bi-caret-right"></i></span></Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
				<Col xxl={6}>
					<Showcode title="Pagination Sizing" code={page3} customCardBodyClass="d-flex flex-wrap justify-content-between">
						<nav aria-label="...">
							<Pagination as="ul" className="pagination pagination-sm mb-3 mb-sm-0">
								<Pagination.Item active aria-current="page">
									1
								</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">3</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="...">
							<Pagination as="ul" className="pagination mb-0">
								<Pagination.Item active aria-current="page">
									1
								</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">3</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="...">
							<Pagination className="pagination pagination-lg mb-0">
								<Pagination.Item className=" active" aria-current="page">
									1
								</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">3</Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Center & Right Aligned Pagination" code={page4}>
						<nav aria-label="Page navigation">
							<Pagination className="justify-content-center">
								<Pagination.Item disabled>Previous
								</Pagination.Item>
								<Pagination.Item href="#">1</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">3</Pagination.Item>
								<Pagination.Item href="#">Next
								</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="Page navigation">
							<Pagination className="justify-content-end mb-0">
								<Pagination.Item disabled >Previous
								</Pagination.Item>
								<Pagination.Item href="#">1</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">3</Pagination.Item>
								<Pagination.Item href="#">Next
								</Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Active and disabled states" code={page5} customCardBodyClass="d-flex flex-wrap">
						<nav aria-label="..." className="me-3">
							<Pagination className="pagination">
								<Pagination.Item disabled>Previous
								</Pagination.Item>
								<Pagination.Item href="#">1</Pagination.Item>
								<Pagination.Item active aria-current="page" href="#">2
								</Pagination.Item>
								<Pagination.Item href="#">Next
								</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="...">
							<Pagination className="pagination">
								<Pagination.Item disabled>Previous
								</Pagination.Item>
								<Pagination.Item href="#">1</Pagination.Item>
								<Pagination.Item active aria-current="page">2
								</Pagination.Item>
								<Pagination.Item href="#">Next
								</Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Pagination Style-1" code={page6}>
						<nav aria-label="Page navigation" className="pagination-style-1">
							<Pagination className="pagination mb-0">
								<Pagination.Item disabled href="#">
									<i className="ri-arrow-left-s-line align-middle"></i>
								</Pagination.Item>
								<Pagination.Item href="#">1</Pagination.Item>
								<Pagination.Item active href="#">2</Pagination.Item>
								<Pagination.Item href="#"><i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item href="#">21</Pagination.Item>
								<Pagination.Item href="#">
									<i className="ri-arrow-right-s-line align-middle"></i>
								</Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Pagination Style-2" code={page7}>
						<nav aria-label="Page navigation" className="pagination-style-2">
							<Pagination className="mb-0 flex-wrap">
								<Pagination.Item disabled href="#">Prev
								</Pagination.Item>
								<Pagination.Item active href="#">1</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item>
									<i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item href="#">17</Pagination.Item>
								<Pagination.Item className='pagination-next' href="#">
									next
								</Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Pagination Style-3" code={page8}>
						<nav aria-label="Page navigation" className="pagination-style-3">
							<Pagination className=" mb-0 flex-wrap">
								<Pagination.Item disabled>Prev
								</Pagination.Item>
								<Pagination.Item active href="#">1</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">
									<i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item href="#">16</Pagination.Item>
								<Pagination.Item className="pagination-next" href="#">next </Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Pagination Style-4" code={page9}>
						<nav aria-label="Page navigation" className="pagination-style-4">
							<Pagination className="mb-0 flex-wrap">
								<Pagination.Item disabled href="#">
									Prev
								</Pagination.Item>
								<Pagination.Item active href="#">1</Pagination.Item>
								<Pagination.Item href="#">2</Pagination.Item>
								<Pagination.Item href="#">
									<i className="bi bi-three-dots"></i>

								</Pagination.Item>
								<Pagination.Item href="#">16</Pagination.Item>
								<Pagination.Item href="#">17</Pagination.Item>
								<Pagination.Item className="pagination-next" href="#">
									next
								</Pagination.Item>
							</Pagination>
						</nav>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Paginations;
