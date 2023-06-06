import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers';
import countReducer from './Slices/counterSlice';

const store = configureStore({
  reducer: {
    count: countReducer,
  }});

export default store