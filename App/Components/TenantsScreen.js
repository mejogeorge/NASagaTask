import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './Styles/TenantsScereenStyles'
import LandingViewSwipeComponent from './LandingViewSwipeComponent'
export default class TenantsScreen extends Component {
  state = {
    currentIndex: 0
  }
  width = 200
  static navigationOptions = {
    header: null
  }

  next = () => {
    this.scrollToIndex()
  }
  renderItems = () => <LandingViewSwipeComponent />

  scrollToIndex = () => {
    console.tron.log('with ====', this.width)
    if (this.listRef && this.listRef.scrollToIndex) {
      console.tron.log('worked')
      this.listRef.scrollToIndex({
        animated: true,
        index: this.state.currentIndex + 1
      })
      this.setState({
        currentIndex:
          this.state.currentIndex < this.props.dataSource.length - 1
            ? ++this.state.currentIndex
            : this.state.currentIndex
      })
    } else {
      console.tron.log('not worked', this.flatRef)
    }
  }
  getItemLayout = (data, index) => {
    return {
      length: this.width,
      offset: this.width * index,
      index
    }
  }
  setWidth = event => {
    console.tron.log('flat width=====', event, event.nativeEvent.layout.width)

    this.width = event.nativeEvent.layout.width
  }

  Dot = ({ index }) => {
    console.tron.log('index', this.state.currentIndex)
    const active = index === this.state.currentIndex
    return (
      <View
        style={{
          ...styles.dot,
          backgroundColor: active ? '#4265ea' : '#d8d8d8'
        }}
      />
    )
  }

  render () {
    return (
      <View style={styles.secondaryView}>
        <FlatList
          onLayout={event => this.setWidth(event)}
          ref={ref => {
            this.listRef = ref
          }}
          data={this.props.dataSource}
          renderItem={this.renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={this.getItemLayout}
          pagingEnabled
          style={styles.flatList}
          // initialScrollIndex={width}
          // initialNumToRender={3}
        />
        <View>
          <View style={styles.dots}>
            {this.props.dataSource.map((data, index) => (
              <this.Dot style={styles.dot} index={index} />
            ))}
          </View>
          {this.state.currentIndex === this.props.dataSource.length - 1 ? (
            <TouchableOpacity
              style={styles.loginOrSignUpButton}
              onPress={() => this.props.navigation.navigate('LandingView')}
            >
              <Text style={styles.loginButtonText}>LOGIN or SIGNUP</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.roundButton} onPress={this.next}>
              <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}
