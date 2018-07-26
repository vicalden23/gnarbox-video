import * as actions from '../actions/types';

export default function playReducer(state = true, action) {
	switch (action.type) {
		case actions.PLAYING:
			return true
		case actions.PAUSED:
			return false
		default:
			return state
	}
}
