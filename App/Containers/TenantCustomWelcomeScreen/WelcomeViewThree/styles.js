import { StyleSheet, Dimensions } from 'react-native'
let wholeWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: wholeWidth - 112
  },
  heading: {
    color: '#282828',
    fontSize: 20,
    marginBottom: 20
  },
  text: {
    // flex: 1,
    color: '#7e7e7e',
    fontSize: 14,
    textAlign: 'center'
  },
  listView: {
    justifyContent: 'space-evenly',
    marginBottom: 19
  }
})
