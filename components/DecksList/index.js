import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import Colors from '../../utils/colors'
import { DeckView, DeckTitle,  DeckInfo, DeckCardsQtt, DeckCardsLabel } from './styles'
import { navOptions } from '../styles'

function DeckHeader({ item }) {
  const { title, cardsQtt } = item

  return (
    <DeckView>
      <DeckTitle>{title}</DeckTitle>
      <DeckInfo>
        <DeckCardsQtt>{cardsQtt}</DeckCardsQtt>
        <DeckCardsLabel>cards</DeckCardsLabel>
      </DeckInfo>
    </DeckView>
  )
}

export default class DecksList extends PureComponent {
  static navigationOptions = {
    title: 'FLASHCARDS',
    ...navOptions,
  }
  render() {
    return (
      <FlatList 
        style={{ backgroundColor: Colors.grade6 }}
        data={[{ key: 1, title: 'teste', cardsQtt: 15 }, { key: 2, title: 'teste2', cardsQtt: 0 }, { key: 3, title: 'teste3', cardsQtt: 100 }]}
        renderItem={DeckHeader}
      />
    )
  }
}

