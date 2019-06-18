import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 3,
    marginLeft: 2,
    marginRight: 2,
    borderBottomWidth: 1,
    borderColor: '#EEE'
  },
  subView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between'
  }
})
