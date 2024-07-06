const readicon = <span className="chat-read-icon float-end align-middle"><i
	className="ri-check-double-fill"></i></span>;
const badge = <span
	className="badge bg-success-transparent rounded-circle float-end">2</span>;

import faces2 from "../../../assets/images/faces/2.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces4 from "../../../assets/images/faces/4.jpg";
import faces5 from "../../../assets/images/faces/5.jpg";
import faces6 from "../../../assets/images/faces/6.jpg";
import faces13 from "../../../assets/images/faces/13.jpg";
import faces8 from "../../../assets/images/faces/8.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";
import faces10 from "../../../assets/images/faces/10.jpg";
import faces11 from "../../../assets/images/faces/11.jpg";

export const chatData = [
	{
		heading: "ACTIVE CHATS",
		users: [
			{ name: "Sujika", image: faces5, time: "1:32PM", message: "Need to go for lunch?", icon: readicon, class: "checkforactive", online: "online" },
			{ name: "Emiley Jackson", image: faces2, time: "12:24PM", message: "Typing...", icon: badge, class: "checkforactive", online: "online" },
			{ name: "McGreggor", image: faces10, time: "12:24PM", message: "Typing...", icon: readicon, class: "chat-msg-unread checkforactive", online: "online" },
			{ name: "Emiley Jackson", image: faces8, time: "12:45PM", message: "Chat with you later,bye", icon: readicon, class: "checkforactive", online: "online" }
			// Add more active chats if needed
		],
	},
	{
		heading: "ALL CHATS",
		users: [
			{ name: "Andreas", image: faces11, time: "11:54AM", message: "Congratulations on your new project", online: "offline" },
			{ name: "Melissa Sean", image: faces3, time: "9:45AM", message: "Nice work,Congrats &#128079;", online: "offline" },
			{ name: "Samantha Paul", image: faces6, time: "8:31AM", message: "Great work keep it up :-)", online: "offline" },
			{ name: "Megan Fox", image: faces4, time: "7:23AM", message: "You are need to be appreaciated for what you have done,congs", online: "offline" },
			{ name: "Nicholas Sams", image: faces13, time: "10:22AM", message: "Great Project", online: "offline" },
			{ name: "Pope Johnson", image: faces15, time: "9:10AM", message: "Hike management fixed", online: "offline" },
			// Add more all chats if needed
		],
	},
	// Add more sections if needed
];
