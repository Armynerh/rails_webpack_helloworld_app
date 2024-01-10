import { configureStore } from '@reduxjs/toolkit';
import GreetingReducer from './reducers/GreetingSlice';

const store = configureStore({
  reducer: {
    greeting: GreetingReducer,
  },
});

export default store;