import React, { Component } from 'react'
import { View } from 'react-native'
// const Dot = props =>
export default class Dots extends Component {
  render () {
    return (
      <View
        style={[
          this.props.style,
          {
            backgroundColor: this.props.active ? '#4265ea' : '#d8d8d8'
          }
        ]}
      />
    )
  }
}
