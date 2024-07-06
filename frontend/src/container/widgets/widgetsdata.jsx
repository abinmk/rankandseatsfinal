
import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";

//IMAGES
import faces1 from "../../assets/images/faces/1.jpg";
import faces2 from "../../assets/images/faces/2.jpg";
import faces4 from "../../assets/images/faces/4.jpg";
import faces5 from "../../assets/images/faces/5.jpg";
import faces6 from "../../assets/images/faces/6.jpg";
import faces7 from "../../assets/images/faces/7.jpg";
import faces8 from "../../assets/images/faces/8.jpg";
import faces16 from "../../assets/images/faces/16.jpg";
import faces13 from "../../assets/images/faces/13.jpg";
import faces15 from "../../assets/images/faces/15.jpg";

export const Tasksstatusdata = [
	{ id: "1", name: "Robert anii", text1: "New website designs", text2: 90, src1: faces15, src2: faces13, src3: faces8, color: "primary" },
	{ id: "2", name: "Renaissance", text1: "Ad Design for new Project", text2: 60, src1: faces15, src2: faces13, src3: faces8, color: "secondary" },
	{ id: "3", name: "Bonorum", text1: "New website designs", text2: 45, src1: faces15, src2: faces13, src3: faces8, color: "success" },
	{ id: "4", name: "Malorum", text1: "Ad Design for new Project", text2: 75, src1: faces15, src2: faces13, src3: faces8, color: "info" },
	{ id: "5", name: "Rackham", text1: "New website designs", text2: 55, src1: faces15, src2: faces13, src3: faces8, color: "warning" },
];

export const Teamembersdata = [
	{ id: "1", src: faces4, name: "Madrick", text: "London", class: "online" },
	{ id: "2", src: faces6, name: "Daiveed", text: "Mexico", class: "" },
	{ id: "3", src: faces2, name: "Majeshe", text: "Canada", class: "online" },
	{ id: "4", src: faces4, name: "Majeshe", text: "London", class: "online" },
	{ id: "5", src: faces7, name: "Ropehsg", text: "America", class: "" }
];

export const Newapplicantsdata = [
	{ id: "1", src: faces15, name: "Mackeil Jepf", text: "Applied for a Full-stack Developer" },
	{ id: "2", src: faces8, name: "Rosen Begh", text: "Applied for a UI Designer" },
	{ id: "3", src: faces13, name: "Joseph George", text: "Applied for a Team Lead" },
	{ id: "4", src: faces5, name: "RoJesh Marfph", text: "Applied for a Product Manger" },
	{ id: "5", src: faces16, name: "Daniel Jackson", text: "Applied for a Web Developer" },
	{ id: "6", src: faces1, name: "Jackson", text: "Applied for a Web Developer" }
];

export const Recenttransactions = [
	{ id: "1", icon: "shopping-bag", text1: "Shopping", text2: "card", text3: "-$256.99", text4: "Mar 12,2022", class: "primary", color1: "danger" },
	{ id: "2", icon: "box", text1: "Stock Market", text2: "Transfer", text3: " +$18,567.00", text4: "Mar 10,2022", class: "info", color1: "success" },
	{ id: "3", icon: "cart", text1: "Grocery", text2: "card", text3: " -$256.99", text4: "Apr 23,2022", class: "warning", color1: "danger" },
	{ id: "4", icon: "book", text1: "Books", text2: "card", text3: " +$256.99", text4: "May 18,2022", class: "success", color1: "danger" },
	{ id: "5", icon: "store-alt", text1: "Business", text2: "Transfer", text3: " +$256.99", text4: "May 4,2022", class: "danger", color1: "success" },
];

export const Topreferrersdata = [
	{ id: "1", icon1: "chrome-line", icon2: "up", text1: "Chrome", text2: "37,098", width: 65, class: "primary", color: "success" },
	{ id: "2", icon1: "safari-line", icon2: "up", text1: "safari", text2: "37,098", width: 60, class: "secondary", color: "success" },
	{ id: "3", icon1: "firefox-line", icon2: "down", text1: "Firefox", text2: "54,085", width: 40, class: "info", color: "danger" },
	{ id: "4", icon1: "opera-line", icon2: "up", text1: "Opera", text2: "74,085", width: 50, class: "warning", color: "success" },
	{ id: "5", icon1: "edge-line", icon2: "down", text1: "Edge", text2: "54,085", width: 45, class: "success", color: "danger" }
];

export const Totalapplicantsdata = [
	{ id: "1", text1: "Total Applicants", text2: "1,123", class1: "+1.26%", class2: "people", color: "primary" },
	{ id: "2", text1: "Total Shortlisted", text2: "7,123", class1: "+4.26%", class2: "person-dash", color: "pink" },
	{ id: "3", text1: "Hired Candidates", text2: "8,123", class1: "+6.26%", class2: "person-check", color: "info" },
	{ id: "4", text1: "Rejected Applicants", text2: "8,123", class1: "9.26%", class2: "person-x ", color: "danger" },
	{ id: "5", text1: "Total Locations", text2: "5,123", class1: "886", class2: "globe", color: "warning" },
	{ id: "6", text1: "Ressume Upload", text2: "5,123", class1: "9,686", class2: "receipt ", color: "teal" }
];

//Recent Applicants    

export class Recentapplicants extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Profit Earned",
					data: [44, 42, 57, 86, 58, 55, 70],
				},
				{
					name: "Total Sales",
					data: [34, 22, 37, 56, 21, 35, 60],
				},
			],
			options: {
				chart: {
					type: "bar",
					height: 250,
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
					borderColor: "#f1f1f1",
					strokeDashArray: 3,
				},
				colors: ["rgb(132, 90, 223)", "#ededed"],
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
						columnWidth: "60%",
						borderRadius: 2,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: true,
					width: 2,
					colors: ["transparent"],
				},
				legend: {
					show: false,
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
					categories: ["S", "M", "T", "W", "T", "F", "S"],
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

			<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={250} />

		);
	}
}
