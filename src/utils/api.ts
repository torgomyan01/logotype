import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const GetPosts = () => axios.get('https://cloud.codesupply.co/endpoint/react/data.json');

//Without this cookies does not send
// axios.defaults.withCredentials = true;
