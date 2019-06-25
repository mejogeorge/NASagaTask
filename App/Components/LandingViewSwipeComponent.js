import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { styles } from './Styles/LandingViewSwipeComponentStyle'
// let { width, height } = window.Dimensions
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
export default class InfoCard extends Component {
  widthPercentage = (65 * width) / 100
  heightPercentage = (27 * height) / 100
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          onLayout={element => console.tron.log('image ratio = ', element)}
          source={{
            uri:
              'https://image.freepik.com/free-photo/abstract-luxury-clear-yellow-wall-well-use-as-backdrop-background-layout_1258-207.jpg'
          }}
          style={
            styles.image
            // { height: this.heightPercentage },
            // { width: this.widthPercentage }
          }
        />
        <Text style={styles.primaryText}>{this.props.data.primaryText}</Text>
        <Text style={styles.secondaryText}>
          {this.props.data.secondaryText}!
        </Text>
      </View>
    )
  }
}
