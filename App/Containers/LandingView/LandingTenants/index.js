import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import TenantsScreenfrom from '../../../Components/TenantsScreen'

export default class LandingTenants extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <TenantsScreenfrom />
      </View>
    )
  }
}
