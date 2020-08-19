import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const fetchCharactersFailed = (error) => {
    return {
        type: actionTypes.FETCH_CHARACTERS_FAILED,
        error: error
    };
};


export const fetchCharactersSuccess = (chars) =>{
  return {
      type: actionTypes.FETCH_CHARACTERS_SUCCESS,
      chars:chars
  };
};

export const fetchCharactersStart = () => {
    return {
        type: actionTypes.FETCH_CHARACTERS_START
    };
};
export const fetchCharacters = (token) =>{
  return dispatch =>{
    dispatch(fetchCharactersStart())
    axios.get('/characters.json?auth=' + token)
    .then( response => {
      console.log(response.data);
      const chars = [];
      for ( let key in response.data ) {
        console.log(response.data[key]);
          chars.push( {
              ...response.data[key],
              id: key
          } );
      }
      console.log(chars[0].id);

      dispatch(fetchCharactersSuccess(chars))
    })
    .catch(error => {
        dispatch(fetchCharactersFailed(error));
    });
  }
};
