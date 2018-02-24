import React, { PureComponent } from 'react'
import { TouchableOpacity, Platform, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SubHeader, Deck, 
        CardsLabel, CardsQtt, Label, Score, HistoryContainer,
        HistoryScore } from './styles'
import { Container, Title, Button, ButtonLabel, navOptions } from '../styles'
import Colors from '../../utils/colors'

export default class DeckDetail extends PureComponent {
  constructor(props) {
    super(props)
    const { deck } = this.props
    this.state = {
      deck
    }
  }

  updateScore = (lastScore) => {
    let { deck } = this.state
    let lastStatistics = this.state.deck.statistics
    const {updateData, selected} = this.props.navigation.state.params
    if (lastStatistics === 6) lastStatistics.pop()
    lastStatistics.unshift(lastScore)
    deck.statistics = lastStatistics
    this.setState({
      deck
    })
    updateData(selected, this.state.deck)
    this.forceUpdate()
  }

  addCard = (card) => {
    let deck = this.state.deck
    const {updateData, selected} = this.props.navigation.state.params
    deck.questions.push(card)
    this.setState({
      deck
    })
    updateData(selected, this.state.deck)
    this.forceUpdate()
  }

  deleteDeck = () => {
    const {selected} = this.props.navigation.state.params
    const {deleteDeck} = this.props
    Alert.alert(
      'Delete', 
      'Do you really want to delete this deck and all its cards?',
      [
        {text: 'Yes', onPress: () => deleteDeck(selected)},
        {text: 'Cancel'}
    ])
  }

  render() {
    const { navigate } = this.props.navigation
    const { deck } = this.state
    const { statistics } = this.state.deck

    return (
      <Container>
        <SubHeader>
          { !this.props.first && 
            <TouchableOpacity onPress={() => this.props.swipe('LEFT')}>
              { Platform.OS === 'ios' 
                ? <Ionicons name='ios-arrow-back' color={Colors.grade4} size={24} />
                : <Ionicons name='md-arrow-back' color={Colors.grade4} size={24}/>
              }
            </TouchableOpacity>
          }
          <Title>{deck.title}</Title>
          { !this.props.last && 
            <TouchableOpacity onPress={() => this.props.swipe('RIGHT')}>
              { Platform.OS === 'ios' 
                ? <Ionicons name='ios-arrow-forward' color={Colors.grade4} size={24} />
                : <Ionicons name='md-arrow-forward' color={Colors.grade4} size={24}/>
              }
            </TouchableOpacity>
          }
        </SubHeader>
        <Deck>  
          <CardsQtt>{deck.questions.length}</CardsQtt>
          <CardsLabel>cards</CardsLabel>
          { statistics.length > 0 &&
            <Container>
              <Label>last score</Label>
              <Score green={statistics[0] >= statistics[1] || !statistics[1] ? true : false}>{statistics[0]}%</Score>
              <Label>score history (from recent to oldest)</Label>
              <HistoryContainer>
                <HistoryScore green={statistics[1] >= statistics[2] || !statistics[2] ? true : false}>{statistics[1] ? statistics[1]+'%' : 'NA'}</HistoryScore>
                <HistoryScore green={statistics[2] >= statistics[3] || !statistics[3] ? true : false}>{statistics[2] ? statistics[2]+'%' : 'NA'}</HistoryScore>
                <HistoryScore green={statistics[3] >= statistics[4] || !statistics[4] ? true : false}>{statistics[3] ? statistics[3]+'%' : 'NA'}</HistoryScore>
                <HistoryScore green={statistics[4] >= statistics[5] || !statistics[5] ? true : false}>{statistics[4] ? statistics[4]+'%' : 'NA'}</HistoryScore>
                <HistoryScore green={statistics[5] ? true : false}>{statistics[5] ? statistics[5]+'%' : 'NA'}</HistoryScore>
              </HistoryContainer>
            </Container>
          }
          {deck.questions.length > 0 &&
            <Button onPress={() => navigate('CardsList', { deck, updateScore: this.updateScore })}>
              <ButtonLabel>start</ButtonLabel>
            </Button>
          }
          <Button onPress={() => navigate('AddCard',{ addCard: this.addCard })} outline>
            <ButtonLabel outline>add card</ButtonLabel>
          </Button>
          <Button onPress={this.deleteDeck} outline>
            <ButtonLabel outline>delete deck</ButtonLabel>
          </Button>
        </Deck>
      </Container>
    )
  }
}