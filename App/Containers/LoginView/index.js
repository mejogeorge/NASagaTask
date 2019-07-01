import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import I18n from 'react-native-i18n'
import MobileDetailsView from './MobileDetailsView'
import OTPDetailsView from './OTPDetailsView'
import SignUpDetailsView from './SignUpDetailsView'

const radioListData = [
  { id: 0, active: true, text: I18n.t('loginOrSignUpView.Owner') },
  { id: 1, active: false, text: I18n.t('loginOrSignUpView.tenanat') },
  {
    id: 2,
    active: false,
    text: I18n.t('loginOrSignUpView.bothOwnerAndTenant')
  }
]
const signupObject = {
  phoneNumber: '',
  fullName: ''
}
export default class LoginView extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    currentView: 'MobileView',
    radioButtonSelectedId: 0
  }

  radioButtonTapped = id => {
    this.setState({ activeId: id })
    // radioListData = radioListData.map((data, index) => {
    //   if (index === id) {
    //     data.active = true
    //   } else {
    //     data.active = false
    //   }
    //   return data
    // })
  }

  goToOTPDetailsView = phoneNumber => {
    console.tron.log('phoneNumber from loginView', phoneNumber)
    signupObject.phoneNumber = phoneNumber
    this.setState({ currentView: 'OPTView' })
  }

  goToSignUpView = phoneNumber => {
    console.tron.log('phoneNumber from loginView', phoneNumber)
    signupObject.phoneNumber = phoneNumber
    this.setState({ currentView: 'SignUpView' })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.secondaryView}>
          {this.state.currentView === 'MobileView' ? (
            <MobileDetailsView
              onButtonClick={this.goToOTPDetailsView}
              validate={this.isValidPHoneNUmber}
            />
          ) : null}

          {this.state.currentView === 'OPTView' ? (
            <OTPDetailsView onButtonClick={this.goToSignUpView} />
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
