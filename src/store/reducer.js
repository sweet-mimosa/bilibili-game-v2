import { combineReducers } from "redux";
import { reducer as chooseReducer } from '@/pages/Choose/store/index'
import { reducer as searchReducer } from '@/pages/Search/store/index'

export default combineReducers({
    choose: chooseReducer,
    search: searchReducer
});