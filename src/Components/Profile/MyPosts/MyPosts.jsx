import s from "./MyPosts.module.css";
import Posts from "../MyPosts/Post/Posts";

const MyPosts = () => {
	const postData = [
		{ id: 1, message: "Hi", likesCount: 12 },
		{ id: 2, message: "How is your It-camasutra", likesCount: 11 },
	];
	const postsElements = postData.map((post) => <Posts message={post.message} likesCount={post.likesCount} />);
	return (
		<div>
			<div className={s.postsBlock}>
				<h3>My posts</h3>
				<textarea></textarea>
				<button>add Post</button>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
