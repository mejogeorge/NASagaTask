import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../components/SquareButtonStyles'
export default class SquareButton extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.opacityContainer}>
        <Text style={styles.text}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}
