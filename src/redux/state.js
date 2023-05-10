let store = {
	_state: {
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
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log(`LOl`);
	},
	addPost(postMessage) {
		let newPost = { id: 5, message: postMessage, likesCount: 0 };
		this._state.profilePage.postData.push(newPost);
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
};

export default store;
