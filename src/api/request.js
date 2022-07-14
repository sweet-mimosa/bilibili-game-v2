import axios from 'axios'
import { axiosInstance } from './config';

export const getGameListRequest  = () =>
    axiosInstance.get(`/gamelist`)

export const getVideoListRequest  = () =>
    axiosInstance.get('/videoinfo')

export const getReserveListRequest  = () =>
    axiosInstance.get('/reservelist')