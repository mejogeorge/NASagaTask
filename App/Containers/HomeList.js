import React, { Component } from 'react'
import { FlatList, TextInput } from 'react-native'
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
  componentDidMount () {
    this.props.fetchDetails('initial')
  }

  renderItems = data => {
    // console.tron.log('redner items', data.item.name)
    return (
      <Card
        name={data.item.name}
        age={data.item.gender}
        height={data.item.height}
      />
    )
  }
  renderFooterView = () => {
    if (this.props.nextUrl) {
      return <LoaderView />
    } else {
      return null
    }
  }

  onSearch = text => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.tron.log('debouncer', text)
      this.props.fetchDetails('search', text)
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
        {!this.props.nextUrl && this.props.isLoading ? (
          <LoaderView />
        ) : (
          <View style={styles.listView}>
            <FlatList
              data={this.props.resultData}
              renderItem={this.renderItems}
              onEndReached={() => {
                this.props.fetchDetails(this.props.nextUrl)
              }}
              onEndReachedThreshold={0.5}
              ListFooterComponent={this.renderFooterView}
            />
          </View>
        )}
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    // ...redux state to props here
    page: state.home.pageNumber || '',
    resultData: state.home.dataSource,
    isOnNextCall: state.home.isOnNextCall,
    isLoading: state.home.isLoading,
    nextUrl: state.home.nextUrl
  }
}

const mapDispatchToProps = (dispatch, state) => ({
  fetchDetails: (nextUrl, query) => {
    if (nextUrl === 'search' && !query) {
      nextUrl = 'initial'
    }
    if (nextUrl === 'search') {
      dispatch(
        Actions.fetchResultsRequest(
          'https://swapi.co/api/people/?search=' + query,
          true
        )
      )
    } else if (nextUrl === 'initial') {
      dispatch(Actions.fetchResultsRequest('', true))
    } else if (nextUrl) {
      console.tron.log('nextUrl', nextUrl)
      dispatch(Actions.fetchResultsRequest(nextUrl))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeList)
