import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default class RoundButton extends Component {
  render () {
    console.tron.log('prop test o button ', this.props.radius)
    return (
      <TouchableOpacity
        style={[styles.loginOrSignUpButton, this.props.radius]}
        onPress={this.props.buttonAction}
      >
        <Text style={styles.loginButtonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    )
  }
}
