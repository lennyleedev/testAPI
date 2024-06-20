import axios from 'axios';

export async function lennyCreateUser(userData) {
    try {
        const response = await axios.post('https://prod-13.southeastasia.logic.azure.com:443/workflows/6f76729365ec408688ec980f77e1700e/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=3YAFwhGaRDBGsJLiRQXKI0OHqCOfnavTAcXa3s_2mR0', userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}