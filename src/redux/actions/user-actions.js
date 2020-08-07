import API from "../apis/user-api";
import {Types} from "../constants/user-types" 
export function authenticate_USER(params) {
  
  return async function (dispatch, getState) {
    try {
      let resp = await API.authenticate_user(params);
      console.log(resp);
      if (resp && resp.data && resp.data.message ){
        let _data = resp.data;
        console.log(_data);
        if (_data.message === 'Login successfully'){
          dispatch({ type: Types.SET_SIGN_IN_MESSAGE,payload: _data.message});
          dispatch({ type: Types.USER_INFO,payload: _data.body});
          dispatch({ type: Types.LOGIN_STATUS,payload: true});

        }else{
          dispatch({ type: Types.SET_SIGN_IN_MESSAGE,payload: _data.message});
          dispatch({ type: Types.USER_INFO,payload: {}});
          dispatch({ type: Types.LOGIN_STATUS,payload: false});

        }
      }
    
      // return resp;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function register_USER(params) {
  
  return async function (dispatch, getState) {
    try {
      let resp = await API.register_user(params);
      console.log(resp);
      if (resp && resp.data && resp.data.message ){
        let _data = resp.data;
        console.log(_data);
        if (_data.message){
          dispatch({ type: Types.SET_SIGN_IN_MESSAGE,payload: _data.message});
          
        }else{
          dispatch({ type: Types.SET_SIGNUP_MESSAGE,payload: 'Some error occured please try again'});
          
        }
      }
    
      // return resp;
    } catch (e) {
      return { "error": true };
    }
  };
}