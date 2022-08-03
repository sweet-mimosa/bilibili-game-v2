import axios from 'axios'
import { axiosInstance } from './config';

export const getGameListRequest  = () =>
    axiosInstance.get(`/gamelist`)

export const getVideoListRequest  = () =>
    axiosInstance.get('/videoinfo')

export const getReserveListRequest  = () =>
    axiosInstance.get('/reservelist')

export const getHotListRequest  = () =>
    axiosInstance.get('/search/hotlist')

export const getHotTagRequest  = () =>
    axiosInstance.get('/search/hottag')

export const getSearchResultRequest  = () =>
    axiosInstance.get('/search/result')