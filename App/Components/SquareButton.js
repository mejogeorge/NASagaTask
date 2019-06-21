import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../Components/Styles/SquareButtonStyles'
export default class SquareButton extends Component {
  render () {
    return (
      <TouchableOpacity
        style={styles.opacityContainer}
        onPress={this.props.onClick}
      >
        <Text style={styles.text}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}
