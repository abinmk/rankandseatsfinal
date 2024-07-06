
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Fragment>
			<footer className="footer mt-auto py-3 bg-white text-center">
				<div className="container">
					<span className="text-muted"> Copyright © <span id="year"> 2024</span> <Link
						to="#" className="text-dark fw-semibold"></Link>.
						Designed by <Link to="#">
						<span className="fw-semibold text-primary text-decoration-underline">Sysbreeze Technologies</span>
					</Link>
					</span>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
