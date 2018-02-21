import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import Colors from '../../utils/colors'

export const DeckView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.grade3};
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  height: 60px;
  `
export const DeckTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.grade2};
  margin-left: 10px;
  `

export const DeckInfo = styled.View`
  align-items: flex-end;
  margin-right: 10px;
  `

export const DeckCardsQtt = styled.Text`
  font-size: 20px;
  color: ${Colors.grade3};
  `

export const DeckCardsLabel = styled.Text`
  font-size: 9px;
  font-weight: 200;
  color: ${Colors.grade3};
  `

export const ModalTextInput = styled.TextInput`
  width: 350px;
  height: 40px;
  background-color: ${Colors.grade6};
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ModalOuterView = styled.View`
  flex: 1;
  background-color: rgba(49,68,72,0.8);
`
export const ModalInnerView = styled.View`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.grade4};
`

export const navOptions = {
  headerTintColor: Colors.grade6,
  headerStyle: {
    backgroundColor: Colors.grade4
  }
}