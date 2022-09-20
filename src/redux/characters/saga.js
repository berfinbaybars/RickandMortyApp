import { call, put, takeLatest } from 'redux-saga/effects';
import { getCharacters } from './requests';
import { GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR } from './actions';

function* fetchCharacters(action) {
    try {
        const res = yield call(getCharacters, action.payload);
        yield put({ type: GET_CHARACTERS_SUCCESS, characters: Array.isArray(res) ? res : [res] });
    } catch (error) {
        yield put({ type: GET_CHARACTERS_ERROR, error });
    }
}

function* saga() {
    yield takeLatest(GET_CHARACTERS_REQUEST, fetchCharacters);
}

export default saga;
