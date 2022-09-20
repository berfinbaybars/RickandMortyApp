import axios from 'axios';

export const apis = {
    rm: 'https://rickandmortyapi.com/api',
};

export const request = async ({ api, endpoint, method, data = {} }) => {
    const req = axios.create({
        baseURL: api,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (method.toUpperCase() === 'POST') {
        try {
            const res = await req.post(endpoint, data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    } else if (method.toUpperCase() === 'GET') {
        try {
            const res = await req.get(endpoint);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
};
