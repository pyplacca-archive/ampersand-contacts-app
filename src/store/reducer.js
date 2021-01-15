/*
	Store/Context reducers
*/
function appReducer (state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'sign-in':
			return {...state, signedIn: payload}

		case 'update-user':
			return {
				...state,
				user: Object.assign(state.user, payload)
			}
	}
}

export default appReducer;
