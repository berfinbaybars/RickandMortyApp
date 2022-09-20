import { request, apis } from '../../utils/api';

export const getCharacters = async (ids) => {
    try {
        const res = await request({ api: apis.rm, endpoint: `/character/${ids}`, method: 'GET' });
        return res;
    } catch (error) {
        console.log(error);
        return { error };
    }
};
