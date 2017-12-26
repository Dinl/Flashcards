//Import external components
import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

//Import utils
import { white, gray, black, purple } from '../../utils/colors'

class Deck extends React.Component {
	render() {
		const { deck } = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity 	
					style={styles.row}
					onPress={() => this.props.navigation.navigate(
						'deckDetail', 
						{ deckId: key}
					) }>

					<Text style={styles.title}>{deck.title}</Text>
					<Text style={styles.numberQuestions}>{deck.questions.length}</Text>
					
				</TouchableOpacity>
			</View>
		);
	}
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: 100,
		padding: 20,
		//backgroundColor: white,
		//borderColor: gray
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