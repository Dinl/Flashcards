
//Import external components
import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

//Import Internal components
import Dashboard from '../dashboard'
import DeckDetail from '../deckDetail'
import AddDeck from '../addDeck'
import AddQuestion from '../questionAdd'
import Quiz from '../quiz'

const Tabs = TabNavigator({
	Dashboard: {
		screen: Dashboard,
		navigationOptions: {
		tabBarLabel: 'Your Decks',
			tabBarIcon: ({ tintColor }) => <Ionicons name='ios-card' size={30} color={tintColor} />
		}
	},
	NewDeck: {
		screen: AddDeck,
		navigationOptions: {
		tabBarLabel: 'New Deck',
		tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
		}
	}
})

export const DeckNavigator = StackNavigator({
	DeckList: {
		screen: Tabs,
		navigationOptions: {
			title: 'Decks',
			backgroundColor: 'red'
		}
	},
	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: ({ navigation }) => ({
			headerTintColor: 'white',
			title: `${navigation.state.params.name}`,
			headerStyle: {
				backgroundColor: 'purple',
			}
		})
	},
	AddQuestion: {
		screen: AddQuestion,
		navigationOptions: ({ navigation }) => ({
			headerTintColor: 'white',
			title: `${navigation.state.params.name}`,
			headerStyle: {
				backgroundColor: 'purple',
			}
		})
	},
	Quiz: {
		screen: Quiz
	}
})