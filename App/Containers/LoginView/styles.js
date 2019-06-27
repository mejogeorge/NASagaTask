import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(16 , 23, 45)',
    paddingTop: 44,
    paddingBottom: 207,
    paddingLeft: 12,
    paddingRight: 12
  },
  secondaryView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 30,
    paddingTop: 24,
    marginBottom: 123
  },
  mobileNumberContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  contryCode: {
    backgroundColor: 'rgb(246 , 246, 246)',
    marginRight: 12,
    height: 54,
    width: 84,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contryCodeText: {
    color: '#262626',
    fontSize: 16
  },
  mobileViewText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#989898',
    marginTop: 20,
    marginBottom: 2
  },
  otpTextBoxView: {
    marginBottom: 30
  },
  VerifyButtonView: {
    marginBottom: 36,
    height: 54
  },
  otpVerifyInfoText: {
    marginBottom: 16,
    color: '#535353',
    textAlign: 'center'
  },
  nameViewContainer: {
    marginBottom: 30,
    marginTop: 12
  },
  detailsViewText: {
    color: '#000000',
    marginBottom: 8,
    fontSize: 16
  },
  signUpButtonView: {
    marginTop: 43
  }
})
