//Import external components
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux'

//Import utils
import { receiveDecks } from './actions'
import { white, purple } from '../../utils/colors'

//Import API
import { fetchDecks } from '../../utils/api'

//Import Internal components
import Deck from '../deck'
import DeckDetail from '../deckDetail'
import Quiz from '../quiz'
import QuestionDetail from '../questionDetail'


class Dashboard extends Component {
	
	state= {
		ready: false
	}

	componentDidMount() {
		fetchDecks().then(
			decks => this.props.receiveDecks(decks)
		)
	}
	
	render() {
		const { decks } = this.props;
		debugger
		return (
			<View style={styles.container}>
				{decks && Object.keys(decks).map( (key) => {
					const deck = decks[key];
					return (
						<Deck 
							key={key} 
							deck={deck}>
						</Deck>
					)
					
				})}				
			</View>
		);
	}
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start'
	}
})

function mapStateToProps (decks) {
    return {
		decks
    }
}

function mapDispatchToProps (dispatch) {
	return {
        receiveDecks: (decks) => dispatch(receiveDecks(decks))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)