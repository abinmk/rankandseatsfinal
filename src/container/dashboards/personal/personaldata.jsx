import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class Personalbalance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Income",
				data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
			}, {
				name: "Expances",
				data: [20, 88, 58, 120, 80, 95, 35, 88, 60, 85, 75, 85]
			}],
			options: {
				chart: {
					type: "area",
					height: 270,
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				grid: {
					borderColor: "rgba(167, 180, 201 ,0.2)",
				},
				colors: ["#8e54e9", "#4876e6"],
				markers: {
					size: [5, 0],
					strokeColors: "#fff",
					strokeWidth: [3, 0],
					strokeOpacity: 0.9,
				},
				stroke: {
					curve: "straight",
					width: 1,
					dashArray: [0, 4]
				},
				fill: {
					type: ["gradient", "gradient"],
					gradient: {
						shade: "light",
						type: "vertical",
						opacityFrom: [0.6, 0.5],
						opacityTo: [0.2, 0.1],
						stops: [0, 100]
					}
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
			<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={290} />

		);
	}
}

//
export class Balance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Total Credit",
				type: "line",
				data: [1, 25, 6, 28, 10,]
			},
			{
				name: "Total Debit",
				type: "line",
				data: [2, 5, 36, 15, 28]
			}],
			options: {
				chart: {
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					height: 80,
					fontFamily: "Poppins, Arial, sans-serif",
					sparkline: {
						enabled: true
					},
					toolbar: {
						show: false
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
					show: true,
					position: "bottom",
					fontSize: "11px",
				},
				markers: {
					strokeWidth: [3, 0],
				},
				stroke: {
					// width: ["2", "1"],
					width: 2,
					curve: "smooth",
				},

				labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				colors: ["#8e54e9", "#c0aae4"]
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={80} />

		);
	}
}
