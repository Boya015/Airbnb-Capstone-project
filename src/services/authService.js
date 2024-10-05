import axios from 'axios';

export const login = async (credentials) => {
    const res = await axios.post('/api/auth/login', credentials);
    return res.data;
}