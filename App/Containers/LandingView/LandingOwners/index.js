import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import TenantsScreen from '../../../Components/TenantsScreen'

export default class LandingOwners extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    let dataSource = [{ id: 1 }, { id: 2, buttonText: 'LOGIN or SIGNUP' }]
    return (
      <View style={styles.container}>
        <TenantsScreen dataSource={dataSource} />
      </View>
    )
  }
}
