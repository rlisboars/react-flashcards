import styled from 'styled-components/native'
import { Text, TouchableOpacity } from 'react-native'
import Colors from '../utils/colors'

// Common styles bewteen different components

export const Container = styled.View`
flex: 1
background-color: ${Colors.grade6};
`

export const Button = styled.TouchableOpacity`
border: 1px solid ${Colors.grade3};
border-radius: 5px;
background-color: ${props => props.outline ? Colors.grade6 : Colors.grade3}
width: 250px;
height: 40px;
align-self: center;
align-items: center;
justify-content: center;
margin-bottom: 20px;
`

export const ButtonLabel = styled.Text`
color: ${props => props.outline ? Colors.grade3 : Colors.grade6}
font-size: 24;
`

export const Title = styled.Text`
flex: 1;
text-align: center;
color: ${Colors.grade2};
font-weight: bold;
font-size: 18px;
padding: 0 5px 0 5px;
`

export const navOptions = {
  headerTintColor: Colors.grade6,
  headerStyle: {
    backgroundColor: Colors.grade4
  }
}
