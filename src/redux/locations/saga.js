import { call, put, takeLatest } from 'redux-saga/effects';
import { getLocations, getLocationDetail } from '../locations/requests';
import {
    GET_LOCATION_DETAIL_ERROR,
    GET_LOCATION_DETAIL_REQUEST,
    GET_LOCATION_DETAIL_SUCCESS,
    GET_LOCATION_ERROR,
    GET_LOCATION_REQUEST,
    GET_LOCATION_SUCCESS,
} from './actions';

function* fetchLocations(action) {
    try {
        const res = yield call(getLocations, action.payload);
        yield put({
            type: GET_LOCATION_SUCCESS,
            locations: res.results,
            count: res.info.count,
            pageCount: res.info.pages,
        });
    } catch (error) {
        yield put({ type: GET_LOCATION_ERROR, error });
    }
}

function* fetchLocationDetail(action) {
    try {
        const res = yield call(getLocationDetail, action.payload);
        yield put({ type: GET_LOCATION_DETAIL_SUCCESS, location: res });
    } catch (error) {
        yield put({ type: GET_LOCATION_DETAIL_ERROR, error });
    }
}

function* saga() {
    yield takeLatest(GET_LOCATION_REQUEST, fetchLocations);
    yield takeLatest(GET_LOCATION_DETAIL_REQUEST, fetchLocationDetail);
}

export default saga;
