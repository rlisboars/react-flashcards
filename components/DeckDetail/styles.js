import styled from 'styled-components/native'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../utils/colors'

export const SubHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
`

export const Deck = styled.View`
  flex: 1;
  border: 1px solid ${Colors.grade5};
  margin: 0 10px 10px 10px;
  border-radius: 5px;
  shadow-color: ${Colors.grade5};
  shadow-opacity: 0.8;
  shadow-offset: 0px 2px;
  shadow-radius: 5px;
`

export const CardsQtt = styled.Text`
  font-size: 24px;
  color: ${Colors.grade3};
  margin-top: 15px;
  align-self: center;
  height: 30px;
`

export const CardsLabel = styled.Text`
  font-size: 11px;
  color: ${Colors.grade3};
  align-self: center;
  margin-bottom: 25px;
`

export const Label = styled.Text`
  font-size: 14px;
  color: ${Colors.grade3};
  align-self: center;
`

export const Score = styled.Text`
  font-size: 64px;
  align-self: center;
  color: ${props => props.green ? 'green' : 'red'};
  margin-top: -5px;
  margin-bottom: 25px;
  background-color: rgba(0,0,0,0);
`

export const HistoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 0 30px;
`
export const HistoryScore = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.green ? 'green' : 'red'};
  margin-bottom: 35px;
`
