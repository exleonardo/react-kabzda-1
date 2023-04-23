import s from "./MyPosts.module.css";
import Posts from "../MyPosts/Post/Posts";

const MyPosts = () => {
	return (
		<div>
			<div className={s.postsBlock}>
				<h3>My posts</h3>
				<textarea></textarea>
				<button>add Post</button>
			</div>
			<div className={s.posts}>
				<Posts />
				<Posts />
			</div>
		</div>
	);
};

export default MyPosts;
