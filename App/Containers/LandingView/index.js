import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import SquareButton from '../../Components/SquareButton'

export default class LandingView extends Component {
  static navigationOptions = {
    header: null
  }
  navigateTo = screen => {
    if (screen === 'LandingTenants') {
      this.props.navigation.navigate('LandingTenants')
    } else {
      this.props.navigation.navigate('LandingOwners')
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.primaryText}>RentScore</Text>
        <Text style={styles.secondaryText}>
          India’s first rental rating system
        </Text>
        <SquareButton
          name='FOR TENANTS'
          onClick={() => this.navigateTo('LandingTenants')}
        />
        <SquareButton
          name='FOR OWNERS'
          onClick={() => this.navigateTo('LandingOwners')}
        />
      </View>
    )
  }
}
