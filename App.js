import React from 'react';
import { StyleSheet, Text, View, WebView, Platform } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={ styles.WebViewContainer }
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: 'https://www.youtube.com/watch?v=3NhHqPA8nIs' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 300
  },

  WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 50 : 0,
 
  },
});
