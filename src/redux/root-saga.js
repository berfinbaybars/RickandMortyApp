import { all } from 'redux-saga/effects';
import locationSaga from './locations/saga';
import characterSaga from './characters/saga';

export default function* rootSaga() {
    yield all([locationSaga(), characterSaga()]);
}
