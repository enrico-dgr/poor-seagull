import React from "react";

// redux
import { connect } from "react-redux";
import { setLobby } from "../../redux/ducks/lobby";
import { setUser } from "../../redux/ducks/user";

// websocket
import gameWss from "../../services/gameWss";

const ReduxDispatcher = ({ dispatch }) => {
	React.useEffect(() => {
		gameWss.onmessage = (message) => {
			if (typeof message.channel !== "string") return;

			switch (message.channel) {
				case "LOBBY":
					dispatch(setLobby(JSON.parse(message.data)));
					return;

				case "USER":
					dispatch(setUser(JSON.parse(message.data)));
					return;
			}
		};
	}, []);

	return <></>;
};

export default connect()(ReduxDispatcher);
