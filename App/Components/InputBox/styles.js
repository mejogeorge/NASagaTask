import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  textInput: {
    // width: '100%',
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 19,
    backgroundColor: 'rgb(246, 246, 246)',
    textAlign: 'left',
    fontSize: 16,
    color: '#262626'
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
  conatiner: {
    flexDirection: 'row',
    width: '100%'
  }
})
