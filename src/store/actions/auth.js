import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch =>{
    setTimeout(() =>{
      dispatch(logout());
    },expirationTime *1000 )
  };
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
          email:email,
          password:password,
          returnSecureToken: true
        };
        console.log(authData);
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFMJel7d_aNDDOgw7rzetMPvzaEs81m1g';
        if(!isSignup){
          url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFMJel7d_aNDDOgw7rzetMPvzaEs81m1g'
        }
        axios.post(url, authData)
        .then(response => {
          console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error))
        });
// G2y7jjmtHlexvhJuqCXBdjQVNHM2
// G2y7jjmtHlexvhJuqCXBdjQVNHM2

    };
};
