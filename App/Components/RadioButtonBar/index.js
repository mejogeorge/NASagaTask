import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'
// import { View } from 'react-native-animatable'

export default class RadioButtonBar extends Component {
  state = {
    selectedId: null || this.props.initialSelection
  }
  onPress = selectedId => {
    this.setState({ selectedId })
    this.props.onPress && this.props.onPress(selectedId)
  }
  render () {
    return (
      <View style={styles.subView}>
        {this.props.active !== true ? (
          <View style={styles.radioDot} />
        ) : (
          <View style={styles.radioActiveOuterDot}>
            <View style={styles.radioActiveInnerDot} />
          </View>
        )}
        <Text style={styles.text}>{this.props.data.text}</Text>
      </View>
    )
  }
}
