//Import external components
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'

//Import Internal components
import { createDeck } from '../actions'

class AddDeck extends Component {
	state = {
	  text: ''
	}

	render() {
		const { text } = this.state

		return(
			<View></View>
		)
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		addDeck: (deck) => dispatch(addDeck(deck))
	}
}
  
export default connect(null, mapDispatchToProps)(AddDeck)