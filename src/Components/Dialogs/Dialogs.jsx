import s from "./Dialog.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreater, updateNewMessageBodyCreator } from "../../redux/state";

const Dialogs = (props) => {
	const messagesElement = props.state.messagesData.map((message) => <Message message={message.message} />);
	const dialogsElement = props.state.dialogData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));

	let newMessageBody = props.state.newMessageBody;
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};
	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreater());
	};
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>{dialogsElement}</div>
			<div className={s.messages}>{messagesElement}</div>
			<div>
				<div>
					<textarea
						value={newMessageBody}
						onChange={onNewMessageChange}
						placeholder="Enter your message"
					></textarea>
				</div>
				<div>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
		</div>
	);
};
export default Dialogs;
