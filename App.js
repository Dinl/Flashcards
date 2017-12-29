//Import external components
import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//Import Internal components
import { DeckNavigator } from './components/navigator'
import reducer from './components/reducer'

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <DeckNavigator />
        </View>	
      </Provider>			
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})