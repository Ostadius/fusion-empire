import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';



export const setAttributes = ( character ) => {
    return {
        type: actionTypes.SET_ATTRIBUTES,
        character:character,
    };
};

export const fetchCharacterFailed = () => {
    return {
        type: actionTypes.FETCH_CHARACTER_FAILED
    };
};

export const initCharacter = () => {
    return dispatch => {
        axios.get( 'https://fusion-empire.firebaseio.com/character.json' )
            .then( response => {
              console.log(response.data);
                console.log('blekh');
               dispatch(setAttributes(response.data));
            } )
            .catch( error => {
                dispatch(fetchCharacterFailed());
            } );
    };
};
