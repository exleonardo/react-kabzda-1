import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.dialog + ` ` + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};
const Message = (props) => {
	return <div className={s.dialog}>{props.message}</div>;
};
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
