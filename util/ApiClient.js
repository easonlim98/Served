import { apiUrl } from '../constants/env';
import axios from 'axios';

const client = axios.create({
    baseURL: apiUrl,
    timeout: 100000,
});

const GET = async function (url) {
    try {
        const { data } = await client.get(url);
        if (data.error) {

        }
        else {
            return data;
        }
    }
    catch (err) {

    }
}

const POST = async function (url, params) {
    try {
        const { data } = await client.post(url, params);
        if (data.error) {

        }
        else {
            return data;
        }
    }
    catch (err) {

    }
}

const PATCH = async function (url, params) {
    try {
        const { data } = await client.patch(url, params);
        if (data.error) {

        }
        else {
            return data;
        }
    }
    catch (err) {

    }
}

const ApiClient = {
    GET,
    POST,
    PATCH,
}

export default ApiClient