import GE from "space-rock-scissor-paper-game-engine";

/**
 * @typedef { ReturnType< typeof GE.create > } Game
 */

const SET_GAME = "generic/game/SET_GAME";

/**
 *
 * @param { Game } game
 * @returns { { type: SET_GAME; payload: { game: Game } } }
 */
export const setGame = (game) => ({
	type: SET_GAME,
	payload: { game },
});

const INIT_STATE = {
	game: {
		matches: [],
		maxMatchVictories: 0,
		players: [],
		playerNum: 0,
	},
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_GAME:
			return { ...action.payload.game };

		default:
			return state;
	}
};
