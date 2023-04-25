import s from "./Posts.module.css";

const Posts = (props) => {
	return (
		<div className={s.item}>
			<img alt="ava" src="https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295806122712757.webp"></img>
			{props.message}
			<div>
				<span>Like!</span>
				{props.likesCount}
			</div>
		</div>
	);
};

export default Posts;
