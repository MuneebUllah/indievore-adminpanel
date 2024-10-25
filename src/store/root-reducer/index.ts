import { combineReducers } from 'redux';
import userSlice from '../user-slice/index';

const rootReducer = combineReducers({
  user: userSlice,
});

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
