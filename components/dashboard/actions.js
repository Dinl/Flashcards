import {
    REQUEST_DECKS,
    RECEIVE_DECKS
} from '../actions'

import * as API from '../../utils/api'

export function requestDecks (decks) {
    return {
        type: REQUEST_DECKS,
    }
}

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const getDecks = PostId => dispatch => {
    
    dispatch(receiveDecks(API.dummyData()));
    /*dispatch(requestDecks());
    debugger
	API.fetchDecks().then((decks) => {
        debugger
		dispatch(receiveDecks(decks));
    });
    */
};
