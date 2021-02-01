// import React from 'react';
// import { createContext, useReducer } from 'react';
import rootReducer, { rootState } from './reducer';

import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage as storage } from 'react-native';

/*
export const AppContext = createContext();

function AppProvider (props) {
	const [state, dispatch] = useReducer(rootReducer, rootState);

	return (
		<AppContext.Provider value={{state, dispatch}}>
			{ props.children }
		</AppContext.Provider>
	)
}

export default AppProvider;
*/

const store = createStore(persistReducer(
	// configuration for store persistence
	{
		key: 'root',
		storage
	},
	rootReducer
));

const persistor = persistStore(store);

export {
	store,
	persistor
}
