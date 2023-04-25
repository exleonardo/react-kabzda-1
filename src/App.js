import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
	const postData = [
		{ id: 1, message: "Hi", likesCount: 12 },
		{ id: 2, message: "How is your It-camasutra", likesCount: 11 },
	];
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/profile/*" element={<Profile postsData={postData} />} />
						<Route path="/dialogs/*" element={<Dialogs />} />
						<Route path="/news/*" element={<Dialogs />} />
						<Route path="/music/*" element={<Dialogs />} />
						<Route path="/setting/*" element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
// postsData={props.postsData}
// dialogsData={props.dialogsData} messagesData={props.messagesData}
export default App;
