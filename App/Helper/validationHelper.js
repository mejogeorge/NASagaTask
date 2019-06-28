// for validating phone number
// 1, will valiate phone number count
// 2, will validte non-digit char
// retrurn object with error-msg && failed/success
// error-message = NON-DIGIT , LESS-COUNT
export const validatePhoneNumber = (text, type) => {
  exactCount = type === 'OTP' ? 6 : 10
  console.tron.log('for validating phone number', text)
  let message = {
    errorMessage: null,
    success: null,
    failed: null
  }
  const isDigitOnlyPattern = RegExp('[^0-9]+')
  if (isDigitOnlyPattern.test(text)) {
    console.tron.log('regex failed with digit', text)
    message.errorMessage = 'NON-DIGIT'
    message.failed = true
    message.success = false
    return message
  } else if (text.length < exactCount) {
    console.tron.log('10 digit required', text)
    message.errorMessage = 'LESS-COUNT'
    message.failed = true
    message.success = false
    return message
  } else if (text.length > exactCount) {
    message.errorMessage = 'COUNT-EXCEEDED'
    message.failed = true
    message.success = false
    return message
  } else {
    message.success = true
    message.failed = false
    return message
  }
}

// export const validateOTP = text => {
//   console.tron.log('for validating otp number', text)
//   let message = {
//     errorMessage: null,
//     success: null,
//     failed: null
//   }
//   const isDigitOnlyPattern = RegExp('[^0-9]+')
//   if (isDigitOnlyPattern.test(text)) {
//     console.tron.log('regex failed with digit', text)
//     message.errorMessage = 'NON-DIGIT'
//     message.failed = true
//     message.success = false
//     return message
//   } else if (text.length < 6) {
//     console.tron.log('10 digit required', text)
//     message.errorMessage = 'LESS-COUNT'
//     message.failed = true
//     message.success = false
//     return message
//   } else if (text.length > 6) {
//     message.errorMessage = 'COUNT-EXCEEDED'
//     message.failed = true
//     message.success = false
//     return message
//   } else {
//     message.success = true
//     message.failed = false
//     return message
//   }
// }
