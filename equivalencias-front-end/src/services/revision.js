import axios from 'axios';
import { config } from '../config/config';

export async function getEquivalencia(id) {
    const apiResponse = await axios.get(
        `${config.apiUrl}/equivalencias/general/${id}`
    );
    return apiResponse.data;
}

export async function putEquivalencia(id) {
    const apiResponse = await axios.put(`${config.apiUrl}/equivalencias/${id}`);
    return apiResponse.data;
}
