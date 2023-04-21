import s from "./Header.module.css";

const Header = () => {
	return (
		<header className={s.header}>
			<img
				src="https://assets.turbologo.ru/blog/ru/2018/03/18170838/prozrachniy-logo-800x575.png"
				alt="header"
			></img>
		</header>
	);
};

export default Header;
