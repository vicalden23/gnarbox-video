import React from 'react';
import PropTypes from 'prop-types';
import {
	Text, 
	View, 
	WebView, 
	Platform,
	Button,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Video } from 'expo'

import * as actions from './actions';

const VideoPlayer = ({ playing, handlePauseVideo, handlePlayVideo }) => {
  return (
    <View>
    	<Video
				source={require('./GNARBOX-Kickstarter-Video.mp4')}
				shouldPlay={playing}
				resizeMode="cover"
				style={{ width: 375, height: 400 }}
			/>
      <Button 
      	onPress={handlePlayVideo}
      	title='Play'
      	color='#841584'
      />
      <Button 
      	onPress={handlePauseVideo}
      	title='Pause'
      	color='#841584'
      />
    </View>
  );
}

VideoPlayer.propTypes = {
  playing: PropTypes.bool.isRequired,
  handlePauseVideo: PropTypes.func.isRequired,
  handlePlayVideo: PropTypes.func.isRequired,
}

function mapStatetoProps(state) {
  return {
  	playing: state.playing
  }
}

const mapDispatchToProps = dispatch => ({
  handlePlayVideo: () => {
    dispatch(actions.playVideo())
  },
  handlePauseVideo: () => {
    dispatch(actions.pauseVideo())
  }
})

export default connect(mapStatetoProps, mapDispatchToProps)(VideoPlayer)
