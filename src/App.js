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
							element={
								<Profile
									profilePage={props.state.profilePage}
									addPost={props.addPost}
									updateNewPostText={props.updateNewPostText}
								/>
							}
						/>
						<Route path="/dialogs/*" element={<Dialogs state={props.state.dialogPage} />} />
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

let lol = [
	[3, 2, 3],
	[1, 6, 3, 5],
	[3, 13, 26, 6, 8],
	[19, 3, 9],
];
console.log(lol[1][0].lengt);
