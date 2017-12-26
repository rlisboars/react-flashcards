import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Button, ButtonLabel, navOptions } from '../styles'
import { Question, Answer, AnswerButtons } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default class Card extends PureComponent {
  
  static navigationOptions = {
    title: 'Deck title', 
    ...navOptions
  }

  render() {
    return(
      <Container>
        <Question>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis iaculis ex, ac posuere tortor elementum vel. Nam sit amet molestie ipsum. Nulla nec mauris mattis, ultricies orci in, tempus nibh. Suspendisse potenti. Sed pharetra lectus leo, sit amet volutpat orci ultrices non
        </Question>
        <Button outline>
          <ButtonLabel outline>
            show answer
          </ButtonLabel>
        </Button>
        <Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Answer>
        <AnswerButtons>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
            <MaterialIcons name='check-circle' size={55} color='green'/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
            <MaterialIcons name='cancel' size={55} color='red'/>
          </TouchableOpacity>
        </AnswerButtons>
      </Container>
    )
  }
}