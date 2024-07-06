import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export const Leadscrmdata = [
	{ id: "", title: "Total Customers", text1: "1,116", text2: "+12.86%", icon1: "fe fe-users", icon2: "up", color: "primary" },
	{ id: "", title: "Total Deals", text1: "7,030", text2: "+54.86%", icon1: "fe fe-edit", icon2: "up", color: "success" },
	{ id: "", title: "Total Revenue", text1: "$87.030", text2: "+94.86%", icon1: "fe fe-dollar-sign", icon2: "down", color: "danger" },
	{ id: "", title: "Conversion Rate", text1: "12.08%", text2: "+03.86%", icon1: "fe fe-repeat", icon2: "up", color: "warning" }
];

export class Totalrevenue extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Price",
				data: [20, 33, 20, 52, 30, 53, 30, 56, 35, 50]
			}, {
				name: "Volume",
				data: [35, 15, 45, 20, 55, 35, 55, 40, 30, 54]
			}],
			options: {
				chart: {
					height: 343,
					type: "line",
					zoom: {
						enabled: false
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					dropShadow: {
						enabled: true,
						enabledOnSeries: undefined,
						top: 5,
						left: 0,
						blur: 3,
						color: "#000",
						opacity: 0.1
					},
				},
				dataLabels: {
					enabled: false
				},
				legend: {
					position: "top",
					horizontalAlign: "center",
					offsetX: -15,
					fontWeight: "bold",
				},
				stroke: {
					curve: "smooth",
					width: 3,
					dashArray: [0, 4],
				},
				grid: {
					borderColor: "#f2f6f7",
				},
				colors: ["#8e54e9", "rgba(142, 84, 233, 0.1)"],
				yaxis: {
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
							// Check if y is a valid number before using toFixed
							if (typeof y === "number" && !isNaN(y)) {
								return y.toFixed(0) + "";
							} else {
								return ""; // Return an empty string or some default value
							}
						}
					}
				},
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
				}
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={345} />

		);
	}
}
//
export class Leadssource extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Sessions",
				data: [400, 430, 470, 540, 1100, 1200, 1380]
			}],
			options: {
				chart: {
					fontFamily: "Poppins, Arial, sans-serif",
					toolbar: {
						show: false
					},
					type: "bar",
					height: 310,
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				grid: {
					borderColor: "#f2f6f7",
				},
				plotOptions: {
					bar: {
						horizontal: true,
						barHeight: "30%",
						borderRadius: 1,
					}
				},
				colors: ["#8e54e9"],
				dataLabels: {
					enabled: false
				},
				xaxis: {
					categories: ["Marketing", "Digital", "Web", "App", "Referal", "Other", "Germany"],
				}
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={310} />

		);
	}
}
