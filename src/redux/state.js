const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD_POST";

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
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		debugger;
		//{type:`ADD-POST`}
		if (action.type === ADD_POST) {
			let newPost = { id: 5, message: this._state.profilePage.newPostText, likesCount: 0 };
			this._state.profilePage.postData.push(newPost);
			this._state.profilePage.newPostText = ``;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	},
};
export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default store;
