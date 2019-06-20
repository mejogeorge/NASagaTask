import React, { Component } from 'react'
import { FlatList, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Card from '../Components/Card'
import LoaderView from '../Components/LoaderView'
import Actions from '../Redux/HomeRedux'
// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/HomeListStyle'
import { View } from 'react-native-animatable'

let timer = null

class HomeList extends Component {
  search = false
  componentDidMount () {
    this.props.fetchDetails()
  }

  renderItems = data => {
    return (
      // calling action af people-id with id
      <TouchableOpacity
        onPress={() => this.props.peopleId(this.props.personId)}
      >
        <Card
          name={data.item.name}
          age={data.item.gender}
          height={data.item.height}
        />
      </TouchableOpacity>
    )
  }
  renderFooterView = () => {
    console.tron.log('loader view', this.props.isLoading)
    if (this.props.isLoading) {
      return <LoaderView />
    }
    return null
  }
  selectDataSource = () => {
    if (this.search) {
      // this.props.iSsearching
      console.tron.log('serach result data----- ', this.props.searchData)
      return this.props.searchData
    }

    return this.props.resultData
  }
  onSearch = text => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.tron.log('onchangeText', text)
      // this.props.fetchDetails('search', text)
      if (text) {
        this.search = true
        this.props.serachRequest(text)
      } else {
        this.search = false
        this.props.fetchDetails('initial')
      }
    }, 500)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder={this.props.nextUrl}
            onChangeText={this.onSearch}
          />
        </View>
        <View style={styles.listView}>
          <FlatList
            data={this.search ? this.props.searchData : this.props.resultData} // {this.props.resultData}
            renderItem={this.renderItems}
            onEndReached={this.props.fetchDetails}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this.renderFooterView}
            extraData={this.props.isLoading}
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
    searchData: state.home.searchDataSource,
    isOnNextCall: state.home.isOnNextCall,
    isLoading: state.home.isLoading,
    nextUrl: state.home.nextUrl,
    personId: state.home.peopleId // subscribing people-id from store
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDetails: () => dispatch(Actions.fetchResultsRequest()),
  serachRequest: text => dispatch(Actions.fetchSearchRequest(text)),
  peopleId: id => dispatch(Actions.storePeopleId(id)) // atction to store people-id
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeList)
