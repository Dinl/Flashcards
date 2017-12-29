//Import external components
import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

//Import utils
import { white, gray, black, purple } from '../../utils/colors'

class Deck extends React.Component {
	render() {
		const { deck, onDeckDetails } = this.props;
		return (
			<TouchableOpacity 
				style={styles.container}
				onPress={() => onDeckDetails(deck) }>
				
				<Text style={styles.title}>{deck.title}</Text>
				<Text style={styles.numberQuestions}>{deck.questions.length}</Text>
				
			</TouchableOpacity>
		);
	}
}
  
const styles = StyleSheet.create({
	container: {
		height: 100,
		borderWidth: 1,
		borderColor: '#c5c6b6',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {

	},
	row: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		color: black,
		fontSize: 30,
		flex: 80
	},
	numberQuestions: {
		color: purple,
		fontSize: 25,
		flex: 20
	}
})

function mapStateToProps ({deck}) {
    return {
		
    }
}

function mapDispatchToProps (dispatch) {
	return {
        
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck)