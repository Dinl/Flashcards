//Import external components
import React from 'react';
import { View, StyleSheet, Platform, TouchableOpacity, StatusBar } from 'react-native';

//Import utils
import '../../utils/colors'

//Import Internal components
import Deck from '../deck'
import DeckDetail from '../deckDetail'
import Quiz from '../quiz'
import QuestionDetail from '../questionDetail'

/*
const MainNavigator = StackNavigator({
	Home: {
		screen: Dashboard,
	},
	deckDetail: {
		screen: DeckDetail,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: purple
			}
		}
	}
});
*/


export default class Dashboard extends React.Component {
	render() {
		return (
			<Text>Dashboard</Text>
		);
	}
}
  
const styles = StyleSheet.create({
	
})