import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
// Import reducers from feature microfrontends if needed

const rootReducer = combineReducers({
    mainCounter: counterReducer
  // Add reducers from feature microfrontends here
});

export default rootReducer;
