//Import external components
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//Import Internal components
//import reducer from './components/reducer'
import Dashboard from './components/dashboard'

export default class App extends React.Component {
  render() {
    return (
		<View>
			<Text>agggggggggh</Text>
		</View>		
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
