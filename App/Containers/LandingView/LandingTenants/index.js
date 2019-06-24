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
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4, buttonText: 'LOGIN or SIGNUP' }
    ]
    return (
      <View style={styles.container}>
        <TenantsScreen dataSource={dataSource} navigation={this.props.navigation} />
      </View>
    )
  }
}
