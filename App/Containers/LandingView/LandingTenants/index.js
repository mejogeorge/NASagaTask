import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import TenantsScreen from '../../../Components/TenantsScreen'

// const { width } = Dimensions.get('window')
// let indexCound = 1

export default class LandingTenants extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    let dataSource = [
      {
        id: 1,
        primaryText: 'Need good tenants?',
        secondaryText:
          'Decide by seeing what previous owners are saying about them!'
      },
      {
        id: 2,
        primaryText: 'Worried that your tenants might wreck your home?',
        secondaryText: 'See your home photos along with rent every month.'
      },
      {
        id: 3,
        primaryText: 'Have old tenants who kept your home clean?',
        secondaryText: 'Help them find great houses by rating them good :)'
      },
      {
        id: 4,
        primaryText: 'Have old tenants who damaged your home?',
        secondaryText: 'Rate them poorly so that other owners will know.',
        buttonText: 'LOGIN or SIGNUP'
      }
    ]
    return (
      <View style={styles.container}>
        <TenantsScreen
          dataSource={dataSource}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}
