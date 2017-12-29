import { 
	ADD_DECK,
	ADD_QUESTION,
	RECEIVE_DECKS
} from './actions'  
  
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
			const { question, deckId } = actionData			
			return {
				...state,
				[deckId]: {
					...state[deckId],
					questions: [...state[deckId].questions, question]
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
  