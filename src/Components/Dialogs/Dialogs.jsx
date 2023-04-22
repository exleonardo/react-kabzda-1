import s from "./Dialog.module.css";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<div className={s.dialog + ` ` + s.active}>Alex</div>
				<div className={s.dialog}>Artem</div>
				<div className={s.dialog}>Sveta</div>
				<div className={s.dialog}>Victor</div>
				<div className={s.dialog}>Valeryi</div>
			</div>
			<div className={s.messages}>
				<div className={s.dialog}>Hi</div>
				<div className={s.dialog}>How is your It-camasutra</div>
				<div className={s.dialog}>Yo</div>
			</div>
		</div>
	);
};
export default Dialogs;
