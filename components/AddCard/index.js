import React, { PureComponent } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Container, Button, ButtonLabel, navOptions } from '../styles'
import { Label, CardInput } from './styles'

export default class AddCard extends PureComponent {

  static navigationOptions = {
    title: 'add card',
    ...navOptions,
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
          />
          <Label>answer</Label>
          <CardInput
            multiline={true}
            placeholder='Input answer here!'
            underlineColorAndroid='transparent'
            maxLength={200}
            numberOfLines={3}
            style={{ marginBottom: 30 }}
          />
          <Button>
            <ButtonLabel>save</ButtonLabel>
          </Button>
          <Button outline>
            <ButtonLabel outline>add more</ButtonLabel>
          </Button>
          <Button outline>
            <ButtonLabel outline>cancel</ButtonLabel>
          </Button>
        </Container>
      </TouchableWithoutFeedback>
    )
  }
}
