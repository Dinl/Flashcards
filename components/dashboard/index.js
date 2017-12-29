//Import external components
import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	Platform, 
	TouchableOpacity, 
	StatusBar,
	ScrollView } from 'react-native';
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


	onDeckDetails = ({title}) => {
		this.props.navigation.navigate('DeckDetail', { name: title })
	}
	
	render() {
		const { decks } = this.props;
		if(decks && Object.keys(decks).length === 0 ){
			return(<Text>No decks avaiable</Text>)
		} else {
			return(
				<ScrollView style={styles.container}>			
					{Object.keys(decks).map( deck => 
						<Deck 
							key={decks[deck].title} 
							deck={decks[deck]}
							onDeckDetails={this.onDeckDetails}>
						</Deck>
					)}
				</ScrollView>
			)
		}
	}
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
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