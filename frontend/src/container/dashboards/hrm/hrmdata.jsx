import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

//IMAGES
import faces1 from "../../../assets/images/faces/1.jpg";
import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces7 from "../../../assets/images/faces/7.jpg";

export class Hrmstatistics extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "TEAM A",
					type: "bar",
					data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 40],
				},
				{
					name: "TEAM B",
					type: "area",
					data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 44],
				},
				{
					name: "TEAM C",
					type: "column",
					data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 11],
				},
			],
			options: {
				chart: {
					events: {
						mounted: (chart) => {
							chart.windowResizeHandler();
						}
					},
					toolbar: {
						show: false,
					},
					height: 310,
					type: "line",
					stacked: false,
				},
				stroke: {
					width: [0, 1, 1],
					curve: "smooth",
				},
				plotOptions: {
					bar: {
						columnWidth: "40%",
					},
				},
				colors: [
					"#8e54e9",
					"#d9ceeb",
					"#ffa891",
				],
				fill: {
					opacity: [0.85, 0.25, 1],
					gradient: {
						inverseColors: false,
						shade: "light",
						type: "vertical",
						opacityFrom: 0.65,
						opacityTo: 0.15,
						stops: [0, 100, 100, 100],
					},
				},

				labels: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],
				markers: {
					size: 0,
				},
				xaxis: {
					type: "category",
				},
				yaxis: {
					title: {
						text: "Points",
					},
					min: 0,
				},
				tooltip: {
					shared: true,
					intersect: false,
					y: {
						formatter: function (y) {
							if (typeof y !== "undefined") {
								return y.toFixed(0) + " points";
							}
							return y;
						},
					},
				},
				legend: {
					show: false,
				},
			}

		};
	}

	render() {
		return (
			<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={310} />

		);
	}
}

export const Employeesdata = [
	{ id: "1", src: faces1, name: "Richard Dom", emid: "	#HTC012350", role: "Team Leader", email: "richard116@demo.com", contact: "+0987654321" },
	{ id: "2", src: faces2, name: "Kakashra Sri", emid: "#HTC012351", role: "Web Developer", email: "	Kakashra987@demo.com", contact: "+0986548761" },
	{ id: "3", src: faces3, name: "Nikki Jey", emid: "#HTC012352", role: "Project Manager", email: "Nikki654@demo.com", contact: "+0986548787" },
	{ id: "4", src: faces4, name: "Sasukey Ahuhi", emid: "#HTC012353", role: "Project Manager", email: "Sasukey986@demo.com", contact: "+0986548788" },
	{ id: "5", src: faces5, name: "Xiong Yu", emid: "#HTC012354", role: "UI Developer", email: "Xiongu987@demo.com", contact: "+0986548988" },
	{ id: "6", src: faces6, name: "Arifa Zed", emid: "#HTC012355", role: "Team Member", email: "Arifa432@demo.com", contact: "+0986548985" },
	{ id: "7", src: faces7, name: "Jennifer Tab", emid: "#HTC012356", role: "Project Manager", email: "Jennifer543@demo.com", contact: "+09865489987" }
];

