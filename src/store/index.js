import React from 'react';
import { createContext, useReducer } from 'react';
import appReducer from './reducer'


/*
	Store/Context state
*/
const initialState = {
	signedIn: false,
	user: {
		name: 'Lady-Omega Hammond',
		role: 'Team Lead & Co-Founder',
		photo: {
			uri: 'https://www.ampersandllc.co/wp-content/uploads/2019/10/Miss-Hammond.jpg'
		},
		telephone: '+233 12 345 6789',
		email: 'ladyomega@ampersandllc.co',
		location: 'Accra, Ghana',
		social: {
			twitter: '@Lonnah',
			linkedin: 'lady omega',
		}
	},
}

export const AppContext = createContext();

function AppProvider (props) {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<AppContext.Provider value={{state, dispatch}}>
			{ props.children }
		</AppContext.Provider>
	)
}

export default AppProvider;
