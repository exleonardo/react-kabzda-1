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
						<Route path="/profile/*" element={<Profile postsData={props.state.profilePage.postData} />} />
						<Route
							path="/dialogs/*"
							element={
								<Dialogs
									dialogData={props.state.dialogPage.dialogData}
									messagesData={props.state.dialogPage.messagesData}
								/>
							}
						/>
						<Route
							path="/news/*"
							element={
								<Dialogs
									dialogData={props.state.dialogPage.dialogData}
									messagesData={props.state.dialogPage.messagesData}
								/>
							}
						/>
						<Route
							path="/music/*"
							element={
								<Dialogs
									dialogData={props.state.dialogPage.dialogData}
									messagesData={props.state.dialogPage.messagesData}
								/>
							}
						/>
						<Route
							path="/setting/*"
							element={
								<Dialogs
									dialogData={props.state.dialogPage.dialogData}
									messagesData={props.state.dialogPage.messagesData}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
