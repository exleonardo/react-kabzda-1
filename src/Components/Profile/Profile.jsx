import MyPosts from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	console.log(props);
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				postsData={props.profilePage.postData}
				addPost={props.addPost}
				newPostText={props.profilePage.newPostText}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
};

export default Profile;
