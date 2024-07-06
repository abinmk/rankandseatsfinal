import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Col, Row } from "react-bootstrap";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Link } from "react-router-dom";

//IMAGES
import media40 from "../../../assets/images/media/media-40.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media42 from "../../../assets/images/media/media-42.jpg";
import media43 from "../../../assets/images/media/media-43.jpg";
import media44 from "../../../assets/images/media/media-44.jpg";
import media45 from "../../../assets/images/media/media-45.jpg";
import media46 from "../../../assets/images/media/media-46.jpg";

export const LightboxGallery1 = () => {

	const [open, setOpen] = useState(false);
	return (
		<>
			<Row>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media40} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media41} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media42} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media43} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media44} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media45} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media46} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xl={3} md={4} sm={6} className="col-12">
					<Link to="#" className="glightbox card border-0" data-gallery="gallery1">
						<img src={media40} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
			</Row>

			<Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
				maxZoomPixelRatio: 10,
				scrollToZoom: true
			}}
			slides={[{ src: media40 }, { src: media41 },
				{ src: media42 }, { src: media43 },
				{ src: media44 }, { src: media45 },
				{ src: media46 }, { src: media40 },]} />

		</>
	);
};
