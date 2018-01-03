//Import external components
import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity,
	KeyboardAvoidingView,
	TextInput} from 'react-native';

//Import Internal components
import { connect } from 'react-redux'
import { addQuestion} from './actions'
import { postQuestion } from '../../utils/api'
import { 
	c_createQuestionButton,
	c_textCreateQuestionButton
} from '../../utils/colors'

class QuestionAdd extends Component {
	state = {
		question: '',
		answer: false,
	}

	onChangeQuestion = (text) => {
		this.setState({ question: text })
	}

	onChangeAnswer = (answer) => {
		this.setState({ question: answer })
	}

	onAddQuestion = () => {
		const { question, answer } = this.state
		if(question) {
			const deckId = this.props.navigation.state.params.name;
			this.props.addQuestion(deckId, { question, answer } );
			postQuestion(deckId , { question, answer } );
			this.props.navigation.goBack()
		}
	}

	render() {
		const { text } = this.state

		return(
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<View style={styles.content}>
					<TextInput
						placeholder='Question here'
						onChangeText={this.onChangeQuestion}
						style={styles.input}/>
					<TextInput
						placeholder='Answer here'
						onChangeText={this.onChangeAnswer}
						style={styles.input}/>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity 
						onPress={this.onAddQuestion}
						style={[styles.button, {backgroundColor: c_createQuestionButton}]}>
						<Text style={styles.buttonText}>Add Question</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		flex: 9,
		justifyContent: 'space-around',
	},
	footer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		width: 300,
		height: 50,
		padding: 10,
	},
	button: {
		flex: 1,
		height: 20,
		width: 150,
		padding: 10,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: c_textCreateQuestionButton,
		fontSize: 20
	}
})

const mapDispatchToProps = (dispatch) => {
	return {
		addQuestion: (deckId, question) => dispatch(addQuestion(deckId, question))
	}
}
  
export default connect(null, mapDispatchToProps)(QuestionAdd)