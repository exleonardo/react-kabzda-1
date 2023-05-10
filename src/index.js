import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// addPost(`LOl`);
const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText} />
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

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// renderEntireTree();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
