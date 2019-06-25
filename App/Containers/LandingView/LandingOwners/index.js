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
    // const dataSource = [
    //   {
    //     id: 1,
    //     primaryText: 'Are you a good tenant?',
    //     secondaryText:
    //       'Build a good rentscore & get great houses by asking your previous owners to rate you.'
    //   },
    //   {
    //     id: 2,
    //     primaryText: 'Doubtful about your future owner?',
    //     secondaryText: 'See what their past tenants are saying about them!',
    //     buttonText: 'LOGIN or SIGNUP'
    //     // navigateTo:
    //   }
    // ]
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
