import * as actionTypes from './constants'

const defaultState = {
    gameList: [],
    videoList: []
}

export default (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.CHANGE_GAME_LIST:
            return {
                ...state,
                gameList: action.data
            }
        case actionTypes.CHANGE_VIDEO_LIST:
            return {
                ...state,
                videoList: action.data
            }
        default :
            return state;
    }
}
