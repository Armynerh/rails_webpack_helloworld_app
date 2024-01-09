// app/javascript/reducers/index.js
import { combineReducers } from 'redux';

const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return action.payload;
    default:
      return state;
  }
};

export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,
});

export default combineReducers({
  greeting: greetingReducer,
});
