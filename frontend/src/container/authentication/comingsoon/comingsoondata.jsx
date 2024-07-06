
import Countdown from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a complete state
		return <AfterComplete />;
	} else {
		// Render a countdown
		return (
			<div className="main d-flex justify-content-center flex-wrap">
				<div className="counter-item count  bg-info-transparent m-2 br-3">
					<h3 className="count_down">{days}</h3>
					<h6 className="">Days</h6>

				</div>
				<div className="counter-item count  bg-success-transparent m-2 br-3">
					<h3 className="count_down">{hours}</h3>
					<h6 className="">Hours</h6>
				</div>
				<div className="counter-item count bg-warning-transparent m-2 br-3">
					<h3 className="count_down">{minutes}</h3>
					<h6 className="">Minutes</h6>
				</div>
				<div className="counter-item count bg-pink-transparent m-2 br-3">
					<h3 className="count_down">{seconds}</h3>
					<h6 className="">Seconds</h6>
				</div>
			</div>
		);
	}
};

export function DayCounter() {
	return (<Countdown date={Date.now() + 9999989980} renderer={rendering} />);
}
