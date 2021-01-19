/*
	Store/Context reducers
*/
function appReducer (state, action) {
	const { type, payload } = action;

	switch (type) {
		case 'sign_in':
			return {...state, signedIn: true}

		case 'update_user':
			return {
				...state,
				user: Object.assign(state.user, payload)
			}

		case 'register':
			return {
				...state,
				user: payload,
				signedIn: true
			}
	}
}

export default appReducer;
