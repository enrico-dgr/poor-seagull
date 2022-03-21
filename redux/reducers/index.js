import { combineReducers } from "redux";
import lobby from "../ducks/lobby";
import user from "../ducks/user";

export default combineReducers({
	lobby,
	user,
});
