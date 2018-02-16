import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Button, ButtonLabel, navOptions } from '../styles'
import { Question, Answer, AnswerButtons } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default class Card extends PureComponent {

  static navigationOptions = ({navigation}) => {
    const { title } = navigation.state.params
    return {
      title,
      headerBackTitle: null,
      ...navOptions
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      current: 0, 
      showAnswer: false
    }
  }

  correctAnswer = () => {
    const questionsCount = this.props.navigation.state.params.questions.length
    if (this.state.current < questionsCount-1) {
      this.setState({
          current: this.state.current + 1,
          showAnswer: false 
      })
    }
  }

  render() {
    const question = this.props.navigation.state.params.questions[this.state.current]
    return(
      <Container>
        <Question>
          { question.question }
        </Question>
        <Button onPress={() => this.setState({ showAnswer: true })} outline>
          <ButtonLabel outline>
            show answer
          </ButtonLabel>
        </Button>
        <Answer>
          { this.state.showAnswer ? question.answer : '' }
        </Answer>
        <AnswerButtons>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this.correctAnswer}>
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