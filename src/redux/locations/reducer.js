import {
    GET_LOCATION_REQUEST,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_ERROR,
    GET_LOCATION_DETAIL_REQUEST,
    GET_LOCATION_DETAIL_SUCCESS,
    GET_LOCATION_DETAIL_ERROR,
} from './actions';

const initialState = {
    locations: [],
    loading: false,
    error: false,
    location: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_LOCATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_LOCATION_SUCCESS:
            return {
                ...state,
                locations: state.locations.concat(action.locations),
                loading: false,
                error: false,
            };
        case GET_LOCATION_ERROR:
            return {
                ...state,
                loading: true,
                error: true,
            };
        case GET_LOCATION_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
                locations: null,
                error: false,
            };
        case GET_LOCATION_DETAIL_SUCCESS:
            return {
                ...state,
                location: action.location,
                loading: false,
                error: false,
            };
        case GET_LOCATION_DETAIL_ERROR:
            return {
                ...state,
                loading: true,
                error: true,
            };
        default:
            return {
                ...state,
            };
    }
};
