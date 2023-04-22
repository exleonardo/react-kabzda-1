import s from "./Dialog.module.css";

const Dialogs = (props) => {
	return (
		<div className="dialogs">
			<div className="dialogs-item">
				<div className="dialog">Alex</div>
				<div className="dialog">Artem</div>
				<div className="dialog">Sveta</div>
				<div className="dialog">Victor</div>
				<div className="dialog">Valeryi</div>
			</div>
			<div className="messages">
				<div className="className">Hi</div>
				<div className="className">How is your It-camasutra</div>
				<div className="className">Yo</div>
			</div>
		</div>
	);
};
export default Dialogs;
