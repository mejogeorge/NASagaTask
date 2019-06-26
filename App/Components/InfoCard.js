import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './Styles/InfoCardStyles'
import LandingViewSwipeComponent from './LandingViewSwipeComponent'
import _ from 'lodash'

const Dot = props => {
  return (
    <View
      style={[
        props.style,
        {
          backgroundColor: props.active ? '#4265ea' : '#d8d8d8'
        }
      ]}
    />
  )
}

export default class InfoCard extends Component {
  state = {
    currentIndex: 0
  }
  static navigationOptions = {
    header: null
  }

  renderItems = item => <LandingViewSwipeComponent data={item.item} />

  scrollToNext = () => {
    const dataSource = _.get(
      this.props,
      'navigation.state.params.dataSource',
      this.props.dataSource
    )
    if (this.listRef && this.listRef.scrollToIndex) {
      console.tron.log('worked')
      this.listRef.scrollToIndex({
        animated: true,
        index: this.state.currentIndex + 1
      })
      this.setState({
        currentIndex:
          this.state.currentIndex < dataSource.length - 1
            ? ++this.state.currentIndex
            : this.state.currentIndex
      })
    } else {
      console.tron.log('not worked', this.flatRef)
    }
  }

  handleViewableItems = ({ viewableItems }) => {
    this.setState({
      currentIndex: _.get(viewableItems, '0.index', this.state.currentIndex)
    })
  }
  render () {
    const dataSource = _.get(
      this.props,
      'navigation.state.params.dataSource',
      this.props.dataSource
    )
    console.tron.log('DS::', dataSource)
    return (
      <View
        style={styles.container}
      >
        <View style={styles.secondaryView}>
          <FlatList
            ref={ref => {
              this.listRef = ref
            }}
            data={dataSource}
            renderItem={item => this.renderItems(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={styles.flatList}
            onViewableItemsChanged={this.handleViewableItems}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 70
            }}

            // initialScrollIndex={width}
            // initialNumToRender={3}
          />
          <View>
            <View style={styles.dots}>
              {dataSource.map((data, index) => (
                <Dot
                  style={styles.dot}
                  active={index === this.state.currentIndex}
                />
              ))}
            </View>
            <View style={styles.buttonsView}>
              {this.state.currentIndex === dataSource.length - 1 ? (
                <TouchableOpacity
                  style={styles.loginOrSignUpButton}
                  onPress={() => {
                    this.props.navigation.navigate('LandingView')
                  }}
                >
                  <Text style={styles.loginButtonText}>LOGIN or SIGNUP</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.roundButton}
                  onPress={this.scrollToNext}
                >
                  <Text style={styles.buttonText}>→</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
