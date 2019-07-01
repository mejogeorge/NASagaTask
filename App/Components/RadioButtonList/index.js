import React, { Component, GATracker} from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { View } from 'react-native-animatable'

export default class RadioButtonList extends Component {
  state = {
    selectedId: null || this.props.initialSelection
  }
  onPress = selectedId => {
    if (this.props.gaLabel) {
      GATracker && GATracker.trackEvent(this.props.gaAction, this.props.gaLabel)
    }
    if (!this.props.onPress) return

    this.setState({ selectedId })
    this.props.onPress && this.props.onPress(selectedId)
  }
  render () {
    return (
      <View>
        {this.props.data.map((data) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.radioBar}
              onPress={() => this.onPress(data.id)}
            >
              <View style={styles.subView}>
                {data.id !== this.state.selectedId ? (
                  <View style={styles.radioDot} />
                ) : (
                  <View style={styles.radioActiveOuterDot}>
                    <View style={styles.radioActiveInnerDot} />
                  </View>
                )}
                <Text style={styles.text}>{data.text}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}
