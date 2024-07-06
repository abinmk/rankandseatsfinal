import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class Analyticusers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Value",
					data: [0, 21, 54, 38, 56, 24, 65, 53, 67],
				},
			],
			options: {
				chart: {
					type: "line",
					height: 60,
					width: 110,
					sparkline: {
						enabled: true,
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					dropShadow: {
						enabled: false,
						enabledOnSeries: undefined,
						top: 0,
						left: 0,
						blur: 3,
						color: "#000",
						opacity: 0,
					},
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						},
					},
					yaxis: {
						lines: {
							show: false,
						},
					},
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "butt",
					colors: undefined,
					width: 2,
					dashArray: 0,
				},
				fill: {
					gradient: {
						// enabled: false,
					},
				},
				yaxis: {
					min: 0,
					axisBorder: {
						show: false,
					},
					show: false,
				},
				xaxis: {
					// show: false,
					axisTicks: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
				},
				colors: ["#8e54e9"],
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={60} width={110} />

		);
	}
}
//
export class Analyticvisitors extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Value",
					data: [0, 21, 54, 38, 56, 24, 65, 53, 67],
				},
			],
			options: {
				chart: {
					type: "bar",
					height: 60,
					width: 90,
					sparkline: {
						enabled: true,
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					dropShadow: {
						enabled: false,
						enabledOnSeries: undefined,
						top: 0,
						left: 0,
						blur: 0,
						color: "#000",
						opacity: 0,
					},
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						},
					},
					yaxis: {
						lines: {
							show: false,
						},
					},
				},
				stroke: {
					show: true,
					curve: "smooth",
					colors: undefined,
					width: 0.5,
					dashArray: 0,
				},
				fill: {
					gradient: {
						// enabled: false,
					},
				},
				yaxis: {
					min: 0,
					axisBorder: {
						show: false,
					},
					show: false,
				},
				xaxis: {
					// show: false,
					axisTicks: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
				},
				colors: ["#4876e6"],
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={60} width={90} />

		);
	}
}
//
export class Bouncerate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Value",
					data: [0, 21, 54, 38, 56, 24, 65, 53, 67],
				},
			],
			options: {
				chart: {
					type: "line",
					height: 60,
					width: 110,
					sparkline: {
						enabled: true,
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					dropShadow: {
						enabled: false,
						enabledOnSeries: undefined,
						top: 0,
						left: 0,
						blur: 0,
						color: "#000",
						opacity: 0,
					},
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						},
					},
					yaxis: {
						lines: {
							show: false,
						},
					},
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "butt",
					colors: undefined,
					width: 2,
					dashArray: 0,
				},
				fill: {
					gradient: {
						// enabled: false,
					},
				},
				yaxis: {
					min: 0,
					axisBorder: {
						show: false,
					},
					show: false,
				},
				xaxis: {
					// show: false,
					axisTicks: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
				},
				colors: ["#4876e6"],
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={60} width={110} />

		);
	}
}

//
export class Pageviews extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Value",
					data: [0, 21, 54, 38, 56, 24, 65, 53, 67],
				},
			],
			options: {
				chart: {
					type: "bar",
					height: 60,
					width: 90,
					sparkline: {
						enabled: true,
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					dropShadow: {
						enabled: false,
						enabledOnSeries: undefined,
						top: 0,
						left: 0,
						blur: 3,
						color: "#000",
						opacity: 0.1,
					},
				},
				grid: {
					show: false,
					xaxis: {
						lines: {
							show: false,
						},
					},
					yaxis: {
						lines: {
							show: false,
						},
					},
				},
				stroke: {
					show: true,
					curve: "smooth",
					lineCap: "butt",
					colors: undefined,
					width: 0.5,
					dashArray: 0,
				},
				fill: {
					gradient: {
						// enabled: false,
					},
				},
				yaxis: {
					min: 0,
					axisBorder: {
						show: false,
					},
					show: false,
				},
				xaxis: {
					// show: false,
					axisTicks: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
				},
				colors: ["#f5b849"],
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={60} width={90} />

		);
	}
}
//
export class Sessionsbydevice extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Tablet",
					data: [[30, 25, 35, 50]],
				},
				{
					name: "Mobile",
					data: [[10, 35, 55, 60]],
				},
				{
					name: "Desktop",
					data: [[5, 5, 40, 50]],
				},
				{
					name: "Tabs",
					data: [[20, 40, 65, 60]],
				},
			],
			options: {
				chart: {
					height: 340,
					type: "bubble",
					toolbar: {
						show: false,
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				grid: {
					borderColor: "#f3f3f3",
					strokeDashArray: 3,
				},
				dataLabels: {
					enabled: false,
				},
				legend: {
					show: true,
					fontSize: "13px",
					labels: {
						colors: "#959595",
					},
					markers: {
						width: 10,
						height: 10,
					},
				},
				xaxis: {
					min: 0,
					max: 40,
					labels: {
						show: false,
					},
					axisBorder: {
						show: false,
					},
				},
				yaxis: {
					max: 50,
					labels: {
						show: false,
					},
				},
				colors: ["#4876e6", "#4876e6", "#f7cc7b", "#8e54e9",]
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height={340} />

		);
	}
}
//
export class Audiencereport extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Sales",
					data: [43, 42, 56, 86, 58, 55, 70, 43, 23, 54, 77, 34],
				},
				{
					name: "OPEX Ratio",
					data: [74, 72, 87, 96, 78, 85, 100, 73, 53, 84, 107, 64],
				},
				{
					name: "General & Admin",
					data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
				},
				{
					name: "Marketing",
					type: "line",
					data: [34, 22, 36, 55, 21, 25, 58, 29, 49, 68, 90, 53],
				},
			],
			options: {
				chart: {
					stacked: true,
					type: "bar",
					height: 335,
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				grid: {
					borderColor: "#f5f4f4",
					strokeDashArray: 5,
				},
				colors: [
					"#8e54e9",
					"#8e54e98f",
					"#8e54e945",
					"#ebeff5",
				],
				plotOptions: {
					bar: {
						colors: {
							ranges: [
								{
									from: -100,
									to: -46,
									color: "#ebeff5",
								},
								{
									from: -45,
									to: 0,
									color: "#ebeff5",
								},
							],
						},
						columnWidth: "22%",
					},
				},
				dataLabels: {
					enabled: false,
				},
				legend: {
					show: true,
					position: "top",
				},
				yaxis: {
					labels: {
						formatter: function (y) {
							return y.toFixed(0) + "";
						},
					},
				},
				xaxis: {
					type: "category",
					categories: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"sep",
						"oct",
						"nov",
						"dec",
					],
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
						offsetY: 0,
					},
					labels: {
						rotate: -90,
					},
				},
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={335} />

		);
	}
}
//
export class Visitors extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [73],
			options: {
				chart: {
					type: "radialBar",
					offsetY: -20,
					offsetX: -5,
					height: 300,
					foreColor: "#5d6162",
					fontFamily: "Poppins, Arial, sans-serif",
					sparkline: {
						enabled: true,
					},
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
				},
				colors: ["#8e54e9"],
				plotOptions: {
					radialBar: {
						startAngle: -90,
						endAngle: 90,
						track: {
							background: "#4876e6",
							strokeWidth: "97%",
						},
						dataLabels: {
							name: {
								show: false,
							},
							value: {
								offsetY: -3,
								fontSize: "15px",
								fontWeight: "500",
							},
						},
					},
				},
				fill: {
					type: "gradient",
					gradient: {
						shade: "light",
						shadeIntensity: 0.3,
						opacityFrom: 1,
						opacityTo: 1,
						stops: [0, 30, 50, 91],
					},
				},
				stroke: {
					dashArray: 3,
				},
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={300} />

		);
	}
}
