import {
    RECEIVE_DECKS
} from '../actions'

export function dashboard (state = {}, actionData){
    switch (actionData.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                decks: {...actionData.decks}
            }
        default:
            return state
    }
}