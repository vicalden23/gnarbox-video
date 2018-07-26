import {combineReducers} from 'redux';

import playReducer from './playReducers'

export default combineReducers({playing: playReducer})
