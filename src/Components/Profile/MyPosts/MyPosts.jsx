import s from "./MyPosts.module.css";
import Posts from "../MyPosts/Post/Posts";

const MyPosts = (props) => {
	debugger;
	const postsElements = props.postsData.map((post) => (
		<Posts message={post.message} likesCount={post.likesCount} />
	));

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
