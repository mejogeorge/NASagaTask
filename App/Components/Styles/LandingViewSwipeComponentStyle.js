import { StyleSheet, Dimensions } from 'react-native'
let width = Dimensions.get('window').width
// let height = Dimensions.get('window').height

// function getDimension (input, WorH) {
//   console.tron.log('dynamic values', width)
//   let value = null
//   if (WorH === 'H') {
//     let heightKey = (input / 640) * 100
//     value = (heightKey * height) / 100
//     console.tron.log('dynamic values heightKey', heightKey)
//   }
//   if (WorH === 'W') {
//     let widthKey = (input / 360) * 100
//     value = (widthKey * width) / 100
//     console.tron.log('dynamic values widthKey', widthKey)
//   }
//   console.tron.log('dynamic values', value)
//   return Math.abs(value)
// }

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    alignItems: 'center'
  },
  flatList: {
    flex: 1
  },
  image: {
    aspectRatio: 237 / 168,
    width: width - 124, //
    backgroundColor: 'grey'
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
