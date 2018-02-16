import React, { PureComponent } from 'react'
import Swiper from 'react-native-swiper'
import DeckDetail from '../DeckDetail'
import Colors from '../../utils/colors'

export default class DeckSwiper extends PureComponent {
  static navigationOptions = {
    title: 'decks details',
    headerTintColor: Colors.grade6,
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: Colors.grade4
    }
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

  render() {
    const { data, selected } = this.props.navigation.state.params
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
                      last={idx === data.length-1}/>
          })
        }
      </Swiper>
    )
  }
}