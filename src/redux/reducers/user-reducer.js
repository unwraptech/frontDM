import { Types } from '../constants/user-types';

const initialState = {
    saveusermessage:"",
    userinfo:{},
    default_status: false,
    isLoggined:false,
    set_signup_message:''
};
export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_SIGN_IN_MESSAGE:
            return {...state, saveusermessage: action.payload}
        case Types.USER_INFO:
            return {...state, userinfo: action.payload}
        case Types.LOGIN_STATUS:
            return {...state, isLoggined: action.payload}
        case Types.DEFAULT_STATUS:
            return {...state, default_status: action.payload}
        case Types.SET_SIGNUP_MESSAGE:
            return {...state, set_signup_message: action.payload}
            default:
            return state;
    }
}