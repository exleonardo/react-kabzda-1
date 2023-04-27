import s from "./MyPosts.module.css";
import Posts from "../MyPosts/Post/Posts";
import React from "react";

const MyPosts = (props) => {
	debugger;
	const postsElements = props.postsData.map((post) => (
		<Posts message={post.message} likesCount={post.likesCount} />
	));
	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
	};
	return (
		<div>
			<div className={s.postsBlock}>
				<h3>My posts</h3>
				<textarea ref={newPostElement}></textarea>
				<button onClick={addPost}>add Post</button>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
