import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9000/.netlify/functions/app' // The API (cloud function) URL
});

export default instance;
