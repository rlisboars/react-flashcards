import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import DecksList from './components/DecksList'
import DeckDetail from './components/DeckDetail'
import DeckSwiper from './components/DeckSwiper'
import AddCard from './components/AddCard'
import CardsList from './components/CardsList'
import Colors from './utils/colors'

const MainNavigator = StackNavigator({
  DecksList: {
    screen: DecksList,
  }, 
  DeckSwiper: {
     screen: DeckSwiper,
  },
   AddCard: {
     screen: AddCard,
   },
   CardsList: {
    screen: CardsList
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[{ height: Constants.statusBarHeight }, { backgroundColor: Colors.grade4 }]}>
          <StatusBar translucent />
        </View>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
