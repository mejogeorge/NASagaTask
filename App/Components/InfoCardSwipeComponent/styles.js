import { StyleSheet, Dimensions } from 'react-native'
let width = Dimensions.get('window').width
export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  flatList: {
    flex: 1
  },
  image: {
    aspectRatio: 237 / 168,
    width: width - 124,
    backgroundColor: 'grey'
  },
  titleText: {
    fontSize: 20,
    color: '#282828',
    textAlign: 'center',
    marginBottom: 20
  },
  primaryText: {
    fontSize: 16,
    color: '#989898',
    marginBottom: 4,
    width: 237,
    textAlign: 'center',
    paddingTop: 10
  },
  secondaryText: {
    fontSize: 16,
    color: '#282828',
    width: 237,
    textAlign: 'center',
    marginBottom: 38
  }

})
