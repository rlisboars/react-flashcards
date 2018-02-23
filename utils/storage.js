import { AsyncStorage } from 'react-native'

export class DeckStorage {
  static fetch() {
    return AsyncStorage.getItem('deckData')
      .then(result => {
        if (!result) {
          AsyncStorage.setItem('deckData', JSON.stringify([]))
          return []
        } else return JSON.parse(result)
      })
  }

  static save(data) {
    AsyncStorage.setItem('deckData', JSON.stringify(data))
  }
}
