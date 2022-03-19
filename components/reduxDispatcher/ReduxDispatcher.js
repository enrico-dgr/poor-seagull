import React from "react";

// rn
import { View, Text } from "react-native";

// redux
import { connect } from "react-redux";
import { setLobby } from "../../redux/ducks/lobby";
import gameWss from "../../services/gameWss";

const ReduxDispatcher = ({ dispatch }) => {
	React.useEffect(() => {
		gameWss.onmessage = (message) =>
			dispatch(setLobby(JSON.parse(message.data)));
	}, []);

	return <></>;
};

export default connect()(ReduxDispatcher);
