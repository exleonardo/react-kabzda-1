import MyPosts from "./MyPosts";
import s from "./Profile.module.css";
const Profile = () => {
	return (
		<div>
			<div>
				<img
					src="https://cdn.tripster.ru/thumbs2/f8b8dd24-c646-11ed-b9bb-b6ff1f9232bb.1220x600.jpeg"
					alt="content"
				></img>
			</div>
			<div>ava + descr</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
