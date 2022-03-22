import GE from "space-rock-scissor-paper-game-engine";

/**
 * @typedef { ReturnType< typeof GE.create > } Game
 */

const SET_LOBBY = "generic/game/SET_LOBBY";

/**
 *
 * @param { { game: Game; id: number; allLobbies: [] } } lobby
 * @returns { { type: SET_LOBBY; payload: { lobby: { game: Game; id: number; allLobbies: [] } } } }
 */
export const setLobby = (lobby) => ({
	type: SET_LOBBY,
	payload: { lobby },
});

const INIT_STATE = {
	allLobbies: [],
	game: {
		matches: [],
		maxMatchVictories: 0,
		players: [],
		playerNum: 0,
	},
	name: "",
	id: -1,
	users: [],
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_LOBBY:
			return { ...state, ...action.payload.lobby };

		default:
			return state;
	}
};
