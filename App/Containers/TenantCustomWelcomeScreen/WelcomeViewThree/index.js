import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import CheckedDotAndTextView from './CheckedDotAndTextView'

export default class WelcomeViewThree extends Component {
  listData = [
    { id: 1, data: 'Add your past house owners' },
    { id: 2, data: 'Rate yourself on your stay at your past owner’s house' },
    { id: 3, data: 'Ask your past owner to approve your score' }
  ]
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>How to build RentScore?</Text>
        <View style={styles.listView}>
          {this.listData.map(data => {
            return <CheckedDotAndTextView text={data.data} />
          })}
        </View>
      </View>
    )
  }
}
