import React, { PureComponent } from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SubHeader, Deck, 
        CardsLabel, CardsQtt, Label, Score, HistoryContainer,
        HistoryScore } from './styles'
import { Container, Title, Button, ButtonLabel, navOptions } from '../styles'
import Colors from '../../utils/colors'

export default class DeckDetail extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation
    const { deck } = this.props
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
          <Label>last score</Label>
          <Score green>80%</Score>
          <Label>score history</Label>
          <HistoryContainer>
            <HistoryScore green>80%</HistoryScore>
            <HistoryScore>70%</HistoryScore>
            <HistoryScore green>100%</HistoryScore>
            <HistoryScore green>100%</HistoryScore>
            <HistoryScore green>100%</HistoryScore>
          </HistoryContainer>
          <Button onPress={() => navigate('Card', deck)}>
            <ButtonLabel>start</ButtonLabel>
          </Button>
          <Button onPress={() => navigate('AddCard')} outline>
            <ButtonLabel outline>add card</ButtonLabel>
          </Button>
        </Deck>
      </Container>
    )
  }
}