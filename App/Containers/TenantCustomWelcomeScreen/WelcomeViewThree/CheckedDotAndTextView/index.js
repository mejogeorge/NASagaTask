import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export default class CheckedDotAndTextView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.dot}>
          <Text>✓</Text>
        </View>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}
