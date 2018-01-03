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

	goDeck = () => {
		this.props.navigation.goBack();
	}

	restart = () => {
		this.setState({
			count: 0,
			correct: 0,
			finish: false,
			showAnswer: false
		});
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
			state.showAnswer = false;
			state.count = this.state.count + 1;
		}
		
		this.setState({...state});
	}

	render() {
		const { name } = this.props.navigation.state.params;
		const deck = this.props.decks[name];
		const actualQuestion = deck.questions[this.state.count];
		const totalQuestions = deck.questions.length;

		
		if(this.state.finish) {
			return (
				<View style={styles.container}>
					<View style={styles.headerResults}>
						<Text style={styles.mainTitle}>Results</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.result}>Correct: {this.state.correct}</Text>
						<Text style={styles.result}>Incorrect: {totalQuestions - this.state.correct}</Text>
					</View>
					<View style={styles.footer}>
						<TouchableOpacity 
							onPress={() => this.goDeck()}
							style={[styles.button, {backgroundColor: 'blue'}]}>
							<Text style={styles.buttonText}>Go deck!</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={() => this.restart()}
							style={[styles.button, {backgroundColor: 'green'}]}>
							<Text style={styles.buttonText}>restart!</Text>
						</TouchableOpacity>
					</View>
				</View>
			)
		}
		else {		
			return (
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.title}>Question {this.state.count+1}/{totalQuestions}</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.question}>{actualQuestion.question}</Text>
						<TouchableOpacity 
							onPress={() => this.toogleShowAnswer()}
							style={[styles.link]}>
							<Text style={styles.linkText}>
								{this.state.showAnswer ? "Hide Answer" : "Show answer"}
							</Text>
						</TouchableOpacity>
						{this.state.showAnswer && 
							<Text>{actualQuestion.answer}</Text>
						}
					</View>
					<View style={styles.footer}>
						{this.state.showAnswer &&
						<TouchableOpacity 
							onPress={() => this.onAnswer(true)}
							style={[styles.button, {backgroundColor: 'green'}]}>
							<Text style={styles.buttonText}>Correct</Text>
						</TouchableOpacity>
						}
						{this.state.showAnswer &&
						<TouchableOpacity 
							onPress={() => this.onAnswer(false)}
							style={[styles.button, {backgroundColor: 'red'}]}>
							<Text style={styles.buttonText}>Incorrect!</Text>
						</TouchableOpacity>
						}					
					</View>
				</View>
			);
		}
	}
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 1,
		alignItems: "flex-end",
		padding: 10
	},
	headerResults: {
		flex: 1,
		alignItems: "center",
		padding: 10
	},
	content: {
		flex: 3,
		alignItems: "center",
		padding: 10
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch'
	},
	title: {
		color: 'gray',
		fontSize: 15
	},
	mainTitle: {
		color: 'black',
		fontSize: 40
	},
	link: {
		paddingTop: 10
	},
	linkText: {
		color: 'gray'
	},
	question: {
		color: 'black',
		fontSize: 40
	},
	result: {
		fontSize: 20,
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