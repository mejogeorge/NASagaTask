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
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flatList: {
    flex: 1
  },
  image: {
    aspectRatio: 237 / 168,
    width: width - 124,
    backgroundColor: 'grey'
  },
  primaryText: {
    fontSize: 16,
    color: 'rgb(98, 98, 98)',
    marginBottom: 4,
    width: 237,
    textAlign: 'center',
    paddingTop: 10
  },
  secondaryText: {
    fontSize: 16,
    color: 'rgb(28, 28, 28)',
    width: 237,
    textAlign: 'center',
    marginBottom: 38
  }
})
