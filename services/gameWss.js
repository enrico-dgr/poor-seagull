import GE from "space-rock-scissor-paper-game-engine";

/**
 * @typedef { ReturnType< typeof GE.create > } Game
 */

/**
 * @typedef { { type: 'CREATE' ; payload: Pick<Game, "playerNum" | "maxMatchVictories"> } } ActionCreate
 */

/**
 * @typedef { { type: 'CREATE_PLAYERS' ; payload: { names: string[], gameInstance: Game } } } ActionCreatePlayers
 */

/**
 * @typedef { { type: 'START' ; payload: { game: Game } } } ActionStart
 */

/**
 * @typedef { { type: 'PLAY_MATCH' ; payload: { (property) payload: [moveOne: Move, moveTwo: Move, withPlayerName: string, gameInstance: Game } } } ActionPlayMatch
 */

/**
 * @typedef { ActionCreate | ActionCreatePlayers | ActionStart | ActionPlayMatch } Action
 */

/**
 * @type { Game }
 */
let gameInstance = {
	matches: [],
	maxMatchVictories: 0,
	players: [],
	playerNum: 0,
};

/**
 * @param { Game } state
 * @param { Action } action
 * @return { Game }
 */
const gameReducer = (state, action) => {
	switch (action.type) {
		case "CREATE":
			return GE.create(action.payload);

		case "CREATE_PLAYERS":
			return GE.createPlayers(
				action.payload.names,
				action.payload.gameInstance
			);

		case "START":
			const players = GE.scrumblePlayers(action.payload.game.players);

			return GE.createMatches({ ...action.payload.game, players });

		case "PLAY_MATCH":
			return GE.playMatch(...action.payload);

		default:
			return state;
	}
};

const wssEmulator = {
	/**
	 * @param {MessageEvent<Game>} ev
	 * @returns { void }
	 */
	onmessage: (ev) => {
		ev;
	},
	/**
	 * @param { Action } action
	 */
	send: (action) => {
		const newInst = gameReducer(gameInstance, action);
		wssEmulator.onmessage(newInst);
	},
};

const gameWss = wssEmulator;

export default gameWss;
