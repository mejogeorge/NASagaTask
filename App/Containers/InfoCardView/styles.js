import { StyleSheet, Dimensions } from 'react-native'
const wholeWidth = Dimensions.get('window').width
const wholeHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22, 29, 50)',
    alignItems: 'center',
    paddingTop: 65,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 65,
    justifyContent: 'center'
  },
  secondaryView: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 49,
    paddingBottom: 24,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  flatList: {
    flex: 1
  },

  buttonText: {
    color: 'white',
    fontSize: 20
  },
  buttonsView: {
    flex: 1,
    width: wholeWidth - 112,
    maxHeight: (52 / 640) * wholeHeight,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dots: {
    height: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 38,
    marginBottom: 16
  },
  dot: {
    width: 8,
    height: 8,
    margin: 2,
    borderRadius: 4,
    backgroundColor: '#d8d8d8'
  },
  dotActive: {
    backgroundColor: '#4265ea'
  }
})
