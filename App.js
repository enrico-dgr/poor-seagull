// redux
import { Provider } from "react-redux";
// expo
import { StatusBar } from "expo-status-bar";
// rn
import { StyleSheet, Text, View } from "react-native";
import store from "./store";
import ReduxDispatcher from "./components/reduxDispatcher/ReduxDispatcher";
// react router v6
import { NativeRouter, Routes, Route } from "react-router-native";
import Home from "./screens/home/Home";
import Role from "./screens/role/Role";
import LobbyList from "./screens/lobbyList/LobbyList";
import Tournament from "./screens/tournament/Tournament";
import Game from "./screens/game/Game";
export default function App() {
	return (
		<NativeRouter>
			<Provider store={store}>
				<ReduxDispatcher />
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
