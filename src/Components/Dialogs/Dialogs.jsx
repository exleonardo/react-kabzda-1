import s from "./Dialog.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
	debugger;
	const messagesElement = props.state.messagesData.map((message) => <Message message={message.message} />);
	const dialogsElement = props.state.dialogData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>{dialogsElement}</div>
			<div className={s.messages}>{messagesElement}</div>
		</div>
	);
};
export default Dialogs;
