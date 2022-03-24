import React from "react";

// expo
import { loadAsync } from "expo-font";

// redux
import { Provider } from "react-redux";

// rn
import store from "./store";
import ReduxDispatcher from "./components/reduxDispatcher/ReduxDispatcher";

// react router v6
import { NativeRouter, Routes, Route } from "react-router-native";

// screens
import Home from "./screens/home/Home";
import Role from "./screens/role/Role";
import LobbyList from "./screens/lobbyList/LobbyList";
import Tournament from "./screens/tournament/Tournament";
import Game from "./screens/game/Game";

// ui
import Settings from "./components/ui/settings/Settings";

export default function App() {
	const [state, setState] = React.useState({
		fontLoaded: false,
	});

	React.useEffect(() => {
		loadAsync({ Toons: require("./assets/fonts/Mikey.ttf") }).then(() => {
			setState((prev) => ({ ...prev, fontLoaded: true }));
		});
	}, []);

	if (!state.fontLoaded) {
		return null;
	}

	return (
		<NativeRouter>
			<Provider store={store}>
				<ReduxDispatcher />
				<Settings />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/role" element={<Role />} />
					<Route path="/lobbylist" element={<LobbyList />} />
					<Route path="/tournament" element={<Tournament />} />
					<Route path="/game" element={<Game />} />
				</Routes>
			</Provider>
		</NativeRouter>
	);
}
