import React, { FC, Fragment } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { ActiveButtons, BasicButtons, ContextualButtons, CustomButtons, HorizontalButtons, LinksButtons, ListbadgesButtons, SubheadingsButtons } from "./listgroupdata";
import Showcode from "../../../components/ui/showcode/showcode";
import { list1, list10, list11, list12, list13, list14, list15, list16, list2, list3, list4, list5, list6, list7, list8, list9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Listgroup = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={4}>
					<Showcode title="Basic List" code={list1}>
						<ListGroup as="ul">
							{BasicButtons.map((idx) => (
								<ListGroup.Item as="li" key={Math.random()}>
									<div className="d-flex align-items-center">
										<span className="avatar avatar-sm">
											<img src={idx.src} alt="img" />
										</span>
										<div className="ms-2 fw-semibold">
											{idx.text}
										</div>
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Active items" code={list2}>
						<ListGroup as="ul">
							{ActiveButtons.map((idx) => (
								<ListGroup.Item as="li" className={`list-group-item ${idx.class1}`} aria-current="true" key={Math.random()}>
									<div className="d-flex align-items-center">
										<div>
											<span className="avatar avatar-sm bg-white text-default avatar-rounded ">
												<i className={`bi bi-${idx.class}`}></i>
											</span>
										</div>
										<div className="ms-2">
											{idx.text}
										</div>
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Disabled items" code={list3}>
						<ListGroup as="ul">
							<ListGroup.Item as="li" disabled className="" aria-disabled="true">A disabled item meant to be disabled
							</ListGroup.Item>
							<ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
							<ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
							<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
							<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
							<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
						</ListGroup>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Showcode title="Flush" code={list4}>
						<ListGroup variant='flush' className="">
							<ListGroup.Item className="fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
							<ListGroup.Item className="fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
							<ListGroup.Item className="fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
							<ListGroup.Item className="fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
							<ListGroup.Item className="fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Links" code={list5}>
						<ListGroup className="list-group">
							{LinksButtons.map((idx) => (
								<ListGroup.Item action className={`list-group-item-action ${idx.class1}`} key={Math.random()}
									aria-current="true">
									<div className="d-flex align-items-center">
										<div>
											<span className={`avatar avatar-xs bg-${idx.class} text-${idx.color} avatar-rounded`}>
												{idx.text1}
											</span>
										</div>
										<div className="ms-2">{idx.text}</div>
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="buttons" code={list6}>
						<ListGroup className="list-group">
							<ListGroup.Item type="button" className="list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
							<ListGroup.Item type="button" className="list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
						</ListGroup>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-6">
					<Showcode title="Contextual classes" code={list7}>
						<ListGroup as="ul">
							{ContextualButtons.map((idx) => (
								<ListGroup.Item as="li" variant={idx.class} key={Math.random()}>{idx.text}</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</div>
				<div className="col-xl-6">
					<Showcode title="Contextual classes with hover styles" code={list8}>
						<ListGroup>
							{ContextualButtons.map((idx) => (
								<ListGroup.Item variant={idx.class} action className=" list-group-item-action" key={Math.random()}>{idx.text}</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</div>
			</Row>
			<Row>
				<div className="col-xl-6">
					<Showcode title="Solid Colored Lists" code={list9}>
						<ListGroup as="ul">
							{ContextualButtons.map((idx) => (
								<ListGroup.Item className={`list-item-solid-${idx.class} ${idx.class1}`} as="li" key={Math.random()}>{idx.text}</ListGroup.Item>
							))}

						</ListGroup>
					</Showcode>
				</div>
				<div className="col-xl-6">
					<Showcode title="Custom content" code={list10}>
						<ListGroup className="list-group">
							{CustomButtons.map((idx) => (
								<ListGroup.Item action className={`list-group-item-action ${idx.class1}`} key={Math.random()}
									aria-current="true">
									<div className="d-flex w-100 justify-content-between gap-1">
										<h6 className="mb-1 fw-semibold">{idx.heading}</h6>
										<small className={idx.class2}>{idx.text1}</small>
									</div>
									<p className="mb-1">{idx.text2}</p>
									<small>{idx.text3}.</small>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</div>
			</Row>
			<Row>
				<Col xl={4}>
					<Showcode title="Sub headings" code={list11}>
						<ListGroup as="ol" numbered>
							{SubheadingsButtons.map((idx) => (
								<ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
									<div className="ms-2 me-auto text-muted">
										<div className="fw-semibold fs-14 text-default">{idx.text1}</div>
										{idx.text2}
									</div>
									<Badge bg={idx.class}>{idx.text3}</Badge>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Numbered Lists" code={list12}>
						<ListGroup as="ol" numbered>
							<ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
							<ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
							<ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
							<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
							<ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
							<ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="List With Checkboxes" code={list13}>
						<ListGroup as="ul">
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." defaultChecked />
								Accurate information at any given point.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." />
								Hearing the information and responding.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." defaultChecked />
								Setting up and customizing your own sales.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." defaultChecked />
								New Admin Launched.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." />
								To maximize profits and improve productivity.
							</ListGroup.Item>
							<ListGroup.Item as="li">
								<input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
									aria-label="..." />
								To have a complete 360° overview of sales information, having.
							</ListGroup.Item>
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="List With Radios" code={list14}>
						<ListGroup className="list-group">
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-1" type="radio" value=""
									name="list-radio" defaultChecked />
								Accurate information at any given point.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-1" type="radio" value=""
									name="list-radio" defaultChecked />
								Hearing the information and responding.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-1" type="radio" value=""
									name="list-radio" defaultChecked />
								Setting up and customizing your own sales.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-1" type="radio" value=""
									name="list-radio" />
								New Admin Launched.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-1" type="radio" value=""
									name="list-radio" />
								To maximize profits and improve productivity.
							</ListGroup.Item>
							<ListGroup.Item className="list-group-item">
								<input className="form-check-input me-1" type="radio" value=""
									name="list-radio" />
								To have a complete 360° overview of sales information, having.
							</ListGroup.Item>
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="List With badges" code={list15}>
						<ListGroup as="ul">
							{ListbadgesButtons.map((idx) => (
								<ListGroup.Item key={Math.random()}
									className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
									{idx.text1}
									<Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Horizontal" code={list16}>
						{HorizontalButtons.map((idx) => (
							<ListGroup as="ul" className={`list-group-horizontal${idx.class} mb-3`} key={Math.random()}>
								<ListGroup.Item as="li">An item</ListGroup.Item>
								<ListGroup.Item as="li">A second item</ListGroup.Item>
								<ListGroup.Item as="li">A third item</ListGroup.Item>
							</ListGroup>
						))}
					</Showcode>

				</Col>
			</Row>
			<Row>
				<div className="col-xl-6">
					<div></div>
				</div>
				<div className="col-xl-6"></div>
			</Row>

		</Fragment>
	);
};
export default Listgroup;
