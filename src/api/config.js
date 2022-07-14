import axios from 'axios';
export const baseUrl = "https://www.fastmock.site/mock/477f993fb8b86e1e7fa9aa8ca719a766/bilibili-game";

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误ovo');
    }
);

export { axiosInstance };