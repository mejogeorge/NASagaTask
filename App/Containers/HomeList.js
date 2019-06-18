import React, { Component } from 'react'
import { FlatList, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Card from '../Components/Card'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/HomeListStyle'
import { View } from 'react-native-animatable'
class HomeList extends Component {
  //
  renderItems = (data) => <Card
    name={data.item.title}
    age={data.item.description}
    height='172'
  />

  render () {
    const dataObjects = [
      { title: 'First Title', description: 'First Description' },
      { title: 'Second Title', description: 'Second Description' },
      { title: 'Third Title', description: 'Third Description' },
      { title: 'Fourth Title', description: 'Fourth Description' },
      { title: 'Fifth Title', description: 'Fifth Description' },
      { title: 'Sixth Title', description: 'Sixth Description' },
      { title: 'Seventh Title', description: 'Seventh Description' },
      { title: 'Eighth Title', description: 'Eighth Description' },
      { title: 'Ninth Title', description: 'Ninth Description' },
      { title: 'Tenth Title', description: 'Tenth Description' },
      { title: 'Eleventh Title', description: 'Eleventh Description' },
      { title: '12th Title', description: '12th Description' },
      { title: '13th Title', description: '13th Description' },
      { title: '14th Title', description: '14th Description' },
      { title: '15th Title', description: '15th Description' },
      { title: '16th Title', description: '16th Description' },
      { title: '17th Title', description: '17th Description' },
      { title: '18th Title', description: '18th Description' },
      { title: '19th Title', description: '19th Description' },
      { title: '20th Title', description: '20th Description' },
      { title: 'BLACKJACK!', description: 'BLACKJACK! Description' }
    ]
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder='type to search' />
        </View>
        <View style={styles.listView}>
          <FlatList
            data={dataObjects}
            renderItem={this.renderItems}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList)
