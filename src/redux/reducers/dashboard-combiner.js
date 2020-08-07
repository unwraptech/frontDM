import { Types } from '../constants/dashoard-types';

const initialState = {
    saveusermessage:"",
};
export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        // case Types.GET_LAPOP_LIST:
            // return {...state, saveusermessage: 'User saved'}
              default:
            return state;
    }
}