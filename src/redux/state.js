let renderEntireTree = () => {
	console.log(`LOl`);
};

let state = {
	profilePage: {
		postData: [
			{ id: 1, message: "Hi", likesCount: 12 },
			{ id: 2, message: "How is your It-camasutra", likesCount: 11 },
		],
		newPostText: `It - Camasutra`,
	},
	dialogPage: {
		messagesData: [
			{ id: 1, message: "Hi" },
			{ id: 2, message: "How is your It-camasutra" },
			{ id: 3, message: "Yo" },
		],
		dialogData: [
			{ name: `Alex`, id: 1 },
			{ name: `Denis`, id: 2 },
			{ name: `Masha`, id: 3 },
			{ name: `Victor`, id: 4 },
			{ name: `Valeryi`, id: 5 },
		],
	},
	sidebar: {},
};

export let addPost = (postMessage) => {
	let newPost = { id: 5, message: postMessage, likesCount: 0 };
	state.profilePage.postData.push(newPost);
	renderEntireTree();
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	renderEntireTree();
};
export const subscribe = (observer) => {
	renderEntireTree = observer;
};
export default state;
