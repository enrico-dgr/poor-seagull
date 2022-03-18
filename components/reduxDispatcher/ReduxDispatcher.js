import React from "react";

// rn
import { View, Text } from "react-native";

// redux
import { connect } from "react-redux";
import { setGame } from "../../redux/ducks/game";
import gameWss from "../../services/gameWss";

const ReduxDispatcher = ({ dispatch }) => {
	React.useEffect(() => {
		gameWss.onmessage = (game) => dispatch(setGame(game));
	}, []);

	return (
		<View>
			<Text>ReduxDispatcher</Text>
		</View>
	);
};

export default connect()(ReduxDispatcher);
