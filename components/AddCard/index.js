import React, { Component } from 'react'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Container, Button, ButtonLabel, navOptions } from '../styles'
import { Label, CardInput } from './styles'

export default class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = {
    title: 'add card',
    ...navOptions,
  }

  cancel = () => {
    this.setState({
      question: '',
      answer: ''
    })
  }

  addCard = () => {
    const addCard = this.props.navigation.state.params.addCard
    addCard({
      question: this.state.question,
      answer: this.state.answer
    })
    Keyboard.dismiss()
    this.cancel()
    Alert.alert('Success', 'Question saved!', [{ text: 'OK' }], { cancelable: false })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <Label>question</Label>
          <CardInput
            multiline={true}
            placeholder='Input question here!'
            underlineColorAndroid='transparent'
            maxLength={200}
            numberOfLines={3}
            value={this.state.question}
            onChangeText={txt => this.setState({ question: txt})}
          />
          <Label>answer</Label>
          <CardInput
            multiline={true}
            placeholder='Input answer here!'
            underlineColorAndroid='transparent'
            maxLength={200}
            numberOfLines={3}
            value={this.state.answer}
            onChangeText={txt => this.setState({ answer: txt })}
            style={{ marginBottom: 30 }}
          />
          <Button onPress={this.addCard}>
            <ButtonLabel>save</ButtonLabel>
          </Button>
          <Button onPress={this.cancel} outline>
            <ButtonLabel outline>cancel</ButtonLabel>
          </Button>
        </Container>
      </TouchableWithoutFeedback>
    )
  }
}
