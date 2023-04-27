import MyPosts from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts postsData={props.state.postData} />
		</div>
	);
};

export default Profile;
