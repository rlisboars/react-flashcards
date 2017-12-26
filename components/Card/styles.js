import styled from 'styled-components/native'
import { View, Text, TextInput } from 'react-native'
import Colors from '../../utils/colors'

export const Question = styled.Text`
  flex: 1;
  text-align: center;
  color: ${Colors.grade2};
  font-weight: bold;
  font-size: 18px;
  padding: 20px 0 10px 0;
`
export const Answer = styled.Text`
  flex: 1;
  text-align: center;
  color: ${Colors.grade3};
  font-weight: 100;
  font-size: 18px;
  padding: 0 0 10px 0;
`
export const AnswerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 20px;
`


