import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'Flashcards:decks'

function solveData(decks) {
    console.log("solveData:" + decks);
    return (decks === null) ? 
        dummyData() : decks;
}

export function dummyData() {
    let dummyData = {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
}

export async function fetchDecks() {	
	return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
		if(!results){
			return dummyData();
		}
		return JSON.parse(results)
	});
}

export function getDeck({ key }) {
    return AsyncStorage.getItem(key);
}

export function createDeck( title ) {
	return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
		[title]: {
			title: title,
			questions: []
		}
	}))
}

export function addCard({ deckKey, card }) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
		.then(results => JSON.parse(results))
		.then(results => {
			results[deckKey].questions.push(card)
			AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(results))
			return results
		})
}
