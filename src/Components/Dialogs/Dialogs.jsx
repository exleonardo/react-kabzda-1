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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogItem name="Alex" id="1" />
				<DialogItem name="Denis" id="2" />
				<DialogItem name="Masha" id="3" />
				<DialogItem name="Victor" id="4" />
				<DialogItem name="Valeryi" id="5" />
			</div>
			<div className={s.messages}>
				<Message message="Hi" />
				<Message message="How is your It-camasutra" />
				<Message message="Yo" />
			</div>
		</div>
	);
};
export default Dialogs;
