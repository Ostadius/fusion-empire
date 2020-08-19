import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    chars: [],
    loading: true,

};



const fetchCharactersSuccess = ( state, action ) => {
    return updateObject( state, {
        chars: action.chars,
        loading: false
    } );
};
const fetchCharactersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCharactersFailed = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CHARACTERS_SUCCESS: return fetchCharactersSuccess( state, action );
        case actionTypes.FETCH_CHARACTERS_FAILED: return fetchCharactersFailed( state, action );
        case actionTypes.FETCH_CHARACTERS_START: return fetchCharactersStart( state, action  )
        default: return state;
    }
};

export default reducer;
