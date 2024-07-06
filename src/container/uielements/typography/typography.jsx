import React, { FC, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Showcode from "../../../components/ui/showcode/showcode";
import { typo1, typo10, typo11, typo12, typo13, typo14, typo15, typo16, typo17, typo18, typo19, typo2, typo20, typo21, typo22, typo23, typo24, typo25, typo26, typo27, typo28, typo29, typo3, typo30, typo4, typo5, typo6, typo7, typo8, typo9 } from "../../../components/ui/data/uielementsdata/uielementsprism";
import { Link } from "react-router-dom";

const Typography = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Showcode title="Headings H Tag" code={typo1}>
						<h1 className="mb-3">h1. Bootstrap heading</h1>
						<h2 className="mb-3">h2. Bootstrap heading</h2>
						<h3 className="mb-3">h3. Bootstrap heading</h3>
						<h4 className="mb-3">h4. Bootstrap heading</h4>
						<h5 className="mb-3">h5. Bootstrap heading</h5>
						<h6 className="mb-0">h6. Bootstrap heading</h6>
					</Showcode>
					<Showcode title="Haeder Class Names" code={typo2}>
						<p className="h1 mb-3">h1. Bootstrap heading</p>
						<p className="h2 mb-3">h2. Bootstrap heading</p>
						<p className="h3 mb-3">h3. Bootstrap heading</p>
						<p className="h4 mb-3">h4. Bootstrap heading</p>
						<p className="h5 mb-3">h5. Bootstrap heading</p>
						<p className="h6 mb-0">h6. Bootstrap heading</p>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Display Headings" code={typo3}>
						<h1 className="display-1">Display 1</h1>
						<h1 className="display-2">Display 2</h1>
						<h1 className="display-3">Display 3</h1>
						<h1 className="display-4">Display 4</h1>
						<h1 className="display-5">Display 5</h1>
						<h1 className="display-6">Display 6</h1>
					</Showcode>
					<Showcode title="Customizing Headings" code={typo4}>
						<h3>
							Fancy display heading
							<small className="text-muted"> With faded secondary text</small>
						</h3>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Inline Text Elements" code={typo5}>
						<p>You can use the mark tag to <mark>highlight</mark> text.</p>
						<p><del>This line of text is meant to be treated as deleted text.</del>
						</p>
						<p><s>This line of text is meant to be treated as no longer
							accurate.</s>
						</p>
						<p><ins>This line of text is meant to be treated as an addition to the
							document.</ins></p>
						<p><u>This line of text will render as underlined.</u></p>
						<p><small>This line of text is meant to be treated as fine
							print.</small>
						</p>
						<p><strong>This line rendered as bold text.</strong></p>
						<p className="mb-0"><em>This line rendered as italicized text.</em></p>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Font Sizes" code={typo6}>
						<p className="fs-1 mb-2">.fs-1 text</p>
						<p className="fs-2 mb-2">.fs-2 text</p>
						<p className="fs-3 mb-2">.fs-3 text</p>
						<p className="fs-4 mb-2">.fs-4 text</p>
						<p className="fs-5 mb-2">.fs-5 text</p>
						<p className="fs-6 mb-0">.fs-6 text</p>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-12">
					<Showcode title="Lead Paragraph" code={typo7} className="custom-card">
						<p className="lead mb-0">
							<b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
						</p>
					</Showcode>
				</div>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Description list alignment" code={typo8}>
						<dl className="row mb-0">
							<dt className="col-sm-3">Description lists</dt>
							<dd className="col-sm-9">A description list is perfect for defining terms.</dd>

							<dt className="col-sm-3">Term</dt>
							<dd className="col-sm-9">
								<p>Definition for the term.</p>
								<p>And some more placeholder definition text.</p>
							</dd>

							<dt className="col-sm-3">Another term</dt>
							<dd className="col-sm-9">This definition is short, so no extra paragraphs or
								anything.</dd>

							<dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
							<dd className="col-sm-9">This can be useful when space is tight. Adds an
								ellipsis at
								the end.</dd>

							<dt className="col-sm-3">Nesting</dt>
							<dd className="col-sm-9 mb-0">
								<dl className="row mb-0">
									<dt className="col-sm-4">Nested definition list</dt>
									<dd className="col-sm-8 mb-0">I heard you like definition lists. Let me put a
										definition list inside your definition list.</dd>
								</dl>
							</dd>
						</dl>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="List Unstyled" code={typo9}>
						<ul className="list-unstyled">
							<li>This is a list.</li>
							<li>It appears completely unstyled.</li>
							<li>Structurally, it's still a list.</li>
							<li>However, this style only applies to immediate child elements.</li>
							<li className="mb-2">Nested lists:
								<ul>
									<li>are unaffected by this style</li>
									<li>will still show a bullet</li>
									<li>and have appropriate left margin</li>
								</ul>
							</li>
							<li>This may still come in handy in some situations.</li>
						</ul>
					</Showcode>
				</Col>
			</Row>
			<h6 className="mb-3">Blockquotes</h6>
			<Row>
				<Col xl={6}>
					<Showcode title="Left Aligned" code={typo10}>
						<figure className="blockquote-container">
							<blockquote className="blockquote mb-2">
								<h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
							</blockquote>
							<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
							</figcaption>
						</figure>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Right Aligned" code={typo11}>
						<figure className="blockquote-container text-end">
							<blockquote className="blockquote mb-2">
								<h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
							</blockquote>
							<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
							</figcaption>
						</figure>
					</Showcode>
				</Col>
			</Row>
			<h6 className="mb-3">Custom Blockquotes</h6>
			<Row>
				<div className="col-xl-4">
					<Showcode title="Primary Blockquote" code={typo12}>
						<blockquote className="blockquote custom-blockquote primary mb-0 text-center">
							<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
							<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
							<span className="quote-icon"><i className="ri-information-line"></i></span>
						</blockquote>

					</Showcode>
				</div>
				<div className="col-xl-4">
					<Showcode title="Secondary Blockquote" code={typo13}>
						<blockquote className="blockquote custom-blockquote secondary mb-0 text-center">
							<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
							<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
							<span className="quote-icon"><i className="ri-information-line"></i></span>
						</blockquote>
					</Showcode>
				</div>
				<div className="col-xl-4">
					<Showcode title="Warning Blockquote" code={typo14}>
						<blockquote className="blockquote custom-blockquote warning mb-0 text-center">
							<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
							<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
							<span className="quote-icon"><i className="ri-information-line"></i></span>
						</blockquote>
					</Showcode>
				</div>
				<div className="col-xl-4">
					<Showcode title="Success Blockquote" code={typo15}>
						<blockquote className="blockquote custom-blockquote success mb-0 text-center">
							<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
							<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
							<span className="quote-icon"><i className="ri-information-line"></i></span>
						</blockquote>
					</Showcode>
				</div>
				<div className="col-xl-4">
					<Showcode title="Info Blockquote" code={typo16}>
						<blockquote className="blockquote custom-blockquote info mb-0 text-center">
							<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
							<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
							<span className="quote-icon"><i className="ri-information-line"></i></span>
						</blockquote>
					</Showcode>
				</div>
				<div className="col-xl-4">
					<Showcode title="Danger Blockquote" code={typo17}>
						<blockquote className="blockquote custom-blockquote danger mb-0 text-center">
							<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
							<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
							<span className="quote-icon"><i className="ri-information-line"></i></span>
						</blockquote>
					</Showcode>
				</div>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Abbreviations" code={typo18}>
						<p><abbr title="attribute">attr</abbr></p>
						<p className="mb-0"><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
					</Showcode>
					<Showcode title="List inline" code={typo19}>
						<ul className="list-inline mb-0">
							<li className="list-inline-item">This is a list item.</li>
							<li className="list-inline-item">And another one.</li>
							<li className="list-inline-item">But they're displayed inline.</li>
						</ul>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Horizontal rules" code={typo20}>
						<p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
						<div className="text-success">
							<hr />
						</div>
						<p className=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>

						<hr className="text-danger border-2 opacity-50" />
						<p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
						<hr className="border-primary border-3 opacity-75" />
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-3">
					<Showcode title="Monospace" code={typo21}>
						<p className="font-monospace mb-0">This is in monospace</p>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Reset color" code={typo22}>
						<p className="text-muted mb-0">
							Muted text with a <Link to="#" className="text-reset text-decoration-underline text-dark">reset link</Link>.
						</p>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Visible text" code={typo23}>
						<p className="visible mb-0">This is visible text</p>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Invisible text" code={typo24}>
						<p className="invisible mb-0">This is invisible text</p>
					</Showcode>
				</div>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Text transform" code={typo25}>
						<p className="text-lowercase">Lowercased text.</p>
						<p className="text-uppercase">Uppercased text.</p>
						<p className="text-capitalize mb-0">CapiTaliZed text.</p>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Text decoration" code={typo26}>
						<p className="text-decoration-underline">This text has a line underneath it.
						</p>
						<p className="text-decoration-line-through">This text has a line going
							through
							it.
						</p>
						<Link to="#" className="text-decoration-none">This link has its text
							decoration
							removed
						</Link>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Font weight and italics" code={typo26}>
						<p className="fw-bold">Bold text.</p>
						<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
						<p className="fw-semibold">Semibold weight text.</p>
						<p className="fw-normal">Normal weight text.</p>
						<p className="fw-light">Light weight text.</p>
						<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
						<p className="fst-italic">Italic text.</p>
						<p className="fst-normal mb-0">Text with normal font style</p>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Line height" code={typo27}>
						<p className="lh-1">This is a long paragraph written to show how the line-height of
							an
							element is affected by our utilities. Classes are applied to the element
							itself
							or sometimes the parent element. These classes can be customized as needed
							with
							our utility API.
						</p>
						<p className="lh-sm">This is a long paragraph written to show how the line-height of
							an
							element is affected by our utilities. Classes are applied to the element
							itself
							or sometimes the parent element. These classes can be customized as needed
							with
							our utility API.
						</p>
						<p className="lh-base">This is a long paragraph written to show how the line-height
							of
							an element is affected by our utilities. Classes are applied to the element
							itself or sometimes the parent element. These classes can be customized as
							needed with our utility API.
						</p>
						<p className="lh-lg mb-0">This is a long paragraph written to show how the
							line-height
							of an
							element is affected by our utilities. Classes are applied to the element
							itself
							or sometimes the parent element. These classes can be customized as needed
							with
							our utility API.
						</p>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Text alignment" code={typo28}>
						<p className="text-start">Start aligned text on all viewport sizes.</p>
						<p className="text-center">Center aligned text on all viewport sizes.</p>
						<p className="text-end">End aligned text on all viewport sizes.</p>

						<p className="text-sm-start">Start aligned text on viewports sized SM (small) or
							wider.
						</p>
						<p className="text-md-start">Start aligned text on viewports sized MD (medium) or
							wider.
						</p>
						<p className="text-lg-start">Start aligned text on viewports sized LG (large) or
							wider.
						</p>
						<p className="text-xl-start">Start aligned text on viewports sized XL (extra-large)
							or
							wider.</p>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Text wrapping and overflow" code={typo29}>
						<div className="badge bg-primary text-wrap mb-3" style={{ width: "6rem" }}>
							This text should wrap.
						</div>
						<p className="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
						<div className="text-nowrap bg-light border" style={{ width: "8rem" }}>
							This text should overflow the parent.
						</div>
					</Showcode>
					<Showcode title="Word break" code={typo30}>
						<p className="text-break mb-0">
							mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
						</p>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Typography;
