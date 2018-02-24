import React, { PureComponent } from 'react'
import Swiper from 'react-native-swiper'
import DeckDetail from '../DeckDetail'
import Colors from '../../utils/colors'

export default class DeckSwiper extends PureComponent {
  state = {
    data: []
  }

  static navigationOptions = {
    title: 'deck details',
    headerTintColor: Colors.grade6,
    headerStyle: {
      backgroundColor: Colors.grade4
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.navigation.state.params.data
    })
  }

  swipe = (direction) => {
    if (direction === 'LEFT' && this.swiper.state.index > 0) {
      this.currentIndex -= 1
      this.swiper.scrollBy(-1)
    } 
    if (direction === 'RIGHT' && this.swiper.state.index < this.swiper.state.total) {
      this.currentIndex += 1
      this.swiper.scrollBy(1)
    }
  }

  deleteDeck = (idx) => {
    const {selected, deleteDeck} = this.props.navigation.state.params
    let data = this.state.data.slice()
    data.splice(idx, 1)
    this.setState({
      data
    })
    deleteDeck(selected)
    this.props.navigation.goBack()
  }

  render() {
    const { selected } = this.props.navigation.state.params
    const { data } = this.state
    return (
      <Swiper index={selected} loop={false} showsPagination={false} loadMinimal={true} ref={component => this.swiper = component} >
        {
          data.map((deck, idx) => {
            return <DeckDetail 
                      swipe={this.swipe} 
                      navigation={this.props.navigation} 
                      deck={deck} 
                      key={idx} 
                      first={idx === 0}
                      last={idx === data.length-1}
                      deleteDeck={this.deleteDeck}
                  />
          })
        }
      </Swiper>
    )
  }
}

