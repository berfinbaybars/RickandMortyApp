import { request, apis } from '../../utils/api';

export const getLocations = async (page) => {
    if (!page) page = 1;
    try {
        const res = await request({
            api: apis.rm,
            endpoint: `/location?page=${page}`,
            method: 'GET',
        });
        return res;
    } catch (error) {
        console.log(error);
        return { error };
    }
};

export const getLocationDetail = async (id) => {
    try {
        const res = await request({
            api: apis.rm,
            endpoint: `/location/${id}`,
            method: 'GET',
        });

        return res;
    } catch (error) {
        console.log(error);
        return { error };
    }
};
