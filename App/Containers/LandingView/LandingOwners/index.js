import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import TenantsScreen from '../../../Components/TenantsScreen'

export default class LandingOwners extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    let dataSource = [
      {
        id: 1,
        primaryText: 'Are you a good tenant?',
        secondaryText:
          'Build a good rentscore & get great houses by asking your previous owners to rate you.'
      },
      {
        id: 2,
        primaryText: 'Doubtful about your future owner?',
        secondaryText: 'See what their past tenants are saying about them!',
        buttonText: 'LOGIN or SIGNUP'
      }
    ]
    return (
      <View style={styles.container}>
        <TenantsScreen dataSource={dataSource} />
      </View>
    )
  }
}
