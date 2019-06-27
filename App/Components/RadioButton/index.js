import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { styles } from './styles'
import { View } from 'react-native-animatable'

export default class RoundButton extends Component {
  render () {
    console.tron.log('rddioRERENDER', this.props.radioListData)
    return (
      <View>
        {this.props.radioListData.map((data, index) => {
          return (
            <TouchableWithoutFeedback
              style={styles.radioBar}
              onPress={() => this.props.buttonAction(data.id)}
            >
              <View style={styles.subView}>
                {data.active === false ? (
                  <View style={styles.radioDot} />
                ) : (
                  <View style={styles.radioActiveOuterDot}>
                    <View style={styles.radioActiveInnerDot} />
                  </View>
                )}
                <Text style={styles.text}>{data.text}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        })}
      </View>
    )
  }
}
