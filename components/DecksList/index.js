import React, { PureComponent } from 'react'
import { FlatList, TouchableOpacity, AsyncStorage } from 'react-native'
import styled from 'styled-components/native'
import Colors from '../../utils/colors'
import { DeckView, DeckTitle,  DeckInfo, DeckCardsQtt, DeckCardsLabel } from './styles'
import { navOptions } from '../styles'
import { initialData } from '../../utils/storage'

export default class DecksList extends PureComponent {
  static navigationOptions = {
    title: 'FLASHCARDS',
    ...navOptions,
  }

  componentDidMount() {
    AsyncStorage.getItem('deckData')
      .then(result => {
        if (!result) {
          AsyncStorage.setItem('deckData', JSON.stringify(initialData))
          this.setState({ data: initialData })
        } else { 
          this.setState({ data: JSON.parse(result) })
        }
      })
  }

  _renderItem = ({ item }) => {
    const { key, title, cardsQtt } = item
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity onPress={() => navigate('DeckSwiper', { data: this.state.data, selected: key })}>
        <DeckView>
          <DeckTitle>{title}</DeckTitle>
          <DeckInfo>
            <DeckCardsQtt>{cardsQtt}</DeckCardsQtt>
            <DeckCardsLabel>cards</DeckCardsLabel>
          </DeckInfo>
        </DeckView>
      </TouchableOpacity>
    )
  }
  
  render() {
    const data = this.state ? this.state.data : []
    let listData =[]
    data.map((deck, idx) => {
      listData.push({ key: idx, title: deck.title, cardsQtt: deck.questions.length })
    })

    return (
      <FlatList 
        style={{ backgroundColor: Colors.grade6 }}
        data={listData}
        renderItem={this._renderItem}
      />
    )
  }
}

