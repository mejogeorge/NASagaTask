import { StyleSheet } from 'react-native'
// import { borderRadius } from 'polished'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(22, 29, 50)',
    alignItems: 'center',
    paddingTop: 65,
    paddingLeft: 12,
    paddingRight: 12
  },
  secondaryView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', // 'rgb(22, 29, 50)'
    paddingTop: 49,
    paddingBottom: 30,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
    marginBottom: 65
  },
  flatList: {
    flex: 1
  },
  image: {
    flex: 1,
    width: 238,
    height: 168,
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
    textAlign: 'center',
    marginBottom: 140
  },
  roundButton: {
    height: 48,
    width: 48,
    backgroundColor: 'rgb(53, 86, 202)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48 / 2
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})
// 22,29,50
