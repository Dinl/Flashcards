//Import external components
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo'

//Import Internal components
import reducer from './components/reducer'
import Dashboard from './components/dashboard'
import DeckDetail from './components/deckDetail'

//Import utils
import { white, purple } from './utils/colors'

const MainNavigator = StackNavigator({
	Home: {
		screen: Dashboard,
	},
	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	}
});

function FlashStatusBar ({ backgroundColor, ...props }) {
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <FlashStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>	
      </Provider>			
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center"
	}
})