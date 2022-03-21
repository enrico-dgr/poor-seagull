import React from "react";

// redux
import { connect } from "react-redux";
import { setLobby } from "../../redux/ducks/lobby";
import { setUser } from "../../redux/ducks/user";

// websocket
import gameWss from "../../services/gameWss";

const ReduxDispatcher = ({ dispatch }) => {
	React.useEffect(() => {
		console.log("reduxDispatcher mount");
		gameWss.onmessage = ({ data }) => {
			let parsedData = {};
			try {
				parsedData = JSON.parse(data);
			} catch (error) {
				console.log("Error: wss data is invalid JSON");
				return;
			}
			console.log(parsedData);

			if (typeof parsedData.channel !== "string") {
				console.log("Error: wss channel is not a string");
				return;
			}

			if (typeof parsedData.message === "string") {
				console.log(parsedData.message);
				return;
			}

			if (!parsedData.response) {
				console.log("Warning: wss response is undefined");
				return;
			}

			switch (parsedData.channel) {
				case "LOBBY":
					dispatch(setLobby(parsedData.response));
					return;

				case "USER":
					dispatch(setUser(parsedData.response));
					return;
			}
		};
	}, []);

	return <></>;
};

export default connect()(ReduxDispatcher);
