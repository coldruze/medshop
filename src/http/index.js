import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

$host.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

$host.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
}, error => {
    console.error('Error Response:', error);
    return Promise.reject(error);
});

export {
    $host,
    $authHost
}
