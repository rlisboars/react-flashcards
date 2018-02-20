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
      showAnswer: false,
      score: Array(props.navigation.state.params.deck.questions.length).fill(false)
    }
  }

  answer = (result) => {
    const questionsCount = this.props.navigation.state.params.deck.questions.length
    const updateScore = this.props.navigation.state.params.updateScore
    if (this.state.current <= questionsCount-1) {
      let score = this.state.score
      score[this.state.current] = result
      this.setState({
        score
      })
      if (this.state.current === questionsCount-1) {
        updateScore((score.filter(s => s === true).length/questionsCount * 100).toFixed(0))
        this.props.navigation.goBack()
      }
    }
    if (this.state.current < questionsCount-1) {
      this.setState({
          current: this.state.current + 1,
          showAnswer: false 
      })
    }
  }


  render() {
    const question = this.props.navigation.state.params.deck.questions[this.state.current]
    const questionsCount = this.props.navigation.state.params.deck.questions.length
    return(
      <Container>
        <Question>
          { question.question } ({ this.state.current+1 }/{questionsCount})
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
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => this.answer(true)}>
            <MaterialIcons name='check-circle' size={55} color='green'/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => this.answer(false)}>
            <MaterialIcons name='cancel' size={55} color='red'/>
          </TouchableOpacity>
        </AnswerButtons>
      </Container>
    )
  }
}