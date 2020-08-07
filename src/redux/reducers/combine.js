import { combineReducers } from "redux";
import dashboardReducer from '../reducers/dashboard-combiner';
import userReducer from '../reducers/user-reducer';
import paginationReducer from "./pagination-reducer";

const reducers = combineReducers({
     dashboard: dashboardReducer,
     user :userReducer,
     pagination: paginationReducer

});

export default reducers;
