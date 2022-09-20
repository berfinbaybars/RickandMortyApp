export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

export const getCharacters = (payload) => ({ type: GET_CHARACTERS_REQUEST, payload });