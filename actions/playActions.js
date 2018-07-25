import {
	PLAYING,
	PAUSED
} from './types'

export function playVideo() {
	return {
		type: PLAYING
	}
}

export function pauseVideo() {
	return {
		type: PAUSED
	}
}
