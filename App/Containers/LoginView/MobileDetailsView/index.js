import React, { Component } from 'react'
import { Text, Alert} from 'react-native'
import { styles } from './styles'
import { View } from 'react-native-animatable'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import I18n from 'react-native-i18n'
import { validateNumber } from '@Lib/validationHelper'

export default class MobileDetailsView extends Component {
  validateAndProceed = () => {
    const validation = validateNumber(this.phoneNumber, 10)
    console.tron.log('validateAndProceed called', validation)

    if (validation.success) {
      this.props.onButtonClick(this.phoneNumber)
      console.tron.log('PhoneNumber Validation succes ', validation.errorMessage)
    } else {
      console.tron.log('PhoneNumber Validation Failed ', validation.errorMessage)
      Alert.alert('Invalid Mobile Number', validation.errorMessage)
    }
  }

  render () {
    return (
      <View>
        <View style={styles.mobileNumberContainer}>
          <View style={styles.contryCode}>
            <Text style={styles.countryCodeText}>+91 ▼</Text>
          </View>
          <InputBox
            placeHoldertext={I18n.t('loginOrSignUpView.mobileNumber')}
            onChange={text => {
              this.phoneNumber = text
            }}
            textLimit={10}
            autoFocus
            keyboardType='number-pad'
          />
        </View>
        <BarButton
          buttonText={I18n.t('loginOrSignUpView.continue')}
          // radius={{ borderRadius: 4 }}
          buttonAction={this.validateAndProceed}
        />
        <Text style={styles.mobileViewText}>
          {I18n.t('loginOrSignUpView.agreeAndContinue')}
          <Text style={styles.termAndConditionText}>{I18n.t('loginOrSignUpView.termsAndCondition')}</Text>
        </Text>
      </View>
    )
  }
  s
}
