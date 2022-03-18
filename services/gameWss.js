import GE from "space-rock-scissor-paper-game-engine";

/**
 * @typedef { ReturnType< typeof GE.create > } Game
 */

/**
 * @typedef { { type: 'CREATE' ; payload: Parameters< typeof GE.create > } } ActionCreate
 */

/**
 * @typedef { { type: 'CREATE_PLAYERS' ; payload: Parameters< typeof GE.createPlayers > } } ActionCreatePlayers
 */

/**
 * @typedef { { type: 'START' ; payload: { game: Game } } } ActionStart
 */

/**
 * @typedef { { type: 'PLAY_MATCH' ; payload: Parameters< typeof GE.playMatch > } } ActionPlayMatch
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
			return GE.create(...action.payload);

		case "CREATE_PLAYERS":
			return GE.createPlayers(...action.payload);

		case "START":
			const players = GE.scrumblePlayers(action.payload.game.players);

			return GE.createMatches({ ...action.payload.game, players });

		case "PLAY_MATCH":
			return GE.playMatch(...action.payload);

		default:
			return state;
	}
};

/**
 * @type { 'LOCAL' | 'WSS' }
 */
const MODE = "LOCAL";

/**
 * @typedef { Pick<WebSocket, 'onopen' | 'onmessage' | 'send' > } WssEmulator
 */

/**
 * @type { WssEmulator }
 */
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

/**
 * @type { WssEmulator | WebSocket }
 */
const gameWss = MODE === "LOCAL" ? wssEmulator : new WebSocket("");

export default gameWss;
