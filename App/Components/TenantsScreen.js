import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './Styles/TenantsScereenStyles'

export default class TenantsScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.secondaryView}>
          <Image
            source={{
              uri:
                'https://image.freepik.com/free-photo/abstract-luxury-clear-yellow-wall-well-use-as-backdrop-background-layout_1258-207.jpg'
            }}
            style={styles.image}
          />
          <Text style={styles.primaryText}>Need good tenants?</Text>
          <Text style={styles.secondaryText}>
            Decide by seeing what previous owners are saying about them!
          </Text>
          <TouchableOpacity
            style={styles.roundButton}
            onPress={this.props.onClick}
          >
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
