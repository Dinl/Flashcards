//Import external components
import React from 'react';
import { 
	View, 
	Text,
	StyleSheet, 
	Platform, 
	TouchableOpacity, 
	StatusBar } from 'react-native';

import { connect } from 'react-redux'

//Import utils
import '../../utils/colors'

class Quiz extends React.Component {

	state = {
		count: 0,
		correct: 0,
		finish: false,
		showAnswer: false
	}

	toogleShowAnswer = () => {
		this.setState({showAnswer: !this.state.showAnswer});
	}

	onAnswer = (value) => {
		const { name } = this.props.navigation.state.params;
		const deck = this.props.decks[name];
		let state = this.state;

		if(value) {
			state.correct = state.correct + 1;
		}
		if((this.state.count + 1) == deck.questions.length) {
			state.finish= true;
		} else {
			state.count = this.state.count;
		}

		this.setState({...state});
	}

	render() {
		const { name } = this.props.navigation.state.params;
		const deck = this.props.decks[name];
		const actualQuestion = deck.questions[this.state.count];
		const totalQuestions = deck.questions.length;

		

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Question {this.state.count+1}/{totalQuestions}</Text>
				</View>
				<View style={styles.content}>
					<Text style={styles.question}>{actualQuestion.question}</Text>
					<TouchableOpacity
						onPress={this.toogleShowAnswer}
						style={styles.link}>
						<Text>{this.state.showAnswer ? "Hide Answer" : "Show Answer"}</Text>						
					</TouchableOpacity>
					{this.state.showAnswer &&
						<View>
							<Text>{actualQuestion.answer}</Text>
						</View>
					}
				</View>
				<View style={styles.footer}>
					{this.state.showAnswer &&
					<TouchableOpacity 
						onPress={this.onAnswer(true)}
						style={[styles.button, {backgroundColor: 'green'}]}>
						<Text style={styles.buttonText}>Correct</Text>
					</TouchableOpacity>
					}
					{this.state.showAnswer &&
					<TouchableOpacity 
						onPress={this.onAnswer(false)}
						style={[styles.button, {backgroundColor: 'red'}]}>
						<Text style={styles.buttonText}>Incorrect!</Text>
					</TouchableOpacity>
					}					
				</View>
			</View>
		);
	}
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 1
	},
	content: {
		flex: 3
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	button: {
		flex: 1,
		height: 60,
		width: 150,
		padding: 10,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontSize: 20
	}
})

const mapStateToProps = (decks) => {
	return { 
		decks
	}
}

export default connect(mapStateToProps)(Quiz)