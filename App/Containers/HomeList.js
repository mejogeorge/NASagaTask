import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import Card from '../Components/Card'
import LoaderView from '../Components/LoaderView'
import Actions from '../Redux/HomeRedux'
// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/HomeListStyle'
import { View } from 'react-native-animatable'
class HomeList extends Component {
  componentDidMount () {
    this.props.fetchDetails()
  }

  renderItems = data => {
    // console.tron.log('redner items', data.item.name)
    return (
      <Card
        name={data.item.name}
        age={data.item.age}
        height={data.item.height}
      />
    )
  }
  renderFooterView = () => {
    // if (this.props.home.isOnNextCall) {
    //   return (
    //     <LoaderView />
    //   )
    // } else {
    //   return null
    // }
    return <LoaderView />
  }

  render () {
    // if (store.isLoading) {
    //   return (
    //     <LoaderView />
    //   )
    // } else {}
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          {/* <TextInput placeholder={this.props.page.toString} /> */}
        </View>
        <View style={styles.listView}>
          <FlatList
            data={this.props.resultData}
            renderItem={this.renderItems}
            ListFooterComponent={this.renderFooterView}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
    page: state.home.pageNumber || '',
    resultData: state.home.dataSource,
    isOnNextCall: state.home.isOnNextCall
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDetails: () => dispatch(Actions.fetchResultsRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeList)
