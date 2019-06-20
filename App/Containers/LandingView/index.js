import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import SquareButton from '../components/SquareButton'

export default class LandingView extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.primaryText}>RentScore</Text>
        <Text style={styles.secondaryText}>India’s first rental rating system</Text>
        <SquareButton name='FOR TENANTS' />
        <SquareButton name='FOR OWNERS' />
      </View>
    )
  }
}
