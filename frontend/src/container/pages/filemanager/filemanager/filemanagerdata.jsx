import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class Filestore extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [70],
			options: {
				chart: {
					type: "radialBar",
					offsetY: -20,
					sparkline: {
						enabled: true,
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				colors: ["#8e54e9",],
				plotOptions: {
					radialBar: {
						startAngle: -90,
						endAngle: 90,
						track: {
							background: "#e7e7e7",
							strokeWidth: "80%",
							margin: 5, // margin is in pixels
							dropShadow: {
								enabled: false,
								top: 2,
								left: 0,
								opacity: 1,
								blur: 1,
							}
						},
						dataLabels: {
							name: {
								show: false,
							},
							value: {
								offsetY: -2,
								fontSize: "22px",
							},
						},
					},
				},
				grid: {
					padding: {
						top: -10,
					},
				},
				labels: ["Average Results"],
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={250} />

		);
	}
}
