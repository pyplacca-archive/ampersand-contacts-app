// import React from 'react';
// import { createContext, useReducer } from 'react';
import appReducer from './reducer';

import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage as storage } from 'react-native';


/*
	Store/Context state
*/
const initialState = {
	signedIn: false,
	user: null,
	// user: {
	// 	name: 'Lady-Omega Hammond',
	// 	role: 'Team Lead & Co-Founder',
	// 	photo: {
	// 		uri: 'https://www.ampersandllc.co/wp-content/uploads/2019/10/Miss-Hammond.jpg'
	// 	},
	// 	telephone: '+233 12 345 6789',
	// 	email: 'ladyomega@ampersandllc.co',
	// 	location: 'Accra, Ghana',
	// 	social: {
	// 		twitter: '@Lonnah',
	// 		linkedin: 'lady omega',
	// 	}
	// },
	registered_users: {}
}

// export const AppContext = createContext();

// function AppProvider (props) {
// 	const [state, dispatch] = useReducer(appReducer, initialState);

// 	return (
// 		<AppContext.Provider value={{state, dispatch}}>
// 			{ props.children }
// 		</AppContext.Provider>
// 	)
// }

// export default AppProvider;

const store = createStore(persistReducer(
	// configuration for store persistence
	{
		key: 'root',
		storage
	},
	appReducer
));

const persistor = persistStore(store);

export {
	store,
	persistor
}
