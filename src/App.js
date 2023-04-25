import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="/profile/*" element={<Profile postsData={props.postsData} />} />
						<Route
							path="/dialogs/*"
							element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData} />}
						/>
						<Route
							path="/news/*"
							element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData} />}
						/>
						<Route
							path="/music/*"
							element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData} />}
						/>
						<Route
							path="/setting/*"
							element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData} />}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
// postsData={props.postsData}
// dialogsData={props.dialogsData} messagesData={props.messagesData}
export default App;
