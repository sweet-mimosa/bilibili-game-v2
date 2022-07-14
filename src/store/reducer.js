import { combineReducers } from "redux";
import { reducer as chooseReducer } from '@/pages/Choose/store/index'


export default combineReducers({
    choose: chooseReducer
});