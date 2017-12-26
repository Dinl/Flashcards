//Import external components
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'

//Import Internal components
import { addQuestion } from '../actions'

class QuestionAdd extends Component {
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
		addQuestion: (data) => dispatch(addQuestion(data))
	}
}
  
export default connect(null, mapDispatchToProps)(QuestionAdd)