export const rootState = {
	signedIn: false,
	user: null,
}

function rootReducer (state=rootState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'sign_in':
			return {
				...state,
				signedIn: true,
				user: payload
			}

		case 'register':
			return {
				...state,
				user: payload,
				signedIn: true
			}

		case 'sign_out':
			return {
				...state,
				user: null,
				signedIn: false
			}
	}
}

export default rootReducer;
