import { getGameListRequest,getVideoListRequest  } from "@/api/request";
import * as actionTypes from './constants'

export const changeGameList = (data) => ({
    type: actionTypes.CHANGE_GAME_LIST,
    data
})

export const getGameList = () => {
    return (dispatch) => {
        getGameListRequest()
            .then(data => {
                dispatch(changeGameList(data))
            })
    }
}

export const changeVideoList = (data) => ({
    type: actionTypes.CHANGE_VIDEO_LIST,
    data
})

export const getVideoList = () => {
    return (dispatch) => {
        getVideoListRequest()
            .then(data => 
                dispatch(changeVideoList(data))
            )
    }
}