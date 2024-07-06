import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class Coursestatistics extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Study",
				data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
			}, {
				name: "Exams",
				data: [20, 58, 58, 120, 80, 95, 35, 88, 60, 85, 75, 85]
			}],
			options: {
				colors: ["#8e54e9", "#4876e6"],
				chart: {
					type: "line",
					height: 320,
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				grid: {
					borderColor: "rgba(167, 180, 201 ,0.2)",
				},
				markers: {
					size: [5, 0],
					strokeColors: "#fff",
					strokeWidth: [3, 0],
					strokeOpacity: 0.9,
				},
				stroke: {
					curve: "smooth",
					width: [2, 2],
					dashArray: [0, 4]
				},
				dataLabels: {
					enabled: false,
				},
				legend: {
					show: true,
					position: "top",
					labels: {
						colors: "#74767c",
					},
				},
				yaxis: {
					labels: {
						formatter: function (y) {
							return y.toFixed(0) + "";
						},
						style: {
							colors: "#8c9097",
							fontSize: "11px",
							fontWeight: 600,
							cssClass: "apexcharts-xaxis-label",
						},
					},
				},
				xaxis: {
					type: "category",
					categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "oct", "nov", "dec"],
					axisBorder: {
						show: true,
						color: "rgba(167, 180, 201 ,0.2)",
						offsetX: 0,
						offsetY: 0,
					},
					axisTicks: {
						show: true,
						borderType: "solid",
						color: "rgba(167, 180, 201 ,0.2)",
						// width: 6,
						offsetX: 0,
						offsetY: 0
					},
					labels: {
						rotate: -90,
						style: {
							colors: "#8c9097",
							fontSize: "11px",
							fontWeight: 600,
							cssClass: "apexcharts-xaxis-label",
						},
					}
				}
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={320} />

		);
	}
}
//
export class Payoutsreport extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Paid",
				data: [50, 20, 32, 32, 20, 50, 20, 40, 25, 55, 20, 30],
				type: "area",
			}, {
				name: "UnPaid",
				data: [25, 15, 40, 20, 25, 15, 58, 28, 30, 15, 58, 28],
				type: "line",
			}],
			options: {
				colors: ["#8e54e91a", "#ffb8a5"],
				chart: {
					type: "line",
					height: 120,
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				grid: {
					borderColor: "#f2f6f7",
				},
				// background: "transparent",
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: "smooth",
					width: 2,
					dashArray: [0, 5],
				},
				legend: {
					show: true,
					position: "top",
				},
				xaxis: {
					// show: false,
					axisBorder: {
						show: false,
						color: "rgba(119, 119, 142, 0.05)",
						offsetX: 0,
						offsetY: 0,
					},
					axisTicks: {
						show: false,
						borderType: "solid",
						color: "rgba(119, 119, 142, 0.05)",
						// width: 6,
						offsetX: 0,
						offsetY: 0
					},
					labels: {
						rotate: -90,
					}
				},
				yaxis: {
					show: false,
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false,
					}
				},
				tooltip: {
					x: {
						format: "dd/MM/yy HH:mm"
					},
				},
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={260} />

		);
	}
}
