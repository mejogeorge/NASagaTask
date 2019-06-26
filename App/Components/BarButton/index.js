import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default class RoundButton extends Component {
  render () {
    return (
      <TouchableOpacity
        style={styles.loginOrSignUpButton}
        onPress={this.props.buttonAction}
      >
        <Text style={styles.loginButtonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    )
  }
}
