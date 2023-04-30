import state, { subscribe } from "./redux/state";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";

// addPost(`LOl`);
const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = () => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
		</React.StrictMode>
	);
};
// @LusiaLilExplorer
// 5 месяцев назад
// Ноябрь 2022
// в 18й версии надо менять в index.js
// ReactDOM.render (
// на
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// Так же убрать из app.js врап
//     BrowserRouter

renderEntireTree(state);
subscribe(renderEntireTree);

// renderEntireTree();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
