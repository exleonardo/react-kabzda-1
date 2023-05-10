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
			<App
				state={store.getState()}
				addPost={store.addPost.bind(store)}
				updateNewPostText={store.updateNewPostText.bind(store)}
			/>
		</React.StrictMode>
	);
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// renderEntireTree();
