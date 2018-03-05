import { FlatList, TouchableOpacity, TouchableWithoutFeedback, AsyncStorage, Modal, View, TextInput, Text, Keyboard } from 'react-native'
import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import Colors from '../../utils/colors'
import { DeckView, DeckTitle,  DeckInfo, DeckCardsQtt, DeckCardsLabel, ModalOuterView, ModalInnerView, ModalTextInput } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { navOptions, Container, Button, ButtonLabel } from '../styles'
import { DeckStorage } from '../../utils/storage'

export default class DecksList extends PureComponent {
  state = {
    modalVisible: false,
    data: [],
    deckTitle: ''
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state 
    return {
      title: 'FLASHCARDS',
      headerBackTitle: null,
      headerRight: <MaterialIcons name='add' color={Colors.grade6} size={32} onPress={() => params.handleAdd()} />,
      ...navOptions,
    }
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'test',
        id: 'test',
        systemItem: 'add'
      }
    ]
  }

  componentDidMount() {
    DeckStorage.fetch().then(result => this.setState({ data: result }))
    this.props.navigation.setParams({ handleAdd: this.changeModalVisibility })
  }

  renderItem = ({ item }) => {
    const { key, title, cardsQtt } = item
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity onPress={() => navigate('DeckSwiper', { data: this.state.data, selected: key, updateData: this.updateData, deleteDeck: this.deleteDeck })}>
        <DeckView>
          <DeckTitle>{title}</DeckTitle>
          <DeckInfo>
            <DeckCardsQtt>{cardsQtt}</DeckCardsQtt>
            <DeckCardsLabel>cards</DeckCardsLabel>
          </DeckInfo>
        </DeckView>
      </TouchableOpacity>
    )
  }

  changeModalVisibility = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  saveNewDeck = (evt) => {
    let title = this.state.deckTitle
    const { navigate } = this.props.navigation
    title.trim()
    if (title !== '') {
      evt.preventDefault()
      this.changeModalVisibility()
      this.setState({ 
        deckTitle: '',
        data: [...this.state.data, { title: this.state.deckTitle, questions: [], statistics: [] }]
      }, () => { 
        DeckStorage.save(this.state.data)
        navigate('DeckSwiper', { data: this.state.data, selected: this.state.data.length-1, updateData: this.updateData, deleteDeck: this.deleteDeck })
      })
    }
  }

  updateData = (idx, deck) => {
    let data  = this.state.data.slice()
    data[idx] = deck
    this.setState({
      data
    }, () => DeckStorage.save(this.state.data))
    
  }

  deleteDeck = (idx) => {
    let data = this.state.data.slice()
    data.splice(idx, 1)
    this.setState({
      data
    }, () => DeckStorage.save(this.state.data))
  }


  render() {
    const data = this.state.data
    let listData =[]
    data.map((deck, idx) => {
      listData.push({ key: idx, title: deck.title, cardsQtt: deck.questions.length })
    })
    
    return (
      <Container>
        <FlatList 
          style={{ backgroundColor: Colors.grade6 }}
          data={listData}
          renderItem={this.renderItem}
        />
        <Modal 
          onRequestClose={() => ''}
          visible={this.state.modalVisible}
          animationType={'fade'}
          transparent={true}
        > 
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <ModalOuterView>
              <ModalInnerView>
                <ModalTextInput
                  maxLength={30}
                  placeholder='Input Deck title here!'
                  editable={true}
                  value={this.state.deckTitle}
                  onChangeText={(text) => this.setState({ deckTitle: text })}
                  onSubmitEditing={(evt) => this.saveNewDeck(evt)}
                />
                <Button onPress={this.saveNewDeck}>
                  <ButtonLabel>Save</ButtonLabel>
                </Button>
                <Button onPress={this.changeModalVisibility} outline>
                  <ButtonLabel outline>Cancel</ButtonLabel>
                </Button>
              </ModalInnerView>
            </ModalOuterView>
          </TouchableWithoutFeedback>
        </Modal>
      </Container>
    )
  }
}



