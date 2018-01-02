//Import external components
import React from 'react';
import { 
	View,
	Text,
	StyleSheet, 
	Platform, 
	TouchableOpacity, 
	StatusBar 
} from 'react-native';

import { connect } from 'react-redux'

//Import utils
import '../../utils/colors'

class DeckDetail extends React.Component {

	state = {
		deck: {}
	}

	addQuestion = () => {
		const { name } = this.props.navigation.state.params
		this.props.navigation.navigate('AddQuestion', { name })
	}

	startQuiz = () => {
		const { name } = this.props.navigation.state.params
		this.props.navigation.navigate('Quiz', { name })
	}

	componentDidMount() {
		const { name } = this.props.navigation.state.params;
		this.setState({deck: this.props.decks[name]});
	}

	render() {
		const { name } = this.props.navigation.state.params;
		const deck = this.props.decks[name];

		if(deck && Object.keys(deck).length > 0)
			return (
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.title}>{deck.title}</Text>
						<Text style={styles.subtitle}>{deck.questions.length} Questions</Text>
					</View>
					<View style={styles.content}>
						{deck.questions.length === 0
						? <Text>No questions here</Text>
						: <View>
							{deck.questions.map((question, index) => 
							<Text key={`question_${index}`}>
								{question.question}
							</Text>)}
						</View>
						}
					</View>
					<View style={styles.footer}>
						<TouchableOpacity 
							onPress={this.addQuestion}
							style={[styles.button, {backgroundColor: 'purple'}]}>
							<Text style={styles.buttonText}>Add Question</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={this.startQuiz}
							style={[styles.button, {backgroundColor: 'purple'}]}>
							<Text style={styles.buttonText}>Quiz!</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		else
			return (
				<View style={styles.container}>
					<Text>No data avaiable</Text>
				</View>
			)
	}
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		fontSize: 45
	},
	subtitle: {
		fontSize: 30
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		flex: 2
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

export default connect(mapStateToProps)(DeckDetail)