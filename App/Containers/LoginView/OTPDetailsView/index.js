import React, { Component } from 'react'
import { Text, Alert, View } from 'react-native'
import { styles } from './styles'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import I18n from 'react-native-i18n'
import { validateNumber } from '@Lib/validationHelper'
let otp = ''
export default class OTPDetailsView extends Component {
  validateAndProceed = () => {
    const validation = validateNumber(otp, 6)
    if (validation.success) {
      this.props.onButtonClick(otp)
      console.tron.log('otp Validation succes ', validation.errorMessage)
    } else {
      console.tron.log('otp Validation Failed ', validation.errorMessage)
      Alert.alert('Wrong OTP', validation.errorMessage)
    }
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
            buttonAction={this.validateAndProceed}
          />
        </View>
      </View>
    )
  }
}
