import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    character: null,
    error:"VAHBAHSBHABH",
    loading:false,
};


const setAttributes = (state, action) => {
    return updateObject( state, {
        character: {
            name:action.character.name,
            race:action.character.race,
            class:action.character.class,
            moon:action.character.moon,
            gender:action.character.gender,
            exElement:action.character.exElement,
        },
        error:false,
        // loading:false
    } );
};
const fetchCharacterFailed = (state, action) => {
    return updateObject( state, { error: true /*, loading:true*/ } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ATTRIBUTES: return setAttributes( state, action );

        default: return state;
    }
};

export default reducer;
