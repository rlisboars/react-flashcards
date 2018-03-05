import { AsyncStorage } from 'react-native'

export class DeckStorage {
  static fetch() {
    return AsyncStorage.getItem('deckData')
      .then(result => {
        if (!result) {
          const exampleDeck = { 
            title: "Example deck", 
            questions: [{ question: "What framework was used to develop this App  ", answer: "React Native" }],
            statistics: []
          }
          AsyncStorage.setItem('deckData', JSON.stringify([exampleDeck]))
          return [exampleDeck]
        } else {
          return JSON.parse(result)
        }
      })
  }

  static save(data) {
    AsyncStorage.setItem('deckData', JSON.stringify(data))
  }
}