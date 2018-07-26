import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

import VideoPlayer from './VideoPlayer'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <VideoPlayer />
      </Provider>
    );
  }
}
