import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import I18n from 'react-native-i18n'
import MobileDetailsView from '@Components/MobileDetailsView'
import OTPDetailsView from '@Components/OTPDetailsView'
import SignUpDetailsView from '@Components/SignUpDetailsView'

let radioListData = [
  { id: 0, active: true, text: I18n.t('loginOrSignUpView.Owner') },
  { id: 1, active: false, text: I18n.t('loginOrSignUpView.tenanat') },
  {
    id: 2,
    active: false,
    text: I18n.t('loginOrSignUpView.bothOwnerAndTenant')
  }
]

export default class RoundButton extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    currentView: 'MobileView',
    radioButtonSelectedId: 0
  }

  radioButtonTapped = id => {
    console.tron.log('radio 3rd Stage', id)
    radioListData = radioListData.map((data, index) => {
      console.tron.log('radio button id  & index', id, index)
      if (index === id) {
        data.active = true
      } else {
        data.active = false
      }
      return data
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.secondaryView}>
          {this.state.currentView === 'MobileView' ? (
            <MobileDetailsView
              onButtonClick={() => this.setState({ currentView: 'OPTView' })}
            />
          ) : null}

          {this.state.currentView === 'OPTView' ? (
            <OTPDetailsView
              onButtonClick={() => this.setState({ currentView: 'SignUpView' })}
            />
          ) : null}
          {this.state.currentView === 'SignUpView' ? (
            <SignUpDetailsView
              radioData={radioListData}
              radioButtonTapped={this.radioButtonTapped}
              changeButtonSelectedId={id => {
                console.tron.log('radio button 2nd stage', id)
                this.setState({
                  radioButtonSelectedId: id
                })
              }}
            />
          ) : null}
        </View>
      </View>
    )
  }
}
