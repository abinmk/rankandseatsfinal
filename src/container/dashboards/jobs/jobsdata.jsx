import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export const Applicationdata = [
	{ id: "1", title: "Total Applicants", text1: "1,123", text2: "+1.26%", icon: "bx bx-user-circle fs-22", color: "primary" },
	{ id: "2", title: "Total Shortlisted", text1: "7,123", text2: "+4.26%", icon: "bx bx-user-minus  fs-22", color: "pink" },
	{ id: "3", title: "Hired Candidates", text1: "8,123", text2: "+6.26%", icon: "bx bx-user-plus fs-22", color: "info" },
	{ id: "4", title: "Rejected Applicants", text1: "8,123", text2: "9.26%", icon: "bx bx-user-x  fs-22", color: "danger" },
	{ id: "5", title: "Total Locations", text1: "5,123", text2: "886", icon: "bx bx-location-plus fs-22", color: "warning" },
	{ id: "6", title: "Resume Upload", text1: "5,123", text2: "9,686", icon: "bx bx-file  fs-22", color: "teal" },
];

//
export class Projectanalysis extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Applications",
				type: "column",
				data: [106, 100, 130, 132, 114, 112, 225, 128, 87, 100, 253, 167],
			}, {
				name: "Shortlisted",
				type: "column",
				data: [92, 75, 123, 111, 196, 122, 159, 102, 138, 136, 62, 240]
			}, {
				name: "Hired",
				type: "line",
				data: [35, 52, 86, 65, 102, 70, 152, 87, 55, 92, 170, 80],
			}],
			options: {
				chart: {
					height: 340,
					type: "line",
					stacked: false,
					fontFamily: "poppins, sans-serif",
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				dataLabels: {
					enabled: false
				},
				colors: ["#8e54e9", "#c6a9f4", "#4876e6"],
				stroke: {
					width: [0, 0, 2],
					curve: "smooth"
				},
				plotOptions: {
					bar: {
						columnWidth: "25%",
					}
				},
				markers: {
					size: [0, 0, 3],
					colors: undefined,
					strokeColors: "#000",
					strokeOpacity: 0.6,
					strokeDashArray: 0,
					fillOpacity: 1,
					discrete: [],
					shape: "circle",
					// radius: [0, 0, 2],
					offsetX: 0,
					offsetY: 0,
					onClick: undefined,
					onDblClick: undefined,
					showNullDataPoints: true,
					hover: {
						size: undefined,
						sizeOffset: 3
					}
				},
				fill: {
					opacity: [1, 1, 1]
				},
				grid: {
					borderColor: "#f2f6f7",
				},
				legend: {
					show: true,
					position: "top",
					fontWeight: 500,
					// fontSize: 13,
					markers: {
						width: 10,
						height: 10,
						// shape: "square",
						radius: 5,
					}
				},
				yaxis: {
					min: 0,
					forceNiceScale: true,
					title: {
						style: {
							color: "#adb5be",
							fontSize: "14px",
							fontFamily: "poppins, sans-serif",
							fontWeight: 600,
							cssClass: "apexcharts-yaxis-label",
						},
					},
					labels: {
						formatter: function (y) {
							return y.toFixed(0) + "";
						}
					}
				},
				// toolbar: {
				//     show: false,
				// },
				xaxis: {
					type: "category",
					categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					axisBorder: {
						show: true,
						color: "rgba(119, 119, 142, 0.05)",
						offsetX: 0,
						offsetY: 0,
					},
					axisTicks: {
						show: true,
						borderType: "solid",
						color: "rgba(119, 119, 142, 0.05)",
						// width: 6,
						offsetX: 0,
						offsetY: 0
					},
					labels: {
						rotate: -90
					}
				},
				tooltip: {
					enabled: true,
					shared: false,
					intersect: true,
					x: {
						show: false
					}
				},
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={330} />

		);
	}
}
//
export class Acceptanceratio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Accepted",
				type: "line",
				data: [10, 25, 0o6, 28, 10, 25, 0o5]
			},
			{
				name: "Rejected",
				type: "area",
				data: [20, 0o5, 36, 15, 28, 15, 35]
			}],
			options: {
				chart: {
					height: 230,
					fontFamily: "Poppins, Arial, sans-serif",
					toolbar: {
						show: false
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				grid: {
					show: false,
					borderColor: "#f2f6f7",
				},
				dataLabels: {
					enabled: false
				},
				legend: {
					show: false,
					position: "top",
					fontSize: "13px",
				},
				stroke: {
					width: [2],
					curve: "smooth",
				},
				plotOptions: {
					bar: {
						columnWidth: "27%",
						borderRadius: 1
					}
				},
				labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				colors: ["#8e54e9", "rgba(142, 84, 233, 0.1)"]
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={230} />

		);
	}
}
