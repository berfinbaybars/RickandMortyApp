import { combineReducers } from 'redux';
import locations from './locations/reducer';
import characters from './characters/reducer';

export default combineReducers({ location: locations, character: characters });
