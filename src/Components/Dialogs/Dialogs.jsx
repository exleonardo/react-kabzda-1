import s from "./Dialog.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
	const dialogData = [
		{ name: `Alex`, id: 1 },
		{ name: `Denis`, id: 2 },
		{ name: `Masha`, id: 3 },
		{ name: `Victor`, id: 4 },
		{ name: `Valeryi`, id: 5 },
	];
	const messagesData = [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "How is your It-camasutra" },
		{ id: 3, message: "Yo" },
	];

	const messagesElement = messagesData.map((message) => <Message message={message.message} />);
	const dialogsElement = dialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>{dialogsElement}</div>
			<div className={s.messages}>{messagesElement}</div>
		</div>
	);
};
export default Dialogs;
