import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    alignItems: 'center' // 'rgb(22, 29, 50)'
  },
  flatList: {
    flex: 1
    // width: getDimension(20)
  },
  image: {
    width: 251, // getDimension(238), // how to give exact width of  flatLIsts
    height: 168, // getDimension(168), //
    backgroundColor: 'grey'
    // marginTop: 90
  },
  primaryText: {
    fontSize: 16,
    color: 'rgb(98, 98, 98)',
    marginTop: 71,
    marginBottom: 4,
    width: 237,
    textAlign: 'center'
  },
  secondaryText: {
    fontSize: 16,
    color: 'rgb(28, 28, 28)',
    width: 237,
    height: 52,
    textAlign: 'center'
  }
})
// 22,29,50
