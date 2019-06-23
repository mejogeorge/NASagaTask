import React, { Component } from 'react'
import { View, Dimensions, FlatList } from 'react-native'
import { styles } from './styles'
import TenantsScreen from '../../../Components/TenantsScreen'

const { width } = Dimensions.get('window')
let indexCound = 1

export default class LandingTenants extends Component {
  static navigationOptions = {
    header: null
  }

  next = () => {
    this.scrollToIndex()
  }
  renderItems = () => <TenantsScreen onClick={this.next} />

  scrollToIndex = () => {
    if (this.listRef && this.listRef.scrollToIndex) {
      console.tron.log('worked')
      this.listRef.scrollToIndex({ animated: true, index: indexCound })
      indexCound = indexCound === 3 ? indexCound : indexCound + 1
    } else {
      console.tron.log('not worked', this.flatRef)
    }
  }
  getItemLayout = (data, index) => ({
    length: width,
    offset: width * index,
    index
  })

  render () {
    let dataSource = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    return (
      <View style={styles.container}>
        <FlatList
          ref={ref => {
            this.listRef = ref
          }}
          data={dataSource}
          renderItem={this.renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={this.getItemLayout}
          pagingEnabled
          // initialScrollIndex={width}
          // initialNumToRender={3}
        />
      </View>
    )
  }
}
