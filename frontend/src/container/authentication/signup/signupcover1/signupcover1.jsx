import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

//IMAGES
import desktopdark from "../../../../assets/images/brand-logos/desktop-dark.png";

const Signupcover1 = () => {

	return (
		<Fragment>
			<div className="page error-bg" id="particles-js">
				<div className="error-page  ">
					<div className="container">
						<div className="row justify-content-center ">
							<div className="col-xl-8 col-md-12 col-sm-10 ">
								<div className="card custom-card  rectangle2">
									<div className="card-body p-0 ">
										<div className="row">
											<div className="col-xl-6 col-md-6 pe-sm-0 d-flex">
												<div className="p-5">
													<p className="h4 fw-semibold mb-2">Sign Up</p>
													<p className="mb-3 text-muted op-7 fw-normal">Welcome & Join us by creating a free account !</p>
													<div className="row gy-3 mt-3">
														<div className="col-xl-12 mt-0">
															<label htmlFor="signin-username" className="form-label text-default">Full Name</label>
															<input type="text" className="form-control form-control-lg" id="signin-username" placeholder="user name" />
														</div>
														<div className="col-xl-12">
															<label htmlFor="signup-lastname" className="form-label text-default">Email</label>
															<input type="email" className="form-control form-control-lg" id="signup-lastname" placeholder="email" />
														</div>
														<div className="col-xl-12 d-grid mt-2">
															<button className="btn btn-lg btn-primary mt-4">Create Account</button>
														</div>
													</div>
													<div className="text-center">
														<p className="fs-12 text-muted mt-3">Already have an account? <Link to={`${import.meta.env.BASE_URL}authentication/signin/signincover1/`} className="text-primary">Sign In</Link></p>
													</div>
													<div className="text-center my-3 authentication-barrier">
														<span>OR</span>
													</div>
													<div className="btn-list text-center">
														<button className="btn btn-icon btn-light btn-wave waves-effect waves-light">
															<i className="ri-facebook-line fw-bold "></i>
														</button>
														<button className="btn btn-icon btn-light btn-wave waves-effect waves-light">
															<i className="ri-google-line fw-bold "></i>
														</button>
														<button className="btn btn-icon btn-light btn-wave waves-effect waves-light">
															<i className="ri-twitter-line fw-bold "></i>
														</button>
													</div>
												</div>
											</div>
											<div className="col-xl-6 col-md-6 ps-0 text-fixed-white rounded-0 d-none d-md-block  ">
												<div className="card custom-card mb-0 cover-background overflow-hidden rounded-end rounded-0">
													<div className="card-img-overlay d-flex  align-items-center p-0 rounded-0">
														<div className="card-body p-5 rectangle3">
															<div>
																<Link to={`${import.meta.env.BASE_URL}dashboards/sales`}> <img src={desktopdark} alt="logo" className="desktop-dark" /></Link>
															</div>
															<h6 className="mt-4 fs-15 op-9  text-fixed-white">Sign Up</h6>
															<div className="d-flex mt-3  text-fixed-white">
																<p className="mb-0 fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis.
																	Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Signupcover1;
