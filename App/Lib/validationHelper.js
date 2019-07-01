import I18n from 'react-native-i18n'
// for validating phone number
// 1, will valiate phone number count
// 2, will validte non-digit char
// retrurn object with error-msg && failed/success
// error-message = NON-DIGIT , LESS-COUNT
export const validateNumber = (text, exactCount = 10) => {
  const isDigitOnlyPattern = RegExp('[^0-9]+')

  if (isDigitOnlyPattern.test(text)) {
    return {
      errorStatus: 'NON-DIGIT',
      errorMessage: exactCount === 6 ? I18n.t('loginOrSignUpView.pleaseEnterAnOTP') : I18n.t('loginOrSignUpView.pleaseEnterANumber'),
      failed: true
    }
  }

  if (text.length < exactCount) {
    return {
      errorStatus: 'LESS-COUNT',
      errorMessage: exactCount === 6 ? I18n.t('loginOrSignUpView.pleaseEnter6DigitOTP') : I18n.t('loginOrSignUpView.pleaseEnter10DigitNumber'),
      failed: true
    }
  }

  if (text.length > exactCount) {
    return {
      errorStatus: 'COUNT-EXCEEDED',
      errorMessage: exactCount === 6 ? I18n.t('loginOrSignUpView.pleaseEnter6DigitOTP') : I18n.t('loginOrSignUpView.pleaseEnter10DigitNumber'),
      failed: true
    }
  }

  return {
    success: true,
    failed: false
  }
}
