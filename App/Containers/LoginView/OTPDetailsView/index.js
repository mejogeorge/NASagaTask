import React, { Component } from 'react'
import { Text, Keyboard } from 'react-native'
import { styles } from './styles'
import { View } from 'react-native-animatable'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import I18n from 'react-native-i18n'
import { validatePhoneNumber } from '../../../Helper/validationHelper'
let otp = ''
export default class OTPDetailsView extends Component {
  validateAndProceed = () => {
    const isValid = validatePhoneNumber(otp, 'OTP')
    console.tron.log('validateAndProceed called', isValid)
    if (isValid.success) {
      this.props.onButtonClick(otp)
      console.tron.log('otp Validation succes ', isValid.errorMessage)
    } else {
      console.tron.log('otp Validation Failed ', isValid.errorMessage)
    }
  }
  componentDidMount () {
    Keyboard.dismiss()
  }
  render () {
    return (
      <View>
        <Text style={styles.otpVerifyInfoText}>
          {I18n.t('loginOrSignUpView.autoVarifyMobileNumber')}
        </Text>
        <View style={styles.otpTextBoxView}>
          <InputBox
            placeHoldertext={I18n.t('loginOrSignUpView.otp')}
            onChange={text => {
              otp = text
            }}
            keyboardType='number-pad'
            textLimit={6}
            autoFocus
          />
        </View>
        <View style={styles.VerifyButtonView}>
          <BarButton
            buttonText={I18n.t('loginOrSignUpView.verify')}
            radius={{ borderRadius: 4 }}
            buttonAction={this.validateAndProceed}
          />
        </View>
      </View>
    )
  }
}
