import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CardStyle'

export default class Card extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.subView}>
          <Text>{this.props.name}</Text>
          <Text>{this.props.age}</Text>
        </View>
        <Text>{this.props.height}</Text>
      </View>
    )
  }
}
