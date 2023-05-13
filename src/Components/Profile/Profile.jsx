import MyPosts from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	debugger;

	return (
		<div>
			<ProfileInfo />
			<MyPosts
				postsData={props.profilePage.postData}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}
			/>
		</div>
	);
};

export default Profile;
