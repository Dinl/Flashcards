//Import external components
import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity, 
	KeyboardAvoidingView,
	TextInput
} from 'react-native';
import { connect } from 'react-redux'

//Import API
import { createDeck } from '../../utils/api'

//Import Internal components
import { addDeck } from './actions'

class AddDeck extends Component {
	state = {
	  title: ''
	}

	onTitleChange = (title) => {
		this.setState({ title })
	}

	submit = () => {
		const { title } = this.state
		if(title) {
			createDeck(title).then(() => {
				this.props.addDeck(title);
				this.props.navigation.navigate('DeckDetail', { name: title })
			});
		}
	}

	render() {
		const { text } = this.state

		return(
			<KeyboardAvoidingView
				behavior='padding'
				style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Give a title of your new deck?</Text>
				</View>
				<View style={styles.content}>
				<TextInput
					placeholder='Title here!'
					style={styles.input}
					onChangeText={this.onTitleChange}
				/>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity 
						onPress={this.submit}
						style={styles.button}>
						<Text style={styles.buttonText}>Add Deck</Text>
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
	header: {
		flex: 1,
	},
	content: {
		flex: 3,
	},
	footer: {
		flex: 1,
	},
	title: {
		fontSize: 40,
		textAlign: 'center'
	},
	input: {
		width: 250,
		height: 50,
		padding: 10,
		borderWidth: 1,
		borderColor: '#757575',
		margin: 20,
		fontSize: 25
	}

});

const mapDispatchToProps = (dispatch) => {
	return {
		addDeck: (deck) => dispatch(addDeck(deck))
	}
}
  
export default connect(null, mapDispatchToProps)(AddDeck)