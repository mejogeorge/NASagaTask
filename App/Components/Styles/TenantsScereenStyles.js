import { StyleSheet } from 'react-native'
// import { borderRadius } from 'polished'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22, 29, 50)',
    alignItems: 'center',
    paddingTop: 65,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 65
  },
  secondaryView: {
    backgroundColor: 'white',
    alignItems: 'center', // 'rgb(22, 29, 50)'
    paddingTop: 49,
    paddingBottom: 30,
    borderRadius: 10,
    justifyContent: 'space-between',
    // height: 510
    // maxHeight: 510

  },
  flatList: {
    flex: 1,
    maxHeight: 400
  },
  roundButton: {
    height: 48,
    width: 48,
    backgroundColor: 'rgb(53, 86, 202)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    // marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  loginOrSignUpButton: {
    minWidth: 100,
    minHeight: 50,
    marginTop: 39,
    marginBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginLeft: 44,
    marginRight: 44,
    backgroundColor: 'rgb(53, 86, 202)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white'
  },
  dots: {
    height: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 38,
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
// 22,29,50ß
