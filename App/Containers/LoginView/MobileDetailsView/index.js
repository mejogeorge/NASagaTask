import React, { Component } from 'react'
import { Text } from 'react-native'
import { styles } from './styles'
import { View } from 'react-native-animatable'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import I18n from 'react-native-i18n'
import { validatePhoneNumber } from '../../../Helper/validationHelper'
let phoneNumber = ''
export default class MobileDetailsView extends Component {
  validateAndProceed = () => {
    const isValid = validatePhoneNumber(phoneNumber, 'PHONE')
    console.tron.log('validateAndProceed called', isValid)

    if (isValid.success) {
      this.props.onButtonClick(phoneNumber)
      console.tron.log('PhoneNumber Validation succes ', isValid.errorMessage)
    } else {
      console.tron.log('PhoneNumber Validation Failed ', isValid.errorMessage)
    }
  }

  render () {
    return (
      <View>
        <View style={styles.mobileNumberContainer}>
          <View style={styles.contryCode}>
            <Text style={styles.contryCodeText}>+91 ▼</Text>
          </View>
          <InputBox
            placeHoldertext={I18n.t('loginOrSignUpView.mobileNumber')}
            onChange={text => {
              phoneNumber = text
            }}
            textLimit={10}
            autoFocus
            keyboardType='number-pad'
          />
        </View>
        <BarButton
          buttonText={I18n.t('loginOrSignUpView.continue')}
          radius={{ borderRadius: 4 }}
          buttonAction={() => this.validateAndProceed()}
        />
        <Text style={styles.mobileViewText}>
          {I18n.t('loginOrSignUpView.agreeAndContinue')}
        </Text>
      </View>
    )
  }
  s
}
