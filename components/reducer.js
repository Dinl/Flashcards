import { combineReducers } from 'redux'

//Import component reducers here
import { dashboard } from './dashboard/reducer'
import { deck } from './deck/reducer'
import { deckDetail } from './deckDetail/reducer'
import { questionDetail } from './questionDetail/reducer'
import { quiz } from './quiz/reducer'

export default combineReducers({
	dashboard, 
	deck, 
	deckDetail, 
	questionDetail, 
	quiz
});