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

export const navOptions = {
  headerTintColor: Colors.grade6,
  headerStyle: {
    backgroundColor: Colors.grade4
  }
}