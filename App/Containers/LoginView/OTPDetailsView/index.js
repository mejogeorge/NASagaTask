import React, { Component } from 'react'
import { Text } from 'react-native'
import { styles } from './styles'
import { View } from 'react-native-animatable'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import I18n from 'react-native-i18n'

export default class OTPDetailsView extends Component {
  render () {
    return (
      <View>
        <Text style={styles.otpVerifyInfoText}>
          {I18n.t('loginOrSignUpView.autoVarifyMobileNumber')}
        </Text>
        <View style={styles.otpTextBoxView}>
          <InputBox
            placeHoldertext={I18n.t('loginOrSignUpView.otp')}
            onChange={() => {}}
          />
        </View>
        <View style={styles.VerifyButtonView}>
          <BarButton
            buttonText={I18n.t('loginOrSignUpView.verify')}
            radius={{ borderRadius: 4 }}
            buttonAction={this.props.onButtonClick}
          />
        </View>
      </View>
    )
  }
}
