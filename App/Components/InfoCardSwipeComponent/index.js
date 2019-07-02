import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
export default class InfoCradSwipeComponent extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://image.freepik.com/free-photo/abstract-luxury-clear-yellow-wall-well-use-as-backdrop-background-layout_1258-207.jpg'
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.primaryText}>{this.props.data.primaryText}</Text>
          <Text style={styles.secondaryText}>
            {this.props.data.secondaryText}!
          </Text>
        </View>
      </View>
    )
  }
}
