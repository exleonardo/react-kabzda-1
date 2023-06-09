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
						<Route
							path="/profile/*"
							element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
						/>
						<Route path="/dialogs/*" element={<Dialogs store={props.store} />} />
						<Route path="/news/*" element={<Dialogs state={props.state.dialogPage} />} />
						<Route path="/music/*" element={<Dialogs state={props.state.dialogPage} />} />
						<Route path="/setting/*" element={<Dialogs state={props.state.dialogPage} />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
