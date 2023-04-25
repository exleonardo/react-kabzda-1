import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	// const postData = [
	// 	{ id: 1, message: "Hi", likesCount: 12 },
	// 	{ id: 2, message: "How is your It-camasutra", likesCount: 11 },
	// ];

	return (
		<div>
			<ProfileInfo />
			<MyPosts postsData={props.postsData} />
		</div>
	);
};

export default Profile;
