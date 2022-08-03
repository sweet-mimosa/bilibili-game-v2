import { getHotListRequest,getHotTagRequest,getSearchResultRequest } from "@/api/request";
import * as actionTypes from './constants'

export const changeHotList = (data) => ({
    type: actionTypes.CHANGE_HOT_LIST,
    data
})

export const getHotList = () => {
    return (dispatch) => {
        getHotListRequest()
            .then(data => {
                dispatch(changeHotList(data))
            })
    }
}

export const changeHotTag = (data) => ({
    type: actionTypes.CHANGE_HOT_TAG,
    data
})

export const getHotTag = () => {
    return (dispatch) => {
        getHotTagRequest()
            .then(data => {
                dispatch(changeHotTag(data))
            })
    }
}

export const changeSearchResult = (data) => ({
    type: actionTypes.CHANGE_SEARCH_RESULT,
    data
})

export const getSearchResult = () => {
    return (dispatch) => {
        getSearchResultRequest()
            .then(data => {
                dispatch(changeSearchResult(data))
            })
    }
}