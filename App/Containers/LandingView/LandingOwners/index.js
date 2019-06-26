import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
// import InfoCard from '@Components/InfoCard'
import InfoCard from '../../../Components/InfoCard'
export default class LandingOwners extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    console.tron.log(' navigation', this.props.navigation)
    // const { navigation } = this.props
    // const { dataSource } = navigation.getParam('dataSource')
    // const { dataSource } = this.props.navigation.getParam('dataSource')

    const { dataSource } = this.props.navigation.state.params

    console.tron.log('params of dataSource', dataSource)
    return (
      <View style={styles.container}>
        <InfoCard dataSource={dataSource} navigation={this.props.navigation} />
      </View>
    )
  }
}
