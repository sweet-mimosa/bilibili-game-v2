import * as actionTypes from './constants'

const defaultState = {
    hotList: [],
    hotTag: [],
    serachResult: []
}

export default (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.CHANGE_HOT_LIST:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.CHANGE_HOT_TAG:
            return {
                ...state,
                hotTag: action.data
            }
        case actionTypes.CHANGE_SEARCH_RESULT:
            return {
                ...state,
                serachResult: action.data
            }
        default :
            return state;
    }
}
