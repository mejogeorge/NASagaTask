import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default class RoundButton extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.roundButton} onPress={this.props.buttonAction}>
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    )
  }
}
