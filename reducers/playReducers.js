import * as actions from '../actions/types';

export default function playReducer(action) {
	switch (action.type) {
		case actions.PLAYING
			return actions.PLAYING
		case actions.PAUSED
			return actions.PAUSED
	}
}
