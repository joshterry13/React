//Redux
import { combineReducers } from 'redux';
//Reducers
import wine from './wineReducer';

const rootReducer = combineReducers({
    wine
});

export default rootReducer;

