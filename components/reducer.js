import { ADD_DECK } from './addDeck/actions' 
import { ADD_QUESTION } from './questionAdd/actions'  
import { RECEIVE_DECKS } from './dashboard/actions'  
  
function decks(state = {}, actionData) {
	switch(actionData.type) {
		case ADD_DECK:
			const newDeck = {
				[actionData.deck]: {
				title: actionData.deck,
					questions: []
				}
			} 
			return {
				...state, 
				...newDeck
			}
		case ADD_QUESTION:
			const { question, answer, deck } = actionData.card
			return {
				...state,
				[deck]: {
					...state[deck],
					questions: [...state[deck].questions, { question, answer }]
				}
			}
		case RECEIVE_DECKS:
			return {
				...state, 
				...actionData.decks
			}
		
		
		default: 
			return state
	}
}

export default decks
  