import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://calendarific.com/api/v2'
});