import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import SquareButton from '../../Components/SquareButton'
import I18n from 'react-native-i18n'

export default class LandingView extends Component {
  static navigationOptions = {
    header: null
  }
  __navigateTo = screen => () => this.props.navigation.navigate(screen)

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.primaryText}>RentScore</Text>
        <Text style={styles.secondaryText}>
          {I18n.t('landingView.first', {country: 'Brazil'})}
        </Text>
        <SquareButton
          name='FOR TENANTS'
          onClick={this.__navigateTo('LandingTenants')}
        />

        <SquareButton
          name='FOR OWNERS'
          onClick={this.__navigateTo('LandingOwners')}
        />
      </View>
    )
  }
}
