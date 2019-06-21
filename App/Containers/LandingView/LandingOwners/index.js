import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export default class LandingOwners extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.primaryText}>Owners</Text>
      </View>
    )
  }
}
