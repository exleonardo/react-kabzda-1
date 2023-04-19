import "./App.css";

function App() {
	return (
		<div className="app-wrapper">
			<header className="header">
				<img src="https://assets.turbologo.ru/blog/ru/2018/03/18170838/prozrachniy-logo-800x575.png"></img>
			</header>
			<nav className="nav">
				<div>
					<a>Profiles</a>
				</div>
				<div>
					<a>Messages</a>
				</div>
				<div>
					<a>News</a>
				</div>
				<div>
					<a>Music</a>
				</div>
				<div>
					<a>Settings</a>
				</div>
			</nav>
			<div className="content">Main content</div>
		</div>
	);
}

export default App;
