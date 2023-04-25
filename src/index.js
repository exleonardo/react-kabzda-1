import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const postData = [
	{ id: 1, message: "Hi", likesCount: 12 },
	{ id: 2, message: "How is your It-camasutra", likesCount: 11 },
];
const dialogData = [
	{ name: `Alex`, id: 1 },
	{ name: `Denis`, id: 2 },
	{ name: `Masha`, id: 3 },
	{ name: `Victor`, id: 4 },
	{ name: `Valeryi`, id: 5 },
];
const messagesData = [
	{ id: 1, message: "Hi" },
	{ id: 2, message: "How is your It-camasutra" },
	{ id: 3, message: "Yo" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App postsData={postData} dialogData={dialogData} messagesData={messagesData} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
