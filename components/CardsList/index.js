import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Modal } from 'react-native'
import { Container, Button, ButtonLabel, navOptions } from '../styles'
import { Question, Answer, AnswerButtons } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { ModalOuterView, ModalInnerView, Label, Score } from '../AddCard/styles'

export default class CardsList extends PureComponent {

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
      showResults: undefined,
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
        const grade = (score.filter(s => s === true).length/questionsCount * 100).toFixed(0)
        updateScore(grade)
        this.setState({ showResults: grade })
      }
    }
    if (this.state.current < questionsCount-1) {
      this.setState({
          current: this.state.current + 1,
          showAnswer: false 
      })
    }
  }

  reset = () => {
    this.setState({
      current: 0, 
      showAnswer: false,
      showResults: undefined,
      score: Array(this.props.navigation.state.params.deck.questions.length).fill(false)
    })
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
        <Modal
          onRequestClose={() => ''}
          visible={this.state.showResults >= 0}
          animationType={'fade'}
          transparent={true}
          style={{ backgroundColor: 'black' }}
        >
          <ModalOuterView>
            <ModalInnerView>       
            <Label>Score</Label>
            <Score>{this.state.showResults}%</Score>
            <Button onPress={this.reset}>
              <ButtonLabel>restart</ButtonLabel>
            </Button>
            <Button onPress={() => this.props.navigation.goBack()}>
              <ButtonLabel>back</ButtonLabel>
            </Button>
            </ModalInnerView>
          </ModalOuterView>
        </Modal>
      </Container>
    )
  }
}