import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<div className={s.dialog + ` ` + s.active}>
					<NavLink to="/dialogs/1">Alex</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/2">Denis</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Masha</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Victor</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/5">Valeryi</NavLink>
				</div>
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
