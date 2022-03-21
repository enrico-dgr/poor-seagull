const SET_USER = "generic/user/SET_USER";

/**
 *
 * @param { { name: string; id: number; } } user
 * @returns { { type: SET_USER; payload: { user: { name: string; id: number; } } } }
 */
export const setUser = (user) => ({
	type: SET_USER,
	payload: { user },
});

const INIT_STATE = {
	name: "",
	id: 0,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...action.payload.user };

		default:
			return state;
	}
};
