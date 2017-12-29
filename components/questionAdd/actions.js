import {
    ADD_QUESTION
} from '../actions'

export function addQuestion(deckId, question) {
	return {
		type: ADD_QUESTION,
		deckId,
		question
	}
}