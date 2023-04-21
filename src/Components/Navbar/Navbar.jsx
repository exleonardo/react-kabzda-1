import s from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={`${s.item} ${s.active}`}>
				<a href="https://github.com/exleonardo">Profiles</a>
			</div>
			<div className={s.item}>
				<a href="https://github.com/exleonardo">Messages</a>
			</div>
			<div className={s.item}>
				<a href="https://github.com/exleonardo">News</a>
			</div>
			<div className={s.item}>
				<a href="https://github.com/exleonardo">Music</a>
			</div>
			<div className={s.item}>
				<a href="https://github.com/exleonardo">Settings</a>
			</div>
		</nav>
	);
};

export default Navbar;
