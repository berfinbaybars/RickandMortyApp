import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk'; //Actions that have async functions need this.
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
