import React from 'react';
import { createContext, useReducer } from 'react';
import appReducer from './reducer'


/*
	Store/Context state
*/
const initialState = {
	signedIn: false,
	user: {},
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
