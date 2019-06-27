import React, { Component } from 'react'
import { Text } from 'react-native'
import { styles } from './styles'
import { View } from 'react-native-animatable'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import I18n from 'react-native-i18n'

export default class SignUpDetailsView extends Component {
  render () {
    return (
      <View>
        <View style={styles.mobileNumberContainer}>
          <View style={styles.contryCode}>
            <Text style={styles.contryCodeText}>+91 ▼</Text>
          </View>
          <InputBox placeHoldertext={I18n.t('loginOrSignUpView.mobileNumber')} onChange={() => {}} />
        </View>
        <BarButton
          buttonText={I18n.t('loginOrSignUpView.continue')}
          radius={{ borderRadius: 4 }}
          buttonAction={this.props.onButtonClick}
        />
        <Text style={styles.mobileViewText}>
          {I18n.t('loginOrSignUpView.agreeAndContinue')}
        </Text>
      </View>
    )
  }
}
