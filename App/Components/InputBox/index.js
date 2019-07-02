import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { styles } from './styles'

export default class InputBox extends Component {
  render () {
    let textLimit = this.props.textLimit
    return (
      <TextInput
        style={styles.textInput}
        placeholder={this.props.placeHoldertext}
        onChangeText={text => this.props.onChange(text)}
        maxLength={textLimit || null}
        autoFocus={this.props.autoFocus}
        placeholderTextColor='#a7a7a7'
        keyboardType={this.props.keyboardType}
      />
    )
  }
}
