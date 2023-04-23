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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogItem name={dialogData[0].name} id={dialogData[0].id} />
				<DialogItem name={dialogData[1].name} id={dialogData[1].id} />
				<DialogItem name={dialogData[2].name} id={dialogData[2].id} />
				<DialogItem name={dialogData[3].name} id={dialogData[3].id} />
				<DialogItem name={dialogData[4].name} id={dialogData[4].id} />
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
			</div>
		</div>
	);
};
export default Dialogs;
