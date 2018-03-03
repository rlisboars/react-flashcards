import styled from 'styled-components/native'
import { View, Text, TextInput } from 'react-native'
import Colors from '../../utils/colors'

export const Label = styled.Text`
  text-align: center;
  color: ${Colors.grade2};
  font-weight: bold;
  font-size: 18px;
  padding: 15px 0 -2px 0;
`

export const CardInput = styled.TextInput`
  height: 80px;
  border: 1px solid ${Colors.grade3};
  border-radius: 5px;
  margin: 0 20px;
  padding: 5px;
  text-align-vertical: top;
  font-size: 15px;
`

export const ModalOuterView = styled.View`
  flex: 1;
  background-color: rgba(49,68,72,0.8);
`

export const ModalInnerView = styled.View`
  margin: 100px 20px 20px 20px;
  background-color: white;
`

export const Score = styled.Text`
  font-size: 64px;
  align-self: center;
  background-color: rgba(0,0,0,0);
`

