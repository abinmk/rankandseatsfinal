import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class Nftstatistics extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Views",
					type: "column",
					data: [53, 61, 42, 57, 33, 42, 57, 31, 64, 72, 45, 35]
				},
				{
					name: "Followers",
					type: "line",
					data: [24, 50, 31, 57, 32, 63, 31, 51, 26, 47, 23, 47]
				},
			],
			options: {
				chart: {
					toolbar: {
						show: false
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					type: "line",
					height: 350,
				},
				grid: {
					borderColor: "#f1f1f1",
					strokeDashArray: 3
				},
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				dataLabels: {
					enabled: false
				},
				stroke: {
					width: [1, 2],
					curve: ["straight", "smooth"],
				},
				legend: {
					show: true,
					position: "top",
				},
				xaxis: {
					axisBorder: {
						color: "#e9e9e9",
					},
				},
				plotOptions: {
					bar: {
						columnWidth: "20%",
						borderRadius: 2
					}
				},
				colors: ["rgba(132, 90, 223, 1)", "#4876e6"],
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
export class Bitcoin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Value",
				data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
			}],
			options: {
				chart: {
					type: "area",
					height: 100,
					sparkline: {
						enabled: true
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "butt",
					colors: undefined,
					width: 2.5,
					dashArray: 0,
				},
				fill: {
					gradient: {
						// enabled: false
					}
				},
				series: [{
					name: "Value",
					data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
				}],
				yaxis: {
					min: 0,
					show: false,
					axisBorder: {
						show: false
					},
				},
				xaxis: {
					// show: false,
					axisBorder: {
						show: false
					},
				},
				colors: ["#8e54e9"],
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={120} />
		);
	}
}

export const Nftselectoptions = [
	{ value: "jan", label: "Jan" },
	{ value: "feb", label: "Feb" },
	{ value: "mar", label: "Mar" },
	{ value: "apr", label: "Apr" },
	{ value: "may", label: "May" },
	{ value: "jun", label: "Jun" },
	{ value: "jul", label: "Jul" },
	{ value: "aug", label: "Aug" },
	{ value: "sep", label: "Sep" },
	{ value: "oct", label: "Oct" },
	{ value: "nov", label: "Nov" },
	{ value: "dec", label: "Dec" }
];
