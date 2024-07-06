import { Component } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export class Projectanalysis extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [{
				name: "Projects",
				type: "column",
				data: [20, 29, 37, 35, 44, 43, 50]
			}, {
				name: "Revenue",
				type: "bar",
				data: [10, 15, 17, 15, 12, 20, 28],
			}, {
				name: "Tasks",
				type: "area",
				data: [10, 20, 13, 20, 15, 20, 10,]
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
					height: 350,
					type: "line",
					stacked: false,
					fontFamily: "Poppins, Arial, sans-serif",
				},
				grid: {
					borderColor: "#f5f4f4",
					strokeDashArray: 3
				},
				dataLabels: {
					enabled: false
				},
				title: {
					text: undefined,
				},
				xaxis: {
					categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				},
				yaxis: [
					{
						show: true,
						axisTicks: {
							show: true,
						},
						axisBorder: {
							show: false,
							color: "#4eb6d0"
						},
						labels: {
							style: {
								colors: "#4eb6d0",
							}
						},
						title: {
							text: undefined,
						},
						tooltip: {
							enabled: true
						}
					},
				],
				tooltip: {
					enabled: true,
				},
				legend: {
					show: true,
					position: "top",
					offsetX: 40,
					fontSize: "13px",
					fontWeight: "normal",
					labels: {
						colors: "#acb1b1",
					},
					markers: {
						width: 10,
						height: 10,
					},
				},
				stroke: {
					width: [0, 0, 0],
					curve: "smooth",
					dashArray: [0, 0, 0],
				},
				plotOptions: {
					bar: {
						columnWidth: "30%",
						borderRadius: 1
					}
				},
				colors: ["#8e54e9", "#d96b50", "#8e54e914",]
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />

		);
	}
}

export const Selectoption1 = [
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
