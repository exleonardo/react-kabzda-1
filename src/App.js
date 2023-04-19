import "./App.css";
import Header from "./Components/Header";

function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<nav className="nav">
				<div>
					<a href="#">Profiles</a>
				</div>
				<div>
					<a href="#">Messages</a>
				</div>
				<div>
					<a href="#">News</a>
				</div>
				<div>
					<a href="#">Music</a>
				</div>
				<div>
					<a href="#">Settings</a>
				</div>
			</nav>
			<div className="content">
				<div>
					<img
						src="https://cdn.tripster.ru/thumbs2/f8b8dd24-c646-11ed-b9bb-b6ff1f9232bb.1220x600.jpeg"
						alt="content"
					></img>
				</div>
				<div>ava + descr</div>
				<div>
					My Post
					<div>new Post</div>
					<div>
						<div>post 1</div>
						<div>post 2</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
