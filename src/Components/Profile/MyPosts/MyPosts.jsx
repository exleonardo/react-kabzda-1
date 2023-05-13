import s from "./MyPosts.module.css";
import Posts from "../MyPosts/Post/Posts";
import React from "react";
import { updateNewPostTextActionCreater, addPostActionCreater } from "../../../redux/state";

const MyPosts = (props) => {
	debugger;
	const postsElements = props.postsData.map((post) => (
		<Posts message={post.message} likesCount={post.likesCount} />
	));
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreater());
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		// let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
		let action = updateNewPostTextActionCreater(text);
		props.dispatch(action);
	};
	return (
		<div>
			<div className={s.postsBlock}>
				<h3>My posts</h3>
				<textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
				<button onClick={addPost}>add Post</button>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
