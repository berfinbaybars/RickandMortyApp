import { GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR } from './actions';

const initialState = {
    characters: null,
    loading: false,
    error: false,
    character: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CHARACTERS_REQUEST:
            return {
                ...state,
                loading: true,
                characters: null,
                error: false,
            };
        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.characters,
                loading: false,
                error: false,
            };
        case GET_CHARACTERS_ERROR:
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
