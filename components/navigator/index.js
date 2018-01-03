
//Import external components
import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo'

//Import Internal components
import Dashboard from '../dashboard'
import DeckDetail from '../deckDetail'
import AddDeck from '../addDeck'
import AddQuestion from '../questionAdd'
import Quiz from '../quiz'
import {
	c_stackDetckList,
	c_textStackDashboard,
	c_stackDeckDetail,
	c_textStackDeckDetail,
	c_stackAddQuestion,
	c_textStackAddQuestion,
	c_stackQuiz,
	c_textStackQuiz
} from '../../utils/colors'

const Tabs = TabNavigator({
	Dashboard: {
		screen: Dashboard,
		navigationOptions: {
			tabBarLabel: 'Your Decks',
			headerTitleStyle: {
				color: c_textStackDashboard
			}
		}
	},
	NewDeck: {
		screen: AddDeck,
		navigationOptions: {
			tabBarLabel: 'New Deck',
		}
	}
})

export const DeckNavigator = StackNavigator({
	DeckList: {
		screen: Tabs,
		navigationOptions: {
			title: 'Decks',
			headerStyle: {
				backgroundColor: c_stackDetckList,
			}
		}
	},
	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: ({ navigation }) => ({
			headerTintColor: c_textStackDeckDetail,
			title: `${navigation.state.params.name}`,
			headerStyle: {
				backgroundColor: c_stackDeckDetail,
			}
		})
	},
	AddQuestion: {
		screen: AddQuestion,
		navigationOptions: ({ navigation }) => ({
			headerTintColor: c_textStackAddQuestion,
			title: `${navigation.state.params.name}`,
			headerStyle: {
				backgroundColor: c_stackAddQuestion,
			}
		})
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: ({ navigation }) => ({
			headerTintColor: c_textStackAddQuestion,
			title: `Quiz`,
			headerStyle: {
				backgroundColor: c_stackQuiz,
			}
		})
	}
})