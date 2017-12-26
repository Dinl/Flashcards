import {
    REQUEST_DECKS,
    RECEIVE_DECKS
} from '../actions'

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