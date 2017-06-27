//Actions
import * as types from '../actions/actionTypes';
//Initial Data
import initialState from './initialState';

export default function searchReducer(state = initialState.wine, action) {
    switch (action.type) {
        case types.FETCH_WINE_SUCCESS:
            return {...state, wines: action.wines};
        default:
            return { ...state };
    }
}
