import s from "./Posts.module.css";

const Posts = () => {
	return (
		<div className={s.item}>
			<img alt="ava" src="https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295806122712757.webp"></img>
			post 1
			<div>
				<span>Like!</span>
			</div>
		</div>
	);
};

export default Posts;
