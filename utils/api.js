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

export function fetchDecks() {    
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
}

export function getDeck({ key }) {
    return AsyncStorage.getItem(key);
}

export function saveDeck({ deck }) {
    
}

export function addCard({ deckKey, card }) {
    
}

/*
export function fetchCalendarResults () {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

export function submitEntry ({ entry, key }) {
    return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
        [key]: entry
    }))
}

export function removeEntry ({ key }) {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined;
            delete data[key];
            AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
        }) 
}
*/