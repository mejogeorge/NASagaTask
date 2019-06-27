import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

export default class RoundButton extends Component {
  render () {
    return (
      <TextInput
        style={styles.textInput}
        placeholder={this.props.placeHoldertext}
        onChangeText={this.props.onChange}
      />
    )
  }
}
